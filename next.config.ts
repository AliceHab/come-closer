import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        './src/shared/ui/icons/**/*.svg': {
          as: '*.tsx',
          loaders: [require.resolve('@svgr/webpack')],
        },
      },
    },
  },
}

module.exports = nextConfig
