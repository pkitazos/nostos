import { payload } from '@/lib/db'

export async function getClients() {
  return await payload.find({ collection: 'clients' }).then((res) => res.docs)
}

export async function getClient(clientId: string) {
  const clientName = decodeURIComponent(clientId)

  const [client] = await payload
    .find({
      collection: 'clients',
      where: { name: { equals: clientName } },
    })
    .then((res) => res.docs)

  if (!client) throw new Error(`Client not found: ${clientName}}`)

  return client
}
