import Image from "next/image";

import { Button } from "../ui/Button";
import { Media } from "../ui/Media";
import Icon from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

import { mfgPoints } from "@/lib/site";

export function ManufacturingSection() {
  return (
    <section className="overflow-hidden">
      <div className="grid grid-cols-1 items-stretch lg:gap-8 lg:grid-cols-2 ">
        <Reveal x={-28} y={0} className="min-w-0">
          {/* <Media
            src="home/manufacturing.png"
            alt="Craftsman working in the R3R NextGen workshop"
            className="block aspect-2/1 lg:hidden xl:block lg:rounded-r-2xl xl:aspect-auto xl:min-h-full"
          />

          <Media
            src="home/manufacturing.png"
            alt="Craftsman working in the R3R NextGen workshop"
            className="hidden aspect-4/3 lg:block xl:hidden rounded-r-2xl"
          /> */}
          <Media
            src="home/manufacturing.png"
            alt="Craftsman working in the R3R NextGen workshop"
            className="aspect-5/3 2xl:hidden block k lg:rounded-r-2xl"
          />
          <Media
            src="home/manufacturing1.png"
            alt="Craftsman working in the R3R NextGen workshop"
            className="aspect-2/1 2xl:block hidden k lg:rounded-r-2xl"
          />
        </Reveal>
        <Reveal
          y={24}
          delay={0.12}
          className="relative isolate flex min-h-100 min-w-0 flex-col justify-center overflow-hidden lg:px-0 px-6 py-6 lg:min-h-0"
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
            eyebrowColor="text-leaf"
            title={
              <>
                Modern Manufacturing for a{" "}
                <span className="text-leaf">Brighter Tomorrow</span>
              </>
            }
            textColor="text-gray-900"
            text="Modern facilities, skilled workforce and scalable processes to deliver high-quality wooden toys and children's furniture for domestic and global markets."
          />

          <Reveal y={12} delay={0.15} className="mt-6">
            <Button href="/manufacturing" variant="leaf">
              Our Manufacturing Capabilities
            </Button>
          </Reveal>
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
