import Link from "next/link";
import { Media } from "./Media";
import { Icon } from "./Icon";

type ProductCardProps = {
  title: string;
  text: string;
  img: string;
  href?: string;
};

export function ProductCard({
  title,
  text,
  img,
  href = "/products",
}: ProductCardProps) {
  return (
    <Link
      href={href}
      className="rounded-xl group bg-sand flex h-full flex-col overflow-hidden transition duration-300 hover:-translate-y-1"
    >
      <Media
        src={img}
        alt={title}
        className="aspect-3/2 w-full shrink-0"
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1279px) 33vw, 20vw"
      />

      <div className="flex flex-1 items-start justify-between gap-2 p-4">
        <div className="min-w-0">
          <h3 className="line-clamp-2 min-h-10 text-sm font-bold leading-5">
            {title}
          </h3>

          <p className="mt-1 line-clamp-2 text-xs text-muted">
            {text}
          </p>
        </div>

        <Icon
          name="arrow"
          size={16}
          className="mt-0.5 shrink-0 text-ember transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>
    </Link>
  );
}