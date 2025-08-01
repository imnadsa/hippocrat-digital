"use client"

import { useState, useEffect, useRef } from "react"
import React from "react"
import { 
  Users,
  TrendingUp,
  Eye
} from "lucide-react"

// Instagram SVG компонент
const InstagramIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      fill="currentColor"
      d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.43.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.43.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41-.56-.22-.96-.48-1.38-.9-.42-.42-.68-.82-.9-1.38-.16-.43-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.43-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.31-1.46.72-2.13 1.39C1.34 2.69.93 3.36.62 4.15.32 4.91.12 5.79.06 7.06.01 8.34 0 8.75 0 12s.01 3.66.06 4.94c.06 1.27.26 2.15.56 2.91.31.79.72 1.46 1.39 2.13.67.67 1.34 1.08 2.13 1.39.76.3 1.64.5 2.91.56C8.34 23.99 8.75 24 12 24s3.66-.01 4.94-.06c1.27-.06 2.15-.26 2.91-.56.79-.31 1.46-.72 2.13-1.39.67-.67 1.08-1.34 1.39-2.13.3-.76.5-1.64.56-2.91.05-1.28.06-1.69.06-4.94s-.01-3.66-.06-4.94c-.06-1.27-.26-2.15-.56-2.91-.31-.79-.72-1.46-1.39-2.13C20.31 1.34 19.64.93 18.85.62 18.09.32 17.21.12 15.94.06 14.66.01 14.25 0 12 0zm0 5.84c-3.4 0-6.16 2.76-6.16 6.16s2.76 6.16 6.16 6.16 6.16-2.76 6.16-6.16-2.76-6.16-6.16-6.16zm0 10.15c-2.2 0-3.99-1.79-3.99-3.99S9.8 8.01 12 8.01s3.99 1.79 3.99 3.99-1.79 3.99-3.99 3.99zm6.4-11.85c-.8 0-1.44-.64-1.44-1.44s.64-1.44 1.44-1.44 1.44.64 1.44 1.44-.64 1.44-1.44 1.44z"
    />
  </svg>
)

// Telegram SVG компонент
const TelegramIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      fill="currentColor"
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.05-.2-.06-.06-.16-.04-.23-.02-.1.02-1.62 1.03-4.58 3.03-.43.3-.82.44-1.17.43-.39-.01-1.13-.22-1.67-.4-.68-.23-1.22-.35-1.17-.74.02-.2.3-.4.81-.6 3.15-1.37 5.26-2.27 6.33-2.71 3.02-1.24 3.65-1.46 4.06-1.46.09 0 .29.02.42.12.11.07.18.21.21.33.03.14.05.27.03.43z"
    />
  </svg>
)

// VK SVG компонент
const VkIcon = ({ size = 20, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <path
      fill="currentColor"
      d="M20.44 7.8c.14-.48 0-.84-.66-.84h-2.2c-.56 0-.81.3-.95.62 0 0-1.11 2.69-2.68 4.43-.51.51-.74.67-1.02.67-.14 0-.34-.16-.34-.64V7.8c0-.56-.16-.84-.63-.84H9.03c-.35 0-.56.26-.56.5 0 .53.79.65.87 2.14v3.23c0 .7-.13.83-.41.83-.74 0-2.54-2.7-3.6-5.8-.21-.6-.42-.84-.98-.84h-2.2c-.63 0-.75.3-.75.62 0 .58.74 3.47 3.47 7.3C6.85 17.3 9.4 18.5 11.7 18.5c1.38 0 1.55-.31 1.55-.84v-1.95c0-.62.13-.74.57-.74.32 0 .88.16 2.17 1.4 1.48 1.48 1.72 2.13 2.55 2.13h2.2c.63 0 .94-.31.76-.92-.2-.61-.9-1.5-1.83-2.55-.51-.6-1.27-1.24-1.5-1.56-.32-.42-.23-.6 0-.97 0 0 2.65-3.73 2.93-5z"
    />
  </svg>
)

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
      name: "Instagram*",
      icon: InstagramIcon,
      color: "pink",
      bg: "from-pink-500 to-rose-500",
      description: "Идеально для визуального контента",
      audience: "25-45 лет, женщины 60%",
      bestFor: ["Эстетическая медицина", "Стоматология", "Косметология"],
      features: ["Stories", "Reels", "IGTV", "Shopping"],
      disclaimer: "* Запрещенная в России социальная сеть"
    },
    {
      name: "ВКонтакте",
      icon: VkIcon,
      color: "indigo",
      bg: "from-indigo-500 to-purple-600",
      description: "Популярна в России и СНГ",
      audience: "18-45 лет, активные пользователи",
      bestFor: ["Все виды медицинских услуг", "Образовательный контент"],
      features: ["Записи", "Клипы", "Подкасты", "События"]
    },
    {
      name: "Telegram",
      icon: TelegramIcon,
      color: "teal",
      bg: "from-teal-500 to-cyan-600",
      description: "90% проникновения в России",
      audience: "18-45 лет, активные пользователи",
      bestFor: ["Все виды медицинских услуг", "Образовательный контент"],
      features: ["Каналы", "Чаты", "Боты", "Посты"]
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
                  {platforms[activeTab].disclaimer && (
                    <p className="text-red-400 text-xs mt-1">{platforms[activeTab].disclaimer}</p>
                  )}
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
                      {activeTab === 0 ? '15%' : activeTab === 1 ? '12%' : '18%'}
                    </div>
                    <div className="text-slate-400 text-xs">Средний Engagement</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold font-fixedsys text-indigo-400 mb-1">
                      {activeTab === 0 ? '320₽' : activeTab === 1 ? '280₽' : '250₽'}
                    </div>
                    <div className="text-slate-400 text-xs">Стоимость лида</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Сводка по платформам */}
        <div className={`mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 ${inView ? 'animate-fadeInUp delay-600' : 'opacity-0'}`}>
          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 text-center hover-lift hover-glow transition-all">
            <InstagramIcon size={32} className="mx-auto text-pink-400 mb-3" />
            <h4 className="font-bold font-fixedsys text-white mb-2">Instagram*</h4>
            <p className="text-slate-400 text-sm">Лучше всего для эстетических направлений</p>
            <p className="text-red-400 text-xs mt-2">* Запрещенная в России социальная сеть</p>
          </div>
          
          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 text-center hover-lift hover-glow transition-all">
            <VkIcon size={32} className="mx-auto text-indigo-400 mb-3" />
            <h4 className="font-bold font-fixedsys text-white mb-2">ВКонтакте</h4>
            <p className="text-slate-400 text-sm">Эффективна в России и СНГ</p>
          </div>
          
          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 text-center hover-lift hover-glow transition-all">
            <TelegramIcon size={32} className="mx-auto text-teal-400 mb-3" />
            <h4 className="font-bold font-fixedsys text-white mb-2">Telegram</h4>
            <p className="text-slate-400 text-sm">Высокое проникновение в России</p>
          </div>
        </div>
      </div>
    </section>
  )
}
