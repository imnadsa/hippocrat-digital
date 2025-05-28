import React from 'react';
import { Metadata } from 'next';
import HeroSection from '@/components/about/hero-section';
import StorySection from '@/components/about/story-section';
import WhyUsSection from '@/components/about/why-us-section';
import TeamSection from '@/components/about/team-section';
import ProductsSection from '@/components/about/products-section';
import ValuesSection from '@/components/about/values-section';
import CTASection from '@/components/about/cta-section';

export const metadata: Metadata = {
  title: 'О нас | Hippocrat Digital - Цифровые решения для медицины',
  description: 'Команда экспертов с медицинским образованием и 5+ лет опыта в digital. Знаем медицину изнутри, делаем маркетинг снаружи.',
  keywords: 'о компании, команда hippocrat digital, медицинский маркетинг, цифровые решения для медицины',
  openGraph: {
    title: 'О нас | Hippocrat Digital',
    description: 'Команда экспертов с медицинским образованием и 5+ лет опыта в digital',
    images: ['/about/hero-image.jpg'],
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-950">
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
    </div>
  );
}
