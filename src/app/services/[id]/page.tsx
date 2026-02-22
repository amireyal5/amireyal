'use client';
import { motion } from 'motion/react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Wind, Lightbulb, ShieldCheck, Activity, CheckCircle2, CalendarCheck, Info } from 'lucide-react';

const SERVICES_DATA = {
  'anxiety': {
    title: 'חרדה ועומס רגשי',
    icon: Wind,
    image: 'https://picsum.photos/seed/anxiety/800/600',
    description: 'ניהול חרדה ששוטפת בלי אזהרה ועומס רגשי המקשה על התפקוד היומיומי.',
    longDescription: 'חרדה יכולה להרגיש כמו גל ששוטף אותך בלי אזהרה, או כמו עומס תמידי שיושב על הכתפיים. בטיפול שלי, אנו משלבים כלים קוגניטיביים (CBT) להבנת דפוסי המחשבה המעוררים חרדה, יחד עם עבודה גופנית עמוקה (SE) לשחרור המתח האגור במערכת העצבים. המטרה היא להחזיר לך את תחושת השליטה והביטחון.',
    benefits: [
      'זיהוי טריגרים רגשיים וגופניים',
      'טכניקות ויסות עצמי להרגעה מיידית',
      'הבנת הקשר בין מערכת העצבים לחרדה',
      'בניית חוסן נפשי מול מצבי לחץ'
    ],
    approach: 'אני משלב CBT קלאסי עם Somatic Experiencing והתיאוריה הפוליווגאלית, מה שמאפשר מענה רחב גם למחשבות וגם לתחושות הגופניות המלוות את החרדה.'
  },
  'depression': {
    title: 'דיכאון ותחושת תקיעות',
    icon: Lightbulb,
    image: 'https://picsum.photos/seed/depression/800/600',
    description: 'עבודה עם תחושת תקיעות, ריקנות וחוסר חיוניות בחיים.',
    longDescription: 'לפעמים זו תחושת תקיעות – כאילו דלת פנימית שנסגרה מזמן לא מצליחה להיפתח. הטיפול מתמקד בהחזרת התנועה לחיים – הן ברמה ההתנהגותית והן ברמה הרגשית. אנו עובדים על זיהוי הערכים החשובים לך ובניית צעדים קטנים ומעשיים לעבר חיים מלאי משמעות וחיוניות.',
    benefits: [
      'החזרת המוטיבציה והאנרגיה היומיומית',
      'שיפור מערכות יחסים ותקשורת',
      'פיתוח חמלה עצמית והפחתת ביקורת',
      'מציאת משמעות וחיבור מחדש לערכים'
    ],
    approach: 'אני משלב טיפול רגשי מעמיק (דינמי, הומניסטי) לצד טכניקות הפעלה התנהגותית מתוך ה-CBT, תוך התאמה אישית לקצב שלך.'
  },
  'trauma': {
    title: 'טראומה והתמכרויות',
    icon: ShieldCheck,
    image: 'https://picsum.photos/seed/trauma/800/600',
    description: 'עיבוד חוויות עבר קשות והתמודדות עם דפוסי התמכרות במרחב בטוח.',
    longDescription: 'טראומה אינה רק מה שקרה בעבר, אלא האופן שבו הגוף ממשיך לחוות את האירוע בהווה. לעיתים, התמכרות היא דרך של המערכת לנסות ולווסת כאב לא מעובד. הטיפול שלי מבוסס על יצירת תחושת ביטחון (Safety) כצעד ראשון. אנו עובדים בעדינות ובקצב שלך כדי לעבד את החוויות ולשחרר דפוסים מעכבים.',
    benefits: [
      'שחרור מתח אגור במערכת העצבים',
      'הבנת המנגנונים שמאחורי ההתמכרות',
      'שיפור היכולת לוויסות רגשי עצמי',
      'בנייה מחדש של תחושת אמון וביטחון'
    ],
    approach: 'העבודה משלבת Somatic Experiencing (SE) לעיבוד סנסו-מוטורי, יחד עם גישות של טיפול בהתמכרויות והבנה קוגניטיבית של השפעות הטראומה.'
  },
  'somatic': {
    title: 'הדרכת הורים ומתבגרים',
    icon: Activity,
    image: 'https://picsum.photos/seed/parenting/800/600',
    description: 'ליווי הורים לביטחון והצבת גבולות, ומתבגרים בתהליכי חיפוש זהות.',
    longDescription: 'אני מלווה הורים שמבקשים להרגיש בטוחים יותר, להציב גבולות ולהבין את ילדיהם – מבלי לאבד את עצמם בדרך. במקביל, אני עובד עם מתבגרים שמרגישים בלבול, קושי להשתלב, וחיפוש אחר מי שהם. הטיפול מספק מרחב בטוח לחקור את הקשיים ולמצוא כלים להתמודדות.',
    benefits: [
      'שיפור התקשורת בתוך המשפחה',
      'מתן כלים מעשיים להצבת גבולות',
      'חיזוק הביטחון העצמי של המתבגר',
      'הבנת הצרכים הרגשיים של הילד/ה'
    ],
    approach: 'אני משלב הדרכת הורים מבוססת ויסות וקשר, יחד עם טיפול רגשי מותאם למתבגרים המשלב CBT ועבודה עם זהות והתפתחות אישית.'
  }
};

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const service = SERVICES_DATA[params.id as keyof typeof SERVICES_DATA];

  if (!service) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">השירות לא נמצא</h2>
        <button onClick={() => router.push('/services')} className="text-primary font-bold">חזרה לשירותים</button>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-background-light"
    >
      {/* Header for Mobile */}
      <header className="md:hidden sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-primary/10">
        <div className="flex items-center p-4 justify-between max-w-2xl mx-auto">
          <button
            className="text-slate-900 flex size-10 items-center justify-center rounded-full hover:bg-primary/10 transition-colors"
            onClick={() => router.push('/services')}
          >
            <ArrowRight size={20} />
          </button>
          <h1 className="text-lg font-bold leading-tight tracking-tight flex-1 text-center pr-10">{service.title}</h1>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl">
        {/* Hero Image */}
        <div className="w-full h-72 md:h-96 relative overflow-hidden md:rounded-b-2xl">
          <img
            alt={service.title}
            className="w-full h-full object-cover"
            src={service.image}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
          <div className="absolute bottom-6 right-6 flex items-center gap-3">
            <div className="p-3 bg-primary rounded-xl text-white shadow-lg">
              <Icon size={28} />
            </div>
            <h2 className="text-white text-3xl font-bold shadow-sm">{service.title}</h2>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8 md:py-12 space-y-8 md:space-y-12">
          <section className="space-y-4">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
              מידע על הטיפול
            </div>
            <p className="text-xl md:text-2xl font-medium text-slate-800 leading-relaxed">
              {service.description}
            </p>
            <p className="text-slate-600 leading-relaxed text-lg">
              {service.longDescription}
            </p>
          </section>

          <section className="bg-sage-soft/30 rounded-2xl p-6 md:p-8 border border-primary/5">
            <h3 className="text-xl md:text-2xl font-bold mb-4 flex items-center gap-2">
              <Info className="text-primary" size={20} />
              מה תקבלו בתהליך?
            </h3>
            <ul className="space-y-4">
              {service.benefits.map((benefit, index) => (
                <li key={index} className="flex gap-3">
                  <CheckCircle2 className="text-primary shrink-0 mt-1" size={20} />
                  <span className="text-slate-700 font-medium text-lg">{benefit}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h3 className="text-xl md:text-2xl font-bold">הגישה הטיפולית שלי</h3>
            <div className="p-5 md:p-6 bg-white border border-slate-100 rounded-xl shadow-sm italic text-slate-600 leading-relaxed text-lg">
              {service.approach}
            </div>
          </section>

          {/* CTA */}
          <section className="pt-8 pb-4 md:pb-8">
            <div className="bg-background-dark text-white rounded-2xl p-8 text-center space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -mr-16 -mt-16 blur-3xl"></div>
              <h4 className="text-2xl font-bold">מוכנים להתחיל בשינוי?</h4>
              <p className="text-slate-300">
                אני מזמין אותך לשיחת היכרות קצרה כדי להבין איך אוכל לעזור לך באופן אישי.
              </p>
              <button
                onClick={() => router.push('/contact')}
                className="w-full sm:w-auto sm:px-8 bg-primary text-background-dark font-bold py-4 rounded-xl shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2"
              >
                <CalendarCheck size={20} />
                תיאום שיחת היכרות
              </button>
            </div>
          </section>
        </div>
      </main>
    </motion.div>
  );
}
