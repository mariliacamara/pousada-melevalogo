import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Badge({
  children,
}: Props) {
  return (
    <span className="hero-badge">
      {children}
    </span>
  );
}