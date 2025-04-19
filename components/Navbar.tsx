// 8. components/Navbar.tsx
export default function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
      <h1 className="text-2xl font-bold text-darkBlue">K-are</h1>
      <ul className="flex flex-wrap space-x-4 text-sm text-gray-700">
        <li><a href="/" className="hover:text-darkBlue">Home</a></li>
        <li><a href="/newsletter" className="hover:text-darkBlue">Newsletter</a></li>
        <li><a href="/articles" className="hover:text-darkBlue">Blog</a></li>
        <li><a href="/community" className="hover:text-darkBlue">Community</a></li>
        <li><a href="/about" className="hover:text-darkBlue">About</a></li>
        <li><a href="/faq" className="hover:text-darkBlue">FAQ</a></li>
      </ul>
    </nav>
  );
}
