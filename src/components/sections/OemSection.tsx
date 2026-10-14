import { Button } from "../ui/Button";
import { Media } from "../ui/Media";
import { IconTile } from "../ui/IconTile";
import { oem } from "@/lib/site";
import { SectionHeading } from "../ui/SectionHeading";

export function OemSection() {
  return (
    <section className="section-y overflow-hidden bg-red-soft lg:pr-0">
      <div className="container-page lg:mr-0 lg:max-w-none lg:pl-[max(2rem,calc((100vw-80rem)/2))] lg:pr-0">
        <div className="grid items-center grid-cols-1 gap-8 xl:grid-cols-[2.3fr_0.7fr] lg:grid-cols-[1.6fr_1.4fr]">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_1.1fr]">
            <div className="min-w-0">
              <SectionHeading
                eyebrow="Your Brand. Our Expertise"
                title="OEM &amp; White Label Manufacturing"
                text="Custom product development, private label manufacturing and bulk supply for brands, retailers and institutional buyers."
              />
              <div className="mt-6">
                <Button href="/contact">Discuss Your Requirement</Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-3">
              {oem.map((item) => (
                <IconTile key={item.title} iconSize={32} iconBgColor="bg-[#FFF9F9]" item={item} />
              ))}
            </div>
          </div>

          <Media
            src="oem.png"
            alt="Wooden toys ready for private label branding"
            sizes="(max-width: 1023px) 100vw, 40vw"
            className="aspect-4/3 rounded-2xl sm:rounded-3xl lg:aspect-5/4 lg:rounded-r-none lg:rounded-l-xl"
          />
        </div>
      </div>
    </section>
  );
}
