export type Achievement = {
  year: string;
  event: string;
  result?: string;
  summary: string;
  links: { label: string; href: string }[];
};

// From the resume's "Hackathons & Achievements" section.
export const ACHIEVEMENTS: Achievement[] = [
  {
    year: '2026',
    event: 'Odoo × KAHE Hackathon',
    result: 'First Runner-Up · 2nd of 100 teams',
    summary:
      'Built Purple Cup Café, a Next.js/TypeScript café POS, in 24 hours as a 4-member team: QR table ordering, real-time kitchen and cashier screens (Socket.IO, Redis) and Razorpay payments.',
    links: [
      { label: 'Certificate', href: 'https://raw.githubusercontent.com/laddasiddharth/certificates/main/OdooxKAHE.pdf' },
      { label: 'Source code', href: 'https://github.com/laddasiddharth/odoo-team75' },
    ],
  },
  {
    year: '2026',
    event: 'Sprintfour Hackathon',
    summary:
      'Developed Conseal, a Next.js + FastAPI tool that detects PII across 9 document formats using the Gemini API, with manual review and redacted-PDF export.',
    links: [
      { label: 'Certificate', href: 'https://raw.githubusercontent.com/laddasiddharth/certificates/main/SprintFour.pdf' },
      { label: 'Source code', href: 'https://github.com/laddasiddharth/sprintfour' },
    ],
  },
];
