# Current media refinement — 2026-09-07

The main image is now alina-portrait-editorial.webp (heart-hand portrait). Current space photos: studio-space-retouched.webp (960×1280, 208,776 bytes), studio-equipment-retouched.webp (960×1280, 218,528 bytes), breathing-clinic-retouched.webp (1280×960, 190,534 bytes). Exact prompts and generated PNG paths are in photo-cleanup-prompts.md. Only studio-space-tour.mp4 is exposed on the site; the training reel and equipment tour are archived and unlinked. Earlier entries below are historical.

# Asset manifest

The current Signature refinement uses five editorial Imagegen edits of supplied photographs, a supplied brand mark, and live semantic typography and controls. The former masked hero and first-pass enhancements are retained as source/history, not used for the current opening. The user explicitly requested stronger AI photo work and a new composition between service modes after reviewing phone screenshots.

The earlier inventory and update sections below record provenance. The latest usage map is at the end of this file.

| Medium               | Asset                                                                                                                  | Use and constraint                                                                                                                                                                                                                                                                                                                                                          |
| -------------------- | ---------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Original photo       | `assets/images/alina-hero-reel.jpg` — 1400 × 1050, 74 KiB                                                              | Authoritative hero photo. Preserve the original pixels, recognizable face, pose, and setting.                                                                                                                                                                                                                                                                               |
| Geometric alpha mask | `assets/images/alina-hero-mask.svg` — 1400 × 1050                                                                      | White foreground silhouette on transparency, traced in the photo coordinate system. Apply to a second instance of the identical photo. Both photo layers must share sizing, positioning, crop, and filter. Live MAMALINA lettering sits between them. The critical overlap is the head and upper weight region; this is a geometric trace, not automatic hair segmentation. |
| Supplied logo        | `assets/images/mamalina-center-logo.jpg` — 1280 × 1280, 68 KiB                                                         | Authoritative complete MamAlina Center logo. Supersedes the small Instagram logo.                                                                                                                                                                                                                                                                                           |
| Native vector mark   | `assets/images/mamalina-mark.svg` — viewBox `174 88 945 850`                                                           | Faithful geometric trace of the supplied faceted heart and heavier MA linework, using approved taupe `#af9987`. Mark only; keep the exact MamAlina Center name as semantic text or use the complete supplied raster logo.                                                                                                                                                   |
| Existing photos      | `alina-hero-clean.jpg` 1150 × 880; `alina-strength-clean.jpg` 1290 × 1540; `alina-marathon.jpg` 1080 × 1350            | Existing training/running media available for service and introduction sections.                                                                                                                                                                                                                                                                                            |
| Existing photos      | `alina-reel-home.jpg` 720 × 680; `alina-reel-strength.jpg` 720 × 720; `alina-profile.jpg` 100 × 100; `instagram/*.jpg` | Additional existing photo inventory. The 100 px profile and 360 px reel thumbnail cannot sustain large display.                                                                                                                                                                                                                                                             |
| Local real reel      | `assets/videos/alina-andi-reel.mp4` — 6.11 MiB                                                                         | Existing local training reel. Use a real video control with accessible play/pause behavior and the supplied photo as a poster; verify the clip in the main implementation.                                                                                                                                                                                                  |
| Semantic UI          | Live Hebrew headings, service tabs, links and buttons; live MAMALINA backdrop                                          | Do not bake navigation, service text, contact actions, or the wordmark backdrop into a bitmap. Keep Hebrew reading order and keyboard access.                                                                                                                                                                                                                               |

The mark trace is geometry derived from the supplied raster, whose photographed/compressed line color varies slightly. The approved flat taupe is used consistently. The foreground mask must not be reused with another photo or a different crop transform.

## New Alina photographs — 2026-09-07

The user supplied four original JPEGs. The following source copies are retained; the current page uses their matching `-enhanced.webp` derivatives. CSS handles responsive display crops.

| Asset                                         | Dimensions | Current use                                                      |
| --------------------------------------------- | ---------- | ---------------------------------------------------------------- |
| `assets/images/alina-portrait-heart.jpg`      | 960 × 1280 | Coach introduction; smiling portrait with hands forming a heart. |
| `assets/images/studio-strength-equipment.jpg` | 960 × 1280 | Larger half of the strength section's two-photo composition.     |
| `assets/images/studio-training-space.jpg`     | 960 × 1280 | Companion studio-space view in the strength section.             |
| `assets/images/breathing-clinic.jpg`          | 1280 × 960 | Real clinic environment above the compact breathing motif.       |

The portrait replaces the running photo in the introduction; the two studio photos replace the former single exercise image in the strength section. The original hero photo and matched mask still form the Signature opening.

## Photo enhancement and studio videos — 2026-09-07

The user requested brighter photographs and supplied two additional WhatsApp videos. The four `*-enhanced.webp` assets were produced with the built-in Imagegen edit tool, then resized and encoded for delivery. Requested edits: natural exposure, shadow recovery, balanced white balance and clarity; preserve the person, spaces and composition. See `photo-enhancement-prompts.md` for the full prompts. The generated PNG originals remain in the generation archive; the project serves the WebP derivatives.

| Asset | Dimensions / duration | Use |
| --- | --- | --- |
| `assets/images/alina-portrait-heart-enhanced.webp` | 960 × 1280 | Brighter coach portrait |
| `assets/images/studio-training-space-enhanced.webp` | 960 × 1280 | Brighter open studio |
| `assets/images/studio-strength-equipment-enhanced.webp` | 960 × 1280 | Clearer equipment view |
| `assets/images/breathing-clinic-enhanced.webp` | 1280 × 960 | Balanced warm clinic light |
| `assets/videos/studio-space-tour.mp4` | 464 × 832, 24.13 seconds | Tour from training floor into equipment area; supplied filename ended in `(1).mp4` |
| `assets/videos/studio-equipment-tour.mp4` | displayed 576 × 768, 12.48 seconds | Tour of weights and training equipment; supplied filename had no numeric suffix |
| `assets/images/studio-space-tour-poster.jpg` | 464 × 832 | Original video frame at 2 seconds |
| `assets/images/studio-equipment-tour-poster.jpg` | 576 × 768 | Original video frame at 1 second |

Video streams and audio are copied unchanged into fast-start MP4 containers. Playback respects the second source's rotation metadata. Both studio tours belong to strength; they do not depict the breathing clinic.

## Current editorial assets and service views — 2026-09-07

| Current asset | Size | Placement |
| --- | --- | --- |
| `assets/images/alina-training-editorial.webp` | 1400 × 1050 | Strength hero; AI detail restoration and fitness editorial lighting from `alina-hero-reel.jpg` |
| `assets/images/alina-portrait-editorial.webp` | 960 × 1280 | Closer coach portrait with soft background depth |
| `assets/images/studio-space-editorial.webp` | 960 × 1280 | Open studio photo with directional light |
| `assets/images/studio-equipment-editorial.webp` | 960 × 1280 | Equipment photo with richer contrast and controlled color |
| `assets/images/breathing-clinic-editorial.webp` | 1280 × 960 | Breathing hero and clinic section; warm, softly lit room |

Exact built-in Imagegen prompts and output links: `editorial-photo-prompts.md`. All source photos and previous edits remain available. The three real videos and their real-frame posters are unchanged. Do not pair the retired source mask with an AI-edited photograph. The current hero uses no mask or intersecting triangle; each mode has its own complete photo and flowing message block.
