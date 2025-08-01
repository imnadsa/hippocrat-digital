"use client"

import { Button } from "@/components/ui/button"
import { Check, Crown, ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"

export default function TargetingPricing() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const plan = {
    name: "Таргетированная реклама",
    icon: Crown,
    price: "25 000 - 30 000",
    description: "Полное ведение таргетированной рекламы",
    features: [
      "Безлимит кампаний",
      "Все виды таргетинга",
      "Управление мультиаккаунтами",
      "Ежемесячная отчетность",
      "Выделенная команда",
      "Креативы по ТЗ",
      "Интеграция с CRM",
      "Видеокреативы",
      "24/7 поддержка"
    ],
    color: "teal"
  }

  const guarantees = [
    {
      value: "Более 5 лет",
      label: "Опыт настройти медицинского таргетинга",
      color: "teal"
    },
    {
      value: "Без агентского %",
      label: "Фиксированная стоимость ведения",
      color: "indigo"
    },
    {
      value: "100%",
      label: "Внимания вашему проекту",
      color: "teal"
    }
  ]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const IconComponent = plan.icon
  
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
            Тариф
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-fixedsys leading-tight">
            Ведение{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              таргетированной рекламы
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Полный комплекс услуг по ведению таргетированной рекламы для медицинских учреждений
          </p>
        </div>

        {/* Тарифный план */}
        <div className="max-w-md mx-auto mb-12 sm:mb-16">
          <div 
            className={`relative group transition-all duration-700 ${isVisible ? 'animate-slideInStagger opacity-100' : 'opacity-0 translate-y-8'}`}
            style={{ animationDelay: '200ms' }}
          >
            <div className="relative bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-teal-500 shadow-2xl shadow-teal-500/20 transform-gpu will-change-transform hover:scale-105 transition-all duration-500 ease-out hover:shadow-teal-500/30">
              {/* Популярный бейдж */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold font-fixedsys shadow-lg animate-pulse-slow">
                  Рекомендуем
                </div>
              </div>
              
              <div className="p-6 sm:p-8 h-full flex flex-col">
                {/* Заголовок плана */}
                <div className="text-center mb-6 sm:mb-8">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-teal-900/50 flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg backdrop-blur-sm group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <IconComponent size={28} className="text-teal-400 sm:w-8 sm:h-8" />
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
                    <span className="text-2xl sm:text-3xl font-bold font-fixedsys text-teal-400 group-hover:scale-110 transition-transform duration-300">
                      {plan.price}
                    </span>
                    <span className="text-slate-400 text-sm sm:text-base">₽/мес</span>
                  </div>
                  <div className="text-slate-500 text-xs sm:text-sm mt-1">
                    Фиксированная стоимость ведения
                  </div>
                </div>
                
                {/* Функции */}
                <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8 flex-grow">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start group/item">
                      <Check size={18} className="text-teal-400 mr-3 mt-0.5 flex-shrink-0 group-hover/item:scale-110 transition-transform duration-300" />
                      <span className="text-slate-300 text-sm sm:text-base leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Кнопка */}
                <Button
                  className="w-full font-fixedsys text-sm sm:text-base shadow-lg hover:shadow-xl transition-all duration-300 group/button bg-gradient-to-r from-teal-500 to-teal-700 hover:from-teal-600 hover:to-teal-800"
                  onClick={scrollToContact}
                >
                  Заказать ведение рекламы
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
        </div>

        {/* Индивидуальный тариф */}
        <div className={`transition-all duration-700 mb-8 sm:mb-12 ${isVisible ? 'animate-fadeIn opacity-100' : 'opacity-0'}`} style={{ animationDelay: '400ms' }}>
          <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/60 p-6 sm:p-8 text-center shadow-xl max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-indigo-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-lg sm:text-xl font-bold font-fixedsys text-white mb-2 sm:mb-3">
                Нужен индивидуальный подход?
              </h3>
              <p className="text-slate-400 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                Для крупных медицинских сетей мы создаем персональные пакеты с особыми условиями и дополнительными услугами
              </p>
              <Button
                variant="outline"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50 hover:border-teal-500 backdrop-blur-sm transition-all duration-300 group"
                onClick={scrollToContact}
              >
                Обсудить индивидуальные условия
                <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>

        {/* Гарантии */}
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fadeIn opacity-100' : 'opacity-0'}`} style={{ animationDelay: '600ms' }}>
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
