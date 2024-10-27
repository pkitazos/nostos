import Image from "next/image";

import { GalleryImage } from "../../../../../content/gallery-collaborators";

// TODO: Images load very slowly add some sort of loading state

export function PhotoGallery({ images }: { images: GalleryImage[] }) {
  return (
    <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-2 2xl:gap-16">
      {images.map(({ imageURL }, i) =>
        imageURL !== "" ? (
          <div key={i} className="w-full">
            <Image
              key={i}
              className="h-full w-full object-cover"
              src={imageURL}
              alt=""
              width={4475}
              height={6717}
            />
          </div>
        ) : (
          <div key={i} className="h-full w-full bg-gray-200" />
        ),
      )}
    </div>
  );
}
