import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SecretMessage() {
  const [showMessage, setShowMessage] = useState(false);
  const holdTimer = useRef<NodeJS.Timeout | null>(null);

  const handlePressStart = () => {
    // start timer for long press (2 seconds)
    holdTimer.current = setTimeout(() => {
      setShowMessage(true);
    }, 2000);
  };

  const handlePressEnd = () => {
    // if released early, cancel
    if (holdTimer.current) clearTimeout(holdTimer.current);
  };

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center text-center">
      {/* Hand emoji + instruction text */}
      <motion.div
        className="flex flex-col items-center cursor-pointer select-none mt-12"
        onMouseDown={handlePressStart}
        onMouseUp={handlePressEnd}
        onTouchStart={handlePressStart}
        onTouchEnd={handlePressEnd}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="text-6xl md:text-7xl"
          animate={{ y: [0, -5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          🖐️
        </motion.div>
        <p className="mt-3 text-base md:text-lg text-rose-600 font-medium">
          Hold my hand for 2 seconds 💫
        </p>
      </motion.div>

      {/* Secret message overlay */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2 }}
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center text-rose-900 px-6"
            style={{
              background:
                "linear-gradient(135deg, #FFF8F0 0%, #F4E4D7 25%, #E8C4B8 50%, #D4A5A5 75%, #C9B8D4 100%)",
            }}
          >
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1.2 }}
              className="text-2xl md:text-3xl leading-relaxed font-light max-w-2xl text-center"
            >
              <p>“En thangamayulu.... 🌙”</p>
              <p className="mt-4">
                “This website may fade but not my love, The place where my heart
                lives is in you..”
              </p>
              <p className="mt-4">“Happy Birthday ammu, my forever love ❤️”</p>
            </motion.div>

            <motion.button
              onClick={() => setShowMessage(false)}
              className="mt-8 px-6 py-2 bg-rose-500 text-white rounded-full shadow-lg hover:bg-rose-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              I LOVE YOU 💖
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
