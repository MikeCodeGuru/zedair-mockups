# Zed-Air Heating & Air Conditioning Inc. — UI Mockup Variations

High-fidelity website mockup designs for **Zed-Air Heating & Air Conditioning Inc.**, London, Ontario. Four distinct design variations built with HTML, CSS, and JavaScript — each based on a different design system and visual direction.

---

## Live Previews

| Variation | Design System | Theme |
|---|---|---|
| [Variation 1](#variation-1--blue-corporate-template) | Blue Corporate Template | Light / Professional Blue |
| [Variation 2](#variation-2--dark-dimension) | Dimension Design System | Dark / Deep Space |
| [Variation 3](#variation-3--base44-light) | Base44 Design System | Light / Soft Gradient |
| [Variation 4](#variation-4--linoxa-interactive) | Linoxa Webflow Template | Dark Navy / Interactive |

---

## Variation 1 — Blue Corporate Template

**Folder:** `variation-1-blue-template/`

A clean, professional blue-and-white layout modelled after a trusted electrical & mechanical contractor template. Adapted for HVAC services.

**Key Features:**
- Fixed transparent navbar with blue "Contact Us" pill button
- Full-bleed hero with HVAC technician image, stats widget (33+ Years / 40+ Experience)
- Partner logos strip (Carrier, Trane, Lennox, York, Daikin, Rheem, Goodman)
- About section with 2×2 core values grid (white + navy cards)
- Services accordion with active expanded state
- 3-column project cards with overlay tags
- FAQ accordion with image panel
- Dark CTA banner with contact info
- Fully responsive with hamburger menu

---

## Variation 2 — Dark Dimension

**Folder:** `variation-2-dark-dimension/`

A premium "deep-space command center" aesthetic using the Dimension design system. Midnight black canvas with translucent glass cards and atmospheric gradients.

**Key Features:**
- Midnight Base `#0a0a0a` canvas with gradient aura hero
- Translucent glass cards with `backdrop-filter: blur(12px)`
- Pill-shaped buttons (9999px border-radius)
- Ghost White `#e5e5e5` text hierarchy on dark backgrounds
- Accent color `#6b62f2` for labels, icons, and hover glows
- Grid overlay on hero for depth
- Services cards with glass morphism effect
- Dark testimonials with frosted card
- Fully responsive with hamburger menu

---

## Variation 3 — Base44 Light

**Folder:** `variation-3-base44-light/`

A "Softly Lit Gradient Canvas" design using the Base44 design system. Light, airy, and premium — with Lime Spritz accents and DM Serif Display typography.

**Key Features:**
- Canvas Pearl `#faf9f7` background with Sky Dream gradient hero
- Warm Horizon atmospheric glow on hero right panel
- Lime Spritz `#ade900` accent on CTA buttons, borders, and highlights
- DM Serif Display italic headings with DM Sans body
- Split hero layout — 55% text / 45% full-bleed photo
- Floating glass stat cards on hero image
- Staggered about section with image mosaic and pull-quote
- Numbered 3×2 services card grid
- Masonry projects grid with category filter pills
- Sticky FAQ sidebar with lime left-border on open items
- Full-bleed dark CTA with contact info cards
- 4-column dark footer with large watermark
- Fully responsive with hamburger menu

---

## Variation 4 — Linoxa Interactive

**Folder:** `variation-4-linoxa/`

The most feature-rich variation — inspired by the Linoxa Webflow template. Built with advanced CSS interactions, 3D transforms, and JavaScript-powered components.

**Key Features:**
- **Background video** hero with full-viewport `<video>` element
- **3D floating card** with `perspective(1000px) rotateY/rotateX` + mouse-tracking tilt
- **Hero image slider** — auto-advancing with prev/next controls and animated pill dots
- **Scroll-triggered animations** via `IntersectionObserver` — fade + slide reveals on every section
- **Navbar scroll behavior** — transparent on hero, frosted glass white on scroll
- **3D project carousel** — center active card + flanking cards in `rotateY(±20deg)` perspective
- **Media lightbox** — click project cards or images for full-screen overlay with backdrop blur
- **Testimonials slider** — 3 real client quotes, auto-advancing with dot navigation
- **Infinite scrolling ticker** — CSS `@keyframes` with all Zed-Air service keywords
- **FAQ accordion** — smooth `max-height` expand with rotating icon
- **Footer watermark** — large "ZED-AIR" display type at ultra-low opacity
- **Active nav highlighting** via `IntersectionObserver`
- Fully responsive — hamburger menu, stacked grids, scaled 3D carousel on mobile

---

## Company Information

**Zed-Air Heating & Air Conditioning Inc.**
- **Phone:** 519-455-7970
- **Address:** 1112 Frances Street, London, Ontario N5W 5N5
- **Website:** [www.zed-air.ca](https://www.zed-air.ca)
- **Established:** 1993
- **Specialty:** Factory Authorized Carrier Dealer · BCIN Compliant (Firm #3235)

---

## How to View

Each variation is a self-contained static website. To view locally:

```bash
# Navigate to any variation folder
cd variation-4-linoxa

# Start a local server (Python 3)
python3 -m http.server 8080

# Open in browser
open http://localhost:8080
```

Or simply open `index.html` directly in your browser.

---

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — custom properties, CSS Grid, Flexbox, `backdrop-filter`, `@keyframes`, `perspective`
- **Vanilla JavaScript** — `IntersectionObserver`, event listeners, DOM manipulation
- **Google Fonts** — Playfair Display, Inter, DM Serif Display, DM Sans, Bebas Neue

---

*All content sourced from [www.zed-air.ca](https://www.zed-air.ca). Mockup designs created for demonstration purposes only.*
