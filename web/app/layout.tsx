import Header from '@/components/header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/footer'

export const metadata = {
  title: 'GDG San Diego',
  description: 'A community driven learning experience',
}

const inter = Inter({
  display: 'auto',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`bg-primaryWhite h-full scroll-smooth antialiased [font-feature-settings:'ss01'] ${inter.className}`}
    >
      <body className="flex h-full flex-col justify-between">
        <Header />
        <main className="mb-auto">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
