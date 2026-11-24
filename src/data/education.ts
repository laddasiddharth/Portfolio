export type EducationEntry = {
  current?: boolean;
  date: string;
  degree: string;
  school: string;
  major?: string;
  desc?: string;
};

export const EDUCATION: EducationEntry[] = [
  {
    current: true,
    date: 'Aug 2023 – Jul 2027 (Expected)',
    degree: 'Bachelor of Technology',
    school: 'Amrita Vishwa Vidyapeetham, Coimbatore',
    major: 'Computer Science & Engineering',
    desc: 'Focus on software systems, distributed computing, and applied AI. Building real projects alongside coursework.',
  },
  {
    date: 'Jun 2021 – May 2023',
    degree: 'Higher Secondary Education',
    school: 'SR Edu Centre, Warangal',
    major: 'Science Stream — Physics, Chemistry, Mathematics',
    desc: 'Top performer in mathematics. Strong analytical foundations.',
  },
  {
    date: 'Jun 2020 – Apr 2021',
    degree: 'Secondary Education',
    school: 'Platinum Jubilee High School, Warangal',
  },
];
