# TraderLab — Comprehensive Forex Program (AR / EN)

Single-program version. Dark theme, emerald accent. WhatsApp-based enrollment.

## Stack

- Next.js 14 (App Router)
- Tailwind CSS with RTL/LTR variants
- TypeScript
- Deploys to Vercel

## URL structure

| URL | Page | Language |
|---|---|---|
| `/` | Home | Arabic (RTL) |
| `/about` | About | Arabic |
| `/the-program` | Full curriculum (12 sessions) | Arabic |
| `/en` | Home | English (LTR) |
| `/en/about` | About | English |
| `/en/the-program` | Full curriculum | English |

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

Push to GitHub → Vercel auto-deploys in ~60 seconds.

## Editing content

### Site facts (phone, schedule)
`lib/site.ts`

### UI strings (hero, navigation, CTAs, About copy, week labels)
`lib/dictionaries.ts` — both `ar` and `en` blocks. Edit the language you want, commit, push.

### Program content (4 weeks, 12 sessions)
`lib/courses.ts` — `WEEKS` array contains all 12 sessions, each with bilingual `title` and `description` and category tags.

To add a session: append to the relevant week's `sessions` array.
To change category color of a session: change `primary` field. Options: `foundations`, `technical`, `institutional`, `integration`.
To toggle the psychology tag: set `hasPsychology: true/false`.

## Theme

Dark navy + emerald. Defined in `tailwind.config.ts`:

| Token | Hex | Usage |
|---|---|---|
| `bg` | `#0A1020` | Page background |
| `bg2` | `#10182A` | Card background |
| `bg3` | `#161E33` | Hover state |
| `border` | `#1F2940` | Divider lines |
| `ink` | `#FFFFFF` | Primary text |
| `muted` | `#8590A8` | Secondary text |
| `dim` | `#5C6680` | Tertiary text |
| `accent` | `#1D9E75` | Emerald — brand accent |

Category colors (tag pills + card top borders):
- Foundations: `#1D9E75` (green)
- Technical: `#378ADD` (blue)
- Institutional: `#7F77DD` (purple)
- Integration: `#F59E0B` (amber)
- Psychology: `#E5A1F0` (pink — secondary tag only)

To change accent globally: edit `accent` in `tailwind.config.ts`.

## Hero illustration

`components/HeroChart.tsx` — pure SVG, no external assets. Stylized candlesticks + trend line + key level + order block annotation. Fully bilingual safe (no embedded text that needs translation beyond OB/KEY LEVEL labels).

To replace with a photo: swap `<HeroChart />` in `app/[locale]/page.tsx` with an `<img>` tag.

## How enrollment works

Brochure site, no booking system. Flow:

1. User reads the program
2. Clicks "Reserve via WhatsApp" — opens WhatsApp with localized pre-filled message
3. You receive the message, send Whish payment link, manually track seat
4. User pays, you confirm

WhatsApp messages localize automatically based on which language the user was browsing.

## RTL handling

- `<html dir="rtl">` set automatically for Arabic pages
- Tailwind `rtl:` variant flips properties (`rtl:md:text-left`, `rtl:border-r-2`, etc.)
- Arrow icons mirror via `.icon-arrow-flip` (CSS scaleX(-1))
- Marquee animates in opposite direction in RTL
- Pricing keeps Western numerals (`$500`, not `٥٠٠`) — `.numeric` class forces Latin font

## Project structure

```
app/
  [locale]/
    page.tsx                — homepage with hero + stats + week preview + CTA
    about/page.tsx          — about + principles + location
    the-program/page.tsx    — full 12-session curriculum
    layout.tsx              — sets html lang/dir, renders Header/Footer
  layout.tsx                — minimal root layout
  globals.css               — dark theme, fonts, animations

components/
  Header.tsx, Footer.tsx
  HeroChart.tsx             — SVG hero illustration
  SessionCard.tsx           — single session card with category tags
  LocaleSwitcher.tsx        — AR/EN toggle

lib/
  i18n.ts                   — locale config and helpers
  dictionaries.ts           — all UI/marketing strings (ar + en)
  courses.ts                — program data: 4 weeks × 3 sessions = 12 sessions
  site.ts                   — phone, location, scheduleShort
```

## Arabic translations to review

I generated all Arabic copy. Before sharing the live site, review:

1. **`lib/dictionaries.ts`** — all UI/marketing copy
2. **`lib/courses.ts`** — week labels, session titles, session descriptions

Trading vocabulary I used (verify these read naturally to your audience):
- *الرافعة المالية* — leverage
- *النقاط (Pips)* — pips (kept English in parens)
- *وقف الخسارة* — stop loss
- *Order Blocks*, *Fair Value Gaps* — kept English (institutional terms have no clean Arabic equivalent traders use)
- *تداول الانتقام* — revenge trading (literal; some prefer "Revenge Trading" in English)
- *الـ FOMO* — kept English with Arabic article (standard usage)
- *Bid/Ask، الـ Spread* — kept English (universal trader language)
- *MACD، RSI، MT4* — all kept English

Edit any term in `lib/dictionaries.ts` or `lib/courses.ts`, commit, push. Site updates in ~60 seconds.
