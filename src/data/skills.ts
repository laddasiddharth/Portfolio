// Groups and items follow the resume's Technical Skills section. Items marked
// in the GitHub profile README (Socket.IO, Prisma, Docker, ML / Data) are added.
export const SKILL_GROUPS = [
  { title: 'Languages', items: ['C++', 'Java', 'JavaScript', 'TypeScript', 'Python', 'C', 'SQL'] },
  {
    title: 'Frameworks & Libraries',
    items: ['React.js', 'Next.js', 'Node.js', 'Express.js', 'FastAPI', 'Tailwind CSS', 'Socket.IO'],
  },
  { title: 'Databases', items: ['MongoDB (Mongoose)', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma'] },
  { title: 'ML & Data', items: ['scikit-learn', 'NumPy', 'Pandas', 'TensorFlow', 'Matplotlib'] },
  {
    title: 'Developer Tools',
    items: ['Git', 'GitHub Actions (CI/CD)', 'Jest', 'Postman', 'Docker', 'Linux', 'Vercel', 'Render'],
  },
] as const;
