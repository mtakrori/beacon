'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Landmark, Crown, Store } from 'lucide-react';

const groups = [
  {
    icon: <Building2 size={22} />,
    title: 'Hotels & Luxury Resorts',
    items: [
      'Banana Island Resort — indoor & outdoor lighting',
      'Al-Jomrok Boutique Hotel, Souq Waqif',
      'Saraya Hotel, Corniche — recommended by Hilton International',
      'Qasr Al Sarab Hotel & Resort, Abu Dhabi',
    ],
  },
  {
    icon: <Landmark size={22} />,
    title: 'Grand Mosques',
    items: [
      'Labor City Mosques — 1200×1200 cm Islamic chandeliers',
      'Al Wajba Mosque — custom Islamic chandeliers',
      'Abu Hamour (Al-Saad) Mosque',
    ],
  },
  {
    icon: <Crown size={22} />,
    title: 'Palaces & Private Residences',
    items: [
      'Al-Ruways Palace',
      'Wajba Palace',
      'Private Qatari Majlises — bespoke Moroccan lights & sconces',
    ],
  },
  {
    icon: <Store size={22} />,
    title: 'Commercial & Cultural',
    items: [
      'Katara — Plaza Mall, Ard Canaan, Beach Club',
      'Souq Waqif Art Center & Damasca Restaurant',
      'Ibn Battuta Mall, Al Bawadi Mall, City Centre Mirdiff',
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-1/4 w-[500px] h-[300px] bg-primary/[0.03] rounded-full blur-[200px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-xs font-semibold tracking-[0.3em] uppercase block mb-4">Selected Works</span>
          <h2 className="text-3xl md:text-5xl font-serif text-white tracking-wide">Featured Projects</h2>
          <p className="text-zinc-500 text-sm max-w-xl mx-auto mt-5 leading-relaxed">
            Trusted to illuminate some of the region&apos;s most distinguished landmarks — from grand mosques and royal palaces to luxury hospitality.
          </p>
          <div className="diamond-divider mt-6">
            <div className="diamond" />
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
        >
          {groups.map((g) => (
            <motion.div
              key={g.title}
              variants={itemVariants}
              className="glass-card p-8 group hover:border-primary/30 transition-colors duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-11 h-11 bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-colors duration-500">
                  {g.icon}
                </div>
                <h3 className="text-lg font-serif text-white tracking-wide">{g.title}</h3>
              </div>
              <ul className="space-y-3">
                {g.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-zinc-400 leading-relaxed">
                    <span className="w-1.5 h-1.5 bg-primary/60 rotate-45 flex-shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
