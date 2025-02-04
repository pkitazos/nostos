import { Metadata } from 'next'
import Image from 'next/image'

import { ImageSection } from '@/components/image-section'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { SITE_IMAGES } from '@/content/images'
import { COMPANY_NAME } from '@/content/config'

export const metadata: Metadata = { title: `Our Philosophy - ${COMPANY_NAME}` }

export default async function Page() {
  return (
    <ImageSection className="pt-header relative flex h-dvh flex-col items-center justify-end gap-16 bg-stone-300/40 pb-28 lg:bg-stone-300/20 2xl:pb-56">
      <Image
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover object-center"
        {...SITE_IMAGES.ourPhilosophy.heroBanner}
        alt=""
      />

      <Heading>Our Philosophy</Heading>
      <Paragraph className="mx-auto w-full max-w-7xl px-10 text-justify leading-7 md:px-28 xl:px-32 2xl:px-0">
        In the realm of digital storytelling, Nõstos stands as a beacon of authority, emphasizing
        the importance of returning to the essence of connection and belonging. Our unwavering
        philosophy is deeply entrenched in the pursuit of crafting unparalleled luxury experiences
        that transcend conventionality. We redefine luxury as an intimate and meticulously curated
        journey, fostering authentic connections at every turn. With a proven track record in Social
        Media and branding, we recognize that social media serves as the canvas upon which dreams
        take shape before becoming reality. Through our meticulously crafted strategies and
        captivating content, we strive to transport your audience into a realm of profound emotion
        and unwavering authenticity. Our mission goes beyond merely showcasing luxury; we endeavor
        to evoke an immersive experience that resonates deeply with your audience, serving as a
        compelling prelude to their booking decisions.
      </Paragraph>
    </ImageSection>
  )
}
