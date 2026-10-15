import Image from "next/image";
import type { ReactNode } from "react";

type Overlay = "none" | "dark" | "light" | "left" | "light-left";

type Props = {
  src: string;
  mobileSrc?: string;
  alt?: string;
  children?: ReactNode;
  className?: string;
  sizes?: string;
  mobileSizes?: string;
  priority?: boolean;
  overlay?: Overlay;
  mobileOverlay?: Overlay;
  align?: "start" | "center" | "end";
  as?: "div" | "section" | "footer";
  imagePosition?: string;
  imageMode?: "cover" | "fixed-right";
};

const overlays: Record<Overlay, string> = {
  none: "",
  dark: "md:bg-black/35 bg-black/70",
  light: "bg-white/60",
  left: "bg-linear-to-r from-leaf-dark/85 via-leaf-dark/40 to-transparent",
  "light-left": "bg-linear-to-r from-cream/95 via-cream/70 to-transparent",
};

const mobileOverlays: Record<Overlay, string> = {
  none: "bg-transparent",
  dark: "bg-black/65 md:bg-transparent",
  light: "bg-white/60 md:bg-transparent",
  left: "bg-linear-to-r from-leaf-dark/85 via-leaf-dark/40 to-transparent md:bg-none",
  "light-left":
    "bg-linear-to-r from-cream/95 via-cream/70 to-transparent md:bg-none",
};

const aligns = {
  start: "items-start text-left",
  center: "items-center text-center",
  end: "items-end text-right",
};

export function BackgroundImage({
  src,
  mobileSrc,
  alt = "",
  children,
  className = "",
  sizes = "100vw",
  mobileSizes = "100vw",
  priority = false,
  overlay = "dark",
  mobileOverlay,
  align = "start",
  as: Tag = "div",
  imagePosition = "center",
  imageMode = "cover",
}: Props) {
  return (
    <Tag
      className={`relative isolate overflow-hidden bg-linear-to-br from-sand via-leaf-soft to-sand ${className}`}
    >
      {mobileSrc && (
        <Image
          src={`/images/${mobileSrc}`}
          alt=""
          fill
          sizes={mobileSizes}
          priority={priority}
          aria-hidden="true"
          className="-z-20 object-cover md:hidden"
        />
      )}
      <Image
        src={`/images/${src}`}
        alt={mobileSrc ? "" : alt}
        fill
        sizes={sizes}
        priority={priority}
        aria-hidden={mobileSrc ? true : undefined}
        style={{
          objectPosition:
            imagePosition === "right center" ? "right center" : imagePosition,
        }}
        className={`-z-20 object-cover ${mobileSrc ? "hidden md:block" : ""}`}
      />
      {mobileOverlay !== undefined && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 -z-10 ${mobileOverlays[mobileOverlay]}`}
        />
      )}
      {overlay !== "none" && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute inset-0 -z-10 ${overlays[overlay]}`}
        />
      )}
      <div
        className={`relative z-10 flex h-full flex-col justify-center gap-3 p-6 md:p-10 ${aligns[align]}`}
      >
        {children}
      </div>
    </Tag>
  );
}
