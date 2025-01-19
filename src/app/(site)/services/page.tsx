import Image from "next/image";

import { ContentSection } from "@/components/content-section";
import { Heading } from "@/components/ui/heading";
import { Paragraph } from "@/components/ui/paragraph";
import { SITE_IMAGES } from "@/content/images";

export default async function Page() {
  return (
    <main className="pt-header grid place-items-center">
      <div className="flex max-w-xl grid-cols-10 grid-rows-14 flex-col items-center gap-16 px-10 py-20 md:grid md:max-w-7xl md:gap-10 lg:py-28">
        <ContentSection className="col-span-5 col-start-1 row-span-4 row-start-1 space-y-6 px-6 md:px-9 lg:col-span-4 lg:col-start-1 lg:row-span-4 lg:row-start-1 lg:px-8">
          <Heading className="font-medium md:text-3xl lg:text-4xl">
            Professional Photoshoots
          </Heading>
          <Paragraph className="leading-7">
            Expertly crafted professional photoshoots. From breathtaking
            landscapes to exquisite interiors, our team captures the essence of
            your property with precision and finesse. Whether it&apos;s a
            luxurious villa nestled in paradise or a boutique hotel in the heart
            of the city, from the soft glow of sunset casting a warm embrace
            over your villa&apos;s terrace to the sleek sophistication of your
            hotel lobby, we ensure every detail is beautifully portrayed to
            entice and inspire your audience. We go beyond mere photography,
            aiming to evoke emotions and inspire dreams with each image we
            create.
            <br />
            <br />
            We believe that stunning visuals are the cornerstone of effective
            storytelling. Let us bring your property to life through expertly
            crafted photoshoots that leave a lasting impression on your audience
            and elevate your brand to new heights of excellence.
          </Paragraph>
        </ContentSection>
        <div className="relative col-span-5 col-start-6 row-span-2 row-start-2 h-full w-full lg:col-span-3 lg:col-start-5 lg:row-span-3 lg:row-start-3">
          <Image
            className="absolute left-0 top-0 -z-10 h-full w-full object-contain"
            {...SITE_IMAGES.services.img1}
              alt=""
          />
        </div>
        <div className="relative col-span-5 col-start-6 row-span-2 row-start-4 h-full w-full lg:col-span-3 lg:col-start-8 lg:row-span-3 lg:row-start-1">
          <Image
            className="absolute left-0 top-0 -z-10 h-full w-full object-contain"
            {...SITE_IMAGES.services.img2}
              alt=""
          />
        </div>
        <ContentSection className="col-span-5 col-start-1 row-span-4 row-start-5 space-y-6 px-6 md:px-9 lg:col-span-4 lg:col-start-1 lg:row-span-4 lg:row-start-5 lg:px-8">
          <Heading className="font-medium md:text-3xl lg:text-4xl">
            Social Media Management & Content Creation
          </Heading>
          <Paragraph className="leading-7">
            We specialize in crafting immersive digital narratives for hotels
            and luxury experiences. Through strategic social media management,
            we blend creativity with engagement, turning your social channels
            into dynamic storytelling platforms. Every post contributes to your
            brand&apos;s narrative, inviting audiences to join your journey and
            ultimately driving direct bookings. With data-driven insights, we
            refine strategies to resonate deeply with your audience, building a
            profile that functions as a powerful sales funnel, influencing and
            persuading direct bookings.
          </Paragraph>
        </ContentSection>
        <div className="relative col-span-5 col-start-6 row-span-2 row-start-6 h-full w-full lg:col-span-3 lg:col-start-5 lg:row-span-3 lg:row-start-7">
          <Image
            className="absolute left-0 top-0 -z-10 h-full w-full object-contain"
            {...SITE_IMAGES.services.img3}
              alt=""
          />
        </div>
        <div className="relative col-span-5 col-start-6 row-span-2 row-start-8 h-full w-full lg:col-span-3 lg:col-start-8 lg:row-span-3 lg:row-start-5">
          <Image
            className="absolute left-0 top-0 -z-10 h-full w-full object-contain"
            {...SITE_IMAGES.services.img4}
              alt=""
          />
        </div>
        <ContentSection className="col-span-5 col-start-1 row-span-2 row-start-9 space-y-6 px-6 md:px-9 lg:col-span-4 lg:col-start-1 lg:row-span-2 lg:row-start-9 lg:px-8">
          <Heading className="font-medium md:text-3xl lg:text-4xl">
            Growth & Ad Campaigns
          </Heading>
          <Paragraph className="leading-7">
            We specialize in driving growth through targeted campaigns and
            strategic ads. With data-driven insights and creative innovation, we
            craft compelling messages that resonate with your audience, sparking
            meaningful interactions and driving conversions.
          </Paragraph>
        </ContentSection>
        <div className="relative col-span-5 col-start-6 row-span-2 row-start-10 h-full w-full lg:col-span-3 lg:col-start-5 lg:row-span-3 lg:row-start-11">
          <Image
            className="absolute left-0 top-0 -z-10 h-full w-full object-contain"
              {...SITE_IMAGES.services.img5}
              alt=""
          />
        </div>
        <div className="relative col-span-5 col-start-6 row-span-2 row-start-12 h-full w-full lg:col-span-3 lg:col-start-8 lg:row-span-3 lg:row-start-9">
          <Image
            className="absolute left-0 top-0 -z-10 h-full w-full object-contain"
            {...SITE_IMAGES.services.img6}
              alt=""
          />
        </div>
        <ContentSection className="col-span-5 col-start-1 row-span-4 row-start-11 px-6 md:px-9 lg:col-span-4 lg:row-span-4 lg:row-start-11 lg:space-y-6 lg:px-8">
          <Heading className="font-medium md:text-3xl lg:text-4xl">
            Influencer Management
          </Heading>
          <Paragraph className="leading-7">
            We maintain an extensive database comprising the most prominent
            luxury lifestyle and travel influencers. Our expertise lies in
            crafting genuine influencer partnerships that seamlessly align with
            your brand&apos;s narrative. We transform these collaborations into
            compelling chapters, expanding your reach to a wider audience. By
            carefully selecting influencers whose stories resonate with your
            brand&apos;s values, we ensure authenticity in every partnership.
            Our approach emphasizes building enduring relationships beyond
            singular collaborations. We seamlessly integrate influencers into
            your brand&apos;s ongoing narrative, ensuring a cohesive and
            impactful presence across all channels.
          </Paragraph>
        </ContentSection>
      </div>
    </main>
  );
}
