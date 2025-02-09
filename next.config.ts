import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // allow all image srcs
  images: {
    domains: ["*"],
  },
};

export default nextConfig;
