"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import TargetingHero from "@/components/services/targeting-hero"
import TargetingAdvantages from "@/components/services/targeting-advantages"
import TargetingProcess from "@/components/services/targeting-process"
import TargetingFeatures from "@/components/services/targeting-features"
import TargetingPortfolio from "@/components/services/targeting-portfolio"
import TargetingPricing from "@/components/services/targeting-pricing"
import TargetingFaq from "@/components/services/targeting-faq"
import BlogSection from '@/components/blog-section'
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function TargetingPage() {
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
        <TargetingHero />
        <TargetingAdvantages />
        <TargetingProcess />
        <TargetingFeatures />
        <TargetingPortfolio />
        <TargetingPricing />
        <TargetingFaq />
        <BlogSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
