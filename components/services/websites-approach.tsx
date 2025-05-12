"use client"

import { useState, useEffect, useRef } from "react"
import { 
  Heart, 
  Shield, 
  Zap, 
  Users,
  Search,
  Palette
} from "lucide-react"

export default function WebsitesApproach() {
  const [inView, setInView] = useState(false)
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

  const principles = [
    {
      icon: Heart,
      title: "Медицинский подход",
      description: "Понимаем специфику здравоохранения",
      details: "Каждый сайт создаётся с учётом медицинской этики и требований отрасли. Мы знаем, как правильно подать информацию о медицинских услугах.",
      color: "teal"
    },
    {
      icon: Users,
      title: "Пациентоориентированность",
      description: "Фокус на потребностях пациентов",
      details: "Дизайн строится вокруг пути пациента: от поиска информации до записи на приём. Убираем барьеры на пути к получению медицинской помощи.",
      color: "indigo"
    },
    {
      icon: Zap,
      title: "Конверсионность",
      description: "Каждый элемент работает на результат",
      details: "Продуманная архитектура, правильные CTA, формы записи — всё направлено на превращение посетителей в пациентов.",
      color: "teal"
    },
    {
      icon: Shield,
      title: "Безопасность и конфиденциальность",
      description: "152-ФЗ и защита персональных данных",
      details: "Полное соответствие требованиям законодательства, SSL-сертификаты, шифрование данных пациентов.",
      color: "indigo"
    },
    {
      icon: Search,
      title: "SEO-оптимизация",
      description: "Видимость в поисковых системах",
      details: "Техническая оптимизация, правильная структура, микроразметка для медицинских услуг. Ваша клиника будет в топе поиска.",
      color: "teal"
    },
    {
      icon: Palette,
      title: "Индивидуальный дизайн",
      description: "Отражаем ценности клиники",
      details: "Создаём уникальный визуальный стиль, который соответствует позиционированию клиники и вызывает доверие у пациентов.",
      color: "indigo"
    }
  ]

  return (
    <section ref={sectionRef} id="websites-approach" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Анимированные декоративные элементы */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-3s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 ${inView ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Наш подход
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Принципы создания{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              медицинских сайтов
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Мы не просто создаём красивые сайты — мы разрабатываем инструменты для привлечения и удержания пациентов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((principle, index) => {
            const IconComponent = principle.icon
            return (
              <div 
                key={index} 
                className={`bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-${principle.color}-500/30 transition-all hover-lift hover-glow group ${
                  inView ? 'animate-scaleUp' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150 + 300}ms` }}
              >
                <div className={`w-14 h-14 rounded-full bg-${principle.color}-900/50 flex items-center justify-center text-${principle.color}-400 mb-5 group-hover:animate-iconBounce transition-all`}>
                  <IconComponent size={28} />
                </div>
                <h3 className="text-xl font-semibold mb-3 font-fixedsys text-white group-hover:text-teal-400 transition-colors">
                  {principle.title}
                </h3>
                <p className="text-slate-400 text-sm mb-4">
                  {principle.description}
                </p>
                <p className="text-slate-500 text-xs leading-relaxed">
                  {principle.details}
                </p>
              </div>
            )
          })}
        </div>

        {/* Дополнительная секция с результатами */}
        <div className={`mt-16 bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/30 p-8 ${inView ? 'animate-fadeIn delay-1000' : 'opacity-0'}`}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold font-fixedsys text-white mb-4">
              Результаты нашего подхода
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-teal-900/50 flex items-center justify-center mx-auto mb-4 group-hover:animate-iconBounce">
                <span className="text-2xl font-bold font-fixedsys text-teal-400">3x</span>
              </div>
              <h4 className="font-semibold text-white mb-2 font-fixedsys">Больше заявок</h4>
              <p className="text-slate-400 text-sm">
                Оптимизированная структура сайта увеличивает количество заявок в среднем в 3 раза
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-indigo-900/50 flex items-center justify-center mx-auto mb-4 group-hover:animate-iconBounce">
                <span className="text-2xl font-bold font-fixedsys text-indigo-400">24%</span>
              </div>
              <h4 className="font-semibold text-white mb-2 font-fixedsys">Конверсия</h4>
              <p className="text-slate-400 text-sm">
                Средняя конверсия сайтов наших клиентов — 24% (в 3 раза выше среднего по рынку)
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-teal-900/50 flex items-center justify-center mx-auto mb-4 group-hover:animate-iconBounce">
                <span className="text-2xl font-bold font-fixedsys text-teal-400">-40%</span>
              </div>
              <h4 className="font-semibold text-white mb-2 font-fixedsys">Отказы</h4>
              <p className="text-slate-400 text-sm">
                Продуманная навигация и UX снижают процент отказов на 40%
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
