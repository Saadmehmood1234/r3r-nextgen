import Icon from "@/components/ui/Icon";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { values } from "@/lib/data/about-data";

export default function CoreValues() {
  return (
    <section
      id="values"
      className="section-y scroll-mt-20 bg-sand/40"
    >
      <div className="container-page">
        <SectionHeading
          eyebrow="Our Core Values"
          eyebrowColor="text-ember"
          title={
            <>
            Values That Guide <span className="text-ember">Everything We Do</span>
            </>
          }
        />
        <RevealGroup className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
          {values.map((v) => (
            <RevealItem
              key={v.title}
              className="text-center lg:border-r lg:border-leaf-dark/10 lg:px-5 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
            >
              <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-ember-soft text-ember">
                <Icon name={v.icon} className="h-7 w-7" strokeWidth={1.5} />
              </span>
              <h3 className="mt-3 min-h-12 text-lg font-extrabold leading-tight text-ink">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/80">
                {v.text}
              </p>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
