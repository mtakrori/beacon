'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Compass } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden py-24 md:py-32">
      {/* Dynamic Background Gradients */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-indigo-500/10 dark:bg-indigo-500/5 rounded-full blur-[100px] animate-pulse duration-10000" />
        <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[35rem] h-[35rem] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-[120px] animate-pulse duration-7000" />
        
        {/* Fine grid pattern for premium architecture feel */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12 text-center flex flex-col items-center">
        {/* Animated Pill Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' as const }}
          className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200/60 dark:border-zinc-800/60 text-xs font-semibold text-zinc-700 dark:text-zinc-300 mb-8 uppercase tracking-widest"
        >
          <Compass size={12} className="text-indigo-500 animate-spin-slow" />
          <span>Curator of Fine Forms</span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" as const }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50 leading-[1.08] mb-6 max-w-4xl"
        >
          Redefining spaces & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 dark:from-indigo-400 dark:via-purple-400 dark:to-emerald-400">design objects.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' as const }}
          className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 font-medium max-w-2xl leading-relaxed mb-12"
        >
          A curated portfolio of high-end custom furniture, rare mechanical timepieces, and modernist residential architecture.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' as const }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a
            href="#products"
            className="group flex items-center gap-2 px-8 h-14 rounded-full bg-zinc-950 dark:bg-zinc-50 hover:bg-zinc-800 dark:hover:bg-zinc-200 text-white dark:text-zinc-950 text-sm font-semibold transition-all duration-300 shadow-xl shadow-zinc-950/10 dark:shadow-none cursor-pointer"
          >
            <span>Explore Collection</span>
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center px-8 h-14 rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-50 text-sm font-semibold transition-colors cursor-pointer"
          >
            Request Commission
          </a>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-zinc-400 dark:text-zinc-600"
        >
          <span className="text-xxs uppercase tracking-widest font-bold">Scroll</span>
          <div className="w-[1px] h-8 bg-zinc-300 dark:bg-zinc-800 relative overflow-hidden">
            <motion.div
              animate={{ y: ['-100%', '100%'] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
              className="absolute top-0 left-0 w-full h-1/2 bg-indigo-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
