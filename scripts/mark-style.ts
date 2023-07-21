import 'zx/globals';
import path from 'node:path';
import prettier from '@umijs/utils/compiled/prettier';
import { glob, fsExtra } from '@umijs/utils';
import { watch } from './.internal/watch';
import { PATHS } from './.internal/constants.js';

const commandLineArgs = require('command-line-args');

const args = commandLineArgs([{ name: 'watch', type: Boolean }]);

async function componentStyle() {
  const files = glob.sync('src/components/**/*.less', {
    cwd: PATHS.WEB_COMPONENTS,
    ignore: ['**/internal/**'],
  });

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
      {
        parser: 'typescript',
      },
    );

    /** 编辑 less */
    fsExtra.writeFileSync(`${tsPath}`, source);
  }
}

async function theme() {
  const files = glob.sync('src/themes/*.less', {
    cwd: PATHS.WEB_COMPONENTS,
    ignore: ['**/internal/**'],
  });

  for (const file of files) {
    console.log(file);
    const fileName = file.split('/')[file.split('/').length - 1];
    const lessPath = path.join(PATHS.WEB_COMPONENTS, file);
    const cssPath = lessPath.replace('.less', '.css');

    const reactThemes = path.join(PATHS.REACT, 'themes');

    /** 编辑 less */
    await $`lessc ${lessPath} ${cssPath} --js`;

    fsExtra.mkdirSync(reactThemes, { recursive: true });
    fsExtra.copyFileSync(cssPath, path.join(reactThemes, fileName.replace('.less', '.css')));
  }
}

(async () => {
  await theme();
  await componentStyle();
})();

if (args.watch) {
  watch(['src/components/**/*.less'], {
    cwd: PATHS.WEB_COMPONENTS,
  }).on('change', async () => {
    await componentStyle();
  });
}
