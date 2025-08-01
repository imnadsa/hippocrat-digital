"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import SmmHero from "@/components/services/smm-hero"
import SmmStrategy from "@/components/services/smm-strategy"
import SmmPlatforms from "@/components/services/smm-platforms"
import SmmResults from "@/components/services/smm-results"
import SmmPrice from "@/components/services/smm-price"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function SmmPage() {
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
        <SmmHero />
        <SmmStrategy />
        <SmmPlatforms />
        <SmmResults />
        <SmmPrice />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
