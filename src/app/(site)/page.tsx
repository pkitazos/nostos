import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContentSection } from "@/components/content-section";
import { ImageSection } from "@/components/image-section";
import { PhotoGalleryGrid } from "@/components/photo-gallery-grid";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { getClients } from "@/content/get-clients";
import { getCollaborators } from "@/content/get-collaborators";
import { SITE_IMAGES } from "@/content/images";
import { toImageUrl } from "@/lib/utils/to-image-url";
import { Testimonial } from "./_components/testimonial";

export const metadata: Metadata = { title: "Nõstos Agency" };

export default async function Home() {
  const clients = await getClients();
  const collaborators = await getCollaborators()

  return (
    <>
      <ImageSection className="pt-header h-dvh flex-col items-center justify-center bg-stone-500/20">
        <Image
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover"
          {...SITE_IMAGES.home.heroBanner}
          alt=""
        />
        <div className="flex flex-col items-center justify-center gap-10">
          <h1 className="font-serif text-6xl text-white">Nõstos Agency</h1>
          <h3 className="text-center text-2xl text-white md:text-2xl">
            Luxurious, Timeless, Digital Dreamscapes
          </h3>
          <Link href="/contact-us">
            <Button>Contact Us</Button>
          </Link>
        </div>
      </ImageSection>
      <ContentSection className="flex h-[50dvh] flex-col justify-center gap-10 md:grid md:grid-cols-2 md:gap-9 lg:gap-16">
        <div className="grid place-items-center">
          <Heading>Our Philosophy</Heading>
        </div>
        <Paragraph className="grid place-items-center px-4 md:px-10 2xl:px-28">
          In the world of digital storytelling, Nõstos echoes the significance
          of returning, creating a sense of belonging and connection. Our
          philosophy is rooted in the profound meaning of creating a luxurious
          experience that transcends the traditional. We define luxury as an
          intimate, attentive journey, fostering genuine connections.
        </Paragraph>
      </ContentSection>
      <ContentSection className="flex flex-col gap-28 pb-20 md:grid md:grid-cols-2 md:gap-9 md:pb-40 lg:pb-96">
        <Image
          className="h-[30rem] w-full object-cover lg:h-[60rem]"
          {...SITE_IMAGES.home.ourApproach}
          alt=""
        />
        <div className="grid place-items-center">
          <div className="flex flex-col items-center gap-10 px-4 md:items-start md:px-10 2xl:px-28">
            <Heading>Our Approach</Heading>
            <Paragraph>
              In an era valuing authentic connections, we craft compelling
              narratives that resonate deeply with your audience. Our expertise
              transforms experiences into sophisticated tales, setting your
              brand apart in the digital landscape. Committed to understanding
              your vision, we collaborate creatively to leave a lasting impact
              and foster enduring partnerships.
            </Paragraph>
            <Paragraph>
              We are a creative team fusing storytelling with luxury to craft
              unforgettable digital experiences. More than an agency, we are
              collaborative partners dedicated to making lasting impressions for
              your brand. Our goal is to exceed expectations by merging our
              creative expertise with your vision.
            </Paragraph>
          </div>
        </div>
      </ContentSection>
      <Image
        className="h-[66dvh] w-full object-cover"
        {...SITE_IMAGES.home.banner1}
          alt=""
      />
      <ContentSection className="grid min-h-[50dvh] grid-cols-1 gap-y-20 py-20 md:grid-cols-2">
        <div className="grid place-items-center">
          <Heading>Testimonials</Heading>
        </div>
        <div className="flex flex-col items-start justify-center gap-20">
          <Testimonial name="Anil Ozer (Cook's Club Adakoy)">
            Nadia, did a great job here at Cook&apos;s Club Adakoy, it was an
            absolute pleasure.
          </Testimonial>
          <Testimonial name="Antonis (Casa Cook Rhodes)">
            Ελπίζω να δουλέψουμε μαζί και του χρόνου! Κάνετε εξαιρετική δουλειά
            και χαίρομαι πολύ που συνεργαστήκαμε!
          </Testimonial>
          <Testimonial name="(Nissiblu Beach Resort)">
            It was great collaborating with you last year, we are happy to
            continue with our collaboration. The Social Media Strategy was on
            point.
          </Testimonial>
        </div>
      </ContentSection>
      <Carousel>
        <CarouselContent>
          <CarouselItem>
            <Image
              className="h-dvh w-full object-cover"
              src={"/site/clients/037A4083-119.jpg"}
              alt=""
              width={4480}
              height={6720}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              className="h-dvh w-full object-cover"
              src={"/site/clients/037A4206-132.jpg"}
              alt=""
              width={4416}
              height={6624}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              className="h-dvh w-full object-cover"
              src={"/site/clients/037A5582-345.jpg"}
              alt=""
              width={4416}
              height={6624}
            />
          </CarouselItem>
          <CarouselItem>
            <Image
              className="h-dvh w-full object-cover"
              src={"/site/clients/LAPS0097.jpg"}
              alt=""
              width={4455}
              height={6682}
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="translate-x-[4rem] bg-accent hover:bg-accent/50" />
        <CarouselNext className="-translate-x-[4rem] bg-accent hover:bg-accent/50" />
      </Carousel>
      <ContentSection className="flex flex-col items-center justify-start px-10 py-40 sm:py-56 md:px-20 lg:px-20">
        <Heading className="mb-32 sm:mb-56">Our Collaborations</Heading>
        <div className="grid w-full grid-cols-1 place-content-around gap-10 sm:grid-cols-2 sm:gap-16 md:gap-32 lg:grid-cols-3 xl:grid-cols-4">
          {collaborators.map((collaborator, i) => (
            <Link
              key={i}
              href={collaborator.url}
              className="h-48 w-64 place-self-center"
            >
              <Image
                height={400}
                width={400}
                className="h-48 w-full object-cover"
                src={toImageUrl(collaborator.logo!)}
                alt=""
              />
            </Link>
          ))}
        </div>
      </ContentSection>
      <ContentSection className="grid place-items-center pb-56">
        <PhotoGalleryGrid collaborators={clients} />
      </ContentSection>
      <Image
        className="h-[66dvh] w-full object-cover"
        {...SITE_IMAGES.home.banner1}
          alt=""
      />
      <ImageSection className="flex h-[70dvh] flex-col items-center justify-center gap-5 bg-secondary text-secondary-foreground">
        <Heading className="mb-5">Contact us</Heading>
        <p className="px-5 text-center">
          We&apos;ll prepare a proposal and walk you through every step of the
          process.
        </p>
        <Link href="/contact-us">
          <Button size="lg">Contact Us</Button>
        </Link>
      </ImageSection>
    </>
  );
}
