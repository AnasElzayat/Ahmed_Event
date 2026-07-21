import React, { useState } from 'react';
import { MessageCircle, Send, User, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function Guestbook() {
  const [messages, setMessages] = useState([
    { id: 1, name: 'عائلة العريس', text: 'ألف مبروك لأجمل عريسين أنس وسلمى، بارك الله لكما وجمع بينكما في خير ❤️', date: 'منذ قليل' },
    { id: 2, name: 'عائلة العروس', text: 'مبارك الفرحة الكبيرة، دياركم عامرة بالخير والأفراح دائماً ✨', date: 'منذ ساعتين' },
  ]);

  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const [attendance, setAttendance] = useState('حاضر بحب');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    const newMessage = {
      id: Date.now(),
      name: name.trim(),
      text: text.trim(),
      date: 'الآن',
    };

    setMessages([newMessage, ...messages]);
    setName('');
    setText('');
    setSubmitted(true);

    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#f7d070', '#c59b27', '#ffffff', '#e8d5c4']
    });

    setTimeout(() => setSubmitted(false), 4000);
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
          <p className="text-gray-300 font-body text-lg mt-2">
            اترك كلمة طيبة للعروسين وأكد حضورك لمشاركتنا الفرحة
          </p>
        </div>

        {/* Success Alert */}
        {submitted && (
          <div className="mb-6 p-4 rounded-2xl bg-emerald-900/70 border border-emerald-400/50 flex items-center gap-3 text-emerald-200 animate-fade-in shadow-lg">
            <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
            <p className="text-sm font-sans">
              تم إرسال تبريكاتك وتأكيد حضورك بنجاح! شرفتنا وأسعدتنا ❤️
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
                  <option value="حاضر بحب">يشرفني الحضور بحب 💐</option>
                  <option value="اعتذار مع دعواتي">أعتذر لبعد المسافة مع خالص الدعوات ❤️</option>
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
            <button type="submit" className="btn-gold w-full py-3.5 text-base md:text-lg">
              <Send className="w-5 h-5 ml-2" />
              <span>إرسال التهنئة وتأكيد الحضور</span>
            </button>
          </div>
        </form>

        {/* Wishes List Header & Items with tight 12px gap */}
        <div className="messages-section-divider">
          <h4 className="messages-heading text-xl font-bold font-title text-yellow-200 border-b border-yellow-500/25 pb-2">
            رسائل المحبين والتبريكات
          </h4>

          <div className="flex flex-col gap-3 max-h-[500px] overflow-y-auto pr-1 pt-1">
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
                  <span className="text-xs text-gray-400 font-sans">{m.date}</span>
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
