import { Metadata } from 'next'
import Link from 'next/link'

import { COMPANY_NAME } from '@/content/config'
import { getClient } from '@/content/get-clients'
import { Media } from '@/payload-types'
import { PhotoGallery } from './_components/photo-gallery'

// TODO: make metadata dynamic
export const metadata: Metadata = { title: `Gallery - ${COMPANY_NAME}` }

type PageParams = Promise<{ slug: string }>

export default async function Page({ params }: { params: PageParams }) {
  const { slug } = await params
  const client = await getClient(slug)

  return (
    <main className="pt-header flex flex-col items-center">
      <h1 className="mt-32">
        Client:{' '}
        <Link className="text-stone-400 underline" href={client.url} target="_blank">
          {client.name}
        </Link>
      </h1>
      <section className="w-full max-w-9xl px-10 pt-32">
        <PhotoGallery images={client.photos?.map((x) => (x.photo as Media)!) ?? []} />
      </section>
    </main>
  )
}
