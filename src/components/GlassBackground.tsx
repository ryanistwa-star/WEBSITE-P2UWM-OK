import React from 'react';
import { motion } from 'motion/react';

export const GlassBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Deep Sea Blue Oceanic Abyssal Gradient Base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020b17] via-[#041935] to-[#020d1c]" />

      {/* Floating Bioluminescent Ocean Blue & Azure Glass Orbs */}
      <motion.div
        animate={{
          x: [0, 80, -40, 0],
          y: [0, -60, 50, 0],
          scale: [1, 1.25, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -top-32 -left-32 w-96 sm:w-[540px] h-96 sm:h-[540px] rounded-full bg-sky-500/18 blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -90, 60, 0],
          y: [0, 80, -50, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute top-1/4 -right-40 w-96 sm:w-[600px] h-96 sm:h-[600px] rounded-full bg-blue-600/22 blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 60, -70, 0],
          y: [0, -50, 60, 0],
          scale: [0.9, 1.2, 1, 0.9],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute bottom-1/3 left-1/4 w-80 sm:w-[500px] h-80 sm:h-[500px] rounded-full bg-cyan-500/15 blur-[120px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 60, -40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        className="absolute -bottom-32 right-1/4 w-96 sm:w-[520px] h-96 sm:h-[520px] rounded-full bg-indigo-600/18 blur-[150px]"
      />

      {/* Gentle Wave Caustics Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(56,189,248,0.8) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />
    </div>
  );
};
