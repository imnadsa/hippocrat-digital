"use client"

import { Button } from "@/components/ui/button"
import { Globe, Monitor, Smartphone, TrendingUp } from "lucide-react"
import { useState, useEffect } from "react"

export default function WebsitesHero() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentProject, setCurrentProject] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    
    // Автопереключение проектов
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % 3)
    }, 4000)
    
    return () => clearInterval(interval)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const projects = [
    {
      name: "Сайт для студенто-медиков",
      image: "/services/website1.jpg",
      result: "+2000 студентов"
    },
    {
      name: "MedTech лаборатория",
      image: "/services/website2.jpg",
      result: "+ к узнаваемости"
    },
    {
      name: "Подологическая клиника/школа",
      image: "/services/website3.jpg",
      result: "+65% учеников"
    }
  ]

  return (
    <section className="container mx-auto px-4 pt-32 pb-16 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-5s' }}></div>
      
      <div className="relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className={`lg:w-1/2 space-y-6 ${isVisible ? 'animate-fadeInLeft' : 'opacity-0'}`}>
            <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm animate-fadeIn">
              Создание медицинских сайтов
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight font-fixedsys">
              Сайты, которые{" "}
              <span className="bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 bg-clip-text text-transparent animate-gradient">
                превращают посетителей в пациентов
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 animate-fadeInUp delay-100">
              Разрабатываем современные сайты для медицинских клиник с акцентом на конверсию. 
              Каждый сайт — это инструмент привлечения пациентов
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys animate-fadeInUp delay-200 active:animate-buttonClick hover-lift"
                onClick={() => scrollToSection("contact")}
              >
                Заказать сайт
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50 animate-fadeInUp delay-300 hover-lift"
                onClick={() => scrollToSection("contact")}
              >
                Пример Вашего сайта
              </Button>
            </div>

            {/* Статистика */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 animate-fadeInUp delay-400">
              <div className="text-center">
                <div className="text-2xl font-bold font-fixedsys text-teal-400">85%</div>
                <div className="text-slate-400 text-sm">Конверсия в запись</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-fixedsys text-indigo-400">3.2s</div>
                <div className="text-slate-400 text-sm">Время загрузки</div>
              </div>
              <div className="text-center md:col-span-1 col-span-2">
                <div className="text-2xl font-bold font-fixedsys text-teal-400">100%</div>
                <div className="text-slate-400 text-sm">Соответствие 152-ФЗ</div>
              </div>
            </div>
          </div>
          
          <div className={`lg:w-1/2 ${isVisible ? 'animate-fadeInRight delay-500' : 'opacity-0'}`}>
            {/* Интерактивный preview сайтов */}
            <div className="relative">
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover-lift transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 bg-slate-800 rounded-full px-3 py-1 text-xs text-slate-400 text-center">
                    {projects[currentProject].name}
                  </div>
                </div>
                
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-slate-800/50">
                  <img
                    src={projects[currentProject].image}
                    alt={projects[currentProject].name}
                    className="w-full h-full object-cover transition-all duration-1000"
                    style={{ filter: "grayscale(20%)" }}
                  />
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-slate-900/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="text-teal-400 font-fixedsys text-sm">
                        {projects[currentProject].result}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Индикаторы проектов */}
                <div className="flex justify-center gap-2 mt-4">
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProject(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentProject ? 'bg-teal-400 w-8' : 'bg-slate-600'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Responsive preview */}
              <div className="absolute -bottom-6 -right-6 bg-slate-900/50 rounded-lg border border-slate-800 p-3 animate-float">
                <div className="flex items-center gap-3">
                  <Monitor size={16} className="text-teal-400" />
                  <Smartphone size={16} className="text-indigo-400" />
                  <div className="text-xs text-slate-400">Responsive</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
