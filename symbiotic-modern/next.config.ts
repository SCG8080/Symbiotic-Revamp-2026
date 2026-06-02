import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Symbiotic-Revamp-2026",
  trailingSlash: true,
  images: {
    loader: "custom",
    loaderFile: "./src/core/image-loader.ts",
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
