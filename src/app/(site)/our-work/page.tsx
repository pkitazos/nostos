import { ImageSection } from '@/components/image-section'
import { Heading } from '@/components/ui/heading'

export default async function Page() {
  return (
    <>
      <ImageSection className="mt-header flex min-h-80 flex-col items-center justify-end bg-secondary pb-10 md:pb-16 lg:pb-28 2xl:pb-40">
        <Heading className="max-w-2xl px-5 text-center text-4xl md:px-0">Coming soon</Heading>
      </ImageSection>
    </>
  )
}
