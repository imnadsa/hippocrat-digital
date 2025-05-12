"use client"

import React, { useState, useEffect, useRef } from "react"
import { 
  MessageSquare, 
  Eye, 
  FileSearch, 
  Calendar,
  ClipboardCheck,
  BarChart3,
  Stethoscope,
  Pill
} from "lucide-react"

export default function AiSolutions() {
  const [inView, setInView] = useState(false)
  const [activeCategory, setActiveCategory] = useState(0)
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

  const aiSolutions = [
    {
      category: "Чат-боты и Ассистенты",
      icon: MessageSquare,
      color: "teal",
      solutions: [
        {
          name: "Медицинский чат-бот",
          description: "Автоматический помощник для пациентов",
          features: ["Запись на приём", "Ответы на FAQ", "Напоминания", "Подготовка к процедурам"],
          accuracy: "95%",
          usageTime: "24/7"
        },
        {
          name: "Триаж-ассистент",
          description: "Система первичной оценки симптомов",
          features: ["Оценка симптомов", "Приоритизация", "Направление к врачу", "Срочность обращения"],
          accuracy: "91%",
          usageTime: "Круглосуточно"
        }
      ]
    },
    {
      category: "Диагностические ИИ",
      icon: Eye,
      color: "indigo",
      solutions: [
        {
          name: "ИИ-анализ изображений",
          description: "Анализ рентгенов, МРТ, КТ",
          features: ["Выявление патологий", "Измерения", "Сравнение с нормой", "Отчёты для врачей"],
          accuracy: "98%",
          usageTime: "Секунды"
        },
        {
          name: "Анализ лабораторных данных",
          description: "Интерпретация результатов анализов",
          features: ["Выявление аномалий", "Тренды", "Предупреждения", "Рекомендации"],
          accuracy: "94%",
          usageTime: "Мгновенно"
        }
      ]
    },
    {
      category: "Клинические Системы",
      icon: ClipboardCheck,
      color: "teal",
      solutions: [
        {
          name: "Поддержка принятия решений",
          description: "Система рекомендаций врачам",
          features: ["Анализ истории", "Предложения лечения", "Учёт противопоказаний", "Дозировки"],
          accuracy: "96%",
          usageTime: "В реальном времени"
        },
        {
          name: "Прогнозная аналитика",
          description: "Предсказание рисков и осложнений",
          features: ["Риски заболеваний", "Вероятность осложнений", "Планирование лечения", "Профилактика"],
          accuracy: "88%",
          usageTime: "Постоянно"
        }
      ]
    },
    {
      category: "Автоматизация",
      icon: BarChart3,
      color: "indigo",
      solutions: [
        {
          name: "Обработка документов",
          description: "Автоматизация медицинской документации",
          features: ["Распознавание текста", "Извлечение данных", "Классификация", "Архивирование"],
          accuracy: "99%",
          usageTime: "Секунды на документ"
        },
        {
          name: "Управление ресурсами",
          description: "Оптимизация работы клиники",
          features: ["Планирование смен", "Распределение нагрузки", "Управление очередями", "Прогноз потребностей"],
          accuracy: "92%",
          usageTime: "24/7"
        }
      ]
    }
  ]

  return (
    <section ref={sectionRef} id="ai-solutions" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-4s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            ИИ-решения
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Виды{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              ИИ-решений для медицины
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Комплексные решения искусственного интеллекта для повышения эффективности медицинских учреждений
          </p>
        </div>

        {/* Навигация по категориям */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${inView ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          {aiSolutions.map((solution, index) => {
            const IconComponent = solution.icon
            return (
              <button
                key={index}
                onClick={() => setActiveCategory(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover-lift ${
                  activeCategory === index
                    ? `bg-gradient-to-r ${solution.color === 'teal' ? 'from-teal-500 to-indigo-600' : 'from-indigo-500 to-purple-600'} text-white`
                    : 'bg-slate-800/50 text-slate-400 hover:text-white'
                }`}
              >
                <IconComponent size={20} />
                <span className="font-fixedsys">{solution.category}</span>
              </button>
            )
          })}
        </div>

        {/* Контент активной категории */}
        <div className={`${inView ? 'animate-fadeIn delay-400' : 'opacity-0'}`}>
          <div className="mb-8">
            <h3 className="text-2xl font-bold font-fixedsys text-white text-center">
              {aiSolutions[activeCategory].category}
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiSolutions[activeCategory].solutions.map((solution, solutionIndex) => (
              <div 
                key={solutionIndex}
                className={`bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-${aiSolutions[activeCategory].color}-500/30 transition-all hover-lift hover-glow`}
              >
                <h4 className="text-xl font-bold font-fixedsys text-white mb-3">{solution.name}</h4>
                <p className="text-slate-400 mb-4">{solution.description}</p>
                
                <div className="space-y-4">
                  <div>
                    <h5 className="font-semibold text-white mb-2 font-fixedsys">Возможности:</h5>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-slate-300 flex items-center text-sm">
                          <span className={`w-1.5 h-1.5 bg-${aiSolutions[activeCategory].color}-400 rounded-full mr-3`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700/30">
                    <div>
                      <div className={`text-xl font-bold font-fixedsys text-${aiSolutions[activeCategory].color}-400`}>
                        {solution.accuracy}
                      </div>
                      <div className="text-slate-500 text-xs">Точность</div>
                    </div>
                    <div>
                      <div className={`text-xl font-bold font-fixedsys text-${aiSolutions[activeCategory].color}-400`}>
                        {solution.usageTime}
                      </div>
                      <div className="text-slate-500 text-xs">Время работы</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Дополнительная информация */}
        <div className={`mt-16 text-center ${inView ? 'animate-fadeIn delay-600' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/30 p-8">
            <h3 className="text-xl font-bold font-fixedsys text-white mb-4">
              Все решения адаптируются под специфику вашей клиники
            </h3>
            <p className="text-slate-400 max-w-3xl mx-auto">
              Наши ИИ-решения разрабатываются с учётом российского законодательства, 
              интегрируются с существующими МИС и обеспечивают полную безопасность медицинских данных.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
