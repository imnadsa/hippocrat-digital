"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function ServicesHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentService, setCurrentService] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
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
      name: "Таргетированная реклама",
      result: "+200% пациентов",
      color: "teal",
      description: "Точное попадание в целевую аудиторию"
    },
    {
      name: "Разработка сайтов",
      result: "85% конверсия",
      color: "indigo",
      description: "Сайты, которые превращают посетителей в пациентов"
    },
    {
      name: "SMM продвижение",
      result: "+300% подписчиков",
      color: "teal",
      description: "Соцсети как источник новых пациентов"
    },
    {
      name: "Контекстная реклама",
      result: "-40% стоимость лида",
      color: "indigo",
      description: "Эффективная реклама в поисковых системах"
    },
    {
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
          
          {/* Правая колонка: Анимация услуг (ТЕПЕРЬ БЕЗ ИКОНОК) */}
          <div className={`lg:w-1/2 flex items-center justify-center ${isVisible ? 'animate-fadeInRight delay-500' : 'opacity-0'}`}>
            <div className="relative w-full max-w-md h-72 bg-slate-800/40 border border-slate-700/60 rounded-2xl p-8 flex flex-col justify-center items-center text-center overflow-hidden backdrop-blur-sm hover-lift transition-all duration-300">
                {/* Анимированный текстовый блок */}
                <div key={currentService} className="animate-fadeIn w-full">
                    <h3 className={`text-2xl lg:text-3xl font-bold font-fixedsys mb-3 text-${services[currentService].color}-400`}>
                        {services[currentService].name}
                    </h3>
                    <p className="text-slate-300 text-lg mb-4">
                        {services[currentService].description}
                    </p>
                    <p className="text-3xl lg:text-4xl font-bold font-fixedsys text-white">
                        {services[currentService].result}
                    </p>
                </div>
                
                {/* Индикаторы прогресса/переключения */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2">
                    {services.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentService(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-500 ${
                          index === currentService 
                            ? `bg-teal-400 w-8` 
                            : 'bg-slate-600 hover:bg-slate-500'
                        }`}
                      />
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
