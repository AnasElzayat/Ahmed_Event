import React from 'react';
import { Heart, Calendar, Clock, Sparkles } from 'lucide-react';

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
          <h1 className="text-6xl md:text-8xl font-bold font-title gold-text-gradient tracking-wide">
            أحمد
          </h1>
          <div className="flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center shadow-[0_0_25px_rgba(201,168,76,0.4)]">
              <Heart className="w-7 h-7 text-white fill-white" />
            </div>
            <span className="text-sm text-amber-600/80 font-kufi mt-1.5">&</span>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold font-title gold-text-gradient tracking-wide">
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
