/* ============================================================
   PROJECTS DATA: the only file to edit when adding/removing work.

   ADD A PROJECT
   1. Make a folder public/images/<slug>/ and put in cover.jpg plus 8-10 screens (01.jpg, 02.jpg ...).
      Use JPG/WebP, about 1600px wide, under ~300 KB each (squoosh.app does this).
   2. Copy a block below, give it a unique slug (lowercase-with-dashes), fill in the text,
      and list the images. Projects with no images show colored placeholders.
   DELETE: remove its block.  REORDER: move its block.
   featured:true shows the project on the home page (the first 6 are used).
   ============================================================ */
export const projects = [
  {
    slug: 'project-one',
    title: 'Project name one',
    category: 'Mobile app',
    year: '2025',
    role: 'Lead UX/UI Designer',
    duration: '3 months',
    tools: ['Figma', 'FigJam'],
    color: '#55F2CF',
    featured: true,
    summary: 'One-line summary of the product and what you designed.',
    overview: 'Describe the product, who it is for, and your role in two or three sentences.',
    challenge: 'What problem were users or the business facing?',
    solution: 'How did your design approach solve it? Mention flows, key screens, and the design system.',
    outcome: 'What changed after launch? Feedback, adoption, or what you learned.',
    cover: '', // e.g. '/images/project-one/cover.jpg'
    images: [
      // { src: '/images/project-one/01.jpg', caption: 'Onboarding flow' },
      // { src: '/images/project-one/02.jpg', caption: 'Home screen' },
    ]
  },
  {
    slug: 'project-two',
    title: 'Project name two',
    category: 'Dashboard',
    year: '2025',
    role: 'UX/UI Designer',
    duration: '2 months',
    tools: ['Figma', 'Miro'],
    color: '#FF9B71',
    featured: true,
    summary: 'One-line summary of the dashboard and its users.',
    overview: 'Describe the product, who it is for, and your role in two or three sentences.',
    challenge: 'What problem were users or the business facing?',
    solution: 'How did your design approach solve it?',
    outcome: 'What changed after launch?',
    cover: '',
    images: []
  },
  {
    slug: 'project-three',
    title: 'Project name three',
    category: 'iPad app',
    year: '2024',
    role: 'UX/UI Designer',
    duration: '4 months',
    tools: ['Figma', 'Adobe Illustrator'],
    color: '#8EC5FF',
    featured: true,
    summary: 'One-line summary of the iPad experience you designed.',
    overview: 'Describe the product, who it is for, and your role in two or three sentences.',
    challenge: 'What problem were users or the business facing?',
    solution: 'How did your design approach solve it?',
    outcome: 'What changed after launch?',
    cover: '',
    images: []
  },
  {
    slug: 'project-four',
    title: 'Project name four',
    category: 'Design system',
    year: '2024',
    role: 'UX/UI Designer',
    duration: '6 weeks',
    tools: ['Figma'],
    color: '#FFD98A',
    featured: true,
    summary: 'One-line summary of the design system.',
    overview: 'Describe the product, who it is for, and your role in two or three sentences.',
    challenge: 'What problem were users or the business facing?',
    solution: 'How did your design approach solve it?',
    outcome: 'What changed after launch?',
    cover: '',
    images: []
  }
];
