"use client"

export default function TestimonialsSection() {
  return (
    <section className="bg-slate-900 py-16 md:py-20 relative overflow-hidden">
      <div className="absolute top-20 left-10 w-40 h-40 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-teal-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12">
          <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Отзывы
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys">
            Что говорят клиенты
          </h2>
          <p className="text-slate-400 text-center max-w-2xl">
            Мнения руководителей медицинских учреждений, которые уже работают с Hippocrat Digital
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-auto max-w-6xl">
          {/* Отзыв 1 */}
          <div className="bg-slate-800/20 border border-slate-700/30 hover:border-teal-500/30 transition-all shadow-lg hover:shadow-teal-900/20 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-teal-500 to-teal-700 flex items-center justify-center text-white">
                <span className="font-bold">Анна</span>
              </div>
              <div>
                <p className="font-semibold font-fixedsys">Клиника "Онлайн Око"</p>
                <p className="text-sm text-slate-400">Маркетолог клиники</p>
              </div>
            </div>
            <p className="text-slate-300">
              "Благодаря Hippocrat Digital наша клиника получила отличную конверсию с сайта и увеличила поток пациентов. 
              Особенно ценно, что команда понимает специфику медицинской сферы и все законодательные ограничения."
            </p>
            <div className="flex mt-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-teal-400"
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
          <div className="bg-slate-800/20 border border-slate-700/30 hover:border-indigo-500/30 transition-all shadow-lg hover:shadow-indigo-900/20 rounded-xl p-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-700 flex items-center justify-center text-white">
                <span className="font-bold">Е</span>
              </div>
              <div>
                <p className="font-semibold font-fixedsys">Стоматология "Полный Порядок"</p>
                <p className="text-sm text-slate-400">Руководитель</p>
              </div>
            </div>
            <p className="text-slate-300">
              "Команда профессионалов, которые действительно понимают специфику медицинской рекламы. 
              За полгода работы количество новых пациентов увеличилось в 2 раза, а средний чек вырос на 15%."
            </p>
            <div className="flex mt-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-indigo-400"
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
          <div className="bg-slate-800/20 border border-slate-700/30 hover:border-teal-500/30 transition-all shadow-lg hover:shadow-teal-900/20 rounded-xl p-6 sm:col-span-2 lg:col-span-1 sm:max-w-md sm:mx-auto lg:max-w-none">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-teal-500 to-teal-700 flex items-center justify-center text-white">
                <span className="font-bold">В</span>
              </div>
              <div>
                <p className="font-semibold font-fixedsys">ИИ-решение</p>
                <p className="text-sm text-slate-400">Студент медик</p>
              </div>
            </div>
            <p className="text-slate-300">
              "Благодаря Hippocrat AI, разработанной агенством Hippocrat Digital я кратно 
              увеличила свою успеваемость. Очень рада, что могу изучать гистологию персонализированно."
            </p>
            <div className="flex mt-4">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    className="w-4 h-4 text-teal-400"
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
