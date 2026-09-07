# Service views and editorial photos — 2026-09-07

Scope: the user's phone screenshots showed that moving the selector did not fix the overlapping workout/clinic composition. They requested stronger AI photo work. This is the implementing agent's refinement verification, separate from the historical independent Signature review.

## Result

- Two clear service controls immediately below navigation at all widths. Strength shows the restored training image on graphite; breathing shows the edited clinic on warm paper. Title, description and action sit below the image in normal flow. All intersecting hero planes and the old photographic mask are retired.
- The large wordmark stays on its own strip and has no pointer events. During the short-landscape check, its font hit area could intercept selector clicks; the selector now has its own higher stacking order. Real clicks passed afterward.
- The restored hero, closer portrait and three space photos use five separately saved editorial WebP derivatives. Original media and the first edits remain in the repository. Full prompts and source/output mappings are in `editorial-photo-prompts.md`.

## Verification

- Both modes passed at 320 × 568, 360 × 640, 393 × 760, 430 × 740, 600 × 900, 768 × 1024, 844 × 390, 1024 × 900 and 1440 × 1000. Selector controls remained visible and their labels contained. No horizontal overflow or missing images.
- Exactly one matching hero image is exposed per mode. Photo, title and contact blocks do not overlap. Eight repeated switches preserved the full hero height. Enlarged selector labels at 320px stayed contained.
- Four axe scans (393/1440px, both modes) returned zero violations. Keyboard Space switching, mobile menu/Escape, all three video players, offscreen pause, no pre-activation MP4 downloads, and no-JavaScript video/service links passed. No page errors.
- Batched visual inspection covered mobile and desktop hero modes, the closer portrait, studio pair and clinic crop. The desktop training crop was corrected to `center 20%` to retain the full head; final 768px and 1440px photo captures confirmed it.

These are Chromium desktop-browser checks, not a physical Android or Safari test. The supplied screenshots guided the phone viewport and composition. Evidence is in ignored `.qa/editorial-*` reports/captures.
