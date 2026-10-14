import { Button } from "../ui/Button";
import { Media } from "../ui/Media";
import { Icon } from "../ui/Icon";
import { aboutPills } from "@/lib/site";
import Image from "next/image";

export function AboutSection() {
  return (
    <section className="section-y bg-[#F8F3E9] border-b border-gray-200/50">
      <div className="grid items-center lg:gap-4 gap-8 grid-cols-1 lg:grid-cols-2">
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
        <div className="relative isolate min-w-0 overflow-hidden rounded-3xl">
          <Image
            src="/images/leaf.png"
            alt=""
            fill
            sizes="(max-width: 767px) 100vw, 50vw"
            className="-z-10 object-right opacity-100"
          />
          <div className="relative z-10 p-5 sm:p-8">
            <h2 className="text-3xl font-extrabold md:text-4xl">
              About <span className="text-ember">R3R NextGen</span>
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-muted md:text-base">
              We are building a sustainable manufacturing business dedicated to
              wooden toys and children&apos;s furniture. Our focus is on
              creating safe, biodegradable, innovative and screen-free products
              supported by modern manufacturing practices and stringent quality
              standards, for families and markets across the world.
            </p>

            <ul className="mt-6 flex flex-wrap gap-5">
              {aboutPills.map((p) => (
                <li
                  key={p.title}
                  className="flex flex-col items-center gap-1 text-xs font-semibold"
                >
                  <span className="grid size-10 place-items-center rounded-full bg-leaf-soft text-leaf">
                    <Icon name={p.icon} size={20} />
                  </span>
                  {p.title}
                </li>
              ))}
            </ul>

            <div className="mt-7">
              <Button href="/about" variant="outline">
                Know More About Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
