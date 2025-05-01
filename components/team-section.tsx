"use client"

import { Button } from "@/components/ui/button"

export default function TeamSection() {
  // Функция для открытия внешних ссылок
  const openExternalLink = (url: string) => {
    window.open(url, "_blank")
  }

  return (
    <section id="team" className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-12">
          <div className="px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Команда
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient font-fixedsys">
            Люди, стоящие за Hippocrat Digital
          </h2>
          <p className="text-slate-400 text-center max-w-2xl">
            Мы объединяем экспертов в медицине и digital-маркетинге для достижения наилучших результатов
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Член команды 1 */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/10 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-teal-500 to-teal-700 flex items-center justify-center text-white text-xl font-bold">
                А
              </div>
              <div>
                <h3 className="text-xl font-semibold font-fixedsys">Александр Антошкин</h3>
                <p className="text-slate-400 text-sm">CEO, Основатель</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4">
              Студент 1 курса медицинского университета. Отвечает за стратегию и развитие компании. 
              Маркетолог, разработка ИИ-решений.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50"
                onClick={() => openExternalLink("https://t.me/imnadsa")}
              >
                Телеграм
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50"
                onClick={() => openExternalLink("mailto:example@hippocrat.digital")}
              >
                Email
              </Button>
            </div>
          </div>

          {/* Член команды 2 */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-indigo-500/30 hover:shadow-lg hover:shadow-indigo-900/10 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-indigo-500 to-indigo-700 flex items-center justify-center text-white text-xl font-bold">
                А
              </div>
              <div>
                <h3 className="text-xl font-semibold font-fixedsys">Александр Кухто</h3>
                <p className="text-slate-400 text-sm">Технический специалист</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4">
              Студент-Медик, с большим опытом в разработке технологических решений в 
              медицинской сфере, эксперт по внедрению ИИ в медицинские клиники.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-indigo-700 text-indigo-400 hover:bg-indigo-950/50"
                onClick={() => openExternalLink("https://t.me/example")}
              >
                Телеграм
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-indigo-700 text-indigo-400 hover:bg-indigo-950/50"
                onClick={() => openExternalLink("mailto:example@hippocrat.digital")}
              >
                Email
              </Button>
            </div>
          </div>

          {/* Член команды 3 */}
          <div className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-900/10 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-teal-500 to-teal-700 flex items-center justify-center text-white text-xl font-bold">
                А
              </div>
              <div>
                <h3 className="text-xl font-semibold font-fixedsys">Александр Пермяков</h3>
                <p className="text-slate-400 text-sm">Директор по маркетингу</p>
              </div>
            </div>
            <p className="text-slate-300 text-sm mb-4">
              Более 4 лет разрабатывает продающие решения по увеличению прибыли медицинских клиники
              с помощью контентной части бизнеса.
            </p>
            <div className="flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50"
                onClick={() => openExternalLink("https://t.me/example")}
              >
                Телеграм
              </Button>
              <Button
                variant="outline"
                size="sm"
                className="border-teal-700 text-teal-400 hover:bg-teal-950/50"
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
