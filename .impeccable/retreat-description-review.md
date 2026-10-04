# Retreat full description — finish record

4 October 2026. Final disposition: **ship**. The [full review](../.qa/retreat/description-review.md) required one material fix: text entered the sticky close button's footprint. The [scoped verdict](../.qa/retreat/description-verdict.md) confirms that fix is resolved in the same eight recaptured states, with no regressions observed. That verdict scores the close-control fix; the earlier full review supports the description extension.

## Scope and content authority

The user's later request adds the supplied five-part Hebrew workshop description to the existing retreat popup in `index.html`, with reading styles in `styles.css`. An initially closed native disclosure, “לתיאור המלא ולוח הזמנים”, contains the opening, purpose, experience/home practice, ten-row schedule and Alina's introduction/closing invitation. Source page-number labels are omitted from the published copy. The supplied closing action, “כן, אני רוצה לשמור את המקום שלי”, follows the disclosure and opens the existing Google Form.

`script.js` is unchanged in this extension. The exact Google Form, PayBox and bit destinations and guest-confirmation gate remain: opening the Form alone does not unlock payments; confirming submission unlocks them, and unchecking relocks them. This remains a guest declaration. The user's earlier “Push it” authorization continues to cover publication through the existing GitHub Pages flow.

## Incumbent design and image provenance

This narrow extension follows the [surface contract](surfaces/retreat-popup.md) and inherits [DESIGN.md](../DESIGN.md) and the [design sidecar](design.json): warm beige/ink/taupe, local Noto Hebrew/Noto Display, square controls, Hebrew RTL and real photography. Both system documents remain unchanged; unrelated historical detector drift is outside this pass. The new body hierarchy and native disclosure extend the existing editorial reading pattern.

The close control retains its target (44px) in a dedicated opaque sticky strip (56px), with dialog scroll padding (68px). The desktop portrait sticks below that strip and is bounded by the viewport; phone photography stays in normal flow. This reserves reading space while preserving the existing composition.

The existing `assets/images/alina-portrait-editorial.webp` (960 × 1280) is unchanged. It derives from Alina's supplied heart-hand portrait, `alina-portrait-heart.jpg`; the [asset manifest](asset-manifest.md) and [earlier edit prompts](editorial-photo-prompts.md#alina-portrait-editorial) record its provenance. No image was generated or edited for this extension.

## Evidence and limits

- [Baseline report](../.qa/retreat/report.json) / [check](../.qa/retreat/check.cjs): 320, 390, 430, 768 and 1440px layouts and existing popup/payment flow pass, without horizontal overflow, JavaScript errors or failed local resources.
- [Description report](../.qa/retreat/description-report.json) / [check](../.qa/retreat/description-check.cjs): all five widths pass native keyboard expansion/collapse, expanded overflow, close availability, five-section and ten-row checks. Popup-scoped axe WCAG A/AA checks report zero violations in collapsed and expanded states at 390 and 1440px.
- Reviewed recaptures: [desktop](review/retreat/desktop.png), [phone](review/retreat/mobile.png); 1440px [opening](review/retreat/description-1440-opening.png), [schedule](review/retreat/description-1440-schedule.png), [closing](review/retreat/description-1440-closing.png); 390px [opening](review/retreat/description-390-opening.png), [schedule](review/retreat/description-390-schedule.png), [closing](review/retreat/description-390-closing.png).

Reports are builder-produced automated Chrome results. The reviewer independently inspected the captures and code, without rerunning browser tests; the scored verdict rechecked the fix in the images. Exact source transcription was not independently certified because the original five-part text was summarized in the review packet. No physical-device or screen-reader session, real registration or payment occurred. External payment account state remains unverified. `.qa/` and rendered captures are local, Git-ignored evidence; this record preserves their references and conclusions.
