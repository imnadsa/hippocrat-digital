"use client"

import { Brain, Flask, Heart, TrendUp } from "phosphor-react"

export default function AboutSection() {
  return (
    <section id="about" className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы с анимацией */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground delay-700"></div>
      <div className="absolute top-1/3 right-1/4 w-20 h-20 bg-teal-400/5 rounded-full blur-xl animate-pulse-slow delay-300"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-2/3 animate-fadeInLeft">
            <div className="px-4 py-1 inline-block rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6 hover:border-teal-500/50 transition-all duration-300">
              О нас
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-fixedsys animate-fadeInUp delay-100">
              <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-text">
                Digital маркетинг от медиков
              </span>
            </h2>
            <p className="text-slate-300 mb-6 text-lg animate-fadeInUp delay-200 text-shadow leading-relaxed">
              Hippocrat Digital создан студентами-медиками, которые знают и понимают специфику медицинской сферы изнутри. 
              Наша миссия — помогать медицинским учреждениям привлекать пациентов и выстраивать долгосрочные отношения 
              с ними через современные цифровые инструменты.
            </p>
            <p className="text-slate-300 text-lg animate-fadeInUp delay-300 text-shadow leading-relaxed">
              Мы объединяем знания в области медицины с экспертизой в digital-маркетинге, 
              чтобы создавать эффективные стратегии продвижения, учитывающие все особенности 
              и ограничения медицинской сферы.
            </p>
          </div>
          <div className="w-full md:w-1/3 animate-fadeInRight">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-4 hover:border-teal-500/30 transition-all duration-300 hover-lift hover-glow animate-scaleUp delay-100 blur-backdrop">
                <Brain size={36} weight="duotone" className="text-teal-400 mb-3" />
                <h3 className="text-lg font-semibold font-fixedsys text-shadow">Медицинская экспертиза</h3>
              </div>
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-4 hover:border-indigo-500/30 transition-all duration-300 hover-lift hover-glow animate-scaleUp delay-200 blur-backdrop">
                <Flask size={36} weight="duotone" className="text-indigo-400 mb-3" />
                <h3 className="text-lg font-semibold font-fixedsys text-shadow">Инновационные подходы</h3>
              </div>
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-4 hover:border-teal-500/30 transition-all duration-300 hover-lift hover-glow animate-scaleUp delay-300 blur-backdrop">
                <Heart size={36} weight="duotone" className="text-teal-400 mb-3" />
                <h3 className="text-lg font-semibold font-fixedsys text-shadow">Медицинская этика</h3>
              </div>
              <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-4 hover:border-indigo-500/30 transition-all duration-300 hover-lift hover-glow animate-scaleUp delay-400 blur-backdrop">
                <TrendUp size={36} weight="duotone" className="text-indigo-400 mb-3" />
                <h3 className="text-lg font-semibold font-fixedsys text-shadow">Рост показателей</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
