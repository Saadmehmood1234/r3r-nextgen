import Link from "next/link";
import { Button } from "../ui/Button";
import { Media } from "../ui/Media";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../ui/Icon";
import { products } from "@/lib/site";
import { ProductCard } from "../ui/ProductCard";

export function ProductWorld({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="section-y bg-cream">
      <div className="container-page">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading
            eyebrow="Our Collection"
            title="Our Product World"
            text="A thoughtfully curated range of wooden toys and children's furniture that inspire learning, creativity and active play."
          />
          {showCta && (
            <Button href="/products" variant="outline">
              Explore All Products
            </Button>
          )}
        </div>
        <ul className="mt-8 grid items-center lg:grid-cols-5 sm:grid-cols-3 grid-cols-1 gap-4">
          {products.map((p) => (
            <li
              key={p.title}
              className="w-full"
            >
              <ProductCard title={p.title} text={p.text} img={p.img} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
