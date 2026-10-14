import { Button } from "../ui/Button";
import { BackgroundImage } from "../ui/BackgroundImage";

export function CtaBanner() {
  return (
    <section className="text-white">
      <BackgroundImage
        src="cta3.png"
        alt="Child playing with a wooden aeroplane"
        overlay="none"
        sizes="100vw"
        className="hidden 2xl:min-h-120 min-h-100 justify-center items-center lg:flex"
      >
        <div className="w-full max-w-xl lg:ml-[40%]">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Let&apos;s Build a Brighter, More Playful Tomorrow
          </h2>

          <p className="mt-3 max-w-lg text-sm text-white/85">
            Explore our product range or discuss your manufacturing
            requirements. We look forward to partnering with you.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/products">Explore Our Products</Button>
            <Button href="/contact" variant="light" arrow={false}>
              Contact Us
            </Button>
          </div>
        </div>
      </BackgroundImage>

      <BackgroundImage
        src="cta-mobile.png"
        alt="Child playing with a wooden aeroplane"
        overlay="dark"
        sizes="100vw"
        className="min-h-100 flex justify-start items-center lg:hidden"
      >
        <div className="w-full max-w-xl">
          <h2 className="text-3xl font-extrabold md:text-4xl">
            Let&apos;s Build a Brighter, More Playful Tomorrow
          </h2>

          <p className="mt-3 max-w-lg text-sm text-white/85">
            Explore our product range or discuss your manufacturing
            requirements. We look forward to partnering with you.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Button href="/products">Explore Our Products</Button>
            <Button href="/contact" variant="light" arrow={false}>
              Contact Us
            </Button>
          </div>
        </div>
      </BackgroundImage>
    </section>
  );
}