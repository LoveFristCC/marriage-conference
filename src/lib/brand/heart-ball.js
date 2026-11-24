// Shared geometry for the basketball-heart mark (100×100 viewBox).
// Used by HeartBall.svelte and scripts that generate static SVG/PNG assets.

export const HEART_PATH =
  'M50 92 C47 89 6 64 6 33 C6 16 18 5 32 5 C41 5 47 10 50 17 C53 10 59 5 68 5 C82 5 94 16 94 33 C94 64 53 89 50 92 Z';

// Basketball seam lines, clipped to the heart.
export const SEAM_PATHS = [
  'M50 0 L50 100', // vertical seam
  'M0 44 C30 38 70 38 100 44', // horizontal seam
  'M20 4 C34 22 34 62 18 84', // left curve
  'M80 4 C66 22 66 62 82 84' // right curve
];

export const COLORS = {
  ballLight: '#F29A4A',
  ballMid: '#D9772B',
  ballDark: '#8A3A12',
  seam: '#2A1208'
};
