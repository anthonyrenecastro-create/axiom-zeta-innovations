# E.L.L.I.A. Tech Collaboration — product hub

Flagship corporate / advertising portal for **E.L.L.I.A. Tech Collaboration** (Emerging Laboratory for Local Innovation & Access).

- Hero: E.L.L.I.A. positioning ("Intelligence you own.")
- **Advertising Portal:** embedded live preview of [aichangeradar.com](https://www.aichangeradar.com) with pricing (Radar 5 $29 / Radar 15 $79 / Unlimited $199) and CTAs to onboarding + sample brief
- **Products:** AI Change Radar (live), Quadra-Seer Sovereign (local-first AI chatbot), EqualiF.I. Planner (Equalibra Financial Independence Planner), AZxAI Radar for SMBs
- Spotlight: Quadra-Seer Sovereign local-first architecture
- Principles, About, footer with contact

## Stack

Next.js 14 (App Router) + React 18, static prerender. No env vars required.

## Local dev

```bash
npm install
npm run dev   # http://localhost:3000
npm run build # production build check
```

## Deploy to Vercel

1. Push this folder to a GitHub repo (e.g. `anthonyrenecastro-create/ellia-tech-collaboration`) and import it in Vercel, **or** run `npx vercel` from this directory.
2. Framework preset: **Next.js**. Build command: `npm run build` (default).
3. No custom domains — the site serves on its generic Vercel URL (e.g. `axiom-zeta-innovations.vercel.app`). Add a custom domain in Vercel → Project → Settings → Domains only if you decide to use one later, and point DNS at the values Vercel shows.

> **Domain note:** Play Console website stays `axiomzetainnovations.com` (no hyphen, already verified — do not change the in-review listing). The old custom domains (`axiomzeta-innovations.com`, `axiomzetainnovations.com`) were removed from Vercel on 2026-10-14.

## Content sources

- AI Change Radar pricing/coverage mirrors the live product at aichangeradar.com.
- Product status is intentionally conservative: Radar = Live, Quadra-Seer = In Development, EqualiF.I. / AZxAI = Coming Soon.
