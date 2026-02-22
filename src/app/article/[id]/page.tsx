'use client';
import { motion } from 'motion/react';
import { ArrowRight, Bookmark, Share2, Clock, CheckCircle2, MessageSquare, ArrowLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ARTICLES_DATA = {
  'globus': {
    title: 'גלובוס היסטריקוס – גוש בגרון מחרדה',
    category: 'חרדה וגוף-נפש',
    readTime: '8 דקות קריאה',
    author: 'עמיר אייל',
    image: 'https://picsum.photos/seed/throat/800/500',
    content: (
      <>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">גלובוס היסטריקוס – כשגוש בגרון מספר על מה שהנפש לא יכולה לומר</h2>
        <p className="mb-6">
          האם אתם מכירים את התחושה המטרידה הזו, כאילו יש גוש תקוע בגרון, למרות שאתם יודעים שאין שם שום דבר פיזי? אתם מנסים לבלוע שוב ושוב, משתעלים, שותים מים – אבל התחושה פשוט לא עוברת. תחושה זו, המוכרת בעגה המקצועית כ"גלובוס היסטריקוס" או "תחושת גוש בגרון", היא חוויה נפוצה ומטרידה שיכולה להשפיע באופן משמעותי על איכות החיים. זו אינה אשליה – אלא תחושה אמיתית שמקורה לרוב אינו פיזי, אלא רגשי.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">מה זה גלובוס היסטריקוס ומאיפה זה בא?</h2>
        <p className="mb-4">
          תחושת גוש בגרון, המכונה לעיתים גם "תחושת מחנק" או "גוש בגרון", אינה נעימה כלל ויכולה לעורר חרדה רבה. חשוב להדגיש כי במרבית המקרים, לאחר בדיקה רפואית ששוללת גורמים פיזיים כגון דלקת, ריפלוקס חומצי או בעיות בבלוטת התריס, מתגלה שהתחושה קשורה למצב נפשי.
        </p>
        <p className="mb-4">
          לרוב, גלובוס היסטריקוס הוא ביטוי פיזי של סטרס, חרדה, מתח רב, דיכאון, או טראומה שלא עובדה. הגרון הוא מרכז תקשורת וביטוי עצמי – גם מקום שבו אנו "בולעים" חוויות ורגשות. כשאנו חווים מצוקה רגשית שאין לה פורקן, הגוף מתרגם אותה לתחושה פיזית.
        </p>

        <h3 className="font-bold text-slate-800 mb-2">הגלובוס יכול להופיע:</h3>
        <ul className="space-y-2 mb-6">
          <li>בזמנים של לחץ גבוה</li>
          <li>לפני אירועים מלחיצים</li>
          <li>כביטוי כרוני למצוקה מתמשכת</li>
          <li>בהקשרים חברתיים – סימן אפשרי לחרדה חברתית</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">גלובוס היסטריקוס – מתי כדאי לפנות לטיפול?</h2>
        <p className="mb-4">
          אם אתם חווים תחושת גוש בגרון באופן תדיר, במיוחד כשהיא מלווה בחרדה, קשיי נשימה, קשיי שינה, ירידה במצב רוח או קשיים תפקודיים – זהו סימן ברור שכדאי לפנות לעזרה מקצועית.
        </p>
        <p className="mb-6">
          לאחר ששללתם גורמים פיזיים אצל רופא, הצעד הבא הוא להבין את המקור הרגשי. אל תחכו שהתחושה תהפוך לכרונית ותשבש את חייכם. התמודדות עם מצוקה רגשית אינה סימן לחולשה – אלא לחוזק ורצון לדאוג לעצמכם.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">איך מטפלים בגלובוס היסטריקוס? הגישות הטיפוליות</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>טיפול קוגניטיבי-התנהגותי (CBT)</strong> – נזהה דפוסי חשיבה והתנהגות המעוררים חרדה ומתח, ונרכוש כלים פרקטיים לניהול מתח וטכניקות הרפיה שמקלות באופן מיידי על התחושה הפיזית.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>טיפול דינמי</strong> – נחקור את המקורות העמוקים יותר של החרדה, נזהה קונפליקטים לא פתורים, ונשחרר רגשות שנתקעו בגוף.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>עיבוד טראומה</strong> – אם התחושה קשורה לאירועי עבר קשים, נתמקד בעיבוד רגשי בטוח ומבוקר שמשחרר את הלחץ שהגוף אוגר.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>מיינדפולנס</strong> – מגביר מודעות לגוף ולרגשות ומאפשר התבוננות רגועה בתחושה ללא שיפוט, ובסופו של דבר מפחית את עוצמתה.</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">שאלות נפוצות על גלובוס היסטריקוס</h2>
        <div className="space-y-6 mb-8">
          <div>
            <p className="font-bold text-slate-900">ש: האם גלובוס היסטריקוס מסוכן?</p>
            <p>ת: לרוב לא. לאחר שרופא שולל גורמים פיזיים, התחושה עצמה אינה מסוכנת – אך היא אות אזהרה שהנפש זקוקה לתשומת לב.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">ש: כמה זמן נמשך גלובוס היסטריקוס?</p>
            <p>ת: תלוי בגורם. כשהתחושה קשורה ללחץ חולף – היא עוברת לאחר זמן. כשהיא כרונית וקשורה לחרדה עמוקה – טיפול מקצועי מקצר משמעותית את משך הסבל.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">ש: האם מיינדפולנס עוזר לגלובוס היסטריקוס?</p>
            <p>ת: כן – מיינדפולנס עוזר להפחית את עוצמת התחושה ואת החרדה הנלווית אליה, ומלמד להתבונן בתחושה ללא שיפוט.</p>
          </div>
        </div>
      </>
    )
  },
  'stress': {
    title: 'התמודדות עם מתח ולחץ: כלים לחיים מאוזנים',
    category: 'ניהול סטרס',
    readTime: '10 דקות קריאה',
    author: 'עמיר אייל',
    image: 'https://picsum.photos/seed/stress/800/500',
    content: (
      <>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">התמודדות עם מתח ולחץ – כשהגוף והנפש מבקשים עצירה</h2>
        <p className="mb-6">
          מתח ולחץ הם תגובות טבעיות של הגוף למצבים מאתגרים. אך כשהם הופכים כרוניים, הם פוגעים קשות בבריאות הפיזית והנפשית, במערכות היחסים ובתפקוד הכללי. אני רואה זאת אצל מטופלים רבים – אנשים שמתפקדים "על אוטומט", מרגישים שהם טובעים, ולא יודעים שיש דרך לחזור לאיזון.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">מתח ולחץ כרוניים – מה הם עושים לגוף ולנפש?</h2>
        <ul className="space-y-2 mb-6">
          <li><strong>פיזית:</strong> כאבי ראש, בעיות שינה, עייפות כרונית, בעיות עיכול.</li>
          <li><strong>רגשית:</strong> חרדה, עצבנות, דיכאון, חוסר סבלנות.</li>
          <li><strong>קוגניטיבית:</strong> קשיי ריכוז, בעיות זיכרון, קבלת החלטות לקויה.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">מתי מתח ולחץ הופכים לבעיה שדורשת טיפול מקצועי?</h2>
        <ul className="space-y-3 mb-8">
          <li className="flex gap-3">
            <CheckCircle2 className="text-primary shrink-0" size={20} />
            <span>תחושה קבועה של הצפה – "טביעה" בעומס משימות ודאגות</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="text-primary shrink-0" size={20} />
            <span>קשיי שינה משמעותיים – קושי להירדם, התעוררויות בלילה</span>
          </li>
          <li className="flex gap-3">
            <CheckCircle2 className="text-primary shrink-0" size={20} />
            <span>תסמינים פיזיים ללא הסבר רפואי – כאבי ראש, בטן, מתח שרירים</span>
          </li>
        </ul>
      </>
    )
  },
  'progress': {
    title: 'איך יודעים שהטיפול עוזר? סימני התקדמות ושינוי',
    category: 'פסיכותרפיה',
    readTime: '12 דקות קריאה',
    author: 'עמיר אייל',
    image: 'https://picsum.photos/seed/progress/800/500',
    content: (
      <>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">איך יודעים שהטיפול באמת עוזר?</h2>
        <p className="mb-6">
          ההחלטה לפנות לטיפול רגשי היא צעד משמעותי של אומץ ותקווה. רבים מגיעים אליו עם ציפייה לשינוי, להקלה, או להבנה עמוקה יותר של עצמם ושל אתגרי חייהם. אך לצד התקווה, לעיתים קרובות עולה השאלה החשובה והטבעית: איך אדע שהטיפול באמת עוזר לי? איך מודדים התקדמות בתהליך כה אישי וייחודי?
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">מהי התקדמות בטיפול רגשי?</h2>
        <p className="mb-6">
          התקדמות בטיפול אינה תמיד קו ישר ועולה, ולעיתים היא מתרחשת בקפיצות קטנות, ב"קליקים" פתאומיים, או בשינויים איטיים ועמוקים שמתגלים רק במבט לאחור. חשוב לזכור שהטיפול הוא תהליך, ולכן ההתקדמות אינה נמדדת רק בהיעלמות מוחלטת של סימפטומים, אלא גם ביכולת להתמודד איתם טוב יותר, להבין אותם, ולפתח כלים חדשים.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">סימני התקדמות שתוכלו לזהות</h2>
        <div className="space-y-6 mb-8">
          <div>
            <h3 className="font-bold text-slate-900 mb-2">הבנת הבעיה: מבהירות להקלה</h3>
            <p className="text-slate-600">
              אחד הצעדים הראשונים והחשובים בטיפול הוא מעבר מתחושת בלבול ותסכול להבנה בהירה יותר של הקשיים. ככל שהטיפול מתקדם, אתם עשויים לגלות שאתם מבינים טוב יותר ממה נובעות המצוקות שלכם.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">זיהוי דפוסים</h3>
            <p className="text-slate-600">
              אם אתם מתחילים לזהות דפוסים חוזרים בחייכם, במחשבותיכם או בהתנהגותכם – כאלה שאולי חזרו על עצמם שנים מבלי שהבחנתם בהם – זהו סימן מצוין.
            </p>
          </div>
          <div>
            <h3 className="font-bold text-slate-900 mb-2">ניפוץ מיתוסים וסטיגמות</h3>
            <p className="text-slate-600">
              אם אתם מרגישים פחות לבד, פחות "פגומים" ויותר מקבלים את עצמכם עם הקשיים – הרי שאתם מתקדמים.
            </p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">איך טיפול פסיכולוגי יכול לעזור?</h2>
        <p className="mb-4">טיפול פסיכולוגי מציע מרחב ייחודי ובטוח, שבו תוכלו לחקור את עולמכם הפנימי ללא שיפוטיות:</p>
        <ul className="space-y-4 mb-8">
          <li className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <strong>הקשר הטיפולי</strong> – ליבו של התהליך. מרחב של אמון, קבלה והכלה.
          </li>
          <li className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <strong>CBT</strong> – זיהוי ושינוי דפוסי חשיבה והתנהגות שליליים.
          </li>
          <li className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <strong>טיפול דינמי</strong> – חקירת שורשי הקשיים והבנת השפעות העבר על ההווה.
          </li>
        </ul>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">הגישה הטיפולית שלי</h2>
        <p className="mb-6">
          אני מאמין שהבסיס לכל שינוי מתחיל בקשר טיפולי איתן ואמון הדדי. אני משלב בטיפוליי את הגישות הקוגניטיבית-התנהגותית (CBT) והדינמית, מה שמאפשר לי להתאים את הטיפול לצורך הייחודי של כל מטופל/ת – מבוגרים, מתבגרים והדרכת הורים.
        </p>
      </>
    )
  },
  'relationships': {
    title: 'קשיים במערכות יחסים: איך לצמוח מתוך האתגר',
    category: 'פסיכותרפיה',
    readTime: '10 דקות קריאה',
    author: 'עמיר אייל',
    image: 'https://picsum.photos/seed/relationships/800/500',
    content: (
      <>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">קשיים במערכות יחסים – כשהקשר שאמור לחזק הופך למקור כאב</h2>
        <p className="mb-6">
          מערכות יחסים – רומנטיות, משפחתיות או חברותיות – הן ליבת הקיום האנושי. אך הן גם זירה לאתגרים מורכבים. לעיתים נדמה שהקשר שנועד להיות מקור לכוח ולשמחה הופך למעמסה, לכאב או לחוסר הבנה. אני רואה זאת אצל מטופלים רבים – אנשים שמרגישים תסכול או בדידות בתוך הקשר, משפחות שנפגעו מאירועי חיים, וחברויות שהתרחקו.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">קשיים במערכות יחסים – מה הם ומאיפה הם באים?</h2>
        <p className="mb-4">קשיים ביחסים אינם מצביעים בהכרח על "כישלון" – אלא על נקודות הדורשות תשומת לב ועבודה אישית.</p>
        <ul className="space-y-2 mb-6">
          <li><strong>קשיי תקשורת</strong> – חוסר יכולת להביע צרכים, הימנעות משיחות קשות, ויכוחים ללא פתרון.</li>
          <li><strong>חוסר אמון</strong> – פגיעה באמינות, קנאה מוגזמת, תחושה שהצד השני אינו כן.</li>
          <li><strong>ריחוק רגשי ופיזי</strong> – היעדר אינטימיות, בדידות בתוך הקשר.</li>
          <li><strong>קונפליקטים חוזרים</strong> – מחלוקות על אותם נושאים (כסף, ילדים, מטלות) ללא התקדמות.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">כלים מעשיים לשיפור ההתמודדות</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>תקשורת מכבדת ואמפתית</strong> – למד/י לדבר על רגשותיך ("אני מרגיש...") במקום להאשים ("אתה תמיד...").</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>הבנת הצרכים והציפיות שלך</strong> – נהל/י שיחה פנימית כנה לגבי מה את/ה מצפה מהקשר.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>גבולות בריאים</strong> – למד/י להגדיר מה מקובל ומה לא – מול בן/בת הזוג וגם מול אחרים.</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">שאלות נפוצות על טיפול אישי ביחסים</h2>
        <div className="space-y-6 mb-8">
          <div>
            <p className="font-bold text-slate-900">ש: האם טיפול אישי יכול לעזור לזוגיות, גם אם בן/בת הזוג לא מגיע/ה?</p>
            <p>ת: בהחלט. פעמים רבות, שינוי שמתחיל אצל אדם אחד – באופן שבו הוא מתקשר, מגיב ומציב גבולות – מחולל שינוי במערכת היחסים כולה.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">ש: האם אפשר לבוא לטיפול לבד כשבן/בת הזוג מסרב?</p>
            <p>ת: כן. זו אחת הסיבות הנפוצות לפנייה לטיפול. עבודה אישית על דפוסי התקשורת והתגובות שלך יכולה לשנות את הדינמיקה בזוגיות.</p>
          </div>
        </div>
      </>
    )
  },
  'phobia': {
    title: 'פוביה ספציפית – סוגים, תסמינים וטיפול יעיל',
    category: 'פסיכותרפיה • מתבגרים',
    readTime: '10 דקות קריאה',
    author: 'עמיר אייל',
    image: 'https://picsum.photos/seed/phobia/800/500',
    content: (
      <>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">פוביה ספציפית – כשפחד לא רציונלי שולט בחיים</h2>
        <p className="mb-6">
          פוביה ספציפית היא סוג של הפרעת חרדה המאופיינת בפחד עז, לא רציונלי ומתמשך מאובייקט או ממצב מסוים. התגובה חזקה בהרבה מפחד רגיל – ועלולה לכלול סימפטומים של התקף פאניקה ממש. אך חשוב לדעת: פוביה אינה סימן לחולשה – היא תגובה של מנגנון הגנה טבעי שהשתבש, וניתן לטפל בה.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">סוגי פוביות ספציפיות</h2>
        <ul className="space-y-2 mb-6">
          <li><strong>חרדת גבהים (אקרופוביה)</strong> – פחד ממקומות גבוהים, גשרים, קומות עליונות.</li>
          <li><strong>פחד מטיסות</strong> – מגביל נסיעות, פוגע בקריירה ובמפגשים משפחתיים.</li>
          <li><strong>פחד ממחטים וזריקות</strong> – מונע בדיקות דם וחיסונים חיוניים.</li>
          <li><strong>קלאוסטרופוביה</strong> – פחד ממקומות סגורים, מעליות, תחבורה ציבורית.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">טיפול בפוביה ספציפית – כיצד זה עובד?</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>חשיפה הדרגתית (CBT)</strong> – הטכניקה היעילה ביותר לפוביות. בתהליך מבוקר ובטוח, נחשפים בהדרגה לאובייקט המפחיד.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>שינוי דפוסי חשיבה</strong> – נזהה מחשבות לא רציונליות ונפתח חשיבה מציאותית ובריאה יותר.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>טכניקות הרפיה ומיינדפולנס</strong> – כלים לרגיעה בזמן חרדה ולחזרה לתחושת שליטה.</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">שאלות נפוצות</h2>
        <div className="space-y-6 mb-8">
          <div>
            <p className="font-bold text-slate-900">ש: כמה זמן אורך טיפול בפוביה?</p>
            <p>ת: טיפול CBT ממוקד יכול להיות קצר יחסית – לעיתים מספר פגישות בודדות.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">ש: האם הטיפול כרוך בחשיפה מיידית?</p>
            <p>ת: לא. החשיפה הדרגתית. מתחילים מהמקום הבטוח ביותר ומתקדמים בקצב שלך בלבד.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">ש: האם הטיפול מתאים גם לילדים ומתבגרים?</p>
            <p>ת: כן – ואף מומלץ במיוחד למנוע השלכות לטווח ארוך.</p>
          </div>
        </div>
      </>
    )
  },
  'manipulations': {
    title: 'מניפולציות רגשיות בגירושין: זיהוי והתמודדות',
    category: 'הדרכת הורים • פסיכותרפיה',
    readTime: '15 דקות קריאה',
    author: 'עמיר אייל',
    image: 'https://picsum.photos/seed/divorce/800/500',
    content: (
      <>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">מניפולציות רגשיות בגירושין – כשהילדים הופכים לכלי במאבק</h2>
        <p className="mb-6">
          הימצאות בהליכי גירושין היא חוויה מטלטלת ומאתגרת, רגשית ונפשית. בתוך סערת הרגשות הזו, לא אחת צפה תופעה מכאיבה במיוחד: מניפולציה רגשית. כאשר אחד ההורים משתמש בילדים או בבן/בת הזוג לשעבר ככלי במאבק, הנזק הנפשי עלול להיות עמוק ומתמשך.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">איך מזהים מניפולציות רגשיות נפוצות?</h2>
        <ul className="space-y-4 mb-6">
          <li><strong>שימוש בילדים כשליחים</strong> – הילדים הופכים לשליחים של מסרים שליליים או מנוצלים כדי להשיג יתרונות.</li>
          <li><strong>האשמה והטלת רגשות אשם</strong> – טקטיקה המכוונת לפגוע בביטחונכם העצמי ולגרום לכם להרגיש רע.</li>
          <li><strong>שליטה כלכלית או רגשית</strong> – ניצול התלות שלכם או של הילדים כדי להשיג דרישות לא קשורות.</li>
          <li><strong>גזלייטינג (Gaslighting)</strong> – גרימה לצד השני לפקפק בשפיותו או בתפיסת המציאות שלו.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">איך פסיכותרפיה יכולה לעזור?</h2>
        <p className="mb-4">הטיפול הוא מסע משותף לגילוי הכוחות הפנימיים שיאפשרו לכם להתמודד:</p>
        <div className="space-y-4 mb-8">
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>זיהוי דפוסים (CBT)</strong> – למידה לשנות את התגובה האוטומטית למניפולציות.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>הצבת גבולות</strong> – רכישת כלים מעשיים להצבת גבולות בריאים ואסרטיביים תוך שמירה על קור רוח.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>הדרכת הורים בקונפליקט</strong> – סיוע להורים להגן על ילדיהם ולהתמודד עם אתגרי ההורות בנפרד.</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">שאלות נפוצות</h2>
        <div className="space-y-6 mb-8">
          <div>
            <p className="font-bold text-slate-900">ש: מה אם ההורה המניפולטור מסרב לשתף פעולה בטיפול?</p>
            <p>ת: גם אם ההורה השני אינו משתף פעולה, טיפול אישי יכול לחזק אתכם ולספק לכם כלים להגן על עצמכם ועל ילדיכם.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">ש: איך אוכל להגן על הילדים שלי בצורה הטובה ביותר?</p>
            <p>ת: הימנעו מלשתף אותם בפרטי הסכסוך, חזקו את תחושת הביטחון שלהם, ועודדו אותם לדבר על רגשותיהם בסביבה תומכת.</p>
          </div>
        </div>
      </>
    )
  },
  'mindfulness': {
    title: 'מיינדפולנס: לחיות בנוכחות של הרגע הזה',
    category: 'פסיכותרפיה',
    readTime: '8 דקות קריאה',
    author: 'עמיר אייל',
    image: 'https://picsum.photos/seed/mindfulness/800/500',
    content: (
      <>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">מיינדפולנס – לחיות כאן ועכשיו</h2>
        <p className="mb-6">
          החיים המודרניים מזמנים לנו אינסוף גירויים, מטלות ולחצים. אנחנו ממהרים ממקום למקום, מנסים להספיק הכול, ולעיתים קרובות מוצאים את עצמנו מוצפים, מתוחים ולא מחוברים לעצמנו או לסביבה. מיינדפולנס הוא כלי עוצמתי שיכול להעניק לכם שלווה, בהירות ויכולת להתמודד טוב יותר עם אתגרי החיים.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">הבנת הבעיה: כשהראש לא נח לרגע</h2>
        <p className="mb-6">
          פעמים רבות, המחשבות שלנו מתרוצצות ללא הפסקה – דאגות מהעבודה, תכנונים אינסופיים, שיחות ש"רצות" בראשנו שוב ושוב. זהו מצב טבעי, אך כשהוא הופך למכריע, הוא גורם לנו לחוות מתח, חרדה ואף דיכאון. מיינדפולנס בא לתת מענה לחוסר נוכחות ברגע ההווה.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">איך טיפול רגשי יכול לעזור?</h2>
        <p className="mb-4">טיפול רגשי הוא מסע משותף שבו רוכשים כלים פרקטיים לשינוי:</p>
        <div className="space-y-4 mb-8">
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>טכניקות קשיבות</strong> – למידה איך לזהות את המחשבות והרגשות שעולים, לקבל אותם ללא שיפוטיות, ולבחור כיצד להגיב אליהם.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>תרגול נשימה</strong> – שימוש בנשימה כעוגן לרגע ההווה, מה שמפחית מתח ומגביר את תחושת השלווה.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>שילוב ביומיום</strong> – הטמעת עקרונות המיינדפולנס בפעולות פשוטות כמו אכילה, הליכה או עבודה.</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">שאלות נפוצות</h2>
        <div className="space-y-6 mb-8">
          <div>
            <p className="font-bold text-slate-900">ש: מיינדפולנס זה רק מדיטציה?</p>
            <p>ת: לא. מיינדפולנס הוא גישה לחיים של נוכחות מודעת, ואפשר לתרגל אותו בפעולות יומיומיות רבות.</p>
          </div>
          <div>
            <p className="font-bold text-slate-900">ש: ניסיתי פעם ולא הרגשתי שזה עוזר.</p>
            <p>ת: כמו כל מיומנות, מיינדפולנס דורש תרגול והתמדה. הדרכה מקצועית יכולה לעשות את ההבדל בהתאמה האישית.</p>
          </div>
        </div>
      </>
    )
  },
  'divorce-guide': {
    title: 'סכסוך גירושים והילדים: מדריך להתמודדות',
    category: 'פסיכותרפיה • הדרכת הורים',
    readTime: '15 דקות קריאה',
    author: 'עמיר אייל',
    image: 'https://picsum.photos/seed/family-conflict/800/500',
    content: (
      <>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">סכסוך גירושים והילדים – לשמור על יציבות בתוך הסערה</h2>
        <p className="mb-6">
          הורים פרודים או גרושים נתקלים לעיתים קרובות בקונפליקטים מתישים, הכוללים דפוסי השפעה רגשית סמויה המזיקים לכל המעורבים, ובמיוחד לילדים. המטרה שלנו היא לזהות את הדפוסים הללו ולגבש דרכי פעולה שיביאו הקלה ותחושת יציבות.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">מהי השפעה רגשית סמויה?</h2>
        <p className="mb-4">זהו תהליך שבו אדם מבקש להשפיע על רגשותיו או מחשבותיו של אחר כדי לקדם צרכים אישיים. דוגמאות נפוצות:</p>
        <ul className="space-y-3 mb-6">
          <li><strong>הפעלת רגשות אשם</strong> – יצירת תחושת כשל אצל ההורה השני סביב יכולתו לספק מענה לילד.</li>
          <li><strong>עיצוב תודעה דרך הילד</strong> – ניסיון להשפיע על עמדות הילד ביחס להורה האחר דרך מסרים עקיפים.</li>
          <li><strong>ציפיות לנאמנות</strong> – יצירת תחושת מחויבות חד-צדדית מצד הילד, לעיתים על חשבון הקשר עם ההורה השני.</li>
        </ul>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">כלים משמעותיים להתמודדות</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>תיעוד אירועים</strong> – רישום שיטתי של התרחשויות מסייע לייצר תמונה אובייקטיבית ולהבחין בין עובדות לפרשנויות.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>טכניקת "הסלע האפור"</strong> – שמירה על נוכחות רגועה ולא תגובתית מול פרובוקציות, תוך שימוש בתשובות ניטרליות ולקוניות.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>חיזוק תחושת הביטחון של הילד</strong> – נוכחות יציבה, זמן איכות והבעת אהבה בלתי תלויה.</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">מתי לפנות לעזרה מקצועית?</h2>
        <p className="mb-6">
          הכרה בדפוסים הללו אינה באה להאשים, אלא לסייע בהבנת המורכבות. במקרים של קונפליקטים מורכבים, מומלץ לפנות למטפל או יועץ מקצועי שיסייע לכם להגן על עצמכם ועל ילדיכם.
        </p>
      </>
    )
  },
  'screens': {
    title: 'הורות בעידן המסכים: גבולות ושימוש מושכל',
    category: 'הדרכת הורים • מתבגרים',
    readTime: '12 דקות קריאה',
    author: 'עמיר אייל',
    image: 'https://picsum.photos/seed/screens/800/500',
    content: (
      <>
        <h2 className="text-2xl font-bold text-slate-800 mb-4">הורות בעידן המסכים – לנווט בבטחה בעולם הדיגיטלי</h2>
        <p className="mb-6">
          “עידן המסכים” הפך את המכשירים הדיגיטליים לחלק בלתי נפרד מחיינו. השימוש בהם מציע יתרונות רבים, אך טומן בחובו גם אתגרים משמעותיים להתפתחות הילד ולדינמיקה המשפחתית. הבעיה אינה רק בזמן המסך, אלא בתוכן ובהקשר.
        </p>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">כלים מעשיים להורים</h2>
        <div className="space-y-4 mb-8">
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>אמנה משפחתית</strong> – קביעת חוקים משותפים לגבי זמני שימוש, סוגי תוכן ומיקומים מותרים (למשל, לא בשולחן האוכל).</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>מודל לחיקוי</strong> – ילדים לומדים ממה שהם רואים. הפחתת השימוש של ההורים במסכים בזמן איכות משפחתי היא קריטית.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>אלטרנטיבות אטרקטיביות</strong> – עידוד פעילויות חוץ, קריאה, משחקי קופסה ותחביבים שאינם כוללים מסכים.</p>
          </div>
          <div className="bg-slate-50 p-4 rounded-xl border-r-4 border-primary">
            <p><strong>אוריינות דיגיטלית</strong> – חינוך והסבר על סכנות ברשת, פרטיות ובטיחות, במקום איסור גורף.</p>
          </div>
        </div>

        <h2 className="text-xl font-bold text-slate-800 mt-8 mb-4">מתי כדאי לפנות לעזרה מקצועית?</h2>
        <p className="mb-4">אם אתם מזהים את אחד הסימנים הבאים, מומלץ לשקול פנייה לייעוץ הורי או פסיכותרפיה:</p>
        <ul className="space-y-2 mb-6">
          <li><strong>מצוקה רגשית משמעותית</strong> – חרדה, דיכאון או התקפי זעם הקשורים לניתוק מהמסך.</li>
          <li><strong>הידרדרות תפקודית</strong> – ירידה בלימודים, בידוד חברתי או הזנחת תחביבים.</li>
          <li><strong>אובדן שליטה</strong> – תחושה שהילד אינו מסוגל להפסיק את השימוש גם כשהוא רוצה.</li>
          <li><strong>קונפליקטים תכופים</strong> – מריבות בלתי פוסקות סביב המסכים שפוגעות באווירה בבית.</li>
        </ul>

        <p className="mb-6">
          הורות בעידן המסכים היא משימה מורכבת, אך עם הכלים הנכונים והרבה אהבה, תוכלו לנווט את המשפחה שלכם לעבר עתיד מאוזן ובריא.
        </p>
      </>
    )
  }
};

export default function ArticlePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const article = ARTICLES_DATA[params.id as keyof typeof ARTICLES_DATA] || ARTICLES_DATA['globus'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-background-light"
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background-light/80 backdrop-blur-md border-b border-slate-100">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between max-w-4xl">
          <button
            className="p-2 -mr-2 rounded-full hover:bg-slate-100 transition-colors"
            onClick={() => router.back()}
          >
            <ArrowRight size={20} className="text-slate-700" />
          </button>
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <Bookmark size={20} className="text-slate-700" />
            </button>
            <button className="p-2 rounded-full hover:bg-slate-100 transition-colors">
              <Share2 size={20} className="text-slate-700" />
            </button>
          </div>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl">
        {/* Hero Image */}
        <div className="w-full h-72 md:h-96 relative overflow-hidden md:rounded-b-2xl">
          <img
            alt={article.title}
            className="w-full h-full object-cover"
            src={article.image}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Article Content */}
        <article className="px-6 py-8 md:py-12">
          <div className="max-w-2xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-bold tracking-wider rounded-full uppercase">
                {article.category}
              </span>
              <span className="text-sm text-slate-400 flex items-center gap-1">
                <Clock size={14} />
                {article.readTime}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-2 text-slate-900">
              {article.title}
            </h1>
            <p className="text-slate-500 mb-6 font-medium md:text-lg">{article.author}</p>

            <div className="prose prose-slate max-w-none leading-relaxed text-lg text-slate-700">
              {article.content}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col gap-4 mt-12 mb-8">
              <button className="w-full bg-primary hover:bg-primary/90 text-slate-900 font-bold py-4 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-primary/20">
                <Bookmark size={20} />
                שמור להמשך
              </button>
              <div className="flex gap-4">
                <button className="flex-1 bg-slate-100 text-slate-700 font-semibold py-4 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 border border-slate-200">
                  <Share2 size={18} />
                  שתף
                </button>
                <button className="flex-1 bg-slate-100 text-slate-700 font-semibold py-4 rounded-2xl transition-all active:scale-[0.98] flex items-center justify-center gap-2 border border-slate-200">
                  <MessageSquare size={18} />
                  דיון
                </button>
              </div>
            </div>
          </div>
        </article>
      </main>
    </motion.div>
  );
}
