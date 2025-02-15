import { Metadata } from 'next'

import { ContentSection } from '@/components/content-section'
import { ImageSection } from '@/components/image-section'
import { Heading } from '@/components/ui/heading'
import { COMPANY_NAME } from '@/content/config'
import { ContactForm } from './_components/contact-form'

export const metadata: Metadata = { title: `Contact Us - ${COMPANY_NAME}` }

export default async function Page() {
  return (
    <>
      <ImageSection className="mt-header flex h-max flex-col items-center justify-end gap-16 bg-secondary py-10 md:py-16 lg:py-28 2xl:py-40">
        <Heading className="max-w-4xl px-5 text-center text-4xl md:px-0">
          Let&apos;s turn your vision into an unforgettable narrative.
        </Heading>
        <p className="max-w-2xl text-center text-lg">
          Our mission is to help you create performing content that captivates and resonates with
          your audience.
        </p>
      </ImageSection>
      <ContentSection className="flex w-full flex-col items-center gap-10 py-24">
        <Heading>Get in touch</Heading>
        <ContactForm />
      </ContentSection>
    </>
  )
}
