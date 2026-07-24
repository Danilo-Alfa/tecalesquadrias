import type { NextConfig } from "next";

// Exportacao 100% estatica para hospedagem na Hostinger (sem Node em producao).
// trailingSlash garante URLs compativeis com servidores Apache/LiteSpeed.
const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
