---
name: Rioga Natayudha Portfolio
description: A portfolio set as engineering drawing sheets, framed, zoned and signed off in title blocks.
colors:
  paper: "#F3F4F1"
  sheet: "#FAFAF8"
  ink: "#14213D"
  ink-700: "#22335A"
  graphite: "#525B6B"
  hair: "#C9CDD3"
  redline: "#C23A2B"
typography:
  display:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2.4rem, 4.6vw, 4rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "'wdth' 112"
  headline:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 2.6vw, 2.25rem)"
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: "-0.025em"
    fontVariation: "'wdth' 112"
  title:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "24px"
    fontWeight: 600
    lineHeight: 1.25
    letterSpacing: "-0.02em"
    fontVariation: "'wdth' 112"
  body:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "17px"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "12px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.1em"
    fontVariation: "'wdth' 75"
  numeral:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "clamp(2rem, 3.4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1
    letterSpacing: "-0.03em"
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 112"
rounded:
  none: "0px"
  marker: "9999px"
spacing:
  sheet-margin-mobile: "8px"
  sheet-margin: "22px"
  gutter-mobile: "20px"
  gutter: "40px"
  section-mobile: "80px"
  section: "112px"
  cell: "20px"
components:
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
  button-solid-hover:
    backgroundColor: "{colors.ink-700}"
    textColor: "{colors.paper}"
  button-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
  button-line-hover:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
  button-paper:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
  button-paper-hover:
    backgroundColor: "#FFFFFF"
    textColor: "{colors.ink}"
  input-underline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 0"
  redline-marker:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.redline}"
    rounded: "{rounded.marker}"
    size: "28px"
  title-block-cell:
    backgroundColor: "{colors.paper}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "20px 40px"
  form-panel:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "40px"
---

# Design System: Rioga Natayudha Portfolio

## Overview

**Creative North Star: "The Drawing Sheet"**

Every page is an engineering drawing sheet. The viewport is inset by a paper margin and bounded by a one-pixel ink frame, with zone letters (A to F) along the top edge and row numbers (1 to 4) down the left on desktop. Content sits inside that frame as zones of the sheet; facts are filed in title blocks set as ruled tables; images are numbered details; corrections and emphasis arrive as redline. The register is calm, precise and premium: drafting paper, Prussian ink, a single red pen.

Density is moderate and ruled rather than boxed. Structure comes from lines, not fills: ink rules separate primary divisions, hairline gray rules separate rows within them, and almost nothing has a background of its own. One inverted ink zone per page carries the call to action. The page is deliberately still at rest; life comes from the load-draw of the frame and from hovers that draw lines and fills in from the left, "drawn like a pen stroke".

The system refuses the centred-name-plus-photo hero and the row of equal rounded cards. Lists of work, services and steps are set as drawing tables, parts lists and general notes instead.

**Key Characteristics:**
- Hairline sheet frame with zone markers, inset 8px on phones and 22px from md up.
- One variable family (Archivo) in two width voices: expanded for display, condensed caps for data labels.
- Ruled tables and title blocks instead of cards.
- Square corners everywhere; only redline markers are round.
- Redline red reserved for callouts, annotations, focus and error state.
- Motion drawn like a pen stroke: from the left, one easing, CSS only, fully off under reduced motion.

## Colors

A cool, nearly monochrome drafting palette: paper and Prussian ink carry everything, with one red pen for annotation.

### Primary
- **Prussian Ink** (ink): all type, frame lines, primary rules, solid buttons, the selection highlight and the one inverted zone per page. It is the drawing itself.
- **Ink Wash** (ink-700): hover fill of the solid button only.

### Tertiary
- **Redline Red** (redline): callouts and annotations. The Detail A circle marker and its leader line, the ellipse around the Adopt step and its rule and note, the revision letters in the revision table, the focus ring (2px outline, 3px offset), the focused input underline, and the form error message.

### Neutral
- **Drafting Paper** (paper): page ground, sheet margin, title-block cells, text on ink.
- **Sheet White** (sheet): the one raised plane, the message form panel and thumbnail wells.
- **Graphite** (graphite): secondary text, ledes, body in lists and tables, field labels and row numerals.
- **Hairline Gray** (hair): secondary rules between rows, section bottoms, zone-marker dividers.

