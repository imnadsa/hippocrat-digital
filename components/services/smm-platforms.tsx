"use client"

import { useState, useEffect, useRef } from "react"
import React from "react"
import { 
  Instagram, 
  Facebook, 
  MessageCircle,
  Youtube,
  Users,
  TrendingUp,
  Eye
} from "lucide-react"

export default function SmmPlatforms() {
  const [inView, setInView] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
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

  const platforms = [
    {
      name: "Instagram",
      icon: Instagram,
      color: "pink",
      bg: "from-pink-500 to-rose-500",
      description: "Идеально для визуального контента",
      audience: "25-45 лет, женщины 60%",
      bestFor: ["Эстетическая медицина", "Стоматология", "Косметология"],
      features: ["Stories", "Reels", "IGTV", "Shopping"]
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "blue",
      bg: "from-blue-500 to-blue-600",
      description: "Широкая аудитория всех возрастов",
      audience: "30-60 лет, равномерно",
      bestFor: ["Многопрофильные клиники", "Семейная медицина", "Педиатрия"],
      features: ["События", "Группы", "Реклама", "Мессенджер"]
    },
    {
      name: "ВКонтакте",
      icon: MessageCircle,
      color: "indigo",
      bg: "from-indigo-500 to-purple-600",
      description: "Популярна в России и СНГ",
      audience: "18-45 лет, активные пользователи",
      bestFor: ["Все виды медицинских услуг", "Образовательный контент"],
      features: ["Записи", "Клипы", "Подкасты", "События"]
    },
    {
      name: "YouTube",
      icon: Youtube,
      color: "red",
      bg: "from-red-500 to-red-600",
      description: "Длинный видео-контент",
      audience: "Все возрасты, долгий просмотр",
      bestFor: ["Образовательные видео", "Интервью с врачами", "Процедуры"],
      features: ["Видео", "Shorts", "Прямой эфир", "Плейлисты"]
    }
  ]

  return (
    <section ref={sectionRef} id="smm-platforms" className="py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Социальные платформы
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Выбираем{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              подходящие платформы
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Каждая социальная сеть имеет свою специфику. Мы подбираем оптимальные платформы под ваш тип клиники
          </p>
        </div>

        {/* Табы для платформ */}
        <div className={`flex flex-wrap justify-center gap-4 mb-8 ${inView ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover-lift ${
                  activeTab === index
                    ? 'bg-gradient-to-r ' + platform.bg + ' text-white'
                    : 'bg-slate-800/50 text-slate-400 hover:text-white'
                }`}
              >
                <IconComponent size={20} />
                <span className="font-fixedsys">{platform.name}</span>
              </button>
            )
          })}
        </div>

        {/* Контент активной платформы */}
        <div className={`bg-slate-900/50 rounded-xl border border-slate-800 p-8 ${inView ? 'animate-fadeIn delay-400' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${platforms[activeTab].bg} flex items-center justify-center shadow-lg`}>
                  {React.createElement(platforms[activeTab].icon, { size: 32, className: "text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-fixedsys text-white">{platforms[activeTab].name}</h3>
                  <p className="text-slate-400">{platforms[activeTab].description}</p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={16} className="text-teal-400" />
                    <span className="font-semibold font-fixedsys text-white">Целевая аудитория</span>
                  </div>
                  <p className="text-slate-300">{platforms[activeTab].audience}</p>
                </div>

                <div className="p-4 bg-slate-800/30 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={16} className="text-indigo-400" />
                    <span className="font-semibold font-fixedsys text-white">Лучше всего подходит для</span>
                  </div>
                  <ul className="space-y-1">
                    {platforms[activeTab].bestFor.map((item, index) => (
                      <li key={index} className="text-slate-300 flex items-center">
                        <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <div className="p-6 bg-slate-800/30 rounded-lg">
                <div className="flex items-center gap-2 mb-4">
                  <Eye size={16} className="text-teal-400" />
                  <span className="font-semibold font-fixedsys text-white">Основные форматы</span>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  {platforms[activeTab].features.map((feature, index) => (
                    <div key={index} className="p-3 bg-slate-700/30 rounded-lg text-center group hover-lift transition-all">
                      <span className="text-slate-300 group-hover:text-white font-fixedsys">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 p-6 bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-lg border border-teal-500/30">
                <h4 className="font-bold font-fixedsys text-white mb-3">Статистика эффективности</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold font-fixedsys text-teal-400 mb-1">
                      {activeTab === 0 ? '15%' : activeTab === 1 ? '12%' : activeTab === 2 ? '18%' : '8%'}
                    </div>
                    <div className="text-slate-400 text-xs">Средний Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold font-fixedsys text-indigo-400 mb-1">
                      {activeTab === 0 ? '320₽' : activeTab === 1 ? '280₽' : activeTab === 2 ? '250₽' : '450₽'}
                    </div>
                    <div className="text-slate-400 text-xs">Стоимость лида</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 ${inView ? 'animate-fadeInUp delay-600' : 'opacity-0'}`}>
          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 text-center hover-lift hover-glow transition-all">
            <Instagram size={32} className="mx-auto text-pink-400 mb-3" />
            <h4 className="font-bold font-fixedsys text-white mb-2">Instagram</h4>
            <p className="text-slate-400 text-sm">Лучше всего для эстетических направлений</p>
          </div>
          
          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 text-center hover-lift hover-glow transition-all">
            <Facebook size={32} className="mx-auto text-blue-400 mb-3" />
            <h4 className="font-bold font-fixedsys text-white mb-2">Facebook</h4>
            <p className="text-slate-400 text-sm">Широкий охват для семейных клиник</p>
          </div>
          
          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 text-center hover-lift hover-glow transition-all">
            <MessageCircle size={32} className="mx-auto text-indigo-400 mb-3" />
            <h4 className="font-bold font-fixedsys text-white mb-2">ВКонтакте</h4>
            <p className="text-slate-400 text-sm">Эффективна в России и СНГ</p>
          </div>
        </div>
      </div>
    </section>
  )
}
