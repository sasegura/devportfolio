'use client';

import Link from 'next/link';
import { Menu } from 'lucide-react';
import { useState, useEffect } from 'react';

import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/i18n-config';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Logo } from './icons/Logo';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export function Header({ lang, dictionary }: { lang: Locale; dictionary: any }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: `/${lang}`, label: dictionary.navigation.home },
    { href: `/${lang}/about`, label: dictionary.navigation.about },
    { href: `/${lang}/projects`, label: dictionary.navigation.projects },
    { href: `/${lang}/contact`, label: dictionary.navigation.contact },
  ];

  return (
    <header className={`sticky top-0 z-50 w-full border-b bg-background/60 backdrop-blur-md transition-all duration-300 ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="container flex h-16 items-center justify-between">
        <Link href={`/${lang}`} className="flex items-center space-x-2 group">
          <Logo className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
          <span className="hidden font-bold sm:inline-block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">DevPortfolio</span>
        </Link>
        
        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <Link href={`/${lang}`} className="flex items-center space-x-2">
              <Logo className="h-6 w-6" />
              <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">DevPortfolio</span>
            </Link>
            <div className="mt-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-8 flex items-center space-x-4">
              <ThemeToggle />
              <LanguageSwitcher />
            </div>
          </SheetContent>
        </Sheet>
          <div className="flex items-center space-x-2">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
