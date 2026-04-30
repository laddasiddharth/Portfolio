export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-4 border-t border-border/40 bg-background/50 backdrop-blur-md">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm text-muted-foreground tracking-wide">
          © {currentYear} Siddharth Ladda
        </p>
      </div>
    </footer>
  );
}

