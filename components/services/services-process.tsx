"use client"

import { useState, useEffect, useRef } from "react"
import { 
  Search, 
  Target, 
  Rocket, 
  BarChart3,
  Phone,
  FileText,
  Settings,
  TrendingUp,
  CheckCircle,
  ArrowRight
} from "lucide-react"

export default function ServicesProcess() {
  const [inView, setInView] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          startStepAnimation()
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
        if(sectionRef.current) {
            observer.unobserve(sectionRef.current)
        }
    }
  }, [])

  const startStepAnimation = () => {
    const interval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev >= steps.length - 1) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 1000)
  }

  const steps = [
    {
      icon: Phone,
      title: "Первичная консультация",
      description: "Обсуждаем ваши цели, изучаем специфику клиники и определяем потребности",
      details: [
        "Анализ текущей ситуации",
        "Постановка целей и KPI",
        "Определение бюджета",
        "Выбор направлений работы"
      ],
      color: "teal"
    },
    {
      icon: Search,
      title: "Аудит и анализ",
      description: "Проводим комплексный анализ вашего присутствия в digital-среде",
      details: [
        "Аудит сайта и соцсетей",
        "Анализ конкурентов",
        "Исследование ЦА",
        "SEO и техническая экспертиза"
      ],
      color: "indigo"
    },
    {
      icon: Target,
      title: "Стратегия и планирование",
      description: "Разрабатываем детальную стратегию для достижения ваших целей",
      details: [
        "Создание digital-стратегии",
        "Планирование кампаний",
        "Контент-план",
        "Техническое задание"
      ],
      color: "teal"
    },
    {
      icon: Settings,
      title: "Настройка и внедрение",
      description: "Настраиваем все системы и запускаем рекламные кампании",
      details: [
        "Настройка рекламных кабинетов",
        "Установка аналитики",
        "Создание креативов",
        "Тестовый запуск"
      ],
      color: "indigo"
    },
    {
      icon: Rocket,
      title: "Запуск проекта",
      description: "Официальный старт всех кампаний и мониторинг первых результатов",
      details: [
        "Полный запуск кампаний",
        "Мониторинг показателей",
        "Первичная оптимизация",
        "Обратная связь"
      ],
      color: "teal"
    },
    {
      icon: BarChart3,
      title: "Оптимизация и масштабирование",
      description: "Непрерывная работа над улучшением результатов и достижением KPI",
      details: [
        "A/B тестирование",
        "Оптимизация кампаний",
        "Масштабирование",
        "Регулярная отчетность"
      ],
      color: "indigo"
    }
  ]

  const methodologies = [
    {
      title: "Agile подход",
      description: "Быстрая адаптация к изменениям",
      icon: "🔄"
    },
    {
      title: "Data-driven решения",
      description: "Все решения основаны на данных",
      icon: "📊"
    },
    {
      title: "Медицинская экспертиза",
      description: "Знание специфики отрасли",
      icon: "🏥"
    },
    {
      title: "Прозрачность",
      description: "Детальная отчетность",
      icon: "📈"
    }
  ]

  return (
    <section ref={sectionRef} id="services-process" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-3s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Как мы работаем
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Процесс{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              работы с клиентами
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Структурированный подход к каждому проекту гарантирует достижение поставленных целей 
            и максимальную эффективность вложений
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-5xl mx-auto mb-16">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 opacity-30"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = activeStep >= index
              const isPast = activeStep > index
              
              return (
                <div 
                  key={index}
                  className={`relative transition-all duration-700 ${
                    inView ? 'animate-slideInStagger opacity-100' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ animationDelay: `${index * 200 + 300}ms` }}
                >
                  {/* Step number and icon */}
                  <div className="flex flex-col items-center mb-6">
                    <div className={`relative w-16 h-16 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${
                      isActive 
                        ? `bg-${step.color}-500 border-${step.color}-500 text-white shadow-lg shadow-${step.color}-500/30 scale-110`
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}>
                      {isPast ? (
                        <span className="font-fixedsys font-bold text-2xl">{index + 1}</span>
                      ) : (
                        <IconComponent size={24} />
                      )}
                      
                      {/* Step number in corner */}
                      <div className={`absolute -top-3 -right-3 w-8 h-8 rounded-full text-xs font-bold font-fixedsys flex items-center justify-center transition-all duration-500 ${
                        isActive 
                          ? `bg-${step.color}-600 text-white`
                          : 'bg-slate-700 text-slate-400'
                      }`}>
                        {index + 1}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`bg-slate-800/20 rounded-xl border p-6 transition-all duration-500 ${
                    isActive 
                      ? `border-${step.color}-500/30 shadow-lg shadow-${step.color}-900/10`
                      : 'border-slate-700/30'
                  }`}>
                    <div className="text-center mb-4">
                      <h3 className={`text-lg font-bold font-fixedsys mb-2 transition-colors duration-300 ${
                        isActive ? `text-${step.color}-400` : 'text-white'
                      }`}>
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-300 text-sm mb-4 text-center">
                      {step.description}
                    </p>

                    {/* Details for active step */}
                    {isActive && (
                      <div className="animate-fadeIn border-t border-slate-700/50 pt-4">
                        <ul className="space-y-2">
                          {step.details.map((detail, detailIndex) => (
                            <li 
                              key={detailIndex} 
                              className="flex items-start text-xs text-slate-400"
                              style={{ animationDelay: `${detailIndex * 100}ms` }}
                            >
                              <span className={`w-1.5 h-1.5 rounded-full mr-3 mt-1.5 bg-${step.color}-400`}></span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Methodologies */}
        <div className={`${inView ? 'animate-fadeInUp delay-1000' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold font-fixedsys text-white text-center mb-8">
            Наши принципы работы
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {methodologies.map((method, index) => (
              <div 
                key={index}
                className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 text-center hover-lift transition-all group"
              >
                <div className="text-3xl mb-4 group-hover:animate-iconBounce">
                  {method.icon}
                </div>
                <h4 className="font-semibold text-white mb-2 font-fixedsys">
                  {method.title}
                </h4>
                <p className="text-slate-400 text-sm">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timeline summary */}
        <div className={`bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/30 p-8 text-center ${inView ? 'animate-fadeIn delay-1200' : 'opacity-0'}`}>
          <h3 className="text-xl font-bold font-fixedsys text-white mb-4">
            Результат нашей работы
          </h3>
          <p className="text-slate-400 mb-6 max-w-3xl mx-auto">
            Готовая digital-экосистема для вашей клиники: настроенные рекламные кампании, 
            оптимизированный сайт, активные социальные сети и измеримые результаты уже через месяц
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold font-fixedsys text-teal-400 mb-1">2-4 недели</div>
              <div className="text-slate-400 text-sm">До первых результатов</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-fixedsys text-indigo-400 mb-1">24/7</div>
              <div className="text-slate-400 text-sm">Мониторинг кампаний</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold font-fixedsys text-teal-400 mb-1">300%</div>
              <div className="text-slate-400 text-sm">Средний ROI</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
