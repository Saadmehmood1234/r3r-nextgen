import Link from "next/link";
import { Icon } from "./Icon";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "light";
  arrow?: boolean;
  className?: string;
};

const variantClasses = {
  primary: "btn-primary",
  outline: "btn-outline",
  light: "btn-light",
} as const;

export function Button({
  href,
  children,
  variant = "primary",
  arrow = true,
  className = "",
}: Props) {
  return (
    <Link href={href} className={`${variantClasses[variant]} ${className}`}>
      {children}
      {arrow && <Icon name="arrow" size={16} />}
    </Link>
  );
}
