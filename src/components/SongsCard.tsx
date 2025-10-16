import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Music, X } from 'lucide-react';

export default function SongsCard() {
  const [isOpen, setIsOpen] = useState(false);

  const songs = [
    {
      title: "Your Voice",
      artist: "nandu kutty",
      note: "This reminds me of you",
      link: ""
    },
    {
      title: "Your Voice",
      artist: "nandu kutty",
      note: "This reminds me of you",
      link: ""
    },
    {
      title: "Your Voice",
      artist: "nandu kutty",
      note: "This reminds me of you",
      link: ""
    }
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
          delay: 1
        }}
        onClick={() => setIsOpen(true)}
      >
        <motion.div
          className="absolute inset-0 rounded-2xl p-8 flex flex-col items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #E8C4B8 0%, #D4A5A5 100%)',
            boxShadow: '0 10px 40px rgba(139, 64, 73, 0.15)',
            transformStyle: 'preserve-3d',
          }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <Music className="w-16 h-16 text-rose-600 mb-4" />
          <h2
            className="text-2xl md:text-3xl font-dancing text-rose-900 text-center"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            Songs That Remind Me of You
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
              className="bg-gradient-to-br from-rose-50 to-purple-100 rounded-2xl p-6 md:p-10 max-w-2xl w-full max-h-[80vh] overflow-y-auto relative"
              style={{
                boxShadow: '0 20px 60px rgba(139, 64, 73, 0.3)'
              }}
              initial={{ scale: 0.8, opacity: 0, rotateY: -90 }}
              animate={{ scale: 1, opacity: 1, rotateY: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateY: 90 }}
              transition={{ duration: 0.6 }}
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
                Our Soundtrack
              </motion.h2>

              <motion.div className="space-y-6">
                {songs.map((song, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/50 backdrop-blur-sm rounded-xl p-4 md:p-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.15 }}
                  >
                    <div className="flex items-start gap-4">
                      <Music className="w-6 h-6 text-rose-600 flex-shrink-0 mt-1" />
                      <div className="flex-1">
                        <h3 className="text-xl font-dancing text-rose-900 mb-1" style={{ fontFamily: "'Dancing Script', cursive" }}>
                          {song.title}
                        </h3>
                        <p className="text-rose-700 text-sm mb-2">{song.artist}</p>
                        <p className="text-rose-800 italic text-sm">{song.note}</p>
                        {song.link && (
                          <a
                            href={song.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block mt-2 text-rose-600 hover:text-rose-800 text-sm underline"
                          >
                            Listen here
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                className="text-center text-rose-700 mt-8 italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                Every melody, a memory of us.
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
