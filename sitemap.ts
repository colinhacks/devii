export const sitemap = '';
import glob from 'glob';
import { globals } from './globals';
import { getStaticPaths as getBlogPaths } from './pages/blog/[blog]';

export const generateSitemap = async () => {
  const pagesDir = './pages/**/*.*';
  const posts = await glob.sync(pagesDir);

  const pagePaths = posts
    .filter((path) => !path.includes('['))
    .filter((path) => !path.includes('/_'))
    .map((path) => path.slice(1));

  const blogPaths = await getBlogPaths().paths;

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
      <loc>${globals.url}</loc>
      <lastmod>2020-06-01</lastmod>
  </url>
${[...pagePaths, ...blogPaths].map((path) => {
  const item = [`<url>`];
  item.push(`  <loc>${globals.url}${path}</loc>`);
  item.push(`  <lastmod>2020-06-01</lastmod>`);
  return [`<url>`];
})}
</urlset>`;

  return sitemap;
};
