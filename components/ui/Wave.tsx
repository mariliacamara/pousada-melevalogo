/** Onda do logo, usada como divisor entre seções. `flip` inverte para o topo. */
export default function Wave({
  className,
  flip = false,
}: {
  className?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 1440 80"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`block h-10 w-full sm:h-14 ${flip ? "rotate-180" : ""} ${className ?? ""}`}
    >
      <path
        fill="currentColor"
        d="M0 40 C 180 0 360 80 540 40 S 900 0 1080 40 S 1350 70 1440 40 V80 H0 Z"
      />
    </svg>
  );
}
