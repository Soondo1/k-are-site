// components/Hero.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function Hero() {
  return (
    <section className="bg-darkBlue rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
      {/* Left side text */}
      <div className="flex-1 text-center md:text-left space-y-4">
        <h2 className="inline-block bg-white text-darkBlue text-3xl md:text-4xl font-bold px-4 py-2 rounded-r-full">
          Foreigner’s Guide to Korea
        </h2>
        <p className="text-lg text-white/90">
          Helping you navigate the Korean healthcare system
        </p>
        <Link
          href="#introduction"
          className="inline-block bg-blue text-white px-6 py-2 rounded-full hover:bg-mediumBlue"
        >
          View
        </Link>
      </div>

      {/* Right side image */}
      <div className="flex-1 max-w-md">
        <Image
          src="/illustration.png"
          alt="Guide illustration"
          width={600}
          height={400}
          className="w-full h-auto"
        />
      </div>
    </section>
  )
}
