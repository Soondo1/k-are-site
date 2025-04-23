// components/Navbar.tsx
'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const pathname = usePathname()

  const navItems = [
    { label: 'Home',    href: '/' },
    { label: 'Articles', href: '/articles' },
    { label: 'About',   href: '/about' },
  ]

  return (
    <header className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-mediumBlue">
          K-are
        </Link>

        {/* Nav links */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map(({ label, href }) => {
            const isActive = pathname === href
            return (
              <Link
                key={href}
                href={href}
                className={`relative pb-2 font-medium ${
                  isActive
                    ? 'text-darkBlue before:absolute before:-bottom-1 before:left-0 before:w-full before:h-1 before:bg-mediumBlue before:rounded-t'
                    : 'text-gray-700 hover:text-darkBlue'
                }`}
              >
                {label}
              </Link>
            )
          })}
        </nav>

        {/* MOBILE: hamburger (you can wire this up later) */}
        <button className="md:hidden p-2" title="Open menu" aria-label="Open menu">
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  )
}
