"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Mail, Phone, MessageCircle, CheckCircle } from 'lucide-react';

export default function CTASection() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    service: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'Hippocrat AI (для студентов)',
    'Hippocrat MedCall AI (для клиник)',
    'SMM для медицинских организаций',
    'Веб-разработка медицинских сайтов',
    'Контекстная реклама в healthcare',
    'Комплексный digital-маркетинг',
    'Консультация по стратегии',
    'другое'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика отправки формы
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-r from-teal-400/10 to-indigo-400/10 rounded-full blur-3xl animate-gradient"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl animate-gradient delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-fadeInLeft">
              {/* Main Heading */}
              <div className="space-y-6">
                <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                  Готовы внедрить{' '}
                  <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-text">
                    AI
                  </span>{' '}
                  в вашу медицинскую сферу?
                </h2>
                
                <p className="text-xl text-gray-400 leading-relaxed">
                  Получите персональное коммерческое предложение и узнайте, как наши решения могут революционизировать вашу работу
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Что вы получите:</h3>
                <div className="space-y-3">
                  {[
                    'Персональное КП с расчетом ROI',
                    'Демонстрацию наших AI-продуктов',
                    'Консультацию по digital-стратегии',
                    'Анализ текущих маркетинговых активностей'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-teal-400 flex-shrink-0" />
                      <span className="text-gray-300">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Options */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Или свяжитесь напрямую:</h3>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="mailto:hello@hippocrat.digital"
                    className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    <Mail className="w-5 h-5" />
                    <span>hello@hippocrat.digital</span>
                  </a>
                  <a 
                    href="tel:+79991234567"
                    className="flex items-center space-x-3 text-gray-300 hover:text-teal-400 transition-colors duration-300"
                  >
                    <Phone className="w-5 h-5" />
                    <span>+7 (999) 123-45-67</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Form */}
            <div className="animate-fadeInRight">
              <div className="relative">
                {/* Form Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/50 to-slate-700/50 backdrop-blur-sm rounded-2xl border border-slate-600"></div>
                
                {/* Form Content */}
                <div className="relative p-8">
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">Получить КП</h3>
                        <p className="text-gray-400">Заполните форму и мы свяжемся с вами в течение часа</p>
                      </div>

                      {/* Name Input */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Ваше имя *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                          placeholder="Александр Иванов"
                        />
                      </div>

                      {/* Contact Input */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Телефон или Email *
                        </label>
                        <input
                          type="text"
                          name="contact"
                          value={formData.contact}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                          placeholder="+7 (999) 123-45-67 или email@example.com"
                        />
                      </div>

                      {/* Service Select */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Интересующая услуга
                        </label>
                        <select
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300"
                        >
                          <option value="">Выберите услугу</option>
                          {services.map((service) => (
                            <option key={service} value={service}>{service}</option>
                          ))}
                        </select>
                      </div>

                      {/* Message Textarea */}
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Дополнительная информация
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={4}
                          className="w-full px-4 py-3 bg-slate-700/50 border border-slate-600 rounded-xl text-white placeholder-gray-400 focus:border-teal-400 focus:ring-2 focus:ring-teal-400/20 transition-all duration-300 resize-none"
                          placeholder="Расскажите о вашем проекте, целях и задачах..."
                        />
                      </div>

                      {/* Submit Button */}
                      <Button 
                        type="submit"
                        size="lg"
                        className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-semibold py-4 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
                      >
                        Получить КП
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>

                      {/* Privacy Notice */}
                      <p className="text-xs text-gray-500 text-center">
                        Нажимая кнопку, вы соглашаетесь с{' '}
                        <a href="/privacy" className="text-teal-400 hover:underline">
                          политикой конфиденциальности
                        </a>
                      </p>
                    </form>
                  ) : (
                    /* Success State */
                    <div className="text-center py-8">
                      <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">Спасибо за заявку!</h3>
                      <p className="text-gray-400 mb-6">
                        Мы получили вашу заявку и свяжемся с вами в течение часа для обсуждения деталей.
                      </p>
                      <div className="flex items-center justify-center space-x-2 text-teal-400">
                        <MessageCircle className="w-5 h-5" />
                        <span className="text-sm">Ожидайте звонка или сообщения</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
