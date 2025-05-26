"use client"

import { useState, useEffect, useRef } from "react"
import { 
  Search, 
  Lightbulb, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  CheckCircle,
  Clock,
  ArrowRight
} from "lucide-react"

export default function WebsitesProcess() {
  const [inView, setInView] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const sectionRef = useRef<HTMLElement>(null)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          startAutoProgress()
        } else {
          stopAutoProgress()
        }
      },
      { threshold: 0.2, rootMargin: '50px' }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      observer.disconnect()
      stopAutoProgress()
    }
  }, [])

  const startAutoProgress = () => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      if (isAutoPlaying) {
        setActiveStep((prev) => (prev + 1) % steps.length)
      }
    }, 4000)
  }

  const stopAutoProgress = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  const handleStepClick = (index: number) => {
    setActiveStep(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 8000) // Возобновляем автопроигрывание через 8 секунд
  }

  const steps = [
    {
      icon: Search,
      title: "Анализ и планирование",
      duration: "5-7 дней",
      description: "Изучаем клинику, конкурентов и потребности пациентов",
      color: "teal",
      tasks: [
        "Анализ целевой аудитории",
        "Изучение конкурентов",
        "Определение целей сайта",
        "Создание карты пользователя",
        "Планирование структуры"
      ]
    },
    {
      icon: Lightbulb,
      title: "Концепция и архитектура",
      duration: "3-5 дней",
      description: "Создаём концепцию и определяем архитектуру сайта",
      color: "indigo",
      tasks: [
        "Создание wireframes",
        "Проектирование архитектуры",
        "Выбор технологий",
        "Планирование интеграций",
        "Создание прототипа"
      ]
    },
    {
      icon: Palette,
      title: "Дизайн",
      duration: "10-14 дней",
      description: "Создаём уникальный дизайн, отражающий ценности клиники",
      color: "teal",
      tasks: [
        "Создание дизайн-концепции",
        "Отрисовка макетов",
        "Адаптация под устройства",
        "Создание UI-кита",
        "Утверждение дизайна"
      ]
    },
    {
      icon: Code,
      title: "Разработка",
      duration: "15-20 дней",
      description: "Воплощаем дизайн в функциональный сайт",
      color: "indigo",
      tasks: [
        "Frontend разработка",
        "Backend интеграция",
        "CMS настройка",
        "Формы и функционал",
        "Оптимизация скорости"
      ]
    },
    {
      icon: TestTube,
      title: "Тестирование",
      duration: "5-7 дней",
      description: "Проверяем работу всех функций и исправляем ошибки",
      color: "teal",
      tasks: [
        "Функциональное тестирование",
        "Тестирование производительности",
        "Кроссбраузерность",
        "Проверка безопасности",
        "Мобильная адаптация"
      ]
    },
    {
      icon: Rocket,
      title: "Запуск и поддержка",
      duration: "2-3 дня",
      description: "Запускаем сайт и обеспечиваем техническую поддержку",
      color: "indigo",
      tasks: [
        "Миграция на хостинг",
        "Настройка SSL",
        "Подключение аналитики",
        "Обучение администратора",
        "Техническая поддержка"
      ]
    }
  ]

  const totalDuration = steps.reduce((acc, step) => {
    const [min, max] = step.duration.split('-').map(d => parseInt(d))
    return acc + (min + max) / 2
  }, 0)

  const getStepColors = (color: string, isActive: boolean, isPassed: boolean) => {
    if (color === "teal") {
      return {
        iconBg: isActive ? 'bg-teal-500' : isPassed ? 'bg-teal-600' : 'bg-teal-900/50',
        iconColor: isActive ? 'text-white' : isPassed ? 'text-white' : 'text-teal-400',
        borderColor: isActive ? 'border-teal-500' : isPassed ? 'border-teal-600' : 'border-teal-500/30',
        shadowColor: isActive ? 'shadow-teal-500/20' : '',
        bgColor: isActive ? 'bg-teal-900/20' : 'bg-slate-900/40'
      }
    } else {
      return {
        iconBg: isActive ? 'bg-indigo-500' : isPassed ? 'bg-indigo-600' : 'bg-indigo-900/50',
        iconColor: isActive ? 'text-white' : isPassed ? 'text-white' : 'text-indigo-400',
        borderColor: isActive ? 'border-indigo-500' : isPassed ? 'border-indigo-600' : 'border-indigo-500/30',
        shadowColor: isActive ? 'shadow-indigo-500/20' : '',
        bgColor: isActive ? 'bg-indigo-900/20' : 'bg-slate-900/40'
      }
    }
  }

  return (
    <section ref={sectionRef} id="websites-process" className="py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      {/* Улучшенные декоративные элементы */}
      <div className="absolute top-10 left-10 w-32 h-32 sm:w-40 sm:h-40 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 sm:w-60 sm:h-60 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-24 h-24 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Улучшенный заголовок */}
        <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-700 ${inView ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-teal-900/20 border border-teal-700/20 text-teal-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
            Процесс разработки
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-fixedsys leading-tight">
            Этапы создания{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              медицинских сайтов
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed mb-4">
            Структурированный процесс, который гарантирует качественный результат и своевременную доставку проекта
          </p>
          <div className="flex items-center justify-center gap-2 text-sm sm:text-base">
            <Clock size={18} className="text-teal-400" />
            <span className="text-slate-300">Общее время разработки: </span>
            <span className="text-teal-400 font-bold font-fixedsys">{Math.round(totalDuration)} дней</span>
          </div>
        </div>

        {/* Улучшенный Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Адаптивная линия времени */}
          <div className="absolute left-6 sm:left-1/2 transform sm:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-slate-600/30 via-slate-500/50 to-slate-600/30"></div>
          
          {/* Этапы */}
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = activeStep === index
              const isPassed = inView && activeStep > index
              const colors = getStepColors(step.color, isActive, isPassed)
              const isEven = index % 2 === 0
              
              return (
                <div 
                  key={index} 
                  className={`relative transition-all duration-700 cursor-pointer group ${
                    inView ? 'animate-slideInStagger opacity-100' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 150 + 200}ms` }}
                  onClick={() => handleStepClick(index)}
                >
                  {/* Номер этапа - центрированный для мобильных */}
                  <div className={`absolute left-3 sm:left-1/2 transform sm:-translate-x-1/2 w-12 h-12 rounded-xl border-2 flex items-center justify-center font-fixedsys font-bold transition-all duration-500 hover-lift backdrop-blur-sm ${
                    isActive ? `${colors.iconBg} ${colors.borderColor} text-white shadow-lg ${colors.shadowColor} scale-110` 
                    : isPassed ? `${colors.iconBg} ${colors.borderColor} text-white shadow-md`
                    : `bg-slate-800/80 border-slate-700/60 text-slate-400 group-hover:border-slate-600`
                  }`}>
                    {isPassed && !isActive ? <CheckCircle size={20} /> : index + 1}
                  </div>
                  
                  {/* Контент - адаптивное позиционирование */}
                  <div className={`ml-20 sm:ml-0 ${isEven ? 'sm:mr-auto sm:pr-8' : 'sm:ml-auto sm:pl-8'} sm:w-5/12 lg:w-2/5`}>
                    <div className={`
                      relative ${colors.bgColor} backdrop-blur-sm rounded-2xl border ${colors.borderColor} 
                      p-4 sm:p-6 lg:p-8 transition-all duration-500 ease-out
                      hover:${colors.borderColor} hover:shadow-2xl hover:${colors.shadowColor}
                      hover-lift transform-gpu will-change-transform
                      ${isActive ? `shadow-2xl ${colors.shadowColor} scale-105` : 'hover:scale-105'}
                    `}>
                      {/* Заголовок с иконкой */}
                      <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                        <div className={`
                          w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${colors.iconBg} ${colors.iconColor}
                          flex items-center justify-center shadow-lg backdrop-blur-sm
                          group-hover:scale-110 group-hover:rotate-3 
                          transition-all duration-300 ease-out
                        `}>
                          <IconComponent size={20} className="sm:w-6 sm:h-6" />
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold font-fixedsys text-white leading-tight">
                            {step.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <Clock size={14} className="text-slate-500" />
                            <span className="text-slate-400 text-sm">{step.duration}</span>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-slate-300 text-sm sm:text-base mb-4 sm:mb-6 leading-relaxed">
                        {step.description}
                      </p>
                      
                      {/* Детализация для активного шага */}
                      {isActive && (
                        <div className="animate-fadeIn border-t border-slate-700/50 pt-4 sm:pt-6">
                          <h4 className="font-semibold text-white mb-3 font-fixedsys text-sm sm:text-base flex items-center gap-2">
                            <ArrowRight size={16} className={step.color === 'teal' ? 'text-teal-400' : 'text-indigo-400'} />
                            Включает:
                          </h4>
                          <ul className="space-y-2">
                            {step.tasks.map((task, taskIndex) => (
                              <li 
                                key={taskIndex} 
                                className="flex items-start text-xs sm:text-sm text-slate-400 leading-relaxed"
                                style={{ animationDelay: `${taskIndex * 100}ms` }}
                              >
                                <span className={`w-1.5 h-1.5 rounded-full mr-3 mt-2 flex-shrink-0 ${
                                  step.color === 'teal' ? 'bg-teal-400' : 'bg-indigo-400'
                                }`}></span>
                                {task}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Декоративные элементы */}
                      <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r from-teal-400/20 to-indigo-400/20 opacity-60"></div>
                      <div className="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-gradient-to-r from-indigo-400/30 to-teal-400/30"></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Улучшенный блок результата */}
        <div className={`mt-12 sm:mt-16 lg:mt-20 transition-all duration-700 ${inView ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '1000ms' }}>
          <div className="relative bg-gradient-to-r from-teal-900/20 via-slate-900/40 to-indigo-900/20 rounded-2xl border border-teal-500/20 p-6 sm:p-8 lg:p-10 backdrop-blur-sm shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-teal-500/5 to-indigo-500/5 rounded-2xl"></div>
            <div className="relative z-10">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold font-fixedsys text-white mb-4 sm:mb-6 text-center">
                Результат нашей работы
              </h3>
              <p className="text-slate-400 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 max-w-3xl mx-auto text-center leading-relaxed">
                Полностью готовый к работе сайт, оптимизированный для привлечения пациентов, 
                соответствующий всем требованиям медицинской отрасли и готовый к масштабированию
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
                {[
                  { value: "3 месяца", label: "Гарантия поддержки", color: "teal" },
                  { value: "24/7", label: "Техническая поддержка", color: "indigo" },
                  { value: "100%", label: "Соответствие требованиям", color: "teal" }
                ].map((item, index) => (
                  <div key={index} className="text-center group">
                    <div className={`text-2xl sm:text-3xl font-bold font-fixedsys mb-2 transition-all duration-300 group-hover:scale-110 ${
                      item.color === 'teal' ? 'text-teal-400' : 'text-indigo-400'
                    }`}>
                      {item.value}
                    </div>
                    <div className="text-slate-400 text-sm sm:text-base">{item.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
