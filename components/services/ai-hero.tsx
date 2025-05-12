"use client"

import { Button } from "@/components/ui/button"
import { Brain, Cpu, Zap, MessageSquare } from "lucide-react"
import { useState, useEffect } from "react"

export default function AiHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentStat, setCurrentStat] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Анимация переключения статистики
    const interval = setInterval(() => {
      setCurrentStat((prev) => (prev + 1) % 4)
    }, 3000)
    
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const stats = [
    {
      icon: Brain,
      value: "85%",
      label: "Снижение времени диагностики",
      color: "teal"
    },
    {
      icon: MessageSquare,
      value: "24/7",
      label: "Доступность чат-ботов",
      color: "indigo"
    },
    {
      icon: Zap,
      value: "60%",
      label: "Автоматизация процессов",
      color: "teal"
    },
    {
      icon: Cpu,
      value: "300%",
      label: "ROI в первый год",
      color: "indigo"
    }
  ]

  return (
    <section className="container mx-auto px-4 pt-32 pb-16 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-3s' }}></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`lg:w-1/2 space-y-6 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm animate-fadeIn">
              ИИ-решения для медицины
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-fixedsys">
              <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
                Искусственный интеллект в медицине будущего
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 animate-fadeInUp delay-100">
              Внедряем передовые ИИ-технологии для автоматизации клинических процессов, 
              улучшения диагностики и повышения качества обслуживания пациентов
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys animate-fadeInUp delay-200 active:animate-buttonClick hover-lift"
                onClick={() => scrollToSection("contact")}
              >
                Внедрить ИИ
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50 animate-fadeInUp delay-300 hover-lift"
                onClick={() => scrollToSection("ai-solutions")}
              >
                Узнать больше
              </Button>
            </div>
          </div>
          
          <div className={`lg:w-1/2 ${isVisible ? 'animate-fadeInRight delay-500' : 'opacity-0'}`}>
            {/* Анимированная схема ИИ */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
              
              {/* Центральная иконка мозга */}
              <div className="relative bg-slate-900/50 rounded-full p-8 border border-slate-800 mx-auto w-64 h-64 flex items-center justify-center">
                <Brain size={120} className="text-teal-400 animate-pulse" />
                
                {/* Орбитальные элементы */}
                <div className="absolute inset-0">
                  {[0, 1, 2, 3].map((index) => (
                    <div
                      key={index}
                      className="absolute w-full h-full"
                      style={{
                        transform: `rotate(${index * 90}deg)`,
                        animation: `rotate 30s linear infinite ${index * -7.5}s`
                      }}
                    >
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${
                          index % 2 === 0 ? 'from-teal-500 to-teal-600' : 'from-indigo-500 to-indigo-600'
                        } flex items-center justify-center animate-pulse`}>
                          {React.createElement(stats[index].icon, { size: 16, className: "text-white" })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Статистические карточки */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon
                  const isActive = currentStat === index
                  
                  return (
                    <div 
                      key={index}
                      className={`bg-slate-900/50 rounded-xl border p-4 transition-all duration-500 hover-lift ${
                        isActive ? `border-${stat.color}-500/30 shadow-lg shadow-${stat.color}-900/20` : 'border-slate-800'
                      }`}
                    >
                      <div className={`w-10 h-10 rounded-full bg-${stat.color}-900/50 flex items-center justify-center text-${stat.color}-400 mb-3 ${
                        isActive ? 'animate-iconBounce' : ''
                      }`}>
                        <IconComponent size={20} />
                      </div>
                      <div className={`text-xl font-bold font-fixedsys mb-1 ${
                        isActive ? `text-${stat.color}-400` : 'text-white'
                      }`}>
                        {stat.value}
                      </div>
                      <div className="text-slate-400 text-sm">{stat.label}</div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </section>
  )
}
