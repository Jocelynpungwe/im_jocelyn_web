# StartupLift Dev — marketing website

A static React + Vite website. There is no backend, no login and no contact
form — visitors reach out by email or social media.

## Stack

- React
- Vite
- React Router

## Requirements

- Node.js 20+

## Run locally

```bash
cd client
npm install
npm run dev
```

Open the URL shown by Vite, normally `http://localhost:5173`.

## Build

```bash
cd client
npm run build
```

The output is written to `client/dist`.

## Environment variables (optional)

Copy `client/.env.example` to `client/.env` and fill in what you use:

- `VITE_GA_MEASUREMENT_ID` — Google Analytics 4
- `VITE_CLARITY_PROJECT_ID` — Microsoft Clarity

## Where things live

| What | Where |
| --- | --- |
| Pages (one per route) | `client/src/pages` |
| Projects and case studies | `client/src/data/projects.js` |
| Contact details, services, process, About copy, FAQ | `client/src/data/site.js` |
| Packages and care plans (prices) | `client/src/data/pricing.js` |
| Real client quotes (none yet, so none are shown) | `client/src/data/testimonials.js` |
| Design-system components | `client/src/components/editorial` |
| Heroes for Work, Services, Contact and About | `client/src/components/editorial/Heroes.jsx` |
| All styles below the hero | `client/src/styles/editorial.css` |

To add a project, add a record to `data/projects.js`. It gets a card on the
home and Work pages and its own page at `/work/<slug>`. Write only what is
true and visible on the live site; leave results and numbers out until real
ones exist.

The email address and social links come from `contact` in `data/site.js`.

## Favicon

`client/public/favicon.png` is the logo with the same gold tint the navbar
applies to it with a CSS filter (`sepia(1) saturate(2.4) hue-rotate(-8deg)
brightness(1.15)`). `logo-mark.png` is still the original blue artwork the
navbar tints on the fly, so if the logo changes, regenerate `favicon.png` from
it with that same filter.

## The design system

`editorial.css` is scoped: every selector starts with `.ed`, and it contains no
element selectors, so it cannot leak into older styles. Pages wrap their
content in `<div className="ed">`.

Motion uses no animation library, only CSS plus small hooks in
`components/editorial/motion.js` (in-view detection, scroll progress and
parallax on one shared scroll loop). All of it is disabled for visitors who
prefer reduced motion.

## The homepage hero is protected

`components/public/PortfolioHero.jsx` and the styles it uses
(`portfolio.css`, `luxury-home.css`) must not change. The hero reads `projects`
and `imageProps` from `pages/Work.jsx` (re-exported from `data/projects.js`) and
looks projects up by `title`, using their `image` and `link`, so keep those
three fields stable.

## Deploy

`netlify.toml` builds the `client` folder and publishes `client/dist`;
`client/public/_redirects` sends every route to `index.html` for client-side
routing.
