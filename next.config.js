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
  }
}

module.exports = nextConfig
