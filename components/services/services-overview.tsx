"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { 
  Target, 
  Globe, 
  MessageSquare, 
  Search, 
  Brain,
  ArrowRight
} from "lucide-react"

export default function ServicesOverview() {
  const [inView, setInView] = useState(false)
  const [hoveredService, setHoveredService] = useState<number | null>(null)
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

    return () => {
        if(sectionRef.current) {
            observer.unobserve(sectionRef.current)
        }
    }
  }, [])

  const services = [
    {
      icon: Target,
      title: "Таргетированная реклама",
      shortDesc: "Точное попадание в целевую аудиторию",
      fullDesc: "Настраиваем рекламу в социальных сетях с учетом медицинской специфики. Привлекаем именно тех пациентов, которые нуждаются в ваших услугах.",
      features: [
        "Соблюдение ФЗ-38 о рекламе",
        "Геотаргетинг по районам",
        "Поведенческие сегменты", 
        "Ретаргетинг посетителей"
      ],
      stats: {
        conversion: "+200%",
        cost: "-40%",
        reach: "95%",
        time: "2-3 дня"
      },
      price: "от 25 000 ₽",
      color: "teal",
      link: "/services/targeting"
    },
    {
      icon: Globe,
      title: "Разработка сайтов",
      shortDesc: "Сайты, которые превращают посетителей в пациентов",
      fullDesc: "Создаем современные сайты для медицинских клиник с акцентом на конверсию, соблюдением 152-ФЗ и интеграцией с CRM системами.",
      features: [
        "Система онлайн-записи",
        "Соответствие 152-ФЗ",
        "SEO-оптимизация",
        "Интеграция с CRM"
      ],
      stats: {
        conversion: "85%",
        cost: "3.2s",
        reach: "100%",
        time: "30-45 дней"
      },
      price: "от 41 000 ₽",
      color: "indigo",
      link: "/services/websites"
    },
    {
      icon: MessageSquare,
      title: "SMM продвижение",
      shortDesc: "Превращаем соцсети в источник пациентов",
      fullDesc: "Ведем социальные сети медицинских клиник с соблюдением этических норм. Создаем контент, который привлекает и удерживает аудиторию.",
      features: [
        "Медицинская этика",
        "Контент-планирование",
        "Работа с отзывами",
        "Аналитика эффективности"
      ],
      stats: {
        conversion: "+300%",
        cost: "8.3%",
        reach: "87%",
        time: "1-2 недели"
      },
      price: "от 40 000 ₽",
      color: "teal",
      link: "/services/smm"
    },
    {
      icon: Search,
      title: "Контекстная реклама",
      shortDesc: "Эффективная реклама в поисковых системах",
      fullDesc: "Настраиваем контекстную рекламу в Яндекс.Директ и Google Ads для медицинских услуг с учетом всех ограничений и требований.",
      features: [
        "Яндекс.Директ",
        "Медицинские ограничения",
        "Геотаргетинг",
        "Оптимизация ставок"
      ],
      stats: {
        conversion: "12.5%",
        cost: "-35%",
        reach: "92%",
        time: "3-5 дней"
      },
      price: "от 30 000 ₽",
      color: "indigo",
      link: "/services/contextual"
    },
    {
      icon: Brain,
      title: "ИИ-решения",
      shortDesc: "Искусственный интеллект для медицины",
      fullDesc: "Внедряем ИИ-технологии для автоматизации процессов в клиниках: чат-боты, системы диагностики, анализ данных пациентов.",
      features: [
        "Медицинские чат-боты",
        "Диагностическое ИИ",
        "Анализ изображений",
        "Поддержка решений"
      ],
      stats: {
        conversion: "60%",
        cost: "-65%",
        reach: "98%",
        time: "2-6 месяцев"
      },
      price: "от 50 000 ₽",
      color: "teal",
      link: "/services/ai-solutions"
    }
  ]

  const goToService = (link: string) => {
    window.location.href = link
  }

  return (
    <section ref={sectionRef} id="services-overview" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-4s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Все направления
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Наши{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              digital-услуги
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-3xl mx-auto">
            Комплексные решения для медицинского маркетинга: от привлечения пациентов 
            до автоматизации процессов с помощью современных технологий
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isHovered = hoveredService === index
            
            return (
              <div 
                key={index}
                className={`relative group transition-all duration-700 ${
                  inView ? 'animate-slideInStagger opacity-100' : 'opacity-0 translate-y-8'
                }`}
                style={{ animationDelay: `${index * 150 + 300}ms` }}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className={`
                  relative bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/60 
                  p-6 sm:p-8 h-full flex flex-col transition-all duration-500 ease-out
                  hover:border-${service.color}-500/30 hover:shadow-2xl hover:shadow-${service.color}-900/10
                  hover-lift transform-gpu will-change-transform cursor-pointer
                `}>
                  
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <IconComponent size={36} className={`text-${service.color}-400 flex-shrink-0 mt-1`} />
                    <div className="flex-grow">
                      <h3 className="text-xl font-bold font-fixedsys text-white group-hover:text-teal-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-slate-400 text-sm mt-1">
                        {service.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm mb-6 leading-relaxed flex-grow">
                    {service.fullDesc}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-3 font-fixedsys text-sm">Включает:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm text-slate-400">
                          <span className={`w-1.5 h-1.5 bg-${service.color}-400 rounded-full mr-3 mt-2 flex-shrink-0`}></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stats */}
                  {isHovered && (
                    <div className="mb-6 animate-fadeIn">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                          <div className={`text-lg font-bold font-fixedsys text-${service.color}-400`}>
                            {service.stats.conversion}
                          </div>
                          <div className="text-xs text-slate-500">Результат</div>
                        </div>
                        <div className="bg-slate-900/50 rounded-lg p-3 text-center">
                          <div className={`text-lg font-bold font-fixedsys text-${service.color}-400`}>
                            {service.stats.time}
                          </div>
                          <div className="text-xs text-slate-500">Срок</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Price & CTA */}
                  <div className="mt-auto">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-slate-400 text-sm">Стоимость:</span>
                      <span className={`font-bold font-fixedsys text-${service.color}-400`}>
                        {service.price}
                      </span>
                    </div>
                    
                    <Button
                      className={`w-full font-fixedsys transition-all duration-300 group/btn ${
                        service.color === 'teal'
                          ? 'bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700'
                          : 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700'
                      }`}
                      onClick={() => goToService(service.link)}
                    >
                      Подробнее
                      <ArrowRight size={16} className="ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </Button>
                  </div>

                  {/* Декоративные элементы */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r from-teal-400/20 to-indigo-400/20 opacity-60"></div>
                  <div className="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-gradient-to-r from-indigo-400/30 to-teal-400/30"></div>
                  
                  {/* Hover gradient overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className={`mt-16 text-center ${inView ? 'animate-fadeInUp delay-1000' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/30 p-8">
            <h3 className="text-2xl font-bold font-fixedsys text-white mb-4">
              Не знаете, что выбрать?
            </h3>
            <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
              Получите бесплатную консультацию по выбору оптимальных услуг для вашей клиники
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys group"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Получить консультацию
              <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
