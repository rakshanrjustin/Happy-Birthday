import { motion } from 'framer-motion';
import { useState } from 'react';
import BirthdayCard from './BirthdayCard';
import PoemCard from './PoemCard';
import SongsCard from './SongsCard';
import { Heart } from 'lucide-react';

export default function HomePage() {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 3,
    duration: 4 + Math.random() * 3
  }));

  return (
    <motion.div
      className="min-h-screen relative overflow-hidden py-8 md:py-16 px-4"
      style={{
        background: 'linear-gradient(135deg, #FFF8F0 0%, #F4E4D7 25%, #E8C4B8 50%, #D4A5A5 75%, #C9B8D4 100%)'
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 rounded-full bg-rose-200/40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -40, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut"
          }}
        />
      ))}

      <motion.div
        className="fixed top-8 right-8 z-50"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Heart
          className="w-8 h-8 text-rose-400 fill-rose-400"
          style={{
            filter: 'drop-shadow(0 0 10px rgba(244, 114, 182, 0.6))'
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.h1
          className="text-4xl md:text-6xl font-dancing text-center mb-12 md:mb-20 text-rose-900"
          style={{
            fontFamily: "'Dancing Script', cursive",
            textShadow: '0 2px 10px rgba(139, 64, 73, 0.2)'
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          A Gift From My Heart
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <BirthdayCard />
          <PoemCard />
          <SongsCard />
        </div>
      </div>
    </motion.div>
  );
}
