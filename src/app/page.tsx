import { Hero } from "@/components/sections/Hero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProductWorld } from "@/components/sections/ProductWorld";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { ManufacturingSection } from "@/components/sections/ManufacturingSection";
import { OemSection } from "@/components/sections/OemSection";
import { QualitySection } from "@/components/sections/QualitySection";
import { GlobalReach } from "@/components/sections/GlobalReach";
import { CtaBanner } from "@/components/sections/CtaBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ProductWorld />
      <WhyChoose />
      <ProcessSteps />
      <ManufacturingSection />
      <OemSection />
      <QualitySection />
      <GlobalReach />
      <CtaBanner />
    </>
  );
}
