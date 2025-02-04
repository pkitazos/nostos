# Nostos Agency

A Marketing Site built using Next JS and Payload CMS, utilising ISR.

## TODO

- [ ] fix admin panel colours
- [ ] images not properly fetched after upload
- [ ] description for clients
- [ ] do something with client logos
- [ ] push latest schema to neon
- [ ] open links externally
- [ ] landscape photos in gallery
- [ ] videos are still broken
- [x] data access functions
- [ ] implement ISR
- [x] hook up client collections to their respective page

## Database Setup

- Run `pnpm payload migrate` to set up the database schema
- Run `pnpm db:init` to create the initial admin user (requires `ADMIN_EMAIL` and `ADMIN_PASSWORD` env variables)
