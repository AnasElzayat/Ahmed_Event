import React, { useState } from 'react';
import PetalsCanvas from './components/PetalsCanvas';
import OpeningEnvelope from './components/OpeningEnvelope';
import AudioPlayer from './components/AudioPlayer';
import HeroSection from './components/HeroSection';
import CountdownTimer from './components/CountdownTimer';
import VenueCard from './components/VenueCard';
import Guestbook from './components/Guestbook';
import FooterShare from './components/FooterShare';

export default function App() {
  const [isEnvelopeOpened, setIsEnvelopeOpened] = useState(false);
  const [startAudio, setStartAudio] = useState(false);

  const handleEnvelopeOpen = () => {
    setIsEnvelopeOpened(true);
    setStartAudio(true);
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-[#071510] text-[#fdfbf7] selection:bg-yellow-500 selection:text-emerald-950">
      {/* Animated Petals & Sparkles Background Canvas */}
      <PetalsCanvas />

      {/* Opening Envelope Modal */}
      {!isEnvelopeOpened && (
        <OpeningEnvelope onOpen={handleEnvelopeOpen} />
      )}

      {/* Main Wedding Invitation Content with half gap for perfect compact proportion */}
      <main className={`relative z-10 flex flex-col gap-8 md:gap-12 py-8 px-4 max-w-5xl mx-auto transition-all duration-1000 ${
        isEnvelopeOpened ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <HeroSection />
        <CountdownTimer />
        <VenueCard />
        <Guestbook />
        <FooterShare />
      </main>

      {/* Floating Audio Player Widget */}
      <AudioPlayer autoPlayTrigger={startAudio} />
    </div>
  );
}
