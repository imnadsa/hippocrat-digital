"use client";

import React, { useState, useEffect } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import HeroSection from '@/components/about/hero-section';
import StorySection from '@/components/about/story-section';
import WhyUsSection from '@/components/about/why-us-section';
import TeamSection from '@/components/about/team-section';
import ProductsSection from '@/components/about/products-section';
import ValuesSection from '@/components/about/values-section';
import CTASection from '@/components/about/cta-section';

export default function AboutPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Header */}
      <Header scrolled={scrolled} />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Story Section */}
      <StorySection />
      
      {/* Why Us Section */}
      <WhyUsSection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Products Section */}
      <ProductsSection />
      
      {/* Values Section */}
      <ValuesSection />
      
      {/* CTA Section */}
      <CTASection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
