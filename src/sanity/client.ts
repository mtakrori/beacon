import { createClient } from 'next-sanity';
import { projectId, dataset, apiVersion, isSanityMocked } from './env';

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});

// Premium mock data for fallback
export interface MockProduct {
  _id: string;
  title: string;
  slug: { current: string };
  thumbnailUrl: string;
  galleryUrls: string[];
  thumbnail?: any;
  gallery?: any[];
  collection?: string;
  categories: string[];
  inStock?: boolean;
  variants?: string[];
  material: string;
  dimensions: string;
  description?: string;
  featuredItem: boolean;
}

export interface MockProject {
  _id: string;
  title: string;
  slug: { current: string };
  location: string;
  galleryUrls: string[];
  gallery?: any[];
  description: Array<{
    _type: string;
    style: string;
    children: Array<{ _type: string; text: string }>;
  }>;
  metaTitle?: string;
  metaDescription?: string;
}

const mockProducts: MockProduct[] = [
  {
    _id: 'p1',
    title: 'Andalus Brass Chandelier',
    slug: { current: 'andalus-brass-chandelier' },
    thumbnailUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1513506003901-1e6a229e9d15?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&q=80&w=800',
    ],
    collection: 'Brass',
    categories: ['Chandeliers'],
    inStock: true,
    variants: ['Ø: 40cm / H: 60cm', 'Ø: 55cm / H: 75cm', 'Ø: 70cm / H: 90cm'],
    material: 'Hand-pierced Solid Brass',
    dimensions: 'Ø: 55cm × H: 75cm',
    description: 'Intricately hand-pierced solid brass casting warm, patterned light. A timeless centerpiece inspired by Andalusian craftsmanship.',
    featuredItem: true,
  },
  {
    _id: 'p2',
    title: 'Marrakesh Brass Lantern',
    slug: { current: 'marrakesh-brass-lantern' },
    thumbnailUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=800',
    ],
    collection: 'Brass',
    categories: ['Lanterns'],
    inStock: true,
    variants: ['Ø: 25cm / H: 45cm', 'Ø: 35cm / H: 60cm'],
    material: 'Antique-finish Brass & Frosted Glass',
    dimensions: 'Ø: 35cm × H: 60cm',
    description: 'A handcrafted brass lantern with delicate fretwork, casting intricate shadows across walls and ceilings.',
    featuredItem: false,
  },
  {
    _id: 'p3',
    title: 'Maria Theresa Grand Chandelier',
    slug: { current: 'maria-theresa-grand-chandelier' },
    thumbnailUrl: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800',
    ],
    collection: 'Crystal',
    categories: ['Maria Theresa', 'Large Chandeliers'],
    inStock: true,
    variants: ['Ø: 80cm / H: 90cm', 'Ø: 100cm / H: 110cm', 'Ø: 120cm / H: 130cm'],
    material: 'Hand-cut Bohemian Crystal & Gold-plated Frame',
    dimensions: 'Ø: 100cm × H: 110cm',
    description: 'The definitive Maria Theresa design — tiers of hand-cut Bohemian crystal arranged over a gold-plated armature for unrivaled brilliance.',
    featuredItem: true,
  },
  {
    _id: 'p4',
    title: 'Empire Crystal Chandelier',
    slug: { current: 'empire-crystal-chandelier' },
    thumbnailUrl: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800',
    ],
    collection: 'Crystal',
    categories: ['Large Chandeliers', 'Glass Chandeliers'],
    inStock: true,
    variants: ['Ø: 60cm / H: 100cm', 'Ø: 80cm / H: 130cm', 'Ø: 100cm / H: 160cm'],
    material: 'Faceted Crystal & Chrome Frame',
    dimensions: 'Ø: 80cm × H: 130cm',
    description: 'A cascading empire-style chandelier of faceted crystal strands, ideal for grand entrances and double-height spaces.',
    featuredItem: true,
  },
];

