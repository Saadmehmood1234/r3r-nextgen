import Image from "next/image";

import { BackgroundImage } from "../ui/BackgroundImage";
import { SectionHeading } from "../ui/SectionHeading";
import { Media } from "../ui/Media";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

import { markets } from "@/lib/site";

export function GlobalReach() {
  return (
    <section className="section-y pb-0 lg:py-0">
      {/* Desktop global reach */}
      <BackgroundImage
        src="global2.png"
        alt="Globe with cargo trucks and shipping containers"
        overlay="none"
        className="hidden min-h-90 lg:block lg:min-h-90 3xl:min-h-140"
      >
        <div className="container-page w-full">
          <div className="max-w-xl">
            <Reveal y={24}>
              <SectionHeading
                eyebrow="Across Markets"
                title="From India to the World"
                text="Serving domestic markets and international buyers with scalable and export-ready manufacturing."
              />
            </Reveal>

            <RevealGroup className="mt-6 flex flex-wrap gap-6">
              {markets.map((market) => (
                <RevealItem key={market.title}>
                  <li className="flex w-full max-w-28 flex-col items-center gap-2 text-sm font-semibold">
                    <span className="relative grid size-18 shrink-0 place-items-center rounded-full">
                      <Image
                        src={market.image}
                        alt=""
                        width={48}
                        height={48}
                        sizes="48px"
                        className="size-12 object-contain"
                      />
                    </span>

                    <span className="w-full text-center text-xs font-extrabold leading-snug">
                      {market.title}
                    </span>
                  </li>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </BackgroundImage>

      {/* Mobile global reach */}
      <div className="container-page w-full lg:hidden">
        <div className="w-full max-w-xl">
          <Reveal y={24}>
            <SectionHeading
              eyebrow="Across Markets"
              title="From India to the World"
              text="Serving domestic markets and international buyers with scalable and export-ready manufacturing."
            />
          </Reveal>

          <RevealGroup className="mt-6 flex flex-wrap gap-6">
            {markets.map((market) => (
              <RevealItem key={market.title}>
                <div className="flex w-full max-w-24 flex-col items-center gap-2 text-sm font-semibold sm:max-w-28">
                  <span className="relative grid size-18 shrink-0 place-items-center rounded-full">
                    <Image
                      src={market.image}
                      alt=""
                      width={48}
                      height={48}
                      sizes="48px"
                      className="size-12 object-contain"
                    />
                  </span>

                  <span className="w-full text-center text-xs font-extrabold leading-snug">
                    {market.title}
                  </span>
                </div>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>

      {/* Mobile image */}
      <Reveal y={20} className="mt-8 lg:hidden">
        <Media
          src="home/global-mobile1.png"
          alt="Child building with wooden toy trains"
          sizes="(max-width: 639px) 100vw, 576px"
          className="aspect-2/1 w-full rounded-2xl"
        />
      </Reveal>
    </section>
  );
}