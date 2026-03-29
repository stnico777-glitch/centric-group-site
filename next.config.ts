import type { NextConfig } from "next";

const staticExport = process.env.STATIC_EXPORT === "1";
const basePath =
  staticExport && process.env.BASE_PATH
    ? process.env.BASE_PATH.startsWith("/")
      ? process.env.BASE_PATH
      : `/${process.env.BASE_PATH}`
    : "";

const nextConfig: NextConfig = {
  ...(staticExport ? { output: "export" as const } : {}),
  ...(basePath ? { basePath, assetPrefix: basePath } : {}),
  images: {
    unoptimized: staticExport,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
