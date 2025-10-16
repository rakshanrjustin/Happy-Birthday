import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import IntroAnimation from './components/IntroAnimation';
import HomePage from './components/HomePage';
import AudioPlayer from './components/AudioPlayer';
import SecretMessage from './components/SecretMessage'; // 👈 Added this import

function App() {
  const [showIntro, setShowIntro] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {showIntro ? (
          <IntroAnimation key="intro" onComplete={() => setShowIntro(false)} />
        ) : (
          <>
            <HomePage key="home" />
            <SecretMessage /> {/* 👈 Added the secret message here */}
          </>
        )}
      </AnimatePresence>

      <AudioPlayer audioFile="/song.mp3" />
    </>
  );
}

export default App;
