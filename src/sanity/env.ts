export const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2026-05-28';

export const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production';

export const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'mock-project-id';

// Check if we are running in mock mode because Sanity is not configured
export const isSanityMocked = projectId === 'mock-project-id';
