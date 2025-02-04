INSERT INTO "users" (email, password, created_at, updated_at)
SELECT 
  'admin@example.com',  -- Replace with your admin email
  'your-hashed-password-here',  -- This is bcrypt hash of 'admin123'
  CURRENT_TIMESTAMP,
  CURRENT_TIMESTAMP
WHERE NOT EXISTS (
  SELECT 1 FROM "users" WHERE email = 'admin@example.com'
);