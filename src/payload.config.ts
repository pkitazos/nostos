import { vercelPostgresAdapter } from '@payloadcms/db-vercel-postgres'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { s3Storage } from '@payloadcms/storage-s3'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import path from 'path'
import { buildConfig } from 'payload'
import { fileURLToPath } from 'url'
import sharp from 'sharp'

import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Clients } from './collections/Clients'
import { Collaborators } from './collections/Collaborators'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Clients, Collaborators],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db:
    process.env.NODE_ENV === 'development'
      ? vercelPostgresAdapter({
          pool: {
            connectionString: 'postgresql://nostos:nostos_local@localhost:5432/nostos',
          },
        })
      : vercelPostgresAdapter({
          pool: {
            connectionString: process.env.POSTGRES_URL || '',
          },
        }),
  plugins:
    process.env.NODE_ENV === 'development'
      ? [
          s3Storage({
            collections: {
              [Media.slug]: true,
            },
            bucket: 'nostos-uploads',
            config: {
              endpoint: 'http://localhost:9000',
              credentials: {
                accessKeyId: 'minio_user',
                secretAccessKey: 'minio_password',
              },
              region: 'us-east-1',
              forcePathStyle: true,
            },
          }),
        ]
      : [
          vercelBlobStorage({
            collections: { [Media.slug]: true },
            token: process.env.BLOB_READ_WRITE_TOKEN || '',
          }),
        ],
  sharp,
})
