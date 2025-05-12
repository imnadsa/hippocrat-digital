"use client"

import React, { useState, useEffect, useRef } from "react"
import { 
  Plug2, 
  Database, 
  Workflow, 
  Shield,
  Zap,
  Link2,
  ArrowRight,
  CheckCircle,
  Settings,
  Code,
  Cpu,
  Network
} from "lucide-react"

export default function AiIntegration() {
  const [inView, setInView] = useState(false)
  const [activeIntegration, setActiveIntegration] = useState(0)
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

  const integrations = [
    {
      category: "Медицинские информационные системы",
      icon: Database,
      color: "teal",
      systems: [
        { name: "MedVision", type: "МИС стационара", features: ["Электронная история болезни", "Медицинская документация", "Расписание врачей"] },
        { name: "МНЦ", type: "МИС поликлиники", features: ["Электронная регистратура", "Лабораторная информационная система", "Аптечная система"] },
        { name: "Барс.Здравоохранение", type: "Комплексная МИС", features: ["Единый регистр пациентов", "Телемедицина", "Статистическая отчетность"] },
        { name: "ЕМИАС", type: "Региональная МИС", features: ["Электронная карта москвича", "Запись к врачу", "Результаты анализов"] }
      ]
    },
    {
      category: "CRM системы",
      icon: Network,
      color: "indigo",
      systems: [
        { name: "amoCRM", type: "Медицинская CRM", features: ["Воронка продаж", "Контакт-центр", "Интеграции"] },
        { name: "Битрикс24", type: "Медицинский Битрикс", features: ["CRM + телефония", "Чат-боты", "Аналитика продаж"] },
        { name: "МедКлиент", type: "Специализированная CRM", features: ["Медицинский календарь", "SMS/Email рассылки", "Лояльность пациентов"] },
        { name: "1С:Медицина", type: "ERP для клиник", features: ["Учет пациентов", "Финансовый учет", "Кадровый учет"] }
      ]
    },
    {
      category: "Лабораторные системы",
      icon: Code,
      color: "teal",
      systems: [
        { name: "ЛИС Инвитро", type: "Лабораторная система", features: ["Обработка анализов", "Контроль качества", "Статистика"] },
        { name: "STARLIMS", type: "Международная ЛИС", features: ["Образцы и анализы", "Качество данных", "Мобильный доступ"] },
        { name: "АРМ Лаборант", type: "Российская ЛИС", features: ["Штрих-кодирование", "Приборные интерфейсы", "Отчетность"] },
        { name: "Система ЦДМЛ", type: "Централизованная ЛИС", features: ["Единая база анализов", "Автоматизация", "Интеграция с МИС"] }
      ]
    },
    {
      category: "Диагностическое оборудование",
      icon: Cpu,
      color: "indigo",
      systems: [
        { name: "PACS системы", type: "Медицинские изображения", features: ["Хранение снимков", "Просмотр DICOM", "3D реконструкция"] },
        { name: "Аппараты МРТ/КТ", type: "Лучевая диагностика", features: ["Протоколы исследований", "Обработка изображений", "Отчеты"] },
        { name: "УЗИ аппараты", type: "Ультразвуковая диагностика", features: ["Эхокардиография", "Допплерография", "3D/4D визуализация"] },
        { name: "Лабораторные анализаторы", type: "Автоматические анализаторы", features: ["Биохимия крови", "Иммунология", "Гематология"] }
      ]
    }
  ]

  const integrationSteps = [
    {
      icon: Settings,
      title: "Анализ среды",
      description: "Изучаем текущую IT-инфраструктуру клиники",
      details: "Аудит существующих систем, API возможности, требования безопасности"
    },
    {
      icon: Link2,
      title: "Планирование интеграции",
      description: "Разрабатываем схему подключения ИИ",
      details: "Архитектура решения, выбор методов интеграции, тестовая среда"
    },
    {
      icon: Code,
      title: "Реализация",
      description: "Разрабатываем API и middleware",
      details: "Создание соединений, обработка данных, синхронизация"
    },
    {
      icon: Zap,
      title: "Тестирование",
      description: "Проверяем работу всех компонентов",
      details: "Функциональное тестирование, нагрузочное тестирование, безопасность"
    },
    {
      icon: CheckCircle,
      title: "Запуск",
      description: "Внедряем в промышленную эксплуатацию",
      details: "Поэтапный запуск, обучение персонала, мониторинг"
    }
  ]

  return (
    <section ref={sectionRef} id="ai-integration" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-5s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Интеграция ИИ
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Интеграция с{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              медицинскими системами
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-3xl mx-auto">
            Наши ИИ-решения легко интегрируются с существующими медицинскими информационными системами, 
            не нарушая рабочих процессов клиники
          </p>
        </div>

        {/* Варианты интеграции */}
        <div className={`flex flex-wrap justify-center gap-4 mb-8 ${inView ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          {integrations.map((integration, index) => {
            const IconComponent = integration.icon
            return (
              <button
                key={index}
                onClick={() => setActiveIntegration(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover-lift ${
                  activeIntegration === index
                    ? `bg-gradient-to-r ${integration.color === 'teal' ? 'from-teal-500 to-indigo-600' : 'from-indigo-500 to-purple-600'} text-white`
                    : 'bg-slate-800/50 text-slate-400 hover:text-white'
                }`}
              >
                <IconComponent size={20} />
                <span className="font-fixedsys hidden sm:inline">{integration.category}</span>
              </button>
            )
          })}
        </div>

        {/* Активная категория интеграции */}
        <div className={`bg-slate-800/20 rounded-xl border border-slate-700/30 p-8 mb-12 ${inView ? 'animate-fadeIn delay-400' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold font-fixedsys text-white mb-6 text-center">
            {integrations[activeIntegration].category}
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {integrations[activeIntegration].systems.map((system, index) => (
              <div 
                key={index}
                className={`bg-slate-900/50 rounded-lg border border-slate-700/30 p-4 hover:border-${integrations[activeIntegration].color}-500/30 transition-all hover-lift`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full bg-${integrations[activeIntegration].color}-900/50 flex items-center justify-center`}>
                    <Plug2 size={20} className={`text-${integrations[activeIntegration].color}-400`} />
                  </div>
                  <div>
                    <h4 className="font-semibold font-fixedsys text-white">{system.name}</h4>
                    <p className="text-slate-400 text-xs">{system.type}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {system.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-slate-300">
                      <span className={`w-1.5 h-1.5 bg-${integrations[activeIntegration].color}-400 rounded-full mr-3`}></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Процесс интеграции */}
        <div className={`${inView ? 'animate-fadeInUp delay-600' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold font-fixedsys text-white text-center mb-8">
            Процесс интеграции ИИ-решений
          </h3>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-teal-400 via-indigo-500 to-teal-400 opacity-30"></div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
              {integrationSteps.map((step, index) => {
                const IconComponent = step.icon
                return (
                  <div 
                    key={index}
                    className="relative text-center"
                  >
                    <div className={`w-16 h-16 rounded-full bg-slate-900/50 border-2 border-slate-700 flex items-center justify-center mx-auto mb-4 transition-all hover-lift group-hover:border-teal-500 ${
                      index % 2 === 0 ? 'hover:border-teal-500' : 'hover:border-indigo-500'
                    }`}>
                      <IconComponent size={24} className={`${index % 2 === 0 ? 'text-teal-400' : 'text-indigo-400'} group-hover:scale-110 transition-transform`} />
                    </div>
                    <h4 className="font-semibold font-fixedsys text-white mb-2">{step.title}</h4>
                    <p className="text-slate-400 text-sm mb-3">{step.description}</p>
                    <p className="text-slate-500 text-xs">{step.details}</p>
                    
                    {/* Step number */}
                    <div className="absolute -top-2 -left-2 w-8 h-8 rounded-full bg-gradient-to-r from-teal-500 to-indigo-600 text-white text-sm font-bold font-fixedsys flex items-center justify-center">
                      {index + 1}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Преимущества интеграции */}
        <div className={`mt-16 bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/30 p-8 ${inView ? 'animate-fadeIn delay-800' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold font-fixedsys text-white text-center mb-8">
            Преимущества бесшовной интеграции
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Shield size={40} className="mx-auto text-teal-400 mb-4" />
              <h4 className="font-semibold text-white mb-2 font-fixedsys">Безопасность данных</h4>
              <p className="text-slate-400 text-sm">
                Все данные остаются в вашей инфраструктуре, соблюдаются требования 152-ФЗ и медицинские стандарты
              </p>
            </div>
            
            <div className="text-center">
              <Workflow size={40} className="mx-auto text-indigo-400 mb-4" />
              <h4 className="font-semibold text-white mb-2 font-fixedsys">Сохранение процессов</h4>
              <p className="text-slate-400 text-sm">
                ИИ внедряется в существующие рабочие процессы без остановки работы клиники
              </p>
            </div>
            
            <div className="text-center">
              <Zap size={40} className="mx-auto text-teal-400 mb-4" />
              <h4 className="font-semibold text-white mb-2 font-fixedsys">Быстрое развертывание</h4>
              <p className="text-slate-400 text-sm">
                Средний срок интеграции — 2-4 недели в зависимости от сложности системы
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-slate-300 text-sm mb-4">
              Поддерживаем интеграцию с более чем 50 медицинскими системами
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white rounded-lg font-fixedsys transition-all hover-lift active:animate-buttonClick">
              Обсудить интеграцию
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
