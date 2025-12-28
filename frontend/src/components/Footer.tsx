import { Heart, Github, Linkedin, Mail, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  // TODO: Add your social links here manually
  const socialLinks: Array<{ platform: string; url: string }> = [];

  const getSocialIcon = (platform: string) => {
    const platformLower = platform.toLowerCase();
    if (platformLower.includes('github')) return <Github className="h-5 w-5" />;
    if (platformLower.includes('linkedin')) return <Linkedin className="h-5 w-5" />;
    if (platformLower.includes('email') || platformLower.includes('mail')) return <Mail className="h-5 w-5" />;
    if (platformLower.includes('facebook')) return <Facebook className="h-5 w-5" />;
    if (platformLower.includes('instagram')) return <Instagram className="h-5 w-5" />;
    return null;
  };

  return (
    <footer className="bg-gradient-to-t from-background to-card border-t border-border py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center space-y-8">
            {/* Social Links */}
            {socialLinks && socialLinks.length > 0 && (
              <div className="flex items-center gap-6">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent hover:bg-accent/10 p-3 rounded-full transition-all"
                    aria-label={link.platform}
                  >
                    {getSocialIcon(link.platform)}
                  </a>
                ))}
              </div>
            )}

            {/* Copyright */}
            <div className="text-center text-sm text-muted-foreground">
              <p className="flex items-center justify-center gap-1 flex-wrap">
                © 2025 Siddharth Ladda. Built with React & Tailwind CSS.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
