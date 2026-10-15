import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { ContactForm } from "@/components/sections/ContactForm";
import Icon from "@/components/ui/Icon";
import { site } from "@/lib/site";

export const metadata = pageMeta(
  "Contact",
  "Contact R3R NextGen for wholesale, OEM, white label and export enquiries.",
  "/contact",
);

export default function Page() {
  return (
    <>
      <PageHero
        title="Contact Us"
        text="Tell us what you need. We will get back to you shortly."
      />
      <div className="container-page section-y grid gap-10 md:grid-cols-2">
        <ContactForm />
        <ul className="space-y-5 text-sm">
          <li className="flex gap-3">
            <Icon name="map" className="text-leaf" />
            {site.address}
          </li>
          <li className="flex gap-3">
            <Icon name="mail" className="text-leaf" />
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li className="flex gap-3">
            <Icon name="phone" className="text-leaf" />
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          </li>
        </ul>
      </div>
    </>
  );
}
