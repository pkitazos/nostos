import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const payload = await getPayload({ config: configPromise })
