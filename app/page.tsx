"use client"

import { useState, useEffect } from "react"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import AdvantagesSection from "@/components/advantages-section"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import TeamSection from "@/components/team-section"
import BlogSection from "@/components/blog-section"
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function Home() {
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Header scrolled={scrolled} />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <AdvantagesSection />
        <PortfolioSection />
        <TestimonialsSection />
        <TeamSection />
        <BlogSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  )
}
