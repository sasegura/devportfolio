import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';
import { getDictionary } from '@/lib/dictionary';
import { i18n, type Locale } from '@/i18n-config';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: Locale }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  const { title, description, keywords } = dictionary.metadata;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

  return {
    title: title,
    description: description,
    keywords: keywords,
    authors: [{ name: 'Sergio Antonio Segura Fernández' }],
    creator: 'Sergio Antonio Segura Fernández',
    metadataBase: new URL(baseUrl),
    openGraph: {
      title: title,
      description: description,
      url: `${baseUrl}/${lang}`,
      siteName: 'DevPortfolio',
      locale: lang,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: title,
      description: description,
      creator: '@yourhandle',
    },
  };
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Locale }>;
}) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
  return (
    <html lang={lang} className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Sergio Antonio Segura Fernández',
              url: process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000',
              sameAs: [
                'https://github.com/yourhandle',
                'https://www.linkedin.com/in/sergio-segura-fernandez87/',
              ],
              jobTitle: 'Frontend Developer',
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <Header lang={lang} dictionary={dictionary} />
        <main className="flex-1">{children}</main>
        <Footer lang={lang} />
        <Toaster />
      </body>
    </html>
  );
}
