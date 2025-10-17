import Link from 'next/link';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/i18n-config';
import { Button } from '@/components/ui/button';
import { PageTransition } from '@/components/PageTransition';
import { GithubIcon } from '@/components/icons/Github';
import { LinkedinIcon } from '@/components/icons/Linkedin';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <PageTransition>
      <section className="relative container mx-auto flex h-[calc(100vh-8.2rem)] items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-sky-200/30 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-200/30 dark:bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-sky-100/20 to-cyan-100/20 dark:from-blue-500/10 dark:to-cyan-500/10 rounded-full blur-2xl animate-float"></div>
        </div>
        
        <div className="relative z-10">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-gray-500 dark:text-gray-300 animate-float-delayed text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">{dictionary.homepage.greeting}</span>
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-teal-600 bg-clip-text text-transparent font-semibold leading-tight">{dictionary.homepage.name}</span>
          </h1>
          <p className="mt-6 text-lg text-gray-700 dark:text-gray-200 sm:text-xl md:text-2xl font-medium">
            {dictionary.homepage.role}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base text-gray-700 dark:text-gray-200 md:text-lg leading-relaxed">
            {dictionary.homepage.intro}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              asChild 
              size="lg" 
              className="group relative bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-500 dark:to-cyan-400 text-white dark:text-background hover:from-blue-700 hover:to-cyan-600 dark:hover:from-blue-600 dark:hover:to-cyan-500 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 px-8 py-3 text-lg font-semibold"
            >
              <Link href={`/${lang}/projects`}>
                View My Work →
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline"
              size="lg" 
              className="group relative border-2 border-blue-200 dark:border-blue-400 text-blue-600 dark:text-blue-400 bg-white dark:bg-transparent hover:bg-blue-50 dark:hover:bg-blue-500/10 transition-all duration-300 hover:-translate-y-1 px-8 py-3 text-lg font-semibold"
            >
              <Link href={`/${lang}/contact`}>
                Get In Touch
              </Link>
            </Button>
          </div>
          
          <div className="mt-8 flex justify-center space-x-6">
            <Link 
              href="https://github.com/sasegura" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <GithubIcon className="h-6 w-6" />
            </Link>
            <Link 
              href="https://www.linkedin.com/in/sergio-segura-fernandez87/" 
              target="_blank" 
              rel="noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300 hover:scale-110 p-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
            >
              <LinkedinIcon className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
