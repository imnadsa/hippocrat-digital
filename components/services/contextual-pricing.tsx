"use client"

import { Button } from "@/components/ui/button"
import { Check, ArrowRight } from "phosphor-react"
import { useEffect, useState } from "react"

export default function ContextualPricing() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const plans = [
    {
      name: "Контекстная реклама",
      price: "от 45 000",
      description: "Полный цикл настройки и ведения",
      features: [
        "Без ограничений по услугам",
        "Безлимитные ключевые слова",
        "Комплексная настройка кампаний",
        "Еженедельные отчеты",
        "Персональный менеджер",
        "Продвинутая аналитика",
        "Интеграция с CRM",
        "Ретаргетинг настройка",
        "Соблюдение ФЗ-38"
      ],
      recommended: false,
      color: "teal"
    }
  ]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="contextual-pricing" className="bg-slate-900 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-20 left-20 w-40 h-40 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-20 right-20 w-60 h-60 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '3s' }}></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-indigo-900/20 border border-indigo-700/20 text-indigo-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
            Тарифы
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-fixedsys leading-tight">
            Стоимость ведения{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              контекстной рекламы
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Фиксированная стоимость ведения контекстной рекламы. Рекламный бюджет оплачивается отдельно
          </p>
        </div>

        <div className="max-w-md mx-auto">
          {plans.map((plan, index) => {
            const isRecommended = plan.recommended
            const colors = plan.color === 'teal' 
              ? {
                  border: 'border-teal-500/50',
                  gradient: 'from-teal-500/10 to-teal-600/5',
                  button: 'bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700',
                  badge: 'bg-teal-500'
                }
              : plan.color === 'indigo'
              ? {
                  border: 'border-indigo-500/50',
                  gradient: 'from-indigo-500/10 to-indigo-600/5',
                  button: 'bg-gradient-to-r from-indigo-500 to-indigo-600 hover:from-indigo-600 hover:to-indigo-700',
                  badge: 'bg-indigo-500'
                }
              : {
                  border: 'border-slate-700/60',
                  gradient: 'from-slate-800/50 to-slate-900/30',
                  button: 'bg-slate-700 hover:bg-slate-600',
                  badge: 'bg-slate-600'
                }

            return (
              <div 
                key={index}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {isRecommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`px-4 py-2 rounded-full text-white text-sm font-medium ${colors.badge} backdrop-blur-sm shadow-lg`}>
                      Рекомендуем
                    </div>
                  </div>
                )}

                <div className={`
                  relative bg-slate-800/40 backdrop-blur-sm rounded-2xl border ${colors.border}
                  p-6 sm:p-8 h-full transition-all duration-500 ease-out
                  hover:shadow-2xl hover-lift transform-gpu will-change-transform
                  ${isRecommended ? 'scale-105 shadow-2xl' : ''}
                `}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} rounded-2xl ${isRecommended ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'} transition-opacity duration-300`}></div>
                  
                  <div className="relative z-10">
                    <div className="text-center mb-6 sm:mb-8">
                      <h3 className="text-xl sm:text-2xl font-bold font-fixedsys text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-slate-400 text-sm mb-4">
                        {plan.description}
                      </p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-3xl sm:text-4xl font-bold font-fixedsys text-white">
                          {plan.price}
                        </span>
                        <span className="text-slate-400 ml-2">₽/мес</span>
                      </div>
                    </div>

                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-slate-300">
                          <Check size={16} className="text-teal-400 mr-3 mt-0.5 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      onClick={scrollToContact}
                      className={`w-full ${colors.button} text-white font-medium transition-all duration-300 group`}
                      size="lg"
                    >
                      Выбрать тариф
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className={`text-center mt-8 sm:mt-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: '600ms' }}>
          <p className="text-slate-500 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Рекламный бюджет (оплата кликов) не входит в стоимость услуг и оплачивается отдельно согласно вашим потребностям
          </p>
        </div>
      </div>
    </section>
  )
}
