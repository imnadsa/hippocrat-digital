"use client"

import { useState, useEffect, useRef } from "react"
import { 
  Shield, 
  Users, 
  TrendingUp, 
  Clock,
  Award,
  Heart,
  Lightbulb,
  Headphones
} from "lucide-react"

export default function ServicesBenefits() {
  const [inView, setInView] = useState(false)
  const [counters, setCounters] = useState({
    retention: 0,
    recommendation: 0,
    products: 0,
    experience: 0
  })
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          animateCounters()
        }
      },
      { threshold: 0.3 }
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

  const animateCounters = () => {
    const targets = { retention: 98, recommendation: 100, products: 1, experience: 5 }
    const duration = 2000
    const intervals: { [key: string]: NodeJS.Timeout } = {}

    Object.keys(targets).forEach(key => {
      let startValue = 0
      const typedKey = key as keyof typeof targets;
      const increment = targets[typedKey] / (duration / 16)
      
      intervals[key] = setInterval(() => {
        startValue += increment
        if (startValue >= targets[typedKey]) {
          startValue = targets[typedKey]
          clearInterval(intervals[key])
        }
        setCounters(prev => ({ ...prev, [typedKey]: Math.round(startValue) }))
      }, 16)
    })
  }

  const benefits = [
    {
      icon: Heart,
      title: "Медицинская экспертиза",
      description: "Глубокое понимание специфики здравоохранения",
      details: "Знаем требования ФЗ-38, особенности медицинской этики и потребности пациентов. Все решения создаются с учетом отраслевой специфики.",
      color: "teal"
    },
    {
      icon: Shield,
      title: "Соблюдение законодательства",
      description: "100% соответствие всем требованиям",
      details: "Все наши решения соответствуют 152-ФЗ, ФЗ-38 о рекламе и другим нормативным актам в сфере здравоохранения.",
      color: "indigo"
    },
    {
      icon: TrendingUp,
      title: "Измеримые результаты",
      description: "Каждое действие приносит конкретную пользу",
      details: "Устанавливаем KPI и регулярно отчитываемся о достижении целей. Вы всегда видите ROI от наших услуг.",
      color: "teal"
    },
    {
      icon: Users,
      title: "Выделенная команда",
      description: "Персональные менеджеры и специалисты",
      details: "За каждым проектом закрепляется персональная команда, которая изучает вашу клинику и работает на результат.",
      color: "indigo"
    },
    {
      icon: Lightbulb,
      title: "Инновационный подход",
      description: "Современные технологии и методы",
      details: "Используем последние достижения в digital-маркетинге и технологиях, адаптируя их под медицинскую отрасль.",
      color: "teal"
    },
    {
      icon: Headphones,
      title: "Поддержка 24/7",
      description: "Всегда на связи когда нужно",
      details: "Техническая поддержка, экстренные ситуации, вопросы по проектам — мы отвечаем быстро в любое время.",
      color: "indigo"
    }
  ]

  const stats = [
    {
      value: counters.retention,
      suffix: "%",
      label: "Клиентов остаются",
      description: "Продлевают сотрудничество с нами",
      color: "teal"
    },
    {
      value: counters.recommendation,
      suffix: "%",
      label: "Клиентов по рекомендации",
      description: "Приходят по совету коллег и партнеров",
      color: "indigo"
    },
    {
      value: counters.products,
      suffix: "",
      label: "Собственный продукт",
      description: "Разработали AI-решение для клиник",
      color: "teal"
    },
    {
      value: counters.experience,
      suffix: " лет",
      label: "Опыта в медицине",
      description: "Специализация на health-маркетинге",
      color: "indigo"
    }
  ]

  return (
    <section ref={sectionRef} id="services-benefits" className="py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Почему выбирают нас
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Наши{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              конкурентные преимущества
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Более 5 лет специализируемся исключительно на медицинском маркетинге. 
            Знаем специфику отрасли и добиваемся результатов.
          </p>
        </div>

        {/* Статистика */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className={`bg-slate-900/40 rounded-xl border border-slate-700/30 p-6 text-center hover:border-${stat.color}-500/30 transition-all hover-lift hover-glow ${
                inView ? 'animate-scaleUp' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150 + 300}ms` }}
            >
              <div className={`text-3xl md:text-4xl font-bold font-fixedsys text-${stat.color}-400 mb-2`}>
                {stat.value}{stat.suffix}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-fixedsys">
                {stat.label}
              </h3>
              <p className="text-slate-400 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Преимущества */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => {
            const IconComponent = benefit.icon
            return (
              <div 
                key={index}
                className={`bg-slate-900/40 rounded-xl border border-slate-700/30 p-6 hover:border-${benefit.color}-500/30 transition-all hover-lift hover-glow group ${
                  inView ? 'animate-slideInStagger' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 600}ms` }}
              >
                <IconComponent size={36} className={`text-${benefit.color}-400 mb-5`} />
                <h3 className="text-xl font-semibold mb-3 font-fixedsys text-white group-hover:text-teal-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {benefit.description}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {benefit.details}
                </p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
