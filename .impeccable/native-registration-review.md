# Native retreat registration — local review, 2026-10-17

Scope: replace the Google Form link and self-declaration with a native form in the existing retreat dialog. Preserve the approved venue copy, photo, long description, schedule, popup behavior, WhatsApp and brand styling.

State: intake connected and publication explicitly approved on 2026-10-17. The user created the Formspree account and confirmed Alina verified its email. Form xqpenkdp was created with that verified recipient; Form Enabled, archive and Formshield are on. No paid plan was purchased. One authorized real test, clearly marked as not a registration, was acknowledged, unlocked payments and appeared in the Formspree Inbox (Spam 0). The notification workflow targets Alina's email; actual receipt in her inbox remains unconfirmed. Project Restrict to Domain was saved as mamalinacenter.co.il after testing. Local preview is now display-only to avoid extra messages.

Checks:

- JavaScript syntax and git whitespace checks pass. Unique IDs, label targets and ARIA references checked. Full supplied retreat story matches the published version. No Google Forms link or self-confirmation remains in the local markup.
- Desktop 1280px and 390px/320px iframe viewport layouts inspected in CUA. Narrow inputs are 48px high; no horizontal overflow in the dialog. Native labels/autocomplete present; phone validation error is linked to the field. Subtitle computed at 24.7px at the narrow breakpoint; detector's 10.4px source estimate is a false positive.
- Local-only mock service: valid submission -> explicit test success and payment links; bad mobile -> validation and no payment; HTTP rejection -> retained values and retry; HTTP200 without acknowledgement -> no payment; 15-second timeout -> retry and no payment. Submit disabled while waiting. Receipt restoration after reload and another-person reset verified.
- Missing endpoint -> explicit not-sent status and no payment. Earlier mock tests submitted dummy data only to 127.0.0.1, where bodies were discarded. The later authorized real test verified Formspree intake. Email inbox receipt and real payments remain outside the verified result.
- No personal form values enter analytics or session storage. Local event tracking is skipped. Only the receipt identifier and endpoint are stored for this session.
- Mechanical detector ran once; existing homepage contrast/layout/spacing findings remain outside this scoped change. No complete accessibility certification is claimed.

Release: publish only after the user's explicit approval (received), then inspect the live form and its configured endpoint without sending a second notification. Preserve the top opener, reload opening and simplified venue copy from a0e2f6e. Do not turn payment-link clicks into Purchase events. The separate Instagram link is not yet verified and advertising remains unpublished.
