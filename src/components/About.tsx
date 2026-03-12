export default function About() {
  const aboutContent = `I'm a Computer Science undergraduate with a strong passion for building web applications and exploring artificial intelligence. I enjoy creating software that is practical, efficient, and user-focused. Throughout my journey, I have worked on developing full-featured web platforms, designing smooth and responsive user experiences, connecting frontend interfaces with backend systems, and organizing data efficiently for various real-world applications.

Alongside web development, I actively explore how intelligent systems can solve everyday problems. I have hands-on experience creating smart desktop tools, building systems that understand and process text, developing programs that can learn from data and make predictions, and designing automated solutions that help users save time and work more effectively with high accuracy and dependability.

I'm currently seeking opportunities to continue learning, collaborate with motivated teams, and contribute to innovative projects that create meaningful real-world impact through technology.`;

  return (
    <section id="about" className="relative py-20">
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-background/15 backdrop-blur-[0.5px]" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Glassmorphism Card Container */}
        <div className="max-w-4xl mx-auto bg-background border border-gray-200 dark:border-transparent shadow-lg dark:shadow-none backdrop-blur-ultra rounded-3xl p-8 md:p-12">

          {/* About Me Section */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl sm:text-5xl font-bold mb-4">About <span className="text-accent">Me</span></h2>
            </div>

            <div className="max-w-3xl mx-auto">
              <div className="text-muted-foreground leading-relaxed space-y-6 text-base md:text-lg text-center">
                {aboutContent.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
