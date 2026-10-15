import { SectionHeading } from "../ui/SectionHeading";
import { IconTile } from "../ui/IconTile";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

import { why } from "@/lib/site";

export function WhyChoose() {
  return (
    <section className="section-y border-b border-leaf/10 bg-leaf-soft">
      <div className="container-page">
        <div className="grid items-center gap-8 rounded-3xl lg:grid-cols-[1fr_1fr]">
          <Reveal y={24}>
            <SectionHeading
              eyebrow="Our Difference"
              title="Why Choose R3R NextGen"
              text="We combine sustainability, safety, innovation and manufacturing expertise to create meaningful products for children."
            />
          </Reveal>

          <RevealGroup className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {why.map((item) => (
              <RevealItem key={item.title}>
                <IconTile {...item} className="h-full min-h-[100px]" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
    </section>
  );
}