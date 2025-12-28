import { useState } from 'react';
import { Mail, User, MessageSquare, Send, Github, Linkedin, Instagram } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactLinks = [
    { icon: 'Mail', text: 'Email', url: 'mailto:siddharthladda@gmail.com', label: 'Email' },
    { icon: 'Github', text: 'GitHub', url: 'https://github.com/laddasiddharth', label: 'GitHub' },
    { icon: 'Linkedin', text: 'LinkedIn', url: 'https://linkedin.com/in/siddharth-ladda', label: 'LinkedIn' },
    { icon: 'Instagram', text: 'Instagram', url: 'https://instagram.com/siddharthladda', label: 'Instagram' },
  ];

  const getIcon = (iconName: string) => {
    if (iconName === 'Mail') return <Mail className="h-6 w-6 text-accent" />;
    if (iconName === 'Github') return <Github className="h-6 w-6 text-accent" />;
    if (iconName === 'Linkedin') return <Linkedin className="h-6 w-6 text-accent" />;
    if (iconName === 'Instagram') return <Instagram className="h-6 w-6 text-accent" />;
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    setIsSubmitting(true);
    try {
      // TODO: Handle form submission - integrate with your backend
      console.log('Form submitted:', formData);
      alert('Message submitted!');
      setFormData({ name: '', email: '', message: '' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Get In <span className="text-accent">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-accent to-accent mx-auto rounded-full mb-4" />
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Have a project in mind? Let's build something amazing together.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Form Section */}
            <div className="space-y-6 border border-border/50 rounded-xl p-8 bg-card/50 backdrop-blur">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    className="w-full px-4 py-2 border border-border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info Section */}
            <div className="space-y-8 border border-border/50 rounded-xl p-8 bg-card/50 backdrop-blur">
              <div>
                <h3 className="text-2xl font-bold mb-4">Connect With Me</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                {contactLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border/50 hover:border-accent/50 hover:bg-accent/5 transition-all group"
                  >
                    <div className="flex-shrink-0">
                      {getIcon(link.icon)}
                    </div>
                    <span className="text-muted-foreground group-hover:text-foreground transition-colors">
                      {link.text}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
