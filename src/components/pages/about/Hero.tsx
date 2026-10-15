import { Hero } from "@/components/sections/Hero";
export default function AboutHero() {
  return (
    <Hero
      image={{
        src: "about/about.png",
        mobileSrc: "about/about.png",
        alt: "Our team creating sustainable wooden toys",
        overlay:"none",
        mobileOverlay:"dark"
      }}
      eyebrow="About R3R Next Gen"
      eyebrowColor="md:text-leaf text-white"
      heading={
        <>
          <span className="md:text-leaf-dark">Manufacturing Joy for a</span>{" "}
          <span className="block md:text-leaf">Brighter Tomorrow.</span>
        </>
      }
      description="R3R Next Gen (OPC) Private Limited is a manufacturer of high-quality wooden toys and children's furniture, committed to safe, sustainable and thoughtfully designed products that inspire creativity, learning and meaningful play."
      buttons={{
        primary: {
          label: "Our Story",
          href: "/about#our-story",
          variant: "leaf",
        },
        // secondary: {
        //   label: "Contact Us",
        //   href: "/contact",
        //   variant: "leaf-outline",
        //   arrow: false,
        // },
      }}
      showFeatures={false}
    />
  );
}
