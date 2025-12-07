"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp, Users, DollarSign } from "lucide-react"
import { useEffect, useState } from "react"

export default function TargetingPortfolio() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const cases = [
    {
      title: "Стоматология «Полный Порядок»",
      category: "Стоматология",
      description: "Запуск рекламы имплантации и эстетической стоматологии через таргетинг",
      results: [
        { label: "Рост лидов", value: "+150%", icon: TrendingUp, color: "teal" },
        { label: "Новых пациентов", value: "+43%", icon: Users, color: "teal" },
        { label: "Снижение CPA", value: "-35%", icon: DollarSign, color: "teal" }
      ],
      details: "Настроили таргетинг на взрослую аудиторию 35-55 лет в радиусе 15 км. Использовали поведенческие сегменты «интерес к стоматологии» и lookalike на базе существующих пациентов.",
      duration: "3 месяца",
      link: "https://hippocrat-digital.ru/cases/polniy-poryadok/?from=cases"
    },
    {
      title: "Офтальмологический центр",
      category: "Офтальмология",
      description: "Привлечение пациентов на коррекцию зрения и лечение катаракты",
      results: [
        { label: "Конверсия", value: "12.5%", icon: TrendingUp, color: "indigo" },
        { label: "Средний чек", value: "+25%", icon: DollarSign, color: "indigo" },
        { label: "Стоимость лида", value: "450₽", icon: Users, color: "indigo" }
      ],
      details: "Запустили отдельные кампании для молодёжи (коррекция зрения) и пожилых (катаракта). Добавили геотаргетинг с учётом транспортной доступности.",
      duration: "4 месяца",
      link: "https://hippocrat-digital.ru/cases/yasny-vzor/?from=cases"
    }
  ]

  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="targeting-portfolio" className="bg-slate-900 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Улучшенные декоративные элементы */}
      <div className="absolute top-20 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 sm:w-60 sm:h-60 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-indigo-400/5 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Улучшенный заголовок */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-teal-900/20 border border-teal-700/20 text-teal-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
            Кейсы
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-fixedsys leading-tight">
            Кейсы по{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              таргетированной рекламе
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Реальные результаты наших клиентов из разных сфер медицины
          </p>
        </div>

        {/* Кейсы */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16 max-w-5xl mx-auto">
          {cases.map((caseItem, index) => (
            <div 
              key={index}
              className={`relative group transition-all duration-700 ${isVisible ? 'animate-slideInStagger opacity-100' : 'opacity-0 translate-y-8'}`}
              style={{ animationDelay: `${index * 150 + 200}ms` }}
            >
              <div className="relative bg-slate-800/40 backdrop-blur-sm border border-slate-700/60 rounded-2xl overflow-hidden h-full hover:border-teal-500/30 hover:shadow-2xl hover:shadow-teal-900/10 transition-all duration-500 hover-lift transform-gpu will-change-transform">
                <div className="p-6 sm:p-8 h-full flex flex-col">
                  {/* Хедер кейса */}
                  <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <span className="px-3 py-1 rounded-full bg-slate-800/80 text-slate-300 text-xs font-medium backdrop-blur-sm border border-slate-700/50">
                      {caseItem.category}
                    </span>
                    <span className="text-slate-500 text-xs font-medium">
                      {caseItem.duration}
                    </span>
                  </div>
                  
                  {/* Название и описание */}
                  <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 font-fixedsys text-white leading-snug group-hover:text-teal-400 transition-colors duration-300">
                    {caseItem.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed flex-grow">
                    {caseItem.description}
                  </p>
                  
                  {/* Результаты */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-4 sm:mb-6">
                    {caseItem.results.map((result, resultIndex) => {
                      const IconComponent = result.icon
                      const colors = result.color === 'teal' 
                        ? {
                            iconBg: 'bg-teal-900/50',
                            iconColor: 'text-teal-400',
                            valueColor: 'text-teal-400'
                          }
                        : {
                            iconBg: 'bg-indigo-900/50',
                            iconColor: 'text-indigo-400',
                            valueColor: 'text-indigo-400'
                          }
                      
                      return (
                        <div key={resultIndex} className="text-center group-hover:scale-105 transition-transform duration-300">
                          <div className={`w-6 h-6 sm:w-8 sm:h-8 rounded-lg ${colors.iconBg} flex items-center justify-center mx-auto mb-1 sm:mb-2 backdrop-blur-sm`}>
                            <IconComponent size={14} className={`${colors.iconColor} sm:w-4 sm:h-4`} />
                          </div>
                          <div className={`text-sm sm:text-lg font-bold font-fixedsys ${colors.valueColor}`}>
                            {result.value}
                          </div>
                          <div className="text-xs text-slate-500 leading-tight">
                            {result.label}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                  
                  {/* Детали */}
                  <p className="text-slate-400 text-xs sm:text-sm mb-4 sm:mb-6 leading-relaxed bg-slate-900/30 rounded-xl p-3 sm:p-4 backdrop-blur-sm border border-slate-800/50">
                    {caseItem.details}
                  </p>
                  
                  {/* Кнопка */}
                  <Button
                    variant="outline"
                    className="w-full border-slate-700 text-slate-300 hover:bg-slate-800/50 hover:border-teal-500/50 group-hover:border-teal-500/50 transition-all duration-300 backdrop-blur-sm"
                    onClick={() => openExternalLink(caseItem.link)}
                  >
                    <span>Подробнее о кейсе</span>
                    <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </Button>
                  
                  {/* Декоративные элементы */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r from-teal-400/20 to-indigo-400/20 opacity-60"></div>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA секция */}
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fadeIn opacity-100' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/60 p-6 sm:p-8 lg:p-10 text-center shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-indigo-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold font-fixedsys text-white mb-4 sm:mb-6">
                Хотите такие же результаты?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
                Получите бесплатный аудит текущих рекламных кампаний и план по их оптимизации
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-base sm:text-lg font-fixedsys shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 group"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Получить бесплатный аудит
                <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
