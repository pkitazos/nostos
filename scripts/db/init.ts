import 'dotenv/config'
import bcrypt from 'bcryptjs'
import pg from 'pg'

const { Pool } = pg

async function createAdminUser() {
  const pool = new Pool({
    connectionString:
      process.env.POSTGRES_URL || 'postgresql://nostos:nostos_local@127.0.0.1:5432/nostos',
  })

  try {
    const email = process.env.ADMIN_EMAIL
    const password = process.env.ADMIN_PASSWORD

    if (!email || !password) {
      throw new Error('ADMIN_EMAIL and ADMIN_PASSWORD must be set')
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const result = await pool.query(
      `INSERT INTO "users" (email, password, created_at, updated_at)
       SELECT $1, $2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP
       WHERE NOT EXISTS (SELECT 1 FROM "users" WHERE email = $1)
       RETURNING email`,
      [email, hashedPassword],
    )

    if (result.rowCount! > 0) {
      console.log('Admin user created successfully')
    } else {
      console.log('Admin user already exists')
    }
  } catch (error) {
    console.error('Error creating admin user:', error)
    process.exit(1)
  } finally {
    await pool.end()
  }
}

createAdminUser()
