"use client"

import { useState, useEffect } from "react"
import ServicesHero from "@/components/services/services-hero"
import ServicesOverview from "@/components/services/services-overview"
import ServicesBenefits from "@/components/services/services-benefits"
import ServicesProcess from "@/components/services/services-process"
import BlogSection from '@/components/blog-section'
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function ServicesPageClient() {
  const [scrolled, setScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    if (typeof window !== 'undefined') {
      setScrolled(window.scrollY > 20)
    }
    
    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setScrolled(window.scrollY > 20)
      }
    }
    
    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  if (!isMounted) {
    return <div className="min-h-screen bg-[#0b101b]"></div>
  }

  return (
    <>
      <ServicesHero />
      <ServicesOverview />
      <ServicesBenefits />
      <ServicesProcess />
      <BlogSection />
      <CtaSection />
      <Footer />
    </>
  )
}
