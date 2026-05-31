'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, FileText } from 'lucide-react';
import DownloadModal from '@/components/common/DownloadModal';

export default function ProfileDownloadBanner() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative py-24 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-black to-zinc-950" />
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'radial-gradient(ellipse at 20% 50%, #fdba12 0%, transparent 50%), radial-gradient(ellipse at 80% 50%, #fdba12 0%, transparent 50%)'
        }} />
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

        <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16">

            {/* Left — icon + text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" as const }}
              className="flex items-start gap-6"
            >
              <div className="flex-shrink-0 w-14 h-14 bg-primary/10 border border-primary/30 flex items-center justify-center">
                <FileText size={22} className="text-primary" />
              </div>
              <div>
                <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase block mb-2">
                  Beacon Qatar
                </span>
                <h2 className="text-2xl md:text-3xl font-serif text-white tracking-wide mb-3">
                  Download Our Company Profile
                </h2>
                <p className="text-zinc-500 text-sm leading-relaxed max-w-md">
                  Explore our full portfolio, brand story, and product catalogue in one beautifully crafted document.
                </p>
              </div>
            </motion.div>

            {/* Right — CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" as const, delay: 0.1 }}
              className="flex-shrink-0"
            >
              <button
                onClick={() => setOpen(true)}
                className="group inline-flex items-center gap-3 bg-primary text-primary-foreground font-bold text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-yellow-500 transition-all duration-300 hover:shadow-[0_0_40px_rgba(253,186,18,0.25)]"
              >
                <Download size={14} />
                Download Profile
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <DownloadModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
}
