'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const blogPosts = [
  {
    id: '1',
    title: 'Top 10 Lighting Trends for 2026',
    excerpt: 'Discover the most captivating lighting designs that are defining luxury interiors this year.',
    date: 'Oct 15, 2025',
    tag: 'Trends',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'How to Choose the Perfect Chandelier',
    excerpt: 'A comprehensive guide to selecting the ideal chandelier for your space and aesthetic.',
    date: 'Sep 28, 2025',
    tag: 'Guide',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop'
  }
];

export default function BlogGallery() {
  return (
    <section className="py-28 bg-background relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[300px] bg-primary/[0.03] rounded-full blur-[200px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase block mb-4">Journal</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">
            Design Insights
          </h2>
          <div className="diamond-divider mt-6">
            <div className="diamond" />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post, i) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
            >
              <Link 
                href={`#blog-${post.id}`}
                className="group relative block h-[350px] md:h-[450px] overflow-hidden"
              >
                {/* Background Image */}
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out group-hover:scale-110"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                {/* Gold accent line */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-gold-light group-hover:w-full transition-all duration-700" />
                
                {/* Tag */}
                <div className="absolute top-6 left-6 z-10">
                  <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-primary bg-black/60 backdrop-blur-sm px-4 py-1.5 border border-primary/20">
                    {post.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 z-10">
                  <p className="text-zinc-500 text-[10px] font-semibold tracking-[0.2em] uppercase mb-3">
                    {post.date}
                  </p>
                  <h3 className="text-xl md:text-2xl font-serif text-white mb-3 group-hover:text-gold-gradient">
                    {post.title}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed mb-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 max-w-md">
                    {post.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-2 text-primary text-xs tracking-[0.2em] uppercase font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    Read Article
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
