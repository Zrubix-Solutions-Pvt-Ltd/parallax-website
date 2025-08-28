/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      'placehold.co',
      'media.licdn.com',
      'media.cntraveler.com',
      'res.klook.com',
      'kamalaya.com',
      'cf.bstatic.com',
      'nandinibali.com',
      'www.wellbeingescapes.com',
      'goapropertyguru.com',
    ],
    // Or use remotePatterns:
    // remotePatterns: [
    //   { protocol: 'https', hostname: 'placehold.co', pathname: '/**' },
    //   { protocol: 'https', hostname: 'media.licdn.com', pathname: '/**' },
    //   { protocol: 'https', hostname: 'media.cntraveler.com', pathname: '/**' },
    //   { protocol: 'https', hostname: 'res.klook.com', pathname: '/**' },
    //   { protocol: 'https', hostname: 'kamalaya.com', pathname: '/**' },
    //   { protocol: 'https', hostname: 'cf.bstatic.com', pathname: '/**' },
    //   { protocol: 'https', hostname: 'nandinibali.com', pathname: '/**' },
    //   { protocol: 'https', hostname: 'www.wellbeingescapes.com', pathname: '/**' },
    // ],
  },
};

export default nextConfig;