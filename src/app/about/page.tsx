import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { CtaBanner } from "@/components/sections/CtaBanner";
export const metadata = pageMeta(
  "About Us",
  "Learn about R3R NextGen, our story, vision, mission and values in sustainable wooden toy manufacturing.",
  "/about",
);

export default function Page() {
  return (
    <>
      <PageHero
        title="About R3R NextGen"
        text="A sustainable manufacturing business dedicated to wooden toys and children's furniture."
      />
      <AboutSection />
      <WhyChoose />
      <CtaBanner />
    </>
  );
}
