// components/Introduction.tsx
'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="max-w-6xl mx-auto bg-darkBlue rounded-2xl overflow-hidden flex flex-col md:flex-row items-center md:items-stretch p-6 md:p-0 mt-6"
    >
      {/* Left: text + button */}
      <div className="flex-1 p-6 md:p-12 text-center md:text-left">
        <h1 className="text-4xl font-bold text-white mb-4">
          Foreigner’s Guide to Korea
        </h1>
        <p className="text-lg text-white/90 mb-6">
          Helping you navigate the Korean healthcare system
        </p>
        <Link
          href="/articles"
          className="inline-block bg-mediumBlue hover:bg-blue text-white font-medium rounded-full py-2 px-6 transition"
        >
          View
        </Link>
      </div>

      {/* Right: illustration */}
      <div className="flex-1 relative w-full h-48 md:h-auto md:w-auto">
        <Image
          src="/illustration.png"
          alt="Guide illustration"
          fill
          className="object-contain"
        />
      </div>
    </section>
  )
}
