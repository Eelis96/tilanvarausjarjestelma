import Link from "next/link";

import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-montserrat',
})

export default function Footer() {
    return (
      <footer className="bg-[#000000] text-[#FFD700] p-6">
        <div className={montserrat.className}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <div className="text-sm">
            © 2025 Ryhmä rämä. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Link href="/" className="margin-4">
            Privacy Policy
          </Link>
          <Link href="/calendar" className="margin-4">
          Terms of Service
          </Link>
          <Link href="/" className="margin-4">
          Contact
          </Link>
         
          </div>
        </div>
        </div>
        
      </footer>
    );
  }
  