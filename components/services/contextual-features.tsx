"use client"

import { Key, Prohibit, MapPin, Clock, DeviceTablet, TrendUp, Shield, List } from "phosphor-react"
import { useEffect, useState } from "react"

export default function ContextualFeatures() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const features = [
    {
      icon: Key,
      title: "Ключевые слова",
      description: "Точный подбор запросов",
      details: ["Брендовые запросы", "Коммерческие ключи", "Информационные фразы"],
      color: "teal"
    },
    {
      icon: Prohibit,
      title: "Минус-слова",
      description: "Фильтрация трафика",
      details: ["Исключение нецелевых", "Минус конкурентов", "Фильтр по цене"],
      color: "indigo"
    },
    {
      icon: MapPin,
      title: "Геотаргетинг",
      description: "Географические настройки",
      details: ["Радиус от клиники", "Исключение регионов", "Корректировки ставок"],
      color: "teal"
    },
    {
      icon: Clock,
      title: "Расписание",
      description: "Время показов",
      details: ["Рабочие часы", "Пиковые периоды", "Выходные дни"],
      color: "indigo"
    },
    {
      icon: DeviceTablet,
      title: "Устройства",
      description: "Платформы показов",
      details: ["Мобильные устройства", "Десктоп версии", "Планшеты"],
      color: "teal"
    },
    {
      icon: TrendUp,
      title: "Ставки",
      description: "Управление бюджетом",
      details: ["Автоматические стратегии", "Ручные корректировки", "CPA оптимизация"],
      color: "indigo"
    }
  ]

  const specialties = [
    {
      icon: Shield,
      title: "Медицинская экспертиза",
      description: "Знаем специфику рекламы медицинских услуг и требования ФЗ-38",
      color: "teal"
    },
    {
      icon: List,
      title: "Сегментация услуг",
      description: "Отдельные кампании для каждого направления и типа пациентов",
      color: "indigo"
    },
    {
      icon: Clock,
      title: "Экстренные услуги",
      description: "Особые настройки для неотложной помощи и срочных вызовов",
      color: "teal"
    }
  ]

  return (
    <section id="contextual-features" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 sm:w-60 sm:h-60 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '5s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-teal-900/20 border border-teal-700/20 text-teal-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
            Настройки кампаний
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-fixedsys leading-tight">
            Параметры{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              контекстной рекламы
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Детальная настройка каждого параметра для максимальной эффективности
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const colors = feature.color === 'teal' 
              ? { iconColor: 'text-teal-400' }
              : { iconColor: 'text-indigo-400' }
            
            return (
              <div 
                key={index}
                className={`relative group transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* 👇 ВОТ ИЗМЕНЕНИЯ. УБРАЛ ФОН И ГРАНИЦЫ С КАРТОЧКИ */}
                <div className={`
                  relative rounded-2xl p-4 sm:p-6 h-full transition-all duration-500 ease-out
                  hover-lift transform-gpu will-change-transform text-center
                `}>
                  <IconComponent size={48} className={`${colors.iconColor} mb-4 mx-auto`} />
                  
                  <h3 className="text-base sm:text-lg font-semibold mb-2 font-fixedsys text-white leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-3 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  {/* Выравнивание списка по левому краю для читаемости */}
                  <ul className="space-y-1 text-left">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="text-xs text-slate-500 flex items-start leading-relaxed">
                        <span className={`w-1.5 h-1.5 rounded-full mr-2 mt-1.5 flex-shrink-0 ${
                          feature.color === 'teal' ? 'bg-teal-400' : 'bg-indigo-400'
                        }`}></span>
                        {detail}
                      </li>
                    ))}
                  </ul>

                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-teal-400/20 to-indigo-400/20 opacity-60"></div>
                </div>
              </div>
            )
          })}
        </div>

        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
          <div className="relative bg-gradient-to-r from-teal-900/20 via-slate-900/50 to-indigo-900/20 rounded-2xl border border-teal-500/20 p-6 sm:p-8 lg:p-10 backdrop-blur-sm shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-indigo-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="text-center mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold font-fixedsys text-white mb-4">
                  Специфика для медицинских клиник
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {specialties.map((specialty, index) => {
                  const IconComponent = specialty.icon
                  const colors = specialty.color === 'teal' 
                    ? { iconColor: 'text-teal-400' }
                    : { iconColor: 'text-indigo-400' }
                  
                  return (
                    <div key={index} className="text-center group">
                      {/* 👇 ИЗМЕНЕН РАЗМЕР ИКОНКИ */}
                      <IconComponent size={48} className={`${colors.iconColor} mx-auto mb-4`} />
                      <h4 className="font-semibold text-white mb-2 sm:mb-3 font-fixedsys text-sm sm:text-base">
                        {specialty.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {specialty.description}
                      </p>
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
