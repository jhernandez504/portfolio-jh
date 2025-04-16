import './globals.css'
import Navbar from '@/components/Navbar'

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
      <body className="bg-black text-white">
        <Navbar />
        <main className="max-w-4xl mx-auto px-4 py-8 bg-inherit">{children}</main>
      </body>
    </html>
  )
}