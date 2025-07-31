"use client"
import { Button } from "@/components/ui/button"
import { Sparkle } from "phosphor-react"
import MarketingAnimation from "@/components/marketing-animation"

export default function HeroSection() {
  // Функция для скролла к секции
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <section className="container mx-auto px-4 pt-24 pb-12 md:pt-28 md:pb-20 flex flex-col md:flex-row items-center bg-[#0b101b] relative overflow-hidden">
      {/* Декоративные floating элементы */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground delay-500"></div>
      <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow"></div>
      
      <div className="md:w-1/2 space-y-6 mb-10 md:mb-0 relative z-10">
        <div className="flex items-center gap-2 mb-4 animate-fadeInLeft">
          <div className="px-3 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-xs flex items-center gap-1 hover-glow hover:border-teal-500/50 transition-all duration-300">
            <Sparkle size={12} className="animate-iconRotate" weight="duotone" />
            <span>Приводим пациентов клиникам более 4 лет</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-fixedsys animate-fadeInUp">
          <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent animate-gradient text-shadow-lg">
            Цифровые решения для медицинских клиник
          </span>
        </h1>
        <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-fadeInUp delay-400">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys hover-lift hover-glow transition-all duration-300 animate-buttonClick"
            onClick={() => scrollToSection("contact")}
          >
            Обсудить проект
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-teal-700 text-teal-400 hover:bg-teal-950/50 hover:border-teal-500 hover-lift transition-all duration-300"
            onClick={() => scrollToSection("services")}
          >
            Получить КП
          </Button>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center items-center relative z-0">
        <MarketingAnimation />
      </div>
    </section>
  )
}
