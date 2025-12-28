import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  liveDemoUrl?: string;
  repositoryUrl?: string;
  category?: string;
  year?: number;
}

export default function Projects() {
  const projects: Project[] = [
  {
    id: "notivos-ai",
    title: "Notivos-AI",
    description:
      "Desktop note-taking application built using Electron.js with core CRUD, sorting, and search functionality. Integrated Google Gemini for AI-powered answering, summarization, and text-to-speech accessibility.",
    technologies: [
      "Electron.js",
      "JavaScript",
      "Google Gemini API",
      "AI Integration",
      "Desktop App"
    ],
    repositoryUrl: "https://github.com/laddasiddharth/Notivos-AI"
  },
  {
    id: "adaptive-fl-compression",
    title: "Adaptive Federated Learning with Compression",
    description:
      "Edge-computing system designed for low-latency local processing using CI-based decision logic. Implemented lightweight modules enabling efficient distributed computation with minimal cloud dependency.",
    technologies: [
      "Federated Learning",
      "Edge Computing",
      "Distributed Systems",
      "Machine Learning",
      "Compression Techniques"
    ],
    repositoryUrl: "https://github.com/laddasiddharth/Edge_Computing-Project"
  }
];


  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent mx-auto rounded-full mb-4" />
          </div>

          {projects && projects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <div key={project.id} className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:border-accent/50 transition-all duration-300 flex flex-col">
                  <div className="p-6 flex-1">
                    <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span key={idx} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="px-6 py-4 flex gap-4 justify-center border-t border-border bg-muted/30">
                    {project.liveDemoUrl && (
                      <a href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                    )}
                    {project.repositoryUrl && (
                      <a href={project.repositoryUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-sm font-medium hover:text-accent transition-colors">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 border-2 border-dashed border-border/50 rounded-xl">
              <p className="text-muted-foreground text-lg">Add your projects manually in the Projects component.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
