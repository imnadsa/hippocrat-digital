"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import AiHero from "@/components/services/ai-hero"
import AiSolutions from "@/components/services/ai-solutions"
import AiIntegration from "@/components/services/ai-integration"
import AiBenefits from "@/components/services/ai-benefits"
import AiCases from "@/components/services/ai-cases"
import AiPackages from "@/components/services/ai-packages"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function AiSolutionsPage() {
  const [scrolled, setScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    if (typeof window !== 'undefined') {
      setScrolled(window.scrollY > 20)
    }
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  if (!isMounted) {
    return <div className="min-h-screen bg-[#0b101b]"></div>
  }

  return (
    <div className="min-h-screen bg-[#0b101b] text-white">
      <Header scrolled={scrolled} />
      
      <main>
        <AiHero />
        <AiSolutions />
        <AiIntegration />
        <AiBenefits />
        <AiCases />
        <AiPackages />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
