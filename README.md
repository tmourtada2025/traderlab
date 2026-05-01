# TraderLab — Static Site

Live forex education website. Static export, no database, no server. WhatsApp-based enrollment.

## Stack

- Next.js 14 (static export)
- Tailwind CSS
- TypeScript
- Deploys to: Vercel, GitHub Pages, Cloudflare Pages, Netlify — anywhere

## Setup

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Build

```bash
npm run build
```

Outputs a fully static site to `./out`. This folder is what you deploy.

## Deploy

### Option A — Vercel (recommended)

1. `git init && git add . && git commit -m "init"`
2. Push to GitHub
3. Import repo at [vercel.com/new](https://vercel.com/new)
4. No env vars needed
5. Deploy

Auto-deploys on every push.

### Option B — GitHub Pages

1. Push repo to GitHub
2. Add a workflow at `.github/workflows/deploy.yml`:

```yaml
name: Deploy
on:
  push:
    branches: [main]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20 }
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with: { path: ./out }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions: { pages: write, id-token: write }
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

3. Repo Settings → Pages → Source: GitHub Actions

### Option C — Cloudflare Pages

1. Connect repo at Cloudflare Pages
2. Build command: `npm run build`
3. Output directory: `out`

## Editing content

All content is in two TypeScript files. Edit, commit, deploy — site updates.

### `lib/site.ts`

Site-wide config:
- WhatsApp number (`whatsappNumber` — change here, updates every CTA)
- Location address
- Schedule
- General inquiry message

### `lib/courses.ts`

All four courses live here as a single array. To edit any course, change the relevant field. To add a new course, append a new object with the same shape.

Each course has:
- `slug` (URL path: `/courses/<slug>`)
- `title`, `tagline`, `description`
- `curriculum` (array of strings)
- `priceUsd`, optional `priceNote`
- `duration`, `prerequisites`

### Pages with manually-written copy

- `app/page.tsx` — homepage (hero copy, marquee, "how enrollment works" steps, CTA)
- `app/about/page.tsx` — about page (mission, principles)

## How enrollment works

This is a **brochure site**, not a booking system. The flow:

1. User visits the site, picks a course
2. Clicks "Reserve via WhatsApp" — opens WhatsApp with a pre-filled message
3. You receive the message, confirm seat, send Whish payment link
4. User pays, you confirm seat in your own tracking (Google Sheet, notebook, whatever works)

Seat counter is **not enforced by the site**. You manage it manually. With cohorts of 20 and one cohort at a time, this is the right level of complexity.

## When to upgrade

If/when this happens, add the booking layer back:
- Bookings exceed ~30/month and manual tracking becomes painful
- You want real-time "seats remaining" displayed on the site
- Two cohorts run concurrently and you need to track them separately
- You want automated payment-link delivery

The current code structure makes this easy: course data moves from `lib/courses.ts` to a database, CTAs change from `wa.me` links to a form-and-API. Component layouts stay the same.

## Project structure

```
app/
  page.tsx                 — homepage
  about/page.tsx           — about page
  courses/[slug]/page.tsx  — generates 4 static course pages
  layout.tsx, globals.css

components/
  Header.tsx, Footer.tsx, CourseCard.tsx

lib/
  site.ts                  — site-wide config (WhatsApp, location, etc.)
  courses.ts               — all course content
```
