"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import ContextualHero from "@/components/services/contextual-hero"
import ContextualAdvantages from "@/components/services/contextual-advantages"
import ContextualProcess from "@/components/services/contextual-process"
import ContextualFeatures from "@/components/services/contextual-features"
import ContextualPricing from "@/components/services/contextual-pricing"
import ContextualFaq from "@/components/services/contextual-faq"
import BlogSection from '@/components/blog-section'
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function ContextualPage() {
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
      <Header />
      
      <main>
        <ContextualHero />
        <ContextualAdvantages />
        <ContextualProcess />
        <ContextualFeatures />
        <ContextualPricing />
        <ContextualFaq />
        <BlogSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
