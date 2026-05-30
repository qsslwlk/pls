# PLS Website (TanStack Start)

Site de **Plateforme de Liaisons Situationnelles** (PLS), base TanStack Start + Vite.

## Prerequisites

- Node.js 20+ (tested with Node 25)
- npm 10+

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

Output:

- Client assets: `dist/client`
- Server bundle: `dist/server`

## Start in production mode

```bash
npm run start
```

This starts the Nitro Node server from `dist/server/index.mjs`.

## Deploy (generic Node host)

Use these settings on Railway / Render / Fly.io / any Node host:

- Build command: `npm run build`
- Start command: `npm run start`
- Node version: `20+`
- Port: provided by platform via `PORT` env var

## Project structure

- `src/routes`: pages/routes TanStack
- `src/components/site`: composants de layout/navigation du site
- `src/components/ui`: composants UI partages
- `src/content`: contenu editorial (`site.ts`, `news.ts`)
- `src/assets`: images du site

## Notes

- `src/routeTree.gen.ts` est auto-genere. Ne pas modifier a la main.
- Certains textes contiennent encore des marqueurs `TODO` a finaliser avant publication.
