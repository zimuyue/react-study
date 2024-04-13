import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  resolve: [
    {
      find: '@',
      replacement: resolve(__dirname, 'src')
    }
  ]
})
