---
version: 1
slug: "retreat-popup"
primary_target: "index.html"
related_targets: ["styles.css", "script.js"]
---

# Retreat popup — approved publication, 4 October 2026

Mode: Persuade. Extend the existing homepage with a dismissible Hebrew RTL
workshop announcement. Use the existing heart-hand portrait. The user's later
4 October request adds the complete supplied five-section retreat description,
including the schedule and Alina's introduction. Keep the homepage intact.

10 November 2026, Kfar Szold, 09:30 with approximate finish 16:00–16:15;
550 ILS, women and men, no previous experience required. Includes brunch,
refreshments, workbook and continued practice. Use the two exact supplied
payment-group links. The supplied public Google Form is linked from a native
registration action. Guests open it, return and confirm submission with a
checkbox before payment destinations become available. This is a guest
declaration, with no automatic submission verification. No Sheet is created.
The user subsequently authorized push/publication after reviewing the local flow.

## Direction contract

THESIS: A compact invitation to stop, breathe and explore the seven chakras,
with Alina's actual portrait providing the human connection.

OWN-WORLD: Existing warm beige, ink, square controls, local Noto Hebrew and
Noto Display. Reuse the original portrait without editing or new imagery.

STORY: Keep the compact invitation, practical event facts and payment flow.
A native disclosure named “לתיאור המלא ולוח הזמנים” contains all supplied
paragraphs in five reading sections, without the source's page-number labels.
The schedule has ten time/activity rows. The registration action directly follows
the disclosure and uses the supplied closing call to action.

FIRST VIEWPORT: Desktop pairs large Hebrew copy at right with a viewport-bounded
sticky portrait at left, below a dedicated opaque top strip (56px), which retains
its proportions while the full description is open. The portrait starts at 56px
and its height is capped by the viewport minus 104px. Phone uses a compact image
followed by the invitation, with one scrollable native dialog. The top strip
reserves space for the always-visible close control (44px); reading text and
disclosure focus stay below it. The disclosure begins closed;
expanded text uses the same palette and readable body type, with stacked time/activity
rows on phones. Native keyboard activation works without additional JavaScript.

FORM: Existing-surface extension; code-led and brief-pinned, no concept seed.
Native modal supports Escape, outside dismissal, focus restoration and a
workshop reopen control, positioned above the WhatsApp bar when visible on
phones. The dialog reserves scroll space (68px) for the close strip; the phone
portrait remains in normal flow. Auto-opens once per browser session.

FINISH: unreviewed and undocumented is unfinished; this build ends with the
finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.

## Release boundary

User's later “Push it” instruction authorizes release and supersedes the
earlier local-only boundary. Public activation is enabled in script.js.
The force-preview query remains limited to loopback hosts. Payment links are
real; checks exercise the guest confirmation step without submitting
registrations or payments. No automatic Google submission verification is added.
