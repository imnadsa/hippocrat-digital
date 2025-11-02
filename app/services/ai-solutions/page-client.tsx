"use client"

import AiHero from "@/components/services/ai-hero"
import AiSolutions from "@/components/services/ai-solutions"
import AiIntegration from "@/components/services/ai-integration"
import AiCases from "@/components/services/ai-cases"
import BlogSection from '@/components/blog-section'
import AiPackages from "@/components/services/ai-packages"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function AiPageClient() {
  return (
    <>
      <AiHero />
      <AiSolutions />
      <AiIntegration />
      <AiCases />
      <AiPackages />
      <BlogSection />
      <CtaSection />
      <Footer />
    </>
  )
}
