'use client'

export default function BlogHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
        {/* Анимированные элементы фона */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-teal-500/5 to-indigo-500/5 rounded-full blur-3xl animate-float"></div>
      </div>

      {/* Содержимое */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Бейдж */}
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-full border border-teal-500/30 mb-8 animate-fadeIn">
            <svg className="w-4 h-4 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
            <span className="text-sm font-medium text-slate-300">Экспертный блог</span>
          </div>

          {/* Заголовок */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
              Блог
            </span>
            <br />
            <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent animate-gradient-text">
              Hippocrat Digital
            </span>
          </h1>

          {/* Описание */}
          <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed animate-fadeInUp delay-200">
            Профессиональные статьи о медицинском маркетинге, 
            <br className="hidden md:block" />
            цифровых решениях для клиник и трендах в healthcare
          </p>

          {/* Статистика */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12 animate-fadeInUp delay-300">
            <div className="text-center">
              <div className="text-3xl font-bold text-teal-400 mb-1">50+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Экспертных статей</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-indigo-400 mb-1">10+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Тематик</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-slate-700"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">1000+</div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">Читателей</div>
            </div>
          </div>

          {/* CTA кнопки */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fadeInUp delay-400">
            <a
              href="#blog-content"
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-medium rounded-xl hover:from-teal-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
            >
              Читать статьи
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </a>
            
            <a
              href="/contacts"
              className="group inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-medium rounded-xl border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300"
            >
              Связаться с нами
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Анимированные иконки */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Медицинские иконки */}
        <div className="absolute top-1/4 left-1/4 animate-float delay-1000">
          <div className="w-12 h-12 text-teal-500/30">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.5 3A2.5 2.5 0 0 1 22 5.5v13A2.5 2.5 0 0 1 19.5 21h-15A2.5 2.5 0 0 1 2 18.5v-13A2.5 2.5 0 0 1 4.5 3h15zM12 6a1 1 0 0 0-1 1v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2h-3V7a1 1 0 0 0-1-1z"/>
            </svg>
          </div>
        </div>

        <div className="absolute top-3/4 right-1/4 animate-float delay-2000">
          <div className="w-10 h-10 text-indigo-500/30">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
          </div>
        </div>

        <div className="absolute bottom-1/4 left-1/3 animate-float delay-3000">
          <div className="w-8 h-8 text-slate-500/30">
            <svg fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Скролл индикатор */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-slate-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-slate-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
