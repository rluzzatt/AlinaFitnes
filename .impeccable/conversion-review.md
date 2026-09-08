# Focused conversion refinement — 2026-09-08

Scope: user's exact hero supporting sentence, consistent לשיעור ניסיון conversion labels and lighter final invitation; compact mobile header and a 7px reduction in the About heading/body gap. Existing images, section order, service-card markup, testimonials and footer are preserved against 5be51f8. No page or major section removed.

Header initial height remains 74px on phones and 76px on tablets; scrolled height is 64px, since the existing initial header is already at/below the user's approximate 75–85px compact target. Thresholds 100/24px avoid state oscillation. Existing scroll RAF handles both header and contact bar. Controls retain 44px minimum targets, menu positioning follows the header, and reduced motion uses the existing global rule. Desktop heights remain unchanged.

The mobile WhatsApp bar retains its 48px footprint and existing delayed/suppressed appearance. All WhatsApp destinations remain unchanged. Location occurs only in contact; inclusive breathwork copy remains untouched.

Validation: Chromium at 320, 393, 600, 800, 844 and 1440px; no horizontal/text overflow, equal cards, long page retained, correct trial copy and header heights. Axe at 393/1440 found no violations. Normal-motion checks covered threshold stability, strength/breathwork anchors, resize to desktop, return to top, and keyboard menu/Escape. Mobile bar visibility and suppression passed. Hero, final invitation and compact-header screenshots inspected. These are desktop browser checks, not physical-phone/Safari testing.

Evidence: ignored .qa/conversion-check.cjs, header-check.cjs, conversion-report.json and conversion screenshots.
