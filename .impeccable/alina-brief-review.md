# Alina homepage brief — 2026-10-01

Source: user supplied `MamAlina_website_brief_HEBREW_RTL_FINAL.pdf` (six pages). Implement its homepage requirements in the existing BODY + BREATH design.

## Changes

- Replace Hero, service previews, About, Strength, Breath, final invitation and footer wording with the client copy. Strength has four updated benefit rows, Breath three. Preserve all supplied words, including Alina's healing language and signoff.
- Add an independent children-and-babies section immediately after Breath. Three introductory paragraphs are visible; the supplied read-more label opens the remaining paragraphs in a native keyboard-accessible disclosure. No destination was supplied and the user did not answer the optional routing question, so use an inline disclosure to keep the homepage uncluttered.
- Retain the existing header, real photos, 24-second video, four authentic Strength testimonials, direct WhatsApp URLs, Instagram and current palette/fonts. The recommended mother-and-child photo was not supplied. The expanded breathwork page is explicitly suggested for later.
- Update search/social descriptions to remove the old separate-business framing, refresh asset cache keys and sitemap lastmod. Track children's interest through the existing GA4 service_interest event and suppress mobile sticky contact near the disclosure.
- Adjust the three-line Hero's mobile scale and angular fragment placement; keep body copy spacing readable with the longer final invitation.

## Verification

- Extract all seven supplied content blocks directly from the PDF and compare their complete words with the rendered DOM; all match. Brand/footer line matches.
- Desktop and phone screenshots inspected, followed by one batch of fixes and one confirmation round.
- 320/390/430/768/1440px checks: no document or text overflow, no broken local anchors, all images load, children block follows Breath.
- Header, studio film and testimonial source markup preserved exactly against the pre-change commit.
- Keyboard Enter opens the children disclosure; GA4 event fires; click closes it. Native HTML also works without JavaScript.
- Phone menu opens, Escape closes it and restores focus. Service anchors work, header compacts/restores, video plays and pauses offscreen, breath animation pauses and respects reduced motion. Sticky contact yields to the children's details.
- Axe main-content checks passed on phone and desktop. No JavaScript page errors or failed local resources. JS syntax and Git whitespace checks passed.
- Impeccable detector ran once. Existing header layout-transition, inferred hover-contrast and broad container/style advisories are not introduced by this change; actual main-content contrast verified with axe. Typography advisories include intentionally selected sizes within the existing display/body system.

Local evidence: `.qa/alina-brief-report.json`, `.qa/brief-content.json`, `.qa/alina-brief-*.png`. These are ignored scratch artifacts.
