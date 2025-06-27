"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Globe, 
  MessageSquare, 
  Search, 
  Brain,
  Check,
  X,
  ArrowRight,
  Info
} from "lucide-react"

export default function ServicesComparison() {
  const [inView, setInView] = useState(false)
  const [selectedServices, setSelectedServices] = useState<number[]>([0, 1])
  const [showTooltip, setShowTooltip] = useState<string | null>(null)
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

  const services = [
    {
      id: 0,
      icon: Target,
      name: "Таргетинг",
      price: "25 000 ₽",
      duration: "2-3 дня",
      color: "teal"
    },
    {
      id: 1,
      icon: Globe,
      name: "Сайты",
      price: "150 000 ₽",
      duration: "30-45 дней",
      color: "indigo"
    },
    {
      id: 2,
      icon: MessageSquare,
      name: "SMM",
      price: "35 000 ₽",
      duration: "1-2 недели",
      color: "teal"
    },
    {
      id: 3,
      icon: Search,
      name: "Контекст",
      price: "20 000 ₽",
      duration: "3-5 дней",
      color: "indigo"
    },
    {
      id: 4,
      icon: Brain,
      name: "ИИ",
      price: "50 000 ₽",
      duration: "2-6 месяцев",
      color: "teal"
    }
  ]

  const criteria = [
    {
      name: "Быстрый старт",
      tooltip: "Время до получения первых результатов",
      values: [true, false, true, true, false] // targeting, websites, smm, context, ai
    },
    {
      name: "Привлечение новых пациентов",
      tooltip: "Эффективность для привлечения новой аудитории",
      values: [true, true, true, true, false]
    },
    {
      name: "Долгосрочный эффект",
      tooltip: "Результаты сохраняются надолго",
      values: [false, true, true, false, true]
    },
    {
      name: "Автоматизация процессов",
      tooltip: "Снижение ручной работы персонала",
      values: [false, true, false, false, true]
    },
    {
      name: "Повышение узнаваемости",
      tooltip: "Увеличение узнаваемости бренда клиники",
      values: [false, true, true, false, false]
    },
    {
      name: "Точная аналитика",
      tooltip: "Детальная статистика и отслеживание ROI",
      values: [true, true, true, true, true]
    },
    {
      name: "Соответствие 152-ФЗ",
      tooltip: "Полное соблюдение законодательства о персональных данных",
      values: [true, true, true, true, true]
    },
    {
      name: "Работа с отзывами",
      tooltip: "Управление репутацией и отзывами пациентов",
      values: [false, true, true, false, false]
    },
    {
      name: "Мобильная оптимизация",
      tooltip: "Адаптация под мобильные устройства",
      values: [true, true, true, true, false]
    },
    {
      name: "Интеграция с CRM",
      tooltip: "Подключение к системам управления клиентами",
      values: [false, true, false, false, true]
    }
  ]

  const recommendations = [
    {
      title: "Новая клиника",
      description: "Только открылись и нужно быстро привлечь пациентов",
      recommended: [0, 3], // targeting + context
      color: "teal"
    },
    {
      title: "Развивающаяся клиника",
      description: "Есть база пациентов, нужно масштабироваться",
      recommended: [1, 2], // websites + smm
      color: "indigo"
    },
    {
      title: "Крупная клиника",
      description: "Большой поток пациентов, нужна автоматизация",
      recommended: [1, 4], // websites + ai
      color: "teal"
    },
    {
      title: "Комплексное решение",
      description: "Максимальный охват всех каналов привлечения",
      recommended: [0, 1, 2, 3], // все кроме ИИ
      color: "indigo"
    }
  ]

  const toggleService = (serviceId: number) => {
    setSelectedServices(prev => {
      if (prev.includes(serviceId)) {
        return prev.filter(id => id !== serviceId)
      } else {
        return [...prev, serviceId].slice(0, 3) // максимум 3 услуги
      }
    })
  }

  const getRecommendation = () => {
    const total = selectedServices.reduce((sum, serviceId) => {
      return sum + parseInt(services[serviceId].price.replace(/[^\d]/g, ''))
    }, 0)
    
    const discount = selectedServices.length >= 3 ? 0.15 : selectedServices.length === 2 ? 0.1 : 0
    const finalPrice = total * (1 - discount)
    
    return {
      total,
      discount: discount * 100,
      finalPrice,
      savings: total - finalPrice
    }
  }

  return (
    <section ref={sectionRef} id="services-comparison" className="py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-5s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Сравнение услуг
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Выберите{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              подходящие услуги
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Сравните возможности наших услуг и выберите оптимальную комбинацию для вашей клиники
          </p>
        </div>

        {/* Service selector */}
        <div className={`flex flex-wrap justify-center gap-4 mb-8 ${inView ? 'animate-fadeInUp delay-200' : 'opacity-0'}`}>
          {services.map((service) => {
            const IconComponent = service.icon
            const isSelected = selectedServices.includes(service.id)
            
            return (
              <button
                key={service.id}
                onClick={() => toggleService(service.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all hover-lift ${
                  isSelected
                    ? `bg-gradient-to-r ${service.color === 'teal' ? 'from-teal-500 to-indigo-600' : 'from-indigo-500 to-purple-600'} text-white shadow-lg`
                    : 'bg-slate-800/50 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                <IconComponent size={20} />
                <span className="font-fixedsys">{service.name}</span>
                {isSelected && <Check size={16} />}
              </button>
            )
          })}
        </div>

        {/* Comparison table */}
        {selectedServices.length > 0 && (
          <div className={`bg-slate-900/50 rounded-xl border border-slate-800 overflow-hidden mb-12 ${inView ? 'animate-fadeIn delay-400' : 'opacity-0'}`}>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="text-left p-6 text-white font-fixedsys">Критерий</th>
                    {selectedServices.map(serviceId => {
                      const service = services[serviceId]
                      const IconComponent = service.icon
                      return (
                        <th key={serviceId} className="text-center p-6">
                          <div className="flex flex-col items-center">
                            <div className={`w-10 h-10 rounded-full bg-${service.color}-900/50 flex items-center justify-center text-${service.color}-400 mb-2`}>
                              <IconComponent size={20} />
                            </div>
                            <span className="text-white font-fixedsys text-sm">{service.name}</span>
                            <span className="text-slate-400 text-xs">{service.price}</span>
                          </div>
                        </th>
                      )
                    })}
                  </tr>
                </thead>
                <tbody>
                  {criteria.map((criterion, index) => (
                    <tr key={index} className="border-b border-slate-800/50 hover:bg-slate-800/20 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <span className="text-slate-300">{criterion.name}</span>
                          <button
                            className="text-slate-500 hover:text-slate-300"
                            onMouseEnter={() => setShowTooltip(criterion.name)}
                            onMouseLeave={() => setShowTooltip(null)}
                          >
                            <Info size={14} />
                          </button>
                          {showTooltip === criterion.name && (
                            <div className="absolute z-10 bg-slate-800 border border-slate-700 rounded-lg p-2 text-xs text-slate-300 max-w-xs ml-6">
                              {criterion.tooltip}
                            </div>
                          )}
                        </div>
                      </td>
                      {selectedServices.map(serviceId => (
                        <td key={serviceId} className="p-4 text-center">
                          {criterion.values[serviceId] ? (
                            <Check size={20} className="text-green-400 mx-auto" />
                          ) : (
                            <X size={20} className="text-red-400 mx-auto" />
                          )}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Price calculation */}
        {selectedServices.length > 0 && (
          <div className={`bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/30 p-8 mb-12 ${inView ? 'animate-fadeIn delay-600' : 'opacity-0'}`}>
            <h3 className="text-xl font-bold font-fixedsys text-white mb-6 text-center">
              Расчет стоимости
            </h3>
            {(() => {
              const calc = getRecommendation()
              return (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold font-fixedsys text-slate-400 mb-1">
                      {calc.total.toLocaleString()} ₽
                    </div>
                    <div className="text-slate-500 text-sm">Базовая стоимость</div>
                  </div>
                  {calc.discount > 0 && (
                    <div className="text-center">
                      <div className="text-2xl font-bold font-fixedsys text-red-400 mb-1">
                        -{calc.discount}%
                      </div>
                      <div className="text-slate-500 text-sm">Скидка за комплекс</div>
                    </div>
                  )}
                  <div className="text-center">
                    <div className="text-3xl font-bold font-fixedsys text-teal-400 mb-1">
                      {calc.finalPrice.toLocaleString()} ₽
                    </div>
                    <div className="text-slate-500 text-sm">Итоговая стоимость</div>
                    {calc.savings > 0 && (
                      <div className="text-green-400 text-xs mt-1">
                        Экономия: {calc.savings.toLocaleString()} ₽
                      </div>
                    )}
                  </div>
                </div>
              )
            })()}
          </div>
        )}

        {/* Recommendations */}
        <div className={`${inView ? 'animate-fadeInUp delay-800' : 'opacity-0'}`}>
          <h3 className="text-2xl font-bold font-fixedsys text-white text-center mb-8">
            Рекомендации по выбору
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {recommendations.map((rec, index) => (
              <div 
                key={index}
                className={`bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover-lift transition-all cursor-pointer group`}
                onClick={() => setSelectedServices(rec.recommended)}
              >
                <h4 className={`font-bold font-fixedsys text-${rec.color}-400 mb-3 group-hover:text-${rec.color}-300 transition-colors`}>
                  {rec.title}
                </h4>
                <p className="text-slate-400 text-sm mb-4">
                  {rec.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {rec.recommended.map(serviceId => {
                    const service = services[serviceId]
                    const IconComponent = service.icon
                    return (
                      <div key={serviceId} className={`flex items-center gap-1 px-2 py-1 rounded bg-${service.color}-900/30 text-${service.color}-400`}>
                        <IconComponent size={12} />
                        <span className="text-xs">{service.name}</span>
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        {selectedServices.length > 0 && (
          <div className={`mt-12 text-center ${inView ? 'animate-fadeIn delay-1000' : 'opacity-0'}`}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys group"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Обсудить выбранные услуги
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
