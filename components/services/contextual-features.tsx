"use client"

import { Key, Prohibit, MapPin, Clock, DeviceTablet, TrendingUp, Shield, List } from "phosphor-react"
import { useEffect, useState } from "react"

export default function ContextualFeatures() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const features = [
    {
      icon: Key,
      title: "Ключевые слова",
      description: "Точный подбор запросов",
      details: ["Брендовые запросы", "Коммерческие ключи", "Информационные фразы"],
      color: "teal"
    },
    {
      icon: Prohibit,
      title: "Минус-слова",
      description: "Фильтрация трафика",
      details: ["Исключение нецелевых", "Минус конкурентов", "Фильтр по цене"],
      color: "indigo"
    },
    {
      icon: MapPin,
      title: "Геотаргетинг",
      description: "Географические настройки",
      details: ["Радиус от клиники", "Исключение регионов", "Корректировки ставок"],
      color: "teal"
    },
    {
      icon: Clock,
      title: "Расписание",
      description: "Время показов",
      details: ["Рабочие часы", "Пиковые периоды", "Выходные дни"],
      color: "indigo"
    },
    {
      icon: DeviceTablet,
      title: "Устройства",
      description: "Платформы показов",
      details: ["Мобильные устройства", "Десктоп версии", "Планшеты"],
      color: "teal"
    },
    {
      icon: TrendingUp,
      title: "Ставки",
      description: "Управление бюджетом",
      details: ["Автоматические стратегии", "Ручные корректировки", "CPA оптимизация"],
      color: "indigo"
    }
  ]

  const specialties = [
    {
      icon: Shield,
      title: "Медицинская экспертиза",
      description: "Знаем специфику рекламы медицинских услуг и требования ФЗ-38",
      color: "teal"
    },
    {
      icon: List,
      title: "Сегментация услуг",
      description: "Отдельные кампании для каждого направления и типа пациентов",
      color: "indigo"
    },
    {
      icon: Clock,
      title: "Экстренные услуги",
      description: "Особые настройки для неотложной помощи и срочных вызовов",
      color: "teal"
    }
  ]

  return (
    <section id="contextual-features" className="py-12 sm:py-16 lg:py-20
