---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: ["app/work/[slug]/page.tsx"]
---

# Home and case study pages

Scope: home (app/page.tsx) and case study template (app/work/[slug]/page.tsx). Mode: Experience. Audience: recruiters and freelance clients, weighted equally. Job: get a case study read, then a message sent. Constraints: English, static export, Firebase contact form keeps working, photo and four thumbnails reused. Calm and premium, not experimental.

## Direction contract

THESIS: The portfolio is a set of engineering drawing sheets: framed, zoned, and signed off in title blocks. Refuses the centred-name-plus-photo hero and the row of equal cards.

OWN-WORLD: Cool drafting paper ground (#F3F4F1), Prussian ink (#14213D) for type and frame lines, graphite muted (#5B6474), hairline grid gray (#C9CDD3), redline red (#C8382A) only for callouts and annotations. Archivo variable: expanded for display, condensed caps for field labels. Hairline frames, zone markers on the frame edge, title blocks as tables. Square corners.

STORY: Visitor sees what he does in one line, sees the proof (systems, team, users) in the title block, picks a path: case studies or conversation. Case studies read like specification sheets with a title block of meta and a revision table for lessons.

FIRST VIEWPORT: Full sheet frame inset from the viewport, zone letters top and numbers left. Headline left, three lines at desktop, up to 4.6rem (amended at review: the 56-character headline cannot set in two lines at display size without crowding the photo). The lede is the user's own bio and stays as written (four lines at 1440); shortening it needs the user's approval. Photo right as "Detail A" with a red leader line callout. Title block along the bottom: name and role, three stats in tabular digits, two CTAs stacked in the last cell.

FORM: Drawing sheet, first on grounded list after assignment (assigned index 3). seed:34494a96be0c5fb0
Raises: fixed tabular digit positions for stats (from nixie); all thumbnails in one registered frame and scale (from botanical); one modular grid with zone coordinates governs every section (from ASCII).
Signature: the sheet draws itself on load (frame lines extend, zone markers and callout appear, stats count in); while scrolling, a fixed sheet index in the frame corner names the current section.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
