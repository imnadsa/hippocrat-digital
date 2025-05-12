"use client"

import { TrendingUp, DollarSign, Users, Calendar, BarChart3 } from "lucide-react"

export default function TargetingResults() {
  const results = [
    {
      metric: "40%",
      description: "Снижение стоимости лида",
      details: "В среднем за первые 3 месяца",
      color: "teal"
    },
    {
      metric: "2.5x",
      description: "Рост конверсии в запись",
      details: "С лендинга в CRM клиники",
      color: "indigo"
    },
    {
      metric: "300%",
      description: "Увеличение ROI",
      details: "Возврат инвестиций за полгода",
      color: "teal"
    },
    {
      metric: "95%",
      description: "Клиентов продлевают",
      details: "Контракт после испытательного периода",
      color: "indigo"
    }
  ]

  return (
    <section id="targeting-results" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Результаты
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Результаты{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              наших клиентов
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Средние показатели медицинских клиник, работающих с нами более 6 месяцев
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {results.map((result, index) => (
            <div key={index} className={`bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-${result.color}-500/30 transition-all text-center`}>
              <div className={`text-3xl md:text-4xl font-bold font-fixedsys text-${result.color}-400 mb-2`}>
                {result.metric}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 font-fixedsys">
                {result.description}
              </h3>
              <p className="text-slate-400 text-sm">
                {result.details}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold font-fixedsys text-white mb-4">
                Реальный пример роста
              </h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                  <span className="text-slate-300">До таргетинга:</span>
                  <span className="font-bold text-white">15 записей/месяц</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-slate-900/50 rounded-lg">
                  <span className="text-slate-300">После 3 месяцев:</span>
                  <span className="font-bold text-teal-400">45 записей/месяц</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-gradient-to-r from-teal-900/30 to-indigo-900/30 rounded-lg border border-teal-500/30">
                  <span className="text-slate-300">Рост:</span>
                  <span className="font-bold text-teal-400">+200%</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                <Calendar size={24} className="mx-auto text-teal-400 mb-2" />
                <div className="text-xl font-bold font-fixedsys text-white mb-1">14 дней</div>
                <div className="text-slate-400 text-sm">Средний срок до первых результатов</div>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                <BarChart3 size={24} className="mx-auto text-indigo-400 mb-2" />
                <div className="text-xl font-bold font-fixedsys text-white mb-1">89%</div>
                <div className="text-slate-400 text-sm">Точность попадания в ЦА</div>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                <Users size={24} className="mx-auto text-teal-400 mb-2" />
                <div className="text-xl font-bold font-fixedsys text-white mb-1">12%</div>
                <div className="text-slate-400 text-sm">Средний CTR рекламы</div>
              </div>
              
              <div className="bg-slate-900/50 rounded-lg p-4 text-center">
                <DollarSign size={24} className="mx-auto text-indigo-400 mb-2" />
                <div className="text-xl font-bold font-fixedsys text-white mb-1">450₽</div>
                <div className="text-slate-400 text-sm">Средняя стоимость лида</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
