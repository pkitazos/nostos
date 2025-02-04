import payload from 'payload'
import path from 'path'
import { fileURLToPath } from 'url'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

async function initializeDatabase() {
  try {
    await payload.init({
      secret: process.env.PAYLOAD_SECRET,
      local: true,
      configPath: path.resolve(dirname, 'payload.config.ts'),
    })

    console.log('Connected to Payload')

    // Check if admin user exists
    const adminExists = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: process.env.ADMIN_EMAIL,
        },
      },
    })

    if (adminExists.totalDocs === 0) {
      // Create admin user
      await payload.create({
        collection: 'users',
        data: {
          email: process.env.ADMIN_EMAIL,
          password: process.env.ADMIN_PASSWORD,
        },
      })
      console.log('Admin user created successfully')
    } else {
      console.log('Admin user already exists')
    }

    console.log('Database initialization completed')
  } catch (error) {
    console.error('Error during database initialization:', error)
  } finally {
    payload.db.disconnect()
  }
}

initializeDatabase()
