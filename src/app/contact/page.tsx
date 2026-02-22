'use client';
import { motion } from 'motion/react';
import { ArrowRight, Phone, Mail, Info, Send, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-background-light"
    >
      {/* Header */}
      <header className="md:hidden sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center p-4 justify-between max-w-md mx-auto">
          <button className="text-slate-900 flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors">
            <ArrowRight size={20} />
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">צרו קשר</h1>
        </div>
      </header>

      <main className="container mx-auto max-w-6xl px-6 py-8 md:py-16 space-y-8 md:space-y-0 md:grid md:grid-cols-2 md:gap-16 md:items-start">
        <section className="md:col-span-1">
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-2">בואו נדבר</h2>
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8">
            אני כאן כדי ללוות אתכם במסע הפנימי שלכם. הצעד הראשון הוא לפעמים המאתגר ביותר – אני מזמין אתכם ליצור קשר לשיחת היכרות טלפונית ללא התחייבות.
          </p>

          <div className="flex gap-4 mb-8">
            <button className="flex-1 bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2">
              <Phone size={18} />
              התקשרו עכשיו
            </button>
            <button className="flex-1 bg-white text-slate-900 border border-slate-200 font-bold py-4 rounded-xl flex items-center justify-center gap-2">
              <Mail size={18} />
              אימייל
            </button>
          </div>

          <div className="bg-primary/5 border border-primary/10 rounded-2xl p-5 flex gap-4">
            <Info className="text-primary shrink-0 mt-1" size={24} />
            <div>
              <h4 className="font-bold text-slate-900 mb-1">למה לצפות</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                אני מציע שיחת ייעוץ ראשונית חינם של 15 דקות כדי לדון בצרכים שלכם ולוודא שאנחנו מתאימים למטרות הטיפוליות שלכם.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-8 pt-8 mt-8 border-t border-slate-200">
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">שעות פעילות</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex justify-between">
                  <span className="text-slate-600">א׳ - ה׳</span>
                  <span className="font-bold">08:00 - 20:00</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-slate-600">שישי</span>
                  <span className="font-bold">08:00 - 13:00</span>
                </li>
                <li className="text-slate-400 italic">שבת: סגור</li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">מיקום</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                חטיבת יפתח 151<br />
                כרמיאל<br />
                טיפול אונליין
              </p>
            </div>
          </div>

        </section>

        <section className="md:col-span-1 space-y-6 bg-white p-8 rounded-2xl border border-slate-100 shadow-lg">
          <h3 className="text-xl font-bold">שלחו הודעה</h3>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">שם מלא</label>
              <input
                type="text"
                placeholder="הזינו את שמכם"
                className="w-full bg-white border border-slate-200 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/50 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">כתובת אימייל</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full bg-white border border-slate-200 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/50 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">מספר טלפון (אופציונלי)</label>
              <input
                type="tel"
                placeholder="054-7509962"
                className="w-full bg-white border border-slate-200 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/50 outline-none transition-all"
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">ההודעה שלכם</label>
              <textarea
                rows={4}
                placeholder="איך אני יכול לעזור?"
                className="w-full bg-white border border-slate-200 rounded-xl py-4 px-5 focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 flex items-center justify-center gap-2 mt-4">
              <Send size={18} />
              שלחו הודעה
            </button>
          </form>
        </section>
        
        <section className="relative rounded-2xl overflow-hidden h-64 md:h-96 border border-slate-200 md:col-span-2">
          <img
            src="https://picsum.photos/seed/carmiel/800/600"
            alt="מפת כרמיאל"
            className="w-full h-full object-cover grayscale opacity-50"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-primary p-3 rounded-full shadow-xl shadow-primary/40 ring-4 ring-white">
              <MapPin size={24} className="text-white" />
            </div>
          </div>
          <button className="absolute bottom-4 right-4 bg-white text-slate-900 text-xs font-bold px-4 py-2 rounded-lg shadow-md border border-slate-200">
            צפייה במפות
          </button>
        </section>
      </main>
    </motion.div>
  );
}
