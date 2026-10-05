# 04 — Lead Capture

> The calculator exists to produce **qualified leads**. A visitor who has set up a tent, size and add-ons
> is warmer than any visitor to the contact form. Every estimate needs one clear next step.

---

## Existing lead system (verified 2026-10-05)

| Piece | Where | Behaviour |
|---|---|---|
| Lead sink | `src/app/api/capture-lead/route.ts` | Forwards JSON to `GOOGLE_SHEETS_WEBHOOK_URL`, adding `timestamp` and `source: 'tentnow.ae'`. Fails silently (503 if not configured) |
| Anti-spam | `hooks/useRecaptcha.ts` + `src/app/api/verify/route.ts` | reCAPTCHA v3 (score 0.3) + **5 requests per IP per 10 minutes**, held in memory |
| Partial capture | `QuoteForm.tsx` | Sends `formStep: 'partial'` once the contact step is valid, before the visitor can leave |
| Handoff | `QuoteForm.tsx` | Opens `wa.me/971501826969` with the message filled in, then goes to `/thank-you` |
| Existing `formType`s | `quote`, `callback` | Add **`calculator`** |
| Email | — | **Not implemented.** SendGrid variables are in `.env.example`, but no code uses them |
| Analytics | — | **Not implemented in `src/`.** GA4/GTM variables exist in `.env.example` only |

---

## Lead journey

```
Visitor sets up a tent ──► sees estimate (NOT behind a form)
        │
        ├─► [Get exact quote on WhatsApp] ── capture(calculator, whatsapp) ──► wa.me + /thank-you
        ├─► [Send me this quote]  ── name + phone (+email) ── capture(partial on valid phone)
        │                                                └─► capture(complete) ──► quote ref + printable quote
        ├─► [Request callback]  ── CallbackModal (setup attached)
        ├─► [Copy share link]   ── no capture; tracked as an event
        └─► [Book site visit]   ── shown only for > 1,000 m² or > 3 months (v2)
```

**Why the estimate isn't behind a form:** hiding the number pushes visitors back to Google and
kills the page's ranking signals (time on page, return visits). The detailed quote, the printable
version and the exact price are what's worth trading a phone number for.

---

## Payload sent to `/api/capture-lead`

```ts
{
  formType: 'calculator',
  formStep: 'partial' | 'complete',
  channel: 'whatsapp' | 'quote' | 'callback' | 'site-visit',
  quoteRef: 'TN-C-261005-4F7Q',        // date + random string, also printed on the quote
  locale: 'en' | 'ar',
  name, phone, email?, company?,
  mode: 'event' | 'longterm',
  useCase: 'home-majlis' | 'corporate-iftar' | ...,
  emirate, eventDate?, days?, months?,
  guests?, seating?, sizeM2, dimensions,  // "10x20"
  sides, addOns: string[], furniture: Record<string, number>,
  estimateLow, estimateHigh, vat,       // AED
  shareUrl,                             // full URL with the setup, to reopen it
  ratesVersion,                         // RATES_UPDATED, so sales knows which prices were shown
  leadScore,                            // see below
  utm_source?, utm_medium?, utm_campaign?, referrer?
}
```

Google Sheet: add a **`Calculator`** tab, or columns for the fields above. A complete lead must reopen
the exact setup from `shareUrl`.

## Lead score (for sales prioritisation)

| Signal | Points |
|---|---|
| Estimate ≥ AED 50,000 | +3 · ≥ 15,000: +2 · ≥ 5,000: +1 |
| Event date within 30 days | +2 |
| Long-term ≥ 3 months | +2 |
| Company name given | +1 |
| Email given | +1 |

Show `hot` (≥ 5) / `warm` (3–4) / `cold` in the sheet. Hot leads go first in the WhatsApp follow-up.

## WhatsApp message template

```
*Tent Cost Estimate — Tent Now* (Ref TN-C-…)
Use: Corporate iftar · Dubai · 12 Mar 2027 · 2 days
Tent: 10×20 m (200 m²), 3 sides closed
Add-ons: Flooring, Carpet, Lining, Lighting, AC
Furniture: 150 chairs, 11 tables
Estimate: AED 18,450 – 20,650 + VAT
Setup: https://www.tentnow.ae/en/tent-cost-calculator?c=…
```

Arabic version comes from `ar.json`. URL-encode it with `encodeURIComponent`, **not** the
hand-written `%0A` concatenation in `QuoteForm`.

---

## Anti-spam and reliability

- Reuse the honeypot field + reCAPTCHA v3 + `/api/verify` exactly as `QuoteForm` does.
- **Send the lead first, then verify**: the capture call must fire before reCAPTCHA or WhatsApp can fail (current pattern).
- The rate limit is in memory and resets on each Vercel serverless instance. Fine for now. Upstash is the upgrade path if spam appears.
- `/api/capture-lead` should check the payload (zod) and cap its size. Today it forwards any JSON as-is.

## Tracking (needs new wiring)

GA4/GTM isn't loaded anywhere in `src/` yet. When it's added, send these events:

| Event | When |
|---|---|
| `calc_start` | First change to any input |
| `calc_estimate_view` | Results panel first shows a number |
| `calc_mode_switch`, `calc_preset_select` | |
| `calc_lead_whatsapp` / `calc_lead_quote` / `calc_lead_callback` | Lead actions **(mark as conversions)** |
| `calc_share_copy`, `calc_print` | |

## Privacy

Consent line under the form ("We'll use these details only to send your quote") linking to
`/privacy`. Don't store personal data in `localStorage`. Only the setup goes in the URL, never the name or phone.
