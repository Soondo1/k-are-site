// app/components/GuideCard.tsx
import Link from 'next/link';
import Image from 'next/image';

const GuideCard = () => {
  return (
    <div className="relative w-full bg-blue-900 rounded-lg p-8 text-white flex flex-col md:flex-row items-center overflow-hidden">
      {/* Guide text content */}
      <div className="z-10 w-full md:w-2/3">
        <h1 className="text-4xl font-bold mb-4">Foreigner's Guide to Korea</h1>
        <p className="text-lg mb-6">
          Everything you need to know about navigating Korean healthcare as a foreigner.
        </p>
        <Link href="/guide" className="inline-block">
          <button className="bg-blue-200 hover:bg-blue-300 text-blue-900 font-semibold py-2 px-8 rounded-full transition duration-300">
            View
          </button>
        </Link>
      </div>
      
      {/* Guide illustration */}
      <div className="hidden md:block absolute right-0 md:relative md:w-1/3 h-full">
        <div className="relative h-full w-full">
          <Image
            src="/images/guide-illustration.svg"
            alt="Guide Illustration"
            fill
            style={{ objectFit: 'contain' }}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default GuideCard;