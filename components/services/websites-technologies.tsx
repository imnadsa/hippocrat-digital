"use client"

import React, { useState, useEffect, useRef } from "react"
import { 
  Code, 
  Smartphone, 
  Zap, 
  Shield,
  Palette,
  Database
} from "lucide-react"

export default function WebsitesTechnologies() {
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

  const technologies = [
    {
      category: "Frontend",
      icon: Palette,
      color: "teal",
      description: "Современные решения для пользовательского интерфейса",
      tech: [
        { name: "Next.js", description: "React-фреймворк для быстрой загрузки", level: 95 },
        { name: "TypeScript", description: "Типизированный JavaScript", level: 92 },
        { name: "Tailwind CSS", description: "Utility-first CSS framework", level: 90 },
        { name: "Framer Motion", description: "Плавные анимации", level: 88 }
      ]
    },
    {
      category: "Backend",
      icon: Database,
      color: "indigo",
      description: "Надёжные решения для серверной части",
      tech: [
        { name: "Node.js", description: "Серверная JavaScript среда", level: 93 },
        { name: "PostgreSQL", description: "Надёжная база данных", level: 91 },
        { name: "Redis", description: "Кэширование и сессии", level: 87 },
        { name: "Docker", description: "Контейнеризация", level: 85 }
      ]
    },
    {
      category: "CMS",
      icon: Code,
      color: "teal",
      description: "Удобные системы управления контентом",
      tech: [
        { name: "Headless CMS", description: "Гибкое управление контентом", level: 94 },
        { name: "Strapi", description: "Open-source CMS", level: 89 },
        { name: "Contentful", description: "Cloud-based CMS", level: 86 },
        { name: "WordPress", description: "Классическая CMS", level: 92 }
      ]
    },
    {
      category: "Features",
      icon: Smartphone,
      color: "indigo",
      description: "Ключевые возможности наших сайтов",
      tech: [
        { name: "PWA", description: "Progressive Web App", level: 88 },
        { name: "SEO Optimization", description: "Поисковая оптимизация", level: 96 },
        { name: "Analytics", description: "Детальная аналитика", level: 90 },
        { name: "Security", description: "Защита данных", level: 94 }
      ]
    }
  ]

  return (
    <section ref={sectionRef} id="websites-technologies" className="py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-4s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Технологии
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Современный{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              технологический стек
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Используем проверенные технологии для создания быстрых, безопасных и масштабируемых медицинских сайтов
          </p>
        </div>

        {/* Навигация по категориям */}
        <div className={`flex flex-wrap justify-center gap-4 mb-8 ${inView ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          {technologies.map((tech, index) => {
            const IconComponent = tech.icon
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover-lift ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tech.color === 'teal' ? 'from-teal-500 to-indigo-600' : 'from-indigo-500 to-purple-600'} text-white`
                    : 'bg-slate-800/50 text-slate-400 hover:text-white'
                }`}
              >
                <IconComponent size={20} />
                <span className="font-fixedsys">{tech.category}</span>
              </button>
            )
          })}
        </div>

        {/* Контент активной категории */}
        <div className={`bg-slate-900/50 rounded-xl border border-slate-800 p-8 ${inView ? 'animate-fadeIn delay-400' : 'opacity-0'}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${
                  technologies[activeTab].color === 'teal' 
                    ? 'from-teal-500 to-indigo-600' 
                    : 'from-indigo-500 to-purple-600'
                } flex items-center justify-center shadow-lg`}>
                  {React.createElement(technologies[activeTab].icon, { size: 32, className: "text-white" })}
                </div>
                <div>
                  <h3 className="text-2xl font-bold font-fixedsys text-white">{technologies[activeTab].category}</h3>
                  <p className="text-slate-400">{technologies[activeTab].description}</p>
                </div>
              </div>

              <div className="space-y-6">
                {technologies[activeTab].tech.map((item, index) => (
                  <div key={index} className="bg-slate-800/30 rounded-lg p-4 hover-lift transition-all">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold font-fixedsys text-white">{item.name}</h4>
                      <span className={`text-${technologies[activeTab].color}-400 font-bold`}>{item.level}%</span>
                    </div>
                    <p className="text-slate-400 text-sm mb-3">{item.description}</p>
                    <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${
                          technologies[activeTab].color === 'teal' 
                            ? 'from-teal-500 to-indigo-600' 
                            : 'from-indigo-500 to-purple-600'
                        } rounded-full transition-all duration-1000`}
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              {/* Преимущества */}
              <div className="bg-slate-800/30 rounded-lg p-6">
                <h4 className="font-bold font-fixedsys text-white mb-4">Преимущества нашего стека</h4>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <Zap size={16} className="text-teal-400 mr-3 mt-1" />
                    <span className="text-slate-300">Высокая производительность</span>
                  </li>
                  <li className="flex items-start">
                    <Shield size={16} className="text-indigo-400 mr-3 mt-1" />
                    <span className="text-slate-300">Безопасность данных</span>
                  </li>
                  <li className="flex items-start">
                    <Smartphone size={16} className="text-teal-400 mr-3 mt-1" />
                    <span className="text-slate-300">Адаптивность</span>
                  </li>
                  <li className="flex items-start">
                    <Code size={16} className="text-indigo-400 mr-3 mt-1" />
                    <span className="text-slate-300">Лёгкость поддержки</span>
                  </li>
                </ul>
              </div>

              {/* Статистика */}
              <div className="bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-lg border border-teal-500/30 p-6">
                <h4 className="font-bold font-fixedsys text-white mb-4">Результаты</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold font-fixedsys text-teal-400 mb-1">99.9%</div>
                    <div className="text-slate-400 text-xs">Время работы</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold font-fixedsys text-indigo-400 mb-1">0.8s</div>
                    <div className="text-slate-400 text-xs">Первый байт</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold font-fixedsys text-teal-400 mb-1">95+</div>
                    <div className="text-slate-400 text-xs">PageSpeed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold font-fixedsys text-indigo-400 mb-1">100%</div>
                    <div className="text-slate-400 text-xs">Accessibility</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className={`mt-16 text-center ${inView ? 'animate-fadeIn delay-600' : 'opacity-0'}`}>
          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-8">
            <h3 className="text-xl font-bold font-fixedsys text-white mb-4">
              Почему мы выбираем эти технологии?
            </h3>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Каждая технология в нашем стеке выбрана для обеспечения максимальной производительности, 
              безопасности и удобства поддержки медицинских сайтов. Мы следим за тенденциями в 
              веб-разработке и регулярно обновляем наш стек для достижения лучших результатов.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
