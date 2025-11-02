import { Metadata } from "next"
import Header from "@/components/header"
import ContextualHero from "@/components/services/contextual-hero"
import ContextualAdvantages from "@/components/services/contextual-advantages"
import ContextualProcess from "@/components/services/contextual-process"
import ContextualFeatures from "@/components/services/contextual-features"
import ContextualPricing from "@/components/services/contextual-pricing"
import ContextualFaq from "@/components/services/contextual-faq"
import BlogSection from '@/components/blog-section'
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

// ✅ SEO METADATA
export const metadata: Metadata = {
  title: "Контекстная реклама Яндекс для медицинских клиник | Hippocrat Digital",
  description: "Профессиональная настройка контекстной рекламы в Яндекс.Директ для медицинских клиник. Точный таргетинг целевой аудитории. Результаты гарантированы. От 45 000 ₽/месяц.",
  keywords: "контекстная реклама для клиник, Яндекс.Директ медицина, реклама Яндекс клиника, контекстная реклама врачи, Яндекс реклама медицинского центра",
  authors: [{ name: "Hippocrat Digital" }],
  
  openGraph: {
    title: "Контекстная реклама Яндекс для медицинских клиник",
    description: "Настройка контекстной рекламы в Яндекс.Директ. Привлечение целевых пациентов. От 45 000 ₽/месяц.",
    type: "website",
    url: "https://hippocrat-digital.ru/services/contextual",
    images: [
      {
        url: "/og-contextual.jpg",
        width: 1200,
        height: 630,
        alt: "Контекстная реклама для медицинских клиник",
      }
    ],
    locale: "ru_RU",
  },

  alternates: {
    canonical: "/services/contextual",
  },
}

// ✅ JSON-LD SCHEMA
const contextualSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Контекстная реклама в Яндекс.Директ для медицинских клиник',
  description: 'Профессиональная настройка и управление контекстной рекламой в Яндекс.Директ для медицинских клиник. Точный таргетинг целевой аудитории, контроль качества кликов, оптимизация под конверсии.',
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
  priceRange: 'от 45000 ₽ в месяц',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'RUB',
    price: '45000',
    priceValidUntil: '2025-12-31'
  }
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
      name: 'Контекстная реклама',
      item: 'https://hippocrat-digital.ru/services/contextual'
    }
  ]
}

export default function ContextualPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contextualSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#0b101b] text-white">
        <Header />
        
        <main>
          <ContextualHero />
          <ContextualAdvantages />
          <ContextualProcess />
          <ContextualFeatures />
          <ContextualPricing />
          <ContextualFaq />
          <BlogSection />
          <CtaSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
