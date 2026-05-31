'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Gem, Layers, ShieldCheck, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: <Gem size={26} />,
    title: 'Solid Brass',
    text: 'Premium-grade solid brass — 1mm–8mm for cast items, 0.6mm–0.8mm for handmade pieces. Never hollow tubing or plated alloys.',
  },
  {
    icon: <Layers size={26} />,
    title: 'Premium Diffusers',
    text: 'We use 4mm glass or clear / opal non-yellowing PMMA sheets for a flawless, lasting finish.',
  },
  {
    icon: <ShieldCheck size={26} />,
    title: '15-Year Guarantee',
    text: 'Our brass is specially treated for protection, guaranteed against dust and tarnishing under proper use.',
  },
  {
    icon: <Lightbulb size={26} />,
    title: 'HYUNDAI LED',
    text: 'Sole distributor for HYUNDAI LED lighting across the Middle East — energy-efficient and reliable.',
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function WhyBeacon() {
  return (
    <section className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-black to-zinc-950" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase block mb-4">Our Craftsmanship</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">Why Beacon</h2>
          <div className="diamond-divider mt-6">
            <div className="diamond" />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={itemVariants}
              className="glass-card p-8 flex flex-col items-center text-center group hover:border-primary/30 transition-colors duration-500"
            >
              <div className="w-14 h-14 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                {f.icon}
              </div>
              <h3 className="text-base font-semibold text-white tracking-wide mb-3 uppercase">{f.title}</h3>
              <div className="w-8 h-[1px] bg-primary/30 mb-4" />
              <p className="text-zinc-500 text-sm leading-relaxed">{f.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
