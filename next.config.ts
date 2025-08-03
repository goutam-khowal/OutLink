import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "20mb",
    },
  },
  images: {
    remotePatterns: [
      new URL(
        "https://img.freepik.com/free-vector/abstract-organic-pattern-design-background_1048-19286.jpg?t=st=1754157018~exp=1754160618~hmac=7207ddc186d4ffb1cbf364c144cc834e2dafb85d503d725c24aab30810164582&w=1380"
      ),
      {
        hostname: "img.clerk.com",
      },
      {
        hostname: "res.cloudinary.com",
      },
    ],
  },
};

export default nextConfig;
