import { pageMeta } from "@/lib/seo";
import { LegalPage } from "@/components/sections/LegalPage";

export const metadata = pageMeta("Disclaimer", "Disclaimer of R3R NextGen (OPC) Pvt. Ltd.", "/disclaimer");

export default function Page() {
  return <LegalPage title="Disclaimer" sections={[
    { h: "Overview", p: "Product images are illustrative. Specifications, availability and pricing are subject to change without notice." },
    { h: "Contact", p: "For questions, write to info@r3rnextgen.com." },
  ]} />;
}
