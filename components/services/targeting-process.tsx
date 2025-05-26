"use client"

import { Search, Users, Palette, Settings, BarChart, TrendingUp, Repeat } from "lucide-react"
import { useEffect, useState } from "react"

export default function TargetingProcess() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const steps = [
    {
      icon: Search,
      title: "Анализ и аудит",
      description: "Изучаем специфику клиники, целевую аудиторию, конкурентов и текущие рекламные кампании",
      color: "teal"
    },
    {
      icon: Users,
      title: "Определение ЦА",
      description: "Создаем портреты идеальных пациентов на основе данных и составляем стратегию таргетинга",
      color: "indigo"
    },
    {
      icon: Palette,
      title: "Креативы и тексты",
      description: "Разрабатываем объявления с учетом медицинской этики, создаем Landing Pages под каждую услугу",
      color: "teal"
    },
    {
      icon: Settings,
      title: "Настройка кампаний",
      description: "Запускаем кампании в Facebook, Instagram, ВКонтакте, настраиваем автоматические правила",
      color: "indigo"
    },
    {
      icon: BarChart,
      title: "Тестирование",
      description: "A/B тестируем объявления, аудитории, креативы. Находим самые эффективные комбинации",
      color: "teal"
    },
    {
      icon: TrendingUp,
      title: "Оптимизация",
      description: "Анализируем результаты, отключаем неэффективные объявления, масштабируем успешные",
      color: "indigo"
    },
    {
      icon: Repeat,
      title: "Ретаргетинг",
      description: "Возвращаем посетителей с помощью умного ретаргетинга, увеличиваем конверсию",
      color: "teal"
    }
  ]

  const getStepColors = (color: string) => {
    if (color === 'teal') {
      return {
        iconBg: 'bg-teal-900/50',
        iconColor: 'text-teal-400',
        titleColor: 'text-teal-400',
        numberBg: 'bg-teal-900/30',
        borderColor: 'border-teal-500/30',
        shadowColor: 'shadow-teal-500/10'
      }
    } else {
      return {
        iconBg: 'bg-indigo-900/50',
        iconColor: 'text-indigo-400',
        titleColor: 'text-indigo-400',
        numberBg: 'bg-indigo-900/30',
        borderColor: 'border-indigo-500/30',
        shadowColor: 'shadow-indigo-500/10'
      }
    }
  }

  return (
    <section id="targeting-process" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-60 sm:h-60 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Заголовок */}
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-teal-900/20 border border-teal-700/20 text-teal-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
            Как мы работаем
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 font-fixedsys leading-tight">
            Процесс настройки{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              таргетированной рекламы
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            7 этапов создания эффективной рекламной кампании для вашей клиники
          </p>
        </div>

        {/* Сетка карточек */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            const colors = getStepColors(step.color)
            const delay = index * 150
            
            return (
              <div 
                key={index} 
                className={`relative group transition-all duration-700 ${isVisible ? 'animate-slideInStagger opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${delay}ms` }}
              >
                <div className={`
                  relative bg-slate-900/40 backdrop-blur-sm rounded-2xl border border-slate-800/60 
                  p-4 sm:p-6 h-full flex flex-col
                  hover:${colors.borderColor} hover:${colors.shadowColor} hover:shadow-2xl
                  transition-all duration-500 ease-out
                  hover-lift transform-gpu will-change-transform
                `}>
                  {/* Header карточки */}
                  <div className="flex items-center mb-4 sm:mb-6">
                    <div className={`
                      relative w-12 h-12 sm:w-14 sm:h-14 rounded-xl ${colors.iconBg} 
                      flex items-center justify-center ${colors.iconColor} 
                      mr-3 sm:mr-4 shadow-lg backdrop-blur-sm
                      group-hover:scale-110 group-hover:rotate-3 
                      transition-all duration-300 ease-out
                    `}>
                      <IconComponent size={20} className="sm:w-6 sm:h-6" />
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                    <div className={`
                      text-lg sm:text-xl font-bold font-fixedsys ${colors.titleColor}
                      px-2 py-1 rounded-lg ${colors.numberBg} backdrop-blur-sm
                      min-w-[2rem] flex items-center justify-center
                      shadow-sm
                    `}>
                      {index + 1}
                    </div>
                  </div>

                  {/* Контент */}
                  <div className="flex-grow">
                    <h3 className="text-lg sm:text-xl font-semibold mb-3 font-fixedsys text-white leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Декоративные элементы */}
                  <div className="absolute top-2 right-2 w-2 h-2 rounded-full bg-gradient-to-r from-teal-400/20 to-indigo-400/20 opacity-60"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-gradient-to-r from-indigo-400/30 to-teal-400/30"></div>
                </div>

                {/* Соединительные линии для больших экранов */}
                {index < steps.length - 1 && index % 4 !== 3 && (
                  <div className="hidden xl:block absolute top-8 -right-4 w-8 z-0">
                    <div className="h-0.5 bg-gradient-to-r from-slate-600/40 via-slate-500/60 to-transparent animate-pulse-slow"></div>
                    <div className="absolute right-0 top-[-2px] w-1 h-1 rounded-full bg-slate-500/60"></div>
                  </div>
                )}

                {/* Соединительные линии для средних экранов */}
                {index < steps.length - 1 && index % 3 !== 2 && (
                  <div className="hidden lg:block xl:hidden absolute top-8 -right-4 w-8 z-0">
                    <div className="h-0.5 bg-gradient-to-r from-slate-600/40 via-slate-500/60 to-transparent animate-pulse-slow"></div>
                    <div className="absolute right-0 top-[-2px] w-1 h-1 rounded-full bg-slate-500/60"></div>
                  </div>
                )}

                {/* Вертикальные линии для мобильных */}
                {index < steps.length - 1 && (
                  <div className="block lg:hidden absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0.5 h-8 z-0">
                    <div className="w-full h-full bg-gradient-to-b from-slate-600/40 via-slate-500/60 to-transparent animate-pulse-slow"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Блок результата */}
        <div className={`transition-all duration-700 ${isVisible ? 'animate-fadeIn opacity-100' : 'opacity-0'}`} style={{ animationDelay: '1200ms' }}>
          <div className="text-center">
            <div className="relative inline-block bg-gradient-to-r from-teal-900/20 via-slate-900/50 to-indigo-900/20 rounded-2xl border border-teal-500/20 p-6 sm:p-8 lg:p-10 backdrop-blur-sm shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-indigo-500/5 rounded-2xl"></div>
              <div className="relative z-10">
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4 font-fixedsys text-teal-400">
                  Результат
                </h3>
                <p className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                  Стабильный поток целевых пациентов с первой недели работы
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
