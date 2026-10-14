import Image from "next/image";

import { Button } from "../ui/Button";
import { Media } from "../ui/Media";
import { Icon } from "../ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

import { aboutPills } from "@/lib/site";

export function AboutSection() {
  return (
    <section className="bg-[#F8F3E9]">
      <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-4">
        {/* About images */}
        <Reveal x={-32} y={0} className="min-w-0">
          <Media
            src="about1.png"
            alt="Child building with wooden toy trains"
            className="xl:block lg:hidden block aspect-2/1 lg:rounded-r-2xl"
          />
          <Media
            src="about.png"
            alt="Child building with wooden toy trains"
            className="xl:hidden lg:block hidden aspect-4/3 rounded-r-2xl"
          />
        </Reveal>

        {/* About content */}
        <Reveal
          y={24}
          delay={0.12}
          className="relative isolate min-w-0 overflow-hidden rounded-3xl"
        >
          <Image
            src="/images/leaf.png"
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="-z-10 object-cover object-right opacity-100"
          />

          <div className="relative z-10 p-5 sm:p-8">
            <Reveal y={16}>
              <h2 className="text-3xl font-extrabold md:text-4xl">
                About <span className="text-ember">R3R NextGen</span>
              </h2>
            </Reveal>

            <Reveal y={16} delay={0.1}>
              <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
                We are building a sustainable manufacturing business dedicated
                to wooden toys and children&apos;s furniture. Our focus is on
                creating safe, biodegradable, innovative and screen-free
                products supported by modern manufacturing practices and
                stringent quality standards, for families and markets across the
                world.
              </p>
            </Reveal>

            {/* Staggered feature pills */}
            <RevealGroup className="mt-6 flex flex-wrap gap-5">
              {aboutPills.map((pill) => (
                <RevealItem key={pill.title}>
                  <div className="flex flex-col items-center gap-1 text-xs font-semibold">
                    <span className="grid size-10 place-items-center rounded-full bg-leaf-soft text-leaf">
                      <Icon name={pill.icon} size={20} />
                    </span>
                    {pill.title}
                  </div>
                </RevealItem>
              ))}
            </RevealGroup>

            <Reveal y={12} delay={0.15}>
              <div className="mt-7">
                <Button href="/about" variant="outline">
                  Know More About Us
                </Button>
              </div>
            </Reveal>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
