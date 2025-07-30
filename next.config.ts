import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    turbo: {
      rules: {
        // Глобальный паттерн к вашим SVG
        './src/shared/ui/icons/**/*.svg': {
          // Интерпретировать файл как TSX, чтобы SVGR вернул JSX
          as: '*.tsx',
          // Подключить SVGR‑лоадер
          loaders: [require.resolve('@svgr/webpack')],
        },
      },
    },
  },
}

module.exports = nextConfig
