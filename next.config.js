/** @type {import('next').NextConfig} */
const nextConfig = {
  // Включаем режим строгого соответствия
  reactStrictMode: true,
  
  // РЕШЕНИЕ ПРОБЛЕМЫ С ИЗОБРАЖЕНИЯМИ НА IIS
  images: {
    unoptimized: true, // Отключает Next.js Image API
    domains: [
      'fonts.cdnfonts.com',
      'images.unsplash.com', // Для изображений статей
      'via.placeholder.com', // Для заглушек
      'picsum.photos', // Для тестовых изображений
    ],
    // Современные форматы изображений для лучшего сжатия
    formats: ['image/webp', 'image/avif'],
    // Кеширование изображений на год
    minimumCacheTTL: 60 * 60 * 24 * 365,
    // Оптимизированные размеры устройств
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    // Поддержка SVG с безопасностью
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // SEO и производительность
  experimental: {
    scrollRestoration: true, // Восстановление позиции скролла
    optimizePackageImports: ['lucide-react'], // Оптимизация импортов
  },

  // Компрессия
  compress: true,

  // Оптимизация для продакшена
  swcMinify: true,

  // Генерация статических файлов для лучшего SEO
  output: 'standalone',

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

  // Заголовки для безопасности, SEO и производительности
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          // DNS prefetch для улучшения загрузки
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          // Безопасность
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
          // Кеширование статических ресурсов
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable'
          }
        ],
      },
      // Специальные заголовки для изображений
      {
        source: '/blog/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
