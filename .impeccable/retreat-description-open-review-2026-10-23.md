# Retreat description initially open — local review

User request: open the full retreat details so visitors need not click to reveal them. The affected native disclosure is ״לתיאור המלא ולוח הזמנים״, not the privacy disclosure.

Implementation: add the HTML `open` attribute to `.retreat-full-description`. Preserve all copy, styles, form submission, payment, tracking, other disclosures and native keyboard/collapse behavior. The existing long-description placement follows registration and contact help.

Verified locally at 1920px desktop and 393×852 phone: initially open after reload, all five story sections and ten schedule rows rendered, 16px story body on phone, no horizontal overflow in the phone dialog (clientWidth and scrollWidth both359px). Enter closes/reopens the native summary. The privacy disclosure remains initially closed. No production form or payment was submitted and no campaign changes were made in this refinement.

Evidence: Marketing/output/mamalina-retreat-details-open-desktop-2026-10-23.png and Marketing/output/mamalina-retreat-details-open-mobile-2026-10-23.png. Preview: http://127.0.0.1:4399/index.html?retreat=preview.

Mechanical detector ran once on index.html. It reported existing site-wide warnings about hover contrast, header height transition, edge-aligned editorial sections, existing 10.4px retreat launcher text, and colors outside the palette sidecar. This scoped HTML-only attribute change introduces none of those styles; they were not broadened into an unrelated redesign. `git diff --check` passed.

Verdict: requested default-open behavior passes scoped desktop/mobile and keyboard review. The user was shown the local preview and explicitly approved publication with “מאשרת להעלות ללייב”. This approval supersedes the local-only hold and authorizes commit/push/deployment of this refinement. No production registration or payment is part of verification.
