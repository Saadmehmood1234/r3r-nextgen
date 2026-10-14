import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import { ProductCard } from "../ui/ProductCard";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";

import { products } from "@/lib/site";

type ProductWorldProps = {
  showCta?: boolean;
};

export function ProductWorld({ showCta = true }: ProductWorldProps) {
  return (
    <section className="section-y border-b border-pink-200/60 bg-cream">
      <div className="container-page">
        <div className="flex flex-col justify-start gap-4 md:flex-row md:items-end md:justify-between">
          <Reveal y={24} className="min-w-0 flex-1">
            <SectionHeading
              eyebrow="Our Collection"
              title="Our Product World"
              text="A thoughtfully curated range of wooden toys and children's furniture that inspire learning, creativity and active play."
            />
          </Reveal>

          {showCta && (
            <Reveal y={16} delay={0.15} className="shrink-0">
              <Button href="/products" variant="outline">
                Explore All Products
              </Button>
            </Reveal>
          )}
        </div>

        <RevealGroup className="mt-8 grid grid-cols-1 items-stretch gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {products.map((product) => (
            <RevealItem key={product.title}>
              <ProductCard
                title={product.title}
                text={product.text}
                img={product.img}
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
