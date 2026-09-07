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
    fontSize: "clamp(72px, 20.6vw, 300px)"
    fontWeight: 400
    lineHeight: 1.08
    letterSpacing: "-0.025em"
  display:
    fontFamily: "Noto Display, Noto Hebrew, sans-serif"
    fontSize: "clamp(48px, 6.1vw, 82px)"
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

The user approved `.impeccable/mocks/comp-C.png` on 2026-09-07, then supplied phone screenshots rejecting the overlapping fitness/breathing composition and asked for stronger AI photo work. The current opening retains Signature typography, white navigation, graphite/taupe identity and real source material, but supersedes the masked-photo and intersecting-triangle layout. It now has two complete photographic service views.

The website remains Hebrew RTL and static. Strength training and the breathing clinic are independent offerings. Product truth lives in `PRODUCT.md`; the homepage's detailed arrangement and approved composition live in `.impeccable/surfaces/index-html.md`.

**Key Characteristics:**

- AI editorial edits of supplied Alina photographs, with semantic text in its own space.
- White, graphite and logo-derived taupe fields.
- Heavy compressed display type and sharp rectangular actions.
- Faceted geometry, deliberate changes of scale and generous section spacing.

## Colors

Taupe is the contact and brand accent. `paper` carries navigation, the service selector, introduction, personal story, testimonials and footer; `ink` carries the strength opening, strength section and contact close. `taupe-light` marks the selected service. The breathing opening uses #e7ddd4 with ink text, while `breathing-surface` distinguishes its detailed service section. `taupe-dark` supplies readable brand text, selected borders and hover states; `line` separates stories.

The CSS custom properties in `styles.css` are the implementation source of truth. The hero defines local `--hero-surface` and `--hero-text` tokens according to the selected service.

## Typography

All fonts are self-hosted under `assets/fonts/`, with OFL licenses. Anton provides the tall Latin wordmarks. `Noto Display` is the static condensed 900-weight Noto Sans Hebrew file; `Noto Hebrew` is the variable body family. All use `font-display: swap`.

The large brand wordmark deliberately exceeds the usual heading ceiling, using `clamp(72px, 20.6vw, 300px)` and a 1.08 line height. It occupies a separate strip above the photograph; never let it obscure Alina or intercept controls (`pointer-events:none`). The two-line hero title uses `clamp(48px, 6.1vw, 82px)`, becoming `clamp(42px, 11.5vw, 60px)` on phones. Body copy uses normal-width Hebrew. Program copy is limited to 50ch. Headings use balanced wrapping and -0.025em tracking.

## Layout

The header is sticky at 94px, then 82px below 1100px, 76px below 800px and 74px below 600px. Navigation becomes a keyboard-accessible disclosure below 800px. Page gutters use the token above and become 24px on phones, 20px at the smallest breakpoint.

The service selector sits directly below the header at every width. It has two equal columns, an 8px gap, rectangular bordered controls at least 54px tall, and a taupe selected state. Labels use normal-width Noto Hebrew, 18px on desktop and 15–18px on phones, with 1.5 line height. It is above the decorative wordmark in the stacking order so large font hit areas cannot intercept clicks.

Each hero view consists of a live MAMALINA strip, one photograph and an unclipped message block. Strength uses `alina-training-editorial.webp` on graphite; breathing uses `breathing-clinic-editorial.webp` on warm paper. Only the selected image is exposed. The image viewport stays the same size across modes: 360–580px on desktop and 310–460px on phones. The title, description and action sit below it in normal document flow; on phones they stack with a full-width action. Repeated switching preserves the component height. The old 140px diagonal-containment rule and photographic mask are superseded; their assets remain archived.

The page continues through the white service introduction and large heart, full-width monochrome video invitation, coach story, independent program sections, testimonials and contact close. Desktop uses alternating two-column compositions; phones stack their content. Breakpoints are 1100px, 800px, 600px and 360px; the opening is capped at 1800px wide. Section padding is generally 100px, then 75px and 60px. The contact close reserves space for its large decorative lettering and the footer accommodates the phone contact bar.

