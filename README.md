# Axiom Zeta Innovations — axiomzeta-innovations.com

Flagship corporate / advertising portal for **Axiom Zeta Innovations LLC**.

- Hero: Axiom Zeta positioning (“Intelligence you own.”)
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

1. Push this folder to a GitHub repo (e.g. `anthonyrenecastro-create/axiom-zeta-innovations`) and import it in Vercel, **or** run `npx vercel` from this directory.
2. Framework preset: **Next.js**. Build command: `npm run build` (default).
3. Add domains in Vercel → Project → Settings → Domains:
   - `axiomzeta-innovations.com` (as requested)
   - `www.axiomzeta-innovations.com`
4. Point DNS at your registrar (GoDaddy) to the values Vercel shows for those domains (typically `A @ 76.76.21.21` + `CNAME www cname.vercel-dns.com`, unless Vercel shows project-specific values — use exactly what Vercel displays).

> **Domain note:** Play Console website stays `axiomzetainnovations.com` (no hyphen, already verified — do not change the in-review listing). This primary corporate site is `axiomzeta-innovations.com` (hyphenated), decided 2026-10-03.

## Content sources

- AI Change Radar pricing/coverage mirrors the live product at aichangeradar.com.
- Product status is intentionally conservative: Radar = Live, Quadra-Seer = In Development, EqualiF.I. / AZxAI = Coming Soon.
