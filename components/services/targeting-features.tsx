"use client"

import { MapPin, Calendar, Heart, Shield, Eye, Target, Clock, Smartphone } from "lucide-react"
import { useEffect, useState } from "react"

export default function TargetingFeatures() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const features = [
    {
      icon: MapPin,
      title: "Геотаргетинг",
      description: "Радиус клиники 1-15 км",
      details: ["Точная геолокация", "Исключение конкурентов", "Районы и метро"],
      color: "teal"
    },
    {
      icon: Calendar,
      title: "Возраст и пол",
      description: "Подбор под услуги",
      details: ["Стоматология: 25-65", "Эстетическая: 25-45", "Педиатрия: 25-40 (родители)"],
      color: "indigo"
    },
    {
      icon: Heart,
      title: "Интересы",
      description: "Здоровье и красота",
      details: ["Медицина и здоровье", "Фитнес и спорт", "Косметология"],
      color: "teal"
    },
    {
      icon: Eye,
      title: "Поведение",
      description: "Прошлая активность",
      details: ["Искали клиники", "Читали о заболеваниях", "Посещали сайты конкурентов"],
      color: "indigo"
    },
    {
      icon: Target,
      title: "Lookalike",
      description: "Похожие аудитории",
      details: ["На основе клиентской базы", "Похожие на конвертеров", "Автообновление сходств"],
      color: "teal"
    },
    {
      icon: Shield,
      title: "Исключения",
      description: "Фильтрация трафика",
      details: ["Медики и конкуренты", "Нецелевые регионы", "Низкий доход"],
      color: "indigo"
    },
    {
      icon: Clock,
      title: "Время показов",
      description: "Оптимальное время",
      details: ["Рабочие часы", "Вечер для записи", "Выходные для неотложки"],
      color: "teal"
    },
    {
      icon: Smartphone,
      title: "Устройства",
      description: "Под платформы",
      details: ["100% мобильный трафик", "Адаптация под экраны", "Приложения соцсетей"],
      color: "indigo"
    }
  ]

  const specialties = [
    {
      icon: Shield,
      title: "Соблюдение ФЗ-38",
      description: "Все объявления проходят проверку на соответствие закону о рекламе",
      color: "teal"
    },
    {
      icon: Target,
      title: "Медицинские интересы",
      description: "Таргетинг по симптомам, заболеваниям и медицинским потребностям",
      color: "indigo"
    },
    {
      icon: Clock,
      title: "Экстренность",
      description: "Разные стратегии для плановых и срочных медицинских услуг",
      color: "teal"
    }
  ]

  return (
    <section id="targeting-features" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 sm:w-60 sm:h-60 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '5s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-teal-900/20 border border-teal-700/20 text-teal-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
            Настройки таргетинга
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-fixedsys leading-tight">
            Как мы{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              настраиваем таргетинг
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Детальная настройка каждого параметра для максимальной эффективности рекламы
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const colors = feature.color === 'teal' 
              ? { iconColor: 'text-teal-400', borderColor: 'border-teal-500/30', shadowColor: 'shadow-teal-500/10' }
              : { iconColor: 'text-indigo-400', borderColor: 'border-indigo-500/30', shadowColor: 'shadow-indigo-500/10' }
            
            return (
              <div 
                key={index}
                className={`relative group transition-all duration-700 ${isVisible ? 'animate-slideInStagger opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`
                  relative bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800/60 
                  p-4 sm:p-6 h-full transition-all duration-500 ease-out
                  hover:${colors.borderColor} hover:${colors.shadowColor} hover:shadow-2xl
                  hover-lift transform-gpu will-change-transform
                `}>
                  <IconComponent size={36} className={`${colors.iconColor} mb-4`} />
                  
                  <h3 className="text-base sm:text-lg font-semibold mb-2 font-fixedsys text-white leading-snug">
                    {feature.title}
                  </h3>
                  <p className="text-slate-400 text-xs sm:text-sm mb-3 leading-relaxed">
                    {feature.description}
                  </p>
                  
                  <ul className="space-y-1">
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

        <div className={`transition-all duration-700 ${isVisible ? 'animate-fadeIn opacity-100' : 'opacity-0'}`} style={{ animationDelay: '800ms' }}>
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
                      <IconComponent size={36} className={`${colors.iconColor} mx-auto mb-4`} />
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
