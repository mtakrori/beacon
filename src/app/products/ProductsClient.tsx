'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { MessageSquare, Search, X } from 'lucide-react';
import type { MockProduct } from '@/sanity/client';

const PAGE_SIZE = 48;

export default function ProductsClient({ products }: { products: MockProduct[] }) {
  const allCategories = useMemo(() => {
    const set = new Set<string>();
    products.forEach((p) => p.categories?.forEach((c) => set.add(c)));
    return ['All', ...Array.from(set)];
  }, [products]);

  const searchParams = useSearchParams();
  const [active, setActive] = useState('All');
  const [search, setSearch] = useState('');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  // Reset how many are shown whenever the filter or search changes
  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [active, search]);

  // Sync filter with ?category= from category links on the homepage
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat && allCategories.includes(cat)) {
      setActive(cat);
    }
  }, [searchParams, allCategories]);

  const filtered = useMemo(() => {
    let result = active === 'All' ? products : products.filter((p) => p.categories?.includes(active));
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter((p) =>
        p.title?.toLowerCase().includes(q) ||
        p.categories?.some((c) => c.toLowerCase().includes(q)) ||
        p.material?.toLowerCase().includes(q) ||
        p.dimensions?.toLowerCase().includes(q)
      );
    }
    return result;
  }, [active, products, search]);

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

          {/* Search input */}
          <div className="relative max-w-md mx-auto mb-8">
            <Search size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 pointer-events-none" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-white/5 border border-white/10 text-white text-sm placeholder-zinc-500 pl-10 pr-10 py-3 outline-none focus:border-primary/50 transition-colors duration-300 tracking-wide"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-white transition-colors"
              >
                <X size={14} />
              </button>
            )}
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 md:gap-6">
          {filtered.slice(0, visibleCount).map((product) => (
            <div key={product._id} className="group glass-card overflow-hidden">

              {/* Image Section */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Link href={`/products/${product.slug.current}`} className="block absolute inset-0 z-0">
                  {product.thumbnailUrl ? (
                    <img
                      src={`${product.thumbnailUrl}?w=600&q=75&auto=format`}
                      alt={product.title}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center bg-white/[0.02] text-zinc-700 text-[10px] tracking-[0.2em] uppercase">
                      Image coming soon
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {product.featuredItem && (
                    <div className="absolute top-4 left-4 z-10">
                      <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-primary bg-black/70 backdrop-blur-sm px-3 py-1 border border-primary/30">
                        Featured
                      </span>
                    </div>
                  )}
                </Link>

                {/* WhatsApp enquiry */}
                <div className="absolute top-4 right-4 translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-10 pointer-events-none">
                  <a
                    href={`https://wa.me/97430305180?text=Hi%20Beacon,%20I'm%20interested%20in%20${encodeURIComponent(product.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground hover:bg-yellow-500 rounded-full shadow-[0_4px_20px_rgba(253,186,18,0.3)] transition-colors duration-300 pointer-events-auto"
                    title="Enquire on WhatsApp"
                  >
                    <MessageSquare size={15} />
                  </a>
                </div>
              </div>

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
            </div>
          ))}
        </div>

        {/* Load More */}
        {visibleCount < filtered.length && (
          <div className="text-center mt-14">
            <p className="text-zinc-600 text-xs tracking-[0.2em] uppercase mb-5">
              Showing {Math.min(visibleCount, filtered.length)} of {filtered.length}
            </p>
            <button
              onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
              className="inline-flex items-center gap-3 border border-primary/40 text-primary font-semibold text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Load More
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <p className="text-center text-zinc-500 py-20 text-sm tracking-widest uppercase">
            {search ? `No results for "${search}"` : 'No products in this category yet.'}
          </p>
        )}
      </div>
    </main>
  );
}