export type Project = {
  id: string;
  name: string;
  category: string;
  tagline: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
};

export const PROJECTS: Project[] = [
  {
    id: 'zero-knowledge-password-manager',
    name: 'Zero Knowledge Password Manager',
    category: 'Security',
    tagline: 'Cross-platform password manager with zero-knowledge architecture',
    description:
      'A highly secure password manager featuring true zero-knowledge architecture and client-side AES-256-GCM encryption. Includes an autofill browser extension, k-Anonymity breach detection, and a blind sync protocol to ensure your data stays completely private.',
    image: '/assets/zenith.png',
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Web Crypto API', 'Node.js', 'Express.js', 'MongoDB'],
    liveUrl: 'https://zero-knowledge-password-manager-frontend.onrender.com/',
    githubUrl: 'https://github.com/laddasiddharth/Zero-Knowledge-Password-Manager',
  },
  {
    id: 'notivos-ai',
    name: 'Notivos-AI',
    category: 'Desktop AI',
    tagline: 'AI-powered desktop note-taking app with offline-first design',
    description:
      'An offline-first desktop note-taking app featuring a context-aware AI assistant powered by Google Gemini. Offers intelligent summarization, writing assistance, and built-in text-to-speech, all backed by secure local storage.',
    image: '/assets/notivos.png',
    tech: ['Electron.js', 'JavaScript', 'Node.js', 'Google Gemini API'],
    githubUrl: 'https://github.com/laddasiddharth/Notivos-AI',
  },
  {
    id: 'conseal',
    name: 'Conseal',
    category: 'Privacy',
    tagline: 'AI-assisted PII redaction correction tool',
    description:
      "An AI-powered PII redaction tool featuring a robust two-tier detection model. It combines Gemini's analysis with an offline heuristic fallback for maximum accuracy. Allows manual reviewer corrections, AI-generated explanations, and secure export across multiple document formats.",
    image: '/assets/conseal.png',
    tech: ['Next.js', 'FastAPI (Python)', 'Google Gemini API', 'PyMuPDF', 'pdfjs-dist'],
    liveUrl: 'https://sprintfour-seven.vercel.app',
    githubUrl: 'https://github.com/laddasiddharth/sprintfour',
  },
  {
    id: 'freshfetch',
    name: 'FreshFetch',
    category: 'E-commerce',
    tagline: 'Full-stack MERN grocery marketplace',
    description:
      'A modern MERN-stack grocery marketplace offering a complete shopping experience. Features seamless Stripe checkout, secure JWT authentication, and a dedicated seller dashboard for managing products and orders efficiently.',
    image: '/assets/fresh-fetch.png',
    tech: ['React 19', 'Vite', 'Tailwind CSS', 'Node.js', 'Express 5', 'MongoDB (Mongoose)', 'Stripe', 'Cloudinary', 'JWT'],
    liveUrl: 'https://fresh-fetch.vercel.app',
    githubUrl: 'https://github.com/laddasiddharth/FreshFetch',
  },
];
