'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' as const }}
            className="relative aspect-[4/5] overflow-hidden glass-card"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=1000&auto=format&fit=crop)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute inset-6 border border-white/10 pointer-events-none" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' as const, delay: 0.1 }}
          >
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase block mb-4">Who We Are</span>
            <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide mb-2">
              The Excellence of
            </h2>
            <h2 className="text-3xl md:text-5xl font-serif text-gold-gradient tracking-wide mb-8">
              High Quality
            </h2>

            <div className="space-y-5 text-zinc-400 text-sm md:text-base leading-relaxed">
              <p>
                Based in Doha, Qatar — with a presence in Sharjah, UAE — Beacon Décor &amp; Light specializes in manufacturing antique, crystal, and decorative solid brass lighting for architectural, interior, and outdoor applications.
              </p>
              <p>
                From royal palaces and grand mosques to luxury hospitality developments, we engineer luminous masterpieces that honour centuries-old metalworking traditions while embracing contemporary design.
              </p>
              <p>
                Founded with a passion for artistry, our company is built on quality, precision, and elegance. Every piece that leaves our factory embodies an unwavering commitment to artisanal excellence.
              </p>
            </div>

            {/* HYUNDAI LED badge */}
            <div className="mt-8 inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-5 py-3">
              <span className="w-2 h-2 bg-primary rotate-45 flex-shrink-0" />
              <span className="text-sm text-zinc-300">
                Sole distributor for <span className="text-primary font-semibold">HYUNDAI LED</span> in the Middle East
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
