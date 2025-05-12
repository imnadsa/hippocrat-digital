"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import WebsitesHero from "@/components/services/websites-hero"
import WebsitesApproach from "@/components/services/websites-approach"
import WebsitesTechnologies from "@/components/services/websites-technologies"
import WebsitesFeatures from "@/components/services/websites-features"
import WebsitesProcess from "@/components/services/websites-process"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function WebsitesPage() {
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
        <WebsitesHero />
        <WebsitesApproach />
        <WebsitesTechnologies />
        <WebsitesFeatures />
        <WebsitesProcess />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
