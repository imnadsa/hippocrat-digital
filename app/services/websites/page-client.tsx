"use client"

import WebsitesHero from "@/components/services/websites-hero"
import WebsitesApproach from "@/components/services/websites-approach"
import WebsitesTechnologies from "@/components/services/websites-technologies"
import WebsitesFeatures from "@/components/services/websites-features"
import WebsitesProcess from "@/components/services/websites-process"
import WebsitesPrice from "@/components/services/websites-price"
import BlogSection from '@/components/blog-section'
import RelatedBlogPosts from '@/components/blog/related-blog-posts'  // ← НОВЫЙ ИМПОРТ
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

export default function WebsitesPageClient() {
  return (
    <>
      <WebsitesHero />
      <WebsitesApproach />
      <WebsitesTechnologies />
      <WebsitesFeatures />
      <WebsitesProcess />
      <WebsitesPrice />
      <BlogSection />
      <CtaSection />
      <RelatedBlogPosts 
        tags={["seo", "разработка", "маркетинг"]}
        category="Сайты"
        limit={3}
        title="Статьи о разработке сайтов и SEO"
      />
      
      <Footer />
    </>
  )
}
