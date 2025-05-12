"use client"

import React, { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  Check, 
  Star, 
  Brain, 
  Crown,
  MessageSquare,
  Eye,
  BarChart3,
  Calculator
} from "lucide-react"

export default function AiPackages() {
  const [inView, setInView] = useState(false)
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  const packages = [
    {
      name: "ИИ-Ассистент",
      icon: MessageSquare,
      price: "от 50 000",
      duration: "в месяц",
      description: "Чат-бот для автоматизации общения с пациентами",
      features: [
        "Автоматическая запись на приём",
        "Ответы на частые вопросы",
        "Напоминания о записях",
        "Предварительные консультации",
        "Интеграция с CRM",
        "24/7 поддержка пациентов"
      ],
      popular: false,
      color: "slate",
      gradient: "from-slate-500 to-slate-600"
    },
    {
      name: "Диагностический ИИ",
      icon: Eye,
      price: "от 120 000",
      duration: "в месяц",
      description: "Система анализа медицинских изображений",
      features: [
        "Анализ рентгенов, КТ, МРТ",
        "Автоматическое выявление патологий",
        "Сравнение с базой знаний",
        "Генерация отчётов",
        "Приоритизация критических случаев",
        "Второе мнение для врачей",
        "Обучение на ваших данных",
        "PACS интеграция"
      ],
      popular: true,
      color: "teal",
      gradient: "from-teal-500 to-indigo-600"
    },
    {
      name: "Умная Клиника",
      icon: Crown,
      price: "от 200 000",
      duration: "в месяц",
      description: "Комплексное ИИ-решение для всей клиники",
      features: [
        "Прогнозная аналитика",
        "Персонализированное лечение",
        "Автоматизация документооборота",
        "Управление ресурсами",
        "Система поддержки решений",
        "Мониторинг показателей",
        "Интеграция со всеми системами",
        "Обучение персонала",
        "24/7 техподдержка",
        "Аналитические дашборды"
      ],
      popular: false,
      color: "indigo",
      gradient: "from-indigo-500 to-purple-600"
    }
  ]

  const customSolutions = [
    {
      name: "Разработка под заказ",
      icon: Brain,
      features: [
        "Анализ потребностей",
        "Создание уникального ИИ",
        "Интеграция с текущими системами",
        "Обучение команды"
      ],
      duration: "2-6 месяцев"
    },
    {
      name: "Консультации по ИИ",
      icon: BarChart3,
      features: [
        "Аудит текущих процессов",
        "Рекомендации по внедрению",
        "Выбор подходящих решений",
        "Создание roadmap"
      ],
      duration: "2-4 недели"
    }
  ]

  return (
    <section ref={sectionRef} id="ai-packages" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-3s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Пакеты ИИ-решений
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Готовые{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              ИИ-решения для клиник
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Выберите подходящий пакет или закажите индивидуальное решение под ваши потребности
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon
            return (
              <div 
                key={index} 
                className={`relative bg-slate-900/50 rounded-xl border transition-all hover:shadow-lg hover-lift ${
                  pkg.popular 
                    ? 'border-teal-500 hover:shadow-teal-900/20' 
                    : 'border-slate-800 hover:border-teal-500/30'
                } ${inView ? 'animate-scaleUp' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 200 + 300}ms` }}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold font-fixedsys">
                      Популярный
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${pkg.gradient} flex items-center justify-center mx-auto mb-4 group-hover:animate-iconBounce`}>
                      <IconComponent size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold font-fixedsys text-white mb-2">{pkg.name}</h3>
                    <p className="text-slate-400 text-sm">{pkg.description}</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-3xl font-bold font-fixedsys text-${pkg.color === 'slate' ? 'white' : pkg.color}-400`}>
                        {pkg.price}
                      </span>
                      <span className="text-slate-400">₽</span>
                    </div>
                    <div className="text-slate-500 text-sm mt-1">{pkg.duration}</div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check size={20} className={`text-${pkg.color === 'slate' ? 'green' : pkg.color}-400 mr-3 mt-0.5 flex-shrink-0`} />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className={`w-full ${pkg.popular 
                      ? 'bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700' 
                      : pkg.color === 'indigo'
                      ? 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
                      : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    } font-fixedsys active:animate-buttonClick`}
                    onClick={scrollToContact}
                  >
                    Выбрать пакет
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Индивидуальные решения */}
        <div className={`${inView ? 'animate-fadeIn delay-1000' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold font-fixedsys text-white text-center mb-8">
            Индивидуальные решения
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {customSolutions.map((solution, index) => {
              const IconComponent = solution.icon
              return (
                <div key={index} className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-teal-500/30 transition-all hover-lift">
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-12 h-12 rounded-full bg-${index % 2 === 0 ? 'teal' : 'indigo'}-900/50 flex items-center justify-center`}>
                      <IconComponent size={24} className={`text-${index % 2 === 0 ? 'teal' : 'indigo'}-400`} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold font-fixedsys text-white">{solution.name}</h4>
                      <div className="text-slate-400 text-sm">{solution.duration}</div>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-slate-300 flex items-center text-sm">
                        <span className={`w-1.5 h-1.5 bg-${index % 2 === 0 ? 'teal' : 'indigo'}-400 rounded-full mr-3`}></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>

        {/* Гарантии */}
        <div className={`mt-16 text-center ${inView ? 'animate-fadeIn delay-1200' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-teal-400 font-bold font-fixedsys">Пилотный проект</div>
              <div className="text-slate-500 text-sm">2 недели бесплатного тестирования</div>
            </div>
            <div className="text-center">
              <div className="text-indigo-400 font-bold font-fixedsys">Гарантия результата</div>
              <div className="text-slate-500 text-sm">Или возврат средств</div>
            </div>
            <div className="text-center">
              <div className="text-teal-400 font-bold font-fixedsys">Поддержка 24/7</div>
              <div className="text-slate-500 text-sm">Техническая поддержка</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
