"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"

export default function SmmHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="container mx-auto px-4 pt-32 pb-16 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-3s' }}></div>
      
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className={`md:w-3/5 space-y-6 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm animate-fadeIn">
              SMM для медицинских клиник
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold leading-tight font-fixedsys">
              <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
                Превращаем соцсети в источник пациентов
              </span>
            </h1>
            
            <div className="bg-slate-900/50 rounded-2xl border border-slate-700/30 p-6 sm:p-8 backdrop-blur-sm animate-fadeInUp delay-100">
              <p className="text-lg md:text-2xl text-slate-200 leading-relaxed mb-6">
                Комплексное ведение соцсетей с соблюдением <span className="font-bold text-indigo-400">медицинской этики</span>. Создаём доверие, привлекаем пациентов и повышаем лояльность к клинике
              </p>
              
              <div className="p-4 bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/20">
                <p className="text-base sm:text-lg text-slate-300">
                  <span className="font-bold text-white">Результат:</span> увеличение потока пациентов на <span className="font-bold text-teal-400">35%</span> через социальные сети за <span className="font-bold text-indigo-400">первые 3 месяца</span>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys animate-fadeInUp delay-200 active:animate-buttonClick hover-lift px-8 py-4"
                onClick={() => scrollToSection("contact")}
              >
                Обсудить SMM-стратегию
              </Button>
            </div>
          </div>
          
          <div className={`md:w-2/5 ${isVisible ? 'animate-fadeInRight delay-200' : 'opacity-0'}`}>
            {/* Анимированная сетка с цифрами */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 transition-all hover-lift hover-glow animate-scaleUp delay-300 text-center">
                  <div className="text-3xl md:text-4xl font-bold font-fixedsys text-teal-400 mb-2">12.5K</div>
                  <p className="text-slate-400 text-sm font-medium">Средний рост подписчиков</p>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 transition-all hover-lift hover-glow animate-scaleUp delay-500 text-center">
                  <div className="text-3xl md:text-4xl font-bold font-fixedsys text-indigo-400 mb-2">8.3%</div>
                  <p className="text-slate-400 text-sm font-medium">Engagement Rate</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 pt-8">
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 transition-all hover-lift hover-glow animate-scaleUp delay-700 text-center">
                  <div className="text-3xl md:text-4xl font-bold font-fixedsys text-teal-400 mb-2">+35%</div>
                  <p className="text-slate-400 text-sm font-medium">Увеличение записей</p>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 transition-all hover-lift hover-glow animate-scaleUp delay-900 text-center">
                  <div className="text-3xl md:text-4xl font-bold font-fixedsys text-indigo-400 mb-2">87%</div>
                  <p className="text-slate-400 text-sm font-medium">Рост узнаваемости</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
