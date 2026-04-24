export default function Background() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
      {/* Base gradient layer to give a smooth transition between colors */}
      <div 
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.25] mix-blend-normal"
        style={{
          background: 'radial-gradient(circle at 50% 50%, oklch(var(--background)), transparent 100%)',
        }}
      />
      
      {/* Animated blobs using CSS animations */}
      {/* Primary Color Blob */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-primary/30 dark:bg-primary/20 blur-[120px] animate-blob" />
      
      {/* Accent Color Blob */}
      <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/30 dark:bg-accent/20 blur-[120px] animate-blob animation-delay-2000" />
      
      {/* Secondary Color Blob */}
      <div className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] rounded-full bg-secondary/30 dark:bg-secondary/20 blur-[120px] animate-blob animation-delay-4000" />
      
      {/* Overlay noise to make it premium and remove color banding */}
      <div 
        className="absolute inset-0 opacity-[0.4] dark:opacity-[0.3] mix-blend-overlay"
        style={{ 
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
          backgroundRepeat: 'repeat',
          backgroundSize: '128px 128px'
        }}
      />
    </div>
  );
}
