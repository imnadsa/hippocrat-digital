import { Metadata } from "next"
import Header from "@/components/header"
import AiPageClient from "./page-client"

// ✅ SEO METADATA
export const metadata: Metadata = {
  title: "AI решения для медицинских клиник | ИИ чат-боты для записи | Hippocrat Digital",
  description: "Автоматизированные AI чат-боты для медицинских клиник. Система записи пациентов на приём. Кейс: Hippocrat AI - 2000+ пользователей. Интеграция под конкретную клинику.",
  keywords: "AI для клиник, чат-боты для медицины, автоматизация медицинской клиники, ИИ система записи, Hippocrat AI, искусственный интеллект в медицине",
  authors: [{ name: "Hippocrat Digital" }],
  
  openGraph: {
    title: "AI решения для медицинских клиник | Автоматизированные чат-боты",
    description: "Создание AI чат-ботов для автоматизированной записи пациентов. Успешный кейс Hippocrat AI с 2000+ пользователей. Под конкретную клинику.",
    type: "website",
    url: "https://hippocrat-digital.ru/services/ai-solutions",
    images: [
      {
        url: "/og-ai-solutions.jpg",
        width: 1200,
        height: 630,
        alt: "AI решения для медицинских клиник",
      }
    ],
    locale: "ru_RU",
  },

  alternates: {
    canonical: "/services/ai-solutions",
  },
}

// ✅ JSON-LD SCHEMA
const aiSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'AI решения для медицинских клиник',
  description: 'Разработка автоматизированных AI чат-ботов для медицинских клиник. Система автоматической записи пациентов на приём. Полная интеграция под конкретные требования клиники. Доказанный успех: Hippocrat AI - 2000+ активных пользователей.',
  provider: {
    '@type': 'Organization',
    name: 'Hippocrat Digital',
    url: 'https://hippocrat-digital.ru',
    logo: 'https://hippocrat-digital.ru/logo.png',
    telephone: '+7-977-100-44-19',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Москва',
      addressCountry: 'RU'
    }
  },
  areaServed: {
    '@type': 'Country',
    name: 'Russia'
  },
  priceRange: 'Цена по запросу'
}

// ✅ BREADCRUMB SCHEMA
const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Главная',
      item: 'https://hippocrat-digital.ru'
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Услуги',
      item: 'https://hippocrat-digital.ru/services'
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'AI решения',
      item: 'https://hippocrat-digital.ru/services/ai-solutions'
    }
  ]
}

export default function AiSolutionsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aiSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className="flex-grow">
        <AiPageClient />
      </main>
    </>
  )
}
