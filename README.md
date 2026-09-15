# Rioga Natayudha — Portfolio

Next.js 14 (App Router) + Tailwind, static export.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static site in ./out
```

`npm run build` writes a fully static site to `out/`. Upload the contents of `out/`
to any static host (nginx, Apache, cPanel, Netlify, Vercel). No Node runtime needed.

## Where the content lives

| What | File |
|---|---|
| Homepage copy, contact details, stats, services, testimonials | `data/site.ts` |
| Case studies (and the card that links to each) | `data/caseStudies.ts` |

Nothing on the site is hardcoded in components. Edit the data files.

### Adding a new project

Open `data/caseStudies.ts`, copy the commented TEMPLATE block at the bottom,
paste it into the `caseStudies` array, and fill it in. The card, the page,
the route `/work/your-slug`, and the prev/next links are all generated.

### Adding the second testimonial

Add it to `testimonials.items` in `data/site.ts`. The carousel dots appear
automatically once there is more than one.

## Things to replace before launch

Everything below is a placeholder.

Placeholders ship as `.svg`. When you drop in a real `.jpg` or `.png`, update the
path in `data/site.ts` or `data/caseStudies.ts` to match the new extension.

1. `public/images/rioga-hero.svg` — hero photo
2. `public/images/case-awp.svg`, `case-dikti.svg`, `case-appiks.svg`, `case-accounting.svg` — the four card thumbnails. **Give all four the same treatment** (all flat navy, or all desaturated photos with a navy overlay). A mix is what made the earlier design feel noisy.
3. `public/images/appiks-rules-before-after.svg` — the two rule-based flowcharts side by side. This is the strongest visual on the site.
4. `public/images/appiks-role-flows.svg` — the per-role business process diagrams
5. `public/images/awp-asis-tobe.svg` — the as-is/to-be diagram you still need to draw
6. `public/Rioga-Natayudha-CV.pdf` — the CV the Download button points to
7. Dikti case study: **no images at all.** The NDA covers data and code.

## Fonts

`app/layout.tsx` loads Poppins for headings and Inter for body. If your Figma
file uses different fonts, change the two imports there — the Tailwind variables
pick them up automatically.

## Contact form

There is no backend. The form composes a WhatsApp message and opens
`wa.me/6285111360711`. To change the number, edit `profile.whatsapp` in
`data/site.ts` (international format, digits only).


## Note on verification

This project was written but not compiled — the environment it was authored in
could not complete `npm install`. Run `npm install && npm run build` locally
first. If anything fails, it will be a small fix, not a structural one.
