import Image from "next/image";
import type { ProjectImage } from "@/types/project";

interface ProjectGalleryProps {
  images: ProjectImage[];
  projectTitle: string;
}

export function ProjectGallery({ images, projectTitle }: ProjectGalleryProps) {
  if (!images || images.length === 0) return null;

  return (
    <div className="space-y-4">
      {images.map((image, i) => (
        <div key={i} className="overflow-hidden rounded-xl border border-(--border)">
          <Image
            src={image.src}
            alt={image.alt || `Captura ${i + 1} de ${projectTitle}`}
            width={image.width}
            height={image.height}
            className="w-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
