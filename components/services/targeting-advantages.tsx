"use client"

import { Shield, MapPin, Brain, Activity, DollarSign, Zap } from "lucide-react"
import { useEffect, useState } from "react"

export default function TargetingAdvantages() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const advantages = [
    {
      icon: MapPin,
      title: "Точная геолокация",
      description: "Показываем рекламу только в радиусе доступности вашей клиники. Никаких пустых показов людям из других городов.",
      color: "teal",
      delay: 0
    },
    {
      icon: Brain,
      title: "Поведенческий таргетинг",
      description: "Находим людей по их онлайн-поведению: искали стоматолога, читали о грыжах, интересовались лазерной эпиляцией.",
      color: "indigo",
      delay: 100
    },
    {
      icon: Shield,
      title: "Соблюдение законов",
      description: "Все объявления проходят модерацию по ФЗ-38 о рекламе. Избегаем проблем с Роспотребнадзором и Росздравнадзором.",
      color: "teal",
      delay: 200
    },
    {
      icon: DollarSign,
      title: "Контроль бюджета",
      description: "Ежедневный мониторинг расходов, оптимизация ставок, отключение неэффективных объявлений. Каждый рубль работает.",
      color: "indigo",
      delay: 300
    },
    {
      icon: Zap,
      title: "Быстрый старт",
      description: "В отличие от SEO, результаты видны уже через 2-3 дня. Первые записи начинают поступать с первой недели.",
      color: "teal",
      delay: 400
    },
    {
      icon: Activity,
      title: "Ретаргетинг",
      description: "Возвращаем посетителей сайта, которые не записались. Напоминаем о клинике тем, кто уже проявил интерес.",
      color: "indigo",
      delay: 500
    }
  ]

  return (
    <section id="targeting-advantages" className="bg-slate-900 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Улучшенные декоративные элементы */}
      <div className="absolute top-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 sm:w-60 sm:h-60 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Улучшенный заголовок */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-teal-900/20 border border-teal-700/20 text-teal-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
            Преимущества
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-fixedsys leading-tight">
            Почему таргетинг эффективен{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              для клиник
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Современный таргетинг позволяет точно находить людей, которым действительно нужны ваши медицинские услуги
          </p>
        </div>

        {/* Улучшенная сетка преимуществ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            const colors = advantage.color === 'teal' 
              ? {
                  iconBg: 'bg-teal-900/50',
                  iconColor: 'text-teal-400',
                  borderColor: 'border-teal-500/30',
                  shadowColor: 'shadow-teal-500/10'
                }
              : {
                  iconBg: 'bg-indigo-900/50',
                  iconColor: 'text-indigo-400',
                  borderColor: 'border-indigo-500/30',
                  shadowColor: 'shadow-indigo-500/10'
                }
            
            return (
              <div 
                key={index}
                className={`relative group transition-all duration-700 ${isVisible ? 'animate-slideInStagger opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${advantage.delay}ms` }}
              >
                <div className={`
                  relative bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/60 
                  p-6 sm:p-8 h-full transition-all duration-500 ease-out
                  hover:${colors.borderColor} hover:${colors.shadowColor} hover:shadow-2xl
                  hover-lift transform-gpu will-change-transform
                `}>
                  {/* Иконка */}
                  <div className={`
                    w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${colors.iconBg} ${colors.iconColor}
                    flex items-center justify-center mb-4 sm:mb-6 shadow-lg backdrop-blur-sm
                    group-hover:scale-110 group-hover:rotate-3 
                    transition-all duration-300 ease-out
                  `}>
                    <IconComponent size={24} className="sm:w-7 sm:h-7" />
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  {/* Контент */}
                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 font-fixedsys text-white leading-snug">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {advantage.description}
                  </p>

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
      </div>
    </section>
  )
}
