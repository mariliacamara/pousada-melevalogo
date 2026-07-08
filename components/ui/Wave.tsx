interface Props {
  fill: string;
  reverse?: boolean;
}

export default function Wave({
  fill,
  reverse,
}: Props) {
  const path = reverse
    ? "M0,30 C220,62 420,0 600,30 C780,62 980,0 1200,30 L1200,68 L0,68 Z"
    : "M0,38 C160,10 360,66 600,38 C840,10 1040,66 1200,38 L1200,68 L0,68 Z";

  return (
    <div className="wave">
      <svg
        viewBox="0 0 1200 68"
        preserveAspectRatio="none"
      >
        <path d={path} fill={fill} />
      </svg>
    </div>
  );
}