'use client';
import { motion } from 'motion/react';
import { ArrowRight, Wind, Lightbulb, ShieldCheck, Activity, ChevronLeft, CalendarCheck } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ServicesPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-background-light"
    >
      {/* Sticky Header for Mobile */}
      <header className="md:hidden sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <button className="text-slate-900 flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
            <ArrowRight size={20} />
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">תחומי התמחות</h1>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl">
        {/* Hero Section */}
        <section className="px-6 pt-8 pb-6 md:pt-16 md:pb-12 text-center">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-3">טיפול רגשי וצמיחה</h2>
          <p className="text-slate-600 text-base md:text-xl leading-relaxed max-w-3xl mx-auto">
            ליווי מבוגרים, הורים ומתבגרים במסע פנימי של ויסות, ריפוי ושינוי. גישה אינטגרטיבית המשלבת CBT, SE וטיפול דינמי.
          </p>
        </section>

        {/* Treatment Grid */}
        <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
          {/* Anxiety & Panic */}
          <div className="bg-white rounded-xl shadow-sm border border-primary/5 overflow-hidden group">
            <div className="h-40 md:h-56 w-full bg-center bg-cover" style={{ backgroundImage: "url('https://picsum.photos/seed/anxiety/800/400')" }}></div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <Wind className="text-primary" size={24} />
                <h3 className="text-xl font-bold text-slate-900">חרדה ועומס רגשי</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                ניהול חרדה ששוטפת בלי אזהרה ועומס רגשי המקשה על התפקוד. שילוב בין הבנה קוגניטיבית להקשבה עמוקה למערכת העצבים.
              </p>
              <button
                onClick={() => router.push('/services/anxiety')}
                className="w-full py-2.5 px-4 bg-primary/10 hover:bg-primary/20 text-primary font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                למידע נוסף <ChevronLeft size={16} />
              </button>
            </div>
          </div>

          {/* Depression & Mood */}
          <div className="bg-white rounded-xl shadow-sm border border-primary/5 overflow-hidden group">
            <div className="h-40 md:h-56 w-full bg-center bg-cover" style={{ backgroundImage: "url('https://picsum.photos/seed/depression/800/400')" }}></div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <Lightbulb className="text-primary" size={24} />
                <h3 className="text-xl font-bold text-slate-900">דיכאון ותחושת תקיעות</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                עבודה עם תחושת תקיעות וריקנות. פתיחת "דלתות פנימיות" שנסגרו ומציאת דרכים חדשות לחיבור לחיוניות ולמשמעות.
              </p>
              <button
                onClick={() => router.push('/services/depression')}
                className="w-full py-2.5 px-4 bg-primary/10 hover:bg-primary/20 text-primary font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                למידע נוסף <ChevronLeft size={16} />
              </button>
            </div>
          </div>

          {/* Trauma & PTSD */}
          <div className="bg-white rounded-xl shadow-sm border border-primary/5 overflow-hidden group">
            <div className="h-40 md:h-56 w-full bg-center bg-cover" style={{ backgroundImage: "url('https://picsum.photos/seed/trauma/800/400')" }}></div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="text-primary" size={24} />
                <h3 className="text-xl font-bold text-slate-900">טראומה והתמכרויות</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                עיבוד חוויות עבר קשות והתמודדות עם דפוסי התמכרות. יצירת מרחב בטוח לשחרור השפעת העבר על ההווה.
              </p>
              <button
                onClick={() => router.push('/services/trauma')}
                className="w-full py-2.5 px-4 bg-primary/10 hover:bg-primary/20 text-primary font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                למידע נוסף <ChevronLeft size={16} />
              </button>
            </div>
          </div>

          {/* Somatic Symptoms */}
          <div className="bg-white rounded-xl shadow-sm border border-primary/5 overflow-hidden group">
            <div className="h-40 md:h-56 w-full bg-center bg-cover" style={{ backgroundImage: "url('https://picsum.photos/seed/parenting/800/400')" }}></div>
            <div className="p-5">
              <div className="flex items-center gap-3 mb-2">
                <Activity className="text-primary" size={24} />
                <h3 className="text-xl font-bold text-slate-900">הדרכת הורים ומתבגרים</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">
                ליווי הורים לביטחון והצבת גבולות, ומתבגרים בתהליכי חיפוש זהות, בלבול וקשיי השתלבות.
              </p>
              <button
                onClick={() => router.push('/services/somatic')}
                className="w-full py-2.5 px-4 bg-primary/10 hover:bg-primary/20 text-primary font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
              >
                למידע נוסף <ChevronLeft size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Consultation Section */}
        <section className="mt-12 px-6 py-8 md:py-12 bg-primary/5 rounded-2xl mx-4 mb-8">
            <div className="max-w-2xl mx-auto text-center">
                <h4 className="text-xl md:text-2xl font-bold text-center mb-2">האם אפשר אחרת?</h4>
                <p className="text-center text-slate-600 text-sm md:text-base mb-6">
                    אם אתם או ילדיכם מרגישים תקועים בתוך מעגל חוזר – אני מזמין אתכם לשיחת היכרות טלפונית ללא התחייבות.
                </p>
                <button 
                    onClick={() => router.push('/contact')}
                    className="w-full sm:w-auto sm:px-10 bg-primary text-slate-900 font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                    <CalendarCheck size={20} />
                    תיאום שיחת היכרות
                </button>
            </div>
        </section>
      </main>
    </motion.div>
  );
}
