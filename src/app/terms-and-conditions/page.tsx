import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = pageMeta(
  "Terms & Conditions",
  "Terms & Conditions of R3R NextGen (OPC) Pvt. Ltd.",
  "/terms-and-conditions",
);

export default function Page() {
  return (
    <LegalPage
      title="Terms & Conditions"
      sections={[
        {
          h: "Overview",
          p: "By using this website you agree to these terms. Product information is provided for general reference.",
        },
        { h: "Contact", p: "For questions, write to info@r3rnextgen.com." },
      ]}
    />
  );
}
