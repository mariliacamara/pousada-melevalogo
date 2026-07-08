import { LucideIcon } from "lucide-react";

interface BenefitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function BenefitCard({
  icon: Icon,
  title,
  description,
}: BenefitCardProps) {
  return (
    <article className="benef-card">
      <div className="benef-icon">
        <Icon size={30} strokeWidth={2} />
      </div>

      <h3>{title}</h3>

      <p>{description}</p>
    </article>
  );
}