'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Search, Globe } from 'lucide-react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'PRODUCTS', href: '/products' },
    { name: 'ABOUT', href: '/#about' },
    { name: 'SERVICES', href: '/#services' },
    { name: 'PROJECTS', href: '/#projects' },
    { name: 'CONTACT', href: '/#contact' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" as const }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-2 glass shadow-[0_4px_30px_rgba(0,0,0,0.3)]'
            : 'py-4 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          {/* Top Row */}
          <div className="relative flex items-center justify-between">

            {/* Mobile Menu Button */}
            <div className="flex md:hidden items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-primary transition-colors focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo - centered on mobile via absolute, left-aligned on desktop */}
            <Link href="/" className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 flex items-center group flex-shrink-0">
              <img
                src="/beacon-logo.svg"
                alt="Beacon — Decor & Light L.L.C"
                className="h-9 md:h-11 w-auto"
              />
            </Link>

            {/* Desktop Navigation - centered */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-[11px] font-semibold tracking-[0.2em] text-zinc-400 hover:text-white transition-all duration-300 relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[1px] bg-gradient-to-r from-transparent via-primary to-transparent group-hover:w-full transition-all duration-500" />
                </Link>
              ))}
            </div>

            {/* Right Icons */}
            <div className="flex items-center gap-3 md:gap-5">
              <button className="hidden md:flex items-center justify-center w-9 h-9 rounded-full border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all duration-300">
                <Search size={14} />
              </button>
              <button className="hidden md:flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-white tracking-wider transition-all duration-300">
                <Globe size={14} />
                <span>EN</span>
              </button>
              <a
                href="https://wa.me/97430305180"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:flex items-center gap-2 bg-primary/10 border border-primary/30 text-primary text-[10px] font-bold tracking-[0.15em] uppercase px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: '-100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 200 }}
            className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm z-40 md:hidden glass-card pt-24 pb-8 flex flex-col"
          >
            {/* Mobile Search */}
            <div className="px-6 mb-10 relative">
              <input
                type="text"
                placeholder="Search showroom..."
                className="w-full bg-white/5 text-white text-sm py-3 px-5 pl-11 border border-white/10 focus:outline-none focus:border-primary transition-colors rounded-none"
              />
              <Search className="absolute left-10 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
            </div>

            <div className="px-6 flex flex-col gap-1 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-sm font-medium tracking-[0.2em] text-zinc-300 hover:text-primary transition-colors border-b border-white/5"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-auto px-6 pt-8">
              <a 
                href="https://wa.me/97430305180"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center bg-primary text-primary-foreground font-bold text-xs tracking-[0.2em] uppercase py-4 hover:bg-yellow-500 transition-colors"
              >
                Get In Touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/70 backdrop-blur-md z-30 md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}
