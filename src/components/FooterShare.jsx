import React, { useState } from 'react';
import { Share2, Copy, Check, Heart, Sparkles } from 'lucide-react';

export default function FooterShare() {
  const [copied, setCopied] = useState(false);

  const shareText = "تتشرف عائلتا العريس أنس والعروس سلمى بدعوتكم لحضور حفل الزفاف الميمون يوم الجمعة 7 أغسطس 2026 الساعة 8 مساءً بقاعة Diamond Hall بطهطا ✨💐";
  
  const handleWhatsAppShare = () => {
    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + "\n\nرابط الدعوة: " + window.location.href)}`;
    window.open(url, '_blank');
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <footer className="mt-24 pb-28 pt-12 px-4 text-center border-t border-yellow-500/25 max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify-center space-y-8">
        <div className="flex items-center justify-center gap-3 text-yellow-300 font-title text-2xl md:text-3xl">
          <Sparkles className="w-6 h-6 text-yellow-400" />
          <span>دامـت ديـاركـم عـامـرة بـالأفـراح والـمـسـرّات</span>
          <Sparkles className="w-6 h-6 text-yellow-400" />
        </div>

        {/* Share Buttons */}
        <div className="flex items-center justify-center gap-5 flex-wrap pt-2">
          <button
            onClick={handleWhatsAppShare}
            className="btn-gold bg-gradient-to-r from-emerald-600 to-emerald-500 text-white hover:from-emerald-500 hover:to-emerald-400 shadow-emerald-900/40 py-4 px-8 text-base md:text-lg"
          >
            <Share2 className="w-5 h-5" />
            <span>مشاركة الدعوة عبر واتساب</span>
          </button>

          <button
            onClick={handleCopyLink}
            className="btn-outline-gold py-3.5 px-6 text-base"
          >
            {copied ? <Check className="w-5 h-5 text-emerald-400" /> : <Copy className="w-5 h-5" />}
            <span>{copied ? 'تم نسخ الرابط!' : 'نسخ رابط الدعوة'}</span>
          </button>
        </div>

        {/* Footer Credit & Copyright */}
        <div className="text-sm text-gray-400 font-sans pt-6 flex flex-col items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span>تم تصميم هذه الدعوة بكل حب لـ</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500 inline" />
            <strong className="text-yellow-300 font-title text-lg">أنس & سلمى</strong>
          </div>
          <span className="text-xs text-gray-400/80">© 2026 - جميع الحقوق محفوظة</span>
        </div>
      </div>
    </footer>
  );
}
