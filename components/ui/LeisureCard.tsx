import Image from "next/image";

interface LeisureCardProps {
  badge: string;
  image: string;
  alt: string;
  label: string;
}

export default function LeisureCard({
  badge,
  image,
  alt,
  label,
}: LeisureCardProps) {
  return (
    <article className="lazer-item">
      <span className="lazer-badge">
        {badge}
      </span>

      <Image
        src={image}
        alt={alt}
        width={600}
        height={450}
      />

      <div className="lazer-label">
        {label}
      </div>
    </article>
  );
}