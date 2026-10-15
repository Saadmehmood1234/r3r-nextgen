import { Button } from "../ui/Button";
import { BackgroundImage } from "../ui/BackgroundImage";
import { Reveal } from "../ui/Reveal";

export function CtaBanner() {
  return (
    <section className="text-white">
      <BackgroundImage
        src="cta3.png"
        alt="Child playing with a wooden aeroplane"
        overlay="dark"
        sizes="100vw"
        className="hidden min-h-100 items-center justify-center lg:flex 2xl:min-h-100"
      >
        <div className="w-full max-w-xl lg:ml-[40%]">
          <Reveal y={24}>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Let&apos;s Build a Brighter, More Playful Tomorrow
            </h2>
          </Reveal>

          <Reveal y={20} delay={0.12}>
            <p className="mt-3 max-w-lg text-sm text-white/85">
              Explore our product range or discuss your manufacturing
              requirements. We look forward to partnering with you.
            </p>
          </Reveal>

          <Reveal y={16} delay={0.24}>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/products">Explore Our Products</Button>
              <Button href="/contact" variant="light" arrow={false}>
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </BackgroundImage>
      <BackgroundImage
        src="cta-mobile.png"
        alt="Child playing with a wooden aeroplane"
        overlay="dark"
        sizes="100vw"
        className="flex min-h-100 items-center justify-start lg:hidden"
      >
        <div className="w-full max-w-xl">
          <Reveal y={24}>
            <h2 className="text-3xl font-extrabold md:text-4xl">
              Let&apos;s Build a Brighter, More Playful Tomorrow
            </h2>
          </Reveal>

          <Reveal y={20} delay={0.12}>
            <p className="mt-3 max-w-lg text-sm text-white/85">
              Explore our product range or discuss your manufacturing
              requirements. We look forward to partnering with you.
            </p>
          </Reveal>

          <Reveal y={16} delay={0.24}>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/products">Explore Our Products</Button>
              <Button href="/contact" variant="light" arrow={false}>
                Contact Us
              </Button>
            </div>
          </Reveal>
        </div>
      </BackgroundImage>
    </section>
  );
}