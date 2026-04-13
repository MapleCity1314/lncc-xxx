import { fileURLToPath } from 'node:url'
import type { NextConfig } from 'next'
import createMDX from '@next/mdx'

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
  pageExtensions: ['mdx', 'md', 'tsx', 'ts', 'jsx', 'js'],
}

if (basePath) {
  nextConfig.basePath = basePath
}

const withMDX = createMDX({
  extension: /\.mdx?$/,
})

export default withMDX(nextConfig)
