import { NextRequest, NextResponse } from 'next/server';
import * as z from 'zod';

const WEBHOOK_URL = process.env.GOOGLE_SHEETS_WEBHOOK_URL;

// Leads are small flat objects; anything bigger is junk or abuse.
const MAX_BODY_BYTES = 16 * 1024;

const value = z.union([z.string().max(2000), z.number(), z.boolean(), z.null()]);

// Every form posts a flat object. Keys are short identifiers so they can become sheet columns.
const flatSchema = z
    .record(z.string().regex(/^[A-Za-z][A-Za-z0-9_]{0,39}$/), value)
    .refine((o) => Object.keys(o).length <= 60, 'Too many fields');

const baseSchema = z.looseObject({
    formType: z.enum(['quote', 'callback', 'calculator']),
    formStep: z.enum(['partial', 'complete']).optional(),
});

const calculatorSchema = z.looseObject({
    channel: z.enum(['whatsapp', 'quote', 'callback', 'site-visit']),
    quoteRef: z.string().regex(/^TN-C-\d{6}-[2-9A-HJ-NP-Z]{4}$/),
    locale: z.enum(['en', 'ar']),
    mode: z.enum(['event', 'longterm']),
    estimateLow: z.number().min(0).max(1e9),
    estimateHigh: z.number().min(0).max(1e9),
    shareUrl: z.string().url().max(600),
});

export async function POST(req: NextRequest) {
    if (!WEBHOOK_URL) {
        // Not configured — fail silently so the form still works
        return NextResponse.json({ success: false, error: 'Not configured' }, { status: 503 });
    }

    const declared = Number(req.headers.get('content-length') ?? 0);
    if (declared > MAX_BODY_BYTES) {
        return NextResponse.json({ success: false, error: 'Too large' }, { status: 413 });
    }

    let raw: string;
    try {
        raw = await req.text();
    } catch {
        return NextResponse.json({ success: false, error: 'Invalid body' }, { status: 400 });
    }
    if (raw.length > MAX_BODY_BYTES) {
        return NextResponse.json({ success: false, error: 'Too large' }, { status: 413 });
    }

    let json: unknown;
    try {
        json = JSON.parse(raw);
    } catch {
        return NextResponse.json({ success: false, error: 'Invalid body' }, { status: 400 });
    }

    const parsed = flatSchema.safeParse(json);
    const base = baseSchema.safeParse(json);
    if (
        !parsed.success ||
        !base.success ||
        (base.data.formType === 'calculator' && !calculatorSchema.safeParse(json).success)
    ) {
        return NextResponse.json({ success: false, error: 'Invalid lead' }, { status: 400 });
    }

    try {
        await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ...parsed.data,
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
