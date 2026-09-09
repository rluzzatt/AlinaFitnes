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

BODY + BREATH: two distinct worlds connected by Alina. The 2026-09-09 hierarchy supersedes earlier local layout directions while preserving the warm beige/white/ink palette, existing real photography, Hebrew RTL and bold editorial identity. Keep the intentionally long scroll. Detailed arrangement lives in .impeccable/surfaces/index-html.md; product facts in PRODUCT.md.

## Colors and type

Use existing CSS tokens only. The brand opening is warm neutral beige; Alina, service choices and proof use white; Strength opens in ink with taupe lines; Breath opens and continues in warm beige. Stronger white/black contrast belongs deeper inside Strength. No cards, shadows, gradients or arbitrary decorative dividers.

Self-hosted Noto Display carries heavy Hebrew headings; Noto Hebrew carries body and labels; Anton carries Latin wordmarks. Main title remains כוח לגוף. / מרחב לנשימה. Both chapter headings share 40–72px scale, line-height 1.1. All three normal testimonials use 18px / 400 / 1.85; names 13px bold and service labels 12px muted regular. Only Ayala's short quote uses the 32–52px display scale.

## Story architecture

1. Brand introduction: typography and current supporting copy, no photograph.
2. Two equal worlds: shared abstract line family, title, exact short description and text link. Two desktop columns, stacked mobile. No preview photos or cards.
3. Alina: the existing heart-hand portrait appears once, immediately with אני אלינה. and her exact personal copy on white. The short כוח אמיתי statement is a modest body pull quote, not a dark manifesto.
4. Strength: shared chapter opening → lifting photograph → detailed approach/principles/CTA → paired training-space gallery and original studio video.
5. Breath: shared chapter opening → wooden-room photograph → detailed process/principles/CTA → closer room detail and quiet flowing-line closing. No person receiving treatment.
6. Real Strength testimonials, then existing dark contact/footer with cropped MAMALINA wordmark.

## Shared chapter system

Both service openings use chapter-opening: illustration → category → headline → support, followed by chapter-photo and program-copy. Strength category is אימוני כוח, headline לומדים לעבוד נכון. / מגלים כמה אתם חזקים.; brand name is not used as its eyebrow. Breath category is נשימה וריברסינג, headline מרחב לנשום., support לפעמים החוזק מתחיל דווקא בשחרור. Do not repeat these headings in detailed content.

The three angular paths and three flowing paths are defined once as SVG symbols lines-strength and lines-breath. The same family appears in the early choices and chapter entrances; the existing breath close reuses its curves. These are thin abstract fragments, not logos or literal fitness/wellness icons. Dark Strength uses existing taupe strokes; light contexts use taupe-dark.

## Photography and layout

Every photo belongs to its content. Heart portrait belongs to About. Squat/lifting image belongs once to Strength. Studio photos remain a paired unit; one 24-second tour remains. Wide wooden room belongs to Breath; closer seating detail is its atmosphere. Available clinic images are edits of one camera viewpoint, not distinct photographed angles. Original files remain in assets.

Chapter openings/photos span the page. Photography frames share 16:10 desktop and 4:3 phone behavior; photographs retain their original files. About uses portrait/copy columns on desktop and portrait → copy on phones. Reuse existing gutters: 24px phone, 20px smallest, fluid desktop. Long-form sections retain generous padding; avoid percentages for stacked row gaps.

## Behavior and actions

Header identity/structure unchanged. Initial heights 94/82/76/74px by breakpoint; mobile compacts to64px after100px scroll and restores near24px. Existing accessible disclosure menu, Escape, focus behavior and skip link remain.

Exploration: גלו את אימוני הכוח / גלו את עולם הנשימה are underlined text links to #strength/#breath. Conversion: Strength לשיעור ניסיון; Breath למפגש נשימה; general שלחו לי הודעה. WhatsApp opens directly at https://wa.me/972532831333. Instagram retains the supplied mamalinacenter URL. Location stays in contact only.

Sticky WhatsApp remains44px before safe-area padding, appears after choices, and hides near inline/final actions or open menu. Video loads on activation and pauses offscreen. Breath motion remains optional, pauses when offscreen/hidden, and respects reduced-motion. No JS changes were required by this refactor.

## Evidence

Real user-supplied testimonials only: הגר שמיר בוכריץ, נועה בנישו, לילך דושי, איילה לפידות. All relate to Strength. Never restore earlier placeholders or invent Breath testimonials. No copy rewritten except hierarchy-required headline placement. Current verification: .impeccable/body-breath-review.md. Older dated reviews are historical, not current layout instructions.
