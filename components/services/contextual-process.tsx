"use client"

import { MagnifyingGlass, Strategy, PencilSimple, ChartLineUp } from "phosphor-react"
import { useEffect, useState } from "react"

export default function ContextualProcess() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const steps = [
    {
      icon: MagnifyingGlass,
      number: "01",
      title: "Анализ и исследование",
      description: "Изучаем ключевые запросы, анализируем конкурентов и определяем стратегию",
      details: [
        "Семантическое ядро по медицинским услугам",
        "Анализ конкурентов и их объявлений",
        "Исследование целевой аудитории",
        "Определение минус-слов"
      ],
      color: "teal"
    },
    {
      icon: Strategy,
      number: "02", 
      title: "Структура кампаний",
      description: "Создаем логичную структуру рекламных кампаний под каждое направление",
      details: [
        "Разделение по услугам и специализациям",
        "Настройка географического таргетинга",
        "Определение стратегий ставок",
        "Настройка расписания показов"
      ],
      color: "indigo"
    },
    {
      icon: PencilSimple,
      number: "03",
      title: "Создание объявлений",
      description: "Пишем продающие объявления с соблюдением требований ФЗ-38",
      details: [
        "Уникальные тексты под каждую услугу",
        "Соблюдение медицинского законодательства",
        "A/B тестирование заголовков",
        "Настройка дополнений объявлений"
      ],
      color: "teal"
    },
    {
      icon: ChartLineUp,
      number: "04",
      title: "Запуск и оптимизация",
      description: "Запускаем кампании и постоянно улучшаем показатели эффективности",
      details: [
        "Настройка систем аналитики",
        "Еженедельные отчеты по результатам",
        "Корректировка ставок и бюджетов",
        "Добавление новых ключевых слов"
      ],
      color: "indigo"
    }
  ]

  return (
    <section id="contextual-process" className="bg-slate-900 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-20 right-20 w-40 h-40 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-20 left-20 w-60 h-60 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '5s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-teal-900/20 border border-teal-700/20 text-teal-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
            Процесс работы
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-fixedsys leading-tight">
            Как мы{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              настраиваем контекстную рекламу
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Пошаговый процесс создания эффективных рекламных кампаний
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const colors = step.color === 'teal' 
              ? {
                  iconBg: 'bg-teal-900/50',
                  iconColor: 'text-teal-400',
                  numberBg: 'bg-teal-500',
                  accentColor: 'text-teal-400'
                }
              : {
                  iconBg: 'bg-indigo-900/50', 
                  iconColor: 'text-indigo-400',
                  numberBg: 'bg-indigo-500',
                  accentColor: 'text-indigo-400'
                }
            
            return (
              <div 
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex flex-col lg:flex-row items-start gap-6 sm:gap-8 mb-8 sm:mb-12 group">
                  {/* Icon and Number */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className={`w-16 h-16 rounded-2xl ${colors.iconBg} flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform duration-300`}>
                        <IconComponent size={32} className={colors.iconColor} />
                      </div>
                      <div className={`absolute -top-2 -right-2 w-8 h-8 rounded-full ${colors.numberBg} flex items-center justify-center text-white text-sm font-bold font-fixedsys`}>
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold mb-3 font-fixedsys text-white group-hover:text-teal-400 transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                      {step.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start text-sm text-slate-500">
                          <span className={`w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0 ${
                            step.color === 'teal' ? 'bg-teal-400' : 'bg-indigo-400'
                          }`}></span>
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center mb-8 sm:mb-12">
                    <div className="w-px h-8 bg-gradient-to-b from-slate-600 to-transparent"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
