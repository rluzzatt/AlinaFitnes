---
name: MamAlina Center — Signature
description: Real training photography, oversized athletic lettering and faceted brand geometry.
colors:
  paper: "#ffffff"
  ink: "#121416"
  taupe: "#af9987"
  taupe-light: "#c8b9ad"
  taupe-dark: "#786150"
  muted: "#555451"
  line: "#d9d4d0"
  breathing-surface: "#d4c8be"
  closing-lettering: "#727577"
typography:
  wordmark:
    fontFamily: "Anton, sans-serif"
    fontSize: "22.2vw"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  display:
    fontFamily: "Noto Display, Noto Hebrew, sans-serif"
    fontSize: "clamp(4.4rem, 7.5vw, 7.1rem)"
    fontWeight: 900
    lineHeight: 1.02
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "Noto Display, Noto Hebrew, sans-serif"
    fontSize: "clamp(3rem, 6.4vw, 6rem)"
    fontWeight: 900
    lineHeight: 1.06
    letterSpacing: "-0.025em"
  body:
    fontFamily: "Noto Hebrew, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.9
  label:
    fontFamily: "Noto Hebrew, sans-serif"
    fontSize: "14px"
    fontWeight: 750
rounded:
  control: "0px"
  play: "50%"
spacing:
  gutter: "clamp(24px, 4.5vw, 80px)"
  section: "100px"
  section-tablet: "75px"
  section-mobile: "60px"
components:
  button-taupe:
    backgroundColor: "{colors.taupe}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 26px"
  button-taupe-hover:
    backgroundColor: "{colors.taupe-dark}"
    textColor: "{colors.paper}"
  button-dark:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.control}"
    padding: "14px 26px"
  button-light:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.control}"
    padding: "14px 26px"
---

# Design System: MamAlina Center — Signature

## Overview

**Creative North Star: "Signature"**

The user approved `.impeccable/mocks/comp-C.png` on 2026-09-07. This system replaces the previous tan/ink split-screen refinement. White navigation frames a photographic stage, with oversized live lettering behind the real coach. The supplied faceted heart/MA mark gives the page its diagonal seams and geometric motion.

The website remains Hebrew RTL and static. Strength training and the breathing clinic are independent offerings. Product truth lives in `PRODUCT.md`; the homepage's detailed arrangement and approved composition live in `.impeccable/surfaces/index-html.md`.

**Key Characteristics:**

- Original Alina photography layered with semantic text.
- White, graphite and logo-derived taupe fields.
- Heavy compressed display type and sharp rectangular actions.
- Faceted geometry, deliberate changes of scale and generous section spacing.

## Colors

Taupe is the contact and brand accent. `paper` carries the introduction, personal story, testimonials and footer; `ink` carries the photographic opening, strength section and contact close. `taupe-light` fills the hero's faceted plane. `breathing-surface` distinguishes the breathing section. `taupe-dark` supplies readable brand text and hover states; `line` separates stories. `closing-lettering` keeps the decorative closing wordmark legible against ink.

The CSS custom properties in `styles.css` are the implementation source of truth. Hero plane fills also occur in inline SVG and must be updated together with their matching token.

## Typography

All fonts are self-hosted under `assets/fonts/`, with OFL licenses. Anton provides the tall Latin wordmarks. `Noto Display` is the static condensed 900-weight Noto Sans Hebrew file; `Noto Hebrew` is the variable body family. All use `font-display: swap`.

The large brand wordmark deliberately exceeds the usual heading ceiling to reproduce the selected composition. The hero title uses two lines, with `scaleX(.82)` anchored at the right on desktop. Mobile removes that scale and uses `clamp(44px, 12.5vw, 65px)`, falling to 42px at 360px. Section-specific headline sizes are defined in the CSS; the closing headline reaches 7.5rem. Body copy uses readable normal-width Hebrew, generally 15–23px depending on section and viewport. Program body copy is limited to 50ch. Headings use balanced wrapping and -0.025em tracking.

## Layout

The header is sticky at 94px, then 82px below 1100px, 76px below 800px and 74px below 600px. Navigation becomes a keyboard-accessible disclosure below 800px. Page gutters use the token above and become 24px on phones, 20px at the smallest breakpoint.

