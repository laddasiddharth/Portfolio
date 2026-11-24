export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  name: string;
  category: string;
  /** Short recognition shown in the index row, e.g. a hackathon placing. */
  badge?: string;
  /** Who / where: team size, hackathon, course. */
  context: string;
  tagline: string;
  description: string;
  highlights: string[];
  tech: string[];
  links: ProjectLink[];
};

/** Smaller repositories, shown as one-line entries under the main index. */
export type MinorProject = {
  name: string;
  summary: string;
  tech: string;
  href: string;
};

// Every claim below is taken from the resume and checked against the project's source code.
export const PROJECTS: Project[] = [
  {
    id: 'zenith-vault',
    name: 'Zenith Vault',
    category: 'Security',
    context: 'Team of 5',
    tagline: 'Zero-knowledge password manager: web vault, Chrome/Edge extension and mobile app',
    description:
      'Every credential is encrypted on the device before it is synced, so the server only ever stores ciphertext.',
    highlights: [
      'On-device AES-256-GCM encryption with keys derived through Argon2id.',
      'Challenge-response login: a client proof is checked against a stored verifier using single-use challenges, alongside email OTP and 256-bit recovery keys.',
      'Versioned vault sync with conflict detection, and credential sharing between users using RSA-OAEP public keys.',
      'Scheduled k-anonymity breach checks and cleanup jobs with node-cron; API hardened with Helmet, rate limiting and query sanitisation.',
      '85 Jest tests across 25 test files, run in a GitHub Actions CI pipeline.',
    ],
    tech: ['Next.js', 'TypeScript', 'Express.js', 'MongoDB', 'Web Crypto API', 'React Native (Expo)', 'Jest', 'GitHub Actions'],
    links: [
      { label: 'Live site', href: 'https://zero-knowledge-password-manager-frontend.onrender.com/' },
      { label: 'Source code', href: 'https://github.com/laddasiddharth/Zero-Knowledge-Password-Manager' },
    ],
  },
  {
    id: 'purple-cup-cafe',
    name: 'Purple Cup Café',
    category: 'Point of sale',
    badge: 'Runner-up',
    context: 'Odoo × KAHE Hackathon 2026 · First Runner-Up, 2nd of 100 teams · Team of 4',
    tagline: 'Café point-of-sale with QR table ordering and real-time kitchen and cashier screens',
    description: 'Built in 24 hours by a four-person team.',
    highlights: [
      'QR table ordering: each table gets a signed link, so guests order and pay from their phones.',
      'Real-time kitchen and cashier screens over Socket.IO, with Redis keeping events in sync across server instances.',
      'Razorpay online payments with server-side signature verification.',
    ],
    tech: ['Next.js', 'TypeScript', 'Socket.IO', 'Redis', 'PostgreSQL (Prisma)', 'Razorpay'],
    links: [
      { label: 'Source code', href: 'https://github.com/laddasiddharth/odoo-team75' },
      { label: 'Certificate', href: 'https://raw.githubusercontent.com/laddasiddharth/certificates/main/OdooxKAHE.pdf' },
    ],
  },
  {
    id: 'conseal',
    name: 'Conseal',
    category: 'Privacy',
    context: 'Sprintfour Hackathon 2026',
    tagline: 'PII redaction tool built around the human reviewer',
    description:
      'Detection is only half the job: Conseal puts the riskiest likely misses at the top of the review queue, so a person checks what matters most.',
    highlights: [
      'Detects PII with the Gemini API across 9 document formats: PDF, DOCX, TXT, MD, CSV, HTML, RTF, JSON and XML.',
      'An offline heuristic pass flags likely misses, such as bare digit runs and unpunctuated names, and ranks them first.',
      'Reviewers redact by click-and-drag, can ask why text was left visible, and export a truly redacted PDF via PyMuPDF.',
    ],
    tech: ['Next.js', 'TypeScript', 'FastAPI', 'Python', 'Gemini API', 'PyMuPDF', 'pdf.js'],
    links: [
      { label: 'Live site', href: 'https://sprintfour-seven.vercel.app' },
      { label: 'Source code', href: 'https://github.com/laddasiddharth/sprintfour' },
      { label: 'Certificate', href: 'https://raw.githubusercontent.com/laddasiddharth/certificates/main/SprintFour.pdf' },
    ],
  },
  {
    id: 'freshfetch',
    name: 'FreshFetch',
    category: 'E-commerce',
    context: 'Individual project',
    tagline: 'Full-stack grocery store with a customer storefront and a seller dashboard',
    description:
      'Customers browse by category, manage a cart, save addresses and track orders; sellers add products, manage stock and view orders.',
    highlights: [
      '19 REST endpoints across 4 Mongoose models: User, Product, Order and Address.',
      'JWT authentication in HTTP-only cookies, with bcrypt password hashing.',
      'Stripe Checkout confirmed by webhook, cash on delivery, and Cloudinary/Multer image uploads.',
    ],
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'Node.js', 'Express 5', 'MongoDB (Mongoose)', 'Stripe', 'Cloudinary', 'JWT'],
    links: [
      { label: 'Live site', href: 'https://fresh-fetch.vercel.app' },
      { label: 'Source code', href: 'https://github.com/laddasiddharth/FreshFetch' },
    ],
  },
  {
    id: 'notivos-ai',
    name: 'Notivos-AI',
    category: 'Desktop AI',
    context: 'Course project · 23CSE113 User Interface Design',
    tagline: 'Electron note-taking app with a Gemini assistant',
    description:
      'A desktop notes app with create, edit, search and sort, plus a chat assistant that can see the note you are working on.',
    highlights: [
      'Gemini chat assistant that sends the open note as context, for questions, summaries and ideas.',
      'The API key stays off the client, behind a small Express proxy.',
      'Built-in text-to-speech with play, pause and voice selection; notes persist locally between sessions.',
    ],
    tech: ['Electron.js', 'JavaScript', 'Node.js', 'Express.js', 'Google Gemini API'],
    links: [{ label: 'Source code', href: 'https://github.com/laddasiddharth/Notivos-AI' }],
  },
];

