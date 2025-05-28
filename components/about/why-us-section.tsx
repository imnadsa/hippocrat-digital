import React from 'react';
import { Stethoscope, Zap, TrendingUp, MapPin } from 'lucide-react';

export default function WhyUsSection() {
  const advantages = [
    {
      icon: Stethoscope,
      title: 'Медицинский бэкграунд',
      description: 'Понимаем специфику healthcare изнутри. Знаем терминологию, этические нормы и особенности работы с пациентами.',
      color: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10'
    },
    {
      icon: Zap,
      title: 'Быстрые решения',
      description: 'Работаем без бюрократии и лишних процедур. Конкретные результаты в сжатые сроки.',
      color: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/10 to-orange-500/10'
    },
    {
      icon: TrendingUp,
      title: 'Фокус на ROI',
      description: 'Каждое решение должно приносить измеримую прибыль. Отслеживаем конверсии и оптимизируем затраты.',
      color: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-500/10 to-emerald-500/10'
    },
    {
      icon: MapPin,
      title: 'Российский рынок',
      description: 'Глубоко знаем особенности местного здравоохранения, законодательство и менталитет пациентов.',
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10'
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-72 h-72 bg-teal-400/5 rounded-full blur-3xl animate-floatBackground"></div>
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-indigo-400/5 rounded-full blur-3xl animate-floatBackground delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Почему мы <span className="text-teal-400">лучше</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Уникальное сочетание медицинских знаний и digital-экспертизы
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            
            return (
              <div 
                key={advantage.title}
                className={`group relative animate-fadeInUp delay-${(index + 1) * 100}`}
              >
                {/* Card */}
                <div className="relative h-full bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 transition-all duration-500 hover:border-teal-400/50 hover:transform hover:scale-105 hover-glow">
                  {/* Background Gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${advantage.bgGradient} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 bg-gradient-to-r ${advantage.color} rounded-2xl flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors duration-300">
                      {advantage.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Visual Element */}
        <div className="mt-20 animate-fadeInUp delay-500">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-700/50 backdrop-blur-sm border border-slate-600 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
                {/* Left Content */}
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Готовы убедиться в наших преимуществах?
                  </h3>
                  <p className="text-gray-400">
                    Получите бесплатную консультацию и узнайте, как мы можем помочь вашей медицинской организации
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
