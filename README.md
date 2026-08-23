# Gunjita Anand — Data Analyst Portfolio

A production-ready personal portfolio site for Gunjita Anand, a data analyst / data
science student, built with Next.js (App Router) and Tailwind CSS.

## Design direction

The site is framed as a live analytics dashboard — the hero renders Gunjita's own
metrics (audience growth, HackerRank rating, active internships, dashboards shipped)
as animated sparkline cards, echoing the tools she works in daily (Power BI, Excel,
SQL). Typography pairs Space Grotesk (display) with IBM Plex Sans (body) and IBM Plex
Mono (data/labels) for a technical, analytical feel without leaning on generic
templated defaults.

## Sections

- **Hero** — dashboard-style metrics panel + positioning statement
- **About** — background, working style, core stack
- **Featured Work** — 3 case studies (Excel dashboard, Power BI dashboard, ML modeling sprints)
- **Experience** — chronological internship timeline
- **Skills** — tool proficiency bars + certifications
- **Contact** — direct contact + LinkedIn

## Local setup

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm start
```

No environment variables are required.

## Tech stack

- Next.js 14 (App Router, TypeScript)
- Tailwind CSS (custom design tokens in `tailwind.config.js`)
- next/font for self-hosted Google Fonts (Space Grotesk, IBM Plex Sans, IBM Plex Mono)
- No external UI libraries — animations are handled with Tailwind keyframes and CSS

## Project structure

```
app/
  layout.tsx      Root layout, fonts, metadata
  page.tsx         Assembles all sections
  globals.css      Design tokens, grid texture, reduced-motion handling
components/
  Nav.tsx
  Hero.tsx
  Sparkline.tsx    Reusable animated sparkline used across dashboard cards
  About.tsx
  Projects.tsx
  Experience.tsx
  Skills.tsx
  Contact.tsx
```

## Customizing content

All copy lives directly in the component files under `components/` — update the
arrays at the top of `Projects.tsx`, `Experience.tsx`, and `Skills.tsx` to change
content without touching layout code.
