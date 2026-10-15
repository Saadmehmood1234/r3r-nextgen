import { Button } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Bar } from "@/components/ui/Bar";


export default function OurStory() {
  return (
    <section id="our-story" className="section-y scroll-mt-20 bg-cream">
      <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_1fr_1fr] lg:gap-0">
        <div className="lg:pr-10">
          <SectionHeading
            eyebrow="Our Story"
            eyebrowColor="text-leaf"
            title={
                <>
                A Commitment to <span className="text-leaf">Meaningful Play</span>
                </>
            }
          />
          <Reveal y={16} delay={0.1}>
            <p className="mt-4 text-sm leading-relaxed text-ink/85">
              R3R Next Gen (OPC) Private Limited was established with a simple
              belief — children deserve products that are safe, sustainable and
              designed to inspire creativity and learning. We focus on
              manufacturing wooden toys and children&apos;s furniture that
              combine quality, functionality and thoughtful design, while
              contributing to a greener and healthier future.
            </p>
            <div className="mt-5">
              <Button href="#values" variant="dark">
                Our Journey
              </Button>
            </div>
          </Reveal>
        </div>

        {[
          {
            icon: "target",
            title: "Our Vision",
            text: "To become a globally trusted children's brand, creating safe, sustainable and thoughtfully designed products that inspire imagination, learning and meaningful childhood experiences.",
          },
          {
            icon: "mountain",
            title: "Our Mission",
            text: "To design and manufacture innovative, high-quality and sustainable children's products through responsible manufacturing, rigorous safety and quality standards, regulatory compliance and scalable operations.",
          },
        ].map((c, i) => (
          <Reveal
            key={c.title}
            y={24}
            delay={0.1 + i * 0.1}
            className="lg:border-l lg:border-leaf-dark/10 lg:px-8"
          >
            <div className="text-center">
              <span className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-ember-soft text-leaf-dark">
                <Icon name={c.icon} className="h-9 w-9" strokeWidth={1.5} />
              </span>
              <h3 className="mt-3 text-xl font-extrabold text-leaf-dark">
                {c.title}
              </h3>
              <div className="mt-2">
                <Bar center />
              </div>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-ink/85">{c.text}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
