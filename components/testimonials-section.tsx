"use client"

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы с анимацией */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground delay-800"></div>
      <div className="absolute top-1/3 left-1/2 w-24 h-24 bg-indigo-400/5 rounded-full blur-2xl animate-pulse-slow delay-300"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12 animate-fadeInUp">
          <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6 hover:border-teal-500/50 transition-all duration-300">
            Отзывы
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys text-shadow-lg">
            Что говорят клиенты
          </h2>
          <p className="text-slate-400 text-center max-w-2xl text-shadow">
            Мнения руководителей медицинских учреждений, которые уже работают с Hippocrat Digital
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
          {/* Отзыв 1 */}
          <div className="bg-slate-800/20 border border-slate-700/30 hover:border-teal-500/30 transition-all duration-300 shadow-lg hover:shadow-teal-900/30 rounded-xl p-6 hover-lift blur-backdrop animate-slideInStagger delay-100">
            <div className="flex items-center gap-4 mb-4 animate-fadeInLeft delay-200">
              <div>
                <p className="font-semibold font-fixedsys text-shadow">Анна - Клиника "Онлайн Око"</p>
                <p className="text-sm text-slate-400">Маркетолог клиники</p>
              </div>
            </div>
            <p className="text-slate-300 animate-fadeInUp delay-400">
              "Благодаря Hippocrat Digital наша клиника получила отличную конверсию с сайта и увеличила поток пациентов. 
              Особенно ценно, что команда понимает специфику медицинской сферы и все законодательные ограничения."
            </p>
            <div className="flex mt-4 animate-fadeInUp delay-500">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-teal-400 animate-iconBounce hover:scale-125 transition-transform duration-300"
                    style={{ animationDelay: `${600 + star * 100}ms` }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Отзыв 2 */}
          <div className="bg-slate-800/20 border border-slate-700/30 hover:border-indigo-500/30 transition-all duration-300 shadow-lg hover:shadow-indigo-900/30 rounded-xl p-6 hover-lift blur-backdrop animate-slideInStagger delay-200">
            <div className="flex items-center gap-4 mb-4 animate-fadeInLeft delay-300">
              <div>
                <p className="font-semibold font-fixedsys text-shadow">Екатерина - Стоматология "Полный Порядок"</p>
                <p className="text-sm text-slate-400">Руководитель</p>
              </div>
            </div>
            <p className="text-slate-300 animate-fadeInUp delay-500">
              "Команда профессионалов, которые действительно понимают специфику медицинской рекламы. 
              За полгода работы количество новых пациентов увеличилось в 2 раза, а средний чек вырос на 15%."
            </p>
            <div className="flex mt-4 animate-fadeInUp delay-600">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-indigo-400 animate-iconBounce hover:scale-125 transition-transform duration-300"
                    style={{ animationDelay: `${700 + star * 100}ms` }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>

          {/* Отзыв 3 */}
          <div className="bg-slate-800/20 border border-slate-700/30 hover:border-teal-500/30 transition-all duration-300 shadow-lg hover:shadow-teal-900/30 rounded-xl p-6 hover-lift blur-backdrop animate-slideInStagger delay-300 sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
            <div className="flex items-center gap-4 mb-4 animate-fadeInLeft delay-400">
              <div>
                <p className="font-semibold font-fixedsys text-shadow">Вероника - Hippocrat AI</p>
                <p className="text-sm text-slate-400">Студент медик</p>
              </div>
            </div>
            <p className="text-slate-300 animate-fadeInUp delay-600">
              "Благодаря Hippocrat AI, разработанной агенством Hippocrat Digital я кратно 
              увеличила свою успеваемость. Очень рада, что могу изучать гистологию персонализированно."
            </p>
            <div className="flex mt-4 animate-fadeInUp delay-700">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-teal-400 animate-iconBounce hover:scale-125 transition-transform duration-300"
                    style={{ animationDelay: `${800 + star * 100}ms` }}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
