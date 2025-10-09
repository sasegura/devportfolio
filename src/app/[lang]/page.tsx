import Link from 'next/link';
import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/i18n-config';
import { Button } from '@/components/ui/button';
import { PageTransition } from '@/components/PageTransition';

export default async function Home({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);

  return (
    <PageTransition>
      <section className="container mx-auto flex h-[calc(100vh-8rem)] items-center justify-center text-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            <span className="block text-muted-foreground">{dictionary.homepage.greeting}</span>
            <span className="block text-primary">{dictionary.homepage.name}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl md:text-2xl">
            {dictionary.homepage.role}
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground md:text-lg">
            {dictionary.homepage.intro}
          </p>
          <div className="mt-8 flex justify-center">
            <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
              <Link href={`/${lang}/projects`}>{dictionary.homepage.cta}</Link>
            </Button>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
