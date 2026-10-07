import { Check } from "lucide-react";

export default function CheckList({
  items,
  className,
}: {
  items: readonly string[];
  className?: string;
}) {
  return (
    <ul className={`flex flex-col gap-2 ${className ?? ""}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-2.5">
          <Check aria-hidden="true" strokeWidth={3} className="mt-1 size-5 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}
