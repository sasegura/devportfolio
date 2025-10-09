import Link from 'next/link';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import { GithubIcon } from './icons/Github';
import { LinkedinIcon } from './icons/Linkedin';

export async function Footer({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);

  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} DevPortfolio. {dictionary.footer.copy}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="#" target="_blank" rel="noreferrer">
            <GithubIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
          <Link href="#" target="_blank" rel="noreferrer">
            <LinkedinIcon className="h-6 w-6 text-muted-foreground transition-colors hover:text-foreground" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
