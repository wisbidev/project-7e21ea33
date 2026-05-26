# Software Requirements Specification — aiteam Landing Page

## 1. Overview

This document defines the requirements for the aiteam landing page — a single-page marketing website that introduces **aiteam**, an AI-powered platform that automatically builds software through Telegram conversations. The landing page is built with Next.js + Tailwind CSS, uses Framer Motion for animations, and follows a dark-mode design system. It is responsive, mobile-first, and consists of 7 sections plus a navigation bar.

The target audience is non-technical founders and product owners who want to build software without hiring or managing a development team.

## 2. Design

Design: see attached spec.

### Design spec (for reference)

- **Colors**: #3B82F6 primary, #0B1121 background, #1E293B card/surface, #94A3B8 secondary text, #F8FAFC text/headline
- **Pages**: Single-page landing, dark mode, responsive. Sections: Hero (headline + CTA + dark bg blue glow), Pipeline (5-step timeline), Agents (4 agent cards), Features (6-item grid), Tech Stack (6 badges), Final CTA (centered Telegram CTA), Footer (logo + links + copyright)

## 3. Tech Stack

| Layer         | Technology          |
|---------------|---------------------|
| Framework     | Next.js (App Router)|
| Styling       | Tailwind CSS        |
| Animations    | Framer Motion       |
| Deployment    | Vercel (target)     |
| Version Ctrl  | Git + GitHub        |

## 4. Functional Requirements

### 4.1 Hero Section

**Title**: Hero Section
**Priority**: P2

- Renders a full-viewport-height dark section with a blue (#3B82F6) gradient glow emanating from the center/left.
- Headline: "AI Team. Không cần thuê dev."
- Subheadline: descriptive one-liner explaining the platform (exact copy TBD by stakeholder).
- Primary CTA button "Bắt đầu ngay" — links to Telegram (placeholder link accepted, must be configurable).
- Secondary CTA button "Xem cách hoạt động" — smooth-scrolls to the Pipeline section.
- Framer Motion fade-in / slide-up animation on page load for all elements.
- Fully responsive: stack vertically on mobile, maintain layout on desktop.

### 4.2 Pipeline / How It Works

**Title**: Pipeline / How It Works
**Priority**: P2

- Section title: "Từ ý tưởng đến deploy hoàn toàn tự động".
- 5-step timeline:
  1. User mô tả ý tưởng qua Telegram
  2. PM AI phân tích & estimate
  3. User duyệt plan
  4. AI team tự build (TestLead → Dev → TL → TestLead)
  5. Deploy → trả link
- Each step rendered as a dark card (#1E293B) with light border (#1E293B to #3B82F6 hover glow).
- Animated step connectors between cards (vertical line/circle on mobile, horizontal on desktop).
- Hover glow transition on each card.
- Responsive: vertical timeline on mobile, horizontal steps on tablet/desktop.

### 4.3 AI Agents Section

**Title**: AI Agents Section
**Priority**: P2

- Section title: "4 AI Agents vận hành như engineering team thật".
- 4 agent cards arranged in 2x2 grid (4-col on desktop, 2-col on tablet, 1-col on mobile).
- Each card has:
  - Title (PM, TL, Dev, TestLead)
  - Outline-style icon per role
  - 3 bullet points describing the agent's responsibility
- Dark card (#1E293B) with border, hover blue (#3B82F6) glow effect.
- Bullet content derived from the spec (each role's 3 key functions).

### 4.4 Features Section

**Title**: Features Section
**Priority**: P2

- Section title: "Tự động hóa toàn bộ quy trình phát triển phần mềm".
- 6 feature items in a grid layout (3-col desktop, 2-col tablet, 1-col mobile).
- Each item: icon (outline SVG) + title text.
- Feature items:
  1. Giao tiếp 100% qua Telegram
  2. Không cần quản lý team dev
  3. Tự động tạo GitHub repo & PR workflow
  4. Estimate chi phí & thời gian trước build
  5. Tự động deploy
  6. Theo dõi tiến độ realtime

### 4.5 Tech Stack Section

**Title**: Tech Stack Section
**Priority**: P2

- Section title: "Stack hiện đại, sẵn sàng production".
- 6 tech logo badges arranged in a flex/grid layout.
- Badges: Next.js, Go, PostgreSQL, Tailwind CSS, GitHub Actions, Docker.
- Each badge shows the tech name with a subtle glow on hover.
- Responsive: wrap as screen shrinks.

### 4.6 Final CTA Section

**Title**: Final CTA Section
**Priority**: P2

- Centered dark section, full-width.
- Headline: "Bắt đầu build sản phẩm với AI team".
- Subheadline: "Không cần tuyển dev. Không cần quản lý sprint. Chỉ cần mô tả ý tưởng."
- CTA button: "Chat qua Telegram" — links to Telegram (configurable URL).
- Blue (#3B82F6) accent glow behind the CTA button.

### 4.7 Footer

**Title**: Footer
**Priority**: P2

- Dark background (#0B1121), minimal typography.
- Logo text "aiteam" on the left (or centered on mobile).
- Telegram link icon + GitHub link icon.
- Copyright line: "© 2025 aiteam. All rights reserved."
- Simple row layout on desktop, centered stack on mobile.

### 4.8 Responsive Layout & Navigation

**Title**: Responsive Layout & Navigation
**Priority**: P2

- Sticky top navigation bar with semi-transparent dark background (blur/backdrop-filter).
- Logo "aiteam" on the left, nav links on the right (Hero, Pipeline, Agents, Features, Tech Stack, CTA).
- Mobile: hamburger menu button, opens a full-width vertical menu overlay or dropdown.
- Smooth scroll (`scroll-behavior: smooth`) for all anchor links.
- All 7 sections respond correctly across breakpoints: mobile (default), tablet (md:), desktop (lg:).
- Consistent vertical spacing between sections via a global layout wrapper/constraint.

### 4.9 Animations & Polish

**Title**: Animations & Polish
**Priority**: P2

- Framer Motion animations:
  - Fade-in + slide-up for each section when it enters the viewport.
  - Staggered card reveals for grid layouts (Agents, Features, Tech Stack).
  - Hover glow transitions on cards.
- Performance: `whileInView` / `viewport={{ once: true }}` to avoid re-triggering.
- Consistent typography scale (Tailwind `font-*` tokens).
- Consistent whitespace via Tailwind spacing tokens.
- Color tokens defined in `tailwind.config.js` (no hardcoded hex values in components beyond the config).

## 5. Non-Functional Requirements

- **Mobile-first**: all sections designed and tested from 320px width up.
- **Performance**: Lighthouse score ≥ 90 for Performance, Accessibility, Best Practices.
- **SEO**: meta title, description, Open Graph tags on the page.
- **Accessibility**: semantic HTML, ARIA labels on interactive elements, keyboard-navigable.
- **Configurability**: Telegram link and any copy should be easy to change (constants file or env var).

## 6. Constraints

- Only frontend — no backend API calls required for this landing page.
- No external dependencies beyond Next.js, Tailwind, Framer Motion, and SVG icons.
- Dark mode only — no light mode toggle.
