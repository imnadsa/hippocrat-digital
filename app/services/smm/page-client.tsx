"use client"

import SmmHero from "@/components/services/smm-hero"
import SmmStrategy from "@/components/services/smm-strategy"
import SmmPlatforms from "@/components/services/smm-platforms"
import SmmResults from "@/components/services/smm-results"
import SmmPrice from "@/components/services/smm-price"
import BlogSection from '@/components/blog-section'
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function SmmPageClient() {
  return (
    <>
      <SmmHero />
      <SmmStrategy />
      <SmmPlatforms />
      <SmmResults />
      <SmmPrice />
      <BlogSection />
      <CtaSection />
      <Footer />
    </>
  )
}
