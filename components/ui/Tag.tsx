interface Props {
  children: string;
}

export default function Tag({
  children,
}: Props) {
  return (
    <span className="tag-pill">
      {children}
    </span>
  );
}