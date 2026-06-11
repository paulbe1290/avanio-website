import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Alle Seiten werden statisch gerendert (SSG), siehe Seitenarchitektur.
  // Kein Output-Override noetig: Next rendert App-Router-Seiten ohne
  // dynamische APIs automatisch statisch.
  reactStrictMode: true,
};

export default nextConfig;
