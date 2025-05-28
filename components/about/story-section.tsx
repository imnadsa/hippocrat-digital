import React from 'react';

export default function StorySection() {
  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-teal-400/10 to-indigo-400/10"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Наша <span className="text-teal-400">история</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Путь от медицинского образования к созданию инновационных решений для healthcare
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8 md:p-12 animate-fadeInUp delay-200">
            <div className="space-y-6">
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                <strong className="text-white">Hippocrat Digital создан студентами-медиками</strong>, которые знают и понимают специфику медицинской сферы изнутри.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                <strong className="text-teal-400">Наша миссия</strong> — помогать медицинским учреждениям привлекать пациентов и выстраивать долгосрочные отношения с ними через современные цифровые инструменты.
              </p>
              
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
                Мы объединяем <strong className="text-indigo-400">знания в области медицины</strong> с <strong className="text-indigo-400">экспертизой в digital-маркетинге</strong>, чтобы создавать эффективные стратегии продвижения, учитывающие все особенности и ограничения медицинской сферы.
              </p>
            </div>
          </div>
        </div>

        {/* Key Points */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="text-center animate-fadeInUp delay-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">🎓</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Медицинское образование</h3>
            <p className="text-gray-400">Понимаем специфику healthcare изнутри</p>
          </div>

          <div className="text-center animate-fadeInUp delay-400">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-green-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">💡</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Digital-экспертиза</h3>
            <p className="text-gray-400">Современные инструменты продвижения</p>
          </div>

          <div className="text-center animate-fadeInUp delay-500">
            <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-white">🎯</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Результат</h3>
            <p className="text-gray-400">Эффективные стратегии для медицины</p>
          </div>
        </div>
      </div>
    </section>
  );
}
