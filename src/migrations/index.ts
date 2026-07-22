import * as migration_20260722_095616_initial from './20260722_095616_initial';

export const migrations = [
  {
    up: migration_20260722_095616_initial.up,
    down: migration_20260722_095616_initial.down,
    name: '20260722_095616_initial'
  },
];
