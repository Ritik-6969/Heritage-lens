/**
 * Image error fallback utility
 * Prevents broken image icons by safely replacing broken URLs with verified high-res fallbacks.
 */

export const DEFAULT_HERITAGE_FALLBACK = 'https://images.unsplash.com/photo-1596401057633-54a8fe8ef647?auto=format&fit=crop&w=800&q=80';
export const DEFAULT_CULTURE_FALLBACK = 'https://images.unsplash.com/photo-1579783902614-a3fb3927b675?auto=format&fit=crop&w=800&q=80';
export const DEFAULT_HOTEL_FALLBACK = 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=80';

export const handleImageError = (
  e: React.SyntheticEvent<HTMLImageElement, Event>,
  fallbackUrl: string = DEFAULT_HERITAGE_FALLBACK
) => {
  const target = e.currentTarget;
  if (target.src !== fallbackUrl) {
    target.src = fallbackUrl;
  }
};
