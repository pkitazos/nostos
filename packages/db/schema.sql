-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Customers table
CREATE TABLE customers (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(255) NOT NULL UNIQUE,
    site_url VARCHAR(1024),
    visible BOOLEAN DEFAULT false
);

-- Images table with ordering
CREATE TABLE customer_images (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    customer_id UUID NOT NULL REFERENCES customers(id) ON DELETE CASCADE,
    url VARCHAR(1024) NOT NULL,
    order_index INTEGER NOT NULL,
    metadata JSONB DEFAULT '{}'::jsonb
);

-- Index for faster lookups
CREATE INDEX customer_images_customer_id_idx ON customer_images(customer_id);
CREATE INDEX customers_name_idx ON customers(name);