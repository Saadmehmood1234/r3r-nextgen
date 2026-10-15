import { pageMeta } from "@/lib/seo";
import { PageHero } from "@/components/sections/PageHero";
import { ProductWorld } from "@/components/sections/ProductWorld";
import { CtaBanner } from "@/components/sections/CtaBanner";
export const metadata = pageMeta(
  "Products",
  "Explore wooden toys, educational products, play systems, children's furniture and custom products from R3R NextGen.",
  "/products",
);

export default function Page() {
  return (
    <>
      <PageHero
        title="Our Product World"
        text="Wooden toys and children's furniture that inspire learning, creativity and active play."
      />
      <ProductWorld showCta={false} />
      <CtaBanner />
    </>
  );
}
