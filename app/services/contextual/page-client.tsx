"use client"

import ContextualHero from "@/components/services/contextual-hero"
import ContextualAdvantages from "@/components/services/contextual-advantages"
import ContextualProcess from "@/components/services/contextual-process"
import ContextualFeatures from "@/components/services/contextual-features"
import ContextualPricing from "@/components/services/contextual-pricing"
import ContextualFaq from "@/components/services/contextual-faq"
import BlogSection from '@/components/blog-section'
import RelatedBlogPosts from '@/components/blog/related-blog-posts'  // ← НОВЫЙ ИМПОРТ
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function ContextualPageClient() {
  return (
    <>
      <ContextualHero />
      <ContextualAdvantages />
      <ContextualProcess />
      <ContextualFeatures />
      <ContextualPricing />
      <ContextualFaq />
      <BlogSection />
      <CtaSection />
      
      {/* ← НОВОЕ: Внутренняя перелинковка */}
      <RelatedBlogPosts 
        tags={["реклама", "таргетинг", "маркетинг"]}
        category="Реклама"
        limit={3}
        title="Статьи о контекстной рекламе и таргетинге"
      />
      
      <Footer />
    </>
  )
}
