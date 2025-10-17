import Link from 'next/link';
import type { Locale } from '@/i18n-config';
import { getDictionary } from '@/lib/dictionary';
import { GithubIcon } from './icons/Github';
import { LinkedinIcon } from './icons/Linkedin';

export async function Footer({ lang }: { lang: Locale }) {
  const dictionary = await getDictionary(lang);

  return (
    <footer className="border-t bg-gradient-to-r from-muted/30 to-primary/5">
      <div className="container flex flex-col items-center justify-between gap-4 py-6 md:h-16 md:flex-row md:py-1">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © {new Date().getFullYear()} <span className="text-primary font-semibold">DevPortfolio</span>. {dictionary.footer.copy}
          </p>
        </div>
        <div className="flex items-center space-x-4">
          <Link 
            href="https://github.com/sasegura" 
            target="_blank" 
            rel="noreferrer"
            className="group p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <GithubIcon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
          <Link 
            href="https://www.linkedin.com/in/sergio-segura-fernandez87/" 
            target="_blank" 
            rel="noreferrer"
            className="group p-2 rounded-lg hover:bg-primary/10 transition-all duration-300 hover:scale-110"
          >
            <LinkedinIcon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
