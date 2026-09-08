---
name: MamAlina Center — Signature
description: A neutral brand portrait and two equally weighted independent service choices and faceted brand geometry.
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

The user approved `.impeccable/mocks/comp-C.png` on 2026-09-07, then supplied phone screenshots rejecting the overlapping fitness/breathing composition and asked for stronger AI photo work. The current opening retains Signature typography, white navigation, graphite/taupe identity and real source material. The latest 2026-09-08 refinement preserves the intentionally long brand journey: neutral hero, equal service worlds, Alina’s voice, deeper strength explanation, real studio experience, age-inclusive breathwork, late proof and final conversion. No major section is removed.

The website remains Hebrew RTL and static. Strength training and the breathing clinic are independent offerings. Product truth lives in `PRODUCT.md`; the homepage's detailed arrangement and approved composition live in `.impeccable/surfaces/index-html.md`.

**Key Characteristics:**

- AI editorial edits of supplied Alina photographs, with semantic text in its own space.
- White, graphite and logo-derived taupe fields.
- Heavy compressed display type and sharp rectangular actions.
- Faceted geometry, deliberate changes of scale and generous section spacing.

## Colors

Taupe is the contact and brand accent. The neutral brand opening uses #e7ddd4 with ink text. `paper` carries navigation, both equal service cards, introduction, personal story, testimonials and footer; `ink` carries the relocated strength hero, strength section and contact close. Both service-card CTAs use the same ink background and paper text. `breathing-surface` distinguishes the existing detailed clinic section. `taupe-dark` supplies readable brand text and hover states; `line` supplies identical card borders and story separators.

The CSS custom properties in `styles.css` are the implementation source of truth. The shared hero defines local `--hero-surface` and `--hero-text` tokens; homepage-hero supplies the neutral beige variant, with no service state.

## Typography

All fonts are self-hosted under `assets/fonts/`, with OFL licenses. Anton provides the tall Latin wordmarks. `Noto Display` is the static condensed 900-weight Noto Sans Hebrew file; `Noto Hebrew` is the variable body family. All use `font-display: swap`.

The homepage title is כוח לגוף. / מרחב לנשימה. The relocated strength hero retains אימוני כוח / עם אלינה as an H2 using the same hero-title class. Display sizes remain clamp(54px, 6.4vw, 92px), becoming clamp(42px, 11.5vw, 60px) on phones. Service headings use 40–64px and testimonial heading 36–56px to create a secondary scale. Anton remains in the decorative closing wordmark. Body copy uses normal-width Hebrew, and headings retain balanced wrapping with -0.025em tracking.

## Layout

The header starts at 94px, then 82px below 1100px, 76px below 800px and 74px below 600px. On mobile it becomes 64px after 100px of scrolling, restoring near the top (24px threshold). Logo and icon sizes transition subtly; touch targets remain at least 44px. The initial mobile header is already below the requested approximate 75–85px compact target, so 64px provides an actual reduction. Navigation becomes a keyboard-accessible disclosure below 800px. Page gutters use the token above and become 24px on phones, 20px at the smallest breakpoint.

The homepage has no selector or service state. Immediately after the neutral hero, two equally weighted cards link directly to #strength and #breath. Both use the same service-card class, typography, paper surface, line border, padding and button-dark action. Grid rows are equal height; above 800px there are two equal columns, and below they stack. CTA icons point left in RTL. Both cards use the same 8:5 image frame, spacing and object-fit: the existing training and retouched clinic photographs. Their CTA text is גלו את אימוני הכוח and גלו את עולם הנשימה. Phone internal padding and gap are 20px.

The neutral opening reuses the two-column hero-stage capped at 1440px, with the brand message first in RTL and alina-portrait-editorial.webp beside it on warm beige. At 800px and below the message and photo stack in that order. At 600px and below, only the homepage portrait is reduced to an 8:7 frame, with a 30% vertical focal position. The preserved strength hero uses the same layout and title class on graphite at the beginning of #strength, with alina-training-editorial.webp and its existing action. The old tabs, mode code, photographic mask and intersecting planes are removed.

