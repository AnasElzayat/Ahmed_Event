import React from 'react';
import { Calendar, Clock, Sparkles } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-8 pb-4 text-center w-full mx-auto flex flex-col items-center gap-8">
      {/* Quranic Verse Banner */}
      <div className="inline-block glass-card px-8 py-5 rounded-full border-amber-400/35 shadow-xl">
        <p className="font-body text-lg md:text-2xl text-amber-800/90 leading-relaxed">
          ﴿ وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً ﴾
        </p>
      </div>

      {/* Main Couple Names */}
      <div className="relative my-4 flex flex-col items-center gap-4">
        <div className="flex items-center justify-center gap-6 md:gap-12 flex-wrap">
          <h1 className="couple-name gold-text-gradient">
            أحمد
          </h1>
          <div className="flex flex-col items-center justify-center">
            <div className="heart-icon-wrapper">
              <svg viewBox="0 0 24 24" className="w-8 h-8 heart-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="white" />
              </svg>
            </div>
          </div>
          <h1 className="couple-name gold-text-gradient">
            مهاد
          </h1>
        </div>

        <p className="text-amber-700/90 font-kufi text-xl mt-3 flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-500" />
          <span>دعوة زفاف خاصة لحضور فرحتنا</span>
          <Sparkles className="w-5 h-5 text-amber-500" />
        </p>
      </div>

      {/* Main Couple Framed Video Animation (Continuous Muted Loop) */}
      <div className="relative my-4 inline-block animate-float">
        <div className="photo-frame-wrapper border-2 border-amber-400/50 p-5 rounded-3xl shadow-2xl">
          <div className="photo-frame-inner rounded-2xl overflow-hidden">
            <video
              src="/WhatsApp Video 2026-11-04 at 1.09.50 AM.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full max-w-[360px] md:max-w-[440px] h-auto rounded-xl shadow-2xl object-cover"
            />
          </div>
        </div>
      </div>

      {/* Date & Time Badges */}
      <div className="flex items-center justify-center gap-6 flex-wrap mt-4">
        <div className="glass-card px-7 py-4 rounded-full flex items-center gap-3 text-amber-700 font-sans text-base border-amber-400/40 shadow-lg">
          <Calendar className="w-5 h-5 text-amber-500" />
          <span>الخميس، 26 نوفمبر 2026</span>
        </div>
        <div className="glass-card px-7 py-4 rounded-full flex items-center gap-3 text-amber-700 font-sans text-base border-amber-400/40 shadow-lg">
          <Clock className="w-5 h-5 text-amber-500" />
          <span>الساعة 7:30 مساءً</span>
        </div>
      </div>
    </section>
  );
}
