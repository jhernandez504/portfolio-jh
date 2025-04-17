import './globals.css'
import Navbar from '@/components/Navbar'
import GradientWrapper from '../components/GradientWrapper';

export const metadata = {
  title: "Jeremy's Portfolio",
  description: 'A developer portfolio built with Next.js + Tailwind + TypeScript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="text-black dark:text-white">
        <GradientWrapper>
          <Navbar />
          <main className="max-w-4xl mx-auto px-4 py-8 min-h-screen w-full">{children}</main>
        </GradientWrapper>
      </body>
    </html>
  )
}
