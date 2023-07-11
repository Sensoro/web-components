import fs from 'node:fs';
import { chokidar, lodash } from '@umijs/utils';

type Listener = (eventName: 'add'|'addDir'|'change'|'unlink'|'unlinkDir', path: string, stats?: fs.Stats) => void;

export function watch(
  patterns: string | ReadonlyArray<string>,
  options?: chokidar.WatchOptions | Listener,
  callback?: Listener
) {
  if (lodash.isFunction(options)) {
    callback = options;
    options = {};
  }

  const watcher = chokidar.watch(patterns, options);

  if (lodash.isFunction(callback)) {
    watcher.on('all', callback);
  }

  return watcher;
}
