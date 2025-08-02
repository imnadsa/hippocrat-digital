"use client"

import { Target, Lightning, ChartBar, Shield, Clock, Coins } from "phosphor-react"
import { useEffect, useState } from "react"

export default function ContextualAdvantages() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const advantages = [
    {
      icon: Target,
      title: "Высокая релевантность",
      description: "Показываем рекламу только тем, кто ищет ваши услуги прямо сейчас",
      details: "Точное попадание в потребность пациента в момент поиска медицинской помощи",
      color: "teal"
    },
    {
      icon: Lightning,
      title: "Быстрый запуск",
      description: "Настраиваем и запускаем кампании за 24 часа",
      details: "Моментальный старт привлечения пациентов без долгого ожидания",
      color: "indigo"
    },
    {
      icon: ChartBar,
      title: "Прозрачная аналитика",
      description: "Видите каждый рубль и каждого пациента в подробных отчетах",
      details: "Полная картина эффективности с детализацией по запросам и регионам",
      color: "teal"
    },
    {
      icon: Shield,
      title: "Соблюдение ФЗ-38",
      description: "Все объявления соответствуют требованиям закона о медицинской рекламе",
      details: "Исключаем блокировки и штрафы благодаря экспертизе в медицинском маркетинге",
      color: "indigo"
    },
    {
      icon: Clock,
      title: "Контроль времени",
      description: "Показываем рекламу в часы работы клиники и пиковые периоды обращений",
      details: "Оптимизируем расписание показов под график работы и поведение пациентов",
      color: "teal"
    },
    {
      icon: Coins,
      title: "Контроль бюджета",
      description: "Полное управление расходами с прогнозируемой стоимостью лида",
      details: "Устанавливаем лимиты и корректировки для максимальной эффективности",
      color: "indigo"
    }
  ]

  return (
    <section id="contextual-advantages" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-60 sm:h-60 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-900/20 border border-indigo-700/20 text-indigo-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
            Преимущества
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-fixedsys leading-tight">
            Почему контекстная реклама{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              эффективна для клиник
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Привлекаем пациентов в момент принятия решения о записи на прием
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            const colors = advantage.color === 'teal' 
              ? { 
                  iconColor: 'text-teal-400', 
                  borderColor: 'border-teal-500/30',
                  shadowColor: 'shadow-teal-500/10'
                }
              : { 
                  iconColor: 'text-indigo-400',
                  borderColor: 'border-indigo-500/30',
                  shadowColor: 'shadow-indigo-500/10'
                }
            
            return (
              <div 
                key={index}
                className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`
                  relative bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800/60 
                  p-6 sm:p-8 h-full transition-all duration-500 ease-out
                  hover:${colors.borderColor} hover:${colors.shadowColor} hover:shadow-2xl
                  hover-lift transform-gpu will-change-transform
                `}>
                  <IconComponent size={32} className={`${colors.iconColor} mb-6 group-hover:scale-110 transition-transform duration-300`} />
                  
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 font-fixedsys text-white leading-snug">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base mb-4 leading-relaxed">
                    {advantage.description}
                  </p>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {advantage.details}
                  </p>

                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r from-teal-400/20 to-indigo-400/20 opacity-60"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