### Named Rules
**The Red Pen Rule.** Redline red marks a callout, an annotation, focus or an error, and nothing else. It never sets body text, a heading, a fill or decoration. If it is not something a checker would circle, it is ink.

**The Two-Rule Rule.** Ink rules (1px ink) open and close a structure (title block edges, table heads, list tops); hairline rules (1px hair) divide rows inside it. Don't use a third weight or a gray fill to separate content.

## Typography

**Display Font:** Archivo variable, width 112% (with system-ui, sans-serif)
**Body Font:** Archivo variable, normal width (with system-ui, sans-serif)
**Label Font:** Archivo variable, width 75%, uppercase

**Character:** One family on its width axis does the work of a pairing: the expanded cut reads like stencilled sheet titles, the condensed caps like lettering in a title-block cell. Numerals are tabular so counts sit in fixed positions.

### Hierarchy
- **Display** (600, 2.2rem to 4.6rem by clamp, line-height 1.02, -0.035em, balanced wrap): one per section, the section heading. Hero headline tops out at 4.6rem in three lines at desktop.
- **Headline** (600, 1.75rem to 2.25rem, 1.1, -0.025em, expanded): case study section headings, case-row titles, the next-study link.
- **Title** (600, 24 to 26px, expanded): service items and process steps. Revision-table changes and article h3s use a slightly less expanded 108% at 18 to 21px.
- **Body** (400, 17px, 1.6): default. Long-form case study paragraphs set at 18px / 1.65 within a 68ch measure.
- **Lede** (400, 18px, 1.6, graphite): the paragraph next to a section heading.
- **Label** (500, 12px, 0.1em, uppercase, condensed, graphite): data labels only.
- **Numeral** (600, 2rem to 3rem, tabular, expanded): title-block stats, zero-padded ("05", "120"). Small row numerals (13 to 15px, graphite) index list and table rows.

### Named Rules
**The Data Label Rule.** Condensed caps labels name data: title-block cells, figcaptions, table and list headers, form fields, the sheet index and zone markers. They never sit above a heading as an eyebrow or kicker.

**The Width Axis Rule.** Hierarchy is set with width and size, not with extra families. Expanded for headings, normal for reading, condensed for labels.

## Layout

The sheet is a fixed frame: an 8px paper margin on phones, 22px from md, a 1px ink line inside it, zone markers sitting in the margin on desktop. Sections are full-width zones inside that margin, each closed by a hairline bottom rule, with content in a 1320px max-width container, 20px side padding on phones and 40px from md. Vertical rhythm is 80px per section on phones and 112px from md.

Every section uses one 12-column grid at lg. Headings take 5 to 8 columns on the left; ledes and secondary content start at column 7 or 8 so heading and lede sit side by side, bottom-aligned. Below lg everything stacks to one column. Title blocks are grid rows of ruled cells: on the hero, name and role take 4 columns, three stats take 2 each, CTAs take the last 2; on phones the name cell spans the width and stats share a three-column row. Reading text holds to a 68ch measure. A sticky contents list occupies 3 columns beside the case study article at lg.

A fixed sheet index in the frame's bottom-right corner names the section in view ("Sheet 03/08", a hairline, then the section name), hidden on the first sheet, which carries its own title block.

## Elevation & Depth

Flat. There are no shadows anywhere. Depth is drawn, not lit: the one-pixel frame, ink and hairline rules, a single sheet-white plane for the message form, and a single inverted ink zone per page. Images sit in a 1px ink frame with 8px of paper inside it, registered like a detail on the sheet.

### Named Rules
**The Drawn Depth Rule.** Separate planes with a line or a tonal step between paper, sheet white and ink. Never with a shadow, blur or gradient.

## Shapes

Square corners (0px) on every button, input, frame, panel, image and table. The only round forms are redline annotations: the 28px circle markers with a 1px redline stroke (Detail A, revision letters) and the hand-drawn ellipse around the Adopt step. Icons are 1.6px stroke line drawings with square caps and mitred joins. Lines are always 1px; emphasis comes from colour (ink versus hair), never thickness.

## Components

