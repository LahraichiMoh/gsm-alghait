import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'I.M. Pro',
  applicationName: 'I.M. Pro',
  description:
    'I.M. Pro — Excellence en construction et travaux divers. Projets résidentiels, commerciaux et industriels.',
  keywords: ['construction', 'travaux', 'bâtiment', 'rénovation', 'maçonnerie', 'I.M. Pro'],
  generator: 'v0.app',
  authors: [{ name: 'I.M. Pro', url: 'https://impro.ma' }],
  creator: 'I.M. Pro',
  publisher: 'I.M. Pro',
  category: 'technology',
  icons: {
    icon: [
      {
        url: '/impro.png',
        sizes: 'any',
        type: 'image/png',
      },
      {
        url: '/impro.png',
        sizes: '64x64',
        type: 'image/png',
      },
    ],
    shortcut: ['/improW.png'],
    apple: [{ url: '/improW.png', sizes: '180x180' }],
  },
  openGraph: {
    type: 'website',
    locale: 'fr_MA',
    url: 'https://impro.ma',
    siteName: 'I.M. Pro',
    title: 'I.M. Pro',
    description:
      'I.M. Pro — Excellence en construction et travaux divers. Projets résidentiels, commerciaux et industriels.',
    images: [
      {
        url: '/improW.png',
        width: 1200,
        height: 630,
        alt: 'I.M. Pro',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'I.M. Pro',
    description:
      'I.M. Pro — Excellence en construction et travaux divers. Projets résidentiels, commerciaux et industriels.',
    images: ['/improW.png'],
  },
  alternates: {
    canonical: 'https://impro.ma',
  },
  metadataBase: new URL('https://impro.ma'),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable} bg-background`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
