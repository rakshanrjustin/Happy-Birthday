import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Mail, X } from 'lucide-react';

export default function BirthdayCard() {
  const [isOpen, setIsOpen] = useState(false);

  const cardVariants = {
    closed: {
      rotateY: 0,
      transition: { duration: 0.6 }
    },
    open: {
      rotateY: 180,
      transition: { duration: 0.6 }
    }
  };

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
          ease: "easeInOut"
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
          <Mail className="w-16 h-16 text-rose-600 mb-4" />
          <h2
            className="text-2xl md:text-3xl font-dancing text-rose-900 text-center"
            style={{ fontFamily: "'Dancing Script', cursive" }}
          >
            My Birthday Note
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
                boxShadow: '0 20px 60px rgba(139, 64, 73, 0.3)'
              }}
              initial={{ scale: 0.8, opacity: 0, rotateX: -90 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotateX: 90 }}
              transition={{ duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 text-rose-600 hover:text-rose-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <motion.h2
                className="text-3xl md:text-4xl font-dancing text-rose-900 mb-6 text-center"
                style={{ fontFamily: "'Dancing Script', cursive" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                To My Nandu
              </motion.h2>

              <motion.div
                className="prose prose-rose max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                <div className="text-rose-900 leading-relaxed space-y-4 text-base md:text-lg">
                  <p className="italic text-rose-700">
                    HAPPY BIRTHDAY AMMUVEYYY......
                  </p>
                  <p>
                    On this special day, I want you to know how deeply you are loved and cherished. Every moment with you is a treasure, every smile you share brightens my world in ways words cannot fully capture.
                  </p>
                  <p>
                    You have brought so much joy, warmth, and meaning into my life. Your kindness, your laughter, the way you see the world - everything about you makes me fall in love with you more each day.
                  </p>
                  <p>
                    As you celebrate another beautiful year, I hope you feel all the love that surrounds you. May this year bring you endless happiness, dreams fulfilled, and moments that take your breath away.
                  </p>
                   
                  <p>
                    Happy 21 years of your precious exsistance babyyyy, there is no words to describe how much you mean to me, i can go beyond my strength to bring happinesss for you.
                  </p>
                  <p>
                    i'm sorry for all my arrogance i showed towards you for the past 2 months it's the reflection of how much i missed you and how much empty i felt without you pampering me babyy, i'm really sorry i did not mean to do that.
                  </p>
                  <p>
                    en thanga mayuleyy en nandu kuttiye un porantha naala namma rendu perru senthu kondadanunu aasa padren onna iruka appo nee yosika mudiyatha alavuku unna kushi aaki unna apdiye happiness oda ocean laye forever methaka vekren laddu kutty,
                  </p>
                  <p>
                    Enaku nejama kadavuluku epdi thanks solrathunu therla for presenting you to me on your birthday..... enakunu paathu enakaga anupi en kittaye kuduthurukaru oru angel ehhh i'm really greatfull for having you as my partner i feel it everytime
                  </p>
                  <p>
                    na unnakaga poem eluthi iruken atha padichi paaru marakama appdiye song um potruken atha kettu paaru
                  </p>
                  <p>
                    <b>
                      ONCE AGAIN HAPPY BIRTHDAY BABY, I REALLY LOVE YOU SO MUCH THAT THE UNIVERSE ITSELF CAN'T FIT YOU MEAN SO MUCH THAT YOU ARE THE ONLY EXISTING CREATURING THAT MY EYES SEES.
                    </b>
                  </p>
                  <p>
                    <b>HAPPY BIRTHDAY AMMU, EN NANDU KUTTY</b>
                  </p>
                  <p className="font-dancing text-2xl text-center mt-6">
                    <b>WITH SOULFULL LOVE, YOUR KANNU....</b>.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
