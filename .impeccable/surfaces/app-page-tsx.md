---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/work/[slug]/page.tsx"]
---

# Home and case study pages

Scope: home (app/page.tsx) and case study template (app/work/[slug]/page.tsx). Mode: Experience. Audience: recruiters and freelance clients, weighted equally. Job: get a case study read, then a message sent. Constraints: English, static export, Firebase contact form keeps working, photo and four thumbnails reused. The user first chose the Drawing Sheet direction (kept on branch `sheet`), then pinned this one (2026-11-12).

## Direction contract

THESIS: The portfolio is a pad of triplicate carbon forms, the paperwork Rioga digitises: work orders, delivery notes, slips with serial numbers and stamps. Refuses the centred-name hero and the row of equal cards.

OWN-WORLD: White original (#FBFBF8), canary copy (#F4E39A) and pink copy (#F2C7CF) as whole section fields, carbon-blue ink (#1F2A6B) for all type and rules, muted blue (#4B5385) for secondary text, stamp red (#C42B23) only for serial numbers, stamps and red-pen marks. Archivo variable: expanded for display, condensed caps for form labels. Ruled fields, double rules under form headers, perforated tear lines between parts. Square corners.

STORY: The visitor reads a filled-in work order: who, what he does, three counts, two actions. Each case study is a numbered slip with a truthful status stamp (In use, Delivered, Validated, Accepted at UAT). Case pages read as the full form with ruled fields for meta and a revision table for lessons.

FIRST VIEWPORT: A stack of three sheets (white on top, canary and pink offset beneath). Form header with the form name and a red serial number. Headline left, three lines at desktop, up to 4.6rem; the user's bio below it, unshortened. Portrait clipped to the top-right as Attachment A. Ruled fields row: name and role, three counts in tabular digits. Two CTAs at the foot of the form. An ADOPTED stamp sits across the form's right edge.

FORM: Carbon Copy Form, user-pinned (was IMPECCABLE'S PICK in the same round). seed:34494a96be0c5fb0
Signature: copies slide out from under the top sheet on load and the stamp presses in; hovering a case slip slides its canary and pink copies out from under it.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
