import { Metadata } from "next"
import Header from "@/components/header"
import SmmHero from "@/components/services/smm-hero"
import SmmStrategy from "@/components/services/smm-strategy"
import SmmPlatforms from "@/components/services/smm-platforms"
import SmmResults from "@/components/services/smm-results"
import SmmPrice from "@/components/services/smm-price"
import BlogSection from '@/components/blog-section'
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

// ✅ SEO METADATA
export const metadata: Metadata = {
  title: "SMM для медицинских клиник | Управление соцсетями | Hippocrat Digital",
  description: "Профессиональное управление соцсетями медицинских клиник (VK, Instagram, Telegram, TikTok, YouTube). Контент-план, регулярность, глубокая экспертиза. От 40 000 ₽/месяц.",
  keywords: "SMM для клиник, управление соцсетями медицины, социальные сети клиника, контент для медицинского центра, маркетинг в Instagram для врачей, VK для клиники",
  authors: [{ name: "Hippocrat Digital" }],
  
  openGraph: {
    title: "SMM для медицинских клиник | Управление соцсетями",
    description: "Профессиональное управление VK, Telegram, Instagram, TikTok, YouTube для медицинских клиник. От 40 000 ₽/месяц.",
    type: "website",
    url: "https://hippocrat-digital.ru/services/smm",
    images: [
      {
        url: "/og-smm.jpg",
        width: 1200,
        height: 630,
        alt: "SMM для медицинских клиник",
      }
    ],
    locale: "ru_RU",
  },

  alternates: {
    canonical: "/services/smm",
  },
}

// ✅ JSON-LD SCHEMA
const smmSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'SMM для медицинских клиник',
  description: 'Профессиональное управление аккаунтами в социальных сетях (VK, Telegram, TikTok, Instagram, YouTube) для медицинских клиник с глубокой экспертизой в медицинском законодательстве',
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
  priceRange: 'от 40000 ₽ в месяц',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'RUB',
    price: '40000',
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
      name: 'SMM для клиник',
      item: 'https://hippocrat-digital.ru/services/smm'
    }
  ]
}

export default function SmmPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(smmSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <div className="min-h-screen bg-[#0b101b] text-white">
        <Header />
        
        <main>
          <SmmHero />
          <SmmStrategy />
          <SmmPlatforms />
          <SmmResults />
          <SmmPrice />
          <BlogSection />
          <CtaSection />
        </main>

        <Footer />
      </div>
    </>
  )
}
