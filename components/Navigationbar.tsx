import Link from 'next/link';

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
})

export default function Navbar() {
  return (
    <div className={montserrat.className}>
        <nav className="bg-[#FFD700] text-[#000000] py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        {/* Reservation System Title */}
        <div className="text-xl font-bold">
          Game Room Reservation System
        </div>

        {/* Navigation Links */}
        <div className="space-x-6">
          <Link href="/">
           Home
          </Link>
          <Link href="/calendar">
           Calendar
          </Link>
        </div>
      </div>
    </nav>
    </div>
    
  );
}
