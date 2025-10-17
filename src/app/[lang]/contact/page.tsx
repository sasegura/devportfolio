import { getDictionary } from '@/lib/dictionary';
import type { Locale } from '@/i18n-config';
import { ContactForm } from '@/components/ContactForm';
import { PageTransition } from '@/components/PageTransition';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

export default async function ContactPage({ params }: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const { contact: pageText } = dictionary;

  return (
    <PageTransition>
      <div className="container mx-auto max-w-2xl py-12 px-4 sm:px-6 lg:px-8 h-[calc(100vh-8.2rem)]">
        <Card>
          <CardHeader className="text-center">
            <div className="mx-auto bg-primary text-primary-foreground rounded-full p-3 w-fit mb-4">
               <Mail className="h-8 w-8" />
            </div>
            <CardTitle className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">{pageText.title}</CardTitle>
            <CardDescription className="mt-4 text-lg text-muted-foreground">{pageText.intro}</CardDescription>
          </CardHeader>
          <CardContent>
            <ContactForm dictionary={pageText} />
          </CardContent>
        </Card>
      </div>
    </PageTransition>
  );
}
