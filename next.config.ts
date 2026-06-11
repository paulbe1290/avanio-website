import createMDX from "@next/mdx";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Alle Seiten werden statisch gerendert (SSG), siehe Seitenarchitektur.
  // Kein Output-Override noetig: Next rendert App-Router-Seiten ohne
  // dynamische APIs automatisch statisch.
  reactStrictMode: true,
  // MDX wird nicht als eigene Route genutzt, sondern als importierte
  // Komponente in /ratgeber/[slug]; die Extension bleibt trotzdem erlaubt.
  pageExtensions: ["ts", "tsx", "mdx"],
};

const withMDX = createMDX({});

export default withMDX(nextConfig);
