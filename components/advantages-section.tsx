"use client"

import { ChevronRight, Users, Percent, TrendingUp, Scale } from "lucide-react"

export default function AdvantagesSection() {
  return (
    <section id="advantages" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы с улучшенной анимацией */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground delay-600"></div>
      <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow delay-400"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full md:w-2/5 animate-fadeInLeft">
            <div className="px-4 py-1 inline-block rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6 hover:border-teal-500/50 transition-all duration-300">
              Преимущества
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-fixedsys animate-fadeInUp delay-100">
              Почему выбирают{" "}
              <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-text">
                нас
              </span>
            </h2>
            <p className="text-slate-400 mb-8 animate-fadeInUp delay-200 text-shadow">
              Мы понимаем потребности медицинского бизнеса и предлагаем эффективные решения для привлечения пациентов и увеличения прибыли вашей клиники.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-3 animate-slideInStagger delay-300">
                <div className="w-6 h-6 rounded-full bg-teal-900/50 flex items-center justify-center mt-1 flex-shrink-0 animate-scaleUp delay-400 hover:scale-110 transition-transform duration-300">
                  <ChevronRight size={14} className="text-teal-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white font-fixedsys text-shadow">Понимаем специфику медицины</h4>
                  <p className="text-slate-400 text-sm">Создатели агентства — медики, понимающие отрасль изнутри</p>
                </div>
              </div>

              <div className="flex items-start gap-3 animate-slideInStagger delay-400">
                <div className="w-6 h-6 rounded-full bg-teal-900/50 flex items-center justify-center mt-1 flex-shrink-0 animate-scaleUp delay-500 hover:scale-110 transition-transform duration-300">
                  <ChevronRight size={14} className="text-teal-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white font-fixedsys text-shadow">Комплексный подход</h4>
                  <p className="text-slate-400 text-sm">От стратегии до реализации и аналитики — полный цикл работ</p>
                </div>
              </div>

              <div className="flex items-start gap-3 animate-slideInStagger delay-500">
                <div className="w-6 h-6 rounded-full bg-teal-900/50 flex items-center justify-center mt-1 flex-shrink-0 animate-scaleUp delay-600 hover:scale-110 transition-transform duration-300">
                  <ChevronRight size={14} className="text-teal-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white font-fixedsys text-shadow">Фокус на результат</h4>
                  <p className="text-slate-400 text-sm">Увеличиваем количество обращений и рост прибыли клиники</p>
                </div>
              </div>

              <div className="flex items-start gap-3 animate-slideInStagger delay-600">
                <div className="w-6 h-6 rounded-full bg-teal-900/50 flex items-center justify-center mt-1 flex-shrink-0 animate-scaleUp delay-700 hover:scale-110 transition-transform duration-300">
                  <ChevronRight size={14} className="text-teal-400" />
                </div>
                <div>
                  <h4 className="font-medium text-white font-fixedsys text-shadow">Соблюдение медицинской этики</h4>
                  <p className="text-slate-400 text-sm">Маркетинг с учетом всех ограничений и особенностей медицинской рекламы</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full md:w-3/5 grid grid-cols-1 sm:grid-cols-2 gap-6 animate-fadeInRight">
            <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-teal-500/30 transition-all duration-300 hover-lift hover-glow blur-backdrop animate-scaleUp delay-200">
              <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-5 animate-iconBounce delay-300">
                <Users size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-fixedsys text-shadow">Больше пациентов</h3>
              <p className="text-slate-400">
                Наши клиенты получают стабильный поток новых пациентов благодаря таргетированным рекламным кампаниям и оптимизации сайтов.
              </p>
            </div>

            <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-indigo-500/30 transition-all duration-300 hover-lift hover-glow blur-backdrop animate-scaleUp delay-300">
              <div className="w-14 h-14 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-5 animate-iconBounce delay-400">
                <Percent size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-fixedsys text-shadow">Высокая конверсия</h3>
              <p className="text-slate-400">
                Превращаем интерес в действия: обращения, звонки и запись на приём благодаря оптимизации воронки продаж.
              </p>
            </div>

            <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-teal-500/30 transition-all duration-300 hover-lift hover-glow blur-backdrop animate-scaleUp delay-400">
              <div className="w-14 h-14 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-5 animate-iconBounce delay-500">
                <TrendingUp size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-fixedsys text-shadow">Рост прибыли</h3>
              <p className="text-slate-400">
                Наши стратегии направлены не только на привлечение новых пациентов, но и на повышение среднего чека и частоты визитов.
              </p>
            </div>

            <div className="bg-slate-800/20 rounded-xl border border-slate-700/30 p-6 hover:border-indigo-500/30 transition-all duration-300 hover-lift hover-glow blur-backdrop animate-scaleUp delay-500">
              <div className="w-14 h-14 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-5 animate-iconBounce delay-600">
                <Scale size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-3 font-fixedsys text-shadow">Соблюдение законов</h3>
              <p className="text-slate-400">
                Все рекламные кампании соответствуют законодательству о рекламе медицинских услуг и требованиям регуляторов.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
