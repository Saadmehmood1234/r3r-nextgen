import { Media } from "@/components/ui/Media";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export default function ManagementMessage() {
  return (
    <section className="section-y bg-cream">
      {/* <div className="container-page grid items-center gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12"> */}
      <div className="container-page grid lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:mr-0 lg:max-w-none lg:pl-[max(2rem,calc((100vw-86rem)/2))] lg:pr-0">
        <div>
          <SectionHeading
            eyebrow="Message from Management"
            eyebrowColor="text-leaf"
            title={
                <>
                Creating a Better Future Through <span className="text-leaf">Responsible Manufacturing</span>
                </>
            }
          />
          <Reveal y={16} delay={0.1}>
            <div className="mt-4 flex gap-3">
              <span
                aria-hidden
                className="font-display text-6xl font-extrabold leading-none text-ember"
              >
                “
              </span>
              <p className="text-sm leading-relaxed text-ink/85">
                At R3R Next Gen, we believe that manufacturing is not simply
                about producing products — it is about creating products that
                people can trust. Our journey is driven by a commitment to
                quality, child safety, responsible manufacturing and continuous
                innovation. We are building <strong>R3R Next Gen</strong> with a
                long-term vision of becoming a globally trusted children&apos;s
                brand and a reliable manufacturing partner for businesses across
                India and global markets. We look forward to building meaningful
                partnerships and creating products that bring value to
                businesses, joy to children and contribute to a more sustainable
                future.
              </p>
            </div>
            <p className="mt-3 flex items-center gap-3 pl-1 text-sm font-bold text-leaf-dark">
              <span className="h-0.5 w-6 bg-ember" aria-hidden />
              Management, R3R Next Gen
            </p>
          </Reveal>
        </div>
        <Reveal y={24} delay={0.1}>
          <Media
            src="about/about-management.png"
            alt="Handcrafted wooden giraffe, car, house and stacking toys"
            className="md:min-h-148 sm:min-h-120 min-h-80 lg:rounded-l-3xl max-lg:rounded-3xl shadow-soft lg:min-h-100"
          />
        </Reveal>
      </div>
    </section>
  );
}
