import { Kysely, PostgresDialect } from 'kysely'
import { Pool } from 'pg'

// Define your database interface
interface Database {
  customers: {
    id: number
    name: string
    site_url: string | null
    created_at: Date
  }
  images: {
    id: number
    customer_id: number
    url: string
    display_order: number
    created_at: Date
  }
}

// Create and export the database connection
export function createDB(connectionString: string) {
  const dialect = new PostgresDialect({
    pool: new Pool({
      connectionString,
    })
  })

  return new Kysely<Database>({
    dialect,
  })
}

// Export type helper
export type DB = Database
