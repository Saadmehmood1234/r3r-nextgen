import { PageHero } from "./PageHero";

export function LegalPage({ title, sections }: { title: string; sections: { h: string; p: string }[] }) {
  return (
    <>
      <PageHero title={title} text="Last updated: October 2026. Replace this placeholder text with your final legal copy." />
      <div className="container-page section-y max-w-3xl space-y-6">
        {sections.map((s) => <section key={s.h}><h2 className="text-xl font-bold">{s.h}</h2><p className="mt-2 text-sm leading-relaxed text-muted">{s.p}</p></section>)}
      </div>
    </>
  );
}
