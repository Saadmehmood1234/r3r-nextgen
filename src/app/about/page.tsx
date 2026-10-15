import type { Metadata } from "next";
import WhyPartner from "@/components/pages/about/WhyPartner";
import QualityAndCertificate from "@/components/pages/about/QualityAndCertificate";
import OurStory from "@/components/pages/about/OurStory";
import ManagementMessage from "@/components/pages/about/ManagementMessage";
import CoreValues from "@/components/pages/about/CoreValues";
import AboutHero from "@/components/pages/about/Hero";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "About Us | R3R NextGen",
  description:
    "R3R Next Gen (OPC) Private Limited manufactures high-quality wooden toys and children's furniture that are safe, sustainable and thoughtfully designed.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <CoreValues />
      <ManagementMessage />

      <WhyPartner />
      <QualityAndCertificate />
      <CtaBanner/>
    </>
  );
}
