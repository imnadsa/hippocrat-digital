"use client"

import { TrendingUp, DollarSign, Users, Calendar, BarChart3 } from "lucide-react"
import { useEffect, useState } from "react"

export default function TargetingResults() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const results = [
    {
      metric: "40%",
      description: "Снижение стоимости лида",
      details: "В среднем за первые 3 месяца",
      color: "teal"
    },
    {
      metric: "2.5x",
      description: "Рост конверсии в запись",
      details: "С лендинга в CRM клиники",
      color: "indigo"
    },
    {
      metric: "300%",
      description: "Увеличение ROI",
      details: "Возврат инвестиций за полгода",
      color: "teal"
    },
    {
      metric: "95%",
      description: "Клиентов продлевают",
      details: "Контракт после испытательного периода",
      color: "indigo"
    }
  ]

  const additionalStats = [
    {
      icon: Calendar,
      value: "14 дней",
      label: "Средний срок до первых результатов",
      color: "teal"
    },
    {
      icon: BarChart3,
      value: "89%",
      label: "Точность попадания в ЦА",
      color: "indigo"
    },
    {
      icon: Users,
      value: "12%",
      label: "Средний CTR рекламы",
      color: "teal"
    },
    {
      icon: DollarSign,
      value: "450₽",
      label: "Средняя стоимость лида",
      color: "indigo"
    }
  ]

  return (
    <section id="targeting-results" className="bg-slate-900 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Улучшенные декоративные элементы */}
      <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-60 sm:h-60 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Улучшенный заголовок */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-teal-900/20 border border-teal-700/20 text-teal-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
            Результаты
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-fixedsys leading-tight">
            Результаты{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              наших клиентов
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Средние показатели медицинских клиник, работающих с нами более 6 месяцев
          </p>
        </div>

        {/* Основные результаты */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {results.map((result, index) => {
            const colors = result.color === 'teal' 
              ? {
                  metricColor: 'text-teal-400',
                  borderColor: 'border-teal-500/30',
                  shadowColor: 'shadow-teal-500/10'
                }
              : {
                  metricColor: 'text-indigo-400',
                  borderColor: 'border-indigo-500/30',
                  shadowColor: 'shadow-indigo-500/10'
                }
            
            return (
              <div 
                key={index}
                className={`relative group transition-all duration-700 ${isVisible ? 'animate-slideInStagger opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 100 + 200}ms` }}
              >
                <div className={`
                  relative bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/60 
                  p-4 sm:p-6 text-center h-full transition-all duration-500 ease-out
                  hover:${colors.borderColor} hover:${colors.shadowColor} hover:shadow-2xl
                  hover-lift transform-gpu will-change-transform
                `}>
                  <div className={`text-2xl sm:text-3xl md:text-4xl font-bold font-fixedsys ${colors.metricColor} mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    {result.metric}
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-2 font-fixedsys leading-snug">
                    {result.description}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                    {result.details}
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

        {/* Детальная информация */}
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fadeIn opacity-100' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/60 p-6 sm:p-8 lg:p-10 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Левая часть - пример роста */}
              <div>
                <h3 className="text-xl sm:text-2xl font-bold font-fixedsys text-white mb-4 sm:mb-6">
                  Реальный пример роста
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-800/50 transition-all duration-300 hover:border-slate-700">
                    <span className="text-slate-300 text-sm sm:text-base">До таргетинга:</span>
                    <span className="font-bold text-white text-sm sm:text-base">15 записей/месяц</span>
                  </div>
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-slate-900/50 rounded-xl backdrop-blur-sm border border-slate-800/50 transition-all duration-300 hover:border-teal-500/30">
                    <span className="text-slate-300 text-sm sm:text-base">После 3 месяцев:</span>
                    <span className="font-bold text-teal-400 text-sm sm:text-base">45 записей/месяц</span>
                  </div>
                  <div className="flex items-center justify-between p-3 sm:p-4 bg-gradient-to-r from-teal-900/30 to-indigo-900/30 rounded-xl border border-teal-500/30 backdrop-blur-sm shadow-lg">
                    <span className="text-slate-300 text-sm sm:text-base font-medium">Рост:</span>
                    <span className="font-bold text-teal-400 text-lg sm:text-xl">+200%</span>
                  </div>
                </div>
              </div>

              {/* Правая часть - дополнительная статистика */}
              <div className="grid grid-cols-2 gap-4 sm:gap-6">
                {additionalStats.map((stat, index) => {
                  const IconComponent = stat.icon
                  const colors = stat.color === 'teal' 
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
                    <div key={index} className="bg-slate-900/50 rounded-xl p-3 sm:p-4 text-center backdrop-blur-sm border border-slate-800/50 hover:border-slate-700 transition-all duration-300 group">
                      <IconComponent size={20} className={`mx-auto ${colors.iconColor} mb-2 sm:mb-3 group-hover:scale-110 transition-transform duration-300`} />
                      <div className={`text-lg sm:text-xl font-bold font-fixedsys ${colors.valueColor} mb-1 group-hover:scale-105 transition-transform duration-300`}>
                        {stat.value}
                      </div>
                      <div className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {stat.label}
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
