// Central image registry — one unique asset per placement.
// The files live in `public/images` (WebP, max 1920px) and are served by this
// site itself, with no external image host.
const BASE = "/images";

export const images = {
  hero: `${BASE}/hero.webp`,
  exterior: `${BASE}/exterior.webp`,
  pool: `${BASE}/pool.webp`,
  suite: `${BASE}/suite.webp`,
  apartment: `${BASE}/apartment.webp`,
  dades: `${BASE}/dades.webp`,
  fez: `${BASE}/fez.webp`,
  pacha: `${BASE}/pacha.webp`,
  roof: `${BASE}/roof.webp`,
  spa: `${BASE}/spa.webp`,
  beach: `${BASE}/beach.webp`,
  meetings: `${BASE}/meetings.webp`,
  garden: `${BASE}/garden.webp`,
  lobby: `${BASE}/lobby.webp`,
  tagine: `${BASE}/tagine.webp`,
  wedding: `${BASE}/wedding.webp`,
  tennis: `${BASE}/tennis.webp`,
  panorama: `${BASE}/panorama.webp`,
};

export default images;