'use client';

import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import ThreeBackground from '@/components/ThreeBackground';

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <>
      <ThreeBackground />
      <Navbar />
      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          className="max-w-4xl mx-auto px-4 py-8 w-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </>
  );
}
