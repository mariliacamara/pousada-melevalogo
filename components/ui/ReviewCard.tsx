interface ReviewCardProps {
  initials: string;
  name: string;
  city: string;
  review: string;
}

export default function ReviewCard({
  initials,
  name,
  city,
  review,
}: ReviewCardProps) {
  return (
    <article className="rev-card">
      <div className="stars">
        {[...Array(5)].map((_, i) => (
          <span key={i}>★</span>
        ))}
      </div>

      <p className="quote">
        {review}
      </p>

      <div className="reviewer">
        <div className="avatar">
          {initials}
        </div>

        <div>
          <strong>{name}</strong>

          <span>{city}</span>
        </div>
      </div>
    </article>
  );
}