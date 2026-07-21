import React, { useState } from 'react';
import { Heart, Sparkles, Mail, Volume2 } from 'lucide-react';

export default function OpeningEnvelope({ onOpen }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1200);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#040c08] transition-opacity duration-1000 ${
        isOpening ? 'opacity-0 pointer-events-none scale-105' : 'opacity-100'
      }`}
      style={{
        backgroundImage: 'radial-gradient(circle at center, rgba(15, 38, 30, 0.95) 0%, rgba(4, 12, 8, 0.98) 100%)',
      }}
    >
      <div className="relative w-full max-w-md p-6 text-center">
        {/* Decorative Golden Outer Ring */}
        <div className="absolute inset-0 m-auto w-[340px] h-[340px] rounded-full border border-yellow-500/20 animate-spin-slow pointer-events-none" />

        {/* Envelope Container */}
        <div className="relative glass-card p-8 rounded-3xl border border-yellow-500/40 shadow-2xl overflow-hidden backdrop-blur-xl">
          {/* Ornate Corner Highlights */}
          <div className="ornate-corner ornate-corner-tl" />
          <div className="ornate-corner ornate-corner-tr" />
          <div className="ornate-corner ornate-corner-bl" />
          <div className="ornate-corner ornate-corner-br" />

          {/* Subtitle / Header */}
          <div className="flex items-center justify-center gap-2 mb-3 text-yellow-400/90 text-sm tracking-wide font-kufi">
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
            <span>دعوة زفاف خاصة</span>
            <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
          </div>

          <h2 className="text-3xl font-bold font-title gold-text-gradient mb-2">
            أنس & سلمى
          </h2>

          <p className="text-gray-300 font-body text-lg mb-6">
            يسعدنا ويشرفنا حضوركم لليلة العمر
          </p>

          {/* Wax Seal Badge */}
          <div className="relative my-8 flex justify-center">
            <button
              onClick={handleOpen}
              className="group relative flex flex-col items-center justify-center w-28 h-28 rounded-full bg-gradient-to-br from-amber-600 via-amber-700 to-yellow-800 border-2 border-yellow-300 shadow-[0_0_25px_rgba(212,175,55,0.6)] cursor-pointer transform transition-all duration-500 hover:scale-110 active:scale-95"
              aria-label="افتح الدعوة"
            >
              <div className="absolute inset-0 rounded-full border border-yellow-200/40 animate-ping opacity-30" />
              <Heart className="w-8 h-8 text-yellow-100 fill-yellow-200 mb-1 group-hover:scale-125 transition-transform" />
              <span className="text-xs font-bold text-yellow-100 font-kufi">افتح الدعوة</span>
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-yellow-200/70 font-sans mt-4">
            <Volume2 className="w-4 h-4 text-yellow-400 animate-bounce" />
            <span>اضغط لفتح الدعوة وتشغيل الموسيقى</span>
          </div>
        </div>
      </div>
    </div>
  );
}
