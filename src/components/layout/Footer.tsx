import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative bg-black pt-20 pb-8 text-sm overflow-hidden">
      {/* Top gold line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-3xl tracking-[0.3em] text-gold-gradient font-bold">
                BEACON
              </span>
            </Link>
            <p className="text-zinc-500 leading-relaxed text-sm">
              Luxury throughout the home. Bringing your vision to life with our premium collections of lighting and decor.
            </p>
            <div className="flex items-center gap-4 text-zinc-600 mt-2">
              <a href="https://www.facebook.com/share/1JRXViCwjY/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(253,186,18,0.15)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="https://www.instagram.com/beaconqatar?igsh=eG00bmp6cDBqeXdw" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(253,186,18,0.15)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="https://wa.me/97430305180" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-300 hover:shadow-[0_0_15px_rgba(253,186,18,0.15)]">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-[0.2em] text-xs uppercase mb-2">Company</h4>
            <Link href="#" className="text-zinc-500 hover:text-primary transition-colors text-sm">About Us</Link>
            <Link href="#" className="text-zinc-500 hover:text-primary transition-colors text-sm">Our Showroom</Link>
            <Link href="#contact" className="text-zinc-500 hover:text-primary transition-colors text-sm">Contact Us</Link>
            <Link href="#" className="text-zinc-500 hover:text-primary transition-colors text-sm">Careers</Link>
          </div>

          {/* Categories */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-[0.2em] text-xs uppercase mb-2">Categories</h4>
            <Link href="#" className="text-zinc-500 hover:text-primary transition-colors text-sm">Chandeliers</Link>
            <Link href="#" className="text-zinc-500 hover:text-primary transition-colors text-sm">Pendant Lights</Link>
            <Link href="#" className="text-zinc-500 hover:text-primary transition-colors text-sm">Wall Lights</Link>
            <Link href="#" className="text-zinc-500 hover:text-primary transition-colors text-sm">Table Lamps</Link>
          </div>

          {/* Contact Us */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-[0.2em] text-xs uppercase mb-2">Contact Us</h4>
            <div className="flex flex-col gap-3 text-sm text-zinc-500">
              <a href="https://wa.me/97430305180" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.21 12 19.79 19.79 0 0 1 1.14 3.38 2 2 0 0 1 3.12 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +974 3030 5180
              </a>
              <a href="mailto:info@beaconqatar.com" className="hover:text-primary transition-colors flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                info@beaconqatar.com
              </a>
              <div className="flex items-start gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                Doha, Qatar
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-600">
          <p>&copy; {new Date().getFullYear()} Beacon Qatar. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primary transition-colors">Showrooms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
