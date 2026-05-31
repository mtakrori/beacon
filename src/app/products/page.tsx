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
    query: `*[_type == "product"] | order(_createdAt desc)`,
    revalidate: 60,
  });

  return (
    <Suspense fallback={<div className="min-h-screen bg-background" />}>
      <ProductsClient products={products} />
    </Suspense>
  );
}
