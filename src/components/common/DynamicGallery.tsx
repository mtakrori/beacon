'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { urlForImage, MockProduct, MockProject } from '@/sanity/client';
import { X, ExternalLink, Calendar, MapPin, Compass, Layers } from 'lucide-react';
import Image from 'next/image';

interface DynamicGalleryProps {
  products: MockProduct[];
  projects: MockProject[];
}

type TabType = 'products' | 'projects';

export default function DynamicGallery({ products, projects }: DynamicGalleryProps) {
  const [activeTab, setActiveTab] = useState<TabType>('products');
  const [selectedProduct, setSelectedProduct] = useState<MockProduct | null>(null);
  const [selectedProject, setSelectedProject] = useState<MockProject | null>(null);
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Helper to extract image source URL cleanly
  const getImgUrl = (imgSource: any) => {
    if (!imgSource) return '';
    return urlForImage(imgSource).url();
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: 'spring' as const, bounce: 0.15 } },
  };

  return (
    <div className="w-full">
      {/* Navigation Tabs */}
      <div className="flex justify-center mb-16">
        <div className="flex p-1 bg-zinc-100 dark:bg-zinc-900 rounded-full border border-zinc-200/50 dark:border-zinc-800/50 shadow-inner">
          <button
            onClick={() => setActiveTab('products')}
            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'products'
                ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 shadow-md'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            Design Objects
          </button>
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-8 py-3 rounded-full text-sm font-semibold transition-all cursor-pointer ${
              activeTab === 'projects'
                ? 'bg-white dark:bg-zinc-800 text-zinc-950 dark:text-zinc-50 shadow-md'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200'
            }`}
          >
            Architectural Spaces
          </button>
        </div>
      </div>

      {/* Grid Display */}
      <AnimatePresence mode="wait">
        {activeTab === 'products' ? (
          <motion.div
            key="products-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {products.map((product) => {
              const imgUrl = product.thumbnailUrl || getImgUrl(product.thumbnail);
              return (
                <motion.div
                  key={product._id}
                  variants={itemVariants}
                  onClick={() => {
                    setSelectedProduct(product);
                    setActiveImageIndex(0);
                  }}
                  className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[4/5] relative w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    {imgUrl ? (
                      <Image
                        src={imgUrl}
                        alt={product.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-400">
                        No Image Available
                      </div>
                    )}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3 rounded-full bg-white/95 text-zinc-950 shadow-lg scale-90 group-hover:scale-100 transition-all duration-300">
                        <ExternalLink size={18} />
                      </div>
                    </div>
                  </div>

                  {/* Info block */}
                  <div className="p-6">
                    <div className="flex gap-2 mb-2">
                      {product.categories?.slice(0, 2).map((cat) => (
                        <span
                          key={cat}
                          className="px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 text-xxs font-semibold uppercase tracking-wider"
                        >
                          {cat}
                        </span>
                      ))}
                    </div>
                    <h4 className="text-lg font-bold text-zinc-900 dark:text-zinc-50 tracking-tight group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                      {product.title}
                    </h4>
                    {product.material && (
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1 line-clamp-1">
                        {product.material}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="projects-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {projects.map((project) => {
              const imgUrl = project.galleryUrls?.[0] || getImgUrl(project.gallery?.[0]);
              return (
                <motion.div
                  key={project._id}
                  variants={itemVariants}
                  onClick={() => {
                    setSelectedProject(project);
                    setActiveImageIndex(0);
                  }}
                  className="group relative cursor-pointer overflow-hidden rounded-xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-200/40 dark:border-zinc-800/40 shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  <div className="aspect-[16/10] relative w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
                    {imgUrl ? (
                      <Image
                        src={imgUrl}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-100 dark:bg-zinc-800 text-zinc-400">
                        No Image Available
                      </div>
                    )}
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="p-3.5 rounded-full bg-white/95 text-zinc-950 shadow-lg scale-90 group-hover:scale-100 transition-all duration-300">
                        <Compass size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Info block */}
                  <div className="p-8">
                    {project.location && (
                      <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-xs mb-2">
                        <MapPin size={13} className="text-indigo-500" />
                        <span>{project.location}</span>
                      </div>
                    )}
                    <h4 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50 tracking-tight group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h4>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox Modals */}
      <AnimatePresence>
        {/* Product Lightbox */}
        {selectedProduct && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProduct(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-4xl bg-white dark:bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-zinc-200 dark:border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 flex flex-col bg-zinc-100 dark:bg-zinc-900">
                <div className="relative aspect-[4/5] md:aspect-auto md:flex-1 w-full bg-zinc-200 dark:bg-zinc-800">
                  {(() => {
                    const gallery = selectedProduct.galleryUrls || selectedProduct.gallery || [];
                    const currentImg = gallery[activeImageIndex] 
                      ? (selectedProduct.galleryUrls ? gallery[activeImageIndex] : getImgUrl(gallery[activeImageIndex]))
                      : (selectedProduct.thumbnailUrl || getImgUrl(selectedProduct.thumbnail));
                    return currentImg ? (
                      <Image
                        src={currentImg}
                        alt={selectedProduct.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : null;
                  })()}
                </div>
                {/* Thumbnails */}
                {(() => {
                  const gallery = selectedProduct.galleryUrls || selectedProduct.gallery || [];
                  return gallery.length > 1 ? (
                    <div className="flex gap-2 p-4 overflow-x-auto justify-center border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-950">
                      {gallery.map((img, idx) => {
                        const thumbUrl = selectedProduct.galleryUrls ? img : getImgUrl(img);
                        return (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                              activeImageIndex === idx ? 'border-indigo-500 scale-95' : 'border-transparent opacity-60'
                            }`}
                          >
                            <Image src={thumbUrl} alt="thumbnail" fill className="object-cover" />
                          </button>
                        );
                      })}
                    </div>
                  ) : null;
                })()}
              </div>

              {/* Detail Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="flex gap-2 mb-4">
                  {selectedProduct.categories?.map((cat) => (
                    <span
                      key={cat}
                      className="px-2.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 text-xxs font-semibold uppercase tracking-wider border border-zinc-200/40 dark:border-zinc-800/40"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-6">
                  {selectedProduct.title}
                </h3>

                <div className="space-y-6 border-t border-zinc-100 dark:border-zinc-900 pt-6 text-sm">
                  {selectedProduct.material && (
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                        Materials & Finish
                      </span>
                      <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                        {selectedProduct.material}
                      </span>
                    </div>
                  )}
                  {selectedProduct.dimensions && (
                    <div className="flex flex-col gap-1">
                      <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                        Dimensions
                      </span>
                      <span className="text-zinc-800 dark:text-zinc-200 font-medium">
                        {selectedProduct.dimensions}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col gap-1">
                    <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 uppercase tracking-widest">
                      Availability
                    </span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5 mt-0.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Inquire for Custom Editions
                    </span>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900">
                  <a
                    href="#contact"
                    onClick={() => setSelectedProduct(null)}
                    className="w-full flex items-center justify-center gap-2 h-12 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors font-medium text-sm"
                  >
                    Request Custom Quote
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}

        {/* Project Lightbox */}
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 220 }}
              className="relative w-full max-w-4xl bg-white dark:bg-zinc-950 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row border border-zinc-200 dark:border-zinc-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/40 hover:bg-black/60 text-white transition-colors cursor-pointer"
              >
                <X size={20} />
              </button>

              {/* Image Side */}
              <div className="w-full md:w-1/2 flex flex-col bg-zinc-100 dark:bg-zinc-900">
                <div className="relative aspect-[4/3] md:aspect-auto md:flex-1 w-full bg-zinc-200 dark:bg-zinc-800">
                  {(() => {
                    const gallery = selectedProject.galleryUrls || selectedProject.gallery || [];
                    const currentImg = gallery[activeImageIndex] 
                      ? (selectedProject.galleryUrls ? gallery[activeImageIndex] : getImgUrl(gallery[activeImageIndex]))
                      : '';
                    return currentImg ? (
                      <Image
                        src={currentImg}
                        alt={selectedProject.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    ) : null;
                  })()}
                </div>
                {/* Thumbnails */}
                {(() => {
                  const gallery = selectedProject.galleryUrls || selectedProject.gallery || [];
                  return gallery.length > 1 ? (
                    <div className="flex gap-2 p-4 overflow-x-auto justify-center border-t border-zinc-200/50 dark:border-zinc-800/50 bg-white dark:bg-zinc-950">
                      {gallery.map((img, idx) => {
                        const thumbUrl = selectedProject.galleryUrls ? img : getImgUrl(img);
                        return (
                          <button
                            key={idx}
                            onClick={() => setActiveImageIndex(idx)}
                            className={`relative w-14 h-14 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 cursor-pointer ${
                              activeImageIndex === idx ? 'border-indigo-500 scale-95' : 'border-transparent opacity-60'
                            }`}
                          >
                            <Image src={thumbUrl} alt="thumbnail" fill className="object-cover" />
                          </button>
                        );
                      })}
                    </div>
                  ) : null;
                })()}
              </div>

              {/* Detail Side */}
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between overflow-y-auto max-h-[85vh] md:max-h-none">
                <div>
                  {selectedProject.location && (
                    <div className="flex items-center gap-1.5 text-zinc-500 dark:text-zinc-400 text-xs font-semibold uppercase tracking-wider mb-3">
                      <MapPin size={14} className="text-indigo-500" />
                      <span>{selectedProject.location}</span>
                    </div>
                  )}
                  <h3 className="text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight mb-6">
                    {selectedProject.title}
                  </h3>

                  {/* Portable Text or Fallback Text render */}
                  <div className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed space-y-4 border-t border-zinc-100 dark:border-zinc-900 pt-6">
                    {selectedProject.description?.map((block: any, idx: number) => {
                      if (block._type === 'block') {
                        const text = block.children?.map((child: any) => child.text).join('') || '';
                        return <p key={idx}>{text}</p>;
                      }
                      return null;
                    })}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-900 flex gap-4">
                  <a
                    href="#contact"
                    onClick={() => setSelectedProject(null)}
                    className="flex-1 flex items-center justify-center gap-2 h-12 rounded-lg bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors font-medium text-sm"
                  >
                    Discuss Similar Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
