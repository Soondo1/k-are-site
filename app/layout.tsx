// 4. app/layout.tsx
import '../styles/globals.css';
import Navbar from '../components/Navbar';
import {Footer} from '../components/Footer';

export const metadata = {
  title: 'K-are | Foreigner Healthcare Guide in Korea',
  description: 'Centralized guide for foreigners to navigate Korea’s healthcare system.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-darkBlue">
        <Navbar />
        <main className="min-h-screen p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
