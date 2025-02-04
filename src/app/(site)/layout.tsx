import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter, Montserrat } from 'next/font/google'
import '../globals.css'

import { Toaster } from '@/components/ui/sonner'
import { Footer, Header } from './_components'
import { COMPANY_NAME } from '@/content/config'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-cormorant-garamond',
})

export const metadata: Metadata = {
  title: COMPANY_NAME,
  description: 'Luxurious, Timeless, Digital Dreamscapes',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${cormorantGaramond.variable} ${montserrat.variable} ${inter.variable} font-sans`}
      >
        <Header />
        <main className="text-background-foreground">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}
