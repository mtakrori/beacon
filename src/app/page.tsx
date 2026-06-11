import React from 'react';
import Hero from '@/components/home/Hero';
import CategoryGrid from '@/components/home/CategoryGrid';
import ProductSection from '@/components/home/ProductSection';
import type { Product } from '@/components/home/ProductSection';
import AboutSection from '@/components/home/AboutSection';
import WhyBeacon from '@/components/home/WhyBeacon';
import ServicesSection from '@/components/home/ServicesSection';
import ProjectsSection from '@/components/home/ProjectsSection';
import SignatureBanner from '@/components/home/SignatureBanner';
import ProfileDownloadBanner from '@/components/home/ProfileDownloadBanner';
import ContactSection from '@/components/home/ContactSection';
import Footer from '@/components/layout/Footer';
import { sanityFetch } from '@/sanity/client';
import type { MockProduct } from '@/sanity/client';

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

async function getFeaturedProducts(): Promise<Product[]> {
  const products = await sanityFetch<MockProduct[]>({
    query: `*[_type == "product" && defined(thumbnail)]{
      _id, title, slug, categories, featuredItem,
      "thumbnailUrl": thumbnail.asset->url
    }`,
    revalidate: 60,
  });

  const withImage = (products || []).filter((p) => p.thumbnailUrl);
  const featured = withImage.filter((p) => p.featuredItem);
  const rest = shuffle(withImage.filter((p) => !p.featuredItem));
  const picks = [...featured, ...rest].slice(0, 4);

  return picks.map((p) => ({
    id: p._id,
    name: p.title,
    price: 0,
    category: p.categories?.[0] ?? '',
    image: `${p.thumbnailUrl}?w=600&q=75&auto=format`,
    href: `/products/${p.slug.current}`,
  }));
}

export default async function Home() {
  const featuredProducts = await getFeaturedProducts();

  return (
    <main className="flex-1 w-full bg-background overflow-hidden">
      <Hero />

      <CategoryGrid />

      <AboutSection />

      <WhyBeacon />

      <ProductSection
        title="Featured Pieces"
        subtitle="From Our Collections"
        products={featuredProducts}
        bannerImage="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2000&auto=format&fit=crop"
        bannerTitle="Signature Lighting"
      />

      <ServicesSection />

      <SignatureBanner />

      <ProjectsSection />

      <ProfileDownloadBanner />

      <ContactSection />

      <Footer />
    </main>
  );
}
