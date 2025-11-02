import { Metadata } from "next"
import Header from "@/components/header"
import TargetingHero from "@/components/services/targeting-hero"
import TargetingAdvantages from "@/components/services/targeting-advantages"
import TargetingProcess from "@/components/services/targeting-process"
import TargetingFeatures from "@/components/services/targeting-features"
import TargetingPortfolio from "@/components/services/targeting-portfolio"
import TargetingPricing from "@/components/services/targeting-pricing"
import TargetingFaq from "@/components/services/targeting-faq"
import BlogSection from '@/components/blog-section'
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

// ✅ SEO METADATA
export const metadata: Metadata = {
  title: "Таргетированная реклама для медицинских клиник | Hippocrat Digital",
  description: "Настройка таргетированной рекламы в VK, Telegram для привлечения пациентов. Увеличение записей в клинику. Бесплатная консультация.",
  keywords: "таргетированная реклама медицина, реклама для клиник, таргет для стоматологии, Telegram реклама медицина, VK реклама клиника",
  authors: [{ name: "Hippocrat Digital" }],
  
  openGraph: {
    title: "Таргетированная реклама для медицинских клиник",
    description: "Настройка таргетированной рекламы в VK, Telegram для привлечения пациентов. Увеличение записей в медицинскую клинику.",
    type: "website",
    url: "https://hippocrat-digital.ru/services/targeting",
    images: [
      {
        url: "/og-targeting.jpg",
        width: 1200,
        height: 630,
        alt: "Таргетированная реклама для клиник",
      }
    ],
    locale: "ru_RU",
  },

  alternates: {
    canonical: "/services/targeting",
  },
}

// ✅ JSON-LD SCHEMA
const targetingSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Таргетированная реклама для медицинских клиник',
  description: 'Профессиональная настройка и ведение таргетированной рекламы в социальных сетях для привлечения пациентов в медицинские клиники',
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
  priceRange: 'от 25000 ₽ в месяц'
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
      name: 'Таргетированная реклама',
      item: 'https://hippocrat-digital.ru/services/targeting'
    }
  ]
}

export default function TargetingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(targetingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#0b101b] text-white">
        <Header />
        
        <main>
          <TargetingHero />
          <TargetingAdvantages />
          <TargetingProcess />
          <TargetingFeatures />
          <TargetingPortfolio />
          <TargetingPricing />
          <TargetingFaq />
          <BlogSection />
          <CtaSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
