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
    clients: 0,
    experience: 0,
    retention: 0,
    projects: 0
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
    const targets = { clients: 150, experience: 5, retention: 98, projects: 500 }
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
      value: counters.clients,
      suffix: "+",
      label: "Медицинских клиентов",
      description: "Доверяют нам свой маркетинг",
      color: "teal"
    },
    {
      value: counters.experience,
      suffix: " лет",
      label: "Опыта в медицине",
      description: "Специализации на health-маркетинге",
      color: "indigo"
    },
    {
      value: counters.retention,
      suffix: "%",
      label: "Клиентов остаются",
      description: "Продлевают сотрудничество",
      color: "teal"
    },
    {
      value: counters.projects,
      suffix: "+",
      label: "Реализованных проектов",
      description: "Успешно завершенных кампаний",
      color: "indigo"
    }
  ]

  const testimonials = [
    {
      text: "Работаем с командой уже 3 года. Количество пациентов выросло в 2.5 раза, а средний чек увеличился на 40%.",
      author: "Иванова М.А.",
      position: "Главный врач стоматологии «Белая улыбка»",
      avatar: "👩‍⚕️"
    },
    {
      text: "Благодаря внедрению ИИ-решений мы автоматизировали 60% рутинных процессов и улучшили качество диагностики.",
      author: "Петров С.В.",
      position: "Директор медицинского центра «Здоровье+»",
      avatar: "👨‍⚕️"
    },
    {
      text: "SMM-стратегия помогла нам стать узнаваемым брендом в косметологии. Записи через Instagram выросли на 300%.",
      author: "Сидорова А.И.",
      position: "Владелица клиники эстетической медицины",
      avatar: "👩‍💼"
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

        {/* Отзывы */}
        <div className={`${inView ? 'animate-fadeInUp delay-1000' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold font-fixedsys text-white text-center mb-8">
            Что говорят наши клиенты
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover-lift transition-all"
              >
                <blockquote className="text-slate-300 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="flex items-center gap-3">
                  <div className="text-2xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-white font-fixedsys">
                      {testimonial.author}
                    </div>
                    <div className="text-slate-400 text-xs">
                      {testimonial.position}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Сертификаты и партнеры */}
        <div className={`mt-16 bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/30 p-8 ${inView ? 'animate-fadeIn delay-1200' : 'opacity-0'}`}>
          <div className="text-center">
            <h3 className="text-xl font-bold font-fixedsys text-white mb-6">
              Наши партнеры и сертификации
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center">
                <Award size={36} className="text-teal-400 mb-2" />
                <span className="text-slate-400 text-sm text-center">Сертифицированные специалисты Google Ads</span>
              </div>
              <div className="flex flex-col items-center">
                <Award size={36} className="text-indigo-400 mb-2" />
                <span className="text-slate-400 text-sm text-center">Яндекс.Директ экспертиза</span>
              </div>
              <div className="flex flex-col items-center">
                <Award size={36} className="text-teal-400 mb-2" />
                <span className="text-slate-400 text-sm text-center">Facebook Business Partner</span>
              </div>
              <div className="flex flex-col items-center">
                <Award size={36} className="text-indigo-400 mb-2" />
                <span className="text-slate-400 text-sm text-center">Участники РАР</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
