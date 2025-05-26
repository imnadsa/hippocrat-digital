"use client"

import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function TargetingPricing() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const plans = [
    {
      name: "Стартовый",
      icon: Zap,
      price: "25 000",
      budget: "до 50 000",
      description: "Идеально для начинающих клиник",
      features: [
        "1-2 рекламные кампании",
        "Базовые аудитории",
        "Еженедельные отчеты",
        "Телеграм-поддержка",
        "1 лендинг пейдж",
        "Настройка пикселей"
      ],
      popular: false,
      color: "slate"
    },
    {
      name: "Оптимальный",
      icon: Star,
      price: "45 000",
      budget: "до 150 000",
      description: "Самый популярный тариф",
      features: [
        "3-5 рекламных кампаний",
        "Lookalike аудитории",
        "Ретаргетинг",
        "2 раза в неделю отчеты",
        "Персональный менеджер",
        "3 лендинг пейджа",
        "A/B тесты объявлений",
        "Бесплатные правки"
      ],
      popular: true,
      color: "teal"
    },
    {
      name: "Премиум",
      icon: Crown,
      price: "75 000",
      budget: "от 200 000",
      description: "Для крупных клиник",
      features: [
        "Безлимит кампаний",
        "Все виды таргетинга",
        "Управление мультиаккаунтами",
        "Ежедневные отчеты",
        "Выделенная команда",
        "Безлимит лендингов",
        "Креативы по ТЗ",
        "Интеграция с CRM",
        "Видеокреативы",
        "24/7 поддержка"
      ],
      popular: false,
      color: "indigo"
    }
  ]

  const guarantees = [
    {
      value: "14 дней",
      label: "Бесплатный тестовый период",
      color: "teal"
    },
    {
      value: "Без агентского %",
      label: "Фиксированная стоимость ведения",
      color: "indigo"
    },
    {
      value: "30 дней",
      label: "Гарантия возврата средств",
      color: "teal"
    }
  ]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="targeting-pricing" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Улучшенные декоративные элементы */}
      <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-60 sm:h-60 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Улучшенный заголовок */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-teal-900/20 border border-teal-700/20 text-teal-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
            Тарифы
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-fixedsys leading-tight">
            Пакеты{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              таргетированной рекламы
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Выберите подходящий тариф в зависимости от размера клиники и рекламного бюджета
          </p>
        </div>

        {/* Тарифные планы */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12 sm:mb-16">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            
            const getColors = () => {
              if (plan.color === 'teal') {
                return {
                  iconBg: 'bg-teal-900/50',
                  iconColor: 'text-teal-400',
                  priceColor: 'text-teal-400',
                  checkColor: 'text-teal-400',
                  buttonClass: 'bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800',
                  borderClass: plan.popular ? 'border-teal-500' : 'border-teal-500/30',
                  shadowClass: plan.popular ? 'shadow-teal-500/20' : ''
                }
              } else if (plan.color === 'indigo') {
                return {
                  iconBg: 'bg-indigo-900/50',
                  iconColor: 'text-indigo-400',
                  priceColor: 'text-indigo-400',
                  checkColor: 'text-indigo-400',
                  buttonClass: 'bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800',
                  borderClass: 'border-indigo-500/30',
                  shadowClass: ''
                }
              } else {
                return {
                  iconBg: 'bg-slate-700/50',
                  iconColor: 'text-slate-400',
                  priceColor: 'text-white',
                  checkColor: 'text-green-400',
                  buttonClass: 'bg-slate-800 hover:bg-slate-700 text-slate-200',
                  borderClass: 'border-slate-800',
                  shadowClass: ''
                }
              }
            }
            
            const colors = getColors()
            
            return (
              <div 
                key={index}
                className={`relative group transition-all duration-700 ${isVisible ? 'animate-slideInStagger opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 150 + 200}ms` }}
              >
                <div className={`
                  relative bg-slate-900/40 backdrop-blur-sm rounded-2xl border transition-all duration-500 ease-out h-full
                  hover:shadow-2xl hover-lift transform-gpu will-change-transform
                  ${colors.borderClass} ${colors.shadowClass}
                  ${plan.popular ? 'scale-105 shadow-2xl' : 'hover:scale-105'}
                `}>
                  {/* Популярный бейдж */}
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                      <div className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold font-fixedsys shadow-lg animate-pulse-slow">
                        Популярный
                      </div>
                    </div>
                  )}
                  
                  <div className="p-6 sm:p-8 h-full flex flex-col">
                    {/* Заголовок плана */}
                    <div className="text-center mb-6 sm:mb-8">
                      <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${colors.iconBg} flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                        <IconComponent size={28} className={`${colors.iconColor} sm:w-8 sm:h-8`} />
                      </div>
                      <h3 className="text-xl sm:text-2xl font-bold font-fixedsys text-white mb-2">
                        {plan.name}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {plan.description}
                      </p>
                    </div>
                    
                    {/* Цена */}
                    <div className="text-center mb-6 sm:mb-8">
                      <div className="flex items-baseline justify-center gap-1">
                        <span className={`text-2xl sm:text-3xl font-bold font-fixedsys ${colors.priceColor} group-hover:scale-110 transition-transform duration-300`}>
                          {plan.price}
                        </span>
                        <span className="text-slate-400 text-sm sm:text-base">₽/мес</span>
                      </div>
                      <div className="text-slate-500 text-xs sm:text-sm mt-1">
                        При рекламном бюджете {plan.budget} ₽/мес
                      </div>
                    </div>
                    
                    {/* Функции */}
                    <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start group/item">
                          <Check size={18} className={`${colors.checkColor} mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300`} />
                          <span className="text-slate-300 text-sm sm:text-base leading-relaxed">
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    
                    {/* Кнопка */}
                    <Button
                      className={`w-full font-fixedsys text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 group/button ${colors.buttonClass}`}
                      onClick={scrollToContact}
                    >
                      Выбрать тариф
                      <ArrowRight size={18} className="ml-2 group-hover/button:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>
                  
                  {/* Декоративные элементы */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r from-teal-400/20 to-indigo-400/20 opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-gradient-to-r from-indigo-400/30 to-teal-400/30"></div>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Индивидуальный тариф */}
        <div className={`transition-all duration-700 mb-8 sm:mb-12 ${isVisible ? 'animate-fadeIn opacity-100' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/60 p-6 sm:p-8 text-center shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-indigo-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold font-fixedsys text-white mb-2 sm:mb-3">
                Нужен индивидуальный тариф?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Для крупных медицинских сетей мы создаем персональные пакеты с особыми условиями
              </p>
              <Button
                variant="outline"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50 hover:border-teal-500 backdrop-blur-sm transition-all duration-300 group"
                onClick={scrollToContact}
              >
                Обсудить индивидуальный тариф
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>

        {/* Гарантии */}
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fadeIn opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1000ms' }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            {guarantees.map((guarantee, index) => {
              const colors = guarantee.color === 'teal' 
                ? 'text-teal-400' 
                : 'text-indigo-400'
              
              return (
                <div key={index} className="text-center group">
                  <div className={`text-lg sm:text-xl font-bold font-fixedsys ${colors} mb-1 group-hover:scale-110 transition-transform duration-300`}>
                    {guarantee.value}
                  </div>
                  <div className="text-slate-500 text-xs sm:text-sm leading-relaxed">
                    {guarantee.label}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
