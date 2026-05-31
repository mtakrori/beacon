'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Wrench } from 'lucide-react';

const services = [
  {
    icon: <PenTool size={24} />,
    title: 'Bespoke Design',
    text: 'Full customization from concept to creation. We provide 2D and 3D shop drawings, real-view renderings, and precise lighting-level calculations tailored to your space.',
    points: ['2D & 3D shop drawings', 'Real-view renderings', 'Lighting level calculations'],
  },
  {
    icon: <Wrench size={24} />,
    title: 'End-to-End Solutions',
    text: 'A complete scope of work under one roof — so your project is handled seamlessly from first audit to long-term care.',
    points: ['Auditing & consulting', 'Lighting design & fabrication', 'Installation & maintenance'],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-primary/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase block mb-4">What We Do</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">Our Services</h2>
          <div className="diamond-divider mt-6">
            <div className="diamond" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const }}
              className="glass-card p-8 md:p-10 group hover:border-primary/30 transition-colors duration-500"
            >
              <div className="w-12 h-12 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                {s.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-serif text-white tracking-wide mb-4">{s.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-6">{s.text}</p>
              <ul className="space-y-3">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-3 text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 bg-primary rotate-45 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
