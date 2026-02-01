/**
 * Image URLs using Picsum Photos (reliable, no auth required).
 * Format: https://picsum.photos/seed/{seed}/width/height
 */
export const images = {
  hero: `https://picsum.photos/seed/travel-hero/1920/1080`,
  newsletterBg: `https://picsum.photos/seed/travel-newsletter/1920/600`,

  tours: {
    tropical: `https://picsum.photos/seed/tropical-beach/800/560`,
    mountain: `https://picsum.photos/seed/mountain-alps/800/560`,
    cultural: `https://picsum.photos/seed/temple-cultural/800/560`,
  },

  destinations: [
    `https://picsum.photos/seed/bali/600/450`,
    `https://picsum.photos/seed/santorini/600/450`,
    `https://picsum.photos/seed/alps/600/450`,
    `https://picsum.photos/seed/tokyo/600/450`,
    `https://picsum.photos/seed/iceland/600/450`,
    `https://picsum.photos/seed/marrakech/600/450`,
  ],

  avatars: [
    `https://picsum.photos/seed/avatar1/150/150`,
    `https://picsum.photos/seed/avatar2/150/150`,
    `https://picsum.photos/seed/avatar3/150/150`,
  ],
} as const;
