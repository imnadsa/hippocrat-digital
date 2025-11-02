import { Metadata } from "next"
import Header from "@/components/header"
import WebsitesHero from "@/components/services/websites-hero"
import WebsitesApproach from "@/components/services/websites-approach"
import WebsitesTechnologies from "@/components/services/websites-technologies"
import WebsitesFeatures from "@/components/services/websites-features"
import WebsitesProcess from "@/components/services/websites-process"
import WebsitesPrice from "@/components/services/websites-price"
import BlogSection from '@/components/blog-section'
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

// ✅ SEO METADATA
export const metadata: Metadata = {
  title: "Разработка сайтов для медицинских клиник | Hippocrat Digital",
  description: "Создание профессиональных сайтов для клиник на Next.js, TypeScript, Tailwind CSS. SEO оптимизация, высокий органический трафик, CMS, 24/7 поддержка. От 60 000 ₽. Разработка от 21 дня.",
  keywords: "разработка сайта для клиники, сайт для медицинского центра, создание медицинского сайта, веб-дизайн клиники, SEO для медицины, сайт для стоматологии, сайт для клиники",
  authors: [{ name: "Hippocrat Digital" }],
  
  openGraph: {
    title: "Разработка сайтов для медицинских клиник",
    description: "Создание сайтов на Next.js с SEO оптимизацией. От 60 000 ₽. Разработка от 21 дня. 24/7 поддержка.",
    type: "website",
    url: "https://hippocrat-digital.ru/services/websites",
    images: [
      {
        url: "/og-websites.jpg",
        width: 1200,
        height: 630,
        alt: "Разработка сайтов для медицинских клиник",
      }
    ],
    locale: "ru_RU",
  },

  alternates: {
    canonical: "/services/websites",
  },
}

// ✅ JSON-LD SCHEMA
const websitesSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Разработка сайтов для медицинских клиник',
  description: 'Профессиональная разработка высокопроизводительных сайтов для медицинских клиник с использованием современных технологий (Next.js, TypeScript, Tailwind CSS). SEO оптимизация, GEO оптимизация, интеграция CMS, 24/7 поддержка.',
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
  priceRange: 'от 60000 ₽',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'RUB',
    price: '60000',
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
      name: 'Разработка сайтов',
      item: 'https://hippocrat-digital.ru/services/websites'
    }
  ]
}

export default function WebsitesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websitesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#0b101b] text-white flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <WebsitesHero />
          <WebsitesApproach />
          <WebsitesTechnologies />
          <WebsitesFeatures />
          <WebsitesProcess />
          <WebsitesPrice />
          <BlogSection />
          <CtaSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
