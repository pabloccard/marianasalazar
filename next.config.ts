import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ["192.168.0.102"],
  output: "export", // Transforma o site num pacote HTML ultra-rápido sem processamento de backend
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
