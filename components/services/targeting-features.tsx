"use client"

import { MapPin, Calendar, Heart, Shield, Eye, Target, Clock, Smartphone } from "lucide-react"

export default function TargetingFeatures() {
  const features = [
    {
      icon: MapPin,
      title: "Геотаргетинг",
      description: "Радиус клиники 1-15 км",
      details: ["Точная геолокация", "Исключение конкурентов", "Районы и метро"]
    },
    {
      icon: Calendar,
      title: "Возраст и пол",
      description: "Подбор под услуги",
      details: ["Стоматология: 25-65", "Эстетическая: 25-45", "Педиатрия: 25-40 (родители)"]
    },
    {
      icon: Heart,
      title: "Интересы",
      description: "Здоровье и красота",
      details: ["Медицина и здоровье", "Фитнес и спорт", "Косметология"]
    },
    {
      icon: Eye,
      title: "Поведение",
      description: "Прошлая активность",
      details: ["Искали клиники", "Читали о заболеваниях", "Посещали сайты конкурентов"]
    },
    {
      icon: Target,
      title: "Lookalike",
      description: "Похожие аудитории",
      details: ["На основе клиентской базы", "Похожие на конвертеров", "Автообновление сходств"]
    },
    {
      icon: Shield,
      title: "Исключения",
      description: "Фильтрация трафика",
      details: ["Медики и конкуренты", "Нецелевые регионы", "Низкий доход"]
    },
    {
      icon: Clock,
      title: "Время показов",
      description: "Оптимальное время",
      details: ["Рабочие часы", "Вечер для записи", "Выходные для неотложки"]
    },
    {
      icon: Smartphone,
      title: "Устройства",
      description: "Под платформы",
      details: ["100% мобильный трафик", "Адаптация под экраны", "Приложения соцсетей"]
    }
  ]

  return (
    <section id="targeting-features" className="py-16 md:py-20 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-6">
            Настройки таргетинга
          </div>
          <h2 className="text-2xl md:text-4xl font-bold mb-4 font-fixedsys">
            Как мы{" "}
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">
              настраиваем таргетинг
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto">
            Детальная настройка каждого параметра для максимальной эффективности рекламы
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon
            return (
              <div key={index} className="bg-slate-900/50 rounded-xl border border-slate-800 p-6 hover:border-teal-500/30 transition-all">
                <div className="w-12 h-12 rounded-full bg-teal-900/50 flex items-center justify-center text-teal-400 mb-4">
                  <IconComponent size={24} />
                </div>
                <h3 className="text-lg font-semibold mb-2 font-fixedsys text-white">{feature.title}</h3>
                <p className="text-slate-400 text-sm mb-3">{feature.description}</p>
                <ul className="space-y-1">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-xs text-slate-500 flex items-start">
                      <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-2 mt-1.5 flex-shrink-0"></span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>

        <div className="mt-12 bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-xl border border-teal-500/30 p-8">
          <div className="text-center">
            <h3 className="text-xl font-bold font-fixedsys text-white mb-4">
              Специфика для медицинских клиник
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center mx-auto mb-3">
                  <Shield size={24} className="text-teal-400" />
                </div>
                <h4 className="font-semibold text-white mb-2 font-fixedsys">Соблюдение ФЗ-38</h4>
                <p className="text-slate-400 text-sm">Все объявления проходят проверку на соответствие закону о рекламе</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-indigo-900/50 flex items-center justify-center mx-auto mb-3">
                  <Target size={24} className="text-indigo-400" />
                </div>
                <h4 className="font-semibold text-white mb-2 font-fixedsys">Медицинские интересы</h4>
                <p className="text-slate-400 text-sm">Таргетинг по симптомам, заболеваниям и медицинским потребностям</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-teal-900/50 flex items-center justify-center mx-auto mb-3">
                  <Clock size={24} className="text-teal-400" />
                </div>
                <h4 className="font-semibold text-white mb-2 font-fixedsys">Экстренность</h4>
                <p className="text-slate-400 text-sm">Разные стратегии для плановых и срочных медицинских услуг</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
