'use client';
import { motion } from 'motion/react';
import { Menu, Search, ArrowLeft, CalendarDays } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function InsightsPage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-background-light"
    >
      {/* Header Section for mobile */}
      <header className="md:hidden sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center justify-between px-4 py-4">
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
            <Menu size={24} className="text-slate-700" />
          </button>
          <h1 className="text-lg font-bold tracking-tight text-slate-900">מאמרים ותובנות</h1>
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
            <Search size={24} className="text-slate-700" />
          </button>
        </div>
      </header>
      
      <main className="container mx-auto max-w-7xl">
        <div className="pt-8 md:pt-16 text-center">
            <h1 className="text-3xl md:text-5xl font-bold text-slate-900 mb-4">מאמרים ותובנות</h1>
            <p className="text-slate-500 md:text-lg max-w-2xl mx-auto">מקורות מידע, כלים ומחשבות על פסיכותרפיה, גוף-נפש, חרדה וצמיחה אישית.</p>
        </div>

        {/* Search and Filters */}
        <div className="px-4 py-4 md:py-8 max-w-3xl mx-auto">
            <div className="relative group mb-4">
            <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-primary transition-colors" size={20} />
            <input
                className="w-full bg-slate-100 border-none rounded-xl py-3 pr-12 pl-4 focus:ring-2 focus:ring-primary/50 placeholder:text-slate-400 text-base outline-none"
                placeholder="חיפוש תובנות..."
                type="text"
            />
            </div>
            <div className="flex gap-3 justify-center overflow-x-auto hide-scrollbar">
                <button className="shrink-0 px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold shadow-sm">הכל</button>
                <button className="shrink-0 px-5 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-primary/10 transition-colors">טיפים ל-CBT</button>
                <button className="shrink-0 px-5 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-primary/10 transition-colors">מיינדפולנס</button>
                <button className="shrink-0 px-5 py-2 rounded-full bg-slate-100 text-slate-600 text-sm font-medium hover:bg-primary/10 transition-colors">גוף-נפש</button>
            </div>
        </div>


      {/* Featured Post Card */}
      <section className="px-4 mb-8 md:mb-16">
        <div
          className="relative flex flex-col md:flex-row items-center overflow-hidden rounded-2xl bg-white shadow-xl shadow-primary/5 border border-primary/5 cursor-pointer group"
          onClick={() => router.push('/article/globus')}
        >
          <div className="relative w-full md:w-1/2 aspect-[16/10] bg-cover bg-center">
             <img src="https://picsum.photos/seed/throat/800/500" className="absolute inset-0 w-full h-full object-cover" alt="תחושת גוש בגרון" />
            <div className="md:hidden absolute top-4 right-4 bg-primary px-3 py-1 rounded-lg">
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">מאמר נבחר</span>
            </div>
          </div>
          <div className="p-5 md:p-8 md:w-1/2">
            <div className="hidden md:inline-flex items-center gap-2 mb-2 bg-primary px-3 py-1 rounded-lg">
              <span className="text-[10px] font-bold text-white uppercase tracking-widest">מאמר נבחר</span>
            </div>
            <div className="flex items-center gap-2 my-2">
              <span className="px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">חרדה וגוף-נפש</span>
              <span className="text-slate-400 text-xs">• 8 דקות קריאה</span>
            </div>
            <h2 className="text-xl md:text-3xl font-bold leading-tight mb-2 text-slate-900 group-hover:text-primary transition-colors">גלובוס היסטריקוס – גוש בגרון מחרדה</h2>
            <p className="text-slate-600 text-sm md:text-base leading-relaxed mb-4">האם אתם מכירים את התחושה המטרידה הזו, כאילו יש גוש תקוע בגרון? גלו מה זה גלובוס היסטריקוס וכיצד מטפלים בו...</p>
            <button className="w-full md:w-auto bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-md shadow-primary/20 flex items-center justify-center gap-2">
              קרא את המאמר
              <ArrowLeft size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* Article Feed Grid */}
      <section className="px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <h3 className="md:hidden text-lg font-bold text-slate-900 flex items-center gap-2 col-span-full">
          תובנות אחרונות
          <div className="h-1 flex-1 bg-primary/10 rounded-full"></div>
        </h3>
        
        {/* Article Card */}
        <div
          className="flex md:flex-col gap-4 group cursor-pointer"
          onClick={() => router.push('/article/screens')}
        >
          <div className="w-24 h-24 md:w-full md:h-48 shrink-0 rounded-xl overflow-hidden bg-cover bg-center border border-primary/5" style={{ backgroundImage: "url('https://picsum.photos/seed/screens/400/400')" }}></div>
          <div className="flex flex-col justify-center">
            <span className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">הדרכת הורים • מתבגרים</span>
            <h4 className="font-bold text-slate-900 leading-tight mb-1 line-clamp-2 group-hover:text-primary transition-colors">הורות בעידן המסכים: גבולות ושימוש מושכל</h4>
            <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
              <span>12 דקות קריאה</span>
              <span>•</span>
              <span>30 בדצמבר</span>
            </div>
          </div>
        </div>

        {/* Article Card */}
        <div
          className="flex md:flex-col gap-4 group cursor-pointer"
          onClick={() => router.push('/article/divorce-guide')}
        >
          <div className="w-24 h-24 md:w-full md:h-48 shrink-0 rounded-xl overflow-hidden bg-cover bg-center border border-primary/5" style={{ backgroundImage: "url('https://picsum.photos/seed/family-conflict/400/400')" }}></div>
          <div className="flex flex-col justify-center">
            <span className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">פסיכותרפיה • הדרכת הורים</span>
            <h4 className="font-bold text-slate-900 leading-tight mb-1 line-clamp-2 group-hover:text-primary transition-colors">סכסוך גירושים והילדים: מדריך להתמודדות</h4>
            <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
              <span>15 דקות קריאה</span>
              <span>•</span>
              <span>4 בפברואר</span>
            </div>
          </div>
        </div>

        {/* Article Card */}
        <div
          className="flex md:flex-col gap-4 group cursor-pointer"
          onClick={() => router.push('/article/mindfulness')}
        >
          <div className="w-24 h-24 md:w-full md:h-48 shrink-0 rounded-xl overflow-hidden bg-cover bg-center border border-primary/5" style={{ backgroundImage: "url('https://picsum.photos/seed/mindfulness/400/400')" }}></div>
          <div className="flex flex-col justify-center">
            <span className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">פסיכותרפיה</span>
            <h4 className="font-bold text-slate-900 leading-tight mb-1 line-clamp-2 group-hover:text-primary transition-colors">מיינדפולנס: לחיות בנוכחות של הרגע הזה</h4>
            <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
              <span>8 דקות קריאה</span>
              <span>•</span>
              <span>8 במרץ</span>
            </div>
          </div>
        </div>

        {/* Article Card */}
        <div
          className="flex md:flex-col gap-4 group cursor-pointer"
          onClick={() => router.push('/article/manipulations')}
        >
          <div className="w-24 h-24 md:w-full md:h-48 shrink-0 rounded-xl overflow-hidden bg-cover bg-center border border-primary/5" style={{ backgroundImage: "url('https://picsum.photos/seed/divorce/400/400')" }}></div>
          <div className="flex flex-col justify-center">
            <span className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">הדרכת הורים • פסיכותרפיה</span>
            <h4 className="font-bold text-slate-900 leading-tight mb-1 line-clamp-2 group-hover:text-primary transition-colors">מניפולציות רגשיות בגירושין: זיהוי והתמודדות</h4>
            <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
              <span>15 דקות קריאה</span>
              <span>•</span>
              <span>7 באפריל</span>
            </div>
          </div>
        </div>

        {/* Article Card */}
        <div
          className="flex md:flex-col gap-4 group cursor-pointer"
          onClick={() => router.push('/article/phobia')}
        >
          <div className="w-24 h-24 md:w-full md:h-48 shrink-0 rounded-xl overflow-hidden bg-cover bg-center border border-primary/5" style={{ backgroundImage: "url('https://picsum.photos/seed/phobia/400/400')" }}></div>
          <div className="flex flex-col justify-center">
            <span className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">פסיכותרפיה • מתבגרים</span>
            <h4 className="font-bold text-slate-900 leading-tight mb-1 line-clamp-2 group-hover:text-primary transition-colors">פוביה ספציפית – סוגים, תסמינים וטיפול יעיל</h4>
            <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
              <span>10 דקות קריאה</span>
              <span>•</span>
              <span>7 במאי</span>
            </div>
          </div>
        </div>

        {/* Article Card */}
        <div
          className="flex md:flex-col gap-4 group cursor-pointer"
          onClick={() => router.push('/article/relationships')}
        >
          <div className="w-24 h-24 md:w-full md:h-48 shrink-0 rounded-xl overflow-hidden bg-cover bg-center border border-primary/5" style={{ backgroundImage: "url('https://picsum.photos/seed/relationships/400/400')" }}></div>
          <div className="flex flex-col justify-center">
            <span className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">פסיכותרפיה</span>
            <h4 className="font-bold text-slate-900 leading-tight mb-1 line-clamp-2 group-hover:text-primary transition-colors">קשיים במערכות יחסים: איך לצמוח מתוך האתגר</h4>
            <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
              <span>10 דקות קריאה</span>
              <span>•</span>
              <span>5 ביוני</span>
            </div>
          </div>
        </div>

        {/* Article Card */}
        <div
          className="flex md:flex-col gap-4 group cursor-pointer"
          onClick={() => router.push('/article/progress')}
        >
          <div className="w-24 h-24 md:w-full md:h-48 shrink-0 rounded-xl overflow-hidden bg-cover bg-center border border-primary/5" style={{ backgroundImage: "url('https://picsum.photos/seed/progress/400/400')" }}></div>
          <div className="flex flex-col justify-center">
            <span className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">פסיכותרפיה</span>
            <h4 className="font-bold text-slate-900 leading-tight mb-1 line-clamp-2 group-hover:text-primary transition-colors">איך יודעים שהטיפול עוזר? סימני התקדמות ושינוי</h4>
            <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
              <span>12 דקות קריאה</span>
              <span>•</span>
              <span>7 ביוני</span>
            </div>
          </div>
        </div>

        {/* Article Card */}
        <div
          className="flex md:flex-col gap-4 group cursor-pointer"
          onClick={() => router.push('/article/stress')}
        >
          <div className="w-24 h-24 md:w-full md:h-48 shrink-0 rounded-xl overflow-hidden bg-cover bg-center border border-primary/5" style={{ backgroundImage: "url('https://picsum.photos/seed/stress/400/400')" }}></div>
          <div className="flex flex-col justify-center">
            <span className="text-primary text-[10px] font-bold uppercase tracking-wider mb-1">ניהול סטרס</span>
            <h4 className="font-bold text-slate-900 leading-tight mb-1 line-clamp-2 group-hover:text-primary transition-colors">התמודדות עם מתח ולחץ: כלים לחיים מאוזנים</h4>
            <div className="flex items-center gap-2 text-slate-400 text-xs mt-1">
              <span>10 דקות קריאה</span>
              <span>•</span>
              <span>7 בינואר</span>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Banner */}
      <section className="px-4 mt-12 mb-8 md:my-24">
        <div className="bg-background-dark text-white rounded-2xl p-6 md:p-10 relative overflow-hidden max-w-4xl mx-auto flex flex-col md:flex-row md:items-center gap-6">
          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/20 rounded-full -ml-16 -mt-16 blur-3xl"></div>
          <div className="flex-1">
            <h4 className="text-xl md:text-2xl font-bold mb-2">מוכנים לתמיכה עמוקה יותר?</h4>
            <p className="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">שלבו את התובנות הללו עם מפגשי CBT מותאמים אישית המתמקדים במסע הייחודי שלכם.</p>
          </div>
          <button className="bg-primary text-background-dark font-bold px-6 py-3 rounded-xl flex items-center gap-2 hover:scale-[1.02] active:scale-95 transition-all self-start md:self-center">
            תיאום ייעוץ
            <CalendarDays size={18} />
          </button>
        </div>
      </section>
      </main>
    </motion.div>
  );
}
