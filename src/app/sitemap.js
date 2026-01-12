import { blogsData } from '@/data/blogsData';

export default function sitemap() {
  const baseUrl = 'https://www.exponentialbydesign.com';

  // Static routes
  const routes = [
    '',
    '/about-anuj',
    '/blogs',
    '/book',
    '/community',
    '/contact',
    '/faq',
    '/insights',
    '/learning-hub',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog routes
  const blogRoutes = Object.keys(blogsData).map((slug) => ({
    url: `${baseUrl}/blogs-detail/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes];
}
