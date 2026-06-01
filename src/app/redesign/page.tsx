'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Gem, Layers, ShieldCheck, Lightbulb, PenTool, Wrench, ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react';

/* ─────────────────────────────────────────────
   DESIGN TOKENS
   Style: Liquid Glass × Dark Luxury
   Palette: Obsidian / Amber-Gold / Iridescent
   Fonts: Bodoni Moda + Jost (via CSS vars from layout)
───────────────────────────────────────────── */

// ── Animated counter ──────────────────────────────────────────────────────
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const ran = useRef(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !ran.current) {
        ran.current = true;
        const dur = 2200;
        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / dur, 1);
          const ease = 1 - Math.pow(1 - t, 4);
          setVal(Math.floor(ease * target));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }
    }, { threshold: 0.4 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [target]);
  return <span ref={ref}>{val}{suffix}</span>;
}

// ── Glass card wrapper ─────────────────────────────────────────────────────
function GlassCard({ children, className = '', hoverGlow = false }: {
  children: React.ReactNode;
  className?: string;
  hoverGlow?: boolean;
}) {
  return (
    <div className={`relative group ${className}`}>
      {/* Iridescent border */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: 'linear-gradient(135deg, rgba(253,186,18,0.5) 0%, rgba(168,85,247,0.3) 30%, rgba(59,130,246,0.3) 60%, rgba(253,186,18,0.4) 100%)',
          padding: '1px',
        }}
      />
      <div
        className="absolute inset-[1px] rounded-2xl"
        style={{
          background: 'linear-gradient(135deg, rgba(253,186,18,0.15) 0%, rgba(168,85,247,0.08) 40%, rgba(59,130,246,0.08) 70%, rgba(253,186,18,0.1) 100%)',
        }}
      />
      {/* Static border */}
      <div
        className="absolute inset-0 rounded-2xl border border-white/8 group-hover:border-transparent transition-colors duration-500"
      />
      {hoverGlow && (
        <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-xl"
          style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(253,186,18,0.2), transparent 70%)' }}
        />
      )}
      <div className="relative z-10 rounded-2xl overflow-hidden bg-white/[0.03] backdrop-blur-xl">
        {children}
      </div>
    </div>
  );
}

