# Anezi Tower Hotel & Apartments — Website

Multilingual marketing website for Anezi Tower Hotel & Apartments (Agadir, Morocco).
Three languages — French (default), English, Arabic (right-to-left) — built with
**React 19 + TanStack Start (SSR)** and **Tailwind CSS**, prerendered to static HTML.

This project is fully self-contained: no CMS, no database, no backend service, no
third-party account. Every page is rendered to plain HTML/CSS/JS at build time.

---

## Requirements

- Node.js **20.19+** (or 22+)
- npm 10+

## Getting started

```bash
npm install      # first run also creates package-lock.json — commit it
npm run dev      # http://localhost:3000
npm run build    # production build → dist/client
npm run preview  # serve the production build locally
```

Commit the `package-lock.json` produced by the first `npm install` so Vercel and
every other machine install exactly the same versions.

## Project structure

```
public/                 static assets (images, logo, robots.txt, sitemap.xml)
src/
  routes/               one file per page (file-based routing)
    __root.jsx          HTML document, <head>, global providers
    index.jsx           "/" → redirects to /fr
    $lang.jsx           language layout (header, footer, sticky booking bar)
    $lang/              pages: index, about, rooms, apartments, dining,
                        wellness, activities, meetings, gallery, contact
  components/
    site/               header, hero, footer, booking CTA, reveals…
    home/               home page sections
    ui/                 image, button, toaster
  content/              ALL site copy — fr.js, en.js, ar.js
  lib/                  site details, booking URL, image registry, SEO, utils
  index.css             design tokens (colours, fonts) and shared classes
tailwind.config.js      brand palette: navy / sand / ivory / gold
vite.config.js          build + prerender configuration
vercel.json             Vercel static deployment settings
```

### Where to edit things

| What                                   | File                        |
| -------------------------------------- | --------------------------- |
| Text, menus, page copy (per language)  | `src/content/{fr,en,ar}.js` |
| Hotel name, phone, email, address, map | `src/lib/site.js`           |
| Booking button target                  | `src/lib/booking.js`        |
| Photos                                 | `public/images/*.webp`      |
| Colours, fonts, spacing tokens         | `src/index.css`             |
| Logo / favicon                         | `public/logo.png`           |

## How the build works

All routes are prerendered at build time (`vite.config.js` → `prerender.pages`),
so the output in `dist/client` is a complete static site:

```
dist/client/index.html          → /
dist/client/fr/index.html       → /fr
dist/client/fr/rooms/index.html → /fr/rooms
dist/client/en/…  ar/…
dist/client/robots.txt  sitemap.xml  images/  assets/
```

No server, no Node runtime and no environment variables are needed in production.

When you add a page, add its path to the `prerender.pages` list in
`vite.config.js` so it is rendered to HTML as well.

## Deploy to Vercel

1. Push this folder to a new GitHub repository (see below).
2. In Vercel: **Add New → Project → Import** the repository.
3. Framework preset: **Other** (leave the build settings as they are — they come
   from `vercel.json`).
4. Deploy.

`vercel.json` already sets:

- build command `npm run build`
- output directory `dist/client`
- clean URLs (`/fr/rooms` instead of `/fr/rooms/`)
- a redirect from `/` to `/fr`
- long-lived caching for `/assets/*`

### Deploying from a monorepo

If the repository also contains other folders, set **Root Directory** to this
folder in the Vercel project settings.

## Push to a new GitHub repository

```bash
cd standalone
git init
git add .
git commit -m "Anezi Tower website"
git branch -M main
git remote add origin https://github.com/<you>/<repo>.git
git push -u origin main
```

`node_modules`, `dist` and local env files are ignored by `.gitignore`.

## Notes

- Arabic pages switch the layout to right-to-left automatically (`dir="rtl"`).
- Fonts (Cormorant Garamond, Inter, Amiri, IBM Plex Sans Arabic) load from Google
  Fonts; the site falls back to system serif/sans if they are unavailable.
- Booking buttons open the hotel's reservation page — set `BOOKING_URL` in
  `src/lib/booking.js`.
- `sitemap.xml` and `robots.txt` use the canonical domain set in
  `src/lib/site.js` (`SITE.url`). Update it once the production domain is live.
