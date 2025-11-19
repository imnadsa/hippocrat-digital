import { Metadata } from "next"
import Header from "@/components/header"
import BlogPageClient from "./page-client"

// ✅ SEO METADATA
export const metadata: Metadata = {
  title: "Блог | Экспертные статьи о медицинском маркетинге | Hippocrat Digital",
  description: "Блог Hippocrat Digital: статьи про SEO для клиник, таргетированную рекламу, SMM, digital-маркетинг в медицине. Экспертные знания и кейсы от специалистов.",
  keywords: "блог медицинский маркетинг, SEO для клиник, маркетинг медицины, digital маркетинг, статьи про рекламу",
  authors: [{ name: "Hippocrat Digital" }],
  
  openGraph: {
    title: "Блог | Экспертные статьи о медицинском маркетинге",
    description: "Статьи про SEO, таргетированную рекламу, SMM и digital-маркетинг в медицине от экспертов Hippocrat Digital.",
    type: "website",
    url: "https://hippocrat-digital.ru/blog",
    images: [
      {
        url: "/og-blog.jpg",
        width: 1200,
        height: 630,
        alt: "Блог Hippocrat Digital",
      }
    ],
    locale: "ru_RU",
  },

  alternates: {
    canonical: "/blog",
  },
}

// ✅ JSON-LD SCHEMA - CollectionPage для блога
const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Блог Hippocrat Digital',
  description: 'Экспертные статьи о медицинском маркетинге, SEO для клиник, цифровых решениях для медицины',
  url: 'https://hippocrat-digital.ru/blog',
  publisher: {
    '@type': 'Organization',
    name: 'Hippocrat Digital',
    url: 'https://hippocrat-digital.ru',
    logo: 'https://hippocrat-digital.ru/logo.png'
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
      name: 'Блог',
      item: 'https://hippocrat-digital.ru/blog'
    }
  ]
}

// ✅ УБРАЛИ searchParams - теперь это чистый серверный компонент
export default function BlogPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Header />
      <main>
        <BlogPageClient />
      </main>
    </>
  )
}
