'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

function AnimatedCounter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 2000;
          const start = performance.now();
          
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

const stats = [
  { value: 245, suffix: '+', label: 'Projects Completed' },
  { value: 534, suffix: '+', label: 'Satisfied Clients' },
];

export default function SignatureBanner() {
  return (
    <section className="relative w-full py-32 flex items-center justify-center overflow-hidden grain-overlay">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
      
      {/* Decorative golden radial */}
      <div className="absolute inset-0 opacity-10" style={{
        backgroundImage: 'radial-gradient(ellipse at 50% 50%, #fdba12 0%, transparent 60%)'
      }} />
      
      {/* Top/Bottom border lines */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase block mb-6">Trusted Excellence</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide mb-3">
            Architectural & Interior
          </h2>
          <h2 className="text-3xl md:text-5xl font-serif text-gold-gradient tracking-wide mb-6">
            Designers
          </h2>
          <div className="diamond-divider mb-16">
            <div className="diamond" />
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 gap-8 md:gap-12 max-w-2xl mx-auto"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center gap-3 group">
              <div className="text-5xl md:text-6xl font-serif font-bold text-gold-gradient">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="w-8 h-[1px] bg-primary/30 group-hover:w-12 group-hover:bg-primary/60 transition-all duration-500" />
              <span className="text-[10px] md:text-xs tracking-[0.2em] text-zinc-500 uppercase font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
