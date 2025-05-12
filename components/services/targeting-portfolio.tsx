"use client"

import { Button } from "@/components/ui/button"
import { ArrowUpRight, TrendingUp, Users, DollarSign } from "lucide-react"

export default function TargetingPortfolio() {
  const cases = [
    {
      title: "Стоматология «Полный Порядок»",
      category: "Стоматология",
      description: "Запуск рекламы имплантации и эстетической стоматологии через таргетинг",
      results: [
        { label: "Рост лидов", value: "+150%", icon: TrendingUp, color: "teal" },
        { label: "Новых пациентов", value: "+43%", icon: Users, color: "teal" },
        { label: "Снижение CPA", value: "-35%", icon: DollarSign, color: "teal" }
      ],
      details: "Настроили таргетинг на взрослую аудиторию 35-55 лет в радиусе 15 км. Использовали behavio ральные сегменты «интерес к стоматологии» и lookalike на базе существующих пациентов.",
      duration: "3 месяца"
    },
    {
      title: "Клиника эстетической медицины",
      category: "Косметология",
      description: "Продвижение процедур лазерной эпиляции и омоложения",
      results: [
        { label: "ROI", value: "400%", icon: TrendingUp, color: "indigo" },
        { label: "Записей в день", value: "+15", icon: Users, color: "indigo" },
        { label: "CTR", value: "8.2%", icon: DollarSign, color: "indigo" }
      ],
      details: "Сегментировали аудиторию по полу и возрасту: женщины 25-45 для эпиляции, 35-55 для омоложения. Использовали ретаргетинг посетителей сайта.",
      duration: "6 месяцев"
    },
    {
      title: "Офтальмологический центр",
      category: "Офтальмология",
      description: "Привлечение пациентов на коррекцию зрения и лечение катаракты",
      results: [
        { label: "Конверсия", value: "12.5%", icon: TrendingUp, color: "teal" },
        { label: "Средний чек", value: "+25%", icon: DollarSign, color: "teal" },
        { label: "Стоимость лида", value: "450₽", icon: Users, color: "teal" }
      ],
      details: "Запустили отдельные кампании для молодёжи (коррекция зрения) и пожилых (катаракта). Добавили геотаргетинг с учётом транспортной доступности.",
      duration: "4 месяца"
    }
  ]

  const openExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer")
  }

  return (
    <section id="targeting-portfolio" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Кейсы
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Кейсы по{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              таргетированной рекламе
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Реальные результаты наших клиентов из разных сфер медицины
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {cases.map((caseItem, index) => (
            <div key={index} className="bg-slate-800/20 border border-slate-700/30 rounded-xl overflow-hidden hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/10 transition-all">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs">
                    {caseItem.category}
                  </span>
                  <span className="text-slate-500 text-xs">{caseItem.duration}</span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 font-fixedsys text-white">{caseItem.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{caseItem.description}</p>
                
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {caseItem.results.map((result, resultIndex) => {
                    const IconComponent = result.icon
                    return (
                      <div key={resultIndex} className="text-center">
                        <div className={`w-8 h-8 rounded-full bg-${result.color}-900/50 flex items-center justify-center mx-auto mb-2`}>
                          <IconComponent size={16} className={`text-${result.color}-400`} />
                        </div>
                        <div className={`text-lg font-bold font-fixedsys text-${result.color}-400`}>
                          {result.value}
                        </div>
                        <div className="text-xs text-slate-500">{result.label}</div>
                      </div>
                    )
                  })}
                </div>
                
                <p className="text-slate-400 text-xs mb-4">{caseItem.details}</p>
                
                <Button
                  variant="outline"
                  className="w-full border-slate-700 text-slate-300 hover:bg-slate-800/50 group"
                  onClick={() => openExternalLink("#")}
                >
                  <span>Подробнее о кейсе</span>
                  <ArrowUpRight size={16} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-8">
            <h3 className="text-xl font-bold font-fixedsys text-white mb-4">
              Хотите такие же результаты?
            </h3>
            <p className="text-slate-400 mb-6">
              Получите бесплатный аудит текущих рекламных кампаний и план по их оптимизации
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-lg font-fixedsys"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Получить бесплатный аудит
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
