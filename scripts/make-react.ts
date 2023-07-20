import 'zx/globals';
import path from 'node:path';
import { fsExtra, lodash } from '@umijs/utils';
import prettier from '@umijs/utils/compiled/prettier';
import { PATHS } from './.internal/constants';
import { getAllComponents } from './utils';

const reactDir = path.join(PATHS.REACT, 'src');
const index: string[] = [];

(async () => {
  const metadata = JSON.parse(fs.readFileSync(path.join(PATHS.METADATA), 'utf8'));

  const components = getAllComponents(metadata);

  components.forEach((component) => {
    if (!component.tagName) return;
    const tagWithoutPrefix = lodash.startCase(component.tagName.replace(/^s-/, '')).replace(' ', '');
    console.log(tagWithoutPrefix);
    const componentDir = path.join(reactDir, 'components', tagWithoutPrefix);
    const componentFile = path.join(componentDir, 'index.ts');
    const importPath = '@sensoro-design/web/es/' + component.path;
    const events = (component.events || []).map((event: any) => `${event.reactName}: '${event.name}'`).join(',\n');

    fsExtra.mkdirSync(componentDir, { recursive: true });

    const source = prettier.format(
      `
        import * as React from 'react';
        import { createComponent } from '@lit-labs/react';
        import Component from '${importPath}';

        export default createComponent({
          tagName: '${component.tagName}',
          elementClass: Component,
          react: React,
          events: {
            ${events}
          }
        });
      `,
      {
        parser: 'typescript',
      },
    );

    index.push(`export { default as ${component.name} } from './components/${tagWithoutPrefix}/index.js';`);

    fsExtra.writeFileSync(componentFile, source, 'utf8');
  });

  // Generate the index file
  fsExtra.writeFileSync(path.join(reactDir, 'index.ts'), index.join('\n'), 'utf8');
})();
