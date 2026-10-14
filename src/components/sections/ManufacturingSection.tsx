import { Button } from "../ui/Button";
import { Media } from "../ui/Media";
import { Icon } from "../ui/Icon";
import { mfgPoints } from "@/lib/site";
import { SectionHeading } from "../ui/SectionHeading";
import Image from "next/image";

export function ManufacturingSection() {
  return (
    <section className="">
      <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-4">
        {/* Left image */}
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

        <div className="relative isolate flex min-h-100 min-w-0 flex-col justify-center overflow-hidden px-6 py-10 md:px-12 lg:min-h-0 lg:py-12">
          <Image
            src="/images/home/manufacturing-right.png"
            alt=""
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="-z-10 object-cover object-right"
          />

          <div
            className="absolute inset-0 -z-10 xl:bg-cream/15 bg-cream/50"
            aria-hidden="true"
          />

          <SectionHeading
            eyebrow="Manufacturing Excellence"
            title="Modern Manufacturing for a Brighter Tomorrow"
            textColor="text-gray-900"
            text="Modern facilities, skilled workforce and scalable processes to deliver high-quality wooden toys and children's furniture for domestic and global markets."
          />

          <div className="mt-6">
            <Button href="/manufacturing" variant="primary">
              Our Manufacturing Capabilities
            </Button>
          </div>

          <ul className="mt-8 flex flex-wrap gap-6">
            {mfgPoints.map((p) => (
              <li
                key={p.title}
                className="flex items-center gap-2 text-xs font-semibold"
              >
                <Icon name={p.icon} size={18} className="shrink-0 text-leaf" />
                {p.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
