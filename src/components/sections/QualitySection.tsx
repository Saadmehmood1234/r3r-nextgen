import { Media } from "../ui/Media";
import { IconTile } from "../ui/IconTile";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

import { quality } from "@/lib/site";

export function QualitySection() {
  return (
    <section className="overflow-hidden bg-leaf-soft">
      <div className="grid items-center lg:grid-cols-[1fr_1.6fr]">
        <Reveal x={-28} y={0} className="h-full min-w-0">
          <Media
            src="home/sustainability.jpg"
            alt="Hands planting a seedling"
            className="aspect-5/3 h-full"
          />
        </Reveal>
        <div className="px-6 py-12 md:px-12">
          <Reveal y={24}>
            <SectionHeading
              eyebrow="A Responsible Tomorrow"
              eyebrowColor="text-leaf"
              title={
                <>
                  Quality & <span className="text-leaf">Sustainability</span>
                </>
              }
              titleColor="text-leaf-dark"
              text="Built on stringent quality standards and a strong commitment to sustainable materials, responsible manufacturing and eco-friendly packaging for a healthier planet."
              textColor="text-leaf-dark"
            />
          </Reveal>
          <RevealGroup className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {quality.map((item) => (
              <RevealItem key={item.title}>
                <IconTile {...item} className="h-full min-h-25" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}
