import Image from "next/image";

import { Button } from "../ui/Button";
import { Media } from "../ui/Media";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

import { mfgPoints } from "@/lib/site";

export function ManufacturingSection() {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-4">
        <Reveal x={-28} y={0} className="min-w-0">
          <Media
            src="manufacturing1.png"
            alt="Craftsman working in the R3R NextGen workshop"
            className="block aspect-2/1 lg:hidden xl:block xl:aspect-auto xl:min-h-full"
          />

          <Media
            src="manufacturing.png"
            alt="Craftsman working in the R3R NextGen workshop"
            className="hidden aspect-4/3 lg:block xl:hidden"
          />
        </Reveal>

        {/* Right content */}
        <Reveal
          y={24}
          delay={0.12}
          className="relative isolate flex min-h-100 min-w-0 flex-col justify-center overflow-hidden px-6 py-10 md:px-12 lg:min-h-0 lg:py-12"
        >
          <Image
            src="/images/home/manufacturing-right.png"
            alt=""
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="-z-10 object-cover object-right"
          />

          <div
            className="absolute inset-0 -z-10 bg-cream/50 xl:bg-cream/15"
            aria-hidden="true"
          />

          <SectionHeading
            eyebrow="Manufacturing Excellence"
            title="Modern Manufacturing for a Brighter Tomorrow"
            textColor="text-gray-900"
            text="Modern facilities, skilled workforce and scalable processes to deliver high-quality wooden toys and children's furniture for domestic and global markets."
          />

          <Reveal y={12} delay={0.15} className="mt-6">
            <Button href="/manufacturing" variant="primary">
              Our Manufacturing Capabilities
            </Button>
          </Reveal>

          {/* Staggered manufacturing highlights */}
          <RevealGroup className="mt-8 flex flex-wrap gap-6">
            {mfgPoints.map((point) => (
              <RevealItem key={point.title}>
                <div className="flex items-center gap-2 text-xs font-semibold">
                  <Icon
                    name={point.icon}
                    size={18}
                    className="shrink-0 text-leaf"
                  />
                  {point.title}
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </Reveal>
      </div>
    </section>
  );
}