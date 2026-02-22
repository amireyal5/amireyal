'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Calendar } from 'lucide-react';

const navItems = [
  { href: '/', label: 'בית' },
  { href: '/about', label: 'אודות' },
  { href: '/services', label: 'שירותים' },
  { href: '/insights', label: 'תובנות' },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="hidden md:flex sticky top-0 z-50 w-full border-b border-slate-200/80 bg-background-light/80 backdrop-blur-lg">
      <div className="container flex h-20 items-center justify-between mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center space-x-2">
                <span className="font-bold text-xl">עמיר אייל</span>
            </Link>
            <nav className="flex items-center gap-6 text-base">
            {navItems.map((item) => {
                const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
                return (
                <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                    "transition-colors hover:text-primary",
                    isActive ? "text-primary font-semibold" : "text-slate-600"
                    )}
                >
                    {item.label}
                </Link>
                );
            })}
            </nav>
        </div>
        <div className="flex items-center justify-end">
            <Link
                href="/contact"
                className={cn(
                "group inline-flex h-12 w-max items-center justify-center rounded-lg bg-primary px-6 py-2 text-lg font-medium text-slate-900 transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
                )}
            >
                <Calendar className="ml-2 h-5 w-5" />
                תיאום פגישה
            </Link>
        </div>
      </div>
    </header>
  );
}
