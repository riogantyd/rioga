// =============================================================
// CASE STUDIES
//
// TO ADD A NEW PROJECT:
//   1. Copy the TEMPLATE block at the bottom of this file.
//   2. Paste it into the `caseStudies` array.
//   3. Fill it in. Nothing else needs to change — the card,
//      the page, the route and the prev/next links are all
//      generated from this array.
//
// Block types available inside a section:
//   { type: 'p',     text: '...' }
//   { type: 'h3',    text: '...' }
//   { type: 'ul',    items: ['...', '...'] }
//   { type: 'quote', text: '...', attribution: '...' }
//   { type: 'image', src: '/images/...', alt: '...', caption: '...' }
// =============================================================

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'quote'; text: string; attribution: string }
  | { type: 'image'; src: string; alt: string; caption?: string };

export type CaseStudy = {
  slug: string;
  tag: string;
  title: string;
  cardTitle: string;
  subtitle: string;
  cardDescription: string;
  thumbnail: string;
  meta: { label: string; value: string }[];
  sections: { heading: string; blocks: Block[] }[];
};

export const caseStudies: CaseStudy[] = [
  // ===========================================================
  {
    slug: 'adiwarna-pratama',
    tag: 'Business Analysis',
    cardTitle: 'Operations System — PT Adiwarna Pratama',
    title: 'Operations System — PT Adiwarna Pratama',
    subtitle: 'Replacing Word templates and a paper logbook with one searchable system',
    cardDescription:
      'Nine paper document workflows and a master data layer, rebuilt as one searchable web system for an oil & gas inspection firm. Includes the two things I recommended not building, and why.',
    thumbnail: '/images/case-awp.svg',
    meta: [
      { label: 'Role', value: 'Sole developer and analyst' },
      { label: 'Client', value: 'PT Adiwarna Pratama — NDT, lifting gear and drill stem inspection' },
      { label: 'Timeline', value: 'Jul 2024 – Jan 2026, across six engagements' },
      { label: 'Team', value: 'Worked alone; reported to the Technical Manager' },
      { label: 'Stack', value: 'Laravel, React, MySQL' },
      { label: 'Outcome', value: 'Nine document workflows moved off Word and the paper archive into one searchable system' },
    ],
    sections: [
      {
        heading: 'Context',
        blocks: [
          {
            type: 'p',
            text: 'PT Adiwarna Pratama runs non-destructive testing, lifting gear inspection, drill stem inspection, pressure testing, and load testing for oil & gas clients. Around 40 staff, roughly 30 of them in the field — inspectors, assistants, drivers, local helpers. The head office is small, and one person carried most of the operational paperwork for all of it.',
          },
          {
            type: 'p',
            text: 'Every inspection job generates documents: work orders, equipment records, delivery notes, purchase requests. In a business where the product is documented verification, those documents are the deliverable — not admin overhead.',
          },
        ],
      },
      {
        heading: 'The problem',
        blocks: [
          { type: 'p', text: 'Everything ran through Microsoft Word and a physical archive room.' },
          {
            type: 'p',
            text: 'The Technical Manager wrote each document by hand in Word, sent it to the relevant team for confirmation, collected signatures where required — up to two on some document types — and filed the printed copy in the archive room. A paper logbook tracked what had been issued.',
          },
          { type: 'p', text: 'Four things were actually costing time, and only one of them was the obvious one:' },
          {
            type: 'ul',
            items: [
              'Creating each document from scratch. Every work order meant opening a template, retyping details that already existed elsewhere, and reformatting. This — not error rate — was the biggest drain.',
              'Files lived on one local machine. Retrieving an old document meant knowing where it was and having access to that computer.',
              'Tracking required the logbook, then the archive. Finding one past document was a two-step physical search with no way to filter or search by keyword.',
              'Nothing was uniform. Headers and footers differed between document types, so reports built from them took longer to assemble and didn\u2019t look like they came from the same company.',
            ],
          },
        ],
      },
      {
        heading: 'My role',
        blocks: [
          {
            type: 'p',
            text: 'I owned this end to end: requirements, system design, development, deployment, data setup, and user training. There was no other IT person — internal or external.',
          },
          {
            type: 'p',
            text: 'The Technical Manager held final decision authority. My working pattern with him was consistent across all six engagements: I\u2019d lay out the current condition and the trade-offs, we\u2019d discuss priority together, he\u2019d decide, and I\u2019d build.',
          },
        ],
      },
      {
        heading: 'Approach',
        blocks: [
          { type: 'h3', text: 'Started with what was already standardized' },
          {
            type: 'p',
            text: 'Nine document types already had a settled shape in practice — quotation, purchase order, work assignment, document transmittal, work order, project equipment, delivery note, purchase requisition, and material receiving. Those went first, because digitizing a stable process is a translation problem, while digitizing an unstable one just locks in the mess.',
          },
          { type: 'h3', text: 'Built the master data first, then the forms' },
          {
            type: 'p',
            text: 'Most of the retyping came from information that already existed somewhere: clients, equipment, personnel. Putting that into master data and driving the forms from dropdowns removed both the retyping and most of the inconsistency in one move. Input validation caught the rest.',
          },
          { type: 'h3', text: 'Made everything searchable by default' },
          {
            type: 'p',
            text: 'The single largest change in daily experience wasn\u2019t the forms — it was that finding a past document became a search box instead of a walk to the archive room.',
          },
          { type: 'h3', text: 'Rebuilt rather than migrated' },
          {
            type: 'p',
            text: 'The existing setup was outdated enough that carrying it forward would have cost more than starting clean. Historical documents stayed in the physical archive; the system began from zero.',
          },
        ],
      },
      {
        heading: 'The decision not to build',
        blocks: [
          { type: 'p', text: 'Partway through, a request came in to digitize the inspector field forms. I turned it down.' },
          {
            type: 'p',
            text: 'The forms had no settled format. Different inspectors used different layouts, and the content changed from job to job. Building software on top of that would have hard-coded the inconsistency and produced a system that needed rework every time a form changed — and inspectors would have abandoned it inside a month.',
          },
          {
            type: 'p',
            text: 'My read was that the bottleneck there wasn\u2019t the absence of software. It was the absence of a procedure. Digitizing an undefined process doesn\u2019t fix it; it makes it permanent and more expensive to change.',
          },
          {
            type: 'p',
            text: 'The same reasoning applied to the warehouse, for a different reason. Warehouse digitization was the obvious next step, but the staff had never used a PC. I built a spreadsheet workflow instead and coached them through it, as a deliberate transition step rather than a compromise. Hardware was budgeted but not yet deployed; skills had to come first.',
          },
          {
            type: 'p',
            text: 'Both are still open. In both cases the sequence I\u2019d defend is the same: define the procedure, build the habit, then build the system.',
          },
        ],
      },
      {
        heading: 'What I built',
        blocks: [
          {
            type: 'p',
            text: 'Nine operational documents, each generated from master data, validated on input, and searchable: quotation, purchase order, work assignment, document transmittal, work order, project equipment, delivery note (Surat Jalan), purchase requisition, and material receiving.',
          },
          {
            type: 'ul',
            items: [
              'Master data — customer, employee, and general equipment records, driving every document above and removing the retyping that made each one slow to produce. The equipment register also replaced the paper logbook.',
              'Management accounts — access control over who can issue and view which documents.',
              'Unified document output — one header and footer standard across all nine document types, replacing layouts that had drifted apart over time.',
            ],
          },
          {
            type: 'image',
            src: '/images/awp-asis-tobe.svg',
            alt: 'As-is and to-be diagram of the work order flow',
            caption: 'The work order flow before and after: Word, signature, physical archive and logbook, against structured entry and search.',
          },
        ],
      },
      {
        heading: 'Results',
        blocks: [
          {
            type: 'p',
            text: 'Every module built is in active daily use by the Technical Manager and the head-office operational team. Nothing shipped was abandoned — each module was built because someone was already doing that work by hand.',
          },
          {
            type: 'quote',
            text: 'Sangat puas dengan hasil kerjanya. Sistem baru ini membantu meningkatkan efisiensi tim kami hingga 50%. Proses manual berkurang, dan datanya lebih akurat. Cepat dan komunikatif.',
            attribution: 'Agung Pramudya — Technical Manager, PT Adiwarna Pratama',
          },
          { type: 'h3', text: 'What I can\u2019t claim' },
          {
            type: 'p',
            text: 'Document volume at AWP is low, so I have no throughput figure to point to. There\u2019s no approval or digital signature flow yet — signatures still happen on paper. Field inspectors and warehouse staff aren\u2019t on the system. Roughly half the company\u2019s document work is still manual, by design rather than oversight.',
          },
        ],
      },
      {
        heading: 'What I\u2019d do differently',
        blocks: [
          { type: 'p', text: 'I\u2019d design the whole flow before writing any code.' },
          {
            type: 'p',
            text: 'On this project I worked module by module, taking each document type as it came. It worked, but it meant discovering structural questions late — how documents relate to each other, which should share numbering, where approval eventually needs to sit. Deciding the format, the data model, and the process rules up front would have made the build faster and cleaner, and would have made the approval flow easy to add instead of a retrofit.',
          },
          {
            type: 'p',
            text: 'There\u2019s a related lesson in how the requests arrived. "Digitize this document" was usually the ask. The more useful question was whether the document itself should stay the way it was. Sometimes the answer was no, and I changed it — unifying headers and footers was a small example. I\u2019d now make that a formal step rather than something that happened along the way.',
          },
        ],
      },
    ],
  },

  // ===========================================================
  {
    slug: 'sister-bkd-cat',
    tag: 'Product Management',
    cardTitle: 'SISTER — BKD Dashboard & Computer Assisted Test',
    title: 'SISTER — BKD Dashboard & Computer Assisted Test',
    subtitle: 'Two national products, one product manager, and a team that had never run Scrum',
    cardDescription:
      'Two national products for the higher education ministry, run in parallel by one product manager across 11 sprints — with a team that had never used Scrum before.',
    thumbnail: '/images/case-dikti.svg',
    meta: [
      { label: 'Role', value: 'Product Manager — sole PM across both workstreams' },
      { label: 'Client', value: 'Ditjen Pendidikan Tinggi, Kemendikbudristek (now Kemdiktisaintek)' },
      { label: 'Timeline', value: 'Sep – Dec 2024 (4 months)' },
      { label: 'Team', value: '12 people across two squads — 7 on BKD, 5 on CAT' },
      { label: 'Tools', value: 'Jira, Notion, Slack, Google Meet' },
      { label: 'Outcome', value: 'BKD delivered complete; CAT delivered 4 of 5 submenus. ~400 backlog items across 11 sprints' },
    ],
    sections: [
      {
        heading: 'Context',
        blocks: [
          {
            type: 'p',
            text: 'SISTER is the platform Indonesian higher education runs its lecturer data on. One of its core services, Beban Kerja Dosen (BKD), handles workload reporting for hundreds of thousands of lecturers nationwide.',
          },
          {
            type: 'p',
            text: 'The ministry staff who oversee that data had a problem of scale. The existing dashboard could only compare figures at an aggregate level. There was no way to break the picture down by province, by institution type, by accreditation, or by lecturer generation — exactly the kind of breakdown policy decisions need.',
          },
          {
            type: 'p',
            text: 'Separately, the ministry ran competency and certification tests for lecturers manually or on external platforms with no connection to SISTER. A previous intern batch had started an internal Computer Assisted Test module and left it unfinished. Both landed on my desk at the same time.',
          },
        ],
      },
      {
        heading: 'The problem',
        blocks: [
          { type: 'h3', text: 'BKD Dashboard' },
          {
            type: 'p',
            text: 'Data existed but couldn\u2019t be interrogated. Staff could see a national number and not much else — no filtering by year, no geographic distribution, no way to separate academic from vocational institutions, no view of the age profile of the lecturer workforce. Evaluating lecturer performance still took substantial manual effort.',
          },
          { type: 'h3', text: 'CAT' },
          {
            type: 'p',
            text: 'Not a greenfield build — an inheritance, and a messy one. On code review, the project branch turned out to be six months behind master, which meant complex merge conflicts before any feature work could start. The existing build didn\u2019t match the Figma designs, the dashboard had no sidebar, and there were functional bugs.',
          },
          { type: 'h3', text: 'The team' },
          {
            type: 'p',
            text: 'Twelve people, most of whom had never worked in Scrum. That was the constraint that shaped everything else.',
          },
        ],
      },
      {
        heading: 'My role',
        blocks: [
          {
            type: 'p',
            text: 'Sole product manager across both products. I ran requirements gathering with stakeholders at Direktorat Sumber Daya, built and refined both backlogs, ran sprint planning, daily stand-ups, sprint reviews and retrospectives for both squads, and reported progress directly to ministry stakeholders. There was no senior PM above me on either workstream.',
          },
          {
            type: 'p',
            text: 'I also split the batch into the two squads and assigned composition: 7 people on BKD (UI/UX, four fullstack, database engineer, QA) and 5 on CAT (UI/UX, QA, database engineer, two fullstack).',
          },
        ],
      },
      {
        heading: 'Approach',
        blocks: [
          { type: 'h3', text: 'I spent the first sprint teaching, not shipping' },
          {
            type: 'p',
            text: 'Most of the team had never run Scrum. I could have loaded sprint one with real feature work and let people learn under pressure. Instead I deliberately kept the scope light and used the sprint as a live lesson: what a stand-up is for, how the backlog gets prioritized, what a sprint review actually reviews. I ran a knowledge-sharing session on Agile in week two.',
          },
          {
            type: 'p',
            text: 'The team finished more than 70% of the sprint-one backlog — well above what I\u2019d planned for. More usefully, from sprint two onward they were stable, and I never had to re-explain the process.',
          },
          { type: 'h3', text: 'I made acceptance criteria and definition of done non-negotiable' },
          {
            type: 'p',
            text: 'Every user story carried explicit acceptance criteria and a specific definition of done. The effect showed up hardest in QA: testers could tell whether a feature met its requirement without going back to developers for clarification, and rework caused by ambiguous specs dropped sharply. It was the cheapest quality intervention available.',
          },
          { type: 'h3', text: 'On CAT, I stopped feature work to rebuild shared understanding' },
          {
            type: 'p',
            text: 'The inherited codebase didn\u2019t match its own documentation. Rather than push forward on assumptions, I had the team run a full code review against the previous batch\u2019s final report, catalogue the discrepancies, then convened a dedicated session with stakeholders to establish what the intended flow actually was. Only after that did we write the user stories.',
          },
          {
            type: 'p',
            text: 'Starting a sprint on a system nobody fully understood would have produced work that had to be thrown away.',
          },
        ],
      },
      {
        heading: 'What shipped',
        blocks: [
          { type: 'h3', text: 'BKD Dashboard — delivered complete' },
          {
            type: 'ul',
            items: [
              '13 tabs covering BKD reporting, special obligations, LKD conclusions, community service, and nine separate research output components',
              'Five data breakdowns: institution location by province, lecturer generation, institution type, accreditation grade, and institution status across 17 LLDIKTI regions',
              'Four core features: hover detail on charts, download as JPG, PNG or PDF, year and institution-type filtering, and search across location and status data',
              'Delivered through 7 sprints, tracked as 316 tasks across 25 epics in Jira',
              'User Acceptance Testing run before rollout; dummy data replaced with production data in the final sprint',
            ],
          },
          { type: 'h3', text: 'CAT — 4 of 5 submenus delivered' },
          {
            type: 'ul',
            items: [
              'Topik Soal — question topic management',
              'Bank Soal — central question repository with add, edit, deactivate, and attempt-history tracking',
              'Paket Soal — question packages assembled by topic, with PDF export that strips answer options and scores',
              'Jenis Ujian — exam type classification for competency, certification and selection tests',
              'Sesi Ujian — design completed, build not started',
              'Roughly 100 backlog items across 4 sprints — a smaller count than BKD because much of the available time went into recovering the inherited codebase before feature work could begin',
            ],
          },
        ],
      },
      {
        heading: 'Results',
        blocks: [
          {
            type: 'p',
            text: 'The BKD Dashboard shipped complete and went to staging after final revisions and handover to stakeholders. Ministry staff gained the breakdowns the service had been missing: workload reporting by province, by institution type, by accreditation, and by lecturer generation — which makes questions like academic workforce regeneration answerable from the dashboard rather than from a manual data pull.',
          },
          { type: 'h3', text: 'What I didn\u2019t finish' },
          {
            type: 'p',
            text: 'CAT\u2019s exam session module — the piece that actually runs a live exam — was designed but not built. We ran out of time and people. I handed over the outstanding Jira stories, tasks and bugs to the next batch along with a written recommendation on sequencing. I also don\u2019t know the current status of either product; I handed both over at the end of the internship, and what happened after that isn\u2019t mine to claim.',
          },
        ],
      },
      {
        heading: 'What I\u2019d do differently',
        blocks: [
          { type: 'h3', text: 'Get the team technically ready before sprint one' },
          {
            type: 'p',
            text: 'Spending sprint one on Scrum was the right call, but it treated the process gap and left the technical gap alone. People were still learning the stack while sprints were running. Onboarding should cover the tools and codebase before the first sprint starts, so the first sprint teaches one thing rather than three.',
          },
          { type: 'h3', text: 'Escalate blockers faster' },
          {
            type: 'p',
            text: 'Several times the team absorbed an obstacle for days before it reached the mentor. Sitting with a problem feels like ownership; it\u2019s usually just delay. I\u2019d make escalation an explicit, low-friction step rather than something people reach for once they\u2019ve exhausted themselves.',
          },
          { type: 'h3', text: 'Plan CAT against the resources I actually had' },
          {
            type: 'p',
            text: 'Running two products with twelve people meant CAT was always the thinner squad, and the exam session module was the predictable casualty. A more honest plan would have cut CAT\u2019s scope at the start to what five people could finish in four months, rather than discovering the limit in the last sprint.',
          },
        ],
      },
    ],
  },

  // ===========================================================
  {
    slug: 'appiks',
    tag: 'Product Ownership',
    cardTitle: 'APPIKS — Safeguarding Platform for Schools',
    title: 'APPIKS — Turning a School Safeguarding Policy into Something Students Actually Open',
    subtitle: 'A daily mood check-in that gives counselors early signal, instead of a reporting form nobody fills in',
    cardDescription:
      'Six roles, 30+ features, built in 2.5 months and validated with 120 students and teachers. The core design argument was whether the system should decide which child is at risk.',
    thumbnail: '/images/case-appiks.svg',
    meta: [
      { label: 'Role', value: 'Product Owner — requirements, backlog, roadmap, delivery, field validation' },
      { label: 'Client', value: 'Arifah Suryaningsih, doctoral researcher, Universitas Negeri Yogyakarta' },
      { label: 'Timeline', value: 'Aug – Nov 2025 (2.5 months to full delivery)' },
      { label: 'Team', value: '4 — backend, frontend, UI/UX, scrum master' },
      { label: 'Scope', value: '6 user roles, 30+ features' },
      { label: 'Outcome', value: 'Validated with 120 users across 6 schools at 4.1–4.3/5.0; copyright registered' },
    ],
    sections: [
      {
        heading: 'Context',
        blocks: [
          {
            type: 'p',
            text: 'In 2023 the Indonesian education ministry issued Permendikbudristek 46/2023, requiring every school to prevent and handle violence on its premises and to form a dedicated team — TPPK — to do it. Compliance on paper was fast: within two years, around 94% of schools had formed one.',
          },
          {
            type: 'p',
            text: 'Compliance in practice was another matter. Arifah Suryaningsih\u2019s doctoral research into senior high schools across Yogyakarta found the mandate producing structure without function. TPPK, the student affairs team and the guidance counselors were all doing overlapping versions of the same work: duplicated case records, competing interventions, unclear referral paths, and cases that were mediated but never closed.',
          },
          {
            type: 'p',
            text: 'The consequence was structural, not incidental: schools were reactive. Something had to happen, and someone had to report it, before anything moved. Her research produced a management model to fix that, and she wanted the model to come with something real attached. That\u2019s where I came in, hired as a freelance product owner to build it.',
          },
        ],
      },
      {
        heading: 'The problem',
        blocks: [
          {
            type: 'p',
            text: 'Before APPIKS, a student in trouble had two routes: paper, or being called in to the counselor\u2019s office. Suggestions and concerns moved the same way — on paper, or through a WhatsApp group.',
          },
          {
            type: 'ul',
            items: [
              'Reporting requires a decision. A student has to conclude that what happened is serious enough, name it, and put their name on it. Most never get that far.',
              'Counselors have no data. Without a reported incident, teachers are working from what they happen to notice. The students in the most trouble are often the quietest.',
              'Nothing accumulates. Paper reports don\u2019t form a pattern. There\u2019s no way to see that a student has been struggling for three weeks, or that one class is drifting.',
            ],
          },
          {
            type: 'p',
            text: 'So the mandate said "prevent," and the only mechanism available was one that could only react.',
          },
        ],
      },
      {
        heading: 'The central product decision',
        blocks: [
          { type: 'h3', text: 'A daily mood check-in instead of an incident reporting form' },
          {
            type: 'p',
            text: 'Asking a student "did something happen to you?" requires them to classify an experience and disclose it. Asking "how are you feeling today?" requires neither. It costs a tap. And because it\u2019s asked every day rather than at a moment of crisis, it produces something a report never could: a line rather than a point. A counselor looking at a month of check-ins can see a student sliding before anything gets reported — which is what prevention has to mean if it means anything.',
          },
          {
            type: 'p',
            text: 'The trade-off is real and worth naming: mood is a weaker signal than a report. It tells you something is wrong, not what. That\u2019s why the unsafe path always ends with a way to reach a human, and why anonymous direct reporting is on the roadmap rather than replaced by this.',
          },
        ],
      },
      {
        heading: 'The argument about how the rules should work',
        blocks: [
          {
            type: 'p',
            text: 'The first design was threshold-based. Every check-in incremented a counter for its mood. Once a counter passed five, the system classified the student as safe or unsafe and routed accordingly, then reset the counters to zero.',
          },
          { type: 'p', text: 'I pushed back on it, and this was the longest conversation we had on the product.' },
          {
            type: 'ul',
            items: [
              'It makes a student wait to be believed — a child would have to report feeling sad or angry six separate times before the system treated them as needing anything. The worst day is often the first day.',
              'It confuses frequency with severity — five mildly bad days and one catastrophic one are not the same thing, and a counter can\u2019t tell them apart.',
              'It made the software the judge, deciding which child was at risk based on an arithmetic rule. For a safeguarding tool handling minors, that\u2019s the wrong place to put the decision.',
            ],
          },
          {
            type: 'p',
            text: 'What we shipped instead: if the student says they\u2019re not okay today, they\u2019re treated as not okay today. No threshold, no waiting period.',
          },
          {
            type: 'p',
            text: 'But immediate response alone would have been its own problem — every bad day escalating straight to a counselor would flood the counseling team and make students avoid the app. So we kept two things from the original thinking, in a different form. Logging: every check-in is recorded and surfaced as a mood recap and monthly calendar, so the longitudinal pattern is read by a counselor who can interpret it rather than by a rule that acts on it. And gates: after the unsafe-path content the student is asked whether they\u2019re okay now, then whether they want to see a counselor. The student escalates themselves, in steps, at their own pace.',
          },
          {
            type: 'p',
            text: 'The result is a system that reacts fast, records everything, and decides nothing. Judgment stayed with the counselor; agency stayed with the student.',
          },
          {
            type: 'image',
            src: '/images/appiks-rules-before-after.svg',
            alt: 'The counter-based first design next to the immediate-response final design',
            caption: 'First design, left: mood counters and a threshold of five. Final design, right: immediate routing, with logging and self-paced gates.',
          },
        ],
      },
      {
        heading: 'How the system works',
        blocks: [
          { type: 'h3', text: 'The two paths' },
          {
            type: 'ul',
            items: [
              'Safe (Gembira / Netral): interactive game, educational video, the Navigator Masa Depan questionnaire, and a daily surprise quote.',
              'Unsafe (Sedih / Marah): self-help content, the Ekspedisi Penemu questionnaire, anger management material, a daily quote written for a harder day, and Curahan Hati — a channel to write directly to a counselor.',
            ],
          },
          {
            type: 'p',
            text: 'Both paths end at the student dashboard: mood recap, educational content, profile, and notification history for counseling schedules and curhat replies.',
          },
          { type: 'h3', text: 'Scoped access across six roles' },
          {
            type: 'p',
            text: 'Who can see a student\u2019s emotional data was a design constraint, not an afterthought. Students see their own history. Homeroom teachers and counselors each see mood patterns for their own students only. The principal — the most senior person in the building — deliberately sees the least detail: aggregate summaries, no individual records. Administrative staff see account data with no mood or counseling content. Emotional records stay with the two people whose job is to act on them.',
          },
          {
            type: 'image',
            src: '/images/appiks-role-flows.svg',
            alt: 'Business process diagrams for each of the six user roles',
            caption: 'Business process flows per role — student, homeroom teacher, counselor, administration, principal, super admin.',
          },
          { type: 'h3', text: 'Design system' },
          {
            type: 'p',
            text: 'Indigo as the primary color, Jakarta Sans for legibility across devices, rounded components, an emoji mood palette, and an explicit tone of voice rule: warm, supportive, never judging. For a product whose entire function depends on a teenager choosing to open it, this isn\u2019t decoration — it\u2019s the adoption mechanism.',
          },
        ],
      },
      {
        heading: 'My role',
        blocks: [
          {
            type: 'p',
            text: 'Sole product owner. I ran requirements with the researcher, translated her research model into a product backlog and delivery roadmap covering six user roles, and drove delivery with a four-person team to a complete platform in two and a half months. She owned the decisions; my job was to bring her the options and the consequences. The rule-based approach was where that mattered most. I also facilitated the intellectual property registration end to end.',
          },
          { type: 'h3', text: 'One honest limitation in how I worked' },
          {
            type: 'p',
            text: 'Requirements came entirely through the researcher. I didn\u2019t run discovery directly with students or counselors before building. I did work with real users during testing and field deployment — observing sessions, talking to them directly, and revising based on what came back — but that was validation after the fact, not discovery before it.',
          },
        ],
      },
      {
        heading: 'Validation',
        blocks: [
          {
            type: 'p',
            text: 'We tested with 120 users across 6 senior high schools, using questionnaires, user acceptance testing and direct observation together. Scores landed at 4.1–4.3 out of 5.0 across satisfaction, usefulness and ease of use.',
          },
          {
            type: 'p',
            text: 'Product direction stayed with the researcher throughout — it was her research and her model, and the platform was built to match it. What came to me from the field was mostly interaction detail, and one example is worth keeping because of where it came from.',
          },
          {
            type: 'p',
            text: 'The username field on the profile screen checked availability one second after the last keystroke. On paper that\u2019s responsive. Watching students use it, it wasn\u2019t: a teenager pausing mid-word — to think, or because someone spoke to them — triggered the check on a half-finished name and pushed them forward. The fix was small, three to five seconds, and it only exists because someone was in the room watching instead of reading a questionnaire.',
          },
          {
            type: 'quote',
            text: 'APPIKS (Aplikasi Pencegahan dan Penanganan Intoleransi dan Kekerasan pada Siswa) menjadi satu layer dalam layanan PPKS, di mana teknologi adalah keniscayaan yang paling relevan sebagai jembatan komunikasi antara siswa dengan guru.',
            attribution:
              'Arifah Suryaningsih — Peneliti Manajemen Pendidikan, Universitas Negeri Yogyakarta; Wakil Kepala Sekolah Bidang Kurikulum, SMKN 2 Sewon',
          },
        ],
      },
      {
        heading: 'Where it stands',
        blocks: [
          {
            type: 'p',
            text: 'APPIKS is not yet running in live school operations. It\u2019s been validated, not deployed. Data sits on a dedicated server with school access, and parental consent is obtained for student participation.',
          },
          {
            type: 'ul',
            items: [
              'Anonymous reporting — the direct, anonymous incident report channel is designed but not built. It\u2019s the intended complement to mood tracking, not a replacement for it.',
              'Pilot school — commercial pilot negotiations are underway.',
              'Data retention and ownership — being defined before any live deployment.',
            ],
          },
        ],
      },
      {
        heading: 'What I\u2019d do differently',
        blocks: [
          { type: 'p', text: 'I\u2019d insist on direct discovery before the first sprint.' },
          {
            type: 'p',
            text: 'Working entirely through the researcher was efficient, and she knew the domain far better than I did. But she\u2019s a researcher and a school leader, not a fifteen-year-old deciding whether to open an app on a bad day. Everything I learned in testing that changed the product was something I could have learned before building it, at a fraction of the cost. I\u2019d spend the first week with counselors and students — not to override the research, but to make sure the interface between the model and the people using it was designed with them in the room.',
          },
          {
            type: 'p',
            text: 'It\u2019s the same pattern I\u2019ve run into elsewhere: the requirement is usually accurate, and the thing that decides whether a system gets used is somewhere the requirement doesn\u2019t reach.',
          },
        ],
      },
    ],
  },

  // ===========================================================
  {
    slug: 'accounting-worksheet',
    tag: 'Process Digitalization',
    cardTitle: 'Accounting Worksheet System',
    title: 'Cutting a 39-Step Lookup Down to One Click',
    subtitle: 'Building an internal worksheet system for a tax and accounting consultancy',
    cardDescription:
      'A seven-step lookup, repeated once per transaction, replaced by a single query returning all of them at once. Twelve modules, seven people, fully remote.',
    thumbnail: '/images/case-accounting.svg',
    meta: [
      { label: 'Role', value: 'Project Manager — requirements, backlog, delivery, stakeholder management' },
      { label: 'Client', value: 'A Jakarta accounting and tax consultancy (~10 consultants)' },
      { label: 'Timeline', value: 'Jan – Jul 2025 (5 months of delivery)' },
      { label: 'Team', value: '7, fully remote — system analyst, database engineer, UI/UX, QA, 3 fullstack' },
      { label: 'Tools', value: 'Jira, two-week sprints' },
      { label: 'Outcome', value: '12 modules delivered and accepted at UAT' },
    ],
    sections: [
      {
        heading: 'Context',
        blocks: [
          {
            type: 'p',
            text: 'The firm handles bookkeeping and tax work for both companies and individuals, with about ten consultants. Everything ran on Excel — not as a stopgap, but as the actual working environment. Client books were built, broken down and reconciled in spreadsheets.',
          },
          {
            type: 'p',
            text: 'The system I was brought in to deliver was internal: a worksheet environment for the consultants themselves, with a path for clients to view their own output later.',
          },
        ],
      },
      {
        heading: 'The problem',
        blocks: [
          { type: 'p', text: 'The clearest example is the one that became the centerpiece of the build. To pull the transactions behind a single account, a consultant did this:' },
          {
            type: 'ul',
            items: [
              'Select the account',
              'Block the range',
              'Filter one column',
              'Filter a second column',
              'Read off the journal number',
              'Search that journal number in context',
              'Copy the result to a blank sheet to work on',
            ],
          },
          {
            type: 'p',
            text: 'Seven steps, and that sequence produced one transaction. An account with 39 transactions meant running it 39 times. For one account, in one client\u2019s books, for one period.',
          },
          {
            type: 'p',
            text: 'The cost wasn\u2019t difficulty. Every step was easy. The cost was that a long sequence had to be repeated dozens of times with full attention, and attention is exactly what runs out on the thirtieth repetition.',
          },
        ],
      },
      {
        heading: 'My role',
        blocks: [
          {
            type: 'p',
            text: 'Project manager, not a developer on this one. I ran requirements with the firm\u2019s principal, translated accounting workflows into technical specifications, managed the backlog, and ran delivery with a seven-person remote team.',
          },
          { type: 'h3', text: 'Handling a domain I didn\u2019t know' },
          {
            type: 'p',
            text: 'I don\u2019t have an accounting background, and the requirements were full of terms I couldn\u2019t parse. Rather than nodding through it, I asked the principal to teach me. I\u2019d ask him to explain a term, then explain it again, then repeat it back until it was right. I sat with how the consultants actually worked. The rule I held myself to was simple: I don\u2019t translate a requirement into a ticket until I understand the flow it belongs to.',
          },
          {
            type: 'p',
            text: 'It cost hours that looked like they weren\u2019t producing anything. It meant almost no rework from misunderstood requirements across five months — and it\u2019s still how I work.',
          },
          { type: 'h3', text: 'On prioritization' },
          {
            type: 'p',
            text: 'I rarely refused a request outright; I asked to hold. An AI-powered search came up early, for example, and I parked it. The project\u2019s whole justification was cutting the repetitive core of the consultants\u2019 day. Anything that didn\u2019t do that could wait until the thing that did was finished.',
          },
          { type: 'h3', text: 'On running a fully remote team' },
          {
            type: 'p',
            text: 'This was harder than the engineering. Everyone had other commitments, and finding time when the whole team was available was a constant negotiation. What held it together was cadence rather than availability: two-week sprints, one main meeting a week, two working sessions, and a daily check-in just to know where everyone was. After every stakeholder meeting I wrote notes and walked the team through what was needed, so nobody had to be in the room to know what had been decided.',
          },
        ],
      },
      {
        heading: 'What shipped',
        blocks: [
          {
            type: 'p',
            text: 'Twelve modules: dashboard, profile, role-based access control, general ledger, worksheet, journal tracking, breakdown, adjustment, balance sheet, income statement, and supporting management account functions.',
          },
          {
            type: 'p',
            text: 'Journal tracking was the one that mattered. The seven-step lookup, repeated once per transaction, became a single click that returned all 39 transactions at once. Same output, same accuracy, none of the repetition. It was the module the principal responded to most strongly at UAT.',
          },
        ],
      },
      {
        heading: 'Handover',
        blocks: [
          {
            type: 'p',
            text: 'The system passed UAT, and the principal responded particularly well to the journal tracking module. Training and rollout sat outside the project\u2019s scope, so the work ended at acceptance rather than at go-live. That boundary is the thing I\u2019d draw differently now.',
          },
        ],
      },
      {
        heading: 'What I\u2019d do differently',
        blocks: [
          { type: 'h3', text: 'Close the scope formally before writing a line of code' },
          {
            type: 'p',
            text: 'Not a discussion and a handshake — a written definition of what is being built, what is explicitly out of scope for this phase, what done means for each module, and how requests arriving mid-project get handled. On this project that all lived in conversation. Written down, it protects everyone: the client knows exactly what they\u2019re getting and when, and the team knows what finished looks like.',
          },
          { type: 'h3', text: 'Scope training and go-live into the project, not after it' },
          {
            type: 'p',
            text: 'I treated launch as something that happens once delivery ends. I\u2019d now put it in the plan from day one — a date, named users, a training session — because a system only starts returning value on the day someone uses it, and getting there is part of the job I\u2019m best placed to arrange.',
          },
          {
            type: 'p',
            text: 'This is the project I learned the most from, and the lesson showed up in what I did next. A few months later, at an inspection services company, a request came in to digitize a set of field forms that had no standard format. I turned it down and proposed fixing the procedure first. That judgment came from here.',
          },
        ],
      },
    ],
  },
];

