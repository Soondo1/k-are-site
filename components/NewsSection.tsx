// components/NewsSection.tsx
'use client'

import Link from 'next/link'
import Image from 'next/image'

// hard-coded for now; you can swap this out for your Sanity fetch
const news = [
  {
    slug: 'translation-service-launched',
    title: 'New Medical Translation Service Launched',
    summary:
      'A new translation service helps foreigners communicate at Korean clinics.',
    image: '/news1.jpg',
  },
  {
    slug: 'free-vaccinations-seoul',
    title: 'Free Vaccination Days in Seoul',
    summary:
      'Seoul offers free vaccinations for registered foreigners at public centers.',
    image: '/news2.jpg',
  },
  {
    slug: 'top-foreign-friendly-hospitals',
    title: 'Top Hospitals Accepting Foreigners',
    summary:
      'Here’s our roundup of the Korean hospitals with the best English support.',
    image: '/news3.jpg',
  },
]

export default function NewsSection() {
  return (
    <section className="space-y-6">
      <h3 className="text-2xl font-semibold text-darkBlue">Recent News</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <Link
            key={item.slug}
            href={`/articles/${item.slug}`}
            className="block rounded-2xl overflow-hidden group"
          >
            <div className="relative h-48">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="p-4 bg-white">
              <h4 className="text-lg font-semibold text-darkBlue mb-1">
                {item.title}
              </h4>
              <p className="text-gray-700 text-sm">{item.summary}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
