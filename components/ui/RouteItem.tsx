import { LucideIcon } from "lucide-react";

interface RouteItemProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function RouteItem({
  icon: Icon,
  title,
  description,
}: RouteItemProps) {
  return (
    <div className="route-item">
      <div className="route-icon">
        <Icon size={20} />
      </div>

      <div>
        <strong>{title}</strong>

        <span>{description}</span>
      </div>
    </div>
  );
}