# MamAlina design

## Identity and purpose

MamAlina is a Hebrew, right-to-left landing page for Alina's strength studio and separate breathing clinic in Kfar Szold. The visitor should recognize the coach, understand the two services, and start a direct WhatsApp conversation. The site remains static and suitable for GitHub Pages.

This refinement preserves the established tan and ink palette, Hebrew typefaces, logo, photographs, service content, and testimonials. Use existing business information; do not invent prices, schedules, qualifications, or client results.

## Color and typography

The source of truth is the `:root` token set in `styles.css`:

- `--ink` / `--ink-soft`: the opening, navigation, and breathing copy.
- `--paper`: the introduction, approach, and stories.
- `--accent-bright`: the second hero line, strength panel, featured quote, and primary contact controls.
- `--accent-deep`: the breathing artwork, closing contact section, and secondary emphasis.
- `--muted`: secondary text on light surfaces.
- `--line` / `--line-light`: separators on light and dark surfaces.

Secular One is the Hebrew display face; Rubik is the reading and control face. Keep large headings balanced, tracking at -0.03em, and readable line lengths. Display type tops out at 6rem. Body copy generally uses 1rem with generous line height. Both fonts load with `display=swap` and system fallbacks.

## Composition

- The desktop opening pairs an ink text field with the original strength photograph. The second headline line uses tan emphasis. On phones, the photo comes first and the main contact button remains within the opening screen at 390×844 and 320×740.
- The introduction pairs the original message with Alina's existing running photograph and an overlapping tan caption.
- Service jump links lead to alternating photo/copy and breathing/copy panels. Tan signals the strength panel; deep brown and ink support the quieter breathing panel.
- The approach section is a short typographic pause. The testimonial layout keeps one featured quote and two supporting stories.
- The close contains both a WhatsApp action and a visible telephone number. Do not add prefilled WhatsApp messages.

Use rectangular surfaces, generous section spacing, and thin separators. Reserve circles for the breathing motif. Icons use a consistent 1.6px SVG stroke. Do not substitute emoji for controls or decorative assets for real photography.

## Responsive behavior and interaction

The layout adapts at 1100px, 800px, 600px, and 360px. The navigation switches to a disclosure menu at 800px; the photo-led mobile layout begins at 600px. Keep touch controls at least 44px tall and respect the bottom safe area for the fixed mobile contact action.

The menu supports Escape, keyboard focus, closing when focus leaves the header, and recovery when resized to desktop. The mobile contact bar appears after the main opening action has scrolled away and hides when an inline WhatsApp action or the closing section is visible.

Motion is limited to a brief opening entrance and the breathing motif. Content is visible by default. Breathing movement only runs while on screen and the document is active; the visitor can pause it. Reduced-motion preference changes take effect immediately. No JavaScript is required to read the page or use contact links.

## Assets and verification

Use the local images under `assets/images/` and preserve their factual context. Specify image dimensions to reserve layout space; load the opening photograph eagerly and other photographs lazily. The existing image also supplies the social sharing preview.

The September 2026 refinement was visually reviewed at 1440px and 390px and checked for overflow, missing images, and broken anchors at 320, 390, 600, 768, 1024, and 1440px. Automated accessibility scans reported no violations on desktop, mobile, or the open mobile menu. Keyboard navigation, contact-bar behavior, pause/resume, reduced-motion changes, and the no-JavaScript contact path were exercised in Chromium.
