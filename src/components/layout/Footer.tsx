import React from 'react';
import Link from 'next/link';

const navLinks = [
  { name: 'Products', href: '/products' },
  { name: 'About', href: '/#about' },
  { name: 'Services', href: '/#services' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Contact', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-10 text-sm overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 flex flex-col items-center text-center">
        {/* Logo */}
        <Link href="/" className="inline-block">
          <img
            src="/beacon-logo.svg"
            alt="Beacon — Decor & Light L.L.C"
            className="h-24 md:h-28 w-auto"
          />
        </Link>

        <p className="text-zinc-500 leading-relaxed max-w-md mt-8">
          Luxury throughout the home. Bringing your vision to life with our premium collections of lighting and decor.
        </p>

        <div className="diamond-divider mt-10">
          <div className="diamond" />
        </div>

        {/* Navigation */}
        <nav className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[11px] font-semibold tracking-[0.25em] uppercase text-zinc-400 hover:text-primary transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Contact details */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 sm:gap-12 text-zinc-400">
          <a href="tel:+97430305180" className="hover:text-primary transition-colors flex items-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/60"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            +974 3030 5180
          </a>
          <a href="mailto:info@beaconqatar.com" className="hover:text-primary transition-colors flex items-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/60"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            info@beaconqatar.com
          </a>
          <div className="flex items-center gap-2.5">
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary/60"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            Doha, Qatar
          </div>
        </div>

        {/* Socials */}
        <div className="flex items-center justify-center gap-4 text-zinc-600 mt-10">
          <a href="https://www.facebook.com/share/1JRXViCwjY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(253,186,18,0.15)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="https://www.instagram.com/beaconqatar?igsh=eG00bmp6cDBqeXdw" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(253,186,18,0.15)]">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 mt-12 pt-8 w-full text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Beacon Décor &amp; Light L.L.C. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
