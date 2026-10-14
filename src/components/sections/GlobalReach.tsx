import { BackgroundImage } from "../ui/BackgroundImage";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../ui/Icon";
import { markets } from "@/lib/site";
import Image from "next/image";
import { Media } from "../ui/Media";

export function GlobalReach() {
  return (
    <section className="section-y lg:py-0 pb-0">
      <BackgroundImage
        src="global2.png"
        alt="Globe with cargo trucks and shipping containers"
        overlay="none"
        className="min-h-90 3xl:min-h-140 lg:block hidden lg:min-h-90"
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
                  className="flex w-full max-w-28 flex-col items-center gap-2 text-sm font-semibold"
                >
                  <span className="relative grid size-18 shrink-0 place-items-center rounded-full">
                    <Image
                      src={`${m.image}`}
                      alt=""
                      width={48}
                      height={48}
                      sizes="48px"
                      className="size-12 object-contain"
                    />
                  </span>

                  <span className="w-full text-center text-xs font-extrabold leading-snug">
                    {m.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </BackgroundImage>
      <div className="container-page w-full lg:hidden">
        <div className="w-full max-w-xl">
          <SectionHeading
            eyebrow="Across Markets"
            title="From India to the World"
            text="Serving domestic markets and international buyers with scalable and export-ready manufacturing."
          />

          <ul className="mt-6 flex flex-wrap gap-6">
            {markets.map((m) => (
              <li
                key={m.title}
                className="flex w-full max-w-24 sm:max-w-28 flex-col items-center gap-2 text-sm font-semibold"
              >
                <span className="relative grid size-18 shrink-0 place-items-center rounded-full">
                  <Image
                    src={`${m.image}`}
                    alt=""
                    width={48}
                    height={48}
                    sizes="48px"
                    className="size-12 object-contain"
                  />
                </span>

                <span className="w-full text-center text-xs font-extrabold leading-snug">
                  {m.title}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <Media
        src="home/global-mobile1.png"
        alt="Child building with wooden toy trains"
        sizes="(max-width: 639px) 100vw, 576px"
        className="aspect-2/1 w-full rounded-2xl lg:hidden mt-8"
      />
    </section>
  );
}
