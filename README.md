# Shaders Chat App

A visually striking chat-app concept UI that uses real-time GPU shader effects as its centerpiece — a liquid-metal orb reacts and animates as you interact with the chat input. Built with Next.js and Paper Design's `@paper-design/shaders-react`. This is a front-end concept/demo: messages are simulated client-side, there is no backend or AI model connected.

## What it does

- Renders a centered chat interface with a message composer (textarea, model select, attach/mic actions).
- A `LiquidMetal` shader orb sits above the input and animates (drops, blurs, rotates away) when the input is focused.
- `PulsingBorder` shader accents frame interactive elements.
- Message list state is managed locally in React (`user` / `assistant` roles); assistant replies are simulated on the client — wire this up to a real chat API to make it functional.

## Features

- Real-time WebGL shader effects (`LiquidMetal`, `PulsingBorder` from `@paper-design/shaders-react`)
- Focus-driven Framer Motion choreography (spring orb animation)
- Chat composer with model selector, textarea, and action buttons
- Message thread rendering with timestamps
- Dark, premium aesthetic (Tailwind CSS + shadcn/ui)
- Fully client-side — no backend, no API routes, static-export ready

## Tech stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Framework  | Next.js 15 (App Router)             |
| UI         | React 19, TypeScript                |
| Shaders    | @paper-design/shaders-react (WebGL) |
| Animation  | Framer Motion                       |
| Styling    | Tailwind CSS 3.4, tailwindcss-animate |
| Components | shadcn/ui (Radix UI primitives), Lucide icons |
| Theming    | next-themes                         |
| Analytics  | @vercel/analytics                   |

## Quick start

Requirements: Node.js 18+ and pnpm (or npm).

```bash
# install dependencies
pnpm install

# start the dev server
pnpm dev
# open http://localhost:3000

# production build (static export into ./out)
pnpm build
```

If peer-dependency conflicts block npm installs, use `npm install --legacy-peer-deps`.

## Project structure

```
app/
  page.tsx                  # entry: renders ChatInterface
  layout.tsx                # root layout (fonts, metadata, theme)
  globals.css               # Tailwind + global styles
components/
  chat-interface.tsx        # chat UI + shader orb choreography
  theme-provider.tsx        # next-themes wrapper
  ui/                       # shadcn/ui primitives (button, textarea, select, ...)
lib/
  utils.ts                  # cn() helper
public/                     # static assets
styles/                     # additional stylesheets
```

## Making it a real chat app

The current assistant replies are simulated in `components/chat-interface.tsx`. To connect a real model:

1. Add an API route (e.g. `app/api/chat/route.ts`) or point at any chat-completions endpoint.
2. Replace the simulated reply logic in `ChatInterface` with a `fetch` call that streams/appends the response.
3. Note: adding a server route means `output: 'export'` must be removed — static export only works for the current fully client-side build.

## Environment variables

None required for the demo build. A real chat backend would need its own API key (e.g. `OPENAI_API_KEY`) — never commit secrets to the repo.

## Deployment

The demo has no server-side code and is exported as a static site (`output: 'export'` in `next.config.mjs`):

```bash
pnpm build   # emits a static site into ./out
```

Deploy the `out/` directory to any static host (GitHub Pages, Cloudflare Pages, Netlify).

> **Note on `basePath`:** `next.config.mjs` currently sets `basePath: '/shaders-chat-app'` because this project is hosted under a GitHub Pages subpath (`https://girishlade111.github.io/shaders-chat-app`). If you deploy to a domain root (Vercel, custom domain), remove the `basePath` line before building.

## License

Free to use and modify.

---

Built by Girish Lade · https://ladestack.in
