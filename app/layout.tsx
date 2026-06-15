import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

import CookieBanner from "@/components/CookieBanner";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import SchemaJsonLd from "@/components/SchemaJsonLd";
import {
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  organizationSchema,
  webSiteSchema,
} from "@/lib/seo";

import "./globals.css";

// Schriftpaar der Avanio-CI, von next/font lokal gehostet (kein
// Google-Fonts-Request zur Laufzeit): Space Grotesk für Headlines,
// Inter für Fließtext.
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME}: KI-Agentur für Prozessautomatisierung im Mittelstand`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="flex min-h-screen flex-col">
        {/* Globale strukturierte Daten: Organization + WebSite */}
        <SchemaJsonLd schema={[organizationSchema(), webSiteSchema()]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
