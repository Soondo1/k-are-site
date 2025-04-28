// components/Hero.tsx
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="flex flex-col overflow-hidden rounded-lg md:flex-row bg-darkBlue">
      <div className="flex flex-col justify-center w-full p-8 space-y-4 md:w-1/2">
        <h2 className="text-3xl font-bold text-white md:text-4xl">
          Foreigner's Guide to Korea
        </h2>
        <p className="mb-6 text-xl text-blue-100">
          Helping you navigate the Korean healthcare system
        </p>
        <div>
          <Link
            href="/guide"
            className="inline-block px-6 py-3 font-medium transition-colors rounded-full bg-blue hover:bg-mediumBlue text-darkBlue"
          >
            View
          </Link>
        </div>
      </div>
      <div className="flex items-center justify-center w-full p-8 md:w-1/2">
        <div className="relative w-64 h-64">
          {/* Book illustration */}
          <div className="absolute w-40 h-56 transform rotate-6 rounded-lg bg-lightBlue right-2"></div>
          <div className="absolute w-40 h-56 transform -rotate-6 rounded-lg bg-blue left-2"></div>
          <div className="absolute w-40 h-56 rounded-lg shadow-lg bg-mediumBlue"></div>
          <div className="absolute w-1 h-48 rounded-full bg-darkBlue left-20 top-4"></div>
        </div>
      </div>
    </section>
  );
}