"use client"

import { useState, useEffect, useRef } from "react"
import { 
  PenTool, 
  Video, 
  BookOpen, 
  Heart, 
  Calendar,
  Camera,
  Stethoscope,
  Award
} from "lucide-react"

export default function SmmStrategy() {
  const [inView, setInView] = useState(false)
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

    return () => {
      if(sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const contentTypes = [
    {
      icon: PenTool,
      title: "Экспертный контент",
      description: "Статьи о здоровье, профилактике, медицинских новостях",
      color: "teal",
      examples: ["Как предотвратить кариес", "5 признаков проблем с позвоночником", "Новые методы лечения"]
    },
    {
      icon: Video,
      title: "Видео-контент",
      description: "Экскурсии по клинике, интервью с врачами, процедуры",
      color: "indigo",
      examples: ["Behind the scenes", "Интервью с главврачом", "Видео-отзывы пациентов"]
    },
    {
      icon: Heart,
      title: "Stories и Reels",
      description: "Динамичный контент для вовлечения аудитории",
      color: "teal",
      examples: ["Рабочий день врача", "До/после результаты", "Полезные лайфхаки"]
    },
    {
      icon: BookOpen,
      title: "Образовательный",
      description: "Инфографика, карточки с фактами, медицинские термины",
      color: "indigo",
      examples: ["Анатомический атлас", "Мифы о здоровье", "Первая помощь"]
    },
    {
      icon: Calendar,
      title: "Праздники и акции",
      description: "Поздравления с праздниками, сезонные предложения",
      color: "teal",
      examples: ["День врача", "Международный день сердца", "Новогодние скидки"]
    },
    {
      icon: Camera,
      title: "Фото-контент",
      description: "Команда врачей, оборудование, интерьеры клиники",
      color: "indigo",
      examples: ["Портреты команды", "Современное оборудование", "Уютные кабинеты"]
    }
  ]

  return (
    <section ref={sectionRef} id="smm-strategy" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-5s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Контент-стратегия
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Типы контента для{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              медицинских клиник
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Создаём разнообразный и ценный контент, который привлекает пациентов и повышает доверие к клинике
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentTypes.map((type, index) => {
            const IconComponent = type.icon
            return (
              <div 
                key={index} 
                className={`bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-${type.color}-500/30 transition-all hover-lift hover-glow ${
                  inView ? 'animate-scaleUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100 + 300}ms` }}
              >
                <IconComponent size={36} className={`text-${type.color}-400 mb-5`} />
                <h3 className="text-xl font-semibold mb-3 font-fixedsys text-white">{type.title}</h3>
                <p className="text-slate-400 mb-4">{type.description}</p>
                
                <div className="space-y-2">
                  <p className="text-slate-500 text-sm font-medium">Примеры:</p>
                  {type.examples.map((example, exampleIndex) => (
                    <div key={exampleIndex} className="flex items-center text-xs">
                      <span className={`w-1.5 h-1.5 bg-${type.color}-400 rounded-full mr-2`}></span>
                      <span className="text-slate-400">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className={`mt-12 bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/30 p-8 ${inView ? 'animate-fadeIn delay-1000' : 'opacity-0'}`}>
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Stethoscope size={36} className="text-teal-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2 font-fixedsys">Медицинская этика</h4>
                <p className="text-slate-400 text-sm">Весь контент соответствует этическим нормам и требованиям ФЗ-38</p>
              </div>
              
              <div className="text-center">
                <Award size={36} className="text-indigo-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2 font-fixedsys">Экспертность</h4>
                <p className="text-slate-400 text-sm">Контент создаётся с участием врачей и проверяется специалистами</p>
              </div>
              
              <div className="text-center">
                <Calendar size={36} className="text-teal-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2 font-fixedsys">Регулярность</h4>
                <p className="text-slate-400 text-sm">Контент-план на месяц вперёд, постинг по расписанию</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
