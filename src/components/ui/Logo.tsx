
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

interface LogoProps {
  image: string;
  className?: string;
  alt?: string;
  width?: number;
  height?: number;
  href?: string;
}

export function Logo({
  image,
  className,
  alt = "R3R Logo",
  width = 150,
  height = 50,
  href = "/",
}: LogoProps) {
  return (
    <Link
      href={href}
      aria-label={`${alt} home`}
      className={clsx("inline-flex shrink-0 items-center", className)}
    >
      <Image
        src={image}
        alt={alt}
        width={width}
        height={height}
        priority
        className="h-auto w-full object-contain"
      />
    </Link>
  );
}