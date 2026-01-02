import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Detect theme immediately, before component renders
const getInitialTheme = () => {
  if (typeof window !== 'undefined') {
    return document.documentElement.classList.contains('dark');
  }
  return true; // Default to dark if window is not available
};

export default function LoadingScreen({ onLoadingComplete }: { onLoadingComplete: () => void }) {
  const [progress, setProgress] = useState(0);
  const [isDark] = useState(getInitialTheme()); // Initialize with actual theme

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 150);
          return 100;
        }
        return prev + 5;
      });
    }, 30);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed inset-0 z-50 flex flex-col items-center justify-center ${
          isDark ? 'bg-background' : 'bg-white'
        }`}
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Logo or Name */}


        {/* Progress Bar */}
        <div className={`w-64 md:w-96 h-2 rounded-full overflow-hidden shadow-inner ${
          isDark ? 'bg-border' : 'bg-gray-200'
        }`}>
          <motion.div
            className={`h-full shadow-lg ${
              isDark 
                ? 'bg-gradient-to-r from-primary via-accent to-primary' 
                : 'bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600'
            }`}
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Loading Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className={`mt-4 font-medium ${
            isDark ? 'text-muted-foreground' : 'text-gray-600'
          }`}
        >
          Loading... {progress}%
        </motion.p>

        {/* Animated Dots */}
        <div className="flex gap-2 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className={`w-3 h-3 rounded-full shadow-md ${
                isDark ? 'bg-accent' : 'bg-purple-600'
              }`}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
