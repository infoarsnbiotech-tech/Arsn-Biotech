# ARSN Tech — Website

React (Vite) + Tailwind CSS website for ARSN Tech (web development, SEO, digital marketing).

## Run locally

```bash
npm install
npm run dev
```

Opens at http://localhost:5173

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploy to Vercel

**Option A — Vercel CLI**
```bash
npm i -g vercel
vercel
```
Follow the prompts. Framework preset: **Vite**. Build command: `npm run build`. Output directory: `dist`.

**Option B — GitHub + Vercel dashboard**
1. Push this folder to a GitHub repo.
2. Go to vercel.com → New Project → import the repo.
3. Vercel auto-detects Vite — just click Deploy.

## Where to edit content

- `src/components/Hero.jsx` — headline and intro copy
- `src/components/Services.jsx` — the 3 services (web dev / SEO / digital marketing)
- `src/components/Process.jsx` — the 4-step process
- `src/components/About.jsx` — about copy
- `src/components/Contact.jsx` — contact email (`CONTACT_EMAIL` at top of file) and form
- `public/logo-icon.png` — icon mark used in navbar, replace to update
- `public/logo-full.png` — full lockup used in footer, replace to update
- `tailwind.config.js` — colors, under `theme.extend.colors`

## Note on the contact form

It currently opens the visitor's email client with a pre-filled message (no backend needed,
works immediately on Vercel). If you want submissions to land in an inbox or CRM without
opening mail apps, swap it for a form service like Formspree, or a small serverless
function — let me know and I can wire that up.
