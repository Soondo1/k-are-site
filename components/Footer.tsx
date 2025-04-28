// components/Footer.tsx
import Link from 'next/link';

export function Footer() {
  return (
    <footer className="py-6 bg-lightBlue">
      <div className="container px-4 mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-darkBlue">K-are</h2>
            <p className="text-sm text-gray-600">
              Your guide to Korean healthcare
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            <Link href="/about" className="text-sm text-gray-600 hover:text-darkBlue">
              About Us
            </Link>
            <Link href="/contact" className="text-sm text-gray-600 hover:text-darkBlue">
              Contact
            </Link>
            <Link href="/privacy" className="text-sm text-gray-600 hover:text-darkBlue">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-gray-600 hover:text-darkBlue">
              Terms of Service
            </Link>
          </div>
        </div>
        
        <div className="mt-6 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} K-are. All rights reserved.
        </div>
      </div>
    </footer>
  );
}