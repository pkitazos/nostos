import postgres from 'pg'
const { Pool } = postgres

async function testConnection() {
  const pool = new Pool({
    user: 'nostos',
    password: 'nostos_local',
    host: '127.0.0.1', // Using IP instead of localhost
    port: 5432,
    database: 'nostos',
  })

  try {
    console.log('Attempting connection...')
    const result = await pool.query('SELECT NOW()')
    console.log('Connected successfully:', result.rows[0])
  } catch (error) {
    console.error('Failed to connect:', error)
  } finally {
    await pool.end()
  }
}

testConnection()
