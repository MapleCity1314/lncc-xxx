import { fileURLToPath } from 'node:url'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  trailingSlash: true,
  turbopack: {
    root: fileURLToPath(new URL('.', import.meta.url)),
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
