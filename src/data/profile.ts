export const profile = {
  name: 'Siddharth Ladda',
  role: 'Software Engineer',
  education: 'B.Tech CSE, Amrita Vishwa Vidyapeetham',
  headline: 'I build full-stack products, privacy tools and applied-AI interfaces.',
  intro:
    "I'm Siddharth Ladda, a software engineer working across secure systems, scalable backends and carefully built interfaces.",
  bio: "I'm an undergraduate software engineer with a heavy focus on full-stack development, applied cryptography, and intelligent interfaces. My goal is to bridge the gap between complex backend architectures and flawless user experiences.",
  focus: ['Full-stack development', 'Applied cryptography', 'Intelligent interfaces'],
  currently: 'B.Tech CSE, 2023–2027',
  status: 'Open to opportunities',
  availability:
    "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
  email: 'siddharthladda@gmail.com',
  phone: { display: '+91 99891 11900', href: 'tel:+919989111900' },
  github: { display: 'github.com/laddasiddharth', href: 'https://github.com/laddasiddharth' },
  linkedin: { display: 'linkedin.com/in/siddharth-ladda', href: 'https://linkedin.com/in/siddharth-ladda' },
  resume: '/assets/Siddharth_Ladda_Resume.pdf',
  photo: '/assets/photo_1.jpeg',
} as const;

export const SECTIONS = [
  { id: 'work', n: '01', label: 'Work' },
  { id: 'about', n: '02', label: 'About' },
  { id: 'stack', n: '03', label: 'Stack' },
  { id: 'education', n: '04', label: 'Education' },
  { id: 'contact', n: '05', label: 'Contact' },
] as const;