## Elevation & Depth

The interface has no shadow system. Depth comes from editorial photographic lighting, scale and contrasting solid surfaces. Sticky navigation and the mobile contact bar use solid backgrounds and restrained separators. No hero text is placed over a photograph or clipped by a polygon.

## Shapes

Controls and major surfaces are rectangular. Faceted SVG linework belongs to the supplied logo and breathing motif. The circular video play control is a purposeful exception. Keep icon paths in one consistent 1.6px stroke system. Do not add rounded card shells or decorative glow.

## Components

- **Coach and spaces:** five supplied photographs now use a stronger built-in Imagegen editorial treatment: the restored training frame, tighter heart-hand portrait, two studio views and warm clinic image. Source JPEGs and first-pass enhancements remain in the repository; current files end in `-editorial.webp`. The portrait retains the head and hand gesture. The studio grid stays 1.35:1 with an 8px gap; the clinic photo stays above the compact breathing motif. Source files, output links and exact prompts are recorded in `.impeccable/editorial-photo-prompts.md`.

- **Brand:** the faithfully traced `mamalina-mark.svg` with the exact live name MamAlina Center. The original supplied `mamalina-center-logo.jpg` remains the authority.
- **Contact controls:** rectangular anchors with a directional or WhatsApp SVG icon. All WhatsApp URLs go directly to `https://wa.me/972532831333`, with no prefilled text. Telephone links use `tel:+972532831333`.
- **Service rail:** native links to the two service sections without JavaScript. Enhancement supplies button semantics, pressed state, pointer/Space activation, matching hero copy and a polite status announcement. Both service sections remain independently readable.
- **Navigation:** supports initial focus, Escape, leaving the menu with Tab, outside clicks and recovery when resized to desktop. A skip link reaches the main content.
- **Videos:** the original training reel and two supplied studio tours load and play only after activation. The studio tours sit together below the strength photos, with real extracted posters, titles and durations. Their gallery has two columns on desktop and one on phones; 4:3 players contain the entire portrait video without cropping playback. Native controls, fullscreen and direct-file fallbacks remain available. Only one film plays at a time. Films pause offscreen or when the page becomes hidden, and never resume automatically. MP4 fast-start metadata improves startup while preserving the supplied audio/video streams.
- **Breathing artwork:** geometric scale and rotation only while visible and the page is active. Pause/resume and live reduced-motion preference changes are supported.
- **Mobile contact bar:** appears after the opening contact action has passed; hides while an inline WhatsApp action or the final contact section is visible, or the menu is open. Bottom padding includes the safe area.

Focus uses a 3px current-color outline with 6px offset. State transitions use `cubic-bezier(.16,1,.3,1)`, generally 0.2–0.9s. Reduced motion removes meaningful animation and smooth scrolling. Content and direct actions remain available without JavaScript.

## Do's and Don'ts

- Do retain original media alongside user-requested AI derivatives, preserving identity and the actual studio. Never reuse the retired original mask with an edited photograph.
- Do keep strength and breathing as separate choices.
- Do retain Hebrew RTL semantics, real contact details and supplied factual content.
- Do keep live UI text and controls outside raster assets.
- Do keep title and contact copy in normal flow, inspect both service views and preserve steady geometry while switching.
- Don't substitute the generated mockup's face, gym, claims or text for real business evidence.
- Don't reintroduce the superseded split-hero identity or unrequested card patterns.
- Don't autoplay video or require motion to understand the page.

The original composition has its historical independent review in `.impeccable/finish-review.md`. The current correction is documented separately in `.impeccable/editorial-review.md`; it passed both modes at nine viewport sizes, repeated switching, enlarged labels, keyboard/menu actions, all three video players, no-JavaScript paths and four axe scans. These are desktop browser checks, not a physical phone or Safari test.