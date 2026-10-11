# Mathusan Manivannan — Portfolio

Personal portfolio of Mathusan Manivannan, BSc (Hons) Information Technology undergraduate at SLIIT (Data Science specialization).

Built with Next.js (static export) and Tailwind CSS. Deployed on Netlify.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
```

The static site is written to `out/`.

## Content

All content lives in `src/components/`:

- `Hero.tsx` — name, title, social links, stats
- `About.tsx` — bio, facts, education, timeline
- `Projects.tsx` — project cards (`github` and `demo` are optional; buttons only render when a real URL exists)
- `Skills.tsx` — skill bars and badges
- `Contact.tsx` — email, phone, location, social links, contact form

The CV is served from `public/Mathusan-Manivannan-CV-v2.pdf`.
