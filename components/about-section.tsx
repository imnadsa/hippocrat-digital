"use client"

import { Brain, Beaker, Stethoscope, Activity } from "lucide-react"

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы с анимацией */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground delay-700"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-teal-400/5 rounded-full blur-xl animate-pulse-slow delay-300"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2 animate-fadeInLeft">
            <div className="px-4 py-1 inline-block rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6 hover:border-teal-500/50 transition-all duration-300">
              О нас
            </div>
            <h2 className="text-2xl md:text-4xl font-bold mb-6 font-fixedsys animate-fadeInUp delay-100">
              <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-text">
                Digital маркетинг от медиков
              </span>
            </h2>
            <p className="text-slate-300 mb-6 animate-fadeInUp delay-200 text-shadow">
              Hippocrat Digital создан студентами-медиками, которые знают и понимают специфику медицинской сферы изнутри. 
              Наша миссия — помогать медицинским учреждениям привлекать пациентов и выстраивать долгосрочные отношения 
              с ними через современные цифровые инструменты.
            </p>
            <p className="text-slate-300 animate-fadeInUp delay-300 text-shadow">
              Мы объединяем знания в области медицины с экспертизой в digital-маркетинге, 
              чтобы создавать эффективные стратегии продвижения, учитывающие все особенности 
              и ограничения медицинской сферы.
            </p>
          </div>
          <div className="w-full md:w-1/2 animate-fadeInRight">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 transition-all duration-300 hover-lift hover-glow animate-scaleUp delay-100 blur-backdrop">
                <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-4 animate-iconBounce delay-200">
                  <Brain size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-fixedsys text-shadow">Медицинская экспертиза</h3>
                <p className="text-slate-400 text-sm">
                  Понимаем потребности клиник и особенности продвижения медицинских услуг
                </p>
              </div>
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 transition-all duration-300 hover-lift hover-glow animate-scaleUp delay-200 blur-backdrop">
                <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-4 animate-iconBounce delay-300">
                  <Beaker size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-fixedsys text-shadow">Инновационные подходы</h3>
                <p className="text-slate-400 text-sm">Используем современные технологии и методы продвижения</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 transition-all duration-300 hover-lift hover-glow animate-scaleUp delay-300 blur-backdrop">
                <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-4 animate-iconBounce delay-400">
                  <Stethoscope size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-fixedsys text-shadow">Медицинская этика</h3>
                <p className="text-slate-400 text-sm">Соблюдаем все правовые и этические нормы при продвижении</p>
              </div>
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 transition-all duration-300 hover-lift hover-glow animate-scaleUp delay-400 blur-backdrop">
                <div className="w-12 h-12 rounded-full bg-indigo-900/50 flex items-center justify-center text-indigo-400 mb-4 animate-iconBounce delay-500">
                  <Activity size={24} />
                </div>
                <h3 className="text-xl font-semibold mb-2 font-fixedsys text-shadow">Рост показателей</h3>
                <p className="text-slate-400 text-sm">Фокусируемся на привлечении целевых пациентов и увеличении прибыли</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
