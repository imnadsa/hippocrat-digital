"use client";

import React from 'react';
import { Mail, Award, BookOpen, Code } from 'lucide-react';

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'Александр Антошкин',
      role: 'CEO & Основатель',
      education: 'Лечебное дело, МГМУ',
      expertise: 'Стратегия, медицинский маркетинг',
      image: '/about/team/alexa.jpg',
      description: '6 лет опыта в digital, автор 2+ успешных медицинских проектов.',
      achievements: ['Основатель Hippocrat AI'],
      contacts: {
        email: 'antpshkin.infp@bk.ru',
        telegram: 'https://t.me/imnadsa'
      }
    },
    {
      name: 'Александр Пермяков',
      role: 'CMO & Директор по маркетингу',
      education: 'Лечебное дело, РНИМУ',
      expertise: 'SMM, контент-стратегия',
      image: '/about/team/alexp.jpg',
      description: 'Эксперт, ставший экспертом по медицинскому SMM. Создала 5+ вирусных кампаний для клиник.',
      achievements: ['Рост охватов +500%'],
      contacts: {
        email: 'alexp@hippocrat.digital',
        telegram: 'https://t.me/permyakovalex'
      }
    },
    {
      name: 'Александр Кухто',
      role: 'CTO & Технический директор',
      education: 'Лечебное дело, МГМУ',
      expertise: 'AI, машинное обучение, разработка',
      image: '/about/team/alexk.jpg',
      description: 'Основатель Hippocrat AI. Разработал 3+ AI-решений для медицинской отрасли.',
      achievements: ['Основатель Hippocrat AI'],
      contacts: {
        email: 'alexk@hippocrat.digital',
        telegram: 'https://t.me/crazyponchik'
      }
    },
  ];

  return (
    <section className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-teal-400 rounded-full blur-3xl animate-floatBackground"></div>
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-400 rounded-full blur-3xl animate-floatBackground delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Наша <span className="text-teal-400">команда</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Профессионалы с медицинским образованием и digital-экспертизой
          </p>
        </div>

        {/* Team Grid - Centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={member.name}
              className={`group animate-fadeInUp delay-${(index + 1) * 100}`}
            >
              {/* Card */}
              <div className="relative bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 transition-all duration-500 hover:border-teal-400/50 hover:transform hover:scale-105 hover-glow h-full mx-auto" style={{ maxWidth: '320px' }}>
                {/* Photo */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-slate-600 group-hover:border-teal-400 transition-colors duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  {/* Online Status */}
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className="w-4 h-4 bg-green-500 rounded-full border-2 border-slate-800 animate-pulse"></div>
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center mb-4">
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-teal-400 transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-sm text-teal-400 font-medium mb-2">{member.role}</p>
                  <p className="text-xs text-gray-500">{member.education}</p>
                </div>

                {/* Expertise */}
                <div className="mb-4">
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-4 h-4 text-indigo-400 mr-2" />
                    <span className="text-xs text-gray-400">Экспертиза</span>
                  </div>
                  <p className="text-sm text-gray-300 text-center">{member.expertise}</p>
                </div>

                {/* Description */}
                <p className="text-xs text-gray-400 text-center mb-4 leading-relaxed">
                  {member.description}
                </p>

                {/* Achievements */}
                <div className="mb-6">
                  <div className="flex items-center justify-center mb-2">
                    <BookOpen className="w-4 h-4 text-green-400 mr-2" />
                    <span className="text-xs text-gray-400">Достижения</span>
                  </div>
                  <ul className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-gray-300 text-center">
                        • {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact Buttons - Telegram only */}
                <div className="flex justify-center space-x-3">
                  <a 
                    href={`mailto:${member.contacts.email}`}
                    className="w-8 h-8 bg-slate-700 hover:bg-teal-500 rounded-full flex items-center justify-center transition-colors duration-300 group/btn"
                  >
                    <Mail className="w-4 h-4 text-gray-400 group-hover/btn:text-white" />
                  </a>
                  <a 
                    href={member.contacts.telegram}
                    className="w-8 h-8 bg-slate-700 hover:bg-blue-500 rounded-full flex items-center justify-center transition-colors duration-300 group/btn"
                  >
                    <svg className="w-4 h-4 text-gray-400 group-hover/btn:text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.14-.26.26-.534.26l.213-3.053 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.87 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.57-4.46c.538-.196 1.006.128.832.941z"/>
                    </svg>
                  </a>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-teal-500/5 to-indigo-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Join Team Section */}
        <div className="mt-16 animate-fadeInUp delay-500">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm border border-slate-600 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                <div className="flex-1 text-left">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Присоединяйтесь к нашей команде
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Ищем талантливых специалистов с медицинским образованием и digital-навыками
                  </p>
                  <div className="flex items-center space-x-4">
                    <Code className="w-5 h-5 text-teal-400" />
                    <span className="text-sm text-gray-300">Удаленная работа • Гибкий график • Проекты мечты</span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button className="bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300 transform hover:scale-105">
                    Вакансии
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
