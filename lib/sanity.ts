// lib/sanity.ts
import { createClient } from 'next-sanity';

// Use the provided environment variables with fallbacks
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '4zq6kq5m';
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'k-are1';
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-05-03';

// Initialize the Sanity client
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: process.env.NODE_ENV === 'production',
  // Optional: Token if you need authenticated requests (preview mode)
  token: process.env.SANITY_API_TOKEN,
  // Optional: Controls whether to fetch published or draft content
  perspective: process.env.NEXT_PUBLIC_SANITY_PERSPECTIVE || 'published',
});

// Helper function for fetching data with optional caching
export async function sanityFetch({
  query,
  params = {},
  tags = [],
}) {
  return client.fetch(query, params, {
    cache: process.env.NODE_ENV === 'development' ? 'no-store' : 'force-cache',
    next: { tags },
  });
}