export function getCaseStudy(slug: string) {
  return caseStudies.find((c) => c.slug === slug);
}

export function getNeighbours(slug: string) {
  const i = caseStudies.findIndex((c) => c.slug === slug);
  return {
    prev: i > 0 ? caseStudies[i - 1] : caseStudies[caseStudies.length - 1],
    next: i < caseStudies.length - 1 ? caseStudies[i + 1] : caseStudies[0],
  };
}

// =============================================================
// TEMPLATE — copy this block to add a new project
// =============================================================
//
// {
//   slug: 'project-slug',
//   tag: 'Business Analysis',
//   cardTitle: 'Short title for the card',
//   title: 'Full title for the case study page',
//   subtitle: 'One line explaining what the project actually was',
//   cardDescription: 'Two sentences for the homepage card. Leave one question unanswered so the card earns the click.',
//   thumbnail: '/images/case-slug.jpg',
//   meta: [
//     { label: 'Role', value: '' },
//     { label: 'Client', value: '' },
//     { label: 'Timeline', value: '' },
//     { label: 'Team', value: '' },
//     { label: 'Stack', value: '' },
//     { label: 'Outcome', value: '' },
//   ],
//   sections: [
//     { heading: 'Context', blocks: [{ type: 'p', text: '' }] },
//     { heading: 'The problem', blocks: [{ type: 'p', text: '' }] },
//     { heading: 'My role', blocks: [{ type: 'p', text: '' }] },
//     { heading: 'Approach', blocks: [{ type: 'p', text: '' }] },
//     { heading: 'What I built', blocks: [{ type: 'p', text: '' }] },
//     { heading: 'Results', blocks: [{ type: 'p', text: '' }] },
//     { heading: 'What I would do differently', blocks: [{ type: 'p', text: '' }] },
//   ],
// },
