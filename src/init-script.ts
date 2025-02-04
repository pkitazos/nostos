import 'dotenv/config'
import configPromise from '@payload-config'
import { getPayload } from 'payload'

export const payload = await getPayload({ config: configPromise })

async function initializeDatabase() {
  try {
    // Check if admin user exists
    const adminExists = await payload.find({
      collection: 'users',
      where: {
        email: {
          equals: process.env.ADMIN_EMAIL ?? '',
        },
      },
    })

    if (adminExists.totalDocs === 0) {
      // Create admin user
      await payload.create({
        collection: 'users',
        data: {
          email: process.env.ADMIN_EMAIL || '',
          password: process.env.ADMIN_PASSWORD || '',
        },
      })
      console.log('Admin user created successfully')
    } else {
      console.log('Admin user already exists')
    }

    console.log('Database initialization completed')
  } catch (error) {
    console.error('Error during database initialization:', error)
    process.exit(1)
  } finally {
    setTimeout(() => {
      process.exit(0)
    }, 5000)
  }
}

initializeDatabase()
