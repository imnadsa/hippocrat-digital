"use client"

import { Copy, Phone, MapPin, EnvelopeSimple, Globe } from "phosphor-react"
import { useState } from "react"

interface RequisiteItem {
  label: string
  value: string
  icon?: React.ReactNode
  copyable?: boolean
}

const requisitesData = {
  organization: {
    title: "ИП Антошкин Александр Григорьевич",
    items: [
      {
        label: "ИНН",
        value: "772799039046",
        copyable: true
      },
      {
        label: "КПП",
        value: "770301001",
        copyable: true
      },
      {
        label: "ОГРН",
        value: "319774600768729",
        copyable: true
      }
    ]
  },
  address: {
    title: "Адреса",
    items: [
      {
        label: "Юридический адрес",
        value: "г Москва, Севастопольский пр-кт, д 19 к 2",
        copyable: true,
        icon: <MapPin size={18} className="text-teal-400" weight="duotone" />
      },
      {
        label: "Фактический адрес",
        value: "г Москва, Севастопольский пр-кт, д 19 к 2",
        copyable: true,
        icon: <MapPin size={18} className="text-teal-400" weight="duotone" />
      }
    ]
  },
  contact: {
    title: "Контактная информация",
    items: [
      {
        label: "ФИО",
        value: "Антошкин Александр Григорьевич",
        copyable: true
      },
      {
        label: "Телефон",
        value: "+7 (977) 100-44-19",
        copyable: true,
        icon: <Phone size={18} className="text-teal-400" weight="duotone" />
      },
      {
        label: "Email",
        value: "antoshkin.info@bk.ru",
        copyable: true,
        icon: <EnvelopeSimple size={18} className="text-teal-400" weight="duotone" />
      },
      {
        label: "Сайт",
        value: "https://hippocrat-digital.ru/",
        copyable: true,
        icon: <Globe size={18} className="text-teal-400" weight="duotone" />
      }
    ]
  },
  bank: {
    title: "Банковские реквизиты",
    items: [
      {
        label: "Название банка",
        value: "ООО \"Банк Точка\"",
        copyable: true
      },
      {
        label: "Расчётный счёт",
        value: "40802810220000811295",
        copyable: true
      },
      {
        label: "Корр. счёт",
        value: "30101810745374525104",
        copyable: true
      },
      {
        label: "БИК",
        value: "044525104",
        copyable: true
      }
    ]
  }
}

function RequisiteRow({ label, value, icon, copyable }: RequisiteItem) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="py-5 px-6 border-b border-slate-700/30 hover:bg-slate-800/20 transition-all duration-200 group last:border-b-0">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3 flex-1">
          {icon && <div className="mt-1 flex-shrink-0">{icon}</div>}
          <div className="flex-1 min-w-0">
            <p className="text-sm text-slate-400 mb-1 font-medium">{label}</p>
            <p className="text-base text-slate-100 break-words font-fixedsys">{value}</p>
          </div>
        </div>
        {copyable && (
          <button
            onClick={handleCopy}
            className="flex-shrink-0 ml-2 p-2 rounded-lg bg-slate-800/50 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-teal-500/20 hover:text-teal-400 text-slate-400"
            title="Копировать"
          >
            <Copy size={18} weight="duotone" />
          </button>
        )}
      </div>
      {copied && (
        <div className="mt-2 text-xs text-teal-400 animate-pulse">
          ✓ Скопировано
        </div>
      )}
    </div>
  )
}

function RequisiteSection({ title, items }: { title: string; items: RequisiteItem[] }) {
  return (
    <div className="mb-8 animate-fadeInUp">
      <h2 className="text-xl md:text-2xl font-bold font-fixedsys mb-4 text-white">
        {title}
      </h2>
      <div className="bg-slate-800/10 border border-slate-700/30 rounded-lg overflow-hidden hover:border-teal-500/30 transition-all duration-300 backdrop-blur-sm">
        <div>
          {items.map((item, index) => (
            <RequisiteRow
              key={index}
              label={item.label}
              value={item.value}
              icon={item.icon}
              copyable={item.copyable}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default function RequisitesSection() {
  return (
    <section className="py-16 md:py-24 bg-slate-950 relative overflow-hidden">
      {/* Декоративные элементы */}
      <div className="absolute top-0 right-0 w-40 h-40 bg-teal-500/10 rounded-full blur-3xl animate-floatBackground"></div>
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl animate-floatBackground delay-600"></div>
      <div className="absolute top-1/2 right-1/3 w-28 h-28 bg-teal-400/5 rounded-full blur-2xl animate-pulse-slow delay-400"></div>

      <div className="container mx-auto px-4 relative z-10 pt-10">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm text-slate-500 animate-fadeInUp">
          <a href="/" className="hover:text-teal-400 transition-colors">Главная</a>
          <span className="mx-2">›</span>
          <span className="text-slate-400">Реквизиты</span>
        </div>

        {/* Header */}
        <div className="mb-12 animate-fadeInUp">
          <div className="px-4 py-1 inline-block rounded-full bg-teal-900/30 border border-teal-700/30 text-teal-400 text-sm mb-4 hover:border-teal-500/50 transition-all duration-300">
            Реквизиты
          </div>
          <h1 className="text-4xl md:text-5xl font-bold font-fixedsys mb-4">
            Реквизиты компании
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl">
            Все данные для оформления счёта и проведения платежа. Наведите на реквизит и нажмите на иконку для копирования.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Organization */}
          <RequisiteSection 
            title={requisitesData.organization.title}
            items={requisitesData.organization.items}
          />
          
          {/* Contact */}
          <RequisiteSection 
            title={requisitesData.contact.title}
            items={requisitesData.contact.items}
          />
        </div>

        {/* Address Full Width */}
        <RequisiteSection 
          title={requisitesData.address.title}
          items={requisitesData.address.items}
        />

        {/* Bank Full Width */}
        <RequisiteSection 
          title={requisitesData.bank.title}
          items={requisitesData.bank.items}
        />

        {/* Info Block */}
        <div className="mt-12 p-6 bg-gradient-to-r from-teal-900/20 to-indigo-900/20 border border-teal-700/30 rounded-lg animate-fadeInUp delay-200">
          <p className="text-slate-300">
            <span className="text-teal-400 font-semibold">💡 Совет:</span> Все реквизиты можно скопировать одним клик — просто наведите на нужный реквизит и нажмите на иконку копирования.
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes floatBackground {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }
        
        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-fadeInUp.delay-200 {
          animation-delay: 0.2s;
        }
        
        .animate-floatBackground {
          animation: floatBackground 6s ease-in-out infinite;
        }
        
        .animate-floatBackground.delay-600 {
          animation-delay: -3s;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow.delay-400 {
          animation-delay: -2s;
        }
      `}</style>
    </section>
  )
}
