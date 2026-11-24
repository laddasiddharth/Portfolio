export const profile = {
  name: 'Siddharth Ladda',
  role: 'Software Engineer',
  education: 'B.Tech CSE, Amrita Vishwa Vidyapeetham · Class of 2027',
  headline: 'I build full-stack products, privacy tools and applied-AI interfaces.',
  intro:
    "I'm Siddharth Ladda, a final-year computer science student working across secure systems, scalable backends and machine learning.",
  bio: "I'm a final-year Computer Science and Engineering undergraduate at Amrita Vishwa Vidyapeetham, Coimbatore. I build full-stack web apps end to end, care deeply about security and privacy, and research AutoML and hyperparameter optimisation.",
  focus: [
    'Full-stack development',
    'Applied cryptography & privacy',
    'AutoML & hyperparameter optimisation',
    'AI-powered interfaces',
  ],
  /** Compact version of `focus` for the hero meta row. */
  focusShort: 'Full-stack · Security · ML',
  currently: 'Building EvoSynth, an AutoML meta-optimiser',
  location: 'Coimbatore, India · from Warangal',
  status: 'Open to SDE, full-stack and ML roles and internships',
  availability:
    "I'm currently looking for SDE, full-stack and ML engineering roles and internships. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  email: 'siddharthladda@gmail.com',
  phone: { display: '+91 99891 11900', href: 'tel:+919989111900' },
  github: { display: 'github.com/laddasiddharth', href: 'https://github.com/laddasiddharth' },
  linkedin: { display: 'linkedin.com/in/siddharth-ladda', href: 'https://www.linkedin.com/in/siddharth-ladda/' },
  resume: '/assets/Siddharth_Ladda_Resume.pdf',
  photo: '/assets/photo_1.jpeg',
} as const;

export const SECTIONS = [
  { id: 'work', n: '01', label: 'Work' },
  { id: 'recognition', n: '02', label: 'Recognition' },
  { id: 'stack', n: '03', label: 'Stack' },
  { id: 'education', n: '04', label: 'Education' },
  { id: 'about', n: '05', label: 'About' },
  { id: 'contact', n: '06', label: 'Contact' },
] as const;

/** Look up a section's number and label so components never hard-code them. */
export function sectionMeta(id: (typeof SECTIONS)[number]['id']) {
  const s = SECTIONS.find((x) => x.id === id)!;
  return { id: s.id, index: s.n, label: s.label };
}
