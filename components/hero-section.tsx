"use client"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import MarketingAnimation from "@/components/marketing-animation"
import { useState } from "react"

export default function HeroSection() {
  // Функция для скролла к секции
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  // Функция для открытия внешних ссылок
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }
  
  return (
    <section className="container mx-auto px-4 pt-32 pb-16 md:py-32 flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 space-y-6 mb-10 md:mb-0">
        <div className="flex items-center gap-2 mb-4">
          <div className="px-3 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-xs flex items-center gap-1">
            <Sparkles size={12} />
            <span>Digital-агенство в медицине</span>
          </div>
        </div>
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-fixedsys">
          <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
            Цифровые решения для медицины будущего
          </span>
        </h1>
        <p className="text-base md:text-xl text-slate-300">
          Hippocrat Digital — медицинское digital-агентство, специализирующееся на продвижении клиник и медицинских услуг
        </p>
        <div className="flex flex-col sm:flex-row gap-4 pt-2">
          <Button
            size="lg"
            className="w-full sm:w-auto bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys"
            onClick={() => scrollToSection("contact")}
          >
            Обсудить проект
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="w-full sm:w-auto border-teal-700 text-teal-400 hover:bg-teal-950/50"
            onClick={() => scrollToSection("services")}
          >
            Узнать больше
          </Button>
        </div>
        
        {/* Блок преимуществ удален */}
        
      </div>
      <div className="w-full md:w-1/2 h-[250px] md:h-[400px] relative">
        <MarketingAnimation />
      </div>
    </section>
  )
}
