import { Button } from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { strengths } from "@/lib/data/about-data";


export default function WhyPartner() {
  return (
    <section className="section-y bg-sand/40">
      <div className="container-page grid gap-8 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionHeading
            eyebrow="Why Partner with R3R Next Gen"
            eyebrowColor="text-ember"
            title={
                <>
                A Reliable <span className="text-ember">Manufacturing Partner</span>
                </>
            }
          />
          <Reveal y={16} delay={0.1}>
            <p className="mt-3 text-sm leading-relaxed text-ink/85">
              We work with brands, retailers, distributors and businesses to
              develop and manufacture high-quality wooden toys and
              children&apos;s furniture. Our capabilities, quality focus and
              commitment to sustainability make us a dependable partner for
              long-term growth.
            </p>
            <div className="mt-5">
              <Button href="/contact" variant="primary">
                Discuss Your Requirement
              </Button>
            </div>
          </Reveal>
        </div>
        <RevealGroup className="grid content-center gap-x-8 gap-y-5 sm:grid-cols-2 lg:border-l lg:border-leaf-dark/10 lg:pl-10">
          {strengths.map((s) => (
            <RevealItem key={s.label} className="flex items-center gap-3">
              <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-ember-soft text-ember">
                <Icon name={s.icon} className="h-4 w-4" />
              </span>
              <span className="text-sm font-semibold text-ink">{s.label}</span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
