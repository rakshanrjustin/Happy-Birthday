import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FileHeart, X } from 'lucide-react';

export default function PoemCard() {
  const [isOpen, setIsOpen] = useState(false);

  const poemLines = [
   "When darkness filled the world,",
  "God decided to plant a light.",
  "A light so bright,",
  "A light that became love itself.",
  "",
  "And so a mother bore a seed —",
  "The seed of light,",
  "The seed of love.",
  "Together, they formed a miracle —",
  "A human so pure, she was heaven’s child.",
  "",
  "When she was born, God sent two angels:",
  "One to spread her light,",
  "One to protect her love.",
  "And both stayed true to their work.",
  "",
  "Years passed, and somewhere else,",
  "God created a boy —",
  "A simple soul meant to find her.",
  "He had no clue that destiny had already written her name on his heart.",
  "",
  "Though their worlds crossed in whispers and moments,",
  "They never met — not until fate decided it was time.",
  "",
  "And then came the 12th grade —",
  "The day the boy finally met the light.",
  "Her smile — brighter than the morning sun,",
  "Her presence — warmer than dawn.",
  "His heart began to absorb it,",
  "Until his soul found peace for the first time.",
  "",
  "The weight of her light,",
  "The shine of her bright,",
  "Melted his metal heart into living flesh —",
  "Something far too precious for a boy like him.",
  "",
  "They met, they laughed, they learned.",
  "She taught, and he observed —",
  "Not the lessons, but the girl herself.",
  "The way her hair fell,",
  "The way her voice softened the air.",
  "",
  "Writing exams was never his thing,",
  "But for the first time, he wanted to write.",
  "Because his teacher was love itself —",
  "The light so bright.",
  "",
  "That was the moment he realized...",
  "",
  "Every corner of his heart,",
  "Every vein that carried his blood,",
  "Now carried her name.",
  "",
  "Her smile awakened his mind,",
  "For his heart had never known such beauty before.",
  "",
  "When he had bad days, he thought of her eyes —",
  "Eyes white like snow,",
  "Melting like fire,",
  "Flowing like a river through his soul.",
  "",
  "Every word from her lips felt like roses,",
  "Even her anger bloomed with love,",
  "Because even in rage, she was gentle —",
  "Like a storm made of petals.",
  "",
  "Her voice was a love song,",
  "Her hair — soft as grass,",
  "Her scent — a quiet perfume of peace,",
  "Her kiss — a soft paradise.",
  "That first kiss was his first rebirth,",
  "That first hug — his heart’s reincarnation.",
  "",
  "Her hands fit his perfectly,",
  "Calming storms no one else could silence.",
  "Every time he saw her smile,",
  "It became his favorite photograph.",
  "Every time he heard her laughter,",
  "It became his life’s sweetest melody.",
  "",
  "The way she walked like a playful duck,",
  "The way she got angry like a little cat,",
  "The way she got excited like a baby,",
  "The way she got sad — heartbreakingly cute.",
  "",
  "The way she threatened him like a teddy,",
  "The way she clung to him like warmth in winter,",
  "Every moment — every bit of her,",
  "He fell for, deeper each day.",
  "",
  "She became his world, his comfort, his calm.",
  "She was the pause between his heartbeats,",
  "The reason behind every smile,",
  "The prayer he never stopped whispering.",
  "",
  "And if love was ever a story —",
  "This one was written in October skies,",
  "Between the silence of hearts,",
  "And the sound of her laugh.",
  "",
  "She was his light.",
  "She was his peace.",
  "",
  "Together — they were love.",
  "",
  "Happy Birthday Ammu, my Everything. ❤️"
    
    
  ];

  return (
    <>
      <motion.div
        className="relative h-96 cursor-pointer"
        style={{ perspective: 1000 }}
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
        onClick={() => setIsOpen(true)}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl p-8 flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #FFF8F0 0%, #F4D7C7 100%)',
            boxShadow: '0 10px 40px rgba(139, 64, 73, 0.15)',
            transformStyle: 'preserve-3d',
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <FileHeart className="w-16 h-16 text-rose-600 mb-4" />
          <h2
            className="text-2xl md:text-3xl font-dancing text-rose-900 text-center"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            My Poem for You
          </h2>
          <p className="text-rose-700 mt-2 text-sm">Tap to open</p>
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 md:p-10 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
              style={{
                boxShadow: '0 20px 60px rgba(139, 64, 73, 0.3)',
                backgroundImage: 'linear-gradient(135deg, #FFF8F0 0%, #F4D7C7 100%)',
                backgroundSize: '100% 2rem'
              }}
              initial={{ scale: 0.5, opacity: 0, rotateZ: -10 }}
              animate={{ scale: 1, opacity: 1, rotateZ: 0 }}
              exit={{ scale: 0.5, opacity: 0, rotateZ: 10 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-rose-600 hover:text-rose-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.h2
                className="text-3xl md:text-4xl font-dancing text-rose-900 mb-8 text-center"
                style={{ fontFamily: "'Dancing Script', cursive" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                For You, My Love
              </motion.h2>

              <motion.div
                className="space-y-4 text-rose-900 text-center"
                style={{ fontFamily: "'Dancing Script', cursive" }}
              >
                {poemLines.map((line, index) => (
                  <motion.p
                    key={index}
                    className="text-xl md:text-2xl"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: 0.4 + index * 0.1,
                      duration: 0.6
                    }}
                  >
                    {line || '\u00A0'}
                  </motion.p>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
