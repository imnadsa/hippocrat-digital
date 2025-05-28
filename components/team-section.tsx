"use client"

import { Button } from "@/components/ui/button"

export default function TeamSection() {
  // Функция для открытия внешних ссылок
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <section id="team" className="py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 left-1/4 w-32 h-32 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground delay-700"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-12 animate-fadeInUp">
          <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6 hover:border-teal-500/50 transition-all duration-300">
            Команда
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys text-shadow-lg">
            Люди, стоящие за Hippocrat Digital
          </h2>
          <p className="text-slate-400 text-center max-w-2xl text-shadow">
            Мы объединяем экспертов в медицине и digital-маркетинге для достижения наилучших результатов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Член команды 1 - Антошкин */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 hover-lift blur-backdrop animate-slideInStagger delay-100">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden animate-scaleUp delay-200 hover:scale-110 transition-transform duration-300">
                <img 
                  src="/blog/images/alexa.jpg" 
                  alt="Александр Антошкин"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="animate-fadeInLeft delay-200">
                <h3 className="text-xl font-semibold font-fixedsys text-shadow">Александр Антошкин</h3>
                <p className="text-slate-400 text-sm">CEO, Основатель</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4 animate-fadeInUp delay-300">
              Студент 1 курса медицинского университета. Отвечает за стратегию и развитие компании. 
              Маркетолог, разработка ИИ-решений.
            </p>
            <div className="flex gap-2 animate-fadeInUp delay-400">
              <Button
                variant="outline"
                size="sm"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50 hover:border-teal-500 hover-lift transition-all duration-300"
                onClick={() => openExternalLink("https://t.me/imnadsa")}
              >
                Телеграм
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50 hover:border-teal-500 hover-lift transition-all duration-300"
                onClick={() => openExternalLink("mailto:example@hippocrat.digital")}
              >
                Email
              </Button>
            </div>
          </div>

          {/* Член команды 2 - Кухто */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300 hover-lift blur-backdrop animate-slideInStagger delay-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-700 flex items-center justify-center text-white text-xl font-bold animate-scaleUp delay-300 hover:scale-110 transition-transform duration-300">
                А
              </div>
              <div className="animate-fadeInLeft delay-300">
                <h3 className="text-xl font-semibold font-fixedsys text-shadow">Александр Кухто</h3>
                <p className="text-slate-400 text-sm">Технический специалист</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4 animate-fadeInUp delay-400">
              Студент-Медик, с большим опытом в разработке технологических решений в 
              медицинской сфере, эксперт по внедрению ИИ в медицинские клиники.
            </p>
            <div className="flex gap-2 animate-fadeInUp delay-500">
              <Button
                variant="outline"
                size="sm"
                className="border-indigo-700 text-indigo-400 hover:bg-indigo-950/50 hover:border-indigo-500 hover-lift transition-all duration-300"
                onClick={() => openExternalLink("https://t.me/example")}
              >
                Телеграм
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-indigo-700 text-indigo-400 hover:bg-indigo-950/50 hover:border-indigo-500 hover-lift transition-all duration-300"
                onClick={() => openExternalLink("mailto:example@hippocrat.digital")}
              >
                Email
              </Button>
            </div>
          </div>

          {/* Член команды 3 - Пермяков */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 hover-lift blur-backdrop animate-slideInStagger delay-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full overflow-hidden animate-scaleUp delay-400 hover:scale-110 transition-transform duration-300">
                <img 
                  src="/blog/images/alexp.jpg" 
                  alt="Александр Пермяков"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="animate-fadeInLeft delay-400">
                <h3 className="text-xl font-semibold font-fixedsys text-shadow">Александр Пермяков</h3>
                <p className="text-slate-400 text-sm">Директор по маркетингу</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4 animate-fadeInUp delay-500">
              Более 4 лет разрабатывает продающие решения по увеличению прибыли медицинских клиники
              с помощью контентной части бизнеса.
            </p>
            <div className="flex gap-2 animate-fadeInUp delay-600">
              <Button
                variant="outline"
                size="sm"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50 hover:border-teal-500 hover-lift transition-all duration-300"
                onClick={() => openExternalLink("https://t.me/example")}
              >
                Телеграм
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50 hover:border-teal-500 hover-lift transition-all duration-300"
                onClick={() => openExternalLink("mailto:example@hippocrat.digital")}
              >
                Email
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
