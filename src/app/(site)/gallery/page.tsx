import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContentSection } from '@/components/content-section'
import { EmbeddedReel } from '@/components/embedded-reel'
import { PhotoGalleryGrid } from '@/components/photo-gallery-grid'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Heading } from '@/components/ui/heading'
import { resultExamples } from '@/content'
import { COMPANY_NAME } from '@/content/config'
import { getClients } from '@/content/get-clients'
import { getCollaborators } from '@/content/get-collaborators'
import { toImageUrl } from '@/lib/utils/to-image-url'

export const metadata: Metadata = { title: `Gallery - ${COMPANY_NAME}` }

export default async function Page() {
  const collaborators = await getCollaborators()
  const clients = await getClients()

  return (
    <>
      {/* 
      <ContentSection className="pt-header flex w-full flex-col items-center justify-center gap-14 xl:h-[90dvh] 2xl:h-[60dvh]">
        <Heading>Our Work</Heading>
        <div className="flex w-full justify-center gap-10">
          <Link
            className="relative flex h-[30rem] w-full items-center justify-center bg-black/20 px-10"
            href="/gallery/photos"
          >
            <Image
              className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
              {...SITE_IMAGES.gallery.photosButton}
              alt=""
            />
            <Heading className="text-center text-4xl font-light text-white md:text-4xl lg:text-[2.75rem]">
              Photo Gallery
            </Heading>
          </Link>
          <Link
            className="relative flex h-[30rem] w-full items-center justify-center bg-black/20 px-10"
            href="/gallery/videos"
          >
            <Image
              className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
              {...SITE_IMAGES.gallery.videosButton}
              alt=""
            />
            <Heading className="text-center text-4xl font-light text-white md:text-4xl lg:text-[2.75rem]">
              Video Gallery
            </Heading>
          </Link>
        </div> 
      </ContentSection>
        */}
      <ContentSection className="pt-header flex w-full flex-col items-center gap-28">
        <Heading className="pt-28">Gallery</Heading>
        <PhotoGalleryGrid collaborators={clients} />
      </ContentSection>
      <ContentSection className="flex h-[50dvh] w-full flex-col items-center justify-center gap-14">
        <Heading>Our Collaborations</Heading>
        <Carousel className="w-2/3 max-w-6xl lg:w-full">
          <CarouselContent>
            {collaborators.map((collaborator, i) => (
              <CarouselItem
                key={i}
                className="grid place-items-center sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Link href={collaborator.url} className="h-48 w-64 place-self-center">
                  <Image
                    height={400}
                    width={400}
                    className="h-48 w-full object-cover"
                    src={toImageUrl(collaborator.logo!)}
                    alt=""
                  />
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ContentSection>
      {/* // TODO add loading state of some kind */}
      <ContentSection className="flex w-full flex-col items-center justify-center gap-14 xl:h-dvh 2xl:h-[60dvh]">
        <Heading>Our Results</Heading>
        <Carousel className="h-full w-2/3 max-w-6xl lg:w-full">
          <CarouselContent>
            {resultExamples.map(({ URL }, i) => (
              <CarouselItem key={i} className="grid place-items-center lg:basis-1/2 xl:basis-1/3">
                <EmbeddedReel url={URL} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ContentSection>
    </>
  )
}
