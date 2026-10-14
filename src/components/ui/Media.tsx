import Image from "next/image";

type MediaProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function Media({
  src,
  alt,
  className = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
}: MediaProps) {
  return (
    <div
      className={`relative isolate w-full overflow-hidden bg-linear-to-br from-sand via-leaf-soft to-sand ${className}`}
    >
      <Image
        src={`/images/${src}`}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}