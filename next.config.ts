import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // experimental: {
  //   turbo: {
  //     rules: {
  //       './src/shared/ui/icons/**/*.svg': {
  //         as: '*.tsx',
  //         loaders: [require.resolve('@svgr/webpack')],
  //       },
  //     },
  //   },
  // },

  webpack(config) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const fileLoaderRule = config.module.rules.find((rule: any) =>
      rule.test?.test?.('.svg'),
    )
    if (fileLoaderRule) {
      fileLoaderRule.exclude = /\.svg$/
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

module.exports = nextConfig
