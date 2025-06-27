"use client"

import { Button } from "@/components/ui/button"
import { 
  Target, 
  Globe, 
  MessageSquare, 
  Search, 
  Brain,
  ArrowRight,
  Zap,
  TrendingUp 
} from "lucide-react"
import { useState, useEffect } from "react"

export default function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentService, setCurrentService] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Автопереключение услуг
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length)
    }, 3500)
    
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const services = [
    {
      icon: Target,
      name: "Таргетированная реклама",
      result: "+200% пациентов",
      color: "teal",
      description: "Точное попадание в целевую аудиторию"
    },
    {
      icon: Globe,
      name: "Разработка сайтов",
      result: "85% конверсия",
      color: "indigo",
      description: "Сайты, которые превращают посетителей в пациентов"
    },
    {
      icon: MessageSquare,
      name: "SMM продвижение",
      result: "+300% подписчиков",
      color: "teal",
      description: "Соцсети как источник новых пациентов"
    },
    {
      icon: Search,
      name: "Контекстная реклама",
      result: "-40% стоимость лида",
      color: "indigo",
      description: "Эффективная реклама в поисковых системах"
    },
    {
      icon: Brain,
      name: "ИИ-решения",
      result: "60% автоматизации",
      color: "teal",
      description: "Искусственный интеллект для медицины"
    }
  ]

  const stats = [
    {
      value: "150+",
      label: "Медицинских клиник",
      color: "teal"
    },
    {
      value: "5",
      label: "Направлений работы",
      color: "indigo"
    },
    {
      value: "98%",
      label: "Клиентов остаются",
      color: "teal"
    },
    {
      value: "24/7",
      label: "Поддержка",
      color: "indigo"
    }
  ]

  return (
    <section className="container mx-auto px-4 pt-32 pb-16 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-3s' }}></div>
      <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow"></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Левая колонка: Текст и кнопки */}
          <div className={`lg:w-1/2 space-y-6 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm animate-fadeIn">
              Наши услуги
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-fixedsys">
              <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
                Комплексные решения для медицинского маркетинга
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 animate-fadeInUp delay-100">
              Полный спектр digital-услуг для медицинских клиник: от создания сайтов до внедрения ИИ-технологий. 
              Помогаем привлекать пациентов и автоматизировать процессы.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys animate-fadeInUp delay-200 active:animate-buttonClick hover-lift group"
                onClick={() => scrollToSection("contact")}
              >
                Получить консультацию
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50 animate-fadeInUp delay-300 hover-lift"
                onClick={() => scrollToSection("services-overview")}
              >
                Обзор услуг
              </Button>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 animate-fadeInUp delay-400">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group hover-lift transition-all duration-300">
                  <div className={`text-2xl font-bold font-fixedsys mb-1 group-hover:scale-110 transition-transform duration-300 ${
                    stat.color === 'teal' ? 'text-teal-400' : 'text-indigo-400'
                  }`}>
                    {stat.value}
                  </div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Правая колонка: Анимация услуг */}
          <div className={`lg:w-1/2 ${isVisible ? 'animate-fadeInRight delay-500' : 'opacity-0'}`}>
            <div className="relative flex items-center justify-center">
              {/* Центральная область */}
              <div className="relative w-80 h-80">
                {/* Центральная иконка */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 flex items-center justify-center shadow-2xl shadow-teal-500/30 animate-pulse-slow">
                    <TrendingUp size={60} className="text-white" />
                  </div>
                </div>

                {/* Орбитальные элементы услуг */}
                {services.map((service, index) => {
                  const IconComponent = service.icon
                  const isActive = currentService === index
                  const angle = (index * 72) - 90 // Начинаем сверху (-90 градусов)
                  const radius = 120 // Радиус орбиты
                  
                  // Вычисляем позицию на окружности
                  const x = Math.cos((angle * Math.PI) / 180) * radius
                  const y = Math.sin((angle * Math.PI) / 180) * radius
                  
                  return (
                    <div
                      key={index}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                        animation: isActive ? 'none' : 'float 6s ease-in-out infinite',
                        animationDelay: `${index * 1.2}s`
                      }}
                    >
                      <div 
                        className={`relative transition-all duration-500 cursor-pointer group ${
                          isActive ? 'scale-125 z-20' : 'scale-100 hover:scale-110'
                        }`}
                        onClick={() => setCurrentService(index)}
                      >
                        {/* Glow effect для активного элемента */}
                        {isActive && (
                          <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${
                            service.color === 'teal' 
                              ? 'from-teal-500 to-indigo-600' 
                              : 'from-indigo-500 to-purple-600'
                          } opacity-30 blur-lg scale-150 animate-pulse`}></div>
                        )}
                        
                        {/* Иконка услуги */}
                        <div className={`relative w-16 h-16 rounded-full flex items-center justify-center shadow-lg backdrop-blur-sm border-2 transition-all duration-500 ${
                          isActive 
                            ? `bg-gradient-to-r ${service.color === 'teal' ? 'from-teal-500 to-indigo-600' : 'from-indigo-500 to-purple-600'} border-white/30 shadow-2xl`
                            : 'bg-slate-800/90 border-slate-700/50 hover:border-slate-600 hover:bg-slate-700/90'
                        }`}>
                          <IconComponent 
                            size={28} 
                            className={`transition-colors duration-300 ${
                              isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-300'
                            }`} 
                          />
                        </div>

                        {/* Пульсирующие кольца для активного элемента */}
                        {isActive && (
                          <>
                            <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping"></div>
                            <div className="absolute inset-0 rounded-full border border-white/10 scale-150 animate-pulse"></div>
                          </>
                        )}
                      </div>
                    </div>
                  )
                })}

                {/* Соединительные линии */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-60 h-60 rounded-full border border-slate-700/30 opacity-50"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-52 h-52 rounded-full border border-slate-700/20 opacity-30"></div>
                </div>
              </div>

              {/* Информация об активной услуге */}
              <div className="mt-8">
                <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover-lift transition-all backdrop-blur-sm">
                  <div className="text-center">
                    <h4 className="text-xl font-bold font-fixedsys text-white mb-2">
                      {services[currentService].name}
                    </h4>
                    <p className="text-slate-400 text-sm mb-3">
                      {services[currentService].description}
                    </p>
                    <div className={`text-2xl font-bold font-fixedsys ${
                      services[currentService].color === 'teal' ? 'text-teal-400' : 'text-indigo-400'
                    }`}>
                      {services[currentService].result}
                    </div>
                  </div>
                </div>
              </div>

              {/* Индикаторы услуг */}
              <div className="flex justify-center gap-2 mt-6">
                {services.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentService(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentService 
                        ? 'bg-teal-400 w-8' 
                        : 'bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Встроенные стили для анимации */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  )
}
