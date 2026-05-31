'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';
import type { MockProduct } from '@/sanity/client';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] } },
};

export default function ProductsClient({ products }: { products: MockProduct[] }) {
  const allCategories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.categories?.forEach((c) => set.add(c)));
    return ['All', ...Array.from(set)];
  }, [products]);

  const [active, setActive] = useState('All');

  const filtered = useMemo(
    () => (active === 'All' ? products : products.filter((p) => p.categories?.includes(active))),
    [active, products]
  );

  return (
    <main className="min-h-screen bg-background pt-28 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase block mb-4">
            Our Collection
          </span>
          <h1 className="text-4xl md:text-6xl font-serif text-white tracking-wide mb-4">
            All Products
          </h1>
          <div className="diamond-divider mt-6 mb-12">
            <div className="diamond" />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`text-[11px] font-semibold tracking-[0.2em] uppercase px-5 py-2 border transition-all duration-300 ${
                  active === cat
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'border-white/10 text-zinc-400 hover:border-primary/50 hover:text-primary'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          key={active}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6"
        >
          {filtered.map((product) => (
            <motion.div key={product._id} variants={cardVariants} className="group glass-card overflow-hidden">
              {/* Image */}
              <Link href={`/products/${product.slug.current}`} className="block relative aspect-[3/4] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.thumbnailUrl})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {product.featuredItem && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-primary bg-black/70 backdrop-blur-sm px-3 py-1 border border-primary/30">
                      Featured
                    </span>
                  </div>
                )}

                <div className="absolute top-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10">
                  <a
                    href={`https://wa.me/97430305180?text=Hi%20Beacon,%20I'm%20interested%20in%20${encodeURIComponent(product.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground hover:bg-yellow-500 rounded-full shadow-[0_4px_20px_rgba(253,186,18,0.3)] transition-colors duration-300"
                    title="Enquire on WhatsApp"
                  >
                    <MessageSquare size={15} />
                  </a>
                </div>
              </Link>

              {/* Info */}
              <Link href={`/products/${product.slug.current}`} className="block p-5 text-center">
                <p className="text-[10px] text-primary/70 uppercase tracking-[0.25em] mb-2 font-semibold">
                  {product.categories?.[0]}
                </p>
                <h3 className="text-sm font-semibold text-white mb-3 line-clamp-1 tracking-wide">
                  {product.title}
                </h3>
                <div className="w-6 h-[1px] bg-primary/30 mx-auto mb-3" />
                {product.material && (
                  <p className="text-zinc-600 text-[10px] tracking-[0.15em] line-clamp-1">{product.material}</p>
                )}
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-zinc-500 py-20 text-sm tracking-widest uppercase">
            No products in this category yet.
          </p>
        )}
      </div>
    </main>
  );
}
