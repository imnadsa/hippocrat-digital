import { useState, useEffect, useRef } from "react"
import { 
  CheckCircle,
  Star,
  Award,
  Shield,
  Calendar,
  Phone,
  Users,
  FileText,
  Clock,
  MapPin,
  CreditCard,
  Stethoscope
} from "lucide-react"

export default function MedicalPricing() {
  const [inView, setInView] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(1) // Средний план по умолчанию
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

  const plans = [
    {
      name: "Старт",
      price: "41 000 ₽",
      originalPrice: "55 000 ₽",
      description: "Готовая интернет-площадка для частной практики",
      popular: false,
      features: [
        "Современный отзывчивый дизайн",
        "Стандартный функционал",
        "Административная панель управления",
        "Хостинг и доменное имя",
        "Базовая поисковая оптимизация"
      ],
      notIncluded: [
        "CRM интеграция",
        "Личный кабинет пациентов",
        "Онлайн-консультации"
      ]
    },
    {
      name: "Стандарт",
      price: "82 000 ₽", 
      originalPrice: "110 000 ₽",
      description: "Индивидуальная разработка с широким функционалом",
      popular: true,
      features: [
        "Уникальный креативный дизайн",
        "Солидный набор функций",
        "Все возможности тарифа 'Старт'",
        "Логотип и фирменный стиль компании",
        "Продвижение и подготовка к запуску",
        "Приоритетная работа по проекту",
        "Интеграция с внешними системами"
      ],
      notIncluded: [
        "Телемедицина",
        "Мобильное приложение"
      ]
    },
    {
      name: "Престиж",
      price: "240 000 ₽",
      originalPrice: "320 000 ₽", 
      description: "Сайт с вашим уникальным дизайном и контентным наполнением",
      popular: false,
      features: [
        "Доработка готового дизайна по фирменному стилю + расширенный набор функций",
        "Или уникальный эксклюзивный дизайн + стандартный набор функций",
        "Все возможности тарифа 'Стандарт'",
        "Уникальные тексты",
        "Заполнение контентом",
        "Платформа телемедицины"
      ],
      notIncluded: []
    }
  ]

  return (
    <section ref={sectionRef} className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '-2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Заголовок */}
        <div className={`text-center mb-12 ${inView ? 'opacity-100' : 'opacity-0'}`}>
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Тарифы
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Создаем сайт{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              с гарантией результата
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-6">
            Каждый сайт адаптирован под специфику медицинской деятельности и соответствует всем требованиям отрасли
          </p>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg">
            <span className="text-red-400 font-semibold">Акция до конца месяца: скидка до 25%</span>
          </div>
        </div>

        {/* Карточки тарифов */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-slate-800/40 rounded-xl border p-8 transition-all hover-lift cursor-pointer ${
                plan.popular 
                  ? 'border-teal-500/50 bg-gradient-to-b from-teal-500/5 to-indigo-500/5' 
                  : 'border-slate-700/30 hover:border-teal-500/30'
              } ${selectedPlan === index ? 'ring-2 ring-teal-500/50' : ''}`}
              onClick={() => setSelectedPlan(index)}
            >
              {/* Популярный значок */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                    <Star size={14} />
                    Популярный выбор
                  </div>
                </div>
              )}

              {/* Заголовок тарифа */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-bold font-fixedsys text-white mb-2">{plan.name}</h3>
                <div className="mb-2">
                  <span className="text-3xl font-bold text-white">от {plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-slate-400 line-through text-lg ml-2">{plan.originalPrice}</span>
                  )}
                </div>
                <p className="text-slate-400 text-sm">{plan.description}</p>
              </div>

              {/* Кнопка заказа */}
              <button 
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all mb-6 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white'
                    : 'bg-slate-700/50 hover:bg-slate-600/50 text-white border border-slate-600/50'
                }`}
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Заказать разработку
              </button>

              {/* Список возможностей */}
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
                
                {plan.notIncluded.length > 0 && (
                  <>
                    <div className="border-t border-slate-700/50 pt-3 mt-4">
                      <span className="text-slate-500 text-xs uppercase tracking-wide">Не включено:</span>
                    </div>
                    {plan.notIncluded.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="w-4 h-4 border border-slate-600 rounded-full flex-shrink-0 mt-0.5"></div>
                        <span className="text-slate-500 text-sm">{feature}</span>
                      </div>
                    ))}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA секция */}
        <div className="bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/30 p-8 text-center">
          <h3 className="text-2xl font-bold font-fixedsys text-white mb-4">
            Не знаете, какой тариф выбрать?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Наши эксперты помогут подобрать оптимальное решение исходя из специфики вашей клиники и бюджета. 
            Консультация бесплатная.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white rounded-lg font-semibold transition-all hover-lift"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Получить консультацию
            </button>
            <button 
              className="px-8 py-3 bg-slate-700/50 hover:bg-slate-600/50 text-white rounded-lg font-semibold border border-slate-600/50 transition-all"
            >
              Посмотреть примеры работ
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
