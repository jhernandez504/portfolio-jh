import './globals.css'
import Navbar from '@/components/Navbar'
import GradientWrapper from '../components/GradientWrapper';
import { Roboto } from 'next/font/google';
import ThreeBackground from '@/components/ThreeBackground';

export const metadata = {
  title: "Jeremy's Portfolio",
  description: 'A developer portfolio built with Next.js + Tailwind + TypeScript',
}

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'], // add any weights you plan to use
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="text-black dark:text-white">
          <ThreeBackground />
          <Navbar />
          <main className="max-w-4xl mx-auto px-4 py-8 w-full">{children}</main>
      </body>
    </html>
  )
}
