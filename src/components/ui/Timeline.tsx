import React, { useState, useEffect, useRef } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  isActive?: boolean;
  isPassed?: boolean;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState<number>(-1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const containerRect = container.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      
      // Calculate overall progress through the section
      const containerTop = containerRect.top;
      const containerHeight = containerRect.height;
      const scrollStart = window.innerHeight * 0.8; // Start when section is 80% down viewport
      const scrollEnd = -containerHeight + window.innerHeight * 0.2; // End when mostly scrolled past
      
      let progress = 0;
      if (containerTop <= scrollStart && containerTop >= scrollEnd) {
        progress = (scrollStart - containerTop) / (scrollStart - scrollEnd);
        progress = Math.max(0, Math.min(1, progress));
      } else if (containerTop < scrollEnd) {
        progress = 1;
      }
      
      setScrollProgress(progress);

      // Find which item is currently in the center of viewport
      let currentActive = -1;
      itemRefs.current.forEach((item, index) => {
        if (!item) return;
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;
        
        // Item is active if its center is in the upper half of viewport
        if (itemCenter <= viewportCenter && itemCenter >= 0) {
          currentActive = index;
        }
      });
      
      setActiveIndex(currentActive);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full bg-transparent font-sans md:px-10" ref={containerRef}>
      <div className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={index}
            ref={(el) => { itemRefs.current[index] = el; }}
            className="flex justify-start pt-4 md:pt-20 md:gap-10"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-background flex items-center justify-center">
                <div 
                  className={`h-4 w-4 rounded-full border p-2 transition-all duration-500 ${
                    hoveredIndex === index 
                      ? 'bg-accent border-accent scale-[2] shadow-[0_0_30px_10px_rgba(168,85,247,0.6)] ring-4 ring-accent/30' 
                      : (() => {
                          // Check if this item has reached viewport center
                          if (!itemRefs.current[index]) return 'bg-muted border-border';
                          const rect = itemRefs.current[index]!.getBoundingClientRect();
                          const viewportCenter = window.innerHeight / 2;
                          const itemTop = rect.top;
                          const itemBottom = rect.bottom;
                          
                          // Item is active when it's crossing the viewport center
                          const isAtCenter = itemTop <= viewportCenter && itemBottom >= viewportCenter;
                          
                          return isAtCenter
                            ? 'bg-accent border-accent shadow-lg shadow-accent/50 scale-125' 
                            : 'bg-muted border-border';
                        })()
                  }`} 
                />
              </div>
              <h3 
                className={`hidden md:block text-xl md:pl-20 md:text-5xl font-bold drop-shadow-lg transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'text-accent scale-110 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]' 
                    : (() => {
                        // Check if this item has reached viewport center
                        if (!itemRefs.current[index]) return 'text-foreground';
                        const rect = itemRefs.current[index]!.getBoundingClientRect();
                        const viewportCenter = window.innerHeight / 2;
                        const itemTop = rect.top;
                        const itemBottom = rect.bottom;
                        
                        const isAtCenter = itemTop <= viewportCenter && itemBottom >= viewportCenter;
                        
                        return isAtCenter
                          ? 'text-accent scale-105 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]'
                          : 'text-foreground';
                      })()
                }`}
              >
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3 
                className={`md:hidden block text-2xl mb-4 text-left font-bold drop-shadow-lg transition-all duration-500 ${
                  hoveredIndex === index 
                    ? 'text-accent scale-110 drop-shadow-[0_0_20px_rgba(168,85,247,0.8)]' 
                    : (() => {
                        if (!itemRefs.current[index]) return 'text-foreground';
                        const rect = itemRefs.current[index]!.getBoundingClientRect();
                        const viewportCenter = window.innerHeight / 2;
                        const itemTop = rect.top;
                        const itemBottom = rect.bottom;
                        
                        const isAtCenter = itemTop <= viewportCenter && itemBottom >= viewportCenter;
                        
                        return isAtCenter
                          ? 'text-accent scale-105 drop-shadow-[0_0_15px_rgba(168,85,247,0.6)]'
                          : 'text-foreground';
                      })()
                }`}
              >
                {item.title}
              </h3>
              <div className={`transition-all duration-500 ${
                (() => {
                  if (!itemRefs.current[index]) return '';
                  const rect = itemRefs.current[index]!.getBoundingClientRect();
                  const viewportCenter = window.innerHeight / 2;
                  const itemTop = rect.top;
                  const itemBottom = rect.bottom;
                  
                  const isAtCenter = itemTop <= viewportCenter && itemBottom >= viewportCenter;
                  
                  return isAtCenter ? 'highlight-active' : '';
                })()
              }`}>
                {item.content}
              </div>
            </div>
          </div>
        ))}
        
        {/* Static timeline line */}
        <div
          className="absolute md:left-8 left-8 top-0 w-[2px] bg-gradient-to-b from-transparent via-border to-transparent"
          style={{ height: '100%' }}
        >
          {/* Scroll-based progress fill - instant updates for smooth fast scrolling */}
          <div 
            className="absolute inset-x-0 top-0 w-[4px] -left-[1px] bg-gradient-to-b from-accent via-accent/80 to-accent/40 shadow-[0_0_15px_3px_rgba(168,85,247,0.6)]"
            style={{ 
              height: `${scrollProgress * 100}%`,
              willChange: 'height'
            }}
          />
        </div>
      </div>
    </div>
  );
};
