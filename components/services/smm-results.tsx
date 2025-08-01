"use client"

import { useState, useEffect, useRef } from "react"
import { 
  Users, 
  Heart, 
  MessageSquare, 
  Calendar,
  TrendingUp,
  Eye,
  Share2,
  UserPlus
} from "lucide-react"

export default function SmmResults() {
  const [inView, setInView] = useState(false)
  const [counters, setCounters] = useState({
    followers: 0,
    engagement: 0,
    reach: 0,
    appointments: 0
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
    const targets = { followers: 3000, engagement: 87, reach: 70000, appointments: 45 }
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

  const results = [
    {
      icon: UserPlus,
      value: counters.followers.toLocaleString(),
      suffix: "+",
      label: "Новых подписчиков в месяц",
      color: "teal",
      description: "Органический рост аудитории"
    },
    {
      icon: Heart,
      value: counters.engagement,
      suffix: "%",
      label: "Средний Engagement Rate",
      color: "indigo",
      description: "Выше среднего по отрасли"
    },
    {
      icon: Eye,
      value: (counters.reach / 1000).toFixed(0),
      suffix: "K",
      label: "Охват в месяц",
      color: "teal",
      description: "Уникальные пользователи"
    },
    {
      icon: Calendar,
      value: counters.appointments,
      suffix: "+",
      label: "Дополнительных записей из соцсетей",
      color: "indigo",
      description: "Прямая конверсия в пациентов"
    }
  ]

  const caseStudy = {
    clinic: "Офтальмологическая клиника 'Ясный Взор'",
    duration: "6 месяцев",
    before: {
      followers: "4,800",
      reach: "95K охватов за июль 2025"
    },
    after: {
      followers: "5,400",
      newFollowers: "400+ за 2 месяца"
    },
    results: [
      "+35% пациентов из соцсетей",
      "+45% узнаваемости бренда", 
      "-25% стоимость привлечения",
      "Получена галочка верификации"
    ]
  }

  return (
    <section ref={sectionRef} id="smm-results" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-4s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Результаты
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Результаты{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              SMM-продвижения
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Средние показатели медицинских клиник после 6 месяцев работы с нами
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {results.map((result, index) => {
            const IconComponent = result.icon
            return (
              <div 
                key={index} 
                className={`bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 text-center hover:border-${result.color}-500/30 transition-all hover-lift hover-glow ${
                  inView ? 'animate-scaleUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150 + 300}ms` }}
              >
                <IconComponent size={36} className={`text-${result.color}-400 mx-auto mb-4`} />
                <div className={`text-3xl md:text-4xl font-bold font-fixedsys text-${result.color}-400 mb-2`}>
                  {result.value}{result.suffix}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 font-fixedsys">
                  {result.label}
                </h3>
                <p className="text-slate-400 text-sm">
                  {result.description}
                </p>
              </div>
            )
          })}
        </div>

        <div className={`bg-gradient-to-r from-slate-800/40 to-slate-900/40 rounded-xl border border-slate-700/30 overflow-hidden ${inView ? 'animate-fadeIn delay-800' : 'opacity-0'}`}>
          <div className="p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold font-fixedsys text-white mb-2">
                Кейс: {caseStudy.clinic}
              </h3>
              <p className="text-slate-400">
                Результаты за {caseStudy.duration} работы
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="font-bold font-fixedsys text-white mb-4">Итоговые результаты:</h4>
                <div className="bg-slate-800/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Подписчики:</span>
                    <div className="text-right">
                      <div className="text-teal-400 font-fixedsys text-lg">{caseStudy.after.followers}</div>
                      <div className="text-slate-500 text-sm">было: {caseStudy.before.followers}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-800/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Новые подписчики:</span>
                    <div className="text-teal-400 font-fixedsys text-lg">{caseStudy.after.newFollowers}</div>
                  </div>
                </div>
                <div className="bg-slate-800/30 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Охват:</span>
                    <div className="text-teal-400 font-fixedsys text-lg">{caseStudy.before.reach}</div>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-bold font-fixedsys text-white mb-4">Достижения:</h4>
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-center p-4 bg-slate-800/30 rounded-lg hover-lift transition-all">
                    <TrendingUp size={24} className="text-teal-400 mr-4 flex-shrink-0" />
                    <span className="text-slate-300">{result}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 p-4 bg-indigo-900/20 rounded-lg border border-indigo-500/30">
              <p className="text-slate-300 text-sm">
                <span className="font-semibold text-indigo-400">{caseStudy.clinic}</span> за счет SMM и рекламы 
                за 2 месяца работы удалось привлечь более 400 новых подписчиков и получить галочки верификации.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
