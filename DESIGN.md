---
name: Rioga Natayudha Portfolio
description: A portfolio set as a pad of triplicate carbon forms, numbered, filled in and stamped.
colors:
  paper: "#FBFBF8"
  sheet: "#FFFFFF"
  canary: "#F4E39A"
  pink: "#F2C7CF"
  ink: "#1F2A6B"
  ink-700: "#2E3B85"
  muted: "#4B5385"
  hair: "#B8BDD6"
  stamp: "#C42B23"
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
    fontSize: "clamp(1.6rem, 2.6vw, 2.25rem)"
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
  serial:
    fontFamily: "Archivo, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 700
    fontFeature: "'tnum' 1"
    fontVariation: "'wdth' 112"
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
  gutter-sm: "20px"
  gutter-md: "40px"
  section-sm: "80px"
  section-md: "112px"
  measure: "68ch"
  sheet-max: "1280px"
components:
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.paper}"
    rounded: "{rounded.none}"
    padding: "14px 20px"
  button-solid-hover:
    backgroundColor: "{colors.ink-700}"
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
    backgroundColor: "{colors.canary}"
  input-ruled:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "10px 0"
  form-sheet:
    backgroundColor: "{colors.sheet}"
    textColor: "{colors.ink}"
    rounded: "{rounded.none}"
    padding: "40px"
  rubber-stamp:
    textColor: "{colors.stamp}"
    typography: "{typography.serial}"
    rounded: "{rounded.none}"
    padding: "4px 12px"
  revision-marker:
    textColor: "{colors.stamp}"
    rounded: "{rounded.marker}"
    size: "28px"
---

# Design System: Rioga Natayudha Portfolio

## Overview

**Creative North Star: "The Carbon Copy Form"**

Every page is a pad of triplicate carbon forms: a white original on top, a canary first copy and a pink second copy beneath it. Content is filled in, not laid out: forms open with a header carrying a form name and a red serial number, facts sit in ruled fields under condensed caps labels, case studies are numbered slips, and outcomes are rubber-stamped. Every line of type is printed in one carbon-blue ink.

The page reads as parts torn from the same pad. Whole sections are printed on white, canary or pink, and white parts open with a perforated tear line. One part per page is the carbon sheet itself, inverted to ink, and carries the call to action. Structure comes from rules: double rules under form headers, ink rules opening a structure, hairlines dividing its rows. Depth comes from paper, not light: the copies sit offset beneath the top sheet.

The page is still at rest. Its one authored moment happens on load: the canary and pink copies slide out from under the top sheet, the headline and lede rise in, and the stamp presses in. Hovering a case slip slides its copies out the same way. The system refuses the centred name over a photo and the row of equal rounded cards.

**Key Characteristics:**
- Triplicate stack: white top sheet with canary and pink copies offset beneath (6/12px on phones, 10/20px from md up).
- Whole sections printed on paper, canary, pink or carbon; white sections open with a perforation.
- One variable family (Archivo) on its width axis: expanded for display, condensed caps for field labels.
- Carbon-blue ink for every type and rule; stamp red only for serials, stamps, red-pen marks and focus.
- Square corners everywhere; only the revision-table markers are round.
- CSS-only motion on one easing, fully off under reduced motion.

## Colors

Office-form stationery: three paper tints, one carbon-blue ink, one rubber-stamp red.

### Primary
- **Carbon Blue** (ink): all type, all rules and borders, the solid button and the inverted CTA ground. The only ink on the page.
- **Pressed Carbon** (ink-700): the fill that wipes across a solid button on hover. Nowhere else.

### Secondary
- **Canary Copy** (canary): copy 1. Whole section grounds (About, Contact, the next-study band on case pages), the upper copy in every stack, the paper button's hover fill, text selection.
- **Pink Copy** (pink): copy 2. Whole section ground (Services) and the lower copy in every stack.

### Tertiary
- **Stamp Red** (stamp): serial numbers, rubber stamps, the red-pen circle and annotation in Process, revision markers, input focus, error text and the focus ring.

### Neutral
- **White Original** (paper): the page ground and every white section; also the text color on the carbon ground.
- **Top Sheet** (sheet): the form surface lifted above its copies (hero form, case slips, case header, contact form, meta fields).
- **Faded Carbon** (muted): secondary text, ledes, field labels, item numbers. Holds 4.8:1 even on pink.
- **Ruled Line** (hair): hairline row dividers, perforation dots, image frames on slips.

### Named Rules
**The One Ink Rule.** Every glyph and rule is carbon blue, at full strength or as muted. No black, no gray, no second ink color for type.

**The Rubber Stamp Rule.** Stamp red marks what a clerk would mark by hand: a serial number, a stamp, a red-pen circle, a focus or an error. It never sets a heading, body text, a fill or decoration.

**The Whole Field Rule.** Canary and pink print whole sections or whole copies. They are never a chip, a badge or a highlight inside a white part.

## Typography

**Display Font:** Archivo variable, width 112% (with system-ui, sans-serif)
**Body Font:** Archivo variable, width 100%
**Label Font:** Archivo variable, width 75%, caps

**Character:** One family, three widths: the expanded face a form prints its title in, the normal face it is filled in with, and the condensed caps it uses to name its fields.

