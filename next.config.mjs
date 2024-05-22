/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
    domains: ["img.ophim.live", "scontent.fsgn2-9.fna.fbcdn.net"],
  },
};

export default nextConfig;
