import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { certs, factoryPoints, productPoints } from "@/lib/data/about-data";
import { CheckList } from "@/components/ui/CheckList";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function QualityAndCertificate() {
  return (
    <section className="section-y bg-white/40">
      <div className="container-page">
        <Reveal y={16}>
          <SectionHeading
            eyebrow="Quality &amp; Certification"
            title={
              <>
                Quality You Can Trust.{" "}
                <span className="text-ember">Standards You Can Rely On.</span>
              </>
            }
            text="We follow robust quality systems for both our manufacturing processes and finished products, ensuring safe, durable and dependable wooden toys and children's furniture for domestic and international markets."
          />
        </Reveal>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {[
            {
              n: "01",
              title: "Factory Quality & Manufacturing Standards",
              text: "Our commitment to quality begins at the factory floor. From raw material selection to final dispatch, we follow defined quality-control practices at every stage.",
              items: factoryPoints,
            },
            {
              n: "02",
              title: "Product Quality, Safety & Certification",
              text: "Every product is designed with safety, durability and performance in mind. We work towards meeting applicable product safety and quality requirements through testing, inspection and compliance processes.",
              items: productPoints,
            },
          ].map((c, i) => (
            <Reveal key={c.n} y={24} delay={i * 0.1}>
              <div className="card h-full border border-leaf-dark/10 bg-cream p-6">
                <div className="flex items-center gap-4">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-ember font-display text-xl font-extrabold text-white">
                    {c.n}
                  </span>
                  <h3 className="text-xl font-extrabold leading-tight text-leaf-dark">
                    {c.title}
                  </h3>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-ink/85">
                  {c.text}
                </p>
                <CheckList items={c.items} />
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal y={24} className="mt-8">
          <div className="grid items-center gap-6 rounded-2xl border border-leaf-dark/10 bg-cream/50 p-6 shadow-soft lg:grid-cols-[1.2fr_3fr_1.1fr]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-leaf-dark">
                Our Certifications
              </p>
              <p className="mt-2 text-xs leading-relaxed text-muted">
                We comply with relevant international safety and quality
                standards. Our products are designed and manufactured to meet
                the requirements of global markets.
              </p>
            </div>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-5">
              {certs.map((c) => (
                <li
                  key={c.name}
                  className="flex flex-col items-center text-center"
                >
                  <Image
                    src={`/images/about/certifications/${c.src}`}
                    alt={`${c.name} certification logo`}
                    width={72}
                    height={56}
                    className="h-14 w-auto object-contain"
                  />
                  <span className="mt-2 text-[10px] leading-tight text-muted">
                    {c.name}
                    <br />({c.note})
                  </span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted lg:border-l lg:border-leaf-dark/10 lg:pl-6">
              Certifications may vary by product, market and customer
              requirements.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
