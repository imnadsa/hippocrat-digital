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
  title: "Digital-маркетинг для медицинских клиник | Hippocrat Digital",
  description: "Продвижение медицинских клиник в интернете ✓ Таргетированная реклама ✓ SEO для медицины ✓ Увеличение потока пациентов. Кейсы с результатами -67% стоимость лида.",
  keywords: "продвижение медицинских клиник, реклама для стоматологии, digital-маркетинг в медицине, таргетированная реклама медицинских услуг, SEO для клиники, медицинский маркетинг",
  authors: [{ name: "Hippocrat Digital" }],
  creator: "Hippocrat Digital",
  publisher: "Hippocrat Digital",
  metadataBase: new URL('https://hippocrat-digital.ru'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Digital-маркетинг для медицинских клиник | Hippocrat Digital',
    description: 'Продвижение медицинских клиник в интернете ✓ Таргетированная реклама ✓ SEO для медицины ✓ Увеличение потока пациентов. Кейсы с результатами -67% стоимость лида.',
    url: 'https://hippocrat-digital.ru',
    siteName: 'Hippocrat Digital',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hippocrat Digital - Digital-маркетинг для медицинских клиник',
      }
    ],
    locale: 'ru_RU',
    type: 'website',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // google: 'ваш-google-verification-код',
    // yandex: 'ваш-yandex-verification-код',
  },
}

// JSON-LD структурированные данные
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Hippocrat Digital',
  description: 'Медицинское digital-агентство, специализирующееся на продвижении клиник и медицинских услуг',
  url: 'https://hippocrat-digital.ru',
  logo: 'https://hippocrat-digital.ru/logo.png',
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+7-977-100-44-19', // Замените на реальный номер
    contactType: 'customer service',
    availableLanguage: 'Russian'
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Москва', // Замените на ваш город
    addressCountry: 'RU'
  },
  sameAs: [
    'https://t.me/HippocratDigital',
    'https://t.me/imnadsa',
  ],
  founder: {
    '@type': 'Person',
    name: 'Александр Антошкин'
  },
  areaServed: {
    '@type': 'Country',
    name: 'Russia'
  },
  serviceType: [
    'Digital-маркетинг для медицины',
    'Таргетированная реклама медицинских клиник',
    'SEO для медицинских услуг',
    'Разработка сайтов для клиник',
    'ИИ решения для клиник'
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className="scroll-smooth">
      <head>
        {/* Preconnect для улучшения производительности */}
        <link rel="preconnect" href="https://fonts.cdnfonts.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Загрузка шрифтов - простой вариант без ошибок */}
        <link rel="stylesheet" href="https://fonts.cdnfonts.com/css/fixedsys-excelsior" />
        
        {/* Preload критических изображений для команды */}
        <link rel="preload" href="/blog/images/alexa.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/blog/images/alexk.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/blog/images/alexp.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/blog/images/dmitriy.jpg" as="image" type="image/jpeg" />
        
        {/* JSON-LD структурированные данные */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Дополнительные метатеги для производительности */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0b101b" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>
      <body className={`${inter.variable} font-sans bg-slate-950 text-white`}>
        {children}
      </body>
    </html>
  )
}
