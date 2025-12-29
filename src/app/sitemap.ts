import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://thereperio.com',
      lastModified: '2025-12-29T08:45:35Z',
      changeFrequency: 'monthly',
      priority: 1
    }
  ]
}
