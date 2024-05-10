/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["flagcdn.com", "upload.wikimedia.org"], // Add 'flagcdn.com' to the allowed domains
  },
};

export default nextConfig;
