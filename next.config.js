/** @type {import('next').NextConfig} */
const nextConfig = {
  // КРИТИЧНО: Экспорт статических файлов для виртуального хостинга
  output: 'export',
  
  // Включаем режим строгого соответствия
  reactStrictMode: true,
  
  // ОБЯЗАТЕЛЬНО: Отключаем оптимизацию изображений для статического хостинга
  images: {
    unoptimized: true,
  },

  // Добавляет слэш в конце URL (для совместимости с хостингом)
  trailingSlash: true,

  // Оптимизация для продакшена
  swcMinify: true,

  // Компрессия
  compress: true,

  // Оптимизация импортов и исправление useSearchParams
  experimental: {
    optimizePackageImports: ['lucide-react', 'phosphor-react'],
    missingSuspenseWithCSRBailout: false, // ✅ Отключает ошибку с useSearchParams при static export
  },
}

module.exports = nextConfig