### Buttons
One family, drafted and quiet; the hover fills it in like a pen stroke.
- **Shape:** square corners (0px), 1px ink border, label left and arrow right with 24px between, 15px semibold, padding 14px by 20px.
- **Solid:** ink ground, paper text. Primary action per zone.
- **Line:** transparent ground, ink text and border. Secondary action next to a solid button, and the CV download.
- **Paper:** paper ground and border, ink text. Only on the inverted ink zone.
- **Hover / Focus:** a fill wipes in from the left over 0.5s on the draw easing (ink wash on solid, ink on line with text turning paper, white on paper) and the arrow slides 4px right. Active nudges down 1px. Focus also shows the redline ring.
- **Disabled:** 40% opacity, no fill wipe.

### Links
Inline and nav links are plain ink with no underline at rest; a 1px underline draws from the left on hover and focus over 0.45s.

### Inputs / Fields
- **Style:** underline only, a 1px bottom rule in ink at 40%, transparent ground, 17px ink text, 10px vertical padding, square. The label is a condensed caps field label above.
- **Hover:** underline goes full ink.
- **Focus:** underline turns redline; the outline ring is suppressed in favour of it.
- **Error:** a redline status line beside the submit button.

### Navigation
A sticky paper header inside the sheet margin, 64px tall, closed by a hairline rule. The name sits left in expanded semibold; links at 15px ink with the drawn underline, then a solid Contact button. On phones a 44px square line-bordered toggle opens a stacked list of 20px expanded links divided by hairlines, each with a graphite arrow, ending in a full-width solid button.

### Title Block
The signature container. A row of cells divided by 1px ink rules, opened by an ink top rule. Each cell holds a field label over its value: "Drawn by" over name and role, stat labels over tabular numerals, "Approved by" and "Position" over the testimonial's approver, case study metadata in a three-column ruled grid. The footer is a title block too ("Drawn by", links, "Revision").

### Detail Figure
Images are numbered details: a 1px ink frame with 8px inset, a fixed aspect (4:5 portrait, 16:10 screenshots), and a figcaption row of two field labels ("Detail B" left, tag right). The hero portrait is Detail A with a redline circle marker on its corner and a redline leader line. On case rows, hover adds a second ink frame line closing from 5px to 3px outside the first.

### Ruled Lists and Tables
Work, services, process steps and case study bullets are ruled lists, never cards. A header row of field labels over an ink rule, then rows divided by hairlines, each indexed by a zero-padded graphite numeral. Case rows redraw their bottom rule in ink from the left on hover over 0.7s.

### Revision Table
Lessons on case studies are a drawing's revision table: Rev, Change, Reason columns under an ink rule; each row carries a redline circle letter (A, B, C), a semibold change and graphite reasons. On phones the reason folds under the change.

### Motion
CSS only. On load the frame lines draw out over 1.1s (horizontal from the left, vertical from the top, 150ms stagger), zone markers appear at 500ms, the headline and lede rise 14px, the Detail A leader line draws at 900ms, and stats count up once from zero over 0.9s. Rows reveal once on scroll with a 16px rise and fade over 0.7s, staggered 80ms. Every transition uses the draw easing, cubic-bezier(0.16, 1, 0.3, 1). Under reduced motion all of it is off and all content renders at rest, with final stat values in place.

## Do's and Don'ts

### Do:
- **Do** frame every page in the sheet: paper margin (8px / 22px), 1px ink frame, zone markers on desktop.
- **Do** set facts as title blocks and ruled tables with condensed caps field labels over values.
- **Do** use one 12-column grid per section, heading left and lede bottom-aligned on the right.
- **Do** number images as details with a two-label figcaption and a 1px ink frame with 8px inset.
- **Do** draw hover states from the left on cubic-bezier(0.16, 1, 0.3, 1): fills, underlines, rules.
- **Do** keep stats in tabular expanded numerals, zero-padded.
- **Do** disable all animation under reduced motion with content fully visible.

### Don't:
- **Don't** use redline red for body text, headings, fills or decoration; it marks callouts, annotations, focus and errors only.
- **Don't** put a condensed caps label above a heading as an eyebrow or kicker.
- **Don't** round corners on anything except redline circle markers.
- **Don't** use shadows, blurs or gradients for depth.
- **Don't** set work or services as a row of equal cards.
- **Don't** centre a name over a photo in the hero.
- **Don't** add a second typeface; vary Archivo's width instead.
- **Don't** animate at rest; no loops, parallax or ambient motion.