### Hierarchy
- **Display** (600, clamp(2.4rem, 4.6vw, 4rem), 1.02, -0.035em, balanced): one section heading per part. The hero tops out at 4.4rem; the testimonial quote borrows the face at 500 / 1.2.
- **Headline** (600, clamp(1.6rem, 2.6vw, 2.25rem), 1.1): case slip titles, case-study section headings, the next-study link.
- **Title** (600, 24 to 26px, expanded): service line items and process steps.
- **Lede** (400, 18px, 1.6, muted): the paragraph beside or under a section heading.
- **Body** (400, 17px, 1.6): default text; long-form case reading at 18px / 1.65 within 68ch.
- **Label** (500, 12px, 0.1em, caps, condensed, muted): form-field labels, captions, table headers, serial and tag rows.
- **Serial** (700, 16 to 18px, tabular, expanded, stamp red): "No. 0001" on every form header and slip.
- **Numeral** (600, clamp(2rem, 3.4vw, 3rem), tabular, expanded): hero counts, zero-padded.

### Named Rules
**The Field Label Rule.** Condensed caps name a field: a form label, a caption, a table header, a serial or tag row. They never sit above a heading as an eyebrow or kicker.

**The Width Axis Rule.** Hierarchy comes from Archivo's width and size, never from a second family.

## Layout

A centred sheet up to 1280px with 20px gutters on phones and 40px from md up. Sections stack vertically at 80px (phones) and 112px (md up) of block padding. Inside, one 12-column grid per section from lg: the heading takes the left 5 to 8 columns and the lede bottom-aligns on the right. Reading text holds 68ch.

Section sequence on the home page alternates the pad: hero (white, stacked form), work (white), about (canary), process (white), CTA (carbon), services (pink), testimonial (white), contact (canary, form stacked on its copies), footer (white, with the copy legend). Case pages: stacked form header, ruled meta fields, a sticky contents column (lg) beside the article, then a canary next-study band and a carbon CTA. Breakpoints are Tailwind's defaults (640 / 768 / 1024px); below lg every grid collapses to one column.

## Elevation & Depth

Depth is paper, not light. The top sheet lifts off the page by the canary and pink copies offset beneath it: solid, unblurred planes translated down-right. These offset copies are the world's own material, not a shadow treatment, and they appear only under a top sheet (hero, slips, case header, contact form). Elsewhere separation comes from rules and from the ground of the section.

### Shadow Vocabulary
- **Attachment** (`box-shadow: 0 6px 18px -8px rgba(31,42,107,0.45)`): the clipped portrait only, a photo resting on the form with a 6px white border and a 1.5deg tilt.

### Named Rules
**The Paper Depth Rule.** A surface rises only by having its copies beneath it. No blur shadows on containers, no gradients, no glass.

## Shapes

Square corners everywhere: buttons, inputs, sheets, images, pager buttons. The single exception is the round red revision marker. Form headers close with a 3px double ink rule; structures open with a 1px ink rule and divide rows with hairlines or 30% ink. Top sheets carry a 25% ink border. Rubber stamps are 3px-bordered caps rotated -7deg, multiplied into the paper at 88% opacity, and may overprint a sheet's edge.

## Components

### Buttons
One family, filled in from the left like a pen stroke.
- **Shape:** square (0px), 1px ink border, 15px semibold, label and arrow pushed apart.
- **Solid:** ink ground, paper text. The primary action of a part.
- **Line:** transparent with ink text; ink fills in and text turns paper.
- **Paper:** paper ground on the carbon CTA; canary fills in.
- **Hover / Focus:** a fill scales in from the left over 0.5s; the arrow nudges 4px; active presses down 1px; focus adds the 2px stamp-red ring.

### Inputs / Fields
- **Style:** underline only (1px ink at 40%), transparent ground, 17px ink text, label in condensed caps above.
- **Focus:** the underline turns stamp red; hover takes it to full ink.
- **Error / Disabled:** error message in stamp red; the disabled submit drops to 40% and loses its fill.

### Navigation
Sticky paper header, 64px, closed by a double ink rule. Expanded name left, links with a drawn underline, a solid Contact button. Phones: a square 44px menu button opens hairline-ruled rows in expanded 20px type.

### Case Slip (signature)
A top sheet with a form header (red serial left, tag right, double rule beneath), a hairline-framed screenshot captioned "Attachment B" onward, an expanded headline, muted summary, and a rubber stamp at the foot. Hover or focus slides the canary and pink copies out (7/14px); focus also turns the border stamp red. Stamps are status claims and must stay true to the case's results.

### Rubber Stamp
Rotated caps in stamp red, used for a case status ("In use", "Delivered") and the hero "Adopted" stamp across the form's edge.

### Ruled Fields
A row or grid of cells divided by ink rules, each a condensed caps label over a value: the hero's issuer and counts, case meta, contact details, testimonial sign-off.

### Revision Table
Case lessons as a form's revision table: ink-ruled header (Rev, Change, Reason), hairline rows, round red letter markers.

### Perforation
A 6px row of hair-colored dots that opens every white section and the footer, marking the tear between parts.

## Do's and Don'ts

### Do:
- **Do** stack top sheets on canary and pink copies offset 6/12px (10/20px from md), and slide them out only on load or on hover.
- **Do** open every form with a header: red tabular serial, condensed caps form name or tag, 3px double ink rule beneath.
- **Do** print whole sections on paper, canary, pink or carbon, and open white ones with a perforation.
- **Do** keep stamps truthful to the case's results.
- **Do** use one easing, cubic-bezier(0.16, 1, 0.3, 1), for every fill, underline and slide.
- **Do** disable all animation under reduced motion with content fully visible.

### Don't:
- **Don't** use stamp red for headings, body text, fills or decoration.
- **Don't** put a condensed caps label above a heading as an eyebrow or kicker.
- **Don't** round corners on anything but the revision markers.
- **Don't** add scroll reveals, count-ups, loops or parallax; the load sequence and the slip hover are the only authored motion.
- **Don't** give containers blur shadows; depth is the copies beneath.
- **Don't** set work or services as a row of equal cards, or centre a name over a photo in the hero.
- **Don't** add a second typeface or a second ink color.
