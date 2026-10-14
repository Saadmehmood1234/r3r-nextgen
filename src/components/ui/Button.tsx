import Link from "next/link";
import type { ReactNode } from "react";
import { Icon } from "./Icon";

type ButtonVariant =
  | "primary"
  | "outline"
  | "light"
  | "light-outline"
  | "dark"
  | "dark-outline"
  | "soft"
  | "soft-primary"
  | "muted"
  | "on-dark"
  | "on-dark-outline"
  | "ghost";

type Props = {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  arrow?: boolean;
  className?: string;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  outline: "btn-outline",
  light: "btn-light",
  "light-outline": "btn-light-outline",
  dark: "btn-dark",
  "dark-outline": "btn-dark-outline",
  soft: "btn-soft",
  "soft-primary": "btn-soft-primary",
  muted: "btn-muted",
  "on-dark": "btn-on-dark",
  "on-dark-outline": "btn-on-dark-outline",
  ghost: "btn-ghost",
};

export function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
}: Props) {
  return (
    <Link
      href={href}
      className={`${variantClasses[variant]} ${className}`}
    >
      {children}
      {arrow && <Icon name="arrow" size={16} />}
    </Link>
  );
}