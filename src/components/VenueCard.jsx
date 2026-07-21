import React from 'react';
import { MapPin, Calendar, Clock, Navigation, ExternalLink, Sparkles } from 'lucide-react';

export default function VenueCard() {
  const mapUrl = "https://maps.app.goo.gl/h6tPCuHNnc7ixmtL8";

  const createGoogleCalendarUrl = () => {
    const title = encodeURIComponent("حفل زفاف أنس & سلمى | Diamond Hall");
    const details = encodeURIComponent("نتشرف بحضوركم حفل زفاف أنس وسلمى في قاعة Diamond Hall بطهطا");
    const location = encodeURIComponent("Diamond Hall - طهطا - عند المدخل القبلي");
    const dates = "20260807T180000Z/20260807T220000Z";
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
  };

  return (
    <section className="w-full mx-auto my-12">
      <div className="glass-card p-10 md:p-14 rounded-[32px] border border-yellow-500/40 relative overflow-hidden shadow-2xl">
        {/* Ornate Corner Accents */}
        <div className="ornate-corner ornate-corner-tl" />
        <div className="ornate-corner ornate-corner-tr" />
        <div className="ornate-corner ornate-corner-bl" />
        <div className="ornate-corner ornate-corner-br" />

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 mb-4">
            <MapPin className="w-8 h-8 animate-bounce" />
          </div>
          <h3 className="text-3xl md:text-4xl font-bold font-title gold-text-gradient mb-3">
            تفاصيل الحفل والقاعة
          </h3>
          <p className="text-gray-300 font-body text-xl mt-3">
            يسعدنا استقبالكم في موعدنا الميمون
          </p>
        </div>

        {/* Venue Information Grid with guaranteed spacing */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 my-10 text-center">
          {/* Hall Name Card */}
          <div className="p-7 md:p-9 rounded-2xl bg-[#0e271e]/85 border border-yellow-500/30 flex flex-col items-center shadow-xl transition-transform hover:scale-105 my-2">
            <Sparkles className="w-7 h-7 text-yellow-400 mb-4" />
            <span className="text-sm text-yellow-300/80 font-kufi">اسم القاعة</span>
            <span className="text-2xl font-bold text-yellow-100 font-title mt-3">
              Diamond Hall
            </span>
          </div>

          {/* Date Card */}
          <div className="p-7 md:p-9 rounded-2xl bg-[#0e271e]/85 border border-yellow-500/30 flex flex-col items-center shadow-xl transition-transform hover:scale-105 my-2">
            <Calendar className="w-7 h-7 text-yellow-400 mb-4" />
            <span className="text-sm text-yellow-300/80 font-kufi">التاريخ</span>
            <span className="text-xl font-bold text-yellow-100 font-sans mt-3">
              7 أغسطس 2026
            </span>
            <span className="text-sm text-gray-300 font-body mt-2">يوم الجمعة</span>
          </div>

          {/* Time & Location Address Card */}
          <div className="p-7 md:p-9 rounded-2xl bg-[#0e271e]/85 border border-yellow-500/30 flex flex-col items-center shadow-xl transition-transform hover:scale-105 my-2">
            <Clock className="w-7 h-7 text-yellow-400 mb-4" />
            <span className="text-sm text-yellow-300/80 font-kufi">الوقت والعنوان</span>
            <span className="text-lg font-bold text-yellow-100 font-sans mt-3">
              الساعة 8:00 مساءً
            </span>
            <span className="text-sm text-yellow-200/90 font-body mt-2">
              طهطا - عند المدخل القبلي
            </span>
          </div>
        </div>

        {/* Action Buttons with clear top margin */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-8 mt-6">
          <a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold text-base md:text-lg py-4 px-8 my-2"
          >
            <Navigation className="w-5 h-5" />
            <span>موقع القاعة على الخريطة (Google Maps)</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          <a
            href={createGoogleCalendarUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold text-base py-4 px-7 my-2"
          >
            <Calendar className="w-5 h-5" />
            <span>إضافة المناسبة إلى التقويم</span>
          </a>
        </div>
      </div>
    </section>
  );
}
