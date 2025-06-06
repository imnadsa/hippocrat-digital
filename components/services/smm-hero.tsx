"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, Instagram, Camera, TrendingUp } from "lucide-react"
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
          <div className={`md:w-1/2 space-y-6 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm animate-fadeIn">
              SMM для медицинских клиник
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-fixedsys">
              <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
                Превращаем соцсети в источник пациентов
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 animate-fadeInUp delay-100">
              Комплексное ведение соцсетей с соблюдением медицинской этики. Создаём доверие, привлекаем пациентов и повышаем лояльность к клинике
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys animate-fadeInUp delay-200 active:animate-buttonClick hover-lift"
                onClick={() => scrollToSection("contact")}
              >
                Обсудить SMM-стратегию
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50 animate-fadeInUp delay-300 hover-lift"
                onClick={() => scrollToSection("smm-portfolio")}
              >
                Примеры работ
              </Button>
            </div>
          </div>
          
          <div className={`md:w-1/2 ${isVisible ? 'animate-fadeInRight delay-200' : 'opacity-0'}`}>
            {/* Анимированная сетка с иконками соцсетей */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-4">
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 transition-all hover-lift hover-glow animate-scaleUp delay-300">
                  <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-4 group-hover:animate-iconBounce">
                    <Instagram size={24} />
                  </div>
                  <div className="text-2xl font-bold font-fixedsys text-white mb-2">12.5K</div>
                  <p className="text-slate-400 text-sm">Средний рост подписчиков</p>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 transition-all hover-lift hover-glow animate-scaleUp delay-500">
                  <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-4 group-hover:animate-iconBounce">
                    <Camera size={24} />
                  </div>
                  <div className="text-2xl font-bold font-fixedsys text-white mb-2">8.3%</div>
                  <p className="text-slate-400 text-sm">Engagement Rate</p>
                </div>
              </div>
              
              <div className="flex flex-col gap-4 pt-8">
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 transition-all hover-lift hover-glow animate-scaleUp delay-700">
                  <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-4 group-hover:animate-iconBounce">
                    <MessageSquare size={24} />
                  </div>
                  <div className="text-2xl font-bold font-fixedsys text-white mb-2">+35%</div>
                  <p className="text-slate-400 text-sm">Увеличение записей</p>
                </div>
                
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 transition-all hover-lift hover-glow animate-scaleUp delay-900">
                  <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-4 group-hover:animate-iconBounce">
                    <TrendingUp size={24} />
                  </div>
                  <div className="text-2xl font-bold font-fixedsys text-white mb-2">87%</div>
                  <p className="text-slate-400 text-sm">Рост узнаваемости</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
