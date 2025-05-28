import React from 'react';
import { GraduationCap, Lightbulb, Building, Calendar } from 'lucide-react';

export default function StorySection() {
  const timelineSteps = [
    {
      year: '2019',
      icon: GraduationCap,
      title: 'Как все начиналось',
      description: 'От студентов-медиков до digital-экспертов. Изучая медицину, мы поняли, как сложно врачам продвигать свои услуги.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      year: '2021',
      icon: Lightbulb,
      title: 'Поворотный момент',
      description: 'Осознали, что медицина остро нуждается в качественном маркетинге, который понимает специфику отрасли.',
      color: 'from-teal-500 to-green-500'
    },
    {
      year: '2025',
      icon: Building,
      title: 'Сегодня',
      description: 'Команда профессионалов, которая помогает медицинским организациям расти и развиваться в цифровом мире.',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

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

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-teal-400 via-indigo-400 to-purple-400 rounded-full hidden md:block"></div>

            {timelineSteps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.year} className={`relative mb-16 last:mb-0 animate-fadeInUp delay-${(index + 1) * 200}`}>
                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center">
                    {/* Left Content */}
                    <div className={`w-1/2 ${isEven ? 'pr-12 text-right' : 'pl-12 order-2'}`}>
                      <div className={`${isEven ? '' : 'ml-auto'} max-w-md`}>
                        <div className="flex items-center mb-4">
                          <Calendar className="w-5 h-5 text-teal-400 mr-2" />
                          <span className="text-lg font-semibold text-teal-400">{step.year}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                        <p className="text-gray-400 leading-relaxed">{step.description}</p>
                      </div>
                    </div>

                    {/* Center Icon */}
                    <div className="relative z-10">
                      <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center border-4 border-slate-900 shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Right Content (placeholder for even items) */}
                    <div className={`w-1/2 ${isEven ? 'order-2' : ''}`}></div>
                  </div>

                  {/* Mobile Layout */}
                  <div className="md:hidden flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <Calendar className="w-4 h-4 text-teal-400 mr-2" />
                        <span className="font-semibold text-teal-400">{step.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Image/Visual */}
        <div className="mt-20 text-center animate-fadeInUp delay-800">
          <div className="relative mx-auto max-w-2xl">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-8">
              <img 
                src="/about/team-story.jpg" 
                alt="Команда Hippocrat Digital за работой" 
                className="w-full h-64 object-cover rounded-xl mb-4"
              />
              <p className="text-gray-400 italic">
                От студенческих проектов до профессиональных решений для медицинской отрасли
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
