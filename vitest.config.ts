import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
  plugins: [
    {
      name: 'mdx-test-stub',
      enforce: 'pre',
      load(id) {
        if (id.endsWith('.mdx') || id.endsWith('.md')) {
          return 'export default function MdxStub() { return null }'
        }

        return null
      },
    },
    tsconfigPaths(),
    react(),
  ],
  test: {
    environment: 'jsdom',
    setupFiles: ['./vitest.setup.ts'],
    include: ['app/**/*.test.{ts,tsx}', 'components/**/*.test.{ts,tsx}', 'mock/**/*.test.{js,mjs,ts,tsx}'],
    exclude: ['.worktrees/**', 'node_modules/**', '.next/**', 'out/**'],
  },
})
