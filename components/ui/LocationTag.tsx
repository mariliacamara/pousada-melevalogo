import { LucideIcon } from "lucide-react";

interface Props {
  icon: LucideIcon;
  text: string;
}

export default function LocationTag({
  icon: Icon,
  text,
}: Props) {
  return (
    <span className="loc-tag">
      <Icon size={18} />

      {text}
    </span>
  );
}