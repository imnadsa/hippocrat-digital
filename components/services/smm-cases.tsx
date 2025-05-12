"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  ArrowUpRight, 
  Instagram, 
  Users, 
  Heart, 
  TrendingUp,
  Calendar,
  Stethoscope
} from "lucide-react"

export default function SmmCases() {
  const [inView, setInView] = useState(false)
  const [activeCase, setActiveCase] = useState(0)
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

  const cases = [
    {
      title: "Косметологическая клиника «Лаборатория красоты»",
      category: "Косметология",
      platform: "Instagram",
      duration: "8 месяцев",
      description: "Продвижение процедур омоложения и эстетической медицины через Instagram",
      challenge: "Низкая узнаваемость бренда и отсутствие целевой аудитории в соцсетях",
      solution: [
        "Создание контент-стратегии с акцентом на результаты",
        "Сотрудничество с beauty-блогерами",
        "Запуск интерактивных stories и конкурсов",
        "Образовательный контент о процедурах"
      ],
      results: [
        { metric: "+280%", label: "Рост подписчиков", icon: Users },
        { metric: "15.3%", label: "Engagement Rate", icon: Heart },
        { metric: "+45%", label: "Записей из Instagram", icon: Calendar },
        { metric: "2.5M", label: "Охватов в месяц", icon: TrendingUp }
      ],
      highlights: [
        "Контент с результатами процедур набирал до 50K просмотров",
        "Запущены Instagram Shopping с прямой записью на процедуры",
        "Средний чек с Instagram-клиентов на 30% выше"
      ]
    },
    {
      title: "Стоматологическая клиника «Семейный дантист»",
      category: "Стоматология",
      platform: "Facebook + Instagram",
      duration: "6 месяцев",
      description: "Мультиплатформенная стратегия для привлечения семейных пациентов",
      challenge: "Необходимость привлечения и взрослых, и детей, и подростков",
      solution: [
        "Разные контент-стратегии для Facebook и Instagram",
        "Образовательный контент для родителей",
        "Развлекательный контент для детей",
        "Кроссплатформенные рекламные кампании"
      ],
      results: [
        { metric: "+180%", label: "Общий рост подписчиков", icon: Users },
        { metric: "12.8%", label: "Средний Engagement", icon: Heart },
        { metric: "+60%", label: "Семейных пациентов", icon: Calendar },
        { metric: "1.8M", label: "Суммарный охват", icon: TrendingUp }
      ],
      highlights: [
        "Facebook привёл больше взрослых пациентов",
        "Instagram эффективнее для подростков",
        "Комплексные семейные планы лечения через соцсети"
      ]
    },
    {
      title: "Медицинский центр «Здоровье+»",
      category: "Многопрофильный центр",
      platform: "ВКонтакте + YouTube",
      duration: "10 месяцев",
      description: "Образовательная стратегия с врачами-экспертами",
      challenge: "Множество направлений, сложности с позиционированием",
      solution: [
        "Создание экспертных каналов по направлениям",
        "Еженедельные прямые эфиры с врачами",
        "Серия образовательных видео",
        "Интеграция с сайтом и CRM"
      ],
      results: [
        { metric: "+320%", label: "Подписчиков ВК", icon: Users },
        { metric: "25K", label: "Подписчиков YouTube", icon: Heart },
        { metric: "+40%", label: "Записей через соцсети", icon: Calendar },
        { metric: "3.5M", label: "Просмотров видео", icon: TrendingUp }
      ],
      highlights: [
        "YouTube-канал принёс 25% новых пациентов",
        "Врачи стали узнаваемыми экспертами",
        "Снижение стоимости лида на 35%"
      ]
    }
  ]

  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section ref={sectionRef} id="smm-cases" className="py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-6s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Кейсы
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Успешные кейсы{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              SMM-продвижения
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Реальные примеры того, как мы помогаем медицинским клиникам расти в социальных сетях
          </p>
        </div>

        {/* Навигация по кейсам */}
        <div className={`flex flex-wrap justify-center gap-4 mb-8 ${inView ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          {cases.map((caseItem, index) => (
            <button
              key={index}
              onClick={() => setActiveCase(index)}
              className={`px-4 py-2 rounded-lg font-fixedsys transition-all hover-lift ${
                activeCase === index
                  ? 'bg-gradient-to-r from-teal-500 to-indigo-600 text-white'
                  : 'bg-slate-800/50 text-slate-400 hover:text-white'
              }`}
            >
              {caseItem.category}
            </button>
          ))}
        </div>

        {/* Контент активного кейса */}
        <div className={`bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden ${inView ? 'animate-fadeIn delay-400' : 'opacity-0'}`}>
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Основная информация */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-teal-500 to-indigo-600 flex items-center justify-center">
                    <Stethoscope size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-fixedsys text-white">{cases[activeCase].title}</h3>
                    <div className="flex items-center gap-4 text-sm text-slate-400">
                      <span>{cases[activeCase].platform}</span>
                      <span>•</span>
                      <span>{cases[activeCase].duration}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-300 mb-6">{cases[activeCase].description}</p>

                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold font-fixedsys text-white mb-3">Вызов</h4>
                    <p className="text-slate-400">{cases[activeCase].challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-bold font-fixedsys text-white mb-3">Решение</h4>
                    <ul className="space-y-2">
                      {cases[activeCase].solution.map((item, index) => (
                        <li key={index} className="text-slate-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3 mt-2"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold font-fixedsys text-white mb-3">Ключевые достижения</h4>
                    <ul className="space-y-2">
                      {cases[activeCase].highlights.map((highlight, index) => (
                        <li key={index} className="text-slate-300 flex items-start">
                          <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-3 mt-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Метрики */}
              <div className="space-y-6">
                <h4 className="font-bold font-fixedsys text-white">Результаты</h4>
                <div className="space-y-4">
                  {cases[activeCase].results.map((result, index) => {
                    const IconComponent = result.icon
                    return (
                      <div key={index} className="bg-slate-800/30 rounded-lg p-4 hover-lift transition-all">
                        <div className="flex items-center gap-3 mb-2">
                          <div className="w-8 h-8 rounded-full bg-teal-900/50 flex items-center justify-center">
                            <IconComponent size={16} className="text-teal-400" />
                          </div>
                          <span className="text-slate-400 text-sm">{result.label}</span>
                        </div>
                        <div className="text-2xl font-bold font-fixedsys text-white ml-11">
                          {result.metric}
                        </div>
                      </div>
                    )
                  })}
                </div>

                <Button
                  variant="outline"
                  className="w-full border-slate-700 text-slate-300 hover:bg-slate-800/50 group mt-6"
                  onClick={() => openExternalLink("#")}
                >
                  <span>Подробный кейс</span>
                  <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
