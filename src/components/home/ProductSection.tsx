'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

interface ProductSectionProps {
  title: string;
  subtitle?: string;
  products: Product[];
  bannerImage?: string;
  bannerTitle?: string;
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
  }
};

export default function ProductSection({ title, subtitle, products, bannerImage, bannerTitle }: ProductSectionProps) {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Subtle ambient glow */}
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[400px] bg-primary/[0.03] rounded-full blur-[200px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Optional Banner */}
        {bannerImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative w-full h-[350px] md:h-[450px] mb-20 overflow-hidden flex items-center justify-center group"
          >
            <div 
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[1.5s] ease-out group-hover:scale-105"
              style={{ backgroundImage: `url(${bannerImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            
            {/* Decorative frame */}
            <div className="absolute inset-8 md:inset-16 border border-white/10 pointer-events-none z-10" />
            
            <div className="relative z-20 text-center">
              <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase block mb-4">Exclusive</span>
              <h2 className="text-4xl md:text-6xl font-serif text-white tracking-wider uppercase">
                {bannerTitle}
              </h2>
            </div>
          </motion.div>
        )}

        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          {subtitle && (
            <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase block mb-4">{subtitle}</span>
          )}
          <h3 className="text-2xl md:text-4xl font-serif text-white tracking-wide">
            {title}
          </h3>
          <div className="diamond-divider mt-6">
            <div className="diamond" />
          </div>
        </motion.div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6"
        >
          {products.map((product) => (
            <motion.div 
              key={product.id} 
              variants={cardVariants}
              className="group relative glass-card overflow-hidden"
            >
              {/* Product Image */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-700 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${product.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover WhatsApp Enquiry */}
                <div className="absolute top-4 right-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <a 
                    href={`https://wa.me/97430305180?text=Hi%20Beacon,%20I'm%20interested%20in%20learning%20more%20about%20the%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 bg-primary text-primary-foreground hover:bg-yellow-500 shadow-[0_4px_20px_rgba(253,186,18,0.3)] rounded-full transition-all duration-300"
                    title="Enquire on WhatsApp"
                  >
                    <MessageSquare size={16} />
                  </a>
                </div>
              </div>
              
              {/* Details */}
              <div className="p-5 text-center">
                <p className="text-[10px] text-primary/70 uppercase tracking-[0.25em] mb-2 font-semibold">
                  {product.category}
                </p>
                <h4 className="text-sm font-semibold text-white mb-3 line-clamp-1 tracking-wide">
                  {product.name}
                </h4>
                <div className="w-6 h-[1px] bg-primary/30 mx-auto mb-3" />
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] uppercase font-medium">
                  Available On Request
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <Link 
            href="#contact"
            className="group inline-flex items-center gap-3 border border-primary/40 text-primary font-semibold text-xs tracking-[0.2em] uppercase px-10 py-4 hover:bg-primary hover:text-primary-foreground transition-all duration-500 hover:shadow-[0_0_30px_rgba(253,186,18,0.15)]"
          >
            Enquire For Custom Design
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
