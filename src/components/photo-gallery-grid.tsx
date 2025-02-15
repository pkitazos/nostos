import Image from 'next/image'
import Link from 'next/link'

import { Heading } from '@/components/ui/heading'
import { Client } from '@/payload-types'
import { getMediaUrl } from '@/lib/utils/to-image-url'

export function PhotoGalleryGrid({ clients }: { clients: Client[] }) {
  return (
    <div className="grid w-5/6 grid-cols-1 grid-rows-2 place-items-center gap-4 md:grid-cols-2">
      {clients.map(({ name, banner_photo }, i) => (
        <Link
          key={i}
          className="relative flex h-[30rem] w-full items-center justify-center bg-black/20 px-10"
          href={`/gallery/photos/${encodeURIComponent(name)}`}
        >
          <Image
            className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
            src={getMediaUrl(banner_photo!) ?? ''}
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
  )
}
