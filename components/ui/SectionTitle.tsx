interface Props {
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionTitle({
  eyebrow,
  title,
  description,
}: Props) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>

      <h2>{title}</h2>

      {description && <p>{description}</p>}
    </div>
  );
}