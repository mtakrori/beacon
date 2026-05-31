import { sanityFetch } from '@/sanity/client';
import type { MockProduct } from '@/sanity/client';
import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const product = await sanityFetch<MockProduct | undefined>({
    query: `*[_type == "product" && slug.current == $slug][0]{
      _id, title, slug, collection, categories, inStock, variants, material, dimensions, description, featuredItem,
      "thumbnailUrl": thumbnail.asset->url,
      "galleryUrls": gallery[].asset->url
    }`,
    params: { slug },
    revalidate: 60,
  });
  return {
    title: product ? `${product.title} | Beacon Qatar` : 'Product | Beacon Qatar',
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = await sanityFetch<MockProduct | undefined>({
    query: `*[_type == "product" && slug.current == $slug][0]{
      _id, title, slug, collection, categories, inStock, variants, material, dimensions, description, featuredItem,
      "thumbnailUrl": thumbnail.asset->url,
      "galleryUrls": gallery[].asset->url
    }`,
    params: { slug },
    revalidate: 60,
  });

  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}
