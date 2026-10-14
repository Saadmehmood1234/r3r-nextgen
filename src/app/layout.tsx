import type { Metadata, Viewport } from "next";
import { Nunito, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

const heading = Nunito({ subsets: ["latin"], variable: "--font-heading", weight: ["700", "800"] });
const body = Nunito_Sans({ subsets: ["latin"], variable: "--font-body" });

export const viewport: Viewport = { themeColor: "#2f6b3a" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.short} | Sustainable Wooden Toys & Children's Furniture`, template: `%s | ${site.short}` },
  description: site.description,
  keywords: ["wooden toys", "children's furniture", "sustainable toys", "OEM toys India", "white label toys", "toy manufacturer Greater Noida"],
  openGraph: { title: site.name, description: site.description, url: site.url, siteName: site.name, type: "website", locale: "en_IN", images: ["/images/hero.jpg"] },
  twitter: { card: "summary_large_image", title: site.name, description: site.description },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = { "@context": "https://schema.org", "@type": "Organization", name: site.name, url: site.url, email: site.email, telephone: site.phone, address: { "@type": "PostalAddress", addressLocality: "Greater Noida", addressCountry: "IN" } };
  return (
    <html lang="en" className={`${heading.variable} ${body.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
