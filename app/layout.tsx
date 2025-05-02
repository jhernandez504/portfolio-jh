import './globals.css';
import { Roboto } from 'next/font/google';

export const metadata = {
  title: "Jeremy's Portfolio",
  description: 'A developer portfolio built with Next.js + Tailwind + TypeScript',
};

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-roboto',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="text-black dark:text-white">
        {children}
      </body>
    </html>
  );
}

