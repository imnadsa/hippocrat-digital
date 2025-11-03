import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ServicesSection from "@/components/services-section"
import AdvantagesSection from "@/components/advantages-section"
import PortfolioSection from "@/components/portfolio-section"
import TestimonialsSection from "@/components/testimonials-section"
import TeamSection from "@/components/team-section"
import BlogSection from "@/components/blog-section"
import FounderCard from '@/components/founder-card'
import CtaSection from "@/components/cta-section"
import Footer from "@/components/footer"

// JSON-LD для главной страницы
const homePageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: 'Digital-маркетинг для медицинских клиник | Hippocrat Digital',
  description: 'Продвижение медицинских клиник в интернете | Увеличение потока пациентов от специалистов из вашей области',
  url: 'https://hippocrat-digital.ru',
  mainEntity: {
    '@type': 'Organization',
    name: 'Hippocrat Digital',
    offers: [
      {
        '@type': 'Service',
        name: 'Таргетированная реклама для медицинских клиник',
        description: 'Настройка и ведение таргетированной рекламы в социальных сетях для привлечения пациентов',
        provider: {
          '@type': 'Organization',
          name: 'Hippocrat Digital'
        }
      },
      {
        '@type': 'Service',
        name: 'SEO продвижение медицинских сайтов',
        description: 'Поисковое продвижение сайтов медицинских клиник и частных практик',
        provider: {
          '@type': 'Organization',
          name: 'Hippocrat Digital'
        }
      },
      {
        '@type': 'Service',
        name: 'Разработка сайтов для клиник',
        description: 'Создание современных сайтов для медицинских учреждений с фокусом на конверсию',
        provider: {
          '@type': 'Organization',
          name: 'Hippocrat Digital'
        }
      }
    ]
  }
}

export default function Home() {
  return (
    <>
      {/* JSON-LD для главной страницы */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homePageJsonLd) }}
      />
      
      <div className="min-h-screen bg-[#0b101b] text-white">
        <Header />
        
        <main>
          {/* Основной контент с правильной HTML5 семантикой */}
          <HeroSection />
          
          <section id="about">
            <AboutSection />
          </section>
          
          <section id="services">
            <ServicesSection />
          </section>
          
          <section id="advantages">
            <AdvantagesSection />
          </section>

          <section id="founder">
             <FounderCard />
          </section> 
          
          <section id="portfolio">
            <PortfolioSection />
          </section>
          
          <section id="testimonials">
            <TestimonialsSection />
          </section>
          
          <section id="team">
            <TeamSection />
          </section>
          
          <section id="blog">
            <BlogSection />
          </section>
          
          <section id="contact">
            <CtaSection />
          </section>
        </main>

        <Footer />
      </div>
    </>
  )
}
