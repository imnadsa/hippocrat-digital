import { notFound } from 'next/navigation'
import { getCaseBySlug, allCases } from '@/lib/cases' // ← используй allCases
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

// ✅ Используй allCases напрямую
export function generateStaticParams() {
  return allCases.map((caseItem) => ({
    slug: caseItem.id, // или caseItem.slug
  }))
}

// Остальной код без изменений...
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

  if (!caseData) {
    notFound()
  }

  return (
    <div className="relative">
      <ScrollToPortfolio />
      <div className="min-h-screen bg-[#0b101b]">
        <Header />
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        <AdvantagesSection />
        <CtaSection />
      </div>
      <CasePageClient caseData={caseData} />
    </div>
  )
}
