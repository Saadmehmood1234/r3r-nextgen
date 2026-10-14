import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { OemSection } from "@/components/sections/OemSection";
import { ProcessSteps } from "@/components/sections/ProcessSteps";
import { CtaBanner } from "@/components/sections/CtaBanner";
export const metadata = pageMeta("OEM & White Label", "Custom product development, private label and bulk wooden toy manufacturing for brands, retailers and institutions.", "/oem-white-label");

export default function Page() {
  return (<>
    <PageHero title="OEM & White Label Manufacturing" text="Your brand. Our expertise." />
    <OemSection /><ProcessSteps /><CtaBanner />
  </>);
}
