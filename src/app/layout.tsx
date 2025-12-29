import type { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://iplookupt.vercel.app'),
  alternates: {
    canonical: 'https://iplookupt.vercel.app'
  },

  applicationName: 'IPLookup',
  title: 'IPLookup',
  description:
    'IPLookup provides advanced IP address analysis with geographic, network, reputation, and provider data. Fast, accurate, and ideal for technical teams.',
  keywords: [
    'IP lookup',
    'IP address lookup',
    'check IP address',
    'what is my IP',
    'IP geolocation',
    'IP location finder',
    'find IP location',
    'IP address checker',
    'trace IP address',
    'IP tracker',
    'free IP lookup',
    'IP address locator',
    'geolocation by IP',
    'public IP lookup',
    'ISP lookup'
  ],

  authors: [
    {
      name: 'Lietson Dos Santos',
      url: 'https://www.linkedin.com/in/lietsondosantos'
    }
  ],
  creator: 'Lietson Dos Santos',
  publisher: 'IPLookup Tool',

  openGraph: {
    title: 'IPLookup - Free IP Address Lookup Tool',
    description:
      'Discover your public IP address instantly. Get detailed information about your IPv4/IPv6, location, ISP, and network details with our free tool.',
    url: 'https://iplookupt.vercel.app/',
    siteName: 'IPLookup',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/opengraph-image.png',
        width: 1200,
        height: 630,
        alt: 'IPLookup - Free IP Address Lookup Tool',
        type: 'image/png'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@iplookup',
    creator: '@lietsondosantos',
    title: 'IPLookup - Free IP Address Lookup Tool',
    description:
      'Discover your public IP address instantly. Get detailed information about your IPv4/IPv6, location, ISP, and network details with our free tool.',
    images: ['/opengraph-image.png']
  }
}

type Props = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
