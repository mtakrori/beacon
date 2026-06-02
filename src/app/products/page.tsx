import { Suspense } from 'react';
import { sanityFetch } from '@/sanity/client';
import type { MockProduct } from '@/sanity/client';
import ProductsClient from './ProductsClient';

export const metadata = {
  title: 'Products | Beacon Qatar',
  description: 'Browse our full collection of luxury lighting and home décor.',
};

export default async function ProductsPage() {
  const products = await sanityFetch<MockProduct[]>({
    query: `*[_type == "product" && !(collection == "Crystal" && !defined(thumbnail))] | order(_createdAt desc){
      _id, title, slug, collection, categories, inStock, variants, material, dimensions, description, featuredItem,
      "thumbnailUrl": thumbnail.asset->url,
      "galleryUrls": gallery[].asset->url
    }`,
    revalidate: 60,
  });

  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ProductsClient products={products} />
    </Suspense>
  );
}
