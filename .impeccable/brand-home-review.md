# Brand homepage top — 2026-09-08

Scope: neutral MamAlina Center homepage hero, immediately followed by two equal service choices. Header and existing lower sections are preserved; the former barbell hero moves into the strength section. Implementing-agent verification, not an independent redesign review.

## Implementation

- Reused the existing hero layout, Noto typography, white/ink/beige palette, section gutters, rectangular button-dark CTA and left-pointing arrow. The existing heart-hand portrait represents Alina and the brand and appears once. No new image or design system.
- Exact user-supplied headline, supporting text and service-card text. The homepage has no selected service, tabs, mode-switch script or live mode announcement. Service links are native #strength/#breath anchors and never change the homepage hero.
- Both service cards use the same class, width, height, typography, surface, border, padding and CTA styling. Desktop has two equal columns in RTL order; at 800px and below they stack in equal-height rows. No featured service or unequal imagery.
- The barbell photo and אימוני כוח / עם אלינה hero copy/action remain together as the first child of #strength. Existing strength content follows unchanged. Shared .hero-title supports the homepage H1 and moved H2 without a second styling system.
- The existing mobile contact bar uses the end of the new service choices as its opening boundary, so it does not cover either choice. Existing menu, video and breathing behavior is retained.

## Checks

- Nine viewport widths: 320, 393, 600, 601, 768, 800, 844, 1024 and 1440px. Matching card dimensions and computed styles at each width; both CTAs measure 54px high. No horizontal overflow or clipped headline/card text.
- Exactly one H1, no top tabs, one portrait, and the original barbell image/title in #strength. Both card links reach the correct sections; returning home keeps the neutral hero. Mobile menu and contact-bar recovery work. Links work with JavaScript disabled.
- Two axe scans (393px and 1440px) returned zero violations; no page script errors. Visual review covered the homepage, paired/stacked cards and moved strength hero at phone and desktop sizes.
- Keyboard Enter activates the service link; the new dark card CTAs have a visible ink focus outline against their white surroundings.
- DOM comparison against commit 5802755 confirms unchanged header, introduction, About, breathing, testimonials, contact and footer. The strength section also matches after excluding the intentionally inserted hero.

Local evidence: ignored .qa/brand-home-report.json and .qa/brand-*.png. Chromium viewport emulation, not a physical phone or Safari test.
