import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import alias from "@rollup/plugin-alias";
import { resolve } from 'path'

const projectRootDir = resolve(__dirname);

const isDevMode = import.meta

export default defineConfig({
  // base: '/SweetCats/',
  assetsInclude: ['**/*.gltf', '**/*.glb'],
  plugins: [
    alias({
      entries: [
        {
          find: '~',
          replacement: resolve(projectRootDir, 'src')
        }
      ]
    }),
    react()
  ]
});
