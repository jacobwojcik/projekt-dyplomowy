/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['sffibadxecltlnyispep.supabase.co'],
    minimumCacheTTL: 21600,
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [320, 768, 1200],
  },
};

module.exports = nextConfig;
