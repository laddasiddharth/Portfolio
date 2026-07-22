import { motion } from 'framer-motion';
import { useState } from 'react';

const SKILLS = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg' },
  { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg' },
  
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg', invertDark: true },
  { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg' },
  { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg' },
  
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg' },
  { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg', invertDark: true },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg' },
  
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg' },
  { name: 'Linux', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg' },
  { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vercel/vercel-original.svg', invertDark: true },
];

export default function Skills() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const containerVariants: any = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.2 }
    }
  };

  const itemVariants: any = {
    hidden: { opacity: 0, scale: 0.5, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 200, damping: 15 } }
  };

  return (
    <section id="skills" style={{ padding: 'var(--section-gap) 0', position: 'relative' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
        >
          <h2 className="t-heading" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '4rem', color: 'var(--text)' }}>
            Tech <span style={{ color: '#22c55e' }}>Stack</span>
          </h2>
          
          <div style={{ 
            display: 'flex', 
            flexWrap: 'wrap', 
            justifyContent: 'center', 
            gap: '2rem 1.5rem', 
            maxWidth: '900px',
            padding: '2rem',
            position: 'relative'
          }}>
            {SKILLS.map((skill, sIdx) => {
              const size = (sIdx % 3 === 0) ? 100 : (sIdx % 2 === 0) ? 90 : 80;
              const iconSize = size * 0.5;
              
              const isHovered = hoveredIndex === sIdx;
              const distance = hoveredIndex !== null ? sIdx - hoveredIndex : 0;
              
              // Calculate magnetic pull: if it's the item before hovered, pull it right (+20px). If it's after, pull it left (-20px).
              // We can also apply a slight vertical pull if they are in different rows, but for flex-wrap, 
              // horizontal pull is visually striking.
              const pullX = distance === -1 ? 25 : distance === 1 ? -25 : 0;
              const pullScale = isHovered ? 1.2 : (Math.abs(distance) === 1 ? 1.05 : 1);
              const opacity = hoveredIndex !== null && !isHovered ? 0.6 : 1;

              return (
                <motion.div 
                  key={sIdx} 
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredIndex(sIdx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  animate={{
                    x: pullX,
                    scale: pullScale,
                    opacity: opacity,
                    zIndex: isHovered ? 10 : 1
                  }}
                  transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    alignItems: 'center', 
                    gap: '1rem',
                    width: size,
                    cursor: 'pointer'
                  }}
                >
                  <motion.div 
                    animate={{
                      borderColor: isHovered ? '#22c55e' : 'var(--border)',
                      boxShadow: isHovered ? '0 0 20px rgba(34, 197, 94, 0.4)' : 'var(--shadow-lg)'
                    }}
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                    style={{
                      width: size,
                      height: size,
                      borderRadius: '50%',
                      background: 'var(--surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid',
                    }}
                  >
                    <img 
                      src={skill.icon} 
                      alt={skill.name} 
                      style={{ 
                        width: iconSize, 
                        height: iconSize, 
                        objectFit: 'contain',
                        filter: skill.invertDark ? 'invert(1)' : 'none'
                      }} 
                    />
                  </motion.div>
                  <motion.span 
                    animate={{ color: isHovered ? '#22c55e' : 'var(--text-secondary)' }}
                    className="t-label" 
                    style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}
                  >
                    {skill.name.toUpperCase()}
                  </motion.span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
