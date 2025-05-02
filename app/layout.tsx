import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

// Настройка шрифта Inter с различными вариантами начертания
const inter = Inter({
  subsets: ["latin", "cyrillic"], // Добавляем cyrillic для поддержки русского языка
  weight: ["400", "500", "600", "700"], // Добавляем различные начертания, включая Regular (400)
  variable: "--font-inter", // Переменная для использования в Tailwind
  display: "swap", // Улучшение производительности загрузки шрифта
})

export const metadata: Metadata = {
  title: "Hippocrat Digital | Цифровые решения для медицины",
  description: "Медицинское digital-агентство, специализирующееся на продвижении клиник и медицинских услуг",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        {/* Добавляем шрифт Fixedsys для заголовков, как в Hippocrat AI */}
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/fixedsys-excelsior" />
        
        {/* Добавляем метатеги для убеждения браузера использовать правильные шрифты */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Удален тег style jsx global, который вызывал ошибку */}
      </head>
      <body className={`${inter.variable} font-sans bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  )
}
