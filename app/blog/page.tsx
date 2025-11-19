import { Metadata } from "next"
import { Suspense } from "react"
import Header from "@/components/header"
import BlogPageClient from "./page-client"

export const metadata: Metadata = {
  title: "Блог | Экспертные статьи о медицинском маркетинге | Hippocrat Digital",
  description: "Блог Hippocrat Digital: статьи про SEO для клиник, таргетированную рекламу, SMM, digital-маркетинг в медицине.",
  keywords: "блог медицинский маркетинг, SEO для клиник, маркетинг медицины",
  
  openGraph: {
    title: "Блог | Экспертные статьи о медицинском маркетинге",
    description: "Статьи про SEO, таргетированную рекламу, SMM и digital-маркетинг в медицине.",
    type: "website",
    url: "https://hippocrat-digital.ru/blog",
  },
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Блог Hippocrat Digital',
  description: 'Экспертные статьи о медицинском маркетинге',
  url: 'https://hippocrat-digital.ru/blog',
}

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
        <Suspense fallback={<div className="min-h-screen bg-slate-950 flex items-center justify-center"><div className="text-white">Загрузка...</div></div>}>
          <BlogPageClient />
        </Suspense>
      </main>
    </>
  )
}