Immediately after the two illustrated service cards comes the existing אני אלינה section, with its prominent opening line and the user-supplied four-paragraph personal introduction. The redundant מצאו את המרחב שלכם section, its duplicate links and logo lockup are removed. Then come the independent program sections, testimonials and contact. The full-width training reel is removed. Desktop sections alternate two columns, while phones stack. Section spacing and the existing responsive navigation/contact bar remain unchanged.

## Elevation & Depth

The interface has no shadow system. Depth comes from editorial photographic lighting, scale and contrasting solid surfaces. Sticky navigation and the mobile contact bar use solid backgrounds and restrained separators. No hero text is placed over a photograph or clipped by a polygon.

## Shapes

Controls and major surfaces are rectangular. Faceted SVG linework belongs to the supplied logo and breathing motif. The circular video play control is a purposeful exception. Keep icon paths in one consistent 1.6px stroke system. Do not add rounded card shells or decorative glow.

## Components

- **Coach and spaces:** the existing AI-edited training image belongs to the relocated strength hero; the heart-hand portrait is the neutral brand hero and appears only once. About is text-only, with its heading beside the copy on desktop and above it on phones. Three new built-in Imagegen retouches clean studio floors, equipment marks and incidental clinic clutter, retaining the real spaces and materials. Current space images end in -retouched.webp. Originals and earlier derivatives remain separate. Exact prompts and output paths are in `.impeccable/photo-cleanup-prompts.md`; the earlier portrait prompt remains in editorial-photo-prompts.md.

- **Brand:** the faithfully traced `mamalina-mark.svg` with the exact live name MamAlina Center. The original supplied `mamalina-center-logo.jpg` remains the authority.
- **Contact controls:** rectangular anchors with a directional or WhatsApp SVG icon. Strength uses לשיעור ניסיון; breathwork uses למפגש נשימה; general links use שלחו לי הודעה. Service-card exploration wording remains unchanged. Final invitation: רוצים לנסות? / כוח, נשימה או פשוט לא בטוחים מה מתאים — שלחו הודעה. All WhatsApp URLs go directly to `https://wa.me/972532831333`, with no prefilled text. Telephone links use `tel:+972532831333`.
- **Strength rhythm:** the existing barbell introduction stays dark. The following explanation is white with dark typography: לומדים לעבוד נכון. is the primary heading, מגלים כמה אתם חזקים. is the smaller supporting statement. Keep the paired studio images, dark studio video moment and warm beige breathwork area. Do not repeat the strength introduction or make the whole journey black.
- **Service choices:** two equal editorial articles without borders, inner padding, backgrounds or card treatment. Existing photos retain their full 4:3 framing and fill each column. Titles, descriptions and underlined text links with left arrows follow; internal exploration is not styled as a conversion button. Mobile offerings have 72px separation, desktop columns 48px. Native links navigate to existing sections. No service is selected or visually promoted.
- **Navigation:** supports initial focus, Escape, leaving the menu with Tab, outside clicks and recovery when resized to desktop. A skip link reaches the main content.
- **Video:** only the 24-second מרחב האימון tour remains on the page. The user-requested removals are רגע מתוך האימון and הציוד בסטודיו; their files remain archived and are not requested or linked by the page. The single tour is centered in a column up to 800px, loads on activation, keeps native controls and a direct-file fallback, contains the entire portrait frame, and pauses offscreen or when the page becomes hidden. No autoplay.
- **Breathing artwork:** geometric scale and rotation only while visible and the page is active. Pause/resume and live reduced-motion preference changes are supported.
- **Mobile contact bar:** appears after both opening service choices have passed; hides while an inline WhatsApp action or the final contact section is visible, or the menu is open. The mobile bar is 48px before safe-area padding; its existing delayed/suppressed display behavior is preserved.

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

The original independent review remains historical. The latest narrative/pacing refinement is `.impeccable/journey-review.md`; the previous top/intro refinement is `.impeccable/intro-cards-review.md`; the previous brand-opening refinement is `.impeccable/brand-home-review.md`; the previous image-placement refinement is `.impeccable/service-photo-review.md`; the broader refinement check is `.impeccable/welcome-review.md`, covering the revised opening, independent service copy, stacked logo, one remaining film and three photo retouches. These are desktop Chromium checks, not a physical-phone or Safari test.
