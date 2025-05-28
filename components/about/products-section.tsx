import React from 'react';
import { Users } from 'lucide-react';

export default function ProductsSection() {
  const products = [
    {
      name: 'Hippocrat AI',
      subtitle: 'Первая ИИ модель для студентов-медиков',
      description: 'Революционное решение, которое помогает студентам-медикам решать 99% задач медицинского образования. Умный помощник для изучения анатомии, патологии, фармакологии и клинических случаев.',
      stats: '1200+ студентов',
      iconImage: '/blog/images/hippocrat-logo.jpg',
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
      image: '/blog/images/hippocrat-ai.jpg'
    },
    {
      name: 'Hippocrat MedCall AI',
      subtitle: 'Анализ медицинских звонков',
      description: 'Интеллектуальная система анализа звонков между пациентами и колл-центром клиники. Парсинг разговоров, выявление потребностей и повышение клиентоориентированности персонала.',
      stats: 'Внедрено в 50+ клиник',
      iconImage: '/blog/images/hippocrat-medcall.jpg',
      color: 'from-teal-500 to-cyan-500',
      bgGradient: 'from-teal-500/10 to-cyan-500/10',
      image: '/blog/images/medcall-ai.jpg'
    }
  ];

  return (
    <section className="py-20 bg-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-gradient-to-r from-purple-400/5 to-pink-400/5 rounded-full blur-3xl animate-floatBackground"></div>
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-gradient-to-r from-teal-400/5 to-cyan-400/5 rounded-full blur-3xl animate-floatBackground delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Наши <span className="text-teal-400">продукты</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Инновационные AI-решения для образования и бизнеса в медицине
          </p>
        </div>

        {/* Products */}
        <div className="space-y-16 max-w-7xl mx-auto">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;
            
            return (
              <div 
                key={product.name}
                className={`animate-fadeInUp delay-${(index + 1) * 200}`}
              >
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12`}>
                  {/* Content */}
                  <div className="flex-1 space-y-6">
                    {/* Header */}
                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 rounded-2xl overflow-hidden transform hover:scale-110 transition-transform duration-300">
                          <img 
                            src={product.iconImage} 
                            alt={`${product.name} logo`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="text-3xl font-bold text-white">{product.name}</h3>
                          <p className="text-lg text-teal-400 font-medium">{product.subtitle}</p>
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-400 text-lg leading-relaxed">
                      {product.description}
                    </p>

                    {/* Stats */}
                    <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-4">
                      <div className="flex items-center space-x-3">
                        <Users className="w-6 h-6 text-teal-400" />
                        <div>
                          <p className="text-sm text-gray-400">Статистика</p>
                          <p className="text-white font-semibold">{product.stats}</p>
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="pt-4">
                      {product.name === 'Hippocrat AI' ? (
                        <a 
                          href="https://productradar.ru/product/hippocrat-ai/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <button className={`bg-gradient-to-r ${product.color} hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}>
                            Узнать больше
                          </button>
                        </a>
                      ) : (
                        <button className={`bg-gradient-to-r ${product.color} hover:opacity-90 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}>
                          Узнать больше
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Image */}
                  <div className="flex-1 max-w-lg">
                    <div className="relative group">
                      <div className={`absolute inset-0 bg-gradient-to-r ${product.bgGradient} rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                      <div className="relative overflow-hidden rounded-2xl transform group-hover:scale-105 transition-transform duration-500">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-64 object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 animate-fadeInUp delay-600">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Заинтересовались нашими продуктами?
              </h3>
              <p className="text-gray-400 mb-6">
                Получите персональную демонстрацию и узнайте, как AI может революционизировать вашу работу
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Демо Hippocrat AI
                </button>
                <button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Демо MedCall AI
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
