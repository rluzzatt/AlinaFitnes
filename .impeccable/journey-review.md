# Long-scroll narrative and pacing — 2026-09-08

Implementing-agent refinement review. This is intentionally a long homepage, not a shortened landing page. No section, image, video, route, header, logo or existing animation was removed.

## Narrative

1. Neutral portrait hero with the exact headline and short brand/service descriptor. No adult-gender or location qualifier.
2. Equal service cards, with the same images, CTA copy and visual weight. Phone internal padding/gaps tighten from 24px to 20px.
3. Alina’s personal introduction retains her language about limiting beliefs, old templates and autopilot; the final sentence is connected to both approaches.
4. Strength develops why the work differs: learning movement, precision, adaptation, gradual challenges, confidence and technique before ego. Existing headings, photo and value rows remain.
5. One paired studio-gallery moment remains, followed by the original studio video and a short invitation to experience the place.
6. Breathwork retains its beige contrast and substantial content, explaining individual attention and age-adapted work for adults, children and babies without treatment outcomes or medical promises.
7. The three existing testimonials remain late in the page, unchanged apart from plain service labels.
8. The final CTA and complete contact/footer markup remain unchanged. Location appears once, in contact.

## Pacing and preservation

- Shared existing styles/tokens only. Secondary service headings scale 40–64px; proof heading 36–56px. Hero and final CTA keep their larger scale. Redundant breakpoint heading declarations were removed.
- Mobile WhatsApp footprint reduces from 58px to 48px before safe-area padding. Existing delayed display, inline-CTA suppression and all JavaScript/animations are unchanged.
- Source/DOM comparison to 821ef7a confirms identical header, final contact, footer, ordered image list, ordered main sections and testimonial quote text. The gallery pair and original video remain.

## Verification

Six widths (320, 393, 600, 800, 844 and 1440px) passed with no horizontal overflow, equal service cards/images/CTAs, smaller secondary heading sizes and one location occurrence. The page remains about 6,300–8,600px tall across these checks, with every major section present. Two axe scans returned zero violations. Service links, real video playback/offscreen pause, and the 48px sticky bar’s visible/hidden states passed. Visual review covered strength, studio experience, breathwork and proof at phone and desktop widths. No script errors.

The sticky bar is intentionally hidden when the final CTA is visible; its visible-state test uses a 600px-tall phone viewport while reading testimonials. Evidence: ignored .qa/journey-* files. Chromium viewport emulation, not a physical-phone or Safari test.
