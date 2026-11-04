import React, { useState, useEffect, useRef } from 'react';
import { Music, Volume2, VolumeX, Disc } from 'lucide-react';

export default function AudioPlayer({ autoPlayTrigger }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  // New song track for أحمد & مهاد
  const songTrack = "/WhatsApp Video 2026-11-04 at 1.09.42 AM.mp4";

  useEffect(() => {
    if (autoPlayTrigger && audioRef.current) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => setIsPlaying(true))
          .catch((err) => {
            console.log('Autoplay waiting user gesture:', err);
          });
      }
    }
  }, [autoPlayTrigger]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log('Playback error:', err));
    }
  };

  const toggleMute = () => {
    if (!audioRef.current) return;
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2">
      <audio
        ref={audioRef}
        src={songTrack}
        loop
        preload="auto"
      />

      {/* Floating Audio Control Badge */}
      <div className="glass-card px-4 py-2.5 rounded-full flex items-center gap-3 border border-amber-400/40 shadow-xl backdrop-blur-md">
        <button
          onClick={togglePlay}
          className="relative flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-amber-500 to-yellow-600 text-white hover:scale-105 active:scale-95 transition-transform shadow-lg cursor-pointer"
          title={isPlaying ? "إيقاف الموسيقى" : "تشغيل الموسيقى"}
        >
          <Disc className={`w-5 h-5 ${isPlaying ? 'animate-spin-slow' : ''}`} />
        </button>

        <div className="flex flex-col">
          <span className="text-xs font-bold text-amber-700 font-kufi flex items-center gap-1">
            <Music className="w-3 h-3 text-amber-500" />
            <span>أغنية الحفل 🎵</span>
          </span>
          <span className="text-[10px] text-amber-600/70">
            {isPlaying ? 'قيد التشغيل 🎶' : 'متوقفة ⏸️'}
          </span>
        </div>

        {/* Mute Toggle */}
        <button
          onClick={toggleMute}
          className="p-1.5 text-amber-500/80 hover:text-amber-600 transition-colors cursor-pointer"
          title={isMuted ? "إلغاء كتم الصوت" : "كتم الصوت"}
        >
          {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
        </button>
      </div>
    </div>
  );
}
