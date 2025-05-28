import React from 'react';
import { Target, Award, Eye, Lightbulb } from 'lucide-react';

export default function ValuesSection() {
  const values = [
    {
      icon: Target,
      title: 'Результативность',
      description: 'Работаем на конкретные цели и измеримые результаты. Каждый проект должен приносить реальную пользу клиенту.',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-500/10 to-emerald-600/10',
      metrics: ['ROI +200%', 'Конверсия +150%']
    },
    {
      icon: Award,
      title: 'Экспертность',
      description: 'Глубокие знания медицины и маркетинга. Команда профессионалов с медицинским образованием и цифровыми навыками.',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-500/10 to-indigo-600/10',
      metrics: ['5+ лет опыта', '50+ проектов']
    },
    {
      icon: Eye,
      title: 'Прозрачность',
      description: 'Честные отчеты и открытое общение. Клиент всегда знает, на что тратится бюджет и какие результаты получает.',
      color: 'from-cyan-500 to-teal-600',
      bgColor: 'from-cyan-500/10 to-teal-600/10',
      metrics: ['100% отчетность', 'Еженедельные созвоны']
    },
    {
      icon: Lightbulb,
      title: 'Инновации',
      description: 'Используем передовые AI-технологии и современные подходы. Первыми внедряем новые решения в медицинский маркетинг.',
      color: 'from-yellow-500 to-orange-600',
      bgColor: 'from-yellow-500/10 to-orange-600/10',
      metrics: ['AI-решения', 'Новые технологии']
    }
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl animate-floatBackground"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl animate-floatBackground delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-green-400/5 to-blue-400/5 rounded-full blur-3xl animate-floatBackground delay-500"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Наши <span className="text-teal-400">ценности</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Принципы, которые определяют нашу работу и отношения с клиентами
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            
            return (
              <div 
                key={value.title}
                className={`group animate-fadeInUp delay-${(index + 1) * 100}`}
              >
                {/* Card */}
                <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 transition-all duration-500 hover:border-teal-400/50 hover:transform hover:scale-105 hover-glow">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${value.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300 mx-auto`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 text-center group-hover:text-teal-400 transition-colors duration-300">
                      {value.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed text-center mb-6 flex-grow group-hover:text-gray-300 transition-colors duration-300">
                      {value.description}
                    </p>

                    {/* Metrics */}
                    <div className="space-y-2 mb-4">
                      {value.metrics?.map((metric, idx) => (
                        <div key={idx} className="flex items-center justify-center space-x-2">
                          <div className={`w-2 h-2 bg-gradient-to-r ${value.color} rounded-full`}></div>
                          <span className="text-sm text-gray-300">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quote Section */}
        <div className="mt-16 animate-fadeInUp delay-500">
          <div className="max-w-4xl mx-auto text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-400/10 to-indigo-400/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-slate-800/30 backdrop-blur-sm border border-slate-600 rounded-2xl p-8">
                <div className="text-6xl text-teal-400 mb-4 font-serif">"</div>
                <blockquote className="text-xl md:text-2xl text-white font-medium mb-4 italic">
                  Наши ценности — это не просто слова на сайте. Это принципы, по которым мы живем и работаем каждый день, создавая value для наших клиентов.
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">HD</span>
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold">Команда Hippocrat Digital</p>
                    <p className="text-gray-400 text-sm">Основатели и эксперты</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
