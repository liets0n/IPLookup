import type { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: '2025-12-29T08:45:35Z',
      changeFrequency: 'monthly',
      priority: 1
    }
  ]
}
