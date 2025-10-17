import Link from 'next/link';
import { getDictionary } from '@/lib/dictionary';
import { i18n, type Locale } from '@/i18n-config';
import { Button } from '@/components/ui/button';
import { AlertTriangle } from 'lucide-react';

export default async function NotFound() {
  // For static export, we'll use the default locale
  // In a real deployment, you might want to handle this differently
  const lang: Locale = i18n.defaultLocale;
  const dictionary = await getDictionary(lang);
  const { notFound } = dictionary;

  return (
    <div className="flex min-h-[calc(100vh-8.2rem)] flex-col items-center justify-center text-center">
      <AlertTriangle className="h-16 w-16 text-destructive" />
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        {notFound.title}
      </h1>
      <p className="mt-4 max-w-xl text-lg text-muted-foreground">
        {notFound.message}
      </p>
      <Button asChild className="mt-8 bg-accent text-accent-foreground hover:bg-accent/90">
        <Link href={`/${lang}`}>{notFound.backToHome}</Link>
      </Button>
    </div>
  );
}
