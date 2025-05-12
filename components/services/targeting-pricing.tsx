"use client"

import { Button } from "@/components/ui/button"
import { Check, Star, Zap, Crown } from "lucide-react"

export default function TargetingPricing() {
  const plans = [
    {
      name: "Стартовый",
      icon: Zap,
      price: "25 000",
      budget: "до 50 000",
      description: "Идеально для начинающих клиник",
      features: [
        "1-2 рекламные кампании",
        "Базовые аудитории",
        "Еженедельные отчеты",
        "Телеграм-поддержка",
        "1 лендинг пейдж",
        "Настройка пикселей"
      ],
      popular: false,
      color: "slate"
    },
    {
      name: "Оптимальный",
      icon: Star,
      price: "45 000",
      budget: "до 150 000",
      description: "Самый популярный тариф",
      features: [
        "3-5 рекламных кампаний",
        "Lookalike аудитории",
        "Ретаргетинг",
        "2 раза в неделю отчеты",
        "Персональный менеджер",
        "3 лендинг пейджа",
        "A/B тесты объявлений",
        "Бесплатные правки"
      ],
      popular: true,
      color: "teal"
    },
    {
      name: "Премиум",
      icon: Crown,
      price: "75 000",
      budget: "от 200 000",
      description: "Для крупных клиник",
      features: [
        "Безлимит кампаний",
        "Все виды таргетинга",
        "Управление мультиаккаунтами",
        "Ежедневные отчеты",
        "Выделенная команда",
        "Безлимит лендингов",
        "Креативы по ТЗ",
        "Интеграция с CRM",
        "Видеокреативы",
        "24/7 поддержка"
      ],
      popular: false,
      color: "indigo"
    }
  ]

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="targeting-pricing" className="py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Тарифы
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Пакеты{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              таргетированной рекламы
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Выберите подходящий тариф в зависимости от размера клиники и рекламного бюджета
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <div 
                key={index} 
                className={`relative bg-slate-900/50 rounded-xl border transition-all hover:shadow-lg ${
                  plan.popular 
                    ? 'border-teal-500 hover:shadow-teal-900/20' 
                    : 'border-slate-800 hover:border-teal-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white px-4 py-1 rounded-full text-sm font-bold font-fixedsys">
                      Популярный
                    </div>
                  </div>
                )}
                
                <div className="p-8">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 rounded-full bg-${plan.color === 'slate' ? 'slate' : plan.color}-900/50 flex items-center justify-center mx-auto mb-4`}>
                      <IconComponent size={32} className={`text-${plan.color === 'slate' ? 'slate' : plan.color}-400`} />
                    </div>
                    <h3 className="text-2xl font-bold font-fixedsys text-white mb-2">{plan.name}</h3>
                    <p className="text-slate-400 text-sm">{plan.description}</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="flex items-baseline justify-center gap-1">
                      <span className={`text-3xl font-bold font-fixedsys text-${plan.color === 'slate' ? 'white' : plan.color}-400`}>
                        {plan.price}
                      </span>
                      <span className="text-slate-400">₽/мес</span>
                    </div>
                    <div className="text-slate-500 text-sm mt-1">
                      При рекламном бюджете {plan.budget} ₽/мес
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Check size={20} className={`text-${plan.color === 'slate' ? 'green' : plan.color}-400 mr-3 mt-0.5 flex-shrink-0`} />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? 'bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700'
                        : plan.color === 'indigo'
                        ? 'bg-gradient-to-r from-indigo-500 to-indigo-700 hover:from-indigo-600 hover:to-indigo-800'
                        : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    } font-fixedsys`}
                    onClick={scrollToContact}
                  >
                    Выбрать тариф
                  </Button>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6">
            <h3 className="text-lg font-bold font-fixedsys text-white mb-2">
              Нужен индивидуальный тариф?
            </h3>
            <p className="text-slate-400 text-sm mb-4">
              Для крупных медицинских сетей мы создаем персональные пакеты с особыми условиями
            </p>
            <Button
              variant="outline"
              className="border-teal-700 text-teal-400 hover:bg-teal-950/50"
              onClick={scrollToContact}
            >
              Обсудить индивидуальный тариф
            </Button>
          </div>
        </div>

        <div className="mt-8 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-teal-400 font-bold font-fixedsys">14 дней</div>
              <div className="text-slate-500 text-sm">Бесплатный тестовый период</div>
            </div>
            <div className="text-center">
              <div className="text-indigo-400 font-bold font-fixedsys">Без агентского %</div>
              <div className="text-slate-500 text-sm">Фиксированная стоимость ведения</div>
            </div>
            <div className="text-center">
              <div className="text-teal-400 font-bold font-fixedsys">30 дней</div>
              <div className="text-slate-500 text-sm">Гарантия возврата средств</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
