# Makerverse Website

This Vite/React site now uses the homepage as the main Makerverse landing page and preserves the robotics festival as a dedicated subpage.

## Routes

- `/` - Makerverse landing page
- `/robotics-festival-2026/` - 1st Dipolog Robotics Festival & Competition 2026
- `/events/robotics-festival-2026/` - alternate festival route
- `/programs/`, `/3d-printing/`, `/events/`, `/contact/` - future-ready routes that open the homepage at the matching section
- `/soccerbot-bracket`, `/sumobot-bracket`, `?page=soccerbot-bracket`, `?page=sumobot-bracket` - preserved bracket pages

## Content Structure

- `src/App.tsx` handles routing, homepage sections, SEO metadata, and JSON-LD schema.
- `src/FestivalPage.tsx` contains the preserved robotics festival page.
- `src/siteData.ts` stores editable Makerverse copy, program tracks, services, FAQs, routes, SEO keywords, event details, and shared asset paths.
- `public/robots.txt` and `public/sitemap.xml` provide baseline SEO files.
- `public/404.html` redirects clean GitHub Pages routes back into the React app.

## Development

```bash
npm install
npm run dev
```

## Google Analytics

Google Analytics 4 is integrated through `gtag.js` using Measurement ID `G-VVTSN76P4H`. No `.env` file is required.

Tracked events:

- `page_view` for homepage, festival, and bracket routes
- `generate_lead` for contact, book-visit, email, and message CTAs
- `cta_click` for program exploration, festival links, and map clicks

## Verification

```bash
npm run lint
npm run build
```

## Deploy

Build with `npm run build` and deploy the generated `dist/` directory to the current static host. The `CNAME`, sitemap, robots file, and clean-route fallback are copied from `public/` during the build.
