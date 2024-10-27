import Image from "next/image";
import Link from "next/link";

import { Heading } from "apps/marketing/src/components/ui/heading";
import { Collaborator } from "../content/gallery-collaborators";
import { slugify } from "apps/marketing/src/lib/utils/slugify";

export function PhotoGalleryGrid({
  collaborators,
}: {
  collaborators: Collaborator[];
}) {
  return (
    <div className="grid w-5/6 grid-cols-1 grid-rows-2 place-items-center gap-4 md:grid-cols-2">
      {collaborators.map(({ name, backgroundImageURL }, i) => (
        <Link
          key={i}
          className="relative flex h-[30rem] w-full items-center justify-center bg-black/20 px-10"
          href={`/gallery/photos/${slugify(name)}`}
        >
          <Image
            className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
            src={backgroundImageURL}
            alt=""
            height={400}
            width={900}
          />
          <Heading className="text-center text-4xl font-light text-white md:text-4xl lg:text-[2.75rem]">
            {name}
          </Heading>
        </Link>
      ))}
    </div>
  );
}
