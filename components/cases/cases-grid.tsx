'use client'

import { CaseData } from '@/lib/types/case'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

interface CasesGridProps {
  cases: CaseData[]
}

export default function CasesGrid({ cases }: CasesGridProps) {
  const router = useRouter()

  const openCase = (caseId: string) => {
    router.push(`/cases/${caseId}`)
  }

  return (
    <section className="px-4 pb-16">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {cases.map((caseItem, index) => (
            <div
              key={caseItem.id}
              onClick={() => openCase(caseItem.id)}
              className="group cursor-pointer bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl overflow-hidden border border-slate-700/30 hover:border-teal-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-900/25"
            >
              {/* Изображение кейса */}
              <div className="relative h-64 md:h-80 overflow-hidden">
                <Image
                  src={caseItem.images[0]}
                  alt={caseItem.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Градиент поверх изображения */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />
                
                {/* Категория */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-teal-500/20 backdrop-blur-sm text-teal-400 text-sm rounded-full border border-teal-500/30">
                    {caseItem.category}
                  </span>
                </div>
                
                {/* Год */}
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-slate-900/60 backdrop-blur-sm text-slate-300 text-sm rounded-full">
                    {new Date(caseItem.createdAt).getFullYear()}
                  </span>
                </div>
              </div>

              {/* Контент */}
              <div className="p-6 md:p-8">
                {/* Заголовок */}
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 font-fixedsys group-hover:text-teal-300 transition-colors duration-300">
                  {caseItem.title}
                </h3>
                
                {/* Подзаголовок */}
                <p className="text-teal-400 text-sm md:text-base mb-4 font-medium">
                  {caseItem.subtitle}
                </p>

                {/* Метрики - как у Belberry */}
                <div className="grid grid-cols-2 gap-6 mb-6">
                  {caseItem.metrics.slice(0, 2).map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl md:text-3xl font-bold text-teal-400 mb-1 font-fixedsys">
                        {metric.after}
                      </div>
                      <div className="text-slate-400 text-xs md:text-sm leading-tight">
                        {metric.label}
                      </div>
                      {metric.improvement && (
                        <div className="text-teal-300 text-xs font-medium mt-1">
                          {metric.improvement}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Описание проекта */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-2 text-sm">О проекте</h4>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {caseItem.shortDescription}
                  </p>
                </div>

                {/* Теги */}
                <div className="flex flex-wrap gap-2">
                  {caseItem.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-slate-800/60 text-slate-300 rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                  {caseItem.tags.length > 3 && (
                    <span className="px-2 py-1 bg-slate-800/60 text-slate-400 rounded text-xs">
                      +{caseItem.tags.length - 3}
                    </span>
                  )}
                </div>

                {/* Hover эффект - стрелка */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Блок "Больше кейсов скоро" если кейсов мало */}
        {cases.length < 6 && (
          <div className="mt-8 text-center">
            <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl p-8 border border-slate-700/30 border-dashed">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-white mb-2 font-fixedsys">Больше кейсов скоро</h3>
              <p className="text-slate-400 text-sm">
                Мы активно работаем над новыми проектами и скоро поделимся результатами
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
