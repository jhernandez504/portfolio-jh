'use client'

import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="py-4 border-b">
      <ul className="flex gap-6 justify-center text-lg font-medium">
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/projects">Projects</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;