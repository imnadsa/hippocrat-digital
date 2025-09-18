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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Член команды 1 - Антошкин */}
          <div className="group bg-slate-900/50 rounded-2xl border border-slate-800 p-8 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 hover-lift blur-backdrop animate-slideInStagger delay-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden animate-scaleUp delay-200 group-hover:scale-110 transition-transform duration-300 mb-6">
                <img 
                  src="/blog/images/alexa.jpg" 
                  alt="Александр Антошкин"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="animate-fadeInLeft delay-200">
                <h3 className="text-2xl font-semibold font-fixedsys text-shadow mb-3">Александр Антошкин</h3>
                <div className="inline-block px-4 py-2 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
                  CEO, Основатель
                </div>
                <p className="text-slate-300 text-base leading-relaxed animate-fadeInUp delay-300">
                  Студент 2 курса медицинского университета. Отвечает за стратегию и развитие компании. 
                  Маркетолог, разработка ИИ-решений.
                </p>
              </div>
            </div>
          </div>

          {/* Член команды 2 - Кухто */}
          <div className="group bg-slate-900/50 rounded-2xl border border-slate-800 p-8 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-900/20 transition-all duration-300 hover-lift blur-backdrop animate-slideInStagger delay-200">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden animate-scaleUp delay-300 group-hover:scale-110 transition-transform duration-300 mb-6">
                <img 
                  src="/blog/images/alexk.jpg" 
                  alt="Александр Кухто"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="animate-fadeInLeft delay-300">
                <h3 className="text-2xl font-semibold font-fixedsys text-shadow mb-3">Александр Кухто</h3>
                <div className="inline-block px-4 py-2 rounded-full bg-indigo-900/30 border border-indigo-700/30 text-indigo-400 text-sm mb-6">
                  Технический специалист
                </div>
                <p className="text-slate-300 text-base leading-relaxed animate-fadeInUp delay-400">
                  Студент-Медик, с большим опытом в разработке технологических решений в 
                  медицинской сфере, эксперт по внедрению ИИ в медицинские клиники.
                </p>
              </div>
            </div>
          </div>

          {/* Член команды 3 - Пермяков */}
          <div className="group bg-slate-900/50 rounded-2xl border border-slate-800 p-8 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/20 transition-all duration-300 hover-lift blur-backdrop animate-slideInStagger delay-300">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden animate-scaleUp delay-400 group-hover:scale-110 transition-transform duration-300 mb-6">
                <img 
                  src="/blog/images/alexp.jpg" 
                  alt="Александр Пермяков"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="animate-fadeInLeft delay-400">
                <h3 className="text-2xl font-semibold font-fixedsys text-shadow mb-3">Александр Пермяков</h3>
                <div className="inline-block px-4 py-2 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
                  Директор по маркетингу
                </div>
                <p className="text-slate-300 text-base leading-relaxed animate-fadeInUp delay-500">
                  Более 4 лет разрабатывает продающие решения по увеличению прибыли медицинских клиник
                  с помощью контентной части бизнеса.
                </p>
              </div>
            </div>
          </div>

          {/* Член команды 4 - Дмитрий Таргет */}
          <div className="group bg-slate-900/50 rounded-2xl border border-slate-800 p-8 hover:border-purple-500/30 hover:shadow-lg hover:shadow-purple-900/20 transition-all duration-300 hover-lift blur-backdrop animate-slideInStagger delay-400">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full overflow-hidden animate-scaleUp delay-500 group-hover:scale-110 transition-transform duration-300 mb-6">
                <img 
                  src="/blog/images/dmitriy.jpg" 
                  alt="Дмитрий Таргет"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="animate-fadeInLeft delay-500">
                <h3 className="text-2xl font-semibold font-fixedsys text-shadow mb-3">Дмитрий Таргет</h3>
                <div className="inline-block px-4 py-2 rounded-full bg-purple-900/30 border border-purple-700/30 text-purple-400 text-sm mb-6">
                  Таргетолог
                </div>
                <p className="text-slate-300 text-base leading-relaxed animate-fadeInUp delay-600">
                  Более 6 лет в таргете. Специализация в таргете VK и Telegram Ads для медицинских клиник.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Дополнительная информация о команде */}
        <div className="mt-16 text-center animate-fadeInUp delay-700">
          <div className="bg-slate-900/30 rounded-2xl border border-slate-800/50 p-8 max-w-4xl mx-auto backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-teal-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">+4</span>
                </div>
                <div className="text-left">
                  <p className="text-slate-200 font-semibold">Менеджера</p>
                  <p className="text-slate-400 text-sm">работают удаленно над вашим проектом</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-600 flex items-center justify-center">
                  <span className="text-white font-bold text-lg">+3</span>
                </div>
                <div className="text-left">
                  <p className="text-slate-200 font-semibold">Side специалиста</p>
                  <p className="text-slate-400 text-sm">обеспечивают экспертную поддержку</p>
                </div>
              </div>
            </div>
            
            <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent mb-8"></div>
            
            {/* Блок приглашения */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent font-fixedsys">
                Хотите стать частью нашей команды?
              </h3>
              <p className="text-slate-300 text-lg mb-6 max-w-2xl mx-auto">
                Если Вы также как и мы горите медицинским маркетингом - мы ждём Вас в дружелюбной команде Hippocrat Digital
              </p>
              <Button
                size="lg"
                className="bg-gradient-to-r from-teal-600 to-indigo-600 hover:from-teal-500 hover:to-indigo-500 text-white font-medium px-8 py-3 rounded-xl hover-lift transition-all duration-300 shadow-lg hover:shadow-xl"
                onClick={() => openExternalLink("https://t.me/imnadsa")}
              >
                Присоединиться к команде
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
