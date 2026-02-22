'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, Leaf, Mail, BookOpen, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const navItems = [
  { href: '/', label: 'בית', icon: Home },
  { href: '/about', label: 'אודות', icon: User },
  { href: '/services', label: 'שירותים', icon: Leaf },
  { href: '/insights', label: 'תובנות', icon: BookOpen },
  { href: '/contact', label: 'קשר', icon: Mail },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 w-full bg-white/90 backdrop-blur-xl border-t border-slate-200 pb-safe z-50">
      <div className="flex items-center justify-around h-20 px-4 max-w-2xl mx-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href || (pathname.startsWith(item.href) && item.href !== '/');
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex flex-col items-center justify-center gap-1 transition-colors w-16 text-center",
                isActive ? "text-primary" : "text-slate-400 hover:text-slate-600"
              )}
            >
              <Icon size={24} />
              <span className="text-[10px] font-semibold">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
