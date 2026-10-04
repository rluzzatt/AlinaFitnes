# Retreat popup — local preview handoff

4 October 2026. The [registration-flow finish review](../.qa/retreat/registration-review.md) found no material issues in the popup scope. The [initial popup review](../.qa/retreat/finish-review.md) records the earlier draft before the registration link was supplied. These reviews covered local preview; the user subsequently explicitly authorized push/publication with “Push it”.

## Scope and release boundary

The existing homepage now has a dismissible Hebrew RTL invitation for Alina's seven-chakra workshop: 10 November 2026, Kfar Szold, 09:30 with approximate finish 16:00–16:15, 550 ILS including brunch, refreshments, workbook and home practice; women and men, no prior experience. Copy is concise and grounded in the supplied text. The exact supplied PayBox and bit destinations are retained behind the guest-confirmation step. The existing header, main content and footer are unchanged.

Preview: http://127.0.0.1:4398/?retreat=preview. It opens once per local session, supports reopening, and the query forces another local preview. The supplied public Google Form opens from a native registration link in a new tab. Guests return and tick a submission declaration to unlock payment destinations. The declaration is disabled before the Form link is used; opening the Form alone does not unlock payment. Unchecking removes the payment hrefs again. Only boolean opened/confirmed states are stored for the browser session. No separate Sheet is created.

The public Form was fetched read-only and returned HTTP 200 with title ״טופס הרשמה לסדנה״. Guest declaration was the stated local-preview approach and was included in the user's subsequent release authorization; it is not automatic Google submission verification. `script.js` now sets `retreatPublished = true`. The popup opens publicly once per session, and its reopen control uses visitor-facing workshop copy and clears the floating WhatsApp bar on phones. The force-preview query remains local-only.

## Design and portrait provenance

This ordinary extension follows the [direction contract](surfaces/retreat-popup.md) and inherits the incumbent [DESIGN.md](../DESIGN.md) and [design sidecar](design.json): warm beige/ink/taupe, local Noto Display/Noto Hebrew, sharp rectangular controls and real photography. Desktop uses copy at right and portrait at left; phone uses a compact portrait followed by copy in one native scrollable dialog with an available close control. Existing design documents are preserved. Previously reported font-ramp/sidecar detector drift predates this extension and is outside its scope; no drift repair was made.

The popup reuses `assets/images/alina-portrait-editorial.webp` (960 × 1280), the existing editorial derivative of Alina's supplied `alina-portrait-heart.jpg`. Its original source and earlier Imagegen edit history are recorded in the [asset manifest](asset-manifest.md) and [editorial photo prompts](editorial-photo-prompts.md#alina-portrait-editorial). No raster was generated or edited for this popup.

## Evidence and limits

- [QA report](../.qa/retreat/report.json) and [test script](../.qa/retreat/check.cjs): widths 320, 390, 430, 768 and 1440 passed without horizontal overflow or offscreen dialog bounds; portrait loaded and background scrolling was locked.
- Escape, close, reopen and session dismissal passed at all five widths. Mobile assertions also cover outside dismissal, background focus confinement and the existing phone menu.
- Popup-scoped axe WCAG A/AA checks found zero violations at 390 and 1440. No JavaScript errors or failed local resources were reported. Exact registration/payment destinations, initially locked payments, opening-only remaining locked, checkbox unlock/relock and session persistence were asserted. The automated registration window uses a local test stub; it does not submit the actual Form.
- Public-hostname simulation served local files and confirmed approved popup auto-opening, initially locked payments and the workshop reopen control. Mobile geometry verifies that the reopen control clears the WhatsApp bar. The test also asserts that header, main and footer match the original homepage.
- Captures: [desktop](review/retreat/desktop.png), [desktop payments](review/retreat/desktop-payments.png), [desktop confirmed](review/retreat/desktop-confirmed.png), [mobile](review/retreat/mobile.png), [mobile payments](review/retreat/mobile-payments.png) and [mobile confirmed](review/retreat/mobile-confirmed.png).

Coverage is automated Chrome and rendered captures, without a physical-device or screen-reader session. Neither registrations nor payments were submitted; external payment account state is unverified. `.qa/` evidence is local and ignored by Git. The current flow relies on guest self-confirmation. Automatic verification would need a further integration and the user's decision.
