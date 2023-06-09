import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import wasm from 'vite-plugin-wasm';

export default defineConfig({
  plugins: [wasm(), react()],
  optimizeDeps: {
    exclude: ['@babylonjs/havok'],
  },
});
