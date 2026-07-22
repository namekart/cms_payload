import * as migration_20260722_095616_initial from './20260722_095616_initial';
import * as migration_20260722_105042_add_articles from './20260722_105042_add_articles';

export const migrations = [
  {
    up: migration_20260722_095616_initial.up,
    down: migration_20260722_095616_initial.down,
    name: '20260722_095616_initial',
  },
  {
    up: migration_20260722_105042_add_articles.up,
    down: migration_20260722_105042_add_articles.down,
    name: '20260722_105042_add_articles'
  },
];
