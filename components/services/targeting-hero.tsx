"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function TargetingHero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const stats = [
    {
      value: "98%",
      label: "Попадание в целевую аудиторию",
      color: "teal",
      delay: 400
    },
    {
      value: "-40%",
      label: "Снижение стоимости лида",
      color: "indigo",
      delay: 500
    },
    {
      value: "+200%",
      label: "Увеличение потока пациентов",
      color: "teal",
      delay: 600
    },
    {
      value: "2.5x",
      label: "Рост конверсии в запись",
      color: "indigo",
      delay: 700
    }
  ]

  return (
    <section className="container mx-auto px-4 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 relative overflow-hidden">
      {/* Улучшенные декоративные элементы */}
      <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-60 sm:h-60 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-indigo-400/5 rounded-full blur-2xl animate-pulse-slow"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Левая часть - контент */}
          <div className="w-full lg:w-3/5 space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className={`transition-all duration-700 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`}>
              <div className="inline-block px-4 py-2 rounded-full bg-teal-900/20 border border-teal-700/20 text-teal-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
                Таргетированная реклама
              </div>
            </div>
            
            <div className={`transition-all duration-700 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '200ms' }}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-fixedsys">
                <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
                  Привлекаем пациентов с помощью точного таргетинга
                </span>
              </h1>
            </div>
            
            <div className={`transition-all duration-700 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '400ms' }}>
              <div className="bg-slate-900/50 rounded-2xl border border-slate-700/30 p-6 sm:p-8 backdrop-blur-sm">
                <p className="text-lg sm:text-xl md:text-2xl text-slate-200 leading-relaxed">
                  Увеличиваем поток записей в клинику до <span className="font-bold text-teal-400">+200%</span> с соблюдением всех требований <span className="font-bold text-indigo-400">законодательства о рекламе медицинских услуг</span>
                </p>
                
                <div className="mt-6 p-4 bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/20">
                  <p className="text-base sm:text-lg text-slate-300">
                    <span className="font-bold text-white">Гарантируем:</span> снижение стоимости привлечения пациента на <span className="font-bold text-teal-400">40%</span> уже в первый месяц работы
                  </p>
                </div>
              </div>
            </div>
            
            <div className={`flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6 justify-center lg:justify-start transition-all duration-700 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '600ms' }}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-base sm:text-lg font-fixedsys shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 group px-8 py-4"
                onClick={() => scrollToSection("contact")}
              >
                Получить расчет
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50 backdrop-blur-sm text-base sm:text-lg transition-all duration-300 hover:border-teal-500 px-8 py-4"
                onClick={() => scrollToSection("targeting-portfolio")}
              >
                Смотреть кейсы
              </Button>
            </div>
          </div>
          
          {/* Правая часть - статистики */}
          <div className="w-full lg:w-2/5">
            <div className="grid grid-cols-2 gap-4 sm:gap-6 max-w-lg mx-auto">
              {stats.map((stat, index) => {
                const colors = stat.color === 'teal' 
                  ? {
                      valueColor: 'text-teal-400',
                      bgColor: 'bg-teal-900/20',
                      borderColor: 'border-teal-500/30',
                      shadowColor: 'shadow-teal-500/10'
                    }
                  : {
                      valueColor: 'text-indigo-400',
                      bgColor: 'bg-indigo-900/20',
                      borderColor: 'border-indigo-500/30',
                      shadowColor: 'shadow-indigo-500/10'
                    }
                
                return (
                  <div 
                    key={index}
                    className={`relative group transition-all duration-700 ${isVisible ? 'animate-slideInStagger opacity-100' : 'opacity-0 translate-y-8'}`}
                    style={{ animationDelay: `${stat.delay}ms` }}
                  >
                    <div className={`
                      relative bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800/60 
                      p-6 sm:p-8 h-full transition-all duration-500 ease-out text-center
                      hover:${colors.borderColor} hover:${colors.shadowColor} hover:shadow-2xl
                      hover-lift transform-gpu will-change-transform
                    `}>
                      {/* Значение */}
                      <div className={`text-3xl sm:text-4xl font-bold font-fixedsys ${colors.valueColor} mb-3 sm:mb-4 group-hover:scale-105 transition-transform duration-300`}>
                        {stat.value}
                      </div>
                      
                      {/* Описание */}
                      <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-medium">
                        {stat.label}
                      </p>

                      {/* Декоративные элементы */}
                      <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-teal-400/20 to-indigo-400/20 opacity-60"></div>
                      <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-gradient-to-r from-indigo-400/30 to-teal-400/30"></div>
                      
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
