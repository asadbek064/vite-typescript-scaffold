/// <reference types="vitest/config" />

import { defineConfig, loadEnv } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig(({ mode }) => {
  const _env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [dts({ outDir: './dist/', rollupTypes: true })],
    build: {
      target: 'esnext',
      outDir: './dist/',
      emptyOutDir: true,
      minify: true,
      sourcemap: true,
      lib: {
        name: 'project_name',
        entry: ['./src/index.ts'],
        formats: ['umd', 'es'],
        fileName: (format, entryName) => {
          switch (format) {
            case 'es':
              return 'project_name.min.mjs';
            default:
              return 'project_name.min.js';
          }
        },
      },
    },
    test: {
      environment: 'node',
      reporters: ['verbose'],
      watch: false,
      include: ['tests/**/*.{test,spec}.{js,ts}'],
      exclude: ['**/node_modules/**', '**/dist/**', '**/tests/benchmarks/**'],
    },
  };
});
