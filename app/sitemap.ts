import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://www.izanagilabs.com/',
    },
    {
      url: 'https://www.izanagilabs.com/privacy',
    },
    {
      url: 'https://www.izanagilabs.com/terms',
    },
  ];
}
