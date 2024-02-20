import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Event visionary',
  description: 'visionary',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">  
    <head>
    <link rel="icon" href="/Android.png" />
    </head>
      <body suppressHydrationWarning={true}  className={inter.className}>{children}</body>
    </html>
  )
}
