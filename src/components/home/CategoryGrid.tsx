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
  categories: Category[];
}

const collections: Collection[] = [
  {
    title: 'Brass Collection',
    subtitle: 'Handcrafted Heritage',
    categories: [
      { name: 'CHANDELIERS', image: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=800&auto=format&fit=crop', href: '/products?category=Chandeliers' },
      { name: 'CEILINGS', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop', href: '/products?category=Ceilings' },
      { name: 'LANTERNS', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=800&auto=format&fit=crop', href: '/products?category=Lanterns' },
      { name: 'WALL BRACKETS', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop', href: '/products?category=Wall Brackets' },
      { name: 'TABLE LAMPS', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop', href: '/products?category=Table Lamps' },
      { name: 'FLOOR LAMPS', image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=800&auto=format&fit=crop', href: '/products?category=Floor Lamps' },
      { name: 'ACCESSORIES', image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?q=80&w=800&auto=format&fit=crop', href: '/products?category=Accessories' },
    ],
  },
  {
    title: 'Crystal Collection',
    subtitle: 'Brilliance Refined',
    categories: [
      { name: 'CRYSTAL CHANDELIERS', image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop', href: '/products?category=Crystal Chandeliers' },
      { name: 'LARGE CRYSTAL CHANDELIERS', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop', href: '/products?category=Large Crystal Chandeliers' },
      { name: 'CRYSTAL CEILING', image: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?q=80&w=800&auto=format&fit=crop', href: '/products?category=Crystal Ceiling' },
      { name: 'CRYSTAL WALL LIGHT', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop', href: '/products?category=Crystal Wall Light' },
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

function CategoryCard({ cat }: { cat: Category }) {
  return (
    <motion.div variants={itemVariants}>
      <Link href={cat.href} className="group relative block aspect-[4/3] overflow-hidden">
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
                <CategoryCard key={cat.name} cat={cat} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
}
