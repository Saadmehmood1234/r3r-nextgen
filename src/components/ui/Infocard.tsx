
import type { ReactNode } from "react";
import Icon from "@/components/ui/Icon";

export function InfoCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div
      className="group relative isolate flex gap-4 overflow-hidden rounded-2xl border border-white/70 bg-linear-to-br from-white/65 via-white/40 to-white/20 p-5 shadow-[0_8px_32px_-12px_rgba(23,54,31,0.22)] backdrop-blur-xl transition-all duration-300 hover:border-white/90 hover:from-white/75 hover:via-white/50 hover:shadow-[0_12px_40px_-12px_rgba(23,54,31,0.28)]">
      {/* Glass highlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-linear-to-br from-white/40 via-transparent to-leaf-soft/15"
      />

      <span
        className="
          grid h-14 w-14 shrink-0 place-items-center rounded-full
          border border-white/20 bg-leaf-dark/95 text-white
          shadow-md shadow-leaf-dark/15
          transition-transform duration-300
          group-hover:scale-105
        "
      >
        <Icon name={icon} className="h-6 w-6" />
      </span>

      <div className="min-w-0">
        <h3 className="text-base font-extrabold text-leaf-dark">
          {title}
        </h3>

        <div className="mt-1 text-sm leading-relaxed text-ink/80">
          {children}
        </div>
      </div>
    </div>
  );
}

export function ContactRow({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="group flex items-center gap-4 border-b border-white/40 py-3 last:border-b-0 last:pb-0 first:pt-0">
      <span
        className="
          grid h-11 w-11 shrink-0 place-items-center rounded-full
          border border-white/70
          bg-linear-to-br from-white/75 to-leaf-soft/60
          text-leaf-dark shadow-sm
          transition-all duration-300
          group-hover:border-white group-hover:shadow-md
        "
      >
        <Icon name={icon} className="h-5 w-5" />
      </span>

      <div className="min-w-0 text-sm">
        <p className="font-extrabold text-leaf-dark">{title}</p>
        <div className="wrap-break-word text-ink/80">{children}</div>
      </div>
    </div>
  );
}
