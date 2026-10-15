import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = pageMeta(
  "Privacy Policy",
  "Privacy Policy of R3R NextGen (OPC) Pvt. Ltd.",
  "/privacy-policy",
);

export default function Page() {
  return (
    <LegalPage
      title="Privacy Policy"
      sections={[
        {
          h: "Overview",
          p: "This policy explains how R3R NextGen collects and uses information you share through this website, such as enquiry details.",
        },
        { h: "Contact", p: "For questions, write to info@r3rnextgen.com." },
      ]}
    />
  );
}
