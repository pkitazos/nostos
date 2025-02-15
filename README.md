# Nostos Agency

A Marketing Site built using Next JS and Payload CMS, utilising ISR.

## TODO

- [ ] admin panel colours / components
- [ ] images not properly fetched after upload
- [ ] description for clients (WYSIWYG editor)
- [ ] do something with client logos
- [ ] push latest schema to neon
- [ ] open links externally
- [ ] landscape photos in gallery
- [ ] videos are still broken
- [x] data access functions
- [ ] db init scripts
- [x] implement ISR
- [x] hook up client collections to their respective page
- [x] start new design
- [ ] setup page creation (WYSIWYG)
- [ ] "Our Expertise" sections
- [ ] make list of tasks
  - list image dimensions
  - make them pick consistent colours (currently too many in use)
  - get all icon assets as SVGs
  - get site Favicon
  - tell them they have to create the banners
  - standardise fonts (too many)
  - add link to client website on their page
- [ ] add copyright to footer

## Database Setup

- Run `pnpm payload migrate` to set up the database schema
- Run `pnpm db:init` to create the initial admin user (requires `ADMIN_EMAIL` and `ADMIN_PASSWORD` env variables)
