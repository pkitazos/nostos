import { Metadata } from 'next'

import { ContentSection } from '@/components/content-section'
import { ImageSection } from '@/components/image-section'
import { Button } from '@/components/ui/button'
import { Heading } from '@/components/ui/heading'
import { Paragraph } from '@/components/ui/paragraph'
import { COMPANY_NAME } from '@/content/config'
import Link from 'next/link'
import { TeamMember } from './_components/team-member'

export const metadata: Metadata = { title: `About - ${COMPANY_NAME}` }

export default async function Page() {
  return (
    <>
      <ImageSection className="pt-header flex max-h-[38dvh] min-h-80 flex-col items-center justify-end bg-accent pb-10 md:pb-16 lg:pb-20 2xl:pb-28">
        <Heading className="max-w-2xl px-5 text-center text-4xl md:px-0">
          A passionate team of creatives and strategic thinkers.
        </Heading>
      </ImageSection>
      <ContentSection className="mt-20 flex min-h-dvh flex-col justify-start gap-y-40 pb-20 md:grid md:grid-cols-2 md:grid-rows-6 md:justify-center md:gap-x-9 md:gap-y-10 lg:my-56 lg:gap-x-16 lg:gap-y-20">
        <div className="flex flex-col items-start justify-center gap-10 md:col-span-2 md:col-start-1 md:row-span-2 md:row-start-1 md:h-full md:pb-20 lg:col-span-1 lg:col-start-2 xl:px-10 2xl:px-28">
          <Heading className="text-4xl sm:text-5xl">Meet the Creatives</Heading>
          <Paragraph className="leading-7">
            We are a passionate team of creatives seamlessly fusing the art of storytelling with the
            allure of luxury, breathing life into experiences and weaving digital dreamscapes.
            <br />
            <br />
            Our mastery extends beyond crafting sleek narratives; we strategically traverse the
            landscapes of social media, infusing creative direction into every pixel. We leverage
            our full range of talent and expertise to solve business and marketing problems in
            distinctive and effective ways. We stand as collaborative partners, dedicated to shaping
            profound and enduring impressions for your brand.
          </Paragraph>
        </div>
        <div className="flex flex-col items-start gap-10 md:col-start-1 md:row-span-2 md:row-start-3 md:h-full xl:px-10 2xl:px-28">
          <TeamMember name="Nadia Kitazou" title="Founder | Creative Director & Strategist">
            There&apos;s nothing quite as memorable as a good story. Stories have a unique power to
            simplify complex ideas and elicit emotions that resonate deeply with us. I believe that
            what people feel is what they remember most. After all, we should all live the story we
            want to tell.
          </TeamMember>
        </div>
        <div className="flex flex-col items-start gap-10 pb-20 md:col-start-2 md:row-span-2 md:row-start-5 md:h-full md:pb-0 xl:px-10 2xl:px-28">
          <TeamMember name="Harry Lapsatis" title="Co-Founder | Photographer /Videographer">
            There is something very interesting about the small details. The things that complete an
            experience or bring a moment of joy into our lives are the things we often over look. I
            love the details, which is why it&apos;s important to me that each emotion we feel, see
            and experience is connected to a specific detail. Part of communicating through imagery
            is the ability to convey the importance of each detail, however big or small. That is
            how I strive to make my work transform into an unforgettable sentiment.
          </TeamMember>
        </div>
      </ContentSection>
      <ImageSection className="flex h-[70dvh] flex-col items-center justify-center gap-12 bg-secondary px-10 text-secondary-foreground">
        <p className="max-w-5xl text-center text-2xl">
          Embrace the timeless power of storytelling. It&apos;s the emotions we evoke that linger
          longest in memory. Let&apos;s craft unforgettable narratives that transcend time and
          captivate your audiences hearts.
        </p>
        <Link href="/contact-us">
          <Button size="lg">Contact Us</Button>
        </Link>
      </ImageSection>
    </>
  )
}
