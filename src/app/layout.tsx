import type { Metadata, Viewport } from "next";
import { Poppins, Caveat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";

const heading = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
  display: "swap",
});
const body = Poppins({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500"],
  display: "swap",
});
// Handwritten accent text ("Play Learn Grow", "Thoughtful Toys...")
const script = Caveat({
  subsets: ["latin"],
  variable: "--font-script",
  weight: ["500", "700"],
  display: "swap",
});

export const viewport: Viewport = { themeColor: "#2f6b3a" };

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.short} | Sustainable Wooden Toys & Children's Furniture`,
    template: `%s | ${site.short}`,
  },
  description: site.description,
  keywords: [
    "wooden toys",
    "children's furniture",
    "sustainable toys",
    "OEM toys India",
    "white label toys",
    "toy manufacturer Greater Noida",
  ],
  openGraph: {
    title: site.name,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
    locale: "en_IN",
    images: ["/images/hero.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.name,
    url: site.url,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Greater Noida",
      addressCountry: "IN",
    },
  };
  return (
    <html
      lang="en"
      className={`${heading.variable} ${body.variable} ${script.variable}`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}