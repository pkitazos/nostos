import * as migration_20250204_124221_init_schema from './20250204_124221_init_schema';
import * as migration_20250204_191332_optional_alt_text from './20250204_191332_optional_alt_text';
import * as migration_20250204_223830_removed_collaborators from './20250204_223830_removed_collaborators';

export const migrations = [
  {
    up: migration_20250204_124221_init_schema.up,
    down: migration_20250204_124221_init_schema.down,
    name: '20250204_124221_init_schema',
  },
  {
    up: migration_20250204_191332_optional_alt_text.up,
    down: migration_20250204_191332_optional_alt_text.down,
    name: '20250204_191332_optional_alt_text',
  },
  {
    up: migration_20250204_223830_removed_collaborators.up,
    down: migration_20250204_223830_removed_collaborators.down,
    name: '20250204_223830_removed_collaborators'
  },
];
