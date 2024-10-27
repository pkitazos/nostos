import { Metadata } from "next";
import Image from "next/image";

import { getS3File } from "../../assets/distribution";
import { ContentSection } from "apps/marketing/src/components/content-section";
import { ImageSection } from "apps/marketing/src/components/image-section";
import { Heading } from "apps/marketing/src/components/ui/heading";
import { ContactForm } from "./_components/contact-form";

export const metadata: Metadata = { title: "Contact Us - Nõstos Agency" };
export const runtime = "edge";

export default async function Page() {
  return (
    <>
      <ImageSection className="pt-header relative flex min-h-[65vh] flex-col items-center justify-end gap-8 bg-stone-800/20 px-10 pb-28 text-secondary-foreground sm:px-20 md:gap-10 xl:gap-16 xl:px-40 2xl:pb-56">
        <Image
          className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-bottom"
          src={getS3File("melian-boutique-hotel/037A4077-117.jpg")}
          alt=""
          width={4416}
          height={6624}
        />
        <Heading className="text-center">
          Our mission is to help you create performing content that captivates
          and resonates with your audience.
        </Heading>
        <p className="text-center text-lg">
          Let&apos;s turn your vision into an unforgettable narrative.
        </p>
      </ImageSection>
      <ContentSection className="flex w-full flex-col items-center gap-10 py-24">
        <Heading>Get in touch</Heading>
        <ContactForm />
      </ContentSection>
    </>
  );
}
