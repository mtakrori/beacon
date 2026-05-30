'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden grain-overlay">
      {/* Background Image with Parallax feel */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop")',
        }}
      />
      
      {/* Multi-layered premium overlays */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-black/90 via-black/60 to-black/20" />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/50 via-transparent to-background" />
      <div className="absolute inset-0 z-0 bg-gradient-to-t from-background via-transparent to-transparent" />
      
      {/* Subtle golden ambient light */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px] z-0" />

      {/* Decorative corner accents */}
      <div className="absolute top-32 left-12 w-24 h-24 border-l border-t border-primary/20 z-10 hidden lg:block" />
      <div className="absolute bottom-32 right-12 w-24 h-24 border-r border-b border-primary/20 z-10 hidden lg:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <div className="max-w-2xl">
          {/* Premium sub-heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="w-10 h-[1px] bg-primary" />
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase">Qatar&apos;s Premier Showroom</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] text-white mb-8">
              Luxury <br />
              <span className="text-gold-gradient">throughout</span> <br />
              the home
            </h1>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-base md:text-lg text-zinc-400 mb-12 max-w-lg font-light leading-relaxed"
          >
            Bringing your vision to life with our premium collections of lighting, furniture, and decor — crafted for those who demand the extraordinary.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-start gap-4"
          >
            <Link 
              href="#collections"
              className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-yellow-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,186,18,0.3)]"
            >
              Explore Collections
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
            </Link>
            <a 
              href="https://wa.me/97430305180"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white font-semibold text-xs tracking-[0.2em] uppercase px-10 py-4 hover:border-primary hover:text-primary transition-all duration-300 backdrop-blur-sm"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-zinc-500 uppercase tracking-[0.3em] font-semibold">Scroll</span>
        <div className="w-[1px] h-12 bg-zinc-800 relative overflow-hidden">
          <motion.div 
            animate={{ y: ['-100%', '100%'] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
            className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent to-primary"
          />
        </div>
      </motion.div>
    </section>
  );
}
