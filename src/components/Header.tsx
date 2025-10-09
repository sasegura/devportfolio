import Link from 'next/link';
import { Menu } from 'lucide-react';

import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/i18n-config';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Logo } from './icons/Logo';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export async function Header({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);
  const navItems = [
    { href: `/${lang}`, label: dictionary.navigation.home },
    { href: `/${lang}/about`, label: dictionary.navigation.about },
    { href: `/${lang}/projects`, label: dictionary.navigation.projects },
    { href: `/${lang}/contact`, label: dictionary.navigation.contact },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link href={`/${lang}`} className="mr-6 flex items-center space-x-2">
            <Logo className="h-6 w-6 text-primary" />
            <span className="hidden font-bold sm:inline-block">DevPortfolio</span>
          </Link>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
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
          <SheetContent side="left">
            <Link href={`/${lang}`} className="flex items-center space-x-2">
              <Logo className="h-6 w-6 text-primary" />
              <span className="font-bold">DevPortfolio</span>
            </Link>
            <div className="mt-6 flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium transition-colors hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