// ── Section heading ────────────────────────────────────────────────────────
function SectionHead({ eyebrow, title, accent, center = true }: {
  eyebrow: string; title: string; accent?: string; center?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={center ? 'text-center' : ''}
    >
      <span className="inline-flex items-center gap-2 text-amber-400/80 text-[10px] font-semibold tracking-[0.35em] uppercase mb-5">
        <span className="w-5 h-px bg-amber-400/60" />
        {eyebrow}
        <span className="w-5 h-px bg-amber-400/60" />
      </span>
      <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white">
        {title}
        {accent && (
          <>
            {' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #fdba18 0%, #f59e0b 40%, #fcd34d 70%, #fdba18 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              {accent}
            </span>
          </>
        )}
      </h2>
    </motion.div>
  );
}

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const products = [
  { id: 'n1', name: 'Aurelia Crystal Chandelier', price: 1299, category: 'Chandelier', image: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=800&auto=format&fit=crop' },
  { id: 'n2', name: 'Minimalist Floor Lamp', price: 349, category: 'Floor Lamp', image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop' },
  { id: 'n3', name: 'Brass Wall Sconce', price: 189, category: 'Wall Light', image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=800&auto=format&fit=crop' },
  { id: 'n4', name: 'Modernist Table Lamp', price: 259, category: 'Table Lamp', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop' },
];

const stats = [
  { value: 245, suffix: '+', label: 'Projects Completed' },
  { value: 76, suffix: '', label: 'Expert Team Members' },
  { value: 24, suffix: '', label: 'Industry Awards' },
  { value: 534, suffix: '+', label: 'Satisfied Clients' },
];

const features = [
  { icon: <Gem size={22} />, title: 'Solid Brass', text: 'Premium-grade solid brass — 1mm–8mm for cast items, 0.6mm–0.8mm for handmade pieces. Never hollow tubing or plated alloys.' },
  { icon: <Layers size={22} />, title: 'Premium Diffusers', text: 'We use 4mm glass or clear / opal non-yellowing PMMA sheets for a flawless, lasting finish.' },
  { icon: <ShieldCheck size={22} />, title: '15-Year Guarantee', text: 'Our brass is specially treated for protection, guaranteed against dust and tarnishing under proper use.' },
  { icon: <Lightbulb size={22} />, title: 'HYUNDAI LED', text: 'Sole distributor for HYUNDAI LED lighting across the Middle East — energy-efficient and reliable.' },
];

const services = [
  {
    icon: <PenTool size={22} />,
    title: 'Bespoke Design',
    text: 'Full customization from concept to creation. We provide 2D and 3D shop drawings, real-view renderings, and precise lighting-level calculations tailored to your space.',
    points: ['2D & 3D shop drawings', 'Real-view renderings', 'Lighting level calculations'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=800&auto=format&fit=crop',
  },
  {
    icon: <Wrench size={22} />,
    title: 'End-to-End Solutions',
    text: 'A complete scope of work under one roof — so your project is handled seamlessly from first audit to long-term care.',
    points: ['Auditing & consulting', 'Lighting design & fabrication', 'Installation & maintenance'],
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop',
  },
];

const blog = [
  { id: '1', title: 'Top 10 Lighting Trends for 2026', excerpt: 'Discover the most captivating lighting designs defining luxury interiors this year.', date: 'Oct 15, 2025', tag: 'Trends', image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop' },
  { id: '2', title: 'How to Choose the Perfect Chandelier', excerpt: 'A comprehensive guide to selecting the ideal chandelier for your space.', date: 'Sep 28, 2025', tag: 'Guide', image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop' },
];

/* ─────────────────────────────────────────────
   PAGE
───────────────────────────────────────────── */
export default function RedesignPage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <main className="flex-1 w-full overflow-hidden" style={{ background: '#080705', color: '#fff', fontFamily: 'var(--font-outfit, Jost, sans-serif)' }}>

      {/* ── HERO ──────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative w-full h-screen min-h-[700px] flex items-center overflow-hidden">

        {/* Parallax background */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ scale: heroScale, y: heroY }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop")' }}
          />
        </motion.div>

        {/* Layered dark overlays */}
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(105deg, rgba(8,7,5,0.97) 0%, rgba(8,7,5,0.8) 45%, rgba(8,7,5,0.3) 100%)' }} />
        <div className="absolute inset-0 z-1" style={{ background: 'linear-gradient(to bottom, rgba(8,7,5,0.5) 0%, transparent 40%, rgba(8,7,5,0.95) 100%)' }} />

        {/* Ambient light orb */}
        <div className="absolute left-[40%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full z-1 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(253,186,18,0.08) 0%, transparent 70%)' }} />

        {/* Floating iridescent glass panel — decorative */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="absolute right-12 top-1/2 -translate-y-1/2 w-[340px] h-[420px] z-10 hidden xl:block"
        >
          <div className="absolute inset-0 rounded-3xl" style={{
            background: 'linear-gradient(135deg, rgba(253,186,18,0.15) 0%, rgba(168,85,247,0.08) 40%, rgba(59,130,246,0.08) 70%, rgba(253,186,18,0.12) 100%)',
            border: '1px solid rgba(255,255,255,0.08)',
            backdropFilter: 'blur(20px)',
          }} />
          <div className="absolute inset-0 rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-30"
              style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=800&auto=format&fit=crop")' }} />
          </div>
          {/* Chromatic shimmer edge */}
          <div className="absolute inset-0 rounded-3xl" style={{
            background: 'linear-gradient(135deg, rgba(253,186,18,0.3) 0%, transparent 30%, transparent 70%, rgba(168,85,247,0.2) 100%)',
            opacity: 0.6,
          }} />
        </motion.div>

        {/* Hero content */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
          <div className="max-w-xl">

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-3 mb-10"
            >
              <div className="w-8 h-px bg-amber-400" />
              <span style={{ color: '#fdba18', fontSize: '10px', fontWeight: 700, letterSpacing: '0.32em', textTransform: 'uppercase' }}>
                Qatar&apos;s Premier Showroom
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="font-serif font-bold leading-[1.02] mb-8"
              style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}
            >
              <span className="block text-white">Luxury</span>
              <span className="block" style={{
                background: 'linear-gradient(135deg, #fdba18 0%, #f59e0b 40%, #fde68a 65%, #fdba18 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>throughout</span>
              <span className="block text-white">the home</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45 }}
              className="text-zinc-400 text-base md:text-lg leading-relaxed mb-12 max-w-md font-light"
            >
              Bringing your vision to life with premium collections of lighting, furniture, and decor — crafted for those who demand the extraordinary.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.65 }}
              className="flex flex-wrap items-center gap-4"
            >
              {/* Primary CTA — glass button */}
              <Link
                href="#collections"
                className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden cursor-pointer"
                style={{ borderRadius: '6px' }}
              >
                <div className="absolute inset-0 rounded" style={{ background: 'linear-gradient(135deg, #fdba18, #f59e0b)', borderRadius: '6px' }} />
                <div className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: 'linear-gradient(135deg, #fde68a, #fdba18)', borderRadius: '6px' }} />
                <span className="relative z-10 text-black font-bold text-xs tracking-[0.22em] uppercase">Explore Collections</span>
                <ArrowRight size={14} className="relative z-10 text-black transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              {/* Secondary CTA — glass outline */}
              <a
                href="https://wa.me/97430305180"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-8 py-4 text-white font-semibold text-xs tracking-[0.22em] uppercase transition-all duration-300 cursor-pointer"
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  backdropFilter: 'blur(12px)',
                  borderRadius: '6px',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(253,186,18,0.5)'; (e.currentTarget as HTMLElement).style.color = '#fdba18'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.12)'; (e.currentTarget as HTMLElement).style.color = '#fff'; }}
              >
                Contact Us
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <span style={{ fontSize: '9px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 600 }}>Scroll</span>
          <div className="w-px h-14 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
            <motion.div
              animate={{ y: ['-100%', '200%'] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: 'linear' }}
              className="absolute inset-x-0 top-0 h-1/2"
              style={{ background: 'linear-gradient(to bottom, transparent, #fdba18)' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section id="about" className="py-32 relative overflow-hidden">
        {/* Ambient glow */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(253,186,18,0.04) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image — with glass frame */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            {/* Outer iridescent frame */}
            <div className="absolute -inset-3 rounded-3xl" style={{
              background: 'linear-gradient(135deg, rgba(253,186,18,0.2) 0%, rgba(168,85,247,0.1) 50%, rgba(59,130,246,0.1) 100%)',
              filter: 'blur(1px)',
            }} />
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden" style={{
              border: '1px solid rgba(255,255,255,0.06)',
            }}>
              <div className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=1000&auto=format&fit=crop)' }} />
              <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,7,5,0.7) 0%, transparent 60%)' }} />
              {/* Glass corner accent */}
              <div className="absolute top-5 left-5 w-14 h-14" style={{
                border: '1px solid rgba(253,186,18,0.3)',
                borderRight: 'none', borderBottom: 'none',
              }} />
              <div className="absolute bottom-5 right-5 w-14 h-14" style={{
                border: '1px solid rgba(253,186,18,0.3)',
                borderLeft: 'none', borderTop: 'none',
              }} />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <SectionHead eyebrow="Who We Are" title="The Excellence of" accent="High Quality" center={false} />

            <div className="mt-10 space-y-5 text-zinc-400 text-sm md:text-base leading-relaxed">
              <p>Based in Doha, Qatar — with a presence in Sharjah, UAE — Beacon Décor &amp; Light specializes in manufacturing antique, crystal, and decorative solid brass lighting for architectural, interior, and outdoor applications.</p>
              <p>From royal palaces and grand mosques to luxury hospitality developments, we engineer luminous masterpieces that honour centuries-old metalworking traditions while embracing contemporary design.</p>
              <p>Founded with a passion for artistry, our company is built on quality, precision, and elegance. Every piece embodies an unwavering commitment to artisanal excellence.</p>
            </div>

            {/* HYUNDAI LED badge — glass treatment */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-xl"
              style={{
                background: 'rgba(253,186,18,0.06)',
                border: '1px solid rgba(253,186,18,0.2)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <span className="w-2 h-2 bg-amber-400 rotate-45 flex-shrink-0" />
              <span className="text-sm text-zinc-300">
                Sole distributor for <span className="text-amber-400 font-semibold">HYUNDAI LED</span> in the Middle East
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ── WHY BEACON ────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden">
        {/* Top/bottom glass lines */}
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(253,186,18,0.2), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(253,186,18,0.2), transparent)' }} />

        <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(253,186,18,0.015) 0%, transparent 50%)' }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <SectionHead eyebrow="Our Craftsmanship" title="Why" accent="Beacon" />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <GlassCard className="h-full" hoverGlow>
                  <div className="p-8 flex flex-col items-center text-center h-full">
                    {/* Icon in glass capsule */}
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                      style={{
                        background: 'rgba(253,186,18,0.08)',
                        border: '1px solid rgba(253,186,18,0.2)',
                        color: '#fdba18',
                      }}
                    >
                      {f.icon}
                    </div>
                    <h3 className="text-white font-semibold text-sm tracking-widest uppercase mb-3">{f.title}</h3>
                    <div className="w-6 h-px mb-4" style={{ background: 'rgba(253,186,18,0.4)' }} />
                    <p className="text-zinc-500 text-sm leading-relaxed">{f.text}</p>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────── */}
      <section id="collections" className="py-32 relative overflow-hidden">
        <div className="absolute left-0 top-1/2 w-[600px] h-[600px] -translate-y-1/2 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(253,186,18,0.04) 0%, transparent 70%)' }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <SectionHead eyebrow="From Our Collections" title="Featured" accent="Pieces" center={false} />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link href="#collections"
                className="inline-flex items-center gap-2 text-amber-400 text-xs font-semibold tracking-[0.2em] uppercase group"
              >
                View All
                <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {products.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="group cursor-pointer"
              >
                {/* Product card */}
                <div className="relative rounded-2xl overflow-hidden aspect-[3/4]"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                >
                  {/* Image */}
                  <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-108"
                    style={{ backgroundImage: `url(${p.image})`, transform: 'scale(1.05)' }}
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,7,5,0.9) 0%, rgba(8,7,5,0.3) 50%, transparent 100%)' }} />

                  {/* Category tag */}
                  <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase"
                    style={{ background: 'rgba(8,7,5,0.7)', border: '1px solid rgba(253,186,18,0.25)', color: '#fdba18', backdropFilter: 'blur(8px)' }}
                  >
                    {p.category}
                  </div>

                  {/* Iridescent hover border */}
                  <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(135deg, rgba(253,186,18,0.3) 0%, transparent 50%, rgba(168,85,247,0.2) 100%)', backgroundClip: 'border-box' }}
                  />

                  {/* Info */}
                  <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
                    <h3 className="text-white font-serif text-base font-semibold mb-1">{p.name}</h3>
                    <p className="text-amber-400 text-sm font-semibold">QAR {p.price.toLocaleString()}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section id="services" className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(253,186,18,0.2), transparent)' }} />
        <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(253,186,18,0.2), transparent)' }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(8,7,5,1) 0%, rgba(20,16,10,1) 50%, rgba(8,7,5,1) 100%)' }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <SectionHead eyebrow="What We Do" title="Our" accent="Services" />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.12 }}
              >
                <GlassCard hoverGlow>
                  {/* Image strip */}
                  <div className="relative h-44 overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                      style={{ backgroundImage: `url(${s.image})` }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent 30%, rgba(8,7,5,1) 100%)' }} />
                    {/* Icon badge */}
                    <div className="absolute bottom-4 left-6 w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: 'rgba(253,186,18,0.15)', border: '1px solid rgba(253,186,18,0.3)', color: '#fdba18', backdropFilter: 'blur(12px)' }}
                    >
                      {s.icon}
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="font-serif text-2xl text-white font-semibold mb-3">{s.title}</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">{s.text}</p>
                    <ul className="space-y-3">
                      {s.points.map(pt => (
                        <li key={pt} className="flex items-center gap-3 text-sm text-zinc-300">
                          <ChevronRight size={12} className="text-amber-400 flex-shrink-0" />
                          {pt}
                        </li>
                      ))}
                    </ul>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(253,186,18,0.06) 0%, transparent 70%)' }} />

        <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <GlassCard>
              <div className="px-8 py-16">
                <div className="text-center mb-14">
                  <span className="inline-flex items-center gap-2 text-amber-400/80 text-[10px] font-semibold tracking-[0.35em] uppercase mb-4">
                    <span className="w-5 h-px bg-amber-400/60" />Trusted Excellence<span className="w-5 h-px bg-amber-400/60" />
                  </span>
                  <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mt-2">
                    Architectural &amp; Interior{' '}
                    <span style={{
                      background: 'linear-gradient(135deg, #fdba18, #fde68a, #fdba18)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}>Designers</span>
                  </h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {stats.map((s, i) => (
                    <motion.div
                      key={s.label}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex flex-col items-center text-center gap-3 group"
                    >
                      <div className="font-serif font-bold" style={{
                        fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                        background: 'linear-gradient(135deg, #fdba18, #fde68a, #fdba18)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}>
                        <Counter target={s.value} suffix={s.suffix} />
                      </div>
                      <div className="w-8 h-px transition-all duration-500 group-hover:w-14" style={{ background: 'rgba(253,186,18,0.4)' }} />
                      <span className="text-zinc-500 text-[10px] font-semibold tracking-[0.2em] uppercase">{s.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* ── BLOG / JOURNAL ────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(253,186,18,0.2), transparent)' }} />

        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <SectionHead eyebrow="Journal" title="Design" accent="Insights" />

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {blog.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: i * 0.15 }}
              >
                <Link href={`#blog-${post.id}`} className="group block">
                  <div className="relative h-[380px] md:h-[460px] rounded-2xl overflow-hidden"
                    style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  >
                    {/* Image */}
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-1000 group-hover:scale-110"
                      style={{ backgroundImage: `url(${post.image})` }} />
                    <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(8,7,5,0.95) 0%, rgba(8,7,5,0.5) 50%, rgba(8,7,5,0.1) 100%)' }} />

                    {/* Iridescent bottom line on hover */}
                    <div className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full transition-all duration-700"
                      style={{ background: 'linear-gradient(to right, #fdba18, #a855f7, #3b82f6, #fdba18)' }} />

                    {/* Tag */}
                    <div className="absolute top-5 left-5 px-4 py-1.5 text-[9px] font-bold tracking-[0.25em] uppercase rounded"
                      style={{ background: 'rgba(8,7,5,0.7)', border: '1px solid rgba(253,186,18,0.25)', color: '#fdba18', backdropFilter: 'blur(8px)' }}
                    >
                      {post.tag}
                    </div>

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-7 z-10">
                      <p className="text-zinc-500 text-[10px] font-semibold tracking-[0.25em] uppercase mb-3">{post.date}</p>
                      <h3 className="font-serif text-xl md:text-2xl text-white font-semibold mb-3 group-hover:text-amber-300 transition-colors duration-300">{post.title}</h3>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4 opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 max-w-sm">{post.excerpt}</p>
                      <span className="inline-flex items-center gap-2 text-amber-400 text-[10px] font-bold tracking-[0.2em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75">
                        Read Article <ArrowRight size={11} />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT CTA ───────────────────────────────────────── */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(253,186,18,0.07) 0%, transparent 60%)' }} />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(to right, transparent, rgba(253,186,18,0.25), transparent)' }} />

        <div className="max-w-3xl mx-auto px-6 md:px-12 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center gap-2 text-amber-400/80 text-[10px] font-semibold tracking-[0.35em] uppercase mb-6">
              <span className="w-5 h-px bg-amber-400/60" />Get In Touch<span className="w-5 h-px bg-amber-400/60" />
            </span>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Let&apos;s Illuminate <br />
              <span style={{
                background: 'linear-gradient(135deg, #fdba18, #fde68a, #fdba18)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}>Your Space</span>
            </h2>
            <p className="text-zinc-400 text-base leading-relaxed mb-12 max-w-lg mx-auto">
              Whether it&apos;s a royal palace, a grand mosque, or your private residence — our team is ready to craft something extraordinary.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://wa.me/97430305180"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 px-9 py-4 font-bold text-xs tracking-[0.22em] uppercase rounded text-black"
                style={{ background: 'linear-gradient(135deg, #fdba18, #f59e0b)', borderRadius: '6px' }}
              >
                WhatsApp Us
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <Link
                href="#"
                className="group inline-flex items-center gap-3 px-9 py-4 text-white font-semibold text-xs tracking-[0.22em] uppercase transition-all duration-300 rounded"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(12px)', borderRadius: '6px' }}
              >
                Download Profile
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────── */}
      <footer className="relative border-t" style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(8,7,5,0.98)' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-16">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Brand */}
            <div>
              <h3 className="font-serif text-2xl font-bold text-white mb-1">Beacon</h3>
              <p className="text-zinc-600 text-xs tracking-wider">Décor &amp; Light — Doha, Qatar</p>
            </div>
            {/* Nav */}
            <nav className="flex flex-wrap items-center gap-6">
              {['Collections', 'About', 'Services', 'Journal', 'Contact'].map(item => (
                <Link key={item} href="#"
                  className="text-zinc-500 text-xs tracking-widest uppercase font-medium hover:text-amber-400 transition-colors duration-300"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>
          <div className="mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4"
            style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
          >
            <p className="text-zinc-700 text-xs tracking-wider">© 2026 Beacon Décor &amp; Light. All rights reserved.</p>
            <p className="text-zinc-700 text-xs tracking-wider">Doha, Qatar · Sharjah, UAE</p>
          </div>
        </div>
      </footer>

    </main>
  );
}
