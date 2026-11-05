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

## Contact details

The email address and social links shown on the Contact page live in the
`details` list at the top of `client/src/pages/Contact.jsx`. Edit them there.

## Deploy

`netlify.toml` builds the `client` folder and publishes `client/dist`;
`client/public/_redirects` sends every route to `index.html` for client-side
routing.
