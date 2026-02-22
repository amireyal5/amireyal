'use client';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { Calendar, ArrowLeft, Wind, Lightbulb, ShieldCheck, Quote, Phone, MapPin, Mail } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-background-light"
    >
        <div className="container mx-auto max-w-7xl">
            {/* Hero Section */}
            <section className="px-6 pt-8 pb-16 md:pt-16 md:pb-24 overflow-hidden">
                <div className="grid md:grid-cols-2 md:gap-16 md:items-center">
                    <div className="relative z-10">
                        <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">עמיר אייל</h1>
                        <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary rounded-full">
                            פסיכותרפיה סומטית ו-CBT
                        </div>
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6 text-slate-900">
                            ריפוי הנפש דרך <span className="text-primary italic">הגוף.</span>
                        </h2>
                        {/* Abstract background shape for mobile */}
                        <div className="absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4 size-64 bg-primary/5 rounded-full blur-3xl -z-10 md:hidden"></div>
                    </div>

                    <div className="relative mt-8 md:mt-0">
                        {/* Image Container */}
                        <div className="w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative z-0">
                            <Image
                                alt="עמיר אייל - פסיכותרפיסט"
                                className="object-cover"
                                fill
                                src="/images/amir-eyal-hero.webp"
                            />
                        </div>
                        {/* Overlapping Quote Card */}
                        <div className="absolute -bottom-10 -right-2 left-10 md:left-auto md:-right-12 md:w-80 bg-white p-6 rounded-xl shadow-xl border-r-4 border-primary z-20">
                            <Quote className="text-primary/20 absolute top-2 left-4 rotate-180" size={32} />
                            <p className="text-slate-700 italic text-sm md:text-base leading-relaxed pl-6">
                                "הגוף שלך מחזיק את המפה לריפוי שלך. יחד, נלמד לקרוא אותה."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTAs */}
            <section className="px-6 pt-12 pb-8 flex flex-col md:flex-row gap-4 md:justify-center">
                <button
                    onClick={() => router.push('/contact')}
                    className="w-full md:w-auto md:px-8 bg-primary hover:bg-primary/90 text-slate-900 font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2"
                >
                    <Calendar size={20} />
                    תיאום שיחת היכרות חינם
                </button>
                <button
                    onClick={() => router.push('/about')}
                    className="w-full md:w-auto md:px-8 bg-white border border-primary/20 text-slate-700 font-semibold py-4 rounded-xl transition-all"
                >
                    הכירו את הגישה שלי
                </button>
            </section>
        </div>

      {/* How I Can Help Section */}
      <section className="px-6 py-12 md:py-24 bg-primary/5">
        <div className="container mx-auto max-w-7xl">
            <div className="mb-10 md:mb-16 text-center">
                <h3 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">איך אני יכול לעזור?</h3>
                <div className="w-12 h-1.5 bg-primary mx-auto rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                {/* Card 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10 flex gap-4">
                    <div className="size-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Wind size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">טיפול CBT</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">בנייה מחדש של דפוסי חשיבה שליליים לטיפוח חוסן ובהירות.</p>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10 flex gap-4">
                    <div className="size-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <ShieldCheck size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">חוויה סומטית (SE)</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">שחרור טראומה אגורה ממערכת העצבים דרך מודעות גוף עדינה.</p>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary/10 flex gap-4">
                    <div className="size-12 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                        <Lightbulb size={24} />
                    </div>
                    <div>
                        <h4 className="font-bold text-lg mb-1">ניהול חרדה</h4>
                        <p className="text-sm text-slate-600 leading-relaxed">כלים פרקטיים לקרקוע עצמי ומציאת רוגע בתוך הכאוס.</p>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-7xl">
            <div className="px-6 mb-8 md:text-center md:mb-12">
                <h3 className="text-2xl md:text-4xl font-bold text-slate-900">סיפורי מטופלים</h3>
                <p className="text-slate-500 text-sm md:text-lg">תוצאות של תהליכי עומק ושינוי.</p>
            </div>
            {/* Horizontal scroll on mobile, grid on desktop */}
            <div className="flex gap-4 overflow-x-auto hide-scrollbar px-6 pb-4 md:grid md:grid-cols-2 md:gap-8 md:p-0">
                {/* Testimonial 1 */}
                <div className="flex-shrink-0 w-[85vw] md:w-full bg-white p-8 rounded-2xl shadow-xl shadow-primary/5 border border-primary/5">
                    <p className="text-slate-600 italic mb-6 text-lg">"עמיר עזר לי להבין איך הלחץ שלי מתבטא פיזית. אני מרגישה בשליטה יותר מאי פעם."</p>
                    <p className="font-bold text-primary">— שרה מ.</p>
                </div>
                {/* Testimonial 2 */}
                <div className="flex-shrink-0 w-[85vw] md:w-full bg-white p-8 rounded-2xl shadow-xl shadow-primary/5 border border-primary/5">
                    <p className="text-slate-600 italic mb-6 text-lg">"מרחב בטוח ומכיל באמת. הגישה של גוף-נפש הייתה החלק החסר במסע הטיפולי שלי."</p>
                    <p className="font-bold text-primary">— דוד ר.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 py-16 bg-slate-900 text-white md:rounded-t-[2.5rem]">
        <div className="container mx-auto max-w-7xl">
            <div className="text-center mb-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">בואו נתחיל את המסע שלכם</h3>
                <p className="text-slate-400 max-w-xs md:max-w-md mx-auto md:text-lg">זמין למפגשים פרונטליים בכרמיאל וטיפול אונליין ברחבי העולם.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                <a href="mailto:amir@amireyal.co.il" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                    <Mail className="text-primary" size={24} />
                    <div>
                        <p className="text-xs text-slate-400 uppercase tracking-widest">אימייל</p>
                        <p className="font-medium">amir@amireyal.co.il</p>
                    </div>
                </a>
                <a href="tel:054-7509962" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                    <Phone className="text-primary" size={24} />
                    <div>
                        <p className="text-xs text-slate-400 uppercase tracking-widest">טלפון</p>
                        <p className="font-medium">054-7509962</p>
                    </div>
                </a>
                <a href="https://www.google.com/maps/search/?api=1&query=חטיבת+יפתח+151,+כרמיאל" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 transition-colors hover:bg-white/10">
                    <MapPin className="text-primary" size={24} />
                    <div>
                        <p className="text-xs text-slate-400 uppercase tracking-widest">מיקום</p>
                        <p className="font-medium">חטיבת יפתח 151, כרמיאל</p>
                    </div>
                </a>
            </div>
            <div className="text-center text-xs text-slate-500 border-t border-white/10 pt-8">
                <p>© {new Date().getFullYear()} עמיר אייל - פסיכותרפיה סומטית. כל הזכויות שמורות.</p>
            </div>
        </div>
      </section>
    </motion.div>
  );
}
