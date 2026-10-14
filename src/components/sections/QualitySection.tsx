import { Media } from "../ui/Media";
import { IconTile } from "../ui/IconTile";
import { quality } from "@/lib/site";
import Image from "next/image";
import { SectionHeading } from "../ui/SectionHeading";

export function QualitySection() {
  return (
    <section className="bg-leaf-soft">
      <div className="grid items-center lg:grid-cols-[1fr_1.6fr]">
        <Media
          src="home/sustainability.jpg"
          alt="Hands planting a seedling"
          className="aspect-5/3 h-full"
        />
        <div className="px-6 py-12 md:px-12">
          {/* <div className="relative px-6 py-12 md:px-12 isolate min-w-0 overflow-hidden rounded-3xl">
          <Image
            src="/images/leaf.png"
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="-z-10 object-right opacity-100"
          /> */}
          <SectionHeading
            eyebrow="A Responsible Tomorrow"
            eyebrowColor="text-leaf"
            title="Quality &amp; Sustainability"
            titleColor="text-leaf-dark"
            text="Built on stringent quality standards and a strong commitment to sustainable materials, responsible manufacturing and eco-friendly packaging for a healthier planet."
            textColor="text-leaf-dark"
          />
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {quality.map((q) => (
              <IconTile
                key={q.title}
                iconSize={36}
                item={q}
                iconBgColor="bg-white/60"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
