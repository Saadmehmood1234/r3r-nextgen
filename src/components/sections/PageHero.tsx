export function PageHero({ title, text }: { title: string; text: string }) {
  return (
    <section className="bg-linear-to-b from-sand to-cream">
      <div className="container-page py-14 md:py-20">
        <h1 className="max-w-3xl text-4xl font-extrabold md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-muted md:text-lg">{text}</p>
      </div>
    </section>
  );
}
