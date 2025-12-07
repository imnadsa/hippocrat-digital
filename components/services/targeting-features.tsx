"use client"

import { MapPin, Calendar, Heart, Shield, Eye, Target } from "lucide-react"
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
      progress: 1
    },
    {
      icon: Calendar,
      title: "Возраст и пол",
      description: "Подбор под услуги",
      details: ["Стоматология: 25-65", "Эстетическая: 25-45", "Педиатрия: 25-40 (родители)"],
      progress: 2
    },
    {
      icon: Heart,
      title: "Интересы",
      description: "Здоровье и красота",
      details: ["Медицина и здоровье", "Фитнес и спорт", "Косметология"],
      progress: 3
    },
    {
      icon: Eye,
      title: "Поведение",
      description: "Прошлая активность",
      details: ["Искали клиники", "Читали о заболеваниях", "Посещали сайты конкурентов"],
      progress: 3
    },
    {
      icon: Shield,
      title: "Исключения",
      description: "Фильтрация трафика",
      details: ["Медики и конкуренты", "Нецелевые регионы", "Низкий доход"],
      progress: 3
    }
  ]

  const getCardStyles = (progress: number) => {
    return {
      bgColor: 'bg-slate-800',
      textColor: 'text-white',
      descColor: 'text-slate-300',
      detailColor: 'text-slate-400'
    }
  }

  const specialties = [
    {
      icon: Shield,
      title: "Соблюдение ФЗ-38",
      description: "Все объявления проходят проверку на соответствие закону о рекламе"
    },
    {
      icon: Target,
      title: "Медицинские интересы",
      description: "Таргетинг по симптомам, заболеваниям и медицинским потребностям"
    },
    {
      icon: Eye,
      title: "Экстренность",
      description: "Разные стратегии для плановых и срочных медицинских услуг"
    }
  ]

  return (
    <section id="targeting-features" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden bg-[#0b101b]">
      {/* Декоративные элементы */}
      <div className="absolute top-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 sm:w-60 sm:h-60 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '5s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Заголовок */}
        <div className="text-center mb-8 sm:mb-12">
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

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            const styles = getCardStyles(feature.progress)
            
            return (
              <div key={index} className="group">
                <div className={`${styles.bgColor} rounded-2xl sm:rounded-3xl p-6 sm:p-8 h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}>
                  {/* Индикаторы прогресса */}
                  <div className="flex gap-2 mb-6">
                    {[1, 2, 3].map((dot) => (
                      <div 
                        key={dot}
                        className="w-3 h-3 rounded-full bg-teal-400"
                      />
                    ))}
                  </div>

                  {/* Иконка */}
                  <IconComponent size={40} className="text-teal-400 mb-4 transition-transform duration-300 group-hover:scale-110" />
                  
                  {/* Контент */}
                  <h3 className={`text-xl sm:text-2xl font-bold mb-3 ${styles.textColor}`}>
                    {feature.title}
                  </h3>
                  <p className={`text-sm sm:text-base mb-4 leading-relaxed ${styles.descColor}`}>
                    {feature.description}
                  </p>
                  
                  {/* Детали */}
                  <ul className="space-y-2">
                    {feature.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className={`text-xs sm:text-sm flex items-start leading-relaxed ${styles.detailColor}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 mr-2 mt-1.5 flex-shrink-0"></span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Блок специфики для медицинских клиник */}
        <div>
          <div className="bg-gradient-to-br from-teal-900/10 via-slate-900/5 to-indigo-900/10 rounded-2xl sm:rounded-3xl border border-teal-400/20 p-8 sm:p-10 lg:p-12 backdrop-blur-sm">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-fixedsys">
                Специфика для медицинских клиник
              </h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
              {specialties.map((specialty, index) => {
                const IconComponent = specialty.icon
                
                return (
                  <div key={index} className="text-center group">
                    <IconComponent size={48} className="text-teal-400 mx-auto mb-4 transition-transform duration-300 group-hover:scale-110" />
                    <h4 className="font-bold text-white mb-3 text-lg sm:text-xl font-fixedsys">
                      {specialty.title}
                    </h4>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                      {specialty.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
