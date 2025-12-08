import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'IPLookup',
  description:
    'IPLookup oferece análise avançada de endereços IP com dados geográficos, rede, reputação e provedor. Rápido, preciso e ideal para equipas técnicas.'
}

type Props = Readonly<{ children: React.ReactNode }>

export default function RootLayout({ children }: Props) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
