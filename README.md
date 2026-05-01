# TraderLab — Bilingual Static Site (AR / EN)

Live forex education website. Static, no database, WhatsApp-based enrollment. Available in Arabic (default) and English.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS with RTL/LTR variants
- TypeScript
- Deploys to Vercel

## URL structure

| URL | Language |
|---|---|
| `/` | Arabic (default) |
| `/about` | Arabic about page |
| `/courses/basic-forex-fundamentals` | Arabic course detail |
| `/en` | English homepage |
| `/en/about` | English about |
| `/en/courses/basic-forex-fundamentals` | English course detail |

The `/` → `/ar` mapping is handled internally via `next.config.js` rewrites. URLs stay clean.

## Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` for Arabic, `http://localhost:3000/en` for English.

## Build & deploy

```bash
npm run build
```

Push to GitHub. Vercel auto-deploys.

## Editing content

### Arabic translations to review

I generated the Arabic translations. Before launch, review these files:

1. **`lib/dictionaries.ts`** — all UI/marketing copy (hero, navigation, CTAs, About page)
2. **`lib/courses.ts`** — all 4 course descriptions, taglines, curriculum bullets

Things to check specifically:
- Trading vocabulary: "leverage" → "الرافعة المالية", "spread" → "فروق الأسعار", "stop loss" → "وقف الخسارة"
- Tone for Lebanese/Gulf audience (vs. North African Arabic)
- Course titles — these appear in WhatsApp messages, should sound natural when spoken
- The italic emphasis lines in headings ("structure", "on purpose") — Arabic doesn't use italics, so these now display as light-weight contrast instead

### Changing copy

- Site config (phone, schedule): `lib/site.ts`
- All UI/marketing strings: `lib/dictionaries.ts` (both `ar` and `en` blocks)
- Course content: `lib/courses.ts` (each course has `en` and `ar` fields)

Edit, commit, push. Vercel auto-deploys in ~60 seconds.

## How enrollment works

Brochure site, not a booking system:

1. User picks a course
2. Clicks "Reserve via WhatsApp" — opens WhatsApp with localized pre-filled message
3. You receive the message, confirm seat, send Whish payment link
4. User pays, you confirm seat in your own tracking

Seat counter is not on the site. WhatsApp messages are localized to match what language the user was browsing.

## Project structure

```
app/
  [locale]/
    page.tsx                 — homepage (AR + EN)
    about/page.tsx           — about page
    courses/[slug]/page.tsx  — generates 4 × 2 = 8 static course pages
    layout.tsx               — sets html lang/dir, renders Header/Footer
  layout.tsx                 — minimal root layout
  globals.css

components/
  Header.tsx, Footer.tsx, CourseCard.tsx
  LocaleSwitcher.tsx         — AR/EN toggle in header

lib/
  i18n.ts                    — locale config and helpers
  dictionaries.ts            — all UI/marketing strings (ar + en)
  courses.ts                 — bilingual course content
  site.ts                    — phone, location, scheduleShort
```

## RTL handling

- `[dir="rtl"]` is set on `<html>` for Arabic
- Tailwind's `rtl:` variant flips properties as needed (`rtl:md:text-left`, etc.)
- Arrow icons use `.icon-arrow-flip` class which mirrors them via CSS scaleX(-1)
- Marquee animates in opposite direction in RTL
- Pricing keeps Western numerals (`350`, not `٣٥٠`) — `.numeric` class forces Latin font