// One-line summaries taken from each repository's README.
export const MORE_WORK: MinorProject[] = [
  {
    name: 'EvoSynth-Bench',
    summary:
      'Open benchmark for AutoML meta-optimisers: HPO trajectories across GA, PSO, DE and CMA-ES, plus a deliberately noisy classification landscape.',
    tech: 'Python · XGBoost · LightGBM',
    href: 'https://github.com/laddasiddharth/EvoSynth-Bench',
  },
  {
    name: 'Secure Legal DMS',
    summary:
      'Legal document management with hybrid RSA-2048 + AES-256-GCM encryption, email-OTP MFA, role-based access and SHA-256 integrity checks.',
    tech: 'React · TypeScript · Express · MongoDB',
    href: 'https://github.com/laddasiddharth/Secure-Legal-Case-Client-Confidential-Document-Management-System',
  },
  {
    name: 'StrideSense',
    summary:
      'Smart insole for gait analysis and fall detection: ESP32 firmware with an on-device ML model, syncing to a Supabase-backed dashboard.',
    tech: 'Embedded C · TinyML · Supabase · React',
    href: 'https://github.com/laddasiddharth/StrideSense-main',
  },
  {
    name: 'JobAssistAI',
    summary: 'Job-application tracker with a drag-and-drop Kanban board and AI parsing of job descriptions.',
    tech: 'React · TypeScript · Express · MongoDB · OpenAI API',
    href: 'https://github.com/laddasiddharth/JobAssistAI',
  },
  {
    name: 'MediCart',
    summary:
      'Pharmacy e-commerce app with prescription uploads, pill reminders and an admin dashboard for orders and invoices.',
    tech: 'Next.js · TypeScript · PostgreSQL (Drizzle)',
    href: 'https://github.com/laddasiddharth/MediCart',
  },
];
