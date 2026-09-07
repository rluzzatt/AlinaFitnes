# Mobile selector and media verification — 2026-09-07

Scope: the user's two new studio videos, four photograph enhancements and mobile service-selector clipping. This is the implementing agent's bounded verification; the earlier Signature composition has its own independent review.

- At 390 × 844, the old rail ended at 846.8px; shorter viewports also pushed it below the opening because of the hero's minimum height. On phones the revised rail sits from y=74 to y=144, immediately below the header, with both labels contained and 70px controls. Normal-width Hebrew and a 1.5 line height provide extra label space.
- Nine Chromium viewport checks passed: 320 × 568, 360 × 640, 390 × 844, 430 × 740, 600 × 900, 768 × 1024, 844 × 390, 1024 × 900 and 1440 × 1000. No horizontal overflow or broken images. Mobile labels also stayed contained with their font enlarged to 34px at 320px.
- Batched visual inspection covered both hero modes, the portrait, strength imagery and video gallery, and the breathing clinic at mobile/desktop widths. The four enhanced derivatives are brighter; original JPEGs and the original hero/mask pair remain available.
- All three MP4 players played at 390px and 1440px with native controls and correct dimensions/orientation. No MP4 requests occurred before activation. Playing a film pauses the others; scrolling offscreen pauses playback.
- Keyboard service activation, three no-JavaScript direct video links, service anchors and an intentionally failed video request's visible recovery link passed.
- Axe scans at 390px and 1440px returned zero violations; no page script errors. These checks are desktop browser emulation, not a physical phone or Safari test.

Local evidence: `.qa/media-verify.cjs`, `.qa/media-report.json`, and `.qa/media-*.png` (ignored test artifacts). The source media were also inspected as sampled FFmpeg contact sheets before placement.
