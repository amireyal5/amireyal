import type { Metadata } from 'next';
import './globals.css';
import BottomNav from '@/components/BottomNav';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'עמיר אייל - פסיכותרפיסט מומחה',
  description: 'טיפול רגשי במבוגרים ומתבגרים | CBT, SE וטיפול גוף-נפש | כרמיאל והסביבה ואונליין',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="he" dir="rtl">
      <body className={'font-display bg-background-light text-slate-900'}>
        <div className="min-h-screen flex flex-col relative">
          <Header />
          <main className="flex-1 pb-24 md:pb-0">{children}</main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}
