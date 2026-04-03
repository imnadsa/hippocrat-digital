'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { X, ArrowLeft, ArrowRight } from 'phosphor-react'
import { Button } from '@/components/ui/button'
import { CaseData } from '@/lib/types/case'
import { getAdjacentCases } from '@/lib/cases'
import Image from 'next/image'
import ReactMarkdown from 'react-markdown'

interface CasePageClientProps {
  caseData: CaseData
}

export default function CasePageClient({ caseData }: CasePageClientProps) {
  const router = useRouter()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  // Блокировка скролла
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  // Закрытие по ESC
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  // Получаем соседние кейсы для навигации
  const { prev: prevCase, next: nextCase } = getAdjacentCases(caseData.id)

  // Навигация между кейсами
  const goToPrevCase = () => {
    if (prevCase) router.push(`/cases/${prevCase}`)
  }

  const goToNextCase = () => {
    if (nextCase) router.push(`/cases/${nextCase}`)
  }

  // Закрытие (возврат на главную с якорем)
  const handleClose = () => {
    const urlParams = new URLSearchParams(window.location.search)
    const from = urlParams.get('from')
    
    if (from === 'home') {
      router.push('/')
      setTimeout(() => {
        const portfolioSection = document.getElementById('portfolio')
        if (portfolioSection) {
          portfolioSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      router.push('/cases')
    }
  }

  // Обработка формы
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Заявка отправлена! Мы свяжемся с вами в ближайшее время.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  // Навигация по изображениям
  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === caseData.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? caseData.images.length - 1 : prev - 1
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm">
      {/* Backdrop - клик для закрытия */}
      <div 
        className="absolute inset-0"
        onClick={handleClose}
      />
      
      {/* Навигация между кейсами */}
      {prevCase && (
        <button
          onClick={goToPrevCase}
          className="fixed left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/80 hover:bg-slate-900 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
          aria-label="Предыдущий кейс"
        >
          <ArrowLeft size={24} weight="bold" />
        </button>
      )}
      
      {nextCase && (
        <button
          onClick={goToNextCase}
          className="fixed right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-900/80 hover:bg-slate-900 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
          aria-label="Следующий кейс"
        >
          <ArrowRight size={24} weight="bold" />
        </button>
      )}

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl max-h-[90vh] md:max-h-[85vh] bg-slate-900 md:rounded-t-2xl md:rounded-b-2xl overflow-hidden animate-slideUp md:animate-scaleUp z-10">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 p-4 md:p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-white font-fixedsys">
                {caseData.title}
              </h1>
              <p className="text-teal-400 text-sm md:text-base">{caseData.subtitle}</p>
            </div>
            <div className="flex items-center gap-3">
              {caseData.siteUrl && (
                <a
                  href={caseData.siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden md:inline-block px-4 py-2 bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white text-sm font-medium rounded-lg transition-all duration-300"
                >
                  Перейти на сайт →
                </a>
              )}
              <Button
                variant="ghost"
                size="icon"
                onClick={handleClose}
                className="text-slate-400 hover:text-white hover:bg-slate-800"
                aria-label="Закрыть кейс"
              >
                <X size={24} weight="bold" />
              </Button>
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-80px)] md:max-h-[calc(85vh-100px)]">
          <div className="p-4 md:p-6 space-y-8">
            {/* Category Badge */}
            <div className="inline-block px-3 py-1 rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm">
              {caseData.category}
            </div>

            
            {/* Image Gallery */}
            <div className="relative">
              <div className="relative aspect-video bg-slate-800 rounded-xl overflow-hidden">
                <Image
                  src={caseData.images[currentImageIndex]}
                  alt={`Кейс ${caseData.title} - изображение ${currentImageIndex + 1}`}
                  fill
                  className="object-contain"
                />
                
                {caseData.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 hover:bg-slate-900 rounded-full flex items-center justify-center text-white transition-all duration-200"
                      aria-label="Предыдущее изображение"
                    >
                      <ArrowLeft size={20} weight="bold" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-slate-900/80 hover:bg-slate-900 rounded-full flex items-center justify-center text-white transition-all duration-200"
                      aria-label="Следующее изображение"
                    >
                      <ArrowRight size={20} weight="bold" />
                    </button>
                  </>
                )}
              </div>
              
              {caseData.images.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2">
                  {caseData.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentImageIndex 
                          ? 'bg-teal-400 w-6' 
                          : 'bg-slate-600 hover:bg-slate-500'
                      }`}
                      aria-label={`Показать изображение ${index + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {caseData.metrics.map((metric, index) => (
                <div key={index} className="bg-slate-800/50 rounded-xl p-4 text-center">
                  <div className="text-slate-400 text-sm mb-2">{metric.label}</div>
                  <div className="text-red-400 text-lg font-bold mb-1">{metric.before}</div>
                  <div className="text-xs text-slate-500 mb-2">↓</div>
                  <div className="text-teal-400 text-lg font-bold mb-1">{metric.after}</div>
                  <div className="text-teal-400 text-sm font-medium">{metric.improvement}</div>
                </div>
              ))}
            </div>
            
            {/* Видеоотзыв */}
            {caseData.videoUrl && (
              <div className="border-t border-slate-700 pt-6">
                <h2 className="text-lg font-bold text-white mb-4 font-fixedsys">Видеоотзыв клиента</h2>
                <div className="flex justify-center">
                  <div className="rounded-xl overflow-hidden bg-slate-800 w-64">
                    <video
                      src={caseData.videoUrl}
                      controls
                      preload="metadata"
                      className="w-full"
                      aria-label="Видеоотзыв клиента"
                    />
                  </div>
                </div>
              </div>
            )}
            
            {/* Content Sections */}
            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Задача</h2>
                <div className="text-slate-300 leading-relaxed whitespace-pre-line">{caseData.content.challenge}</div>
              </div>

              {caseData.content.challenge2 && (
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Дополнительные вызовы</h2>
                  <div className="text-slate-300 leading-relaxed whitespace-pre-line">{caseData.content.challenge2}</div>
                </div>
              )}

              {caseData.content.technicalChallenges && (
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Технические сложности</h2>
                  <div className="text-slate-300 leading-relaxed whitespace-pre-line">{caseData.content.technicalChallenges}</div>
                </div>
              )}

              <div>
                <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Решение</h2>
                <div className="text-slate-300 leading-relaxed whitespace-pre-line mb-4">{caseData.content.solution}</div>
                <ul className="space-y-2">
                  {caseData.content.details.map((detail, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Результаты</h2>
                <div className="text-slate-300 leading-relaxed whitespace-pre-line">{caseData.content.results}</div>
              </div>

              {caseData.content.additionalResults && (
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Дополнительные результаты</h2>
                  <div className="text-slate-300 leading-relaxed whitespace-pre-line">{caseData.content.additionalResults}</div>
                </div>
              )}

              {caseData.content.businessResults && (
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Бизнес-результаты</h2>
                  <div className="text-slate-300 leading-relaxed whitespace-pre-line">{caseData.content.businessResults}</div>
                </div>
              )}

              {caseData.content.clinicApplications && (
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">🏥 Применение в медицинских клиниках</h2>
                  <div className="text-slate-300 leading-relaxed whitespace-pre-line">{caseData.content.clinicApplications}</div>
                </div>
              )}

              {(caseData.content.timeline || caseData.content.teamSize || caseData.content.budget) && (
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Информация о проекте</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {caseData.content.timeline && (
                      <div className="bg-slate-800/30 rounded-lg p-4">
                        <div className="text-teal-400 font-medium mb-2">Временные рамки</div>
                        <div className="text-slate-300">{caseData.content.timeline}</div>
                      </div>
                    )}
                    {caseData.content.teamSize && (
                      <div className="bg-slate-800/30 rounded-lg p-4">
                        <div className="text-teal-400 font-medium mb-2">Команда</div>
                        <div className="text-slate-300">{caseData.content.teamSize}</div>
                      </div>
                    )}
                    {caseData.content.budget && (
                      <div className="bg-slate-800/30 rounded-lg p-4">
                        <div className="text-teal-400 font-medium mb-2">Бюджет</div>
                        <div className="text-slate-300">{caseData.content.budget}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {caseData.content.technologies && (
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Технологии</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {caseData.content.technologies.map((tech, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {caseData.content.tools && (
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Инструменты разработки</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {caseData.content.tools.map((tool, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(caseData.content.methodology || caseData.content.testingApproach || caseData.content.qualityAssurance) && (
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Процесс разработки</h2>
                  <div className="space-y-4">
                    {caseData.content.methodology && (
                      <div>
                        <h3 className="text-teal-400 font-medium mb-2">Методология</h3>
                        <div className="text-slate-300 text-sm leading-relaxed">{caseData.content.methodology}</div>
                      </div>
                    )}
                    {caseData.content.testingApproach && (
                      <div>
                        <h3 className="text-teal-400 font-medium mb-2">Тестирование</h3>
                        <div className="text-slate-300 text-sm leading-relaxed">{caseData.content.testingApproach}</div>
                      </div>
                    )}
                    {caseData.content.qualityAssurance && (
                      <div>
                        <h3 className="text-teal-400 font-medium mb-2">Контроль качества</h3>
                        <div className="text-slate-300 text-sm leading-relaxed">{caseData.content.qualityAssurance}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {(caseData.content.clientFeedback || caseData.content.userFeedback) && (
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Отзывы</h2>
                  <div className="space-y-4">
                    {caseData.content.clientFeedback && (
                      <div className="bg-slate-800/30 rounded-lg p-4 border-l-4 border-teal-400">
                        <h3 className="text-teal-400 font-medium mb-2">Клиенты</h3>
                        <div className="text-slate-300 text-sm leading-relaxed italic">{caseData.content.clientFeedback}</div>
                      </div>
                    )}
                    {caseData.content.userFeedback && (
                      <div className="bg-slate-800/30 rounded-lg p-4 border-l-4 border-indigo-400">
                        <h3 className="text-indigo-400 font-medium mb-2">Пользователи</h3>
                        <div className="text-slate-300 text-sm leading-relaxed italic">{caseData.content.userFeedback}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {caseData.content.keyFeatures && (
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Ключевые особенности</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {caseData.content.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {caseData.content.achievements && (
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">🏆 Достижения</h2>
                  <div className="space-y-3">
                    {caseData.content.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start space-x-3 bg-gradient-to-r from-teal-900/20 to-indigo-900/20 rounded-lg p-3">
                        <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-slate-300 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {(caseData.content.businessImpact || caseData.content.roi) && (
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Бизнес-эффект</h2>
                  <div className="space-y-4">
                    {caseData.content.businessImpact && (
                      <div className="text-slate-300 leading-relaxed whitespace-pre-line">{caseData.content.businessImpact}</div>
                    )}
                    {caseData.content.roi && (
                      <div className="bg-gradient-to-r from-teal-900/30 to-indigo-900/30 rounded-lg p-4">
                        <h3 className="text-teal-400 font-medium mb-2">💰 ROI</h3>
                        <div className="text-slate-300">{caseData.content.roi}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {(caseData.content.lessonsLearned || caseData.content.futureImprovements) && (
                <div>
                  <h2 className="text-lg font-bold text-white mb-3 font-fixedsys">Выводы и планы</h2>
                  <div className="space-y-4">
                    {caseData.content.lessonsLearned && (
                      <div>
                        <h3 className="text-teal-400 font-medium mb-2">💡 Выученные уроки</h3>
                        <div className="text-slate-300 text-sm leading-relaxed">{caseData.content.lessonsLearned}</div>
                      </div>
                    )}
                    {caseData.content.futureImprovements && (
                      <div>
                        <h3 className="text-indigo-400 font-medium mb-2">🚀 Планы развития</h3>
                        <div className="text-slate-300 text-sm leading-relaxed">{caseData.content.futureImprovements}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {caseData.content.richContent && (
                <div className="mt-8 border-t border-slate-700 pt-8">
                  <ReactMarkdown 
                    className="text-slate-300 leading-relaxed prose prose-invert max-w-none"
                    components={{
                      img: ({node, ...props}) => (
                        <div className="my-6">
                          <img 
                            {...props} 
                            className="w-full rounded-lg border border-slate-700/50 shadow-lg" 
                            loading="lazy"
                          />
                        </div>
                      ),
                      h1: ({node, ...props}) => (
                        <h1 {...props} className="text-2xl font-bold text-white mb-6 mt-8 font-fixedsys" />
                      ),
                      h2: ({node, ...props}) => (
                        <h2 {...props} className="text-xl font-bold text-white mb-4 mt-8 font-fixedsys" />
                      ),
                      h3: ({node, ...props}) => (
                        <h3 {...props} className="text-lg font-bold text-teal-400 mb-3 mt-6" />
                      ),
                      p: ({node, ...props}) => (
                        <p {...props} className="mb-4 leading-relaxed" />
                      ),
                      ul: ({node, ...props}) => (
                        <ul {...props} className="mb-4 space-y-2" />
                      ),
                      li: ({node, ...props}) => (
                        <li {...props} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-teal-400 rounded-full mt-2 flex-shrink-0" />
                          <span className="text-slate-300">{props.children}</span>
                        </li>
                      ),
                      strong: ({node, ...props}) => (
                        <strong {...props} className="text-teal-400 font-semibold" />
                      ),
                      em: ({node, ...props}) => (
                        <em {...props} className="text-slate-400 italic" />
                      )
                    }}
                  >
                    {caseData.content.richContent}
                  </ReactMarkdown>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {caseData.tags.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-slate-800 text-slate-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Contact Form */}
            <div className="bg-slate-800/30 rounded-xl p-6">
              <h3 className="text-lg font-bold text-white mb-4 font-fixedsys">
                Хотите такой же результат?
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500"
                />
                <textarea
                  name="message"
                  placeholder="Расскажите о вашем проекте"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-teal-500 to-indigo-600 hover:from-teal-600 hover:to-indigo-700 text-white font-medium py-3"
                >
                  Получить консультацию
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes scaleUp {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-slideUp { animation: slideUp 0.3s ease-out; }
        .animate-scaleUp { animation: scaleUp 0.3s ease-out; }
      `}</style>
    </div>
  )
}
