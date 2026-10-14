import { SectionHeading } from "../ui/SectionHeading";
import { IconTile } from "../ui/IconTile";
import { why } from "@/lib/site";

export function WhyChoose() {
  return (
    <section className="section-y bg-leaf-soft border-b border-leaf/10">
      <div className="container-page">
        <div className="grid items-center gap-8 rounded-3xl lg:grid-cols-[1fr_1fr]">
          <SectionHeading
            eyebrow="Our Difference"
            title="Why Choose R3R NextGen"
            text="We combine sustainability, safety, innovation and manufacturing expertise to create meaningful products for children."
          />
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
            {why.map((w) => (
              <IconTile key={w.title} item={w} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
