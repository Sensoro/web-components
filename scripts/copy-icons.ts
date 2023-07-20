import path, { join } from 'node:path';
import { fsExtra, rimraf } from '@umijs/utils';
import { PATHS } from './.internal/constants';

const iconDirectory = join(PATHS.ROOT, 'node_modules/@sensoro-design/icons-svg/src/asn');
const targetDirectory = join(PATHS.WEB_COMPONENTS, 'src/icons');

(async () => {
  // 清空目标目录
  rimraf.sync(targetDirectory);
  fsExtra.mkdirSync(targetDirectory, { recursive: true });

  // 拷贝图标
  const icons: string[] = fsExtra.readdirSync(iconDirectory).sort();

  icons.forEach((fileName) => {
    fsExtra.copyFileSync(path.join(iconDirectory, fileName), path.join(targetDirectory, fileName));
  });
})();
