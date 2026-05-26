# Architecture — aiteam Landing Page

## 1. Overview

Single-page marketing landing page for **aiteam**, an AI platform that builds software through Telegram conversations. Built with Next.js (App Router), Tailwind CSS, and Framer Motion. Dark mode only, responsive mobile-first. No backend.

---

## 2. Tech Stack

| Layer      | Technology              |
|------------|-------------------------|
| Framework  | Next.js 14+ (App Router)|
| Styling    | Tailwind CSS            |
| Animations | Framer Motion           |
| Icons      | Inline SVG (outline)    |
| Deployment | Vercel                  |
| Versioning | Git + GitHub            |

**Runtime**: Node.js (Vercel managed). No backend, no database.

---

## 3. Folder Structure

```
/
├── docs/
│   └── SRS.md               # Requirements document
├── frontend/                # Next.js app
│   ├── src/
│   │   ├── app/             # App Router pages
│   │   │   ├── layout.tsx   # Root layout (fonts, meta)
│   │   │   ├── page.tsx     # Single page (assembles sections)
│   │   │   └── globals.css  # Tailwind directives + CSS vars
│   │   ├── components/      # One file per section
│   │   │   ├── Nav.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Pipeline.tsx
│   │   │   ├── Agents.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── TechStack.tsx
│   │   │   ├── FinalCTA.tsx
│   │   │   └── Footer.tsx
│   │   ├── config/          # Shared constants
│   │   │   └── site.ts      # Telegram URL, copy strings
│   │   └── types/           # Shared TypeScript types (minimal)
│   └── tailwind.config.ts   # Color tokens, fonts, breakpoints
├── README.md
└── .env.local               # NEXT_PUBLIC_TELEGRAM_URL (optional override)
```

### File-per-section convention
Each section is a single self-contained component in `components/`. No barrel exports, no index re-exports.

---

## 4. Design System

### Color Tokens (tailwind.config.ts)

| Token        | Hex       | Usage                          |
|--------------|-----------|--------------------------------|
| primary      | #3B82F6   | CTAs, glows, accents           |
| background   | #0B1121   | Page background                |
| surface      | #1E293B   | Cards, nav, footer             |
| text-secondary | #94A3B8 | Subheadings, captions           |
| text-headline| #F8FAFC   | Headings, body                 |

Colors are defined in `tailwind.config.ts` as Tailwind theme tokens — components reference token names, never raw hex.

### Typography

- Font: system default stack (Inter via `next/font/google` optional — install only if stakeholder confirms).
- Scale: Tailwind `text-sm / text-base / text-xl / text-3xl / text-5xl` tokens — no arbitrary `text-[17px]`.

### Card Style

- Background: `bg-surface`
- Border: `border border-white/10`
- Hover: `hover:border-primary hover:shadow-[0_0_24px_#3B82F6/30]`
- Transition: `transition-all duration-300`

---

## 5. Key Design Decisions

1. **No backend** — landing page is static; Telegram link is the only external redirect.
2. **Dark mode only** — no light mode toggle, no theme provider needed.
3. **Configurable Telegram URL** — defined in `src/config/site.ts` as `TELEGRAM_URL`. Can be overridden by `NEXT_PUBLIC_TELEGRAM_URL` env var if needed.
4. **Inline SVG icons** — no icon library dependency; outline-style SVGs embedded directly in components.
5. **Framer Motion `whileInView` with `viewport={{ once: true }}`** — prevents re-triggering on scroll.
6. **Smooth scroll** — `scroll-behavior: smooth` on `html`, anchor links for all section navigation.
7. **Mobile-first** — base styles target 320px; `md:` and `lg:` breakpoints add layout for larger screens.
8. **No CSS Modules** — utility classes only; no scoped styles needed for this scope.

---

## 6. Naming Conventions

- Component files: `PascalCase.tsx` (e.g., `Hero.tsx`, `Pipeline.tsx`)
- Component names: match file name (e.g., `export default function Hero()`)
- Props interfaces: `{Name}Props` defined at the top of each file
- Tailwind classes: lowercase, hyphenated, no camelCase
- No abbreviation in exported names — `FinalCTA` (acronym is fine for brevity), `TechStack`

---

## 7. Required Environment Variables

| Variable               | Default                         | Description                    |
|-----------------------|---------------------------------|--------------------------------|
| `NEXT_PUBLIC_TELEGRAM_URL` | `"https://t.me/aiteam"`     | Telegram bot/chat link         |

All other configuration (copy, layout) lives in `src/config/site.ts` — no env var needed.

---

## 8. Performance & Accessibility Targets

- Lighthouse ≥ 90 on Performance, Accessibility, Best Practices.
- Semantic HTML (`<nav>`, `<main>`, `<section>`, `<footer>`, `<h1>`–`<h3>`).
- ARIA labels on hamburger menu button and any icon-only links.
- All interactive elements keyboard-navigable.
- Meta tags + Open Graph set in `app/layout.tsx`.

---

## 9. Deployment

- Platform: **Vercel** (zero-config for Next.js App Router).
- Branch protection: PR required to merge to `main`; CI runs `next build` on every PR.
- `[skip ci]` on docs-only commits to avoid unnecessary Vercel deploys.
