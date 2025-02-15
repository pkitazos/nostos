import * as migration_20250204_230402_init_schema from './20250204_230402_init_schema';
import * as migration_20250214_203837_testimonials from './20250214_203837_testimonials';
import * as migration_20250214_204038_testimonials_required_fields from './20250214_204038_testimonials_required_fields';
import * as migration_20250214_204254_testimonials_qol from './20250214_204254_testimonials_qol';

export const migrations = [
  {
    up: migration_20250204_230402_init_schema.up,
    down: migration_20250204_230402_init_schema.down,
    name: '20250204_230402_init_schema',
  },
  {
    up: migration_20250214_203837_testimonials.up,
    down: migration_20250214_203837_testimonials.down,
    name: '20250214_203837_testimonials',
  },
  {
    up: migration_20250214_204038_testimonials_required_fields.up,
    down: migration_20250214_204038_testimonials_required_fields.down,
    name: '20250214_204038_testimonials_required_fields',
  },
  {
    up: migration_20250214_204254_testimonials_qol.up,
    down: migration_20250214_204254_testimonials_qol.down,
    name: '20250214_204254_testimonials_qol'
  },
];
