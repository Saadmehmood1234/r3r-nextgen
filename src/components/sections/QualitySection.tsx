import { Media } from "../ui/Media";
import { IconTile } from "../ui/IconTile";
import { quality } from "@/lib/site";
import Image from "next/image";

export function QualitySection() {
  return (
    <section className="bg-leaf-soft/70">
      <div className="grid items-center lg:grid-cols-[1fr_1.6fr]">
        <Media
          src="sustainability.png"
          alt="Hands planting a seedling"
          className="min-h-64 h-full"
        />
        {/* <div className="px-6 py-12 md:px-12"> */}
        <div className="relative px-6 py-12 md:px-12 isolate min-w-0 overflow-hidden rounded-3xl">
          <Image
            src="/images/leaf.png"
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="-z-10 object-right opacity-100"
          />
          <p className="mb-1 text-xs font-bold uppercase tracking-wider text-ember">
            A Responsible Tomorrow
          </p>
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Quality &amp; Sustainability
          </h2>
          <p className="mt-3 max-w-xl text-sm text-muted">
            Built on stringent quality standards and a strong commitment to
            sustainable materials, responsible manufacturing and eco-friendly
            packaging for a healthier planet.
          </p>
          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {quality.map((q) => (
              <IconTile key={q.title} item={q} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
