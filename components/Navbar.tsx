// components/Navbar.tsx
"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="border-b border-gray-200">
      <div className="container flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        {/* Logo */}
        <Link href="/" className="text-2xl font-semibold text-mediumBlue">
          K-are
        </Link>

        {/* Search Bar */}
        <div className="hidden md:block flex-grow max-w-lg mx-12">
          <div className="relative">
            <input
              type="text"
              className="w-full py-2 pl-10 pr-4 text-gray-700 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-mediumBlue"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* User Actions */}
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex md:space-x-2">
            <button 
              className="w-10 h-10 p-2 text-gray-500 bg-gray-200 rounded-full hover:bg-gray-300" 
              title="Add"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M12 8v8M8 12h8"></path>
              </svg>
            </button>
            <button 
              className="w-10 h-10 p-2 text-gray-500 bg-gray-200 rounded-full hover:bg-gray-300" 
              title="Profile"
            >
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </button>
            <button className="w-10 h-10 p-2 text-gray-500 bg-gray-200 rounded-full hover:bg-gray-300" title="Notifications">
              <svg 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
              </svg>
            </button>
          </div>
          
          <Link 
            href="/login" 
            className="px-5 py-2 text-blue-800 bg-blue-200 rounded-full hover:bg-blue-300"
          >
            Sign In
          </Link>
        </div>
      </div>

      {/* Navigation */}
      <nav className="container px-4 mx-auto overflow-x-auto max-w-7xl">
        <div className="flex space-x-8 text-gray-700 whitespace-nowrap">
          <Link 
            href="/" 
            className="relative px-4 py-4 font-medium transition-colors hover:text-darkBlue hover:border-b-2 hover:border-mediumBlue border-b-2 border-mediumBlue text-darkBlue"
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="px-4 py-4 font-medium transition-colors hover:text-darkBlue hover:border-b-2 hover:border-mediumBlue border-b-2 border-transparent"
          >
            About
          </Link>
          <Link 
            href="/articles" 
            className="px-4 py-4 font-medium transition-colors hover:text-darkBlue hover:border-b-2 hover:border-mediumBlue border-b-2 border-transparent"
          >
            Blog
          </Link>
        </div>
      </nav>
    </header>
  );
}