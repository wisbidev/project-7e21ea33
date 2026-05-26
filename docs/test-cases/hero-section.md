# Test Cases — Hero Section

## Overview
Dark full-viewport-height section with blue gradient glow, headline, subheadline, and two CTA buttons. Responsive mobile-first with Framer Motion fade-in animation on load.

---

**Scenario**: Hero renders with dark background and blue glow
**Given**: The landing page loads
**When**: The Hero section is rendered
**Then**: The section has a dark background (#0B1121) with a blue (#3B82F6) gradient glow effect emanating from the center/left

**Scenario**: Headline displays correctly
**Given**: The Hero section is rendered
**When**: The page first loads
**Then**: The headline "AI Team. Không cần thuê dev." is visible as the primary heading

**Scenario**: Subheadline is displayed below the headline
**Given**: The Hero section is rendered
**When**: The page first loads
**Then**: A descriptive subheadline one-liner is visible below the headline

**Scenario**: Primary CTA button "Bắt đầu ngay" is displayed and links to Telegram
**Given**: The Hero section is rendered
**When**: The user sees the Hero section
**Then**: A primary CTA button labeled "Bắt đầu ngay" is visible and links to the configured Telegram URL

**Scenario**: Secondary CTA button "Xem cách hoạt động" smooth-scrolls to Pipeline section
**Given**: The Hero section is rendered
**When**: The user clicks the "Xem cách hoạt động" button
**Then**: The page smooth-scrolls to the Pipeline / How It Works section

**Scenario**: Hero elements fade in on page load
**Given**: The user opens the landing page
**When**: The page finishes loading
**Then**: All Hero elements (headline, subheadline, CTAs) animate in with a Framer Motion fade-in / slide-up effect

**Scenario**: Hero is responsive — stacks vertically on mobile
**Given**: The page is viewed on a mobile device (320px–767px width)
**When**: The Hero section renders
**Then**: Content stacks vertically (headline above subheadline above buttons) with appropriate spacing

**Scenario**: Hero is responsive — maintains layout on desktop
**Given**: The page is viewed on a desktop device (≥1024px width)
**When**: The Hero section renders
**Then**: Content is centered with adequate margins, buttons sit side by side, and the section fills viewport height
