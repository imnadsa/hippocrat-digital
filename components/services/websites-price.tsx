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
      description: "Функциональный сайт для небольшой клиники",
      popular: false,
      features: [
        "Адаптивный дизайн под все устройства",
        "Базовая система записи онлайн",
        "Страницы услуг и врачей", 
        "Контактная информация и карта",
        "Соответствие 152-ФЗ",
        "SSL-сертификат и хостинг на год",
        "Интеграция с телефонией",
        "Базовая SEO-оптимизация"
      ],
    },
    {
      name: "Стандарт",
      price: "82 000 ₽", 
      originalPrice: "110 000 ₽",
      description: "Полнофункциональное решение для активно растущей клиники",
      popular: true,
      features: [
        "Все возможности тарифа 'Старт'",
        "Интеграция с CRM системой",
        "Система управления отзывами",
        "Личный кабинет для пациентов",
        "История болезни и результаты анализов",
        "Расширенная аналитика посещений",
        "Чат-бот для первичной консультации"
      ],
    },
    {
      name: "Престиж",
      price: "240 000 ₽",
      originalPrice: "320 000 ₽", 
      description: "Премиальное решение для крупных медицинских центров",
      popular: false,
      features: [
        "Все возможности тарифа 'Стандарт'",
        "Система электронной медкарты",
        "Интеграция с медицинским оборудованием",
        "Собственная система видеосвязи",
        "Модуль управления персоналом",
        "Финансовая отчетность и аналитика",
        "Система лояльности пациентов",
        "Многоуровневая система доступов",
        "Интеграция с страховыми компаниями",
        "Круглосуточная техническая поддержка"
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

        {/* Дополнительная информация */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 text-center">
            <Clock className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
            <h4 className="font-semibold font-fixedsys text-white mb-2">Быстрый запуск</h4>
            <p className="text-slate-400 text-sm">От 14 рабочих дней до готового сайта</p>
          </div>
          
          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 text-center">
            <Stethoscope className="w-8 h-8 text-teal-400 mx-auto mb-3" />
            <h4 className="font-semibold font-fixedsys text-white mb-2">Медицинская специфика</h4>
            <p className="text-slate-400 text-sm">Учитываем все требования отрасли</p>
          </div>
          
          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 text-center">
            <Users className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
            <h4 className="font-semibold font-fixedsys text-white mb-2">Поддержка 24/7</h4>
            <p className="text-slate-400 text-sm">Круглосуточная техподдержка</p>
          </div>
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
