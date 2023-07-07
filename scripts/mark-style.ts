import 'zx/globals';
import path from 'node:path';
import prettier from '@umijs/utils/compiled/prettier';
// @ts-ignore
import prettierConfig from '../.prettierrc.js';
import { glob, fsExtra } from '@umijs/utils';
import { PATHS } from './.internal/constants.js';

(async () => {
  const files = glob.sync('**/*.less', {
    cwd: PATHS.WEB_COMPONENTS,
    ignore: [
      '**/styles/**',
      '**/themes/**',
      '**/.internal/**',
    ],
  })

  for (const file of files) {
    const lessPath = path.join(PATHS.WEB_COMPONENTS, file);
    const cssPath = lessPath.replace('.less', '.css');
    const tsPath = lessPath.replace('.less', '.ts');

    /** 编辑 less */
    await $`lessc ${lessPath} ${lessPath.replace('.less', '.css')} --js`;

    const content = fs.readFileSync(cssPath).toString('utf8');

    const source = prettier.format(
      `
        import { css } from 'lit';

        export const styles = css\`${content}\`;
      `,
      Object.assign(prettierConfig, {
        parser: 'babel-ts'
      })
    );

    /** 编辑 less */
    fsExtra.writeFileSync(`${tsPath}`, source);
  }
})();
