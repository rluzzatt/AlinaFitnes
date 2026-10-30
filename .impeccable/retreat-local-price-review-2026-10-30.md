# Upper Galilee price — local preparation, 30 October 2026

## Current verdict — ship the user-approved scope

The user explicitly requested publication after the personal bit preview fix. Standard 550 ILS remains available via both existing methods; resident 450 ILS is available via personal bit. Discounted PayBox awaits configuration evidence and is not part of this release. This verdict supersedes the preparation-stage publication holds below.

Fresh IAB review at 1440×1000 and 393×852 confirms native radio selection, readable RTL price labels, the standard pair of submit methods and bit-only resident choice. Page and dialog have no horizontal overflow at either width. Captures: `C:/Users/dushi/Documents/Marketing/output/mamalina-local-rate-desktop-2026-10-30.png` and `mamalina-local-rate-mobile-2026-10-30.png`. All 17 isolated actual-code cases, syntax and diff checks pass. No production registration or payment was performed. Physical app behavior on a phone is not reverified in this review.

## Preparation history

Later update: IAB became available. The user found that the simulated bit link returned to the local anchor. After local simulation, the native bit link now opens the existing real personal destination; local intake still sends nothing, automatic payment windows stay disabled locally, and PayBox's local preview remains blocked. A real click opened a new bit tab at the exact `/app/me/` personal URL. The desktop bit page instructs opening the link on a phone. One current viewport screenshot was saved at `C:/Users/dushi/Documents/Marketing/output/mamalina-local-personal-bit-2026-10-30.png`; no full desktop/mobile responsive claim is made. The isolated suite now passes 17 cases, including the local link click guards. No payment or production registration was performed. The earlier no-browser/no-capture statements below describe the initial preparation stage. Publication and discounted PayBox remain unresolved.

**Verdict: not ready for publication.** Payment behavior is checked in isolation, but the discounted PayBox destination and visual review remain unresolved.

The user requested 450 ILS for residents, then asked whether both bit and PayBox would mean four buttons. The local refinement uses two native price choices and retains two explicit intake/payment submit buttons. Each shows the selected amount. Standard 550 ILS remains the default; choosing the resident option records intent, not verified residency.

The personal bit destination accepts a manually entered amount based on the user's earlier phone check. The existing PayBox group's acceptance of 450 ILS has not been checked. A question is pending; do not state its amount is fixed without evidence. The local preview currently offers bit for the resident price and both methods for standard, pending this clarification.

16 isolated actual-code Node VM cases pass, covering payload price, pending status, ACK before payment navigation, failed intake, popup blocking, local simulation, double clicks, legacy receipt, stored 450/550 restoration, additional-person reset and absence of PII/Purchase in Meta events. Syntax and diff checks pass. The VM makes no actual requests or payments. Test source: `.qa/retreat-local-rate-test.cjs`.

No visual captures were produced. The browser tool returned “Local browser use is disabled in Work settings.” Desktop/mobile layout, focus appearance and wrapping still require visual review; do not infer them from the code checks. The preview server listens on 127.0.0.1:4399. No public changes, commits or production form submissions have been made.
