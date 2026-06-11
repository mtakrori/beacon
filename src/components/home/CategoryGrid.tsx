'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Category {
  name: string;
  image: string;
  href: string;
}

interface Collection {
  title: string;
  subtitle: string;
  aspect: string;
  categories: Category[];
}

const collections: Collection[] = [
  {
    title: 'Brass Collection',
    subtitle: 'Handcrafted Heritage',
    aspect: 'aspect-[2/3]',
    categories: [
      { name: 'CHANDELIERS', image: '/images/categories/brass-chandeliers.jpg', href: '/products?category=Chandeliers' },
      { name: 'CEILINGS', image: '/images/categories/brass-ceilings.jpg', href: '/products?category=Ceilings' },
      { name: 'LANTERNS', image: '/images/categories/brass-lanterns.jpg', href: '/products?category=Lanterns' },
      { name: 'WALL BRACKETS', image: '/images/categories/brass-wall-brackets.jpg', href: '/products?category=Wall Brackets' },
      { name: 'TABLE LAMPS', image: '/images/categories/brass-table-lamps.jpg', href: '/products?category=Table Lamps' },
      { name: 'FLOOR LAMPS', image: '/images/categories/brass-floor-lamps.jpg', href: '/products?category=Floor Lamps' },
      { name: 'ACCESSORIES', image: '/images/categories/brass-accessories.jpg', href: '/products?category=Accessories' },
    ],
  },
  {
    title: 'Crystal Collection',
    subtitle: 'Brilliance Refined',
    aspect: 'aspect-[2/3]',
    categories: [
      { name: 'GLASS CHANDELIERS', image: '/images/categories/crystal-glass-chandeliers.jpg', href: '/products?category=Glass Chandeliers' },
      { name: 'MARIA THERESA CHANDELIERS', image: '/images/categories/crystal-maria-theresa.jpg', href: '/products?category=Maria Theresa' },
      { name: 'LARGE CRYSTAL CHANDELIERS', image: '/images/categories/crystal-large-chandeliers.jpg', href: '/products?category=Large Crystal Chandeliers' },
      { name: 'CRYSTAL LANTERNS', image: '/images/categories/crystal-lanterns.jpg', href: '/products?category=Crystal Lanterns' },
      { name: 'CRYSTAL CEILING', image: '/images/categories/crystal-ceiling.jpg', href: '/products?category=Crystal Ceiling' },
      { name: 'CRYSTAL WALL LIGHT', image: '/images/categories/crystal-wall-light.jpg', href: '/products?category=Crystal Wall Light' },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

function CategoryCard({ cat, aspect }: { cat: Category; aspect: string }) {
  return (
    <motion.div variants={itemVariants}>
      <Link href={cat.href} className={`group relative block ${aspect} overflow-hidden`}>
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${cat.image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 group-hover:from-black/70 group-hover:via-black/20 transition-all duration-500" />
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute inset-0 flex items-end justify-center p-5 md:p-6">
          <span className="text-white text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-center transition-all duration-500 group-hover:text-primary">
            {cat.name}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function CategoryGrid() {
  return (
    <section id="collections" className="py-28 bg-background relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 space-y-24">
        {collections.map((collection) => (
          <div key={collection.title}>
            {/* Collection Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="text-center mb-14"
            >
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase block mb-4">{collection.subtitle}</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">
                {collection.title}
              </h2>
              <div className="diamond-divider mt-6">
                <div className="diamond" />
              </div>
            </motion.div>

            {/* Category Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5"
            >
              {collection.categories.map((cat) => (
                <CategoryCard key={cat.name} cat={cat} aspect={collection.aspect} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
