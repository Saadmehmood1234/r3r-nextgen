import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { ManufacturingSection } from "@/components/sections/ManufacturingSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { GlobalReach } from "@/components/sections/GlobalReach";
import { CtaBanner } from "@/components/sections/CtaBanner";
export const metadata = pageMeta(
  "Manufacturing & Global Supply",
  "Modern, scalable wooden toy manufacturing with export-ready global supply from India.",
  "/manufacturing",
);

export default function Page() {
  return (
    <>
      <PageHero
        title="Manufacturing & Global Supply"
        text="Modern facilities, skilled people and scalable processes for domestic and global markets."
      />
      <ManufacturingSection />
      <div className="pt-14">
        <ProcessSteps />
      </div>
      <GlobalReach />
      <CtaBanner />
    </>
  );
}
