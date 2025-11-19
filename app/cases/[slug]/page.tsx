import { notFound } from 'next/navigation'
import { getCaseBySlug, getAllCases } from '@/lib/cases' // добавьте getAllCases
import { Metadata } from 'next'
import CasePageClient from './case-page-client'
import ScrollToPortfolio from '@/components/scroll-to-portfolio'

// Импортируем компоненты главной страницы
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import PortfolioSection from '@/components/portfolio-section'
import AdvantagesSection from '@/components/advantages-section'
import CtaSection from '@/components/cta-section'

interface CasePageProps {
  params: {
    slug: string
  }
}

// ✅ ДОБАВЬТЕ ЭТУ ФУНКЦИЮ:
export function generateStaticParams() {
  try {
    const cases = getAllCases() // получаем все кейсы
    return cases.map((caseItem) => ({
      slug: caseItem.id, // или caseItem.slug, в зависимости от структуры
    }))
  } catch (error) {
    console.error('Error generating case params:', error)
    return [] // если кейсов нет или ошибка - возвращаем пустой массив
  }
}

// Генерация метаданных для SEO
export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const caseData = getCaseBySlug(params.slug)
  
  if (!caseData) {
    return {
      title: 'Кейс не найден | Hippocrat Digital',
      description: 'Запрашиваемый кейс не найден'
    }
  }

  return {
    title: caseData.seo.title,
    description: caseData.seo.description,
    keywords: caseData.seo.keywords.join(', '),
    openGraph: {
      title: caseData.title,
      description: caseData.shortDescription,
      images: [caseData.images[0]],
      type: 'article'
    },
    twitter: {
      card: 'summary_large_image',
      title: caseData.title,
      description: caseData.shortDescription,
      images: [caseData.images[0]]
    }
  }
}

export default function CasePage({ params }: CasePageProps) {
  const caseData = getCaseBySlug(params.slug)

  // Если кейс не найден
  if (!caseData) {
    notFound()
  }

  return (
    <div className="relative">
      {/* Компонент для автоматической прокрутки к портфолио */}
      <ScrollToPortfolio />

      {/* Фон - полная главная страница */}
      <div className="min-h-screen bg-[#0b101b]">
        <Header />
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <AdvantagesSection />
        <CtaSection />
      </div>

      {/* Попап поверх главной страницы */}
      <CasePageClient caseData={caseData} />
    </div>
  )
}
