/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['sffibadxecltlnyispep.supabase.co', 'transparentpng.com'],
    minimumCacheTTL: 21600,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 768, 1200],
  },
  experimental: {
    serverActions: true,
  },
};

module.exports = nextConfig;
