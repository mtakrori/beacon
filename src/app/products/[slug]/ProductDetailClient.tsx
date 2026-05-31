'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, MessageSquare, ChevronLeft, ChevronRight, Check, Truck, HeadphonesIcon, ShieldCheck, PackageCheck } from 'lucide-react';
import type { MockProduct } from '@/sanity/client';

const trustBadges = [
  { icon: <Truck size={22} />, label: 'Free Delivery', sub: 'Across Qatar' },
  { icon: <HeadphonesIcon size={22} />, label: 'Dedicated', sub: 'Customer Service' },
  { icon: <ShieldCheck size={22} />, label: '1-Year', sub: "Manufacturer's Warranty" },
  { icon: <PackageCheck size={22} />, label: 'Transit Damage', sub: 'Replacement' },
];

export default function ProductDetailClient({ product }: { product: MockProduct }) {
  const images = product.galleryUrls?.length ? product.galleryUrls : [product.thumbnailUrl];
  const [selected, setSelected] = useState(0);
  const [activeVariant, setActiveVariant] = useState(product.variants?.[0] ?? null);
  const [qty, setQty] = useState(1);

  const prev = () => setSelected((i) => (i === 0 ? images.length - 1 : i - 1));
  const next = () => setSelected((i) => (i === images.length - 1 ? 0 : i + 1));

  const waMessage = encodeURIComponent(
    `Hi Beacon, I'm interested in the ${product.title}${activeVariant ? ` (${activeVariant})` : ''}, qty: ${qty}. Could you share more details and pricing?`
  );

  return (
    <main className="min-h-screen bg-background pt-24 pb-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-[11px] text-zinc-600 uppercase tracking-[0.2em] mb-10">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
          <span>/</span>
          <span className="text-zinc-400">{product.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* ── LEFT: Gallery ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          >
            {/* Main image */}
            <div className="relative aspect-[4/4] overflow-hidden glass-card group mb-3">
              <div
                key={selected}
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.03]"
                style={{ backgroundImage: `url(${images[selected]})` }}
              />

              {/* Nav arrows */}
              {images.length > 1 && (
                <>
                  <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 border border-white/10 text-white hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-300 z-10">
                    <ChevronLeft size={16} />
                  </button>
                  <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-black/60 border border-white/10 text-white hover:border-primary hover:text-primary flex items-center justify-center transition-all duration-300 z-10">
                    <ChevronRight size={16} />
                  </button>
                </>
              )}

              {product.featuredItem && (
                <div className="absolute top-4 left-4 z-10">
                  <span className="text-[9px] font-bold tracking-[0.25em] uppercase text-primary bg-black/70 backdrop-blur-sm px-3 py-1 border border-primary/30">
                    Featured
                  </span>
                </div>
              )}

              {/* Dot indicators */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {images.map((_, i) => (
                    <button key={i} onClick={() => setSelected(i)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${i === selected ? 'bg-primary w-4' : 'bg-white/30 hover:bg-white/60'}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex gap-2">
                {images.map((img, i) => (
                  <button key={i} onClick={() => setSelected(i)}
                    className={`relative flex-1 aspect-square overflow-hidden transition-all duration-300 ${selected === i ? 'ring-1 ring-primary' : 'opacity-40 hover:opacity-70'}`}
                  >
                    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${img})` }} />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* ── RIGHT: Product Info ── */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number], delay: 0.1 }}
            className="flex flex-col"
          >
            {/* Categories */}
            <div className="flex flex-wrap gap-2 mb-4">
              {product.categories?.map((cat) => (
                <span key={cat} className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary border border-primary/30 px-3 py-1">
                  {cat}
                </span>
              ))}
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-serif text-white tracking-wide mb-5">
              {product.title}
            </h1>

            {/* Stock */}
            <div className="flex flex-col gap-1.5 mb-6">
              <div className="flex items-center gap-2">
                {product.inStock !== false ? (
                  <>
                    <Check size={14} className="text-primary" />
                    <span className="text-sm text-zinc-300">In Stock</span>
                  </>
                ) : (
                  <>
                    <span className="w-3.5 h-3.5 rounded-full border border-zinc-600 flex-shrink-0" />
                    <span className="text-sm text-zinc-500">Available on Order</span>
                  </>
                )}
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-primary" />
                <span className="text-sm text-zinc-300">All Taxes Included</span>
              </div>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-4 gap-0 border border-white/8 mb-7">
              {trustBadges.map((badge, i) => (
                <div key={i} className={`flex flex-col items-center text-center p-4 gap-2 ${i < 3 ? 'border-r border-white/8' : ''}`}>
                  <span className="text-primary">{badge.icon}</span>
                  <div>
                    <p className="text-[10px] font-bold text-white tracking-wide leading-tight">{badge.label}</p>
                    <p className="text-[9px] text-zinc-500 leading-tight mt-0.5">{badge.sub}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Variants */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-7">
                <p className="text-[10px] text-zinc-500 uppercase tracking-[0.25em] font-semibold mb-3">Available Dimensions</p>
                <div className="flex flex-wrap gap-2">
                  {product.variants.map((v) => (
                    <button
                      key={v}
                      onClick={() => setActiveVariant(v)}
                      className={`text-xs font-semibold tracking-[0.15em] uppercase px-5 py-2.5 border transition-all duration-300 ${
                        activeVariant === v
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'border-white/15 text-zinc-400 hover:border-primary/50 hover:text-white'
                      }`}
                    >
                      {v}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* QTY + Primary CTA */}
            <div className="flex items-stretch gap-3 mb-3">
              {/* Qty */}
              <div className="flex items-center border border-white/15">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="w-11 h-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors text-lg">
                  −
                </button>
                <span className="w-10 text-center text-sm font-semibold text-white">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="w-11 h-full flex items-center justify-center text-zinc-400 hover:text-white transition-colors text-lg">
                  +
                </button>
              </div>

              {/* Enquire */}
              <a
                href={`https://wa.me/97430305180?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground font-bold text-xs tracking-[0.2em] uppercase py-4 hover:bg-yellow-500 transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,186,18,0.3)]"
              >
                <MessageSquare size={14} />
                Enquire on WhatsApp
              </a>
            </div>

            {/* Secondary CTA */}
            <a
              href={`https://wa.me/97430305180?text=${encodeURIComponent(`Hi Beacon, I have a question about the ${product.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-white/15 text-zinc-400 hover:border-primary/50 hover:text-primary text-xs font-semibold tracking-[0.2em] uppercase py-4 transition-all duration-300 mb-8"
            >
              <MessageSquare size={13} />
              Ask About This Product
            </a>

            {/* Specs */}
            {(product.description || product.material || product.dimensions) && (
              <div className="border-t border-white/8 pt-7 space-y-4">
                {product.description && (
                  <p className="text-sm text-zinc-400 leading-relaxed">{product.description}</p>
                )}
                {product.material && (
                  <div className="flex gap-3 text-sm">
                    <span className="text-zinc-600 w-28 flex-shrink-0 text-[11px] uppercase tracking-wider">Material</span>
                    <span className="text-zinc-300">{product.material}</span>
                  </div>
                )}
                {product.dimensions && (
                  <div className="flex gap-3 text-sm">
                    <span className="text-zinc-600 w-28 flex-shrink-0 text-[11px] uppercase tracking-wider">Dimensions</span>
                    <span className="text-zinc-300">{product.dimensions}</span>
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-white/5">
          <Link href="/products" className="inline-flex items-center gap-2 text-zinc-500 hover:text-primary text-xs tracking-[0.2em] uppercase font-semibold transition-colors duration-300">
            <ArrowLeft size={13} />
            Back to All Products
          </Link>
        </div>
      </div>
    </main>
  );
}
