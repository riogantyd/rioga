# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences, weighted equally (confirmed 2026-11-11):

- Recruiters and hiring managers filling product management, business analysis, or ERP implementation roles. They scan the first screen, then open one or two case studies to judge how Rioga thinks.
- Owners and managers of small and mid-size organisations running operations on paper, Word or Excel, looking for someone to turn that into a system their non-technical staff will use.

## Product Purpose

Personal portfolio of Rioga Natayudha, Product Manager and IT Business Analyst in Jakarta. It exists to get him hired (full-time) or engaged (freelance). Success: a visitor reads at least one case study and sends a message, emails, or messages on WhatsApp.

## Positioning

He reads the process before writing code, and he measures success by adoption, not delivery. The case studies prove this with decisions most portfolios hide: requests he turned down, scope he didn't finish, what he can't claim.

## Operating Context

Visitors arrive from LinkedIn, a CV, or a direct link, on desktop and on phones. Case studies are long-form reading.

## Capabilities and Constraints

- Next.js 14 App Router, Tailwind, static export (`output: 'export'`), deployed on Vercel.
- All copy lives in `data/site.ts` and `data/caseStudies.ts`; components read from there.
- Contact form writes to Firestore from the browser (`lib/firebase.ts`, `firestore.rules`).
- Language: English only. One testimonial and two quotes are in Indonesian and stay as written.

## Brand Commitments

- Profile photo `public/images/rioga.jpg` is used.
- Case study thumbnails `awp.png`, `bkd.png`, `appiks.png`, `acc.png` are real screenshots of the shipped systems and are used.
- Tone: plain, specific, candid. Calm and premium, not experimental (confirmed 2026-11-11).

## Evidence on Hand

- Four case studies with full write-ups: PT Adiwarna Pratama operations system, SISTER BKD dashboard and CAT (ministry), APPIKS safeguarding platform, accounting worksheet system.
- Stats: 5 systems delivered end-to-end, largest team 12, 120 users validated in the field.
- One testimonial: Agung Pramudya, Technical Manager, PT Adiwarna Pratama.
- CV at `public/images/CV_Rioga.pdf`.
- Diagrams `awp-asis-tobe.svg`, `appiks-rules-before-after.svg`, `appiks-role-flows.svg` exist but are currently commented out.
- No client logos, awards or press. Do not invent any.

## Product Principles

1. Show the reasoning, not just the output: decisions, trade-offs, and what was left out.
2. Every claim is one he can defend in an interview.
3. Case studies are the product; everything else routes to them or to contact.
4. Recruiters and clients both find their path within one screen.
