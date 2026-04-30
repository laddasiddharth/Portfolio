import { ExternalLink, Github } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import SpotlightCard from './ui/SpotlightCard';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveDemoUrl?: string;
  repositoryUrl?: string;
}

export default function Projects() {
  const projects: Project[] = [
    {
      id: "adaptive-fl-compression",
      title: "Adaptive Federated Learning with Compression",
      description: "Edge-computing system designed for low-latency local processing using CI-based decision logic. Implemented lightweight modules enabling efficient distributed computation with minimal cloud dependency.",
      technologies: ["Federated Learning", "Edge Computing", "Distributed Systems", "Machine Learning", "Compression Techniques"],
      repositoryUrl: "https://github.com/laddasiddharth/Edge_Computing-Project"
    },
    {
      id: "notivos-ai",
      title: "Notivos-AI",
      description: "Desktop note-taking application built using Electron.js with core CRUD, sorting, and search functionality. Integrated Google Gemini for AI-powered answering, summarization, and text-to-speech accessibility.",
      technologies: ["Electron.js", "JavaScript", "Google Gemini API", "AI Integration", "Desktop App"],
      repositoryUrl: "https://github.com/laddasiddharth/Notivos-AI"
    },
    {
      id: "spam-email-detection",
      title: "Spam Email Detection",
      description: "Machine learning-powered spam detection system using Natural Language Processing and classification algorithms. Features real-time email analysis, high accuracy spam filtering, and comprehensive model evaluation metrics.",
      technologies: ["Python", "Machine Learning", "NLP", "Scikit-learn", "Data Analysis"],
      repositoryUrl: "https://github.com/laddasiddharth/Spam-Email-Detection"
    },
    {
      id: "gradeai-student-predictor",
      title: "GradeAI Student Predictor",
      description: "AI-driven student performance prediction system that analyzes academic data to forecast student grades. Utilizes regression models and data visualization to provide insights into factors affecting academic success.",
      technologies: ["Python", "Machine Learning", "Pandas", "Scikit-learn", "Data Visualization"],
      repositoryUrl: "https://github.com/laddasiddharth/GradeAI-Student-Predictor"
    },
    {
      id: "freshfetch",
      title: "FreshFetch",
      description: "A modern grocery and essentials shopping web application featuring product listings, detailed views, cart functionality, and a clean, responsive UI built with React.",
      technologies: ["React", "JavaScript", "Tailwind CSS", "Frontend Development", "Web Application"],
      liveDemoUrl: "https://fresh-fetch.vercel.app/",
      repositoryUrl: "https://github.com/laddasiddharth/FreshFetch"
    },
    {
      id: "secure-legal-case-system",
      title: "Secure Legal Case & Document Management",
      description: "A high-security document management platform engineered for the legal industry to handle sensitive judicial data. Built with a 'Zero-Trust' philosophy, the system ensures complete confidentiality and document integrity for legal professionals through an advanced security-first architecture.",
      technologies: ["TypeScript", "Node.js", "React", "Cryptography", "Security", "Express"],
      repositoryUrl: "https://github.com/laddasiddharth/Secure-Legal-Case-Client-Confidential-Document-Management-System"
    },
    {
      id: "zero-knowledge-password-manager",
      title: "Zenith Vault (Zero-Knowledge Password Manager)",
      description: "A high-security password management system built with a true zero-knowledge architecture. Features client-side AES-256-GCM encryption, privacy-preserving breach detection using k-Anonymity, and multi-platform support with a browser extension.",
      technologies: ["Next.js", "Node.js", "TypeScript", "Cryptography", "MongoDB", "Tailwind CSS", "Express"],
      liveDemoUrl: "https://zero-knowledge-password-manager-frontend.onrender.com/",
      repositoryUrl: "https://github.com/SE-Project-Team-13/Zero-Knowledge-Password-Manager"
    }
  ];

  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.05 });

  return (
    <section className="relative pt-24 sm:pt-28 pb-10 sm:pb-12">
      <div className="absolute bottom-0 -left-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] pointer-events-none" />
      <div ref={sectionRef} className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="section-heading">Featured <span className="gradient-text">Projects</span></h2>
            <p className="section-subheading">Some of my best work</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <SpotlightCard
                key={project.id}
                className={`group glass-card rounded-2xl overflow-hidden flex flex-col transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                style={{ transitionDelay: `${200 + idx * 100}ms` } as React.CSSProperties}
                spotlightColor="var(--spotlight-color-theme)"
              >
                <div className="p-6 flex-1">
                  <h3 className="text-lg font-bold mb-3 text-foreground group-hover:text-accent transition-colors duration-300">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed line-clamp-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <span key={techIdx} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium border border-accent/10">{tech}</span>
                    ))}
                  </div>
                </div>
                <div className="px-6 py-4 flex gap-3 items-center border-t border-border/30">
                  {project.repositoryUrl && (
                    <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium border border-border/50 rounded-xl hover:border-accent/50 hover:text-accent hover:bg-accent/5 transition-all duration-300">
                      <Github className="h-4 w-4" />Code
                    </a>
                  )}
                  {project.liveDemoUrl && (
                    <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium bg-gradient-to-r from-accent to-primary text-white rounded-xl hover:shadow-glow transition-all duration-300 hover:scale-[1.02]">
                      <ExternalLink className="h-4 w-4" />Demo
                    </a>
                  )}
                </div>
              </SpotlightCard>
            ))}
          </div>

          {/* GitHub CTA Button */}
          <div className={`mt-16 text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <a 
              href="https://github.com/laddasiddharth" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-accent/10 to-primary/10 border border-border/50 rounded-2xl text-foreground font-semibold hover:border-accent/50 hover:bg-accent/5 hover:scale-[1.03] transition-all duration-300 group shadow-lg"
            >
              <Github className="h-5 w-5 text-accent" />
              <span>Explore more on GitHub</span>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
