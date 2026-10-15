import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { QualitySection } from "@/components/sections/QualitySection";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { CtaBanner } from "@/components/sections/CtaBanner";
export const metadata = pageMeta(
  "Quality & Sustainability",
  "Our commitment to safe, compliant, sustainable materials and responsible manufacturing.",
  "/quality-sustainability",
);

export default function Page() {
  return (
    <>
      <PageHero
        title="Quality & Sustainability"
        text="A responsible tomorrow, built on strict quality standards and sustainable practice."
      />
      <QualitySection />
      <WhyChoose />
      <CtaBanner />
    </>
  );
}
