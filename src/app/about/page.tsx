'use client';
import { motion } from 'motion/react';
import { ArrowRight, Share2, Verified, GraduationCap, Users, Brain, Quote } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-background-light"
    >
      {/* Top Nav for mobile */}
      <nav className="md:hidden sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center justify-between px-4 h-16">
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
            <ArrowRight size={20} className="text-slate-700" />
          </button>
          <h1 className="text-lg font-bold tracking-tight">אודותיי</h1>
          <button className="flex items-center justify-center size-10 rounded-full hover:bg-primary/10 transition-colors">
            <Share2 size={20} className="text-slate-700" />
          </button>
        </div>
      </nav>

      <div className="container mx-auto max-w-5xl">
        {/* Hero Section */}
        <section className="px-4 pt-6 md:pt-16 md:grid md:grid-cols-5 md:gap-12 md:items-start">
          <div className="md:col-span-2">
            <div className="relative w-full aspect-[4/5] rounded-xl overflow-hidden shadow-xl mb-6 md:mb-0">
              <Image
                alt="עמיר אייל - פסיכותרפיסט מומחה"
                className="object-cover"
                src="/images/amireyal.webp"
                fill
                priority
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                <h2 className="text-white text-3xl font-extrabold">עמיר אייל</h2>
                <p className="text-primary font-medium">פסיכותרפיסט, מטפל CBT ומומחה גוף-נפש</p>
              </div>
            </div>
          </div>
          <div className="space-y-4 md:col-span-3 md:pt-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              נעים מאוד, שמי עמיר
            </div>
            <h3 className="text-2xl md:text-4xl font-bold leading-tight">מלווה מבוגרים, בני נוער והורים בתהליכי ויסות, צמיחה וריפוי.</h3>
            <p className="text-slate-600 md:text-lg leading-relaxed">
              העבודה שלי מבוססת על השילוב שבין עולם ה-CBT (טיפול קוגניטיבי התנהגותי) לבין גישת ה-SE (Somatic Experiencing) והתיאוריה הפוליווגאלית. אני מאמין שהמפתח לשינוי משמעותי נמצא ביכולת שלנו לשלב בין הבנה קוגניטיבית של דפוסי החשיבה שלנו, לבין הקשבה עמוקה למערכת העצבים ולתחושות הגוף.
            </p>
          </div>
        </section>

        {/* Stats Row */}
        <section className="flex justify-start md:justify-center gap-4 md:gap-8 px-4 py-8 md:py-16 overflow-x-auto hide-scrollbar">
          <div className="flex-shrink-0 w-32 md:w-40 bg-cream-warm p-4 rounded-xl border border-primary/5 text-center">
            <Verified size={24} className="text-primary mx-auto mb-2" />
            <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">ניסיון</p>
            <p className="text-lg md:text-2xl font-bold">20+ שנים</p>
          </div>
          <div className="flex-shrink-0 w-32 md:w-40 bg-cream-warm p-4 rounded-xl border border-primary/5 text-center">
            <GraduationCap size={24} className="text-primary mx-auto mb-2" />
            <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">השכלה</p>
            <p className="text-lg md:text-2xl font-bold">MSW קליני</p>
          </div>
          <div className="flex-shrink-0 w-32 md:w-40 bg-cream-warm p-4 rounded-xl border border-primary/5 text-center">
            <Users size={24} className="text-primary mx-auto mb-2" />
            <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">מטופלים</p>
            <p className="text-lg md:text-2xl font-bold">מאות רבות</p>
          </div>
        </section>
      </div>

      {/* Philosophy Section */}
      <section className="px-4 py-6 md:py-16 bg-sage-soft/30">
        <div className="container mx-auto max-w-5xl">
            <div className="flex items-center gap-3 mb-4 md:mb-8 md:justify-center">
                <div className="p-2 rounded-lg bg-primary text-white">
                    <Brain size={20} />
                </div>
                <h3 className="text-xl md:text-3xl font-bold text-center">האני מאמין שלי</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-4 md:gap-8">
                <div className="p-6 bg-white rounded-xl shadow-sm border border-primary/10">
                    <h4 className="font-bold text-primary mb-2 text-lg">חיבור גוף-נפש</h4>
                    <p className="text-base text-slate-600 leading-relaxed">
                    כשהגוף מרגיש בטוח, הנפש יכולה להתחיל להתרפא. אני משלב הבנה קוגניטיבית עם הקשבה עמוקה למערכת העצבים.
                    </p>
                </div>
                <div className="p-6 bg-white rounded-xl shadow-sm border border-primary/10">
                    <h4 className="font-bold text-primary mb-2 text-lg">מרחב בטוח ומכיל</h4>
                    <p className="text-base text-slate-600 leading-relaxed">
                    דגש על יצירת מרחב בטוח, מכיל ולא שיפוטי, המאפשר חקירה אמיתית וצמיחה מתוך קבלה.
                    </p>
                </div>
            </div>
        </div>
      </section>

      <div className="container mx-auto max-w-5xl">
        {/* Professional Background */}
        <section className="px-4 py-8 md:py-16">
            <h3 className="text-xl md:text-3xl font-bold mb-6 md:mb-10 text-center">ניסיון והכשרה</h3>
            <div className="space-y-6 md:space-y-8 relative border-r-2 border-primary/20 mr-3 pr-6 md:max-w-2xl md:mx-auto">
                <div className="relative">
                    <div className="absolute -right-[31px] top-1 size-4 rounded-full bg-primary ring-4 ring-white"></div>
                    <p className="text-xs font-bold text-primary uppercase">2005 - היום</p>
                    <h4 className="font-bold text-lg">ניסיון קליני עשיר</h4>
                    <p className="text-base text-slate-500">ליווי מאות מטופלים בהתמודדות עם טראומה, חרדה, התמכרויות וקשיים במערכות יחסים.</p>
                </div>
                <div className="relative">
                    <div className="absolute -right-[31px] top-1 size-4 rounded-full bg-primary/40 ring-4 ring-white"></div>
                    <p className="text-xs font-bold text-primary uppercase">הכשרה אקדמית</p>
                    <h4 className="font-bold text-lg">תואר שני MSW</h4>
                    <p className="text-base text-slate-500">עבודה סוציאלית קלינית, הכשרות ב-CBT, סכמה תרפיה וטיפול בהתמכרויות.</p>
                </div>
                <div className="relative">
                    <div className="absolute -right-[31px] top-1 size-4 rounded-full bg-primary/20 ring-4 ring-white"></div>
                    <p className="text-xs font-bold text-primary uppercase">חזון מקצועי</p>
                    <h4 className="font-bold text-lg">נפש.נט</h4>
                    <p className="text-base text-slate-500">הקמת אינדקס וקהילה מקצועית המחברת בין מטפלים למטופלים בצפון ובכלל.</p>
                </div>
            </div>
        </section>
      </div>

      {/* Clinic Space Gallery */}
      <section className="py-8 md:py-16 bg-cream-warm/50">
        <div className="container mx-auto max-w-5xl">
            <div className="px-4 mb-4 md:mb-8 flex justify-between items-end">
                <div>
                    <h3 className="text-xl md:text-3xl font-bold">חלל הקליניקה</h3>
                    <p className="text-sm md:text-base text-slate-500">מקום מפלט למסע הריפוי שלך.</p>
                </div>
                <button className="text-primary text-sm font-bold">צפה בהכל</button>
            </div>
            <div className="flex gap-4 overflow-x-auto hide-scrollbar px-4 pb-4 md:grid md:grid-cols-2 md:gap-4 md:p-0">
                <div className="flex-shrink-0 w-[85vw] md:w-full h-64 md:h-80 rounded-xl overflow-hidden">
                    <img
                    alt="אזור קבלה בקליניקה"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-EW7RvabWfFqRSFYJdFbaUJ3khUXgvLEIyByvbqZ-rC1YuiaMQQX2h-d5rv3DEeasvI4pQkBvttgzaL3s8UJnzMkrpAwtL6qBIdz5dxkOdeYF4uAov6yooEPaOy8Eck1DD6xtKza0LmcOsMEoL1qg29z2Y6jejc_EcnvGJjMG4Bh5mYI_vxbHH5c1Cm1rt-UAZsSN94zSZyF9a3XQQE2npG22rqIFQhlKl-IinpNmwRmGWQ3MvqnW21ugzjICGITkbDmpN7H_Bpo"
                    referrerPolicy="no-referrer"
                    />
                </div>
                <div className="flex-shrink-0 w-[85vw] md:w-full h-64 md:h-80 rounded-xl overflow-hidden">
                    <img
                    alt="חדר ייעוץ"
                    className="w-full h-full object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7biyufFCfkCWNiYhtfh_-N4ht8rXSxmNWtXMWLAnhLBrJHWvBc938trvVdYZ1ejjsxtvJKbd6yXrNL-a7mL41FGUWg-O-5Dy8UYRmHNuwQNO3Lhy78-eI7YTbb4MjpkNfSXQHSk_rFPSuy0f-yPvD-3R97_9H-gDpCHpN_KWVujYTVBKbmrx4SX7jZanRIfofql5ZHEt-sBVkmVsoumkjNp5y6tYlnCe0MdABqe-Y0iVDvXqI9EtBLMZNRsC22j6bF5keRNBijr4"
                    referrerPolicy="no-referrer"
                    />
                </div>
            </div>
        </div>
      </section>

      {/* Testimonial Quote */}
      <section className="px-4 py-12 md:py-24 text-center">
        <div className="container mx-auto max-w-3xl">
            <Quote size={48} className="text-primary/30 mx-auto mb-4" />
            <p className="italic text-lg md:text-2xl text-slate-700 mb-4 font-light leading-relaxed">
            ״אני מאמין שבכל אחד טמון הכוח לחולל שינוי. יחד, נמצא את הדרך הייחודית שלך להתפתחות, צמיחה והתגברות על אתגרי החיים.״
            </p>
            <p className="font-bold text-slate-500">— עמיר אייל</p>
        </div>
      </section>
    </motion.div>
  );
}
