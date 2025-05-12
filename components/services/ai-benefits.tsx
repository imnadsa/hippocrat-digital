"use client"

import React, { useState, useEffect, useRef } from "react"
import { 
  TrendingUp, 
  Clock, 
  DollarSign, 
  Users,
  Brain,
  Shield,
  Target,
  Zap
} from "lucide-react"

export default function AiBenefits() {
  const [inView, setInView] = useState(false)
  const [counters, setCounters] = useState({
    timeReduction: 0,
    accuracyIncrease: 0,
    costSaving: 0,
    patientSatisfaction: 0
  })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          // Анимация счетчиков
          animateCounters()
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const animateCounters = () => {
    const targets = { 
      timeReduction: 65, 
      accuracyIncrease: 92, 
      costSaving: 35, 
      patientSatisfaction: 88 
    }
    const duration = 2000
    const intervals: { [key: string]: NodeJS.Timeout } = {}

    Object.keys(targets).forEach(key => {
      let startValue = 0
      const increment = targets[key as keyof typeof targets] / (duration / 16)
      
      intervals[key] = setInterval(() => {
        startValue += increment
        if (startValue >= targets[key as keyof typeof targets]) {
          startValue = targets[key as keyof typeof targets]
          clearInterval(intervals[key])
        }
        setCounters(prev => ({ ...prev, [key]: Math.round(startValue) }))
      }, 16)
    })
  }

  const benefits = [
    {
      icon: Clock,
      title: "Экономия времени",
      description: "Автоматизация рутинных задач",
      value: `${counters.timeReduction}%`,
      details: "Сокращение времени на диагностику и документооборот",
      color: "teal"
    },
    {
      icon: Target,
      title: "Точность диагностики",
      description: "Повышение качества медицинской помощи",
      value: `${counters.accuracyIncrease}%`,
      details: "Снижение количества ошибок в диагностике",
      color: "indigo"
    },
    {
      icon: DollarSign,
      title: "Снижение затрат",
      description: "Оптимизация операционных расходов",
      value: `${counters.costSaving}%`,
      details: "Сокращение административных и диагностических расходов",
      color: "teal"
    },
    {
      icon: Users,
      title: "Удовлетворенность пациентов",
      description: "Улучшение качества обслуживания",
      value: `${counters.patientSatisfaction}%`,
      details: "Повышение оценок качества медицинских услуг",
      color: "indigo"
    }
  ]

  const additionalBenefits = [
    {
      icon: Brain,
      title: "Интеллектуальная поддержка",
      description: "ИИ помогает врачам принимать более обоснованные решения",
      features: [
        "Анализ больших данных",
        "Выявление скрытых паттернов",
        "Предупреждение о рисках",
        "Персонализированное лечение"
      ]
    },
    {
      icon: Zap,
      title: "Автоматизация процессов",
      description: "Снижение нагрузки на медицинский персонал",
      features: [
        "Автоматическое планирование",
        "Управление очередями",
        "Обработка документов",
        "Мониторинг показателей"
      ]
    },
    {
      icon: Shield,
      title: "Снижение рисков",
      description: "Предотвращение медицинских ошибок",
      features: [
        "Проверка на противопоказания",
        "Контроль дозировок",
        "Мониторинг жизненных показателей",
        "Раннее выявление осложнений"
      ]
    }
  ]

  return (
    <section ref={sectionRef} id="ai-benefits" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-3s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Преимущества ИИ
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Как ИИ{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              трансформирует медицину
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Внедрение ИИ-технологий приносит измеримые результаты для медицинских учреждений
          </p>
        </div>

        {/* Ключевые показатели */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div 
                key={index}
                className={`bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 text-center hover:border-${benefit.color}-500/30 transition-all hover-lift hover-glow ${
                  inView ? 'animate-scaleUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150 + 300}ms` }}
              >
                <div className={`w-14 h-14 rounded-full bg-${benefit.color}-900/50 flex items-center justify-center mx-auto mb-4 group-hover:animate-iconBounce`}>
                  <IconComponent size={28} className={`text-${benefit.color}-400`} />
                </div>
                <div className={`text-3xl md:text-4xl font-bold font-fixedsys text-${benefit.color}-400 mb-2`}>
                  {benefit.value}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-fixedsys">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-sm mb-3">
                  {benefit.description}
                </p>
                <p className="text-slate-500 text-xs">
                  {benefit.details}
                </p>
              </div>
            )
          })}
        </div>

        {/* Дополнительные преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {additionalBenefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div 
                key={index}
                className={`bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-teal-500/30 transition-all hover-lift hover-glow ${
                  inView ? 'animate-scaleUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200 + 800}ms` }}
              >
                <div className={`w-14 h-14 rounded-full bg-${index % 2 === 0 ? 'teal' : 'indigo'}-900/50 flex items-center justify-center mb-5 group-hover:animate-iconBounce`}>
                  <IconComponent size={28} className={`text-${index % 2 === 0 ? 'teal' : 'indigo'}-400`} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-fixedsys text-white">{benefit.title}</h3>
                <p className="text-slate-400 mb-4">{benefit.description}</p>
                
                <ul className="space-y-2">
                  {benefit.features.map((feature, featureIndex) => (
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

        {/* ROI калькулятор */}
        <div className={`mt-16 ${inView ? 'animate-fadeIn delay-1200' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/30 p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-fixedsys text-white mb-4">
                Финансовая эффективность ИИ
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                В среднем клиники окупают инвестиции в ИИ-решения через 8-12 месяцев
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold font-fixedsys text-teal-400 mb-2">6-8 мес</div>
                <div className="text-slate-400 text-sm">Срок окупаемости</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold font-fixedsys text-indigo-400 mb-2">250-400%</div>
                <div className="text-slate-400 text-sm">ROI за первый год</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold font-fixedsys text-teal-400 mb-2">20-40%</div>
                <div className="text-slate-400 text-sm">Снижение операционных расходов</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
