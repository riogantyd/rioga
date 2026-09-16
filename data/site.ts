// =============================================================
// SITE CONTENT
// Everything on the homepage comes from this file.
// Edit here, not in the components.
// =============================================================

export const profile = {
  name: "Rioga Natayudha",
  shortName: "Rioga Natayudha",
  initial: "RN",
  role: "Product Manager and IT Business Analyst",
  location: "Jakarta, Indonesia",
  email: "rioga.work@gmail.com",
  whatsapp: "6285111360711",
  phoneDisplay: "(+62) 851-1136-0711",
  linkedin: "https://linkedin.com/in/rioganatayudha",
  cvPath: "/images/CV_Rioga.pdf", // file: public/images/CV_Rioga.pdf
  heroPhoto: "/images/rioga.jpg",
};

export const hero = {
  greeting: "Hello, I'm",
  bio: "I'm a Product Manager and IT Business Analyst based in Jakarta. I turn manual, paper-based operations into digital systems that non-technical teams actually use — from national platforms at the higher education ministry to field operations in oil & gas inspection.",
  cta: "See my work",
};

export const stats = [
  { value: "5", label: "Systems delivered end-to-end" },
  { value: "12", label: "Largest team led" },
  { value: "120", label: "Users validated in the field" },
];

export const about = {
  heading: "I build systems that survive contact with real users",
  paragraphs: [
    "Most operational systems don't fail because the code is wrong. They fail because the people who were supposed to use them never did. I've spent the last two years building internal systems for organizations where the users aren't technical — ministry staff, accountants, school counselors, inspection crews — and the hardest part has never been the software.",
    "I work across the whole path from problem to adoption: sitting with the people doing the work, mapping how the process actually runs today, translating it into requirements and a backlog, shipping it, then training the people who have to live with it. I've run a 12-person squad delivering two national products in parallel, owned a safeguarding platform from requirements through field validation with 120 users, and been brought back to the same client six times over 18 months.",
  ],
};

export const process = {
  heading: "How I work",
  subtext: "Four steps, and the fourth is the one most projects skip.",
  steps: [
    {
      title: "Discover",
      body: "I sit with the people who do the work, not just the manager who requested the system. The gap between what\u2019s requested and what\u2019s actually needed usually shows up in the first hour on the floor.",
    },
    {
      title: "Map",
      body: "I document the process as it really runs today — every step, every printed form, every handoff — and count where time and accuracy leak. You can\u2019t prove improvement without a baseline.",
    },
    {
      title: "Build",
      body: "I translate the process into requirements, a backlog, and a working system. I ship in small pieces and put each one in front of real users before moving on.",
    },
    {
      title: "Adopt",
      body: "A system nobody uses is a failed project, not a delivered one. I write the SOPs, train the users, and stay long enough to see whether the new process holds. Sometimes that means recommending a spreadsheet instead of an application.",
    },
  ],
};

export const portfolioIntro = {
  heading: "Selected work",
  subtext:
    "Four systems across oil & gas inspection, government, education, and professional services — each one a manual process that needed to become something people would use.",
};

export const ctaBand = {
  heading: "Looking for someone who reads a process before writing code?",
  subtext:
    "I'm open to roles in product management, business analysis, and ERP implementation — and to freelance work on internal operational systems.",
  button: "Get in touch",
};

export const services = {
  heading: "What I do",
  subtext: "Three things, in the order they usually need doing.",
  button: "Let's talk",
  items: [
    {
      title: "Business & Process Analysis",
      body: "I work out how an operation actually runs today — every step, every printed form, every handoff — find where it leaks time and accuracy, and design the process that replaces it. Deliverables: process maps, requirement documents, functional specifications, SOPs.",
    },
    {
      title: "Product Management & Delivery",
      body: "I translate business needs into backlogs, user stories with acceptance criteria, and sprint plans — then run the delivery. I've led teams of 4, 7, and 12 across projects in government, education, and professional services.",
    },
    {
      title: "Digitalization & User Enablement",
      body: "I build the system (Laravel, React, MySQL) and then make sure it gets used: documentation, training, and a transition path for people who have never worked digitally before.",
    },
  ],
};

export const testimonials = {
  heading: "What they say",
  items: [
    {
      quote:
        "Sangat puas dengan hasil kerjanya. Sistem baru ini membantu meningkatkan efisiensi tim kami hingga 50%. Proses manual berkurang, dan datanya lebih akurat. Cepat dan komunikatif. Highly recommended.",
      name: "Agung Pramudya",
      role: "Technical Manager, PT Adiwarna Pratama",
    },
    // Add the second testimonial here when it arrives.
    // The carousel appears automatically once there is more than one.
  ],
};

export const contact = {
  heading: "Let's talk",
  subtext:
    "Open to full-time roles in product management, business analysis, and ERP implementation, and to freelance projects on internal operational systems. I usually reply within a day.",
  reasons: ["Full-time role", "Freelance project", "Something else"],
};

export const nav = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Process", href: "/#process" },
  { label: "Work", href: "/#services" },
];
