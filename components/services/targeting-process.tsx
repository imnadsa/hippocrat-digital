"use client"

import { Search, Users, Palette, Settings, BarChart, TrendingUp, Repeat } from "lucide-react"

export default function TargetingProcess() {
  const steps = [
    {
      icon: Search,
      title: "Анализ и аудит",
      description: "Изучаем специфику клиники, целевую аудиторию, конкурентов и текущие рекламные кампании",
      color: "teal"
    },
    {
      icon: Users,
      title: "Определение ЦА",
      description: "Создаем портреты идеальных пациентов на основе данных и составляем стратегию таргетинга",
      color: "indigo"
    },
    {
      icon: Palette,
      title: "Креативы и тексты",
      description: "Разрабатываем объявления с учетом медицинской этики, создаем Landing Pages под каждую услугу",
      color: "teal"
    },
    {
      icon: Settings,
      title: "Настройка кампаний",
      description: "Запускаем кампании в Facebook, Instagram, ВКонтакте, настраиваем автоматические правила",
      color: "indigo"
    },
    {
      icon: BarChart,
      title: "Тестирование",
      description: "A/B тестируем объявления, аудитории, креативы. Находим самые эффективные комбинации",
      color: "teal"
    },
    {
      icon: TrendingUp,
      title: "Оптимизация",
      description: "Анализируем результаты, отключаем неэффективные объявления, масштабируем успешные",
      color: "indigo"
    },
    {
      icon: Repeat,
      title: "Ретаргетинг",
      description: "Возвращаем посетителей с помощью умного ретаргетинга, увеличиваем конверсию",
      color: "teal"
    }
  ]

  return (
    <section id="targeting-process" className="py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Как мы работаем
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Процесс настройки{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              таргетированной рекламы
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            7 этапов создания эффективной рекламной кампании для вашей клиники
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={index} className="relative">
                <div 
                  className={`bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-${step.color}-500/30 transition-all h-full flex flex-col`}
                >
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-full bg-${step.color}-900/50 flex items-center justify-center text-${step.color}-400 mr-4`}>
                      <IconComponent size={24} />
                    </div>
                    <div className={`text-lg font-bold font-fixedsys text-${step.color}-400`}>
                      {index + 1}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 font-fixedsys text-white">{step.title}</h3>
                  <p className="text-slate-400 flex-grow">{step.description}</p>
                </div>
                
                {/* Connecting line for non-mobile */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-16 -right-4 w-8 z-0">
                    <div className="h-0.5 bg-gradient-to-r from-slate-700 to-transparent"></div>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-block bg-slate-900/50 rounded-xl border border-slate-800 p-6">
            <h3 className="text-xl font-semibold mb-2 font-fixedsys text-teal-400">Результат</h3>
            <p className="text-slate-400">
              Стабильный поток целевых пациентов с первой недели работы
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
