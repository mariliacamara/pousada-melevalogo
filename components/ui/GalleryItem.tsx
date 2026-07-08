import Image from "next/image";

interface Props {
  image: string;
  alt: string;
  label: string;
}

export default function GalleryItem({
  image,
  alt,
  label,
}: Props) {
  return (
    <div className="gallery-item">
      <Image
        src={image}
        alt={alt}
        width={600}
        height={400}
      />

      <div className="gallery-label">
        {label}
      </div>
    </div>
  );
}