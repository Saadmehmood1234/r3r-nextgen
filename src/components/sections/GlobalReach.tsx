import { BackgroundImage } from "../ui/BackgroundImage";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../ui/Icon";
import { markets } from "@/lib/site";

export function GlobalReach() {
  return (
    <section>
      <BackgroundImage
        src="global1.png"
        alt="Globe with cargo trucks and shipping containers"
        overlay="none"
        className="min-h-90 md:min-h-80"
      >
        <div className="container-page w-full">
          <div className="max-w-xl">
            <SectionHeading
              eyebrow="Across Markets"
              title="From India to the World"
              text="Serving domestic markets and international buyers with scalable and export-ready manufacturing."
            />
            <ul className="mt-6 flex flex-wrap gap-6">
              {markets.map((m) => (
                <li
                  key={m.title}
                  className="flex items-center gap-2 text-sm font-semibold"
                >
                  <span className="grid size-10 place-items-center rounded-full bg-leaf-soft text-leaf">
                    <Icon name={m.icon} size={20} />
                  </span>
                  {m.title}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </BackgroundImage>
    </section>
  );
}