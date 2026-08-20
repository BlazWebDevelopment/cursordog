# Rex — Cursor's Upcoming AI Dog

A single-page site introducing Rex, an upcoming AI dog created with Cursor and expected
in October 2026. Built as a clean, white, minimalistic one-pager: one route, no
sub-pages, an anchored header, and an animated hero.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- [React 19](https://react.dev)
- [Tailwind CSS 4](https://tailwindcss.com)
- TypeScript

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script            | Description                                          |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start the dev server                                 |
| `npm run build`   | Production build                                     |
| `npm run start`   | Serve the production build                           |
| `npm run favicon` | Regenerate `app/favicon.ico` and `app/icon.png`      |

## Project layout

```
app/
  favicon.ico        Cursor mark, generated from public/cursor-logo.png
  icon.png           512x512 PNG icon, same source
  globals.css        Tailwind theme tokens, keyframes, reduced-motion rules
  layout.tsx         Fonts and metadata
  page.tsx           The whole page
components/
  AnimatedHeadline   Per-letter reveal, pure CSS so it runs before hydration
  Countdown          Live countdown to 2026-10-01
  Header             Fixed header that gains a border once scrolled
  Marquee            Looping capability strip
  Reveal             IntersectionObserver scroll-in wrapper
  RotatingWord       Typewriter cycling through "interacts / learns / ..."
public/
  rex.png            Hero photo of Rex
  cursor-logo.png    Cursor mark used in the header, footer, and icons
scripts/
  make-favicon.mjs   Builds the icons from the Cursor mark
```

## Notes on the hero image

`public/rex.png` is an opaque studio photo with a near-white (`#fefefe`) background.
Anything decorative painted behind it gets clipped into a visible rectangle, so the
hero grid fades out well above the photo and there is no glow layer behind it.

## Motion

Every animation is disabled under `prefers-reduced-motion: reduce`.

## Official notice

Rex is presented here as an official Cursor product. Full details on features, pricing,
and availability are announced through Cursor's official channels ahead of the
October 2026 release.
