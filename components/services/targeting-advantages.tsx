"use client"

import { Shield, MapPin, Brain, Activity, DollarSign, Zap } from "lucide-react"

export default function TargetingAdvantages() {
  return (
    <section id="targeting-advantages" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Преимущества
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Почему таргетинг эффективен{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              для клиник
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Современный таргетинг позволяет точно находить людей, которым действительно нужны ваши медицинские услуги
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-teal-500/30 transition-all">
            <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-5">
              <MapPin size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 font-fixedsys">Точная геолокация</h3>
            <p className="text-slate-400">
              Показываем рекламу только в радиусе доступности вашей клиники. Никаких пустых показов людям из других городов.
            </p>
          </div>

          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-indigo-500/30 transition-all">
            <div className="w-14 h-14 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-5">
              <Brain size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 font-fixedsys">Поведенческий таргетинг</h3>
            <p className="text-slate-400">
              Находим людей по их онлайн-поведению: искали стоматолога, читали о грыжах, интересовались лазерной эпиляцией.
            </p>
          </div>

          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-teal-500/30 transition-all">
            <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-5">
              <Shield size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 font-fixedsys">Соблюдение законов</h3>
            <p className="text-slate-400">
              Все объявления проходят модерацию по ФЗ-38 о рекламе. Избегаем проблем с Роспотребнадзором и Росздравнадзором.
            </p>
          </div>

          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-indigo-500/30 transition-all">
            <div className="w-14 h-14 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-5">
              <DollarSign size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 font-fixedsys">Контроль бюджета</h3>
            <p className="text-slate-400">
              Ежедневный мониторинг расходов, оптимизация ставок, отключение неэффективных объявлений. Каждый рубль работает.
            </p>
          </div>

          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-teal-500/30 transition-all">
            <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-5">
              <Zap size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 font-fixedsys">Быстрый старт</h3>
            <p className="text-slate-400">
              В отличие от SEO, результаты видны уже через 2-3 дня. Первые записи начинают поступать с первой недели.
            </p>
          </div>

          <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-indigo-500/30 transition-all">
            <div className="w-14 h-14 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-5">
              <Activity size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-3 font-fixedsys">Ретаргетинг</h3>
            <p className="text-slate-400">
              Возвращаем посетителей сайта, которые не записались. Напоминаем о клинике тем, кто уже проявил интерес.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
