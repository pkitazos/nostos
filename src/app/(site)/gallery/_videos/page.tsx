import { Metadata } from 'next'

import { ContentSection } from '@/components/content-section'
import { Heading } from '@/components/ui/heading'
import { videos } from '@/content'
import { COMPANY_NAME } from '@/content/config'

export const metadata: Metadata = { title: `Video Gallery - ${COMPANY_NAME}` }

export default async function Page() {
  return (
    <ContentSection className="pt-header flex w-full flex-col items-center gap-28">
      <Heading className="pt-28">Video Gallery</Heading>
      <div className="mx-auto grid w-full max-w-8xl grid-cols-1 grid-rows-2 place-items-center gap-4 px-10 md:grid-cols-2">
        {videos.map(({ url }, i) => (
          <Video key={i} url={url} />
        ))}
      </div>
    </ContentSection>
  )
}

function Video({ url }: { url: string }) {
  return (
    <video className="w-full" width="1920" height="1080" controls preload="none">
      <source src={url} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}
