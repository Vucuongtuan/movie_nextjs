/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.ophim.live",
        port: "",
        pathname: "/uploads/movies/**",
      },
    ],
    // formats: ["image/avif", "image/webp"],
    domains: [
      "img.ophim.live",
      "scontent.fsgn2-7.fna.fbcdn.net",
      "scontent.fsgn2-9.fna.fbcdn.net",
      "scontent.fsgn2-10.fna.fbcdn.net",
    ],
  },
};

export default nextConfig;
