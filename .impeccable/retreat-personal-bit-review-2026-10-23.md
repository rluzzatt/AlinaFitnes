# Personal bit payment destination — local review, 23 October 2026

## Scope and evidence

The user supplied Alina's permanent personal bit QR. It decodes to the official bit personal URL now held in index.html. The user opened it on a phone and supplied a screenshot of an individual transfer with amount zero. The user then requested the website change. This revision replaces only the bit destination and explains manual amount entry for bit before and after intake. The first preview shortened the submit labels; after the user noticed, their original explicit intake wording was restored. PayBox, Formspree, tracking and pending-verification semantics remain unchanged. No payment, production test form or outside message was sent.

## Incumbent design

Existing beige/ink/taupe, local Hebrew typography, RTL, square full-width buttons and portrait remain. The helper uses the existing 14px supporting-text treatment. No new imagery or raster asset ships. CSS/JS query versions were updated after browser verification revealed cached prior assets.

## Verification and verdict

- JavaScript syntax and git diff whitespace pass.
- Existing eight isolated handler cases pass, including intake ACK before payment navigation, failure, blocked-window recovery and preview isolation.
- Connected Chrome desktop and 393×852 phone views were visually inspected. No horizontal overflow. Button heights are 54px desktop and 78px phone. The bit helper computes to 14px after the asset version update.
- Empty required fields remain blocked. Local simulated bit intake shows only bit and its manual 550 ILS instruction. A subsequent PayBox simulation shows only PayBox and restores its generic instruction. No real form POST or app transition occurs locally.
- The required mechanical detector was run once; it surfaced broad pre-existing layout/type warnings. The bounded review covered the changed payment area, without altering unrelated site design.

Verdict: ready for release. After seeing the final local revision, the user explicitly approved publication with ״מאושר״. After restoring the original labels, the phone and default desktop layouts were checked again: 78px/54px buttons, no horizontal text or page overflow. The current phone proof is output/mamalina-bit-original-labels-mobile-2026-10-23.png in the Marketing workspace; earlier output/mamalina-bit-personal-{desktop,mobile}-2026-10-23.png captures the superseded shortened labels. Local preview: http://127.0.0.1:4399/index.html?retreat=preview#retreat-registration. Deployment verification is recorded separately in the Marketing release log.
