import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface AudioPlayerProps {
  audioFile?: string;
}

export default function AudioPlayer({ audioFile }: AudioPlayerProps) {
  const [isMuted, setIsMuted] = useState(false);
  const [isReady, setIsReady] = useState(false); // 👈 added fallback state
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current && audioFile) {
      audioRef.current.volume = 0.3;
      const playAttempt = audioRef.current.play();

      if (playAttempt !== undefined) {
        playAttempt
          .then(() => {
            console.log('Autoplay success 🎵');
          })
          .catch(err => {
            console.log('Autoplay prevented:', err);
            setIsReady(true); // 👈 show "Tap to Play" if blocked
          });
      }
    }
  }, [audioFile]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleManualPlay = () => {
    // 👇 triggered when user clicks "Tap to Play"
    if (audioRef.current) {
      audioRef.current.play();
      setIsReady(false);
    }
  };

  if (!audioFile) return null;

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={audioFile} type="audio/mp3" />
      </audio>

      {/* 👇 If autoplay is blocked, show Tap to Play button */}
      {isReady && (
        <motion.button
          onClick={handleManualPlay}
          className="fixed bottom-24 right-8 z-50 bg-rose-500 text-white px-4 py-2 rounded-full shadow-lg backdrop-blur-md hover:bg-rose-600 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Tap to Play ❤️
        </motion.button>
      )}

      <motion.button
        onClick={toggleMute}
        className="fixed bottom-8 right-8 z-50 bg-rose-400/80 backdrop-blur-sm p-4 rounded-full shadow-lg hover:bg-rose-500/80 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMuted ? (
          <VolumeX className="w-6 h-6 text-white" />
        ) : (
          <Volume2 className="w-6 h-6 text-white" />
        )}
      </motion.button>
    </>
  );
}
