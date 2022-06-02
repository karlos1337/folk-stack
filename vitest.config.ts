/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./setup-test-env.ts'],
    include: ['./app/**/*.test.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    watchIgnore: ['.*\\/node_modules\\/.*', '.*\\/build\\/.*'],
  },
});