const mockProjects: MockProject[] = [
  {
    _id: 'proj1',
    title: 'Valkyrie Residential Villa',
    slug: { current: 'valkyrie-residential-villa' },
    location: 'Reykjavík, Iceland',
    galleryUrls: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=800'
    ],
    description: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Perched on the volcanic coastline of Iceland, the Valkyrie Villa is an exploration of raw architectural modernism. Utilizing cast-in-place concrete, native basalt stone, and sweeping structural glazing, the residence blurs the boundary between domestic luxury and the harsh basalt landscape.' }]
      }
    ],
    metaTitle: 'Valkyrie Residential Villa | Minimalist Architecture',
    metaDescription: 'An architectural review of Valkyrie Villa, a cast-in-place concrete luxury residential design in Iceland.'
  },
  {
    _id: 'proj2',
    title: 'The Obsidian Pavilion',
    slug: { current: 'the-obsidian-pavilion' },
    location: 'Kyoto, Japan',
    galleryUrls: [
      'https://images.unsplash.com/photo-1504297050568-910d24c426d3?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800'
    ],
    description: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'Inspired by traditional Shou Sugi Ban charred wood cladding, the Obsidian Pavilion is a private sanctuary nestled within the bamboo forests of Kyoto. The building acts as an open-air teahouse and workspace, balancing dark textured surfaces with warm shoji paper screens and tatami flooring.' }]
      }
    ],
    metaTitle: 'The Obsidian Pavilion - Kyoto Sanctuary',
    metaDescription: 'Discover the Obsidian Pavilion in Kyoto, blending charred timber and warm paper textures into a serene garden workspace.'
  },
  {
    _id: 'proj3',
    title: 'Elysian High-Rise Penthouse',
    slug: { current: 'elysian-high-rise-penthouse' },
    location: 'Dubai, UAE',
    galleryUrls: [
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800'
    ],
    description: [
      {
        _type: 'block',
        style: 'normal',
        children: [{ _type: 'span', text: 'This duplex penthouse in Dubai stands as a testament to high-end vertical living. Complete with Calacatta marble wall paneling, custom-cast brass staircases, and curatorial lighting installations, the apartment boasts panoramic views of the Arabian Gulf through double-height curtain walls.' }]
      }
    ]
  }
];

// ISR Fetch Helper
export async function sanityFetch<QueryResponse>({
  query,
  params = {},
  revalidate = 60,
  tags = [],
}: {
  query: string;
  params?: Record<string, any>;
  revalidate?: number | false;
  tags?: string[];
}): Promise<QueryResponse> {
  if (isSanityMocked) {
    // Return typed mock responses based on standard queries
    const lowerQuery = query.toLowerCase();
    if (lowerQuery.includes('type == "product"')) {
      if (lowerQuery.includes('featureditem == true')) {
        return mockProducts.filter((p) => p.featuredItem) as unknown as QueryResponse;
      }
      if (lowerQuery.includes('slug.current ==') && params.slug) {
        return mockProducts.find((p) => p.slug.current === params.slug) as unknown as QueryResponse;
      }
      return mockProducts as unknown as QueryResponse;
    }
    if (lowerQuery.includes('type == "project"')) {
      if (lowerQuery.includes('slug.current ==') && params.slug) {
        return mockProjects.find((p) => p.slug.current === params.slug) as unknown as QueryResponse;
      }
      return mockProjects as unknown as QueryResponse;
    }
    return [] as unknown as QueryResponse;
  }

  // Real sanity fetch with caching
  return client.fetch<QueryResponse>(query, params, {
    next: {
      revalidate,
      tags,
    },
  });
}

// Image Builder Mock Helper
export function urlForImage(source: any) {
  if (!source) return { url: () => '' };
  
  if (typeof source === 'string') {
    return { url: () => source };
  }
  
  // If we have standard mock image URL returned
  if (source.asset && source.asset._ref) {
    // If it is our mock format or sanity format
    return { url: () => source.asset._ref };
  }
  
  return { url: () => '' };
}
