import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['components/**/*.test.{ts,tsx}', 'mock/**/*.test.{js,mjs,ts,tsx}'],
    exclude: ['.worktrees/**', 'node_modules/**', '.next/**', 'out/**'],
  },
})
