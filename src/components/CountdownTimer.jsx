import React, { useState, useEffect } from 'react';
import { Timer, Heart } from 'lucide-react';

export default function CountdownTimer() {
  const targetDate = new Date('2026-08-07T20:00:00');

  const calculateTimeLeft = () => {
    const difference = targetDate.getTime() - new Date().getTime();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isCompleted: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
      isCompleted: false,
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: 'أيام', value: timeLeft.days },
    { label: 'ساعات', value: timeLeft.hours },
    { label: 'دقائق', value: timeLeft.minutes },
    { label: 'ثواني', value: timeLeft.seconds },
  ];

  return (
    <section className="w-full mx-auto text-center my-6">
      <div className="glass-card p-10 md:p-14 rounded-[32px] border border-yellow-500/40 relative overflow-hidden shadow-2xl">
        {/* Ornate Corner Accents */}
        <div className="ornate-corner ornate-corner-tl" />
        <div className="ornate-corner ornate-corner-tr" />
        <div className="ornate-corner ornate-corner-bl" />
        <div className="ornate-corner ornate-corner-br" />

        <div className="flex items-center justify-center gap-3 mb-10 text-yellow-400 font-kufi">
          <Timer className="w-7 h-7 text-yellow-400 animate-pulse" />
          <h3 className="text-2xl md:text-3xl font-bold font-title gold-text-gradient">
            العداد التنازلي لليلة العمر
          </h3>
        </div>

        {timeLeft.isCompleted ? (
          <div className="py-8 text-center">
            <Heart className="w-14 h-14 text-yellow-400 fill-yellow-400 mx-auto mb-4 animate-bounce" />
            <h4 className="text-3xl font-bold text-yellow-200 font-title">
              نحتفل الآن بليلة زفاف أنس وسلمى! 🥳🎉
            </h4>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8 max-w-3xl mx-auto py-2">
            {timeBlocks.map((block, idx) => (
              <div
                key={idx}
                className="flex flex-col items-center justify-center p-6 md:p-8 rounded-2xl bg-gradient-to-b from-[#133025]/85 to-[#091b14]/95 border border-yellow-500/35 shadow-xl transform transition-transform hover:scale-105"
              >
                <span className="text-3xl md:text-5xl font-extrabold font-sans gold-text-gradient mb-2">
                  {String(block.value).padStart(2, '0')}
                </span>
                <span className="text-base md:text-lg text-yellow-100/90 font-kufi">
                  {block.label}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
