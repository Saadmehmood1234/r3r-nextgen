import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionHeadingProps = {
  eyebrow?: ReactNode;
  title: ReactNode;
  text?: ReactNode;
  className?: string;
  titleColor?: string;
  textColor?: string;
  eyebrowColor?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  text,
  className = "",
  titleColor = "text-ink",
  textColor = "text-muted",
  eyebrowColor = "text-ember",
}: SectionHeadingProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <Reveal y={16}>
          <p
            className={`mb-1 text-sm font-extrabold uppercase tracking-wider ${eyebrowColor}`}
          >
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal y={16}>
        <h2 className={`text-3xl font-extrabold md:text-4xl ${titleColor}`}>
          {title}
        </h2>
      </Reveal>
      {text && (
        <Reveal y={16} delay={0.1}>
          <p className={`mt-3 max-w-xl text-sm md:text-base ${textColor}`}>
            {text}
          </p>
        </Reveal>
      )}
    </div>
  );
}
