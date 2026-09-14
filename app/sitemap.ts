import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  // Replace with your actual production domain
  const baseUrl = "https://saasscale.in";

  const routes = [
    '',
    '/aboutus',
    '/our-work',
    '/pricing',
    '/privacy',
    '/products',
    '/services',
    '/contact',
    '/tooling',
    '/tooling/appsonair',
    '/tooling/base64decode',
    '/tooling/generatecronjob',
    '/tooling/jsoneditor',
    '/tooling/scalesaasad',
    '/tooling/sqlformater',
    '/tooling/webviewmobile',
    '/tooling/writeymlfiles',
    '/bestjsoneditor',
    '/thankyou'
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route.includes('/tooling/') ? 0.6 : 0.8,
  }));
}
