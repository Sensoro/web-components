import path from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import { createHtmlPlugin } from 'vite-plugin-html';

export default defineConfig({
  resolve: {},
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
