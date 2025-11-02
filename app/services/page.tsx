import { Metadata } from "next"
import Header from "@/components/header"
import ServicesPageClient from "./page-client"

// ✅ SEO METADATA
export const metadata: Metadata = {
  title: "Услуги digital-маркетинга для медицинских клиник | Hippocrat Digital",
  description: "Полный спектр услуг для продвижения медицинских клиник: таргетированная реклама, SMM, разработка сайтов, AI решения, контекстная реклама. Увеличиваем поток пациентов клиникам.",
  keywords: "услуги для клиник, медицинский маркетинг, digital маркетинг медицина, продвижение клиники, реклама для врачей",
  authors: [{ name: "Hippocrat Digital" }],
  
  openGraph: {
    title: "Услуги digital-маркетинга для медицинских клиник",
    description: "Таргетированная реклама, SMM, разработка сайтов, контекстная реклама, AI решения для медицинских клиник.",
    type: "website",
    url: "https://hippocrat-digital.ru/services",
    images: [
      {
        url: "/og-services.jpg",
        width: 1200,
        height: 630,
        alt: "Услуги для медицинских клиник",
      }
    ],
    locale: "ru_RU",
  },

  alternates: {
    canonical: "/services",
  },
}

// ✅ JSON-LD SCHEMA - CollectionPage (много услуг)
const servicesSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Услуги digital-маркетинга для медицинских клиник',
  description: 'Полный спектр услуг для продвижения медицинских клиник: таргетированная реклама, SMM, разработка сайтов, AI решения, контекстная реклама',
  url: 'https://hippocrat-digital.ru/services',
  mainEntity: {
    '@type': 'Organization',
    name: 'Hippocrat Digital',
    url: 'https://hippocrat-digital.ru',
    logo: 'https://hippocrat-digital.ru/logo.png',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+7-977-100-44-19',
      contactType: 'customer service'
    }
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
    }
  ]
}

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main className="flex-grow">
        <ServicesPageClient />
      </main>
    </>
  )
}
