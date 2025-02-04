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
import { toImageUrl } from '@/lib/utils/to-image-url'

export const metadata: Metadata = { title: `Gallery - ${COMPANY_NAME}` }

export const dynamic = 'force-dynamic'

export default async function Page() {
  const clients = await getClients()

  return (
    <>
      <ContentSection className="pt-header flex w-full flex-col items-center gap-20">
        <Heading className="pt-28">Our Work</Heading>
        <PhotoGalleryGrid clients={clients} />
      </ContentSection>
      <ContentSection className="mb-32 flex h-[50dvh] w-full flex-col items-center justify-center gap-14">
        <Heading>Our Collaborations</Heading>
        <Carousel className="w-2/3 max-w-6xl lg:w-full">
          <CarouselContent>
            {clients.map((collaborator, i) => (
              <CarouselItem
                key={i}
                className="grid place-items-center sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <Link
                  href={collaborator.url}
                  className="h-48 w-64 place-self-center"
                  target="_blank"
                >
                  <Image
                    height={400}
                    width={600}
                    className="h-[200px] w-[300px] object-cover"
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
