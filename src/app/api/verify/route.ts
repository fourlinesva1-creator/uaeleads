import { NextRequest, NextResponse } from 'next/server';

const SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY!;
const SCORE_THRESHOLD = 0.3;

// Rate limiting: max 5 requests per IP per 10 minutes
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10 minutes

// In-memory store — resets on server restart.
// For high-traffic production on Vercel, replace with Upstash Redis.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getClientIp(req: NextRequest): string {
    return (
        req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
        req.headers.get('x-real-ip') ||
        'unknown'
    );
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
    const now = Date.now();
    const entry = rateLimitMap.get(ip);

    if (!entry || now > entry.resetAt) {
        rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
        return { allowed: true };
    }

    if (entry.count >= RATE_LIMIT_MAX) {
        return {
            allowed: false,
            retryAfter: Math.ceil((entry.resetAt - now) / 1000),
        };
    }

    entry.count++;
    return { allowed: true };
}

export async function POST(req: NextRequest) {
    const ip = getClientIp(req);

    // Rate limit check
    const rateLimit = checkRateLimit(ip);
    if (!rateLimit.allowed) {
        return NextResponse.json(
            { success: false, error: 'Too many requests. Please wait a few minutes and try again.' },
            { status: 429, headers: { 'Retry-After': String(rateLimit.retryAfter) } }
        );
    }

    // Parse body
    let token: string | undefined;
    try {
        const body = await req.json();
        token = body.token;
    } catch {
        return NextResponse.json({ success: false, error: 'Invalid request' }, { status: 400 });
    }

    if (!token) {
        return NextResponse.json({ success: false, error: 'Missing reCAPTCHA token' }, { status: 400 });
    }

    // Verify with Google
    try {
        const verifyRes = await fetch(
            `https://www.google.com/recaptcha/api/siteverify?secret=${SECRET_KEY}&response=${token}`,
            { method: 'POST' }
        );
        const data = await verifyRes.json();

        if (!data.success || data.score < SCORE_THRESHOLD) {
            return NextResponse.json(
                { success: false, error: 'Security check failed. Please try again.' },
                { status: 403 }
            );
        }

        return NextResponse.json({ success: true, score: data.score });
    } catch {
        return NextResponse.json(
            { success: false, error: 'Verification service unavailable. Please try again.' },
            { status: 503 }
        );
    }
}
