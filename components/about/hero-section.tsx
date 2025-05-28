import React from 'react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-teal-400 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-indigo-400 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fadeInUp">
            <span className="text-white">Мы — </span>
            <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-text">
              Hippocrat Digital
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-4 animate-fadeInUp delay-200">
            Цифровые решения для медицины с медицинским образованием
          </p>
          <p className="text-lg md:text-xl text-gray-400 mb-8 animate-fadeInUp delay-300">
            и <span className="text-teal-400 font-semibold">5+ лет опыта</span> в digital
          </p>

          {/* Key Phrase */}
          <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 mb-8 animate-fadeInUp delay-400">
            <p className="text-xl md:text-2xl font-medium text-white">
              <span className="text-teal-400">"</span>
              Знаем медицину изнутри, делаем маркетинг снаружи
              <span className="text-teal-400">"</span>
            </p>
          </div>

          {/* CTA Button */}
          <div className="animate-fadeInUp delay-500">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
            >
              Обсудить проект
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-1 h-16 bg-gradient-to-b from-teal-400 to-transparent rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
