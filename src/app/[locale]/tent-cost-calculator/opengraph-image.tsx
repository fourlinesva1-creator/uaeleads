import { ImageResponse } from 'next/og';
import { eventPriceTable } from '@/lib/calculator/tables';

export const alt = 'Tent Rental Cost Calculator UAE — Tent Now';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

// Latin text only: the default OG font has no Arabic glyphs, so both locales share this image.
export default function OgImage() {
    const rows = eventPriceTable().slice(0, 3);
    const n = (x: number) => x.toLocaleString('en-US');
    return new ImageResponse(
        (
            <div style={{ width: '100%', height: '100%', display: 'flex', background: '#101622', color: '#fff', padding: 64, fontFamily: 'sans-serif' }}>
                <div style={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <div style={{ fontSize: 28, letterSpacing: 6, color: '#D4AF37', fontWeight: 700 }}>TENT NOW</div>
                        <div style={{ fontSize: 68, fontWeight: 700, lineHeight: 1.1, marginTop: 24, maxWidth: 560 }}>Tent Rental Cost Calculator</div>
                        <div style={{ fontSize: 30, color: '#9da6b9', marginTop: 20, maxWidth: 560 }}>
                            Instant price range for Dubai, Abu Dhabi and all UAE. Every line itemised.
                        </div>
                    </div>
                    <div style={{ fontSize: 24, color: '#D4AF37' }}>tentnow.ae/tent-cost-calculator</div>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: 440,
                        background: '#1a212e',
                        border: '2px solid #282e39',
                        borderRadius: 32,
                        padding: 36,
                        justifyContent: 'center',
                    }}
                >
                    <div style={{ fontSize: 22, color: '#9da6b9', textTransform: 'uppercase', letterSpacing: 2 }}>Event tent, 2 days</div>
                    {rows.map((r) => (
                        <div key={r.sqm} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #282e39', padding: '18px 0', fontSize: 28 }}>
                            <span>
                                {r.width} × {r.length} m
                            </span>
                            <span style={{ color: '#D4AF37' }}>from AED {n(r.furnished.low)}</span>
                        </div>
                    ))}
                    <div style={{ fontSize: 20, color: '#9da6b9', marginTop: 18 }}>Furnished, before VAT</div>
                </div>
            </div>
        ),
        size,
    );
}
