import * as migration_20250107_164523_clients_cms from './20250107_164523_clients_cms';
import * as migration_20250118_231007_clients_name from './20250118_231007_clients_name';
import * as migration_20250118_231246_collaborators from './20250118_231246_collaborators';

export const migrations = [
  {
    up: migration_20250107_164523_clients_cms.up,
    down: migration_20250107_164523_clients_cms.down,
    name: '20250107_164523_clients_cms',
  },
  {
    up: migration_20250118_231007_clients_name.up,
    down: migration_20250118_231007_clients_name.down,
    name: '20250118_231007_clients_name',
  },
  {
    up: migration_20250118_231246_collaborators.up,
    down: migration_20250118_231246_collaborators.down,
    name: '20250118_231246_collaborators'
  },
];