The hero is a unified image stage above a two-option rail. The original photograph and masked foreground use identical size, crop position and brightness. `alina-hero-mask.svg` is traced in the original 1400×1050 coordinate system and must never be paired with another photo. Live MAMALINA lettering occupies the layer between them. The headline sits lower right; the contact action sits inside a lower-left faceted plane.

Phone layouts preserve the image, wordmark, headline, contact action and both service choices. The hero service paragraph is exactly 140px wide and physically aligned left with `margin-right:auto; margin-left:0`, while its Hebrew stays right-aligned. This keeps its text inside the diagonal plane at 390px and 320px; do not widen it without visual verification.

The page continues through the white service introduction and large heart, full-width monochrome video invitation, coach story, independent program sections, testimonials and contact close. Desktop uses alternating two-column compositions; phones stack their content. Breakpoints are 1800px (large wordmark cap), 1100px, 800px, 600px and 360px. Section padding is generally 100px, then 75px and 60px. The contact close reserves space for its large decorative lettering and the footer accommodates the phone contact bar.

## Elevation & Depth

The interface has no shadow system. Depth comes from the real image, foreground mask, lettering and faceted planes. A dark photographic overlay supports white text. Sticky navigation and the mobile contact bar use solid surfaces and restrained separators.

## Shapes

Controls and major surfaces are rectangular. Faceted SVG linework and triangular clipping derive from the supplied logo. The circular video play control is a purposeful exception. Keep icon paths in one consistent 1.6px stroke system. Do not add rounded card shells or decorative glow.

## Components

- **Coach and spaces:** the new heart-hand portrait introduces Alina. The strength section uses two original studio photos in a 1.35:1 image grid with an 8px gap. The breathing section leads with the real clinic photograph; a compact branded breathing motif and its existing pause control sit below it. On phones the clinic photo preserves a 4:3 frame. Images are local, unmodified JPEGs with explicit dimensions and descriptive Hebrew alt text.

- **Brand:** the faithfully traced `mamalina-mark.svg` with the exact live name MamAlina Center. The original supplied `mamalina-center-logo.jpg` remains the authority.
- **Contact controls:** rectangular anchors with a directional or WhatsApp SVG icon. All WhatsApp URLs go directly to `https://wa.me/972532831333`, with no prefilled text. Telephone links use `tel:+972532831333`.
- **Service rail:** native links to the two service sections without JavaScript. Enhancement supplies button semantics, pressed state, pointer/Space activation, matching hero copy and a polite status announcement. Both service sections remain independently readable.
- **Navigation:** supports initial focus, Escape, leaving the menu with Tab, outside clicks and recovery when resized to desktop. A skip link reaches the main content.
- **Training video:** the actual local reel loads and plays only after activation. Native controls and a direct-file fallback remain available. It pauses when offscreen or the page becomes hidden; it never resumes automatically.
- **Breathing artwork:** geometric scale and rotation only while visible and the page is active. Pause/resume and live reduced-motion preference changes are supported.
- **Mobile contact bar:** appears after the opening contact action has passed; hides while an inline WhatsApp action or the final contact section is visible, or the menu is open. Bottom padding includes the safe area.

Focus uses a 3px current-color outline with 6px offset. State transitions use `cubic-bezier(.16,1,.3,1)`, generally 0.2–0.9s. Reduced motion removes meaningful animation and smooth scrolling. Content and direct actions remain available without JavaScript.

## Do's and Don'ts

- Do preserve original photographic pixels and matching image/mask transforms.
- Do keep strength and breathing as separate choices.
- Do retain Hebrew RTL semantics, real contact details and supplied factual content.
- Do keep live UI text and controls outside raster assets.
- Do inspect mobile copy against actual diagonal boundaries; an automated contrast scan cannot establish geometric containment.
- Don't substitute the generated mockup's face, gym, claims or text for real business evidence.
- Don't reintroduce the superseded split-hero identity or unrequested card patterns.
- Don't autoplay video or require motion to understand the page.

The independent finish review passed after the mobile paragraph correction. Seven viewport widths and keyboard, motion, video, contact and no-JavaScript checks passed; recorded axe scans returned zero violations. See `.impeccable/finish-review.md` for the verdict and evidence scope.
