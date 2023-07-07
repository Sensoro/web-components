import path from 'node:path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  resolve: {
    alias: {
      '@sensoro-design/react': path.join(__dirname, '../packages/react/src/index.ts')
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
