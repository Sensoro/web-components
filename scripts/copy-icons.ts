import path from 'node:path';
import { fsExtra, rimraf } from '@umijs/utils';
import { PATHS } from './.internal/constants';

const iconDirectory = path.join(PATHS.ROOT, 'node_modules/@sensoro-design/icons-svg/src/asn');
const targetDirectory = path.join(PATHS.WEB_COMPONENTS, 'src/icons');
const targetReactDirectory = path.join(PATHS.REACT, 'src/icons');

(async () => {
  // 清空目标目录
  rimraf.sync(targetDirectory);
  fsExtra.mkdirSync(targetDirectory, { recursive: true });

  rimraf.sync(targetReactDirectory);
  fsExtra.mkdirSync(targetReactDirectory, { recursive: true });

  // 拷贝图标
  const icons: string[] = fsExtra.readdirSync(iconDirectory).sort();

  icons.forEach((fileName) => {
    fsExtra.copyFileSync(path.join(iconDirectory, fileName), path.join(targetDirectory, fileName));
    fsExtra.copyFileSync(path.join(iconDirectory, fileName), path.join(targetReactDirectory, fileName));
  });
})();
