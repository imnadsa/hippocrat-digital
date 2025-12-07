"use client"

import { useEffect, useState } from "react"

// Кастомные SVG иконки с градиентами
const GeoIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="geoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2dd4bf', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <circle cx="32" cy="26" r="20" stroke="url(#geoGrad)" strokeWidth="3" fill="none" opacity="0.3"/>
    <circle cx="32" cy="26" r="12" stroke="url(#geoGrad)" strokeWidth="3" fill="none"/>
    <path d="M32 16 L32 8 M24 26 L16 26 M32 36 L32 44 M40 26 L48 26" stroke="url(#geoGrad)" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="32" cy="26" r="4" fill="url(#geoGrad)"/>
    <path d="M28 50 Q32 56 36 50" stroke="url(#geoGrad)" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
  </svg>
)

const BrainIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="brainGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#818cf8', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path d="M32 12 Q42 12 46 20 Q50 28 46 36 Q44 40 40 42 L40 52 Q40 56 36 56 L28 56 Q24 56 24 52 L24 42 Q20 40 18 36 Q14 28 18 20 Q22 12 32 12" stroke="url(#brainGrad)" strokeWidth="3" fill="none"/>
    <circle cx="26" cy="24" r="2" fill="url(#brainGrad)"/>
    <circle cx="38" cy="24" r="2" fill="url(#brainGrad)"/>
    <path d="M24 32 Q28 34 32 32 Q36 34 40 32" stroke="url(#brainGrad)" strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M28 40 L36 40 M30 44 L34 44 M31 48 L33 48" stroke="url(#brainGrad)" strokeWidth="2" strokeLinecap="round"/>
  </svg>
)

const BudgetIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="budgetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#2dd4bf', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#14b8a6', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect x="12" y="20" width="40" height="28" rx="4" stroke="url(#budgetGrad)" strokeWidth="3" fill="none"/>
    <path d="M20 20 L20 16 Q20 12 24 12 L40 12 Q44 12 44 16 L44 20" stroke="url(#budgetGrad)" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="32" cy="34" r="6" stroke="url(#budgetGrad)" strokeWidth="2.5" fill="none"/>
    <path d="M32 28 L32 26 M32 42 L32 40" stroke="url(#budgetGrad)" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M29 31 Q32 31 32 34 Q32 37 29 37" stroke="url(#budgetGrad)" strokeWidth="2" fill="none"/>
    <path d="M16 52 L48 52" stroke="url(#budgetGrad)" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
  </svg>
)

const RetargetIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="retargetGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#818cf8', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <path d="M48 32 Q48 20 38 14" stroke="url(#retargetGrad)" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M44 28 L48 32 L44 36" stroke="url(#retargetGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <path d="M16 32 Q16 44 26 50" stroke="url(#retargetGrad)" strokeWidth="3" strokeLinecap="round" fill="none"/>
    <path d="M20 28 L16 32 L20 36" stroke="url(#retargetGrad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
    <circle cx="32" cy="32" r="8" stroke="url(#retargetGrad)" strokeWidth="3" fill="none"/>
    <circle cx="32" cy="32" r="3" fill="url(#retargetGrad)"/>
    <circle cx="38" cy="14" r="4" stroke="url(#retargetGrad)" strokeWidth="2" fill="none"/>
    <circle cx="26" cy="50" r="4" stroke="url(#retargetGrad)" strokeWidth="2" fill="none"/>
  </svg>
)

export default function TargetingAdvantages() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const advantages = [
    {
      icon: GeoIcon,
      title: "Точная геолокация",
      description: "Показываем рекламу только в радиусе доступности вашей клиники. Никаких пустых показов людям из других городов.",
      color: "teal",
      delay: 0
    },
    {
      icon: BrainIcon,
      title: "Поведенческий таргетинг",
      description: "Находим людей по их онлайн-поведению: искали стоматолога, читали о грыжах, интересовались лазерной эпиляцией.",
      color: "indigo",
      delay: 100
    },
    {
      icon: BudgetIcon,
      title: "Контроль бюджета",
      description: "Ежедневный мониторинг расходов, оптимизация ставок, отключение неэффективных объявлений. Каждый рубль работает.",
      color: "teal",
      delay: 200
    },
    {
      icon: RetargetIcon,
      title: "Ретаргетинг",
      description: "Возвращаем посетителей сайта, которые не записались. Напоминаем о клинике тем, кто уже проявил интерес.",
      color: "indigo",
      delay: 300
    }
  ]

  return (
    <section id="targeting-advantages" className="bg-slate-900 py-12 sm:py-16 lg:py-20 relative overflow-hidden">
      <div className="absolute top-10 right-10 w-32 h-32 sm:w-40 sm:h-40 bg-teal-500/8 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 sm:w-60 sm:h-60 bg-indigo-500/8 rounded-full blur-3xl animate-floatBackground" style={{ animationDelay: '4s' }}></div>
      <div className="absolute top-1/3 left-1/3 w-20 h-20 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow"></div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className={`text-center mb-8 sm:mb-12 transition-all duration-700 ${isVisible ? 'animate-fadeInUp opacity-100' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block px-4 py-2 rounded-full bg-teal-900/20 border border-teal-700/20 text-teal-400 text-sm font-medium mb-4 sm:mb-6 backdrop-blur-sm shadow-lg">
            Преимущества
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6 font-fixedsys leading-tight">
            Почему таргетинг эффективен{" "}
            <span className="bg-gradient-to-r from-teal-400 via-indigo-400 to-teal-400 bg-clip-text text-transparent animate-gradient-text">
              для клиник
            </span>
          </h2>
          <p className="text-slate-400 text-center max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Современный таргетинг позволяет точно находить людей, которым действительно нужны ваши медицинские услуги
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            const colors = advantage.color === 'teal'
              ? {
                  bgGradient: 'from-teal-500/10 to-teal-600/5',
                  borderColor: 'border-teal-500/30',
                  shadowColor: 'shadow-teal-500/20',
                  glowColor: 'bg-teal-400/20'
                }
              : {
                  bgGradient: 'from-indigo-500/10 to-indigo-600/5',
                  borderColor: 'border-indigo-500/30',
                  shadowColor: 'shadow-indigo-500/20',
                  glowColor: 'bg-indigo-400/20'
                }

            return (
              <div
                key={index}
                className={`relative group transition-all duration-700 ${isVisible ? 'animate-slideInStagger opacity-100' : 'opacity-0 translate-y-8'}`}
                style={{ animationDelay: `${advantage.delay}ms` }}
              >
                <div className={`
                  relative bg-slate-800/40 backdrop-blur-sm rounded-2xl border border-slate-700/60
                  p-6 sm:p-8 h-full transition-all duration-500 ease-out
                  hover:${colors.borderColor} hover:${colors.shadowColor} hover:shadow-2xl
                  hover-lift transform-gpu will-change-transform
                `}>
                  {/* Иконка с эффектами */}
                  <div className="relative mb-6">
                    <div className={`absolute inset-0 ${colors.glowColor} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br ${colors.bgGradient} p-3 sm:p-4 backdrop-blur-sm border ${colors.borderColor} transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                      <IconComponent className="w-full h-full" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 font-fixedsys text-white leading-snug">
                    {advantage.title}
                  </h3>
                  <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                    {advantage.description}
                  </p>

                  {/* Декоративные элементы */}
                  <div className="absolute top-3 right-3 w-2 h-2 rounded-full bg-gradient-to-r from-teal-400/20 to-indigo-400/20 opacity-60 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute bottom-3 left-3 w-1 h-1 rounded-full bg-gradient-to-r from-indigo-400/30 to-teal-400/30 group-hover:w-2 group-hover:h-2 transition-all"></div>

                  {/* Градиентный оверлей */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-transparent via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
