import path from 'node:path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  sassOptions: {
    includePaths: [path.join(import.meta.dirname, 'src/styles')],
    additionalData: `@use 'theme/_palette' as *;`
  }
}

export default nextConfig
