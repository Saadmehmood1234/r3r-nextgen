"use client";
import type { ReactNode } from "react";
import { Button, ButtonVariant } from "../ui/Button";
import { BackgroundImage } from "../ui/BackgroundImage";
import Icon from "../ui/Icon";
import { Reveal, RevealGroup, RevealItem } from "../ui/Reveal";
import { heroFeatures } from "@/lib/site";

type HeroButton = {
  label: string;
  href: string;
  variant?: ButtonVariant;
  arrow?: boolean;
  className?: string;
};

type HeroFeature = {
  title: string;
  text?: string;
  icon: (typeof heroFeatures)[number]["icon"];
};

type HeroProps = {
  eyebrow?: string;
  eyebrowColor?: string;
  image?: {
    src?: string;
    mobileSrc?: string;
    alt?: string;
    overlay?: "none" | "light" | "dark";
    mobileOverlay?: "none" | "light" | "dark";
    priority?: boolean;
    sizes?: string;
    mobileSizes?: string;
    className?: string;
  };
  heading?: ReactNode;
  description?: string;
  buttons?: {
    primary?: HeroButton;
    secondary?: HeroButton;
  };
  features?: HeroFeature[];
  showFeatures?: boolean;
};

const defaultHeading = (
  <>
    Crafting <span className="block">Sustainable Play</span>{" "}
    <span className="text-ember">for the Next Generation.</span>
  </>
);

const defaultDescription =
  "Safe, screen-free and thoughtfully designed wooden toys and children's furniture, created with a focus on sustainability, quality and meaningful play.";

const defaultButtons = {
  primary: {
    label: "Explore Our Products",
    href: "/products",
  },
  secondary: {
    label: "Partner With Us",
    href: "/contact",
    variant: "light-outline" as const,
    arrow: false,
  },
};

const defaultImage = {
  src: "home/hero.jpg",
  mobileSrc: "home/hero-mobile.png",
  alt: "Child playing with colourful wooden stacking toys",
  overlay: "none" as const,
  mobileOverlay: "dark" as const,
  priority: true,
  sizes: "(max-width: 767px) 0px, 100vw",
  mobileSizes: "(max-width: 767px) 100vw, 0px",
  className: "min-h-100 md:min-h-100 lg:min-h-140",
};

export function Hero({
  eyebrow,
  eyebrowColor = "text-ember",
  image = {},
  heading = defaultHeading,
  description = defaultDescription,
  buttons = defaultButtons,
  features = heroFeatures,
  showFeatures = true,
}: HeroProps) {
  const heroImage = { ...defaultImage, ...image };
  const primaryButton = buttons.primary;
  const secondaryButton = buttons.secondary;

  return (
    <section className="bg-cream">
      <BackgroundImage {...heroImage}>
        <div className="container-page w-full">
          <div className="max-w-xl">
            {eyebrow && (
              <Reveal y={18} delay={0.02}>
                <p
                  className={`mb-3 text-xs font-bold uppercase tracking-[0.2em] ${eyebrowColor} md:text-sm`}
                >
                  {eyebrow}
                </p>
              </Reveal>
            )}

            <Reveal y={24} delay={0.05}>
              <h1 className="text-4xl font-extrabold leading-tight text-leaf-soft md:text-6xl md:text-ink">
                {heading}
              </h1>
            </Reveal>

            <Reveal y={18} delay={0.18}>
              <p className="mt-5 max-w-md text-white md:text-black">
                {description}
              </p>
            </Reveal>

            <Reveal y={14} delay={0.3}>
              <div className="mt-7 flex flex-wrap gap-3">
                {primaryButton && (
                  <Button
                    href={primaryButton.href}
                    variant={primaryButton.variant}
                    arrow={primaryButton.arrow}
                    className={primaryButton.className}
                  >
                    {primaryButton.label}
                  </Button>
                )}

                {secondaryButton && (
                  <>
                    <Button
                      href={secondaryButton.href}
                      variant={secondaryButton.variant ?? "light-outline"}
                      arrow={secondaryButton.arrow ?? false}
                      className={`hidden lg:block ${secondaryButton.className ?? ""}`}
                    >
                      {secondaryButton.label}
                    </Button>

                    <Button
                      href={secondaryButton.href}
                      variant="soft-primary"
                      arrow={secondaryButton.arrow ?? false}
                      className={`block lg:hidden ${secondaryButton.className ?? ""}`}
                    >
                      {secondaryButton.label}
                    </Button>
                  </>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </BackgroundImage>

      {showFeatures && features.length > 0 && (
        <RevealGroup className="container-page grid gap-4 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <RevealItem key={feature.title}>
              <div className="flex items-center gap-3">
                <span className="grid size-11 shrink-0 place-items-center rounded-full bg-leaf-soft text-leaf">
                  <Icon name={feature.icon} />
                </span>

                <div>
                  <p className="text-sm font-bold">{feature.title}</p>
                  <p className="text-xs text-muted">{feature.text}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      )}
    </section>
  );
}
