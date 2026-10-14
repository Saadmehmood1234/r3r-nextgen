import type { ReactNode } from "react";

type Overlay = "none" | "dark" | "light" | "left" | "light-left";

type Props = {
  src: string;
  alt?: string;
  children?: ReactNode;
  className?: string;
  /** Overlay on tablet and desktop */
  overlay?: Overlay;
  /** Overlay on mobile screens */
  mobileOverlay?: Overlay;
  /** Where the content sits inside the box */
  align?: "start" | "center" | "end";
  as?: "div" | "section";
};

const overlays: Record<Overlay, string> = {
  none: "",
  dark: "bg-black/45",
  light: "bg-white/60",
  left: "bg-linear-to-r from-leaf-dark/85 via-leaf-dark/40 to-transparent",
  "light-left": "bg-linear-to-r from-cream/95 via-cream/70 to-transparent",
};

const aligns = {
  start: "items-start text-left",
  center: "items-center text-center",
  end: "items-end text-right",
};

export function BackgroundImage({
  src,
  alt = "",
  children,
  className = "",
  overlay = "dark",
  mobileOverlay,
  align = "start",
  as: Tag = "div",
}: Props) {

  return (
    <Tag
      className={`relative isolate overflow-hidden bg-linear-to-br from-sand via-leaf-soft to-sand ${className}`}
    >
      <img
        src={`/images/${src}`}
        alt={alt}
        loading="lazy"
        className="absolute inset-0 -z-20 size-full object-cover"
      />

      {mobileOverlay !== undefined && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 -z-10 ${
            mobileOverlay === "light" ? "bg-white/60 lg:bg-transparent" : ""
          } ${mobileOverlay === "dark" ? "bg-black/45 lg:bg-transparent" : ""}`}
        />
      )}

      {overlay !== "none" && (
        <div
          aria-hidden="true"
          className={`absolute inset-0 -z-10 ${overlays[overlay]}`}
        />
      )}

      <div
        className={`relative flex h-full flex-col justify-center gap-3 p-6 md:p-10 ${aligns[align]}`}
      >
        {children}
      </div>
    </Tag>
  );
}
