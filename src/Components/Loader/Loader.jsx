import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onLoadingComplete }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + 1;
      });
    }, 35); // 3.5 seconds = 3500ms / 100 = 35ms per percent

    const timer = setTimeout(() => {
      setIsLoading(false);
      setTimeout(() => {
        if (onLoadingComplete && typeof onLoadingComplete === 'function') {
          onLoadingComplete();
        }
      }, 500);
    }, 4000);

    return () => {
      clearTimeout(timer);
      clearInterval(progressInterval);
    };
  }, [onLoadingComplete]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br  from-[#030A19] to-[#0a1a35] overflow-hidden"
        >
          {/* Main Loader Container */}
          <div className="text-center w-full max-w-md px-6">
            {/* Animated Logo/Name */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ 
                type: "spring", 
                stiffness: 200, 
                damping: 15,
                delay: 0.2
              }}
              className="mb-6 md:mb-8"
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-3 md:mb-4 break-words">
                Shah<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Fahad</span>
              </h1>
            </motion.div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-300 text-base md:text-lg mb-6 md:mb-8"
            >
              MERN Stack Developer
            </motion.p>

            {/* Animated Progress Bar */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 3.5, ease: "easeInOut" }}
              className="w-full max-w-xs md:w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden"
            >
              <div className="h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
            </motion.div>

            {/* Loading Dots Animation */}
            <motion.div
              className="flex justify-center space-x-2 mt-4 md:mt-6"
            >
              {[0, 1, 2].map((index) => (
                <motion.div
                  key={index}
                  className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                />
              ))}
            </motion.div>

            {/* Percentage Counter - Fixed */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-3 md:mt-4"
            >
              <span className="text-blue-400 font-semibold text-xs md:text-sm">
                {progress}%
              </span>
            </motion.div>
          </div>

          {/* Background Animation */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 md:w-2 md:h-2 bg-blue-400/30 rounded-full"
                initial={{
                  x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                  y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0, 1, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;