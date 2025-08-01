"use client"

import { useState, useEffect, useRef } from "react"
import { 
  FileText, 
  Shield, 
  Calendar, 
  Phone
} from "lucide-react"

export default function WebsitesFeatures() {
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
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const mainFeatures = [
    {
      icon: Calendar,
      title: "Система записи онлайн",
      description: "Интеграция с CRM клиники",
      details: "Автоматическая синхронизация с расписанием врачей, SMS-уведомления, календарь свободных слотов.",
      percentage: 95
    },
    {
      icon: Shield,
      title: "Соответствие 152-ФЗ",
      description: "Защита персональных данных",
      details: "Согласие на обработку данных, SSL-шифрование, защищённые формы, политика конфиденциальности.",
      percentage: 100
    },
    {
      icon: FileText,
      title: "Медицинская документация",
      description: "Лицензии и сертификаты",
      details: "Размещение лицензий, дипломов врачей, сертификатов качества с возможностью проверки подлинности.",
      percentage: 98
    },
    {
      icon: Phone,
      title: "Мгновенная связь",
      description: "Множественные каналы связи",
      details: "Click-to-call, онлайн-чат, WhatsApp, Telegram, обратный звонок за 30 секунд.",
      percentage: 92
    }
  ]

  const additionalFeatures = [
    {
      title: "Интерактивная карта",
      description: "Удобная навигация к клинике"
    },
    {
      title: "Онлайн консультации",
      description: "Телемедицина и видеосвязь"
    },
    {
      title: "Система отзывов",
      description: "Управление репутацией"
    },
    {
      title: "Личный кабинет",
      description: "История визитов и результаты"
    }
  ]

  return (
    <section ref={sectionRef} id="websites-features" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Особенности
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Ключевые возможности{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              медицинских сайтов
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Каждый сайт включает специализированные функции для работы с пациентами и соответствует всем требованиям медицинской отрасли
          </p>
        </div>

        {/* Основные функции */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {mainFeatures.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div 
                key={index} 
                className={`bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-teal-500/30 transition-all hover-lift hover-glow ${
                  inView ? 'animate-scaleUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200 + 300}ms` }}
              >
                <div className="flex items-start gap-5">
                  <IconComponent size={32} className="text-teal-400 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2 font-fixedsys text-white">
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 text-sm mb-4">
                      {feature.description}
                    </p>
                    
                    <div className="animate-fadeIn">
                      <p className="text-slate-300 text-xs mb-4">
                        {feature.details}
                      </p>
                      <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-teal-500 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                          style={{ width: inView ? `${feature.percentage}%` : '0%' }}
                        ></div>
                      </div>
                      <div className="text-right mt-1">
                        <span className="text-teal-400 text-xs font-fixedsys">{feature.percentage}% клиентов используют</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Дополнительные функции */}
        <div className={`${inView ? 'animate-fadeInUp delay-800' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold font-fixedsys text-white text-center mb-8">
            Дополнительные возможности
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalFeatures.map((feature, index) => {
              return (
                <div 
                  key={index} 
                  className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 text-center hover:border-indigo-500/30 transition-all hover-lift group"
                >
                  <div className="flex items-center justify-center mb-4 sm:mb-6">
                    <div className={`
                      text-2xl sm:text-3xl font-bold font-fixedsys text-indigo-400
                      px-4 py-2 rounded-xl bg-indigo-900/50 backdrop-blur-sm
                      min-w-[3rem] min-h-[3rem] flex items-center justify-center
                      shadow-lg group-hover:scale-110 transition-all duration-300
                    `}>
                      {index + 1}
                    </div>
                  </div>
                  <h4 className="font-semibold font-fixedsys text-white mb-2">{feature.title}</h4>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA секция */}
        <div className={`mt-16 bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/30 p-8 text-center ${inView ? 'animate-fadeIn delay-1000' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold font-fixedsys text-white mb-4">
            Готовы получить сайт с такими возможностями?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Наши сайты не только красивые, но и функциональные. Каждая функция тщательно продумана для максимального удобства пациентов и эффективности работы клиники.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white rounded-lg font-fixedsys transition-all hover-lift active:animate-buttonClick"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Заказать разработку
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
