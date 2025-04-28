// app/layout.tsx
import React from 'react';
import { Roboto } from 'next/font/google';
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import { Footer } from '../components/Footer';

// Initialize the Roboto font
const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'K-are | Foreigner Healthcare Guide in Korea',
  description: 'Centralized guide for foreigners to navigate Korea\'s healthcare system.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.className}>
      <body className="bg-white text-darkBlue">
        <Navbar />
        <main className="container max-w-7xl px-4 mx-auto my-8">{children}</main>
        <Footer />
      </body>
    </html>
  );
}