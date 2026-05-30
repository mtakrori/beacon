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
    title: 'Aero Lounge Chair',
    slug: { current: 'aero-lounge-chair' },
    thumbnailUrl: 'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1567538096630-e0c55bd6374c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1580481072645-022f9a6dbf27?auto=format&fit=crop&q=80&w=800',
    ],
    categories: ['Furniture', 'Lounge'],
    inStock: true,
    variants: ['W: 85cm / D: 90cm / H: 75cm', 'W: 95cm / D: 100cm / H: 80cm'],
    material: 'Full-grain Aniline Leather & Brushed Aluminum',
    dimensions: 'W: 85cm × D: 90cm × H: 75cm',
    description: 'The Aero Lounge Chair combines sculptural form with exceptional comfort. Hand-crafted from full-grain aniline leather stretched over a brushed aluminum frame, it is the definitive statement piece for any living space.',
    featuredItem: true,
  },
  {
    _id: 'p2',
    title: 'Horizon Pendant Light',
    slug: { current: 'horizon-pendant-light' },
    thumbnailUrl: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800',
    ],
    categories: ['Lighting', 'Pendant'],
    inStock: true,
    variants: ['Ø: 40cm / H: 30cm', 'Ø: 60cm / H: 40cm', 'Ø: 80cm / H: 50cm'],
    material: 'Mouth-blown Smoked Glass & Satin Brass',
    dimensions: 'Diameter: 40cm, Cord Length: 200cm',
    description: 'Inspired by the clean horizon at dusk, this mouth-blown smoked glass pendant diffuses light with a warm, amber halo. Available with or without integrated LED lamp.',
    featuredItem: true,
  },
  {
    _id: 'p3',
    title: 'Monolith Oak Dining Table',
    slug: { current: 'monolith-oak-table' },
    thumbnailUrl: 'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1577140917170-285929fb55b7?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1615066390971-03e4e1c36ddf?auto=format&fit=crop&q=80&w=800',
    ],
    categories: ['Furniture', 'Dining'],
    inStock: false,
    variants: ['L: 240cm / W: 100cm / H: 74cm', 'L: 280cm / W: 100cm / H: 74cm', 'L: 320cm / W: 110cm / H: 74cm'],
    material: 'Fumed Solid European Oak with Oil Finish',
    dimensions: 'L: 240cm × W: 100cm × H: 74cm',
    description: 'Carved from a single slab of fumed European oak, the Monolith table brings organic gravitas to any dining room. Each piece is unique — the natural grain and character of the wood is preserved and celebrated.',
    featuredItem: false,
  },
  {
    _id: 'p4',
    title: 'Aurelia Crystal Chandelier',
    slug: { current: 'aurelia-crystal-chandelier' },
    thumbnailUrl: 'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&q=80&w=800',
    galleryUrls: [
      'https://images.unsplash.com/photo-1543198126-a8ad8e47fb22?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1540932239986-30128078f3c5?auto=format&fit=crop&q=80&w=800',
    ],
    categories: ['Lighting', 'Chandelier'],
    inStock: true,
    variants: ['Ø: 80cm / H: 60cm', 'Ø: 100cm / H: 75cm', 'Ø: 120cm / H: 90cm', 'Ø: 150cm / H: 110cm'],
    material: 'Hand-cut Bohemian Crystal & 24K Gold-plated Frame',
    dimensions: 'Diameter: 120cm, Height: 90cm',
    description: 'The Aurelia is a tour de force of crystalline craftsmanship. Over 800 individually hand-cut Bohemian crystal drops cascade from a 24K gold-plated armature, casting prismatic light throughout the room.',
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
