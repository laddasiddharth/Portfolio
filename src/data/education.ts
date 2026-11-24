export type EducationEntry = {
  current?: boolean;
  date: string;
  degree: string;
  school: string;
  location: string;
  score: { label: string; value: string };
  major?: string;
  desc?: string;
};

// Dates, grades and names follow the resume.
export const EDUCATION: EducationEntry[] = [
  {
    current: true,
    date: '2023 – 2027 (Expected)',
    degree: 'B.Tech in Computer Science and Engineering',
    school: 'Amrita Vishwa Vidyapeetham',
    location: 'Coimbatore, Tamil Nadu',
    score: { label: 'CGPA', value: '7.45 / 10' },
    desc: 'Focus on software systems, distributed computing, and applied AI. Building real projects alongside coursework.',
  },
  {
    date: '2021 – 2023',
    degree: 'Class XII',
    school: 'SR Edu Centre',
    location: 'Warangal, Telangana',
    score: { label: 'Score', value: '97.5%' },
    major: 'MPC: Mathematics, Physics, Chemistry',
    desc: 'Top performer in mathematics. Strong analytical foundations.',
  },
  {
    date: '2021',
    degree: 'Class X',
    school: 'Platinum Jubilee High School',
    location: 'Warangal, Telangana',
    score: { label: 'CGPA', value: '10 / 10' },
  },
];
