import Image from "next/image";

import { Button } from "../ui/Button";
import { Media } from "../ui/Media";
import Icon from "../ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

import { aboutPills } from "@/lib/site";
import { SectionHeading } from "../ui/SectionHeading";

export function AboutSection() {
  return (
    <section className="bg-[#F8F3E9]">
      <div className="grid grid-cols-1 items-stretch lg:gap-8 lg:grid-cols-2 ">
        {/* About images */}
        <Reveal x={-32} y={0} className="min-w-0">
          <Media
            src="home/about1.png"
            alt="Child building with wooden toy trains"
            className="xl:block lg:hidden block 2xl:aspect-2/1 aspect-3/2 lg:rounded-r-2xl"
          />
          <Media
            src="home/about.png"
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
            src="/images/home/leaf.png"
            alt=""
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="-z-10 object-contain object-top-right"
          />

          <Reveal
            y={24}
            delay={0.12}
            className="relative isolate flex min-h-100 min-w-0 flex-col justify-center overflow-hidden lg:px-0 px-6 py-6 lg:min-h-0"
          >
            <SectionHeading
              title={
                <>
                  About <span className="text-ember">R3R NextGen</span>
                </>
              }
              text={
                <>
                  We are building a sustainable manufacturing business dedicated
                  to wooden toys and children&apos;s furniture. Our focus is on
                  creating safe, biodegradable, innovative and screen-free
                  products supported by modern manufacturing practices and
                  stringent quality standards, for families and markets across
                  the world.
                </>
              }
            />

            {/* Staggered feature pills */}
            <RevealGroup className="mt-6 flex flex-wrap gap-5">
              {aboutPills.map((pill) => (
                <RevealItem key={pill.title}>
                  <div className="flex flex-col items-center gap-1 text-xs font-semibold">
                    <span className="grid size-10 place-items-center text-leaf">
                      <Icon name={pill.icon} />
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
          </Reveal>
        </Reveal>
      </div>
    </section>
  );
}
