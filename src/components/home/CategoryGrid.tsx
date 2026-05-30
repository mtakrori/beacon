'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const categories = [
  {
    name: 'CHANDELIERS',
    subtitle: 'Opulent Centerpieces',
    image: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=800&auto=format&fit=crop',
    href: '#chandeliers'
  },
  {
    name: 'PENDANTS',
    subtitle: 'Suspended Artistry',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=800&auto=format&fit=crop',
    href: '#pendants'
  },
  {
    name: 'WALL LIGHTS',
    subtitle: 'Ambient Elegance',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop',
    href: '#wall-lights'
  },
  {
    name: 'TABLE LAMPS',
    subtitle: 'Refined Details',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop',
    href: '#table-lamps'
  },
  {
    name: 'FLOOR LAMPS',
    subtitle: 'Statement Pieces',
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop',
    href: '#floor-lamps'
  },
  {
    name: 'HOME DÉCOR',
    subtitle: 'Curated Accents',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop',
    href: '#decor'
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
  }
};

export default function CategoryGrid() {
  return (
    <section id="collections" className="py-28 bg-background relative">
      {/* Subtle ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase block mb-4">Our Showroom</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">
            Browse by Category
          </h2>
          <div className="diamond-divider mt-6">
            <div className="diamond" />
          </div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5"
        >
          {categories.map((cat) => (
            <motion.div key={cat.name} variants={itemVariants}>
              <Link 
                href={cat.href}
                className="group relative block aspect-[3/4] md:aspect-[4/3] overflow-hidden"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${cat.image})` }}
                />
                {/* Premium gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10 group-hover:from-black/70 group-hover:via-black/20 transition-all duration-500" />
                
                {/* Gold accent line on hover */}
                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col items-center justify-end p-6 md:p-8">
                  <span className="text-xs text-primary/80 tracking-[0.2em] uppercase mb-2 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {cat.subtitle}
                  </span>
                  <span className="text-white text-sm md:text-base font-semibold tracking-[0.25em] uppercase transition-all duration-500 group-hover:text-primary">
                    {cat.name}
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
