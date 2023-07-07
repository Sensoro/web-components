import { join } from 'node:path';

const ROOT = join(__dirname, '../../');
const PACKAGES = join(ROOT, './packages');

export const PATHS = {
  ROOT,
  PACKAGES,
  REACT: join(PACKAGES, 'react'),
  WEB_COMPONENTS: join(PACKAGES, 'web-components'),
  METADATA: join(PACKAGES, 'web-components/custom-elements.json'),
  EXAMPLES: join(ROOT, 'examples'),
} as const;
