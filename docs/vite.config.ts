import path from 'node:path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  resolve: {
    alias: {
      '@sensoro-design/react': path.join(__dirname, '../packages/react/src/index.ts'),
      '@sensoro-design/web-components/es': path.join(__dirname, '../packages/web-components/src'),
      '@sensoro-design/web-components': path.join(__dirname, '../packages/web-components/src')
    }
  },
  server: {
    open: true,
  },
  plugins: [
    react(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Sensoro Design'
        }
      }
    }),
  ],
})
