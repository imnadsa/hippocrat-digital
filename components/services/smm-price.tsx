import { useState, useEffect, useRef } from "react"
import { 
  CheckCircle,
  Star,
  Award,
  Shield,
  Calendar,
  Users,
  FileText,
  Clock,
  MapPin,
  CreditCard,
  Stethoscope,
  Target,
  TrendingUp
} from "lucide-react"

export default function SmmPricing() {
  const [inView, setInView] = useState(false)
  const [selectedPlan, setSelectedPlan] = useState(1) // Второй план по умолчанию
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
      name: "Базовый SMM",
      price: "40 000 ₽",
      originalPrice: "50 000 ₽",
      description: "Комплексное ведение социальных сетей для медицинских учреждений",
      popular: false,
      features: [
        "Разработка стратегии ведения аккаунта",
        "Модернизация группы/профиля",
        "Анализ конкурентов",
        "Написание и публикация постов на месяц (20-30 штук)",
        "Дублирование контента во все соц.сети",
        "Подготовка расширенного аналитического отчета",
        "Оформление профилей в едином стиле",
        "Создание актуальных хештегов для медицинской тематики"
      ],
      notIncluded: [
        "Реклама в социальных сетях",
        "Расширенная аналитика конкурентов",
        "Видеоконтент"
      ]
    },
    {
      name: "SMM + Реклама",
      price: "65 000 ₽", 
      originalPrice: "80 000 ₽",
      description: "Полный пакет: ведение + продвижение с рекламой",
      popular: true,
      features: [
        "Все возможности тарифа 'Базовый SMM'",
        "Настройка и ведение рекламных кампаний",
        "Таргетированная реклама ВКонтакте и Одноклассники",
        "Реклама в Telegram каналах",
        "Создание рекламных креативов",
        "Оптимизация рекламного бюджета",
        "Расширенная аналитика эффективности",
        "A/B тестирование рекламных материалов",
        "Ежедневный мониторинг показателей"
      ],
      notIncluded: [
        "Видеопродакшн",
        "Инфлюенсер маркетинг"
      ]
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
            Тарифы SMM
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Продвижение в{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              социальных сетях
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto mb-6">
            Привлекаем пациентов через ВКонтакте, Одноклассники и Telegram. Контент адаптирован под медицинскую специфику и требования российского законодательства
          </p>
          <div className="inline-block px-6 py-2 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 rounded-lg">
            <span className="text-red-400 font-semibold">Акция до конца месяца: скидка до 20%</span>
          </div>
        </div>

        {/* Карточки тарифов */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 max-w-5xl mx-auto">
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
                  <div className="text-slate-400 text-sm mt-1">в месяц</div>
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
                Заказать SMM ведение
              </button>

              {/* Список возможностей */}
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <CheckCircle className="text-teal-400 flex-shrink-0 mt-0.5" size={16} />
                    <span className="text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
                
                {plan.notIncluded && plan.notIncluded.length > 0 && (
                  <>
                    <div className="border-t border-slate-700/50 pt-3 mt-4">
                      <span className="text-slate-500 text-xs uppercase tracking-wide">Не включено:</span>
                    </div>
                    {plan.notIncluded && plan.notIncluded.map((feature, featureIndex) => (
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

        {/* Статистика */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold font-fixedsys text-teal-400 mb-2">20-30</div>
            <div className="text-slate-400 text-sm">постов в месяц</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-fixedsys text-indigo-400 mb-2">3-5</div>
            <div className="text-slate-400 text-sm">социальных сетей</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold font-fixedsys text-teal-400 mb-2">24/7</div>
            <div className="text-slate-400 text-sm">мониторинг</div>
          </div>
        </div>

        {/* CTA секция */}
        <div className="bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/30 p-8 text-center">
          <h3 className="text-2xl font-bold font-fixedsys text-white mb-4">
            Нужна консультация по выбору тарифа?
          </h3>
          <p className="text-slate-400 mb-6 max-w-2xl mx-auto">
            Наши SMM-специалисты помогут определить оптимальную стратегию продвижения для вашей клиники. 
            Консультация и анализ конкурентов бесплатно.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              className="px-8 py-3 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white rounded-lg font-semibold transition-all hover-lift"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Получить консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
