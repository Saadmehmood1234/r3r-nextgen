import { Button } from "../ui/Button";
import { Media } from "../ui/Media";
import { Icon } from "../ui/Icon";
import { mfgPoints } from "@/lib/site";
import { SectionHeading } from "../ui/SectionHeading";

export function ManufacturingSection() {
  return (
    <section className="bg-cream section-y max-lg:pt-0  border-b border-red-200/60">
      <div className="grid items-center lg:gap-4 gap-8 grid-cols-1 lg:grid-cols-2">
        <Media
          src="manufacturing1.png"
          alt="Craftsman working in the R3R NextGen workshop"
          className="xl:block lg:hidden block aspect-2/1 lg:rounded-r-2xl"
        />
        <Media
          src="manufacturing.png"
          alt="Craftsman working in the R3R NextGen workshop"
          className="xl:hidden lg:block hidden aspect-4/3 rounded-r-2xl"
        />
        <div className="px-6">
          {/* <div className="relative px-6 md:px-12 isolate min-w-0 overflow-hidden rounded-3xl">
          <Image
            src="/images/manufacturing-experience1.png"
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="-z-10 object-right opacity-100"
          /> */}
          <SectionHeading
            eyebrow="Manufacturing Excellence"
            title="Modern Manufacturing for a Brighter Tomorrow"
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
                <Icon name={p.icon} size={18} className="text-leaf" />
                {p.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
