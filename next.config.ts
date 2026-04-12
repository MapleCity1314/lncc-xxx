import { fileURLToPath } from 'node:url'
import type { NextConfig } from 'next'

const basePath = process.env.NEXT_PUBLIC_BASE_PATH

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

if (basePath) {
  nextConfig.basePath = basePath
}

export default nextConfig
