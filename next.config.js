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
  
  // Добавляем поддержку шрифтов
  images: {
    domains: ['fonts.cdnfonts.com'],
  }
  
  // Удалена устаревшая экспериментальная опция appDir, которая теперь включена по умолчанию
}

module.exports = nextConfig
