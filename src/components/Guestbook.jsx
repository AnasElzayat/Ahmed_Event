import React, { useState } from 'react';
import { MessageCircle, Send, User, CheckCircle2, Lock, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';

// 🔴 تم ضبط توكن البوت والـ Chat ID الخاصين بك بنجاح
const TELEGRAM_BOT_TOKEN = "8947737212:AAH6k-eGckw8keE1SSUAKF3V3B56vWJTknI"; 
const TELEGRAM_CHAT_ID = "1092718521";     

export default function Guestbook() {
  const messages = [
    { id: 1, name: 'عائلة العريس', text: 'ألف مبروك لأجمل عريسين أنس وسلمى، بارك الله لكما وجمع بينكما في خير ❤️', tag: 'تهنئة عائلية' },
    { id: 2, name: 'عائلة العروس', text: 'مبارك الفرحة الكبيرة، دياركم عامرة بالخير والأفراح دائماً ✨', tag: 'تهنئة عائلية' },
  ];

  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [attendance, setAttendance] = useState('حاضر بحب 💐');
  const [submitted, setSubmitted] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    setIsSending(true);

    // 1. Format the Telegram message
    const telegramMessage = `💌 *تهنئة جديدة لحفل زفاف أنس & سلمى* 💐\n\n` +
      `👤 *الاسم:* ${name.trim()}\n` +
      `📌 *موقف الحضور:* ${attendance}\n` +
      `💬 *التهنئة:* ${text.trim()}\n\n` +
      `🕒 *الوقت:* ${new Date().toLocaleTimeString('ar-EG')}`;

    // 2. Silent background fetch to Telegram Bot API (User stays on page!)
    try {
      if (TELEGRAM_BOT_TOKEN !== "YOUR_BOT_TOKEN_HERE" && TELEGRAM_CHAT_ID !== "YOUR_CHAT_ID_HERE") {
        await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: telegramMessage,
            parse_mode: 'Markdown'
          })
        });
      }
    } catch (err) {
      console.log('Telegram notification error:', err);
    }

    // 3. UI Celebration & Reset
    setIsSending(false);
    setName('');
    setText('');
    setSubmitted(true);

    confetti({
      particleCount: 75,
      spread: 65,
      origin: { y: 0.7 },
      colors: ['#f7d070', '#c59b27', '#ffffff', '#e8d5c4']
    });

    setTimeout(() => setSubmitted(false), 6000);
  };

  return (
    <section className="w-full mx-auto my-6">
      <div className="glass-card p-6 md:p-10 rounded-[28px] border border-yellow-500/40 relative shadow-2xl">
        {/* Ornate Corner Accents */}
        <div className="ornate-corner ornate-corner-tl" />
        <div className="ornate-corner ornate-corner-tr" />
        <div className="ornate-corner ornate-corner-bl" />
        <div className="ornate-corner ornate-corner-br" />

        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center p-3 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 mb-3">
            <MessageCircle className="w-7 h-7" />
          </div>
          <h3 className="text-2xl md:text-3xl font-bold font-title gold-text-gradient mb-2">
            دفتر التهاني وتأكيد الحضور
          </h3>

          {/* Privacy Note */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/25 text-yellow-300 text-xs font-kufi mt-2">
            <Lock className="w-3.5 h-3.5 text-yellow-400" />
            <span>رسالتك سرية وخاصة تصل للعروسين مباشرة 💌</span>
          </div>
        </div>

        {/* Success Alert */}
        {submitted && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-900/80 border border-emerald-400/50 flex items-center gap-3 text-emerald-200 animate-fade-in shadow-lg">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <p className="text-sm font-sans">
              تم إرسال تبريكاتك وتأكيد حضورك للعروسين بنجاح! شرفتنا وأسعدتنا ❤️
            </p>
          </div>
        )}

        {/* Submission Form */}
        <form onSubmit={handleSubmit} className="block mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="form-field-group">
              <label className="field-label text-sm font-kufi text-yellow-300/90">
                اسمك الكريـم
              </label>
              <div className="relative guestbook-input-box">
                <User className="absolute right-4 top-3.5 w-5 h-5 text-yellow-500/70" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="أدخل اسمك..."
                  className="w-full pl-4 pr-12 py-3.5 rounded-xl bg-[#091a13]/90 border border-yellow-500/35 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 font-sans text-base shadow-inner"
                />
              </div>
            </div>

            <div className="form-field-group">
              <label className="field-label text-sm font-kufi text-yellow-300/90">
                موقفك من الحضور
              </label>
              <div className="guestbook-input-box">
                <select
                  value={attendance}
                  onChange={(e) => setAttendance(e.target.value)}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#091a13]/90 border border-yellow-500/35 text-yellow-200 focus:outline-none focus:border-yellow-400 font-sans text-base shadow-inner cursor-pointer"
                >
                  <option value="حاضر بحب 💐">يشرفني الحضور بحب 💐</option>
                  <option value="اعتذار مع دعواتي ❤️">أعتذر لبعد المسافة مع خالص الدعوات ❤️</option>
                </select>
              </div>
            </div>
          </div>

          <div className="form-field-group mb-6">
            <label className="field-label text-sm font-kufi text-yellow-300/90">
              رسالة التهنئة والتبريكات
            </label>
            <div className="guestbook-input-box">
              <textarea
                required
                rows={3}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="اكتب كلمة طيبة لأنس وسلمى في يومهما الميمون..."
                className="w-full p-4 rounded-xl bg-[#091a13]/90 border border-yellow-500/35 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 font-sans text-base resize-none shadow-inner"
              />
            </div>
          </div>

          <div className="submit-btn-wrapper">
            <button
              type="submit"
              disabled={isSending}
              className="btn-gold w-full py-3.5 text-base md:text-lg cursor-pointer disabled:opacity-50"
            >
              <Send className="w-5 h-5 ml-2" />
              <span>{isSending ? 'جاري الإرسال...' : 'إرسال التهنئة وتأكيد الحضور'}</span>
            </button>
          </div>
        </form>

        {/* Family Sample Wishes Header & Items */}
        <div className="messages-section-divider">
          <div className="flex items-center justify-between border-b border-yellow-500/25 pb-2 mb-4">
            <h4 className="messages-heading text-lg font-bold font-title text-yellow-200">
              نماذج من تبريكات العائلة 💐
            </h4>
            <span className="text-xs text-yellow-300/60 font-kufi flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-yellow-400" />
              <span>تهاني خاصة</span>
            </span>
          </div>

          <div className="flex flex-col gap-3">
            {messages.map((m) => (
              <div
                key={m.id}
                className="message-card-item rounded-2xl bg-[#0b2118]/80 border border-yellow-500/30 backdrop-blur-sm shadow-md"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-amber-500 to-yellow-300 flex items-center justify-center text-emerald-950 font-bold text-sm shadow">
                      {m.name.charAt(0)}
                    </div>
                    <span className="font-bold text-yellow-200 text-base font-sans">{m.name}</span>
                  </div>
                  <span className="text-[10px] text-yellow-400/80 bg-yellow-500/10 px-2 py-0.5 rounded-full border border-yellow-500/20 font-kufi">
                    {m.tag}
                  </span>
                </div>
                <p className="text-gray-200 font-body text-lg leading-relaxed pr-2 md:pr-3">
                  {m.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
