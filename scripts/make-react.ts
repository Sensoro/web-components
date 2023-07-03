import 'zx/globals';
import prettier from '@umijs/utils/compiled/prettier';
// @ts-ignore
import prettierConfig from '../.prettierrc.js';
import { PATHS } from './.internal/constants';
import { getAllComponents } from './utils';

const reactDir = path.join(PATHS.REACT, 'src');
const index: string[] = [];

(async () => {
  const metadata = JSON.parse(fs.readFileSync(path.join(PATHS.METADATA), 'utf8'));

  const components = getAllComponents(metadata);

  components.map(component => {
    const tagWithoutPrefix = component.tagName.replace(/^l-/, '');
    const componentDir = path.join(reactDir, tagWithoutPrefix);
    const componentFile = path.join(componentDir, 'index.ts');
    const importPath = component.path
      .replace(/^src\//, '@sensoro-design/web-components/es/')
      .replace('.ts', '');
    const events = (component.events || []).map((event: any) => `${event.reactName}: '${event.name}'`).join(',\n');

    fs.mkdirSync(componentDir, { recursive: true });

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
      Object.assign(prettierConfig, {
        parser: 'babel-ts'
      })
    );

    index.push(`export { default as ${component.name} } from './${tagWithoutPrefix}/index.js';`);

    fs.writeFileSync(componentFile, source, 'utf8');
  })

  // Generate the index file
  fs.writeFileSync(path.join(reactDir, 'index.ts'), index.join('\n'), 'utf8');
})();
