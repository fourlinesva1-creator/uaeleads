import { NextRequest, NextResponse } from 'next/server';

const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

export async function POST(req: NextRequest) {
    if (!WEBHOOK_URL) {
        // Not configured — fail silently so the form still works
        return NextResponse.json({ success: false, error: 'Not configured' }, { status: 503 });
    }

    let body: Record<string, unknown>;
    try {
        body = await req.json();
    } catch {
        return NextResponse.json({ success: false, error: 'Invalid body' }, { status: 400 });
    }

    try {
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...body,
                timestamp: new Date().toISOString(),
                source: 'tentnow.ae',
            }),
        });

        return NextResponse.json({ success: true });
    } catch {
        // Don't let a webhook failure surface to the user
        return NextResponse.json({ success: false, error: 'Webhook unreachable' }, { status: 500 });
    }
}
