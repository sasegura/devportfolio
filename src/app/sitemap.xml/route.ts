import { i18n } from '@/i18n-config';

const URL = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

export async function GET() {
  const pages = ['', '/about', '/projects', '/contact'];
  const locales = i18n.locales;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${locales
    .map((locale) =>
      pages
        .map(
          (page) => `
    <url>
      <loc>${URL}/${locale}${page}</loc>
      <lastmod>${new Date().toISOString()}</lastmod>
    </url>
  `
        )
        .join('')
    )
    .join('')}
</urlset>
`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
