import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getS3File } from "../../assets/distribution";
import { ContentSection } from "apps/marketing/src/components/content-section";
import { EmbeddedReel } from "apps/marketing/src/components/embedded-reel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "apps/marketing/src/components/ui/carousel";
import { Heading } from "apps/marketing/src/components/ui/heading";
import { allCollaborators } from "../../content/all-collaborators";
import { resultExamples } from "../../content/results";

export const metadata: Metadata = { title: "Gallery - Nõstos Agency" };
export const runtime = "edge";

export default async function Page() {
  return (
    <>
      <ContentSection className="pt-header flex w-full flex-col items-center justify-center gap-14 xl:h-[90dvh] 2xl:h-[60dvh]">
        <Heading>Our Work</Heading>
        <div className="flex w-full justify-center gap-10">
          <Link
            className="relative flex h-[30rem] w-full items-center justify-center bg-black/20 px-10"
            href="/gallery/photos"
          >
            <Image
              className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
              src={getS3File("melian-boutique-hotel/_IAN1814-508.jpg")}
              alt=""
              height={300}
              width={400}
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
              src={getS3File("melian-boutique-hotel/_IAN9171-304.jpg")}
              alt=""
              height={300}
              width={400}
            />
            <Heading className="text-center text-4xl font-light text-white md:text-4xl lg:text-[2.75rem]">
              Video Gallery
            </Heading>
          </Link>
        </div>
      </ContentSection>
      <ContentSection className="flex h-[50dvh] w-full flex-col items-center justify-center gap-14">
        <Heading>Our Collaborations</Heading>
        <Carousel className="w-2/3 max-w-6xl lg:w-full">
          <CarouselContent>
            {allCollaborators.map(({ imageURL }, i) => (
              <CarouselItem
                key={i}
                className="grid place-items-center sm:basis-1/2 lg:basis-1/3 xl:basis-1/4"
              >
                <div className="h-32 w-40 bg-black">&nbsp;</div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ContentSection>
      {/* // TODO add loading state of some kind, super janky atm */}
      <ContentSection className="flex w-full flex-col items-center justify-center gap-14 xl:h-dvh 2xl:h-[60dvh]">
        <Heading>Our Results</Heading>
        <Carousel className="h-full w-2/3 max-w-6xl lg:w-full">
          <CarouselContent>
            {resultExamples.map(({ URL }, i) => (
              <CarouselItem
                key={i}
                className="grid place-items-center lg:basis-1/2 xl:basis-1/3"
              >
                <EmbeddedReel url={URL} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ContentSection>
    </>
  );
}
