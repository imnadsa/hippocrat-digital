import { Metadata } from "next"
import Header from "@/components/header"
import SmmPageClient from "./page-client"

// ✅ SEO METADATA
export const metadata: Metadata = {
  title: "SMM для медицинских клиник | Управление соцсетями | Hippocrat Digital",
  description: "Профессиональное управление соцсетями медицинских клиник (VK, Instagram, Telegram, TikTok, YouTube). Контент-план, регулярность, глубокая экспертиза. От 40 000 ₽/месяц.",
  keywords: "SMM для клиник, управление соцсетями медицины, социальные сети клиника, контент для медицинского центра, маркетинг в Instagram для врачей, VK для клиники",
  authors: [{ name: "Hippocrat Digital" }],
  
  openGraph: {
    title: "SMM для медицинских клиник | Управление соцсетями",
    description: "Профессиональное управление Instagram, VK, Telegram, TikTok, YouTube для медицинских клиник. От 40 000 ₽/месяц.",
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
  description: 'Профессиональное управление аккаунтами в социальных сетях (VK, Instagram, Telegram, TikTok, YouTube) для медицинских клиник с глубокой экспертизой в медицинском законодательстве',
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
  priceRange: 'от 40000 ₽ в месяц'
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

      <Header />
      <main>
        <SmmPageClient />
      </main>
    </>
  )
}
