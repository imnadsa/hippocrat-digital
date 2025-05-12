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
    const targets = { followers: 15000, engagement: 87, reach: 250000, appointments: 45 }
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
    clinic: "Стоматология 'Белые Зубки'",
    duration: "6 месяцев",
    before: {
      followers: "2,500",
      engagement: "2.1%",
      posts: "1-2 в неделю"
    },
    after: {
      followers: "18,200",
      engagement: "8.5%",
      posts: "5-7 в неделю"
    },
    results: [
      "+35% пациентов из соцсетей",
      "+45% узнаваемости бренда",
      "-25% стоимость привлечения"
    ]
  }

  return (
    <section ref={sectionRef} id="smm-results" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
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

        {/* Основные метрики */}
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
                <div className={`w-14 h-14 rounded-full bg-${result.color}-900/50 flex items-center justify-center mx-auto mb-4 group-hover:animate-iconBounce`}>
                  <IconComponent size={28} className={`text-${result.color}-400`} />
                </div>
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

        {/* Детальный кейс */}
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
              {/* До и после */}
              <div className="space-y-6">
                <div className="bg-slate-800/30 rounded-lg p-6">
                  <h4 className="font-bold font-fixedsys text-slate-300 mb-4 text-center">До работы с нами</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-400">Подписчики:</span>
                      <span className="text-white font-fixedsys">{caseStudy.before.followers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Engagement:</span>
                      <span className="text-white font-fixedsys">{caseStudy.before.engagement}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-400">Посты:</span>
                      <span className="text-white font-fixedsys">{caseStudy.before.posts}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-teal-900/30 to-indigo-900/30 rounded-lg p-6 border border-teal-500/30">
                  <h4 className="font-bold font-fixedsys text-teal-400 mb-4 text-center">После 6 месяцев</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Подписчики:</span>
                      <span className="text-teal-400 font-fixedsys">{caseStudy.after.followers}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Engagement:</span>
                      <span className="text-teal-400 font-fixedsys">{caseStudy.after.engagement}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Посты:</span>
                      <span className="text-teal-400 font-fixedsys">{caseStudy.after.posts}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Результаты */}
              <div className="space-y-4">
                <h4 className="font-bold font-fixedsys text-white mb-4">Итоговые результаты:</h4>
                {caseStudy.results.map((result, index) => (
                  <div key={index} className="flex items-center p-4 bg-slate-800/30 rounded-lg hover-lift transition-all">
                    <div className="w-8 h-8 rounded-full bg-teal-900/50 flex items-center justify-center mr-4">
                      <TrendingUp size={16} className="text-teal-400" />
                    </div>
                    <span className="text-slate-300">{result}</span>
                  </div>
                ))}

                <div className="mt-6 p-4 bg-indigo-900/20 rounded-lg border border-indigo-500/30">
                  <p className="text-slate-300 text-sm">
                    <span className="font-semibold text-indigo-400">{caseStudy.clinic}</span> увеличила количество пациентов на 35% за счёт SMM, 
                    при этом снизив стоимость привлечения на 25%.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
