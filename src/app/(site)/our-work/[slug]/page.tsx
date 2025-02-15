import Link from 'next/link'

import { COMPANY_NAME } from '@/content/config'
import { getClient, getClients } from '@/content/get-clients'
import { Media } from '@/payload-types'
import { PhotoGallery } from './_components/photo-gallery'

export const revalidate = 3600
export const dynamicParams = true

export async function generateStaticParams() {
  const clients = await getClients()
  return clients.map((client) => ({ slug: encodeURIComponent(client.name) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const clientName = decodeURIComponent(slug)
  return { title: `${clientName} - ${COMPANY_NAME}` }
}

type PageParams = Promise<{ slug: string }>

export default async function Page({ params }: { params: PageParams }) {
  const { slug } = await params
  const client = await getClient(slug)

  return (
    <main className="pt-header flex flex-col items-center">
      <h1 className="mt-32 text-2xl">
        <span className="text-zinc-400">Client: </span>
        <Link
          className="text-stone-500 decoration-[1.5px] underline-offset-2 hover:underline"
          href={client.url}
          target="_blank"
        >
          {client.name}
        </Link>
      </h1>
      <p className="mt-14 max-w-2xl text-justify">{client.description}</p>
      <section className="w-full max-w-9xl px-10 pt-32">
        <PhotoGallery images={client.photos?.map((x) => (x.photo as Media)!) ?? []} />
      </section>
    </main>
  )
}
