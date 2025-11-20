import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import SmoothScrollProvider from '@/components/providers/SmoothScrollProvider'
import StructuredData, { organizationSchema } from '@/components/seo/StructuredData'
// import CookieConsent from '@/components/shared/CookieConsent' // Uncomment when adding Google Analytics
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'AlkynTech | Premium Web Development & Automation for Growing Businesses',
  description: 'Stunning custom websites and intelligent workflow automation. Premium development services for forward-thinking businesses worldwide.',
  keywords: ['web development', 'automation', 'premium websites', 'custom development', 'remote services'],
  authors: [{ name: 'AlkynTech' }],
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  openGraph: {
    title: 'AlkynTech | Premium Web Development & Automation',
    description: 'Stunning custom websites and intelligent workflow automation for businesses worldwide.',
    url: 'https://alkyntech.com',
    siteName: 'AlkynTech',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://alkyntech.com/og-default.png',
        width: 1200,
        height: 630,
        alt: 'AlkynTech - Premium Web Development & Automation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AlkynTech | Premium Web Development',
    description: 'Stunning custom websites and automation for businesses worldwide.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <StructuredData data={organizationSchema} />
      </head>
      <body className="font-sans" suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SmoothScrollProvider>
            {children}
          </SmoothScrollProvider>
          {/* <CookieConsent /> */} {/* Uncomment when adding Google Analytics */}
        </ThemeProvider>
      </body>
    </html>
  )
}
