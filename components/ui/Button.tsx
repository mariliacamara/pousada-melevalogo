import Link from "next/link";
import { ReactNode } from "react";

type Variant = "primary" | "whatsapp" | "ghost" | "ocean";

interface ButtonProps {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  target?: string;
}

export default function Button({
  href,
  children,
  variant = "primary",
  className,
  target,
}: ButtonProps) {
  const classes = [
    "btn",
    variant === "whatsapp" && "btn-whats",
    variant === "ghost" && "btn-ghost",
    variant === "ocean" && "btn-ocean",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={target}
      >
        {children}
      </Link>
    );
  }

  return <button className={classes}>{children}</button>;
}