import * as migration_20250204_230402_init_schema from './20250204_230402_init_schema';

export const migrations = [
  {
    up: migration_20250204_230402_init_schema.up,
    down: migration_20250204_230402_init_schema.down,
    name: '20250204_230402_init_schema'
  },
];
