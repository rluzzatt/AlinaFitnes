---
name: MamAlina Center — Signature
description: Alina’s heart portrait, clear independent services and faceted brand geometry.
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
    fontSize: "clamp(54px, 6.4vw, 92px)"
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

The user approved `.impeccable/mocks/comp-C.png` on 2026-09-07, then supplied phone screenshots rejecting the overlapping fitness/breathing composition and asked for stronger AI photo work. The current opening retains Signature typography, white navigation, graphite/taupe identity and real source material, but supersedes the masked-photo and intersecting-triangle layout. The latest user refinement makes the heart-hand portrait the main photograph, names the selected service directly, and explicitly explains that the two services can be chosen independently.

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

The main title names the service directly: אימוני כוח / עם אלינה, or נשימה / וריברסינג. It uses clamp(54px, 6.4vw, 92px), becoming clamp(42px, 11.5vw, 60px) on phones. The former opening MAMALINA strip and combined breathing/lifting slogan are removed. Anton remains in the decorative closing wordmark. Body copy uses normal-width Hebrew, and headings retain balanced wrapping with -0.025em tracking.

## Layout

The header is sticky at 94px, then 82px below 1100px, 76px below 800px and 74px below 600px. Navigation becomes a keyboard-accessible disclosure below 800px. Page gutters use the token above and become 24px on phones, 20px at the smallest breakpoint.

The service selector sits directly below the header at every width. It has two equal columns, an 8px gap, rectangular bordered controls at least 54px tall, and a taupe selected state. Labels use normal-width Noto Hebrew, 18px on desktop and 15–18px on phones, with 1.5 line height. It has its own stacking context and no decorative element covers its hit area.

The opening is a two-column portrait and message composition capped at 1440px. Strength uses alina-portrait-editorial.webp on graphite; breathing uses breathing-clinic-retouched.webp on warm paper. Only the selected photograph is exposed. At 800px and below, the image and message stack in normal flow. The image is square on phones, with a 600px height cap on tablets and a crop that keeps Alina’s head and heart gesture visible. Title, description and action never overlap the photo. The old photographic mask and intersecting planes remain retired.

The page continues through a white introduction headed מצאו את המרחב שלכם, with concise descriptions of each service and an explicit statement that no combination is required. The faceted logo has MamAlina Center centered beneath it; on phones this lockup follows the copy. Then come Alina’s story, independent program sections, testimonials and contact. The full-width training reel is removed. Desktop sections alternate two columns, while phones stack. Section spacing and the existing responsive navigation/contact bar remain unchanged.

## Elevation & Depth

The interface has no shadow system. Depth comes from editorial photographic lighting, scale and contrasting solid surfaces. Sticky navigation and the mobile contact bar use solid backgrounds and restrained separators. No hero text is placed over a photograph or clipped by a polygon.

## Shapes

Controls and major surfaces are rectangular. Faceted SVG linework belongs to the supplied logo and breathing motif. The circular video play control is a purposeful exception. Keep icon paths in one consistent 1.6px stroke system. Do not add rounded card shells or decorative glow.

## Components

- **Coach and spaces:** the existing AI-edited heart portrait is now both the main and About photograph. Three new built-in Imagegen retouches clean studio floors, equipment marks and incidental clinic clutter, retaining the real spaces and materials. Current space images end in -retouched.webp. Originals and earlier derivatives remain separate. Exact prompts and output paths are in `.impeccable/photo-cleanup-prompts.md`; the earlier portrait prompt remains in editorial-photo-prompts.md.

- **Brand:** the faithfully traced `mamalina-mark.svg` with the exact live name MamAlina Center. The original supplied `mamalina-center-logo.jpg` remains the authority.
- **Contact controls:** rectangular anchors with a directional or WhatsApp SVG icon. All WhatsApp URLs go directly to `https://wa.me/972532831333`, with no prefilled text. Telephone links use `tel:+972532831333`.
- **Service rail:** native links to the two service sections without JavaScript. Enhancement supplies button semantics, pressed state, pointer/Space activation, matching hero copy and a polite status announcement. Both service sections remain independently readable.
- **Navigation:** supports initial focus, Escape, leaving the menu with Tab, outside clicks and recovery when resized to desktop. A skip link reaches the main content.
- **Video:** only the 24-second מרחב האימון tour remains on the page. The user-requested removals are רגע מתוך האימון and הציוד בסטודיו; their files remain archived and are not requested or linked by the page. The single tour is centered in a column up to 800px, loads on activation, keeps native controls and a direct-file fallback, contains the entire portrait frame, and pauses offscreen or when the page becomes hidden. No autoplay.
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
- Don't reintroduce the superseded overlapping hero planes or unrequested card patterns.
- Don't autoplay video or require motion to understand the page.

The original independent review remains historical. The latest implementing-agent refinement check is `.impeccable/welcome-review.md`, covering the revised opening, independent service copy, stacked logo, one remaining film and three photo retouches. These are desktop Chromium checks, not a physical-phone or Safari test.
