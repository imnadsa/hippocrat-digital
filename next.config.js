/** @type {import('next').NextConfig} */
const nextConfig = {
  // Включаем режим строгого соответствия
  reactStrictMode: true,
  
  // Оптимизация для импорта иконок
  modularizeImports: {
    'lucide-react': {
      transform: 'lucide-react/dist/esm/icons/{{kebabCase member}}',
    },
  },
  
  // Настройки для изображений
  images: {
    domains: [
      'fonts.cdnfonts.com',
      'images.unsplash.com', // Для изображений статей
      'via.placeholder.com', // Для заглушек
      'picsum.photos', // Для тестовых изображений
    ],
    // Форматы изображений
    formats: ['image/webp', 'image/avif'],
    // Размеры для оптимизации
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // SEO оптимизации
  experimental: {
    optimizeCss: true, // Оптимизация CSS
    scrollRestoration: true, // Восстановление позиции скролла
  },

  // Компрессия
  compress: true,

  // Оптимизация для продакшена
  swcMinify: true,

  // Генерация статических файлов для лучшего SEO
  output: 'standalone',

  // Настройки для i18n (если планируете многоязычность)
  // i18n: {
  //   locales: ['ru', 'en'],
  //   defaultLocale: 'ru',
  // },

  // Перенаправления для SEO
  async redirects() {
    return [
      // Перенаправление с www на без www (или наоборот)
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },

  // Заголовки для безопасности и SEO
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
