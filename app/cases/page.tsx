import { Metadata } from 'next'
import { allCases } from '@/lib/cases'
import CasesGrid from '@/components/cases/cases-grid'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'Наши кейсы - реальные результаты | Hippocrat Digital',
  description: 'Посмотрите на конкретные результаты наших проектов в медицинской сфере. Кейсы с цифрами, метриками и подробным описанием процесса работы.',
  keywords: ['кейсы', 'медицинский маркетинг', 'результаты проектов', 'цифровое агентство', 'медицинские учреждения']
}

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-[#0b101b]">
      <Header scrolled={true} />
      
      {/* Hero секция */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 font-fixedsys">
              Наши <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent">кейсы</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              Реальные результаты для медицинских учреждений. Конкретные цифры роста трафика, 
              снижения стоимости лидов и увеличения прибыли наших клиентов.
            </p>
          </div>
        </div>
      </section>

      {/* Сетка кейсов */}
      <CasesGrid cases={allCases} />
      
      {/* CTA секция */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-slate-900/50 to-slate-800/50 rounded-2xl p-8 md:p-12 border border-slate-700/30">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-fixedsys">
              Хотите стать следующим успешным кейсом?
            </h2>
            <p className="text-slate-400 text-lg mb-8 max-w-2xl mx-auto">
              Мы поможем вашей клинике привлечь больше пациентов и увеличить прибыль. 
              Оставьте заявку на бесплатную консультацию.
            </p>
            <a 
              href="/#contact"
              className="inline-block bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 px-8 py-4 rounded-lg text-white font-medium transition-all duration-300 hover:scale-105"
            >
              Получить консультацию
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
