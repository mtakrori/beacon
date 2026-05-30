import React from 'react';
import Hero from '@/components/home/Hero';
import CategoryGrid from '@/components/home/CategoryGrid';
import ProductSection from '@/components/home/ProductSection';
import SignatureBanner from '@/components/home/SignatureBanner';
import ProfileDownloadBanner from '@/components/home/ProfileDownloadBanner';
import BlogGallery from '@/components/home/BlogGallery';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/layout/Footer';

const newCollections = [
  {
    id: 'n1',
    name: 'Aurelia Crystal Chandelier',
    price: 1299.00,
    category: 'Chandelier',
    image: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'n2',
    name: 'Minimalist Floor Lamp',
    price: 349.00,
    category: 'Floor Lamp',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'n3',
    name: 'Brass Wall Sconce',
    price: 189.00,
    category: 'Wall Light',
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'n4',
    name: 'Modernist Table Lamp',
    price: 259.00,
    category: 'Table Lamp',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop'
  }
];

const bestSellers = [
  {
    id: 'b1',
    name: 'Eclat Crystal Pendant',
    price: 499.00,
    category: 'Pendant',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b2',
    name: 'Lumina Velvet Sofa',
    price: 2899.00,
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b3',
    name: 'Beacon Signature Lounge',
    price: 1450.00,
    category: 'Furniture',
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'b4',
    name: 'Orbital Brass Pendant',
    price: 650.00,
    category: 'Pendant',
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?q=80&w=800&auto=format&fit=crop'
  }
];

export default function Home() {
  return (
    <main className="flex-1 w-full bg-background overflow-hidden">
      <Hero />
      
      <CategoryGrid />
      
      <ProductSection 
        title="New Collections" 
        subtitle="Just Arrived"
        products={newCollections}
        bannerImage="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2000&auto=format&fit=crop"
        bannerTitle="New Collections"
      />
      
      <ProductSection 
        title="Featured Pieces" 
        subtitle="Most Popular"
        products={bestSellers}
      />
      
      <SignatureBanner />

      <ProfileDownloadBanner />

      <BlogGallery />

      <ContactSection />

      <Footer />
    </main>
  );
}
