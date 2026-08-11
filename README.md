# Furnishing Studio Debut

Build a premium, mobile-first landing page for "The Furnishing Store (Singla's)" — a home furnishings store in Jalandhar, Punjab, selling curtains, wallpaper, furniture, and mattresses. This must feel like a high-end design studio's work, not a template. Approve-on-first-sight quality.

BRAND VOICE

Warm, established, confident. A trusted local name (curtains, wallpaper, furniture, mattresses) — not a startup. Copy should be short, sentence-case, no filler, no generic stock phrases like "welcome to."

COLOR SYSTEM (use exactly these, no substitutions)

- Background dark: #1E1810 (deep walnut)

- Ivory: #F6EFE4 (primary light background / text-on-dark)

- Sage: #8A9A7B (muted olive-green accent)

- Brass: #C9A24B (primary CTA / accent color — used sparingly, for emphasis only)

- Brick: #A6503A (secondary accent — deep rust/clay)

- Ink: #211A12 (text on light backgrounds)

Do NOT use generic AI-cliché palettes (no warm-cream-with-terracotta #D97757 default, no black-with-neon-green, no flat blue/purple SaaS gradients).

TYPOGRAPHY

- Display/headline font: Fraunces (serif, characterful) — use at large sizes (clamp 2.5rem–6rem for hero), weight 500–700, tight letter-spacing (-0.01 to -0.02em). Use italic weight 300 for accent words within headlines.

- Body/utility font: Work Sans — weight 300–500, generous line-height (1.6–1.75) for readability.

- Both from Google Fonts.

LAYOUT STRUCTURE

1. Hero — full-viewport. Big kinetic headline (words rise/fade in on load, staggered ~80ms apart). Sub-line under 40 characters wide. An infinite horizontal marquee ticker along the bottom of the hero looping their categories: "CURTAINS — WALLPAPER — SOFAS — MATTRESSES — DRAPES."

2. Category showcase — 4 full-height panels (curtains, wallpaper, furniture, mattresses), each using position:sticky so each panel scrolls up and stacks on top of the previous one (classic Awwwards-style stacked-card scroll effect). Alternate background colors from the palette (brick, ivory, sage, dark walnut) so each panel feels distinct. Each panel: number label (01–04), large headline, one sentence of description, simple line-art SVG doodle relevant to that category (no stock photos).

3. Legacy/trust section — split two-column layout. One side: an abstract textured gradient panel (using the palette, not a stock photo) suggesting fabric/texture. Other side: a pull-quote about the store's local trust and history, plus one supporting paragraph.

4. Interactive swatch section — a row of 4–5 clickable color swatches; clicking one smoothly transitions the section's background tint to match, demonstrating "pick a mood, the page follows."

5. Rating/trust strip — a thin horizontal marquee band (light background) with real-feel details: rating, review count, location.

6. Footer/CTA — large closing headline, a prominent rounded "Call the store" button in brass, real store details (address: Nakodar Road, opp. Nari Niketan, Jalandhar, Punjab 144001; phone: +91 91151 04010), small credit line.

MOTION GUIDELINES

- Hero text: staggered rise + fade on page load (translateY + opacity, ~600–900ms, cubic-bezier ease-out).

- Scroll reveals: fade-up on scroll into view for all major sections (IntersectionObserver-style trigger, threshold ~20%), NOT scroll-jacking.

- Marquee tickers: continuous linear CSS keyframe loop, no pauses, ~18–22s per cycle.

- Sticky stacked panels: pure CSS position:sticky, no JS scroll hijacking — must stay smooth and lightweight on mobile.

- Custom cursor + magnetic hover effect on CTA buttons: DESKTOP ONLY (disable via pointer:fine media query so it never breaks touch devices).

- Respect prefers-reduced-motion — disable non-essential animation for users who request it.

- Subtle film-grain texture overlay across the whole page at ~5% opacity for tactile, non-flat feel.

MOBILE REQUIREMENTS (non-negotiable)

- All type sizes must use fluid clamp() scaling, not fixed breakpoints only.

- Sticky-stack section must remain performant and legible on small screens — stack vertically full-width, no horizontal scroll traps.

- Tap targets minimum 44px.

- No desktop-only interaction (cursor, magnetic buttons) may block or degrade the mobile experience.

WHAT TO AVOID

- No generic AI-template look: no centered hero + big rounded stock illustration, no default SaaS card grids, no unrelated stock photography.

- No lorem ipsum — write real, specific copy grounded in what this store actually sells.

- No color outside the defined palette.

- No cluttering every section with animation — pick 2–3 signature moments (hero rise-in, stacked cards, swatch color-wash) and keep everything else calm and disciplined.

Deliver a single cohesive scroll experience a local furnishing store owner would look at and immediately feel is worth more than what they currently have.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/2a347224-6ea8-43ff-9406-e881457d77b5).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
