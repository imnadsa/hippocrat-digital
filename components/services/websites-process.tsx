"use client"

import { useState, useEffect, useRef } from "react"
import { 
  Search, 
  Lightbulb, 
  Palette, 
  Code, 
  TestTube, 
  Rocket,
  CheckCircle
} from "lucide-react"

export default function WebsitesProcess() {
  const [inView, setInView] = useState(false)
  const [activeStep, setActiveStep] = useState(0)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          // Автопрогресс через этапы
          const interval = setInterval(() => {
            setActiveStep((prev) => (prev + 1) % steps.length)
          }, 3000)
          
          return () => clearInterval(interval)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      icon: Search,
      title: "Анализ и планирование",
      duration: "5-7 дней",
      description: "Изучаем клинику, конкурентов и потребности пациентов",
      tasks: [
        "Анализ целевой аудитории",
        "Изучение конкурентов",
        "Определение целей сайта",
        "Создание карты пользователя",
        "Планирование структуры"
      ]
    },
    {
      icon: Lightbulb,
      title: "Концепция и архитектура",
      duration: "3-5 дней",
      description: "Создаём концепцию и определяем архитектуру сайта",
      tasks: [
        "Создание wireframes",
        "Проектирование архитектуры",
        "Выбор технологий",
        "Планирование интеграций",
        "Создание прототипа"
      ]
    },
    {
      icon: Palette,
      title: "Дизайн",
      duration: "10-14 дней",
      description: "Создаём уникальный дизайн, отражающий ценности клиники",
      tasks: [
        "Создание дизайн-концепции",
        "Отрисовка макетов",
        "Адаптация под устройства",
        "Создание UI-кита",
        "Утверждение дизайна"
      ]
    },
    {
      icon: Code,
      title: "Разработка",
      duration: "15-20 дней",
      description: "Воплощаем дизайн в функциональный сайт",
      tasks: [
        "Frontend разработка",
        "Backend интеграция",
        "CMS настройка",
        "Формы и функционал",
        "Оптимизация скорости"
      ]
    },
    {
      icon: TestTube,
      title: "Тестирование",
      duration: "5-7 дней",
      description: "Проверяем работу всех функций и исправляем ошибки",
      tasks: [
        "Функциональное тестирование",
        "Тестирование производительности",
        "Кроссбраузерность",
        "Проверка безопасности",
        "Мобильная адаптация"
      ]
    },
    {
      icon: Rocket,
      title: "Запуск и поддержка",
      duration: "2-3 дня",
      description: "Запускаем сайт и обеспечиваем техническую поддержку",
      tasks: [
        "Миграция на хостинг",
        "Настройка SSL",
        "Подключение аналитики",
        "Обучение администратора",
        "Техническая поддержка"
      ]
    }
  ]

  const totalDuration = steps.reduce((acc, step) => {
    const [min, max] = step.duration.split('-').map(d => parseInt(d))
    return acc + (min + max) / 2
  }, 0)

  return (
    <section ref={sectionRef} id="websites-process" className="py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-6s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Процесс разработки
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Этапы создания{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              медицинских сайтов
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Структурированный процесс, который гарантирует качественный результат и своевременную доставку проекта
          </p>
          <div className="mt-4 text-center">
            <span className="text-slate-300">Общее время разработки: </span>
            <span className="text-teal-400 font-bold font-fixedsys">{Math.round(totalDuration)} дней</span>
          </div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-1/2 transform -translate-x-0.5 w-0.5 h-full bg-slate-700/50"></div>
          
          {/* Этапы */}
          <div className="space-y-12">
            {steps.map((step, index) => {
              const IconComponent = step.icon
              const isActive = activeStep === index
              const isPassed = inView && activeStep > index
              
              return (
                <div 
                  key={index} 
                  className={`relative ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex flex-col md:flex items-center gap-8 ${
                    inView ? 'animate-fadeInUp' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 200 + 300}ms` }}
                  onClick={() => setActiveStep(index)}
                >
                  {/* Номер этапа */}
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full border-4 flex items-center justify-center font-fixedsys font-bold transition-all hover-lift cursor-pointer ${
                    isActive ? 'bg-teal-500 border-teal-500 text-white animate-pulse' 
                    : isPassed ? 'bg-indigo-500 border-indigo-500 text-white'
                    : 'bg-slate-800 border-slate-700 text-slate-400'
                  }`}>
                    {isPassed ? <CheckCircle size={24} /> : index + 1}
                  </div>
                  
                  {/* Контент */}
                  <div className={`bg-slate-900/50 rounded-xl border border-slate-800 p-6 md:w-5/12 w-full hover:border-teal-500/30 transition-all hover-lift hover-glow ${
                    isActive ? 'border-teal-500/30 shadow-lg shadow-teal-900/20' : ''
                  }`}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        isActive ? 'bg-teal-900/50 text-teal-400' 
                        : isPassed ? 'bg-indigo-900/50 text-indigo-400'
                        : 'bg-slate-700/50 text-slate-400'
                      }`}>
                        <IconComponent size={20} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-fixedsys text-white">{step.title}</h3>
                        <div className="text-slate-400 text-sm">{step.duration}</div>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-4">{step.description}</p>
                    
                    {isActive && (
                      <div className="animate-fadeIn">
                        <h4 className="font-semibold text-white mb-2 font-fixedsys">Включает:</h4>
                        <ul className="space-y-1">
                          {step.tasks.map((task, taskIndex) => (
                            <li key={taskIndex} className="flex items-center text-sm text-slate-400">
                              <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3"></span>
                              {task}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Результат */}
        <div className={`mt-16 text-center ${inView ? 'animate-fadeIn delay-1000' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/30 p-8">
            <h3 className="text-2xl font-bold font-fixedsys text-white mb-4">
              Результат нашей работы
            </h3>
            <p className="text-slate-400 mb-6 max-w-3xl mx-auto">
              Полностью готовый к работе сайт, оптимизированный для привлечения пациентов, 
              соответствующий всем требованиям медицинской отрасли и готовый к масштабированию
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold font-fixedsys text-teal-400 mb-2">3 месяца</div>
                <div className="text-slate-400 text-sm">Гарантия поддержки</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-fixedsys text-indigo-400 mb-2">24/7</div>
                <div className="text-slate-400 text-sm">Техническая поддержка</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold font-fixedsys text-teal-400 mb-2">100%</div>
                <div className="text-slate-400 text-sm">Соответствие требованиям</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
