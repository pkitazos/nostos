import { payload } from '@/lib/db'

export async function getClients() {
  return await payload.find({ collection: 'clients' }).then((res) => res.docs)
}

export async function getClient(clientId: string) {
  const clients = await payload.find({ collection: 'clients' }).then((res) => res.docs)

  console.log(
    'clients',
    clients.map((x) => encodeURIComponent(x.name)),
    clientId,
  )
  const client = clients.find((client) => encodeURIComponent(client.name) === clientId)

  if (!client) throw new Error('Client not found')

  return client
}
