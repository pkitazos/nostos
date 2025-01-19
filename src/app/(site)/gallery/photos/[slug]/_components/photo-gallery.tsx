import Image from "next/image";

import { Media } from "@/payload-types";
import { toImageUrl } from "@/lib/utils/to-image-url";

// TODO: Images load very slowly add some sort of loading state

export function PhotoGallery({ images }: { images: Media[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 2xl:gap-16">
      {images.map((image, i) => (
        <div key={i} className="w-full">
          <Image
            key={i}
            className="h-full w-full object-cover"
            src={toImageUrl(image)}
            alt=""
            width={4475}
            height={6717}
          />
        </div>),
      )}
    </div>
  );
}
