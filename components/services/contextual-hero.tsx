"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Target, TrendUp, Clock } from "phosphor-react"
import { useEffect, useState } from "react"

export default function ContextualHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0b101b]">
      {/* Background Elements */}
      <div className="absolute top-20 right-20 w-40 h-40 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className={`inline-block px-4 py-2 rounded-full bg-teal-900/20 border border-teal-700/20 text-teal-400 text-sm font-medium mb-6 backdrop-blur-sm shadow-lg transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            Контекстная реклама
          </div>

          {/* Main Heading */}
          <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-bold font-fixedsys mb-6 leading-tight transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            Контекстная реклама{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              для медицинских клиник
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-xl sm:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '200ms' }}>
            Привлекаем пациентов в момент поиска медицинских услуг. Настраиваем рекламу по ключевым запросам с учетом ФЗ-38
          </p>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`} style={{ transitionDelay: '400ms' }}>
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 group px-8 py-4"
            >
              Запустить рекламу
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("contextual-advantages")?.scrollIntoView({ behavior: "smooth" })}
              className="border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:border-teal-500/50 backdrop-blur-sm text-lg px-8 py-4"
            >
              Узнать подробнее
            </Button>
          </div>
      </div>
    </section>
  )
}
