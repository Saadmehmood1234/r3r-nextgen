import { Button } from "../ui/Button";
import { BackgroundImage } from "../ui/BackgroundImage";
import { Icon } from "../ui/Icon";
import { heroFeatures } from "@/lib/site";

export function Hero() {
  return (
    <section className="border-b border-orange-200/60 bg-cream">
      <BackgroundImage
        src="home/hero.jpg"
        mobileSrc="home/hero-mobile.png"
        alt="Child playing with colourful wooden stacking toys"
        overlay="none"
        mobileOverlay="dark"
        priority
        sizes="(max-width: 767px) 0px, 100vw"
        mobileSizes="(max-width: 767px) 100vw, 0px"
        className="min-h-100 md:min-h-100 lg:min-h-140"
      >
        <div className="container-page w-full">
          <div className="max-w-xl">
            <h1 className="text-4xl font-extrabold leading-tight md:text-ink text-leaf-soft md:text-6xl">
              Crafting <span className="block">Sustainable Play</span>{" "}
              <span className="text-ember">
                for the Next Generation.
              </span>
            </h1>

            <p className="mt-5 max-w-md text-white md:text-black">
              Safe, screen-free and thoughtfully designed wooden toys and
              children&apos;s furniture, created with a focus on sustainability,
              quality and meaningful play.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Button href="/products">Explore Our Products</Button>
              <Button href="/contact" variant="light" arrow={false}>
                Partner With Us
              </Button>
            </div>
          </div>
        </div>
      </BackgroundImage>

      <div className="container-page grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
        {heroFeatures.map((f) => (
          <div key={f.title} className="flex items-center gap-3">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-leaf-soft text-leaf">
              <Icon name={f.icon} size={22} />
            </span>
            <div>
              <p className="text-sm font-bold">{f.title}</p>
              <p className="text-xs text-muted">{f.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}