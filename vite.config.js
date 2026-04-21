import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

const isLib = process.env.BUILD_MODE === 'lib';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': resolve(__dirname, 'src/components'),
      '@styles':     resolve(__dirname, 'src/styles'),
      '@showcase':   resolve(__dirname, 'src/showcase'),
      '@':           resolve(__dirname, 'src'),
    },
  },
  build: isLib
    ? {
        lib: {
          entry: resolve(__dirname, 'src/index.js'),
          name: 'KomelentsUI',
          formats: ['es', 'cjs'],
          fileName: (format) => `komelents-ui.${format}.js`,
        },
        rollupOptions: {
          external: ['react', 'react-dom'],
          output: {
            globals: { react: 'React', 'react-dom': 'ReactDOM' },
          },
        },
      }
    : {},
});
