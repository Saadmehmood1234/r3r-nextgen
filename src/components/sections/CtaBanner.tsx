import { Button } from "../ui/Button";
import { BackgroundImage } from "../ui/BackgroundImage";

export function CtaBanner() {
  return (
    <section className="text-white">
      <BackgroundImage
        src="cta1.png"
        alt="Child playing with a wooden aeroplane"
        overlay="none"
        className="aspect-5/1"
      >
        <div className="w-full max-w-xl md:ml-[40%] lg:ml-[44%]">
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