'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState } from 'react'

interface CategoryFilterProps {
  categories: string[]
  currentCategory?: string
  totalPosts: number
  filteredCount: number
}

export default function CategoryFilter({ 
  categories, 
  currentCategory, 
  totalPosts, 
  filteredCount 
}: CategoryFilterProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isOpen, setIsOpen] = useState(false)

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams.toString())
    
    if (category === 'all') {
      params.delete('category')
    } else {
      params.set('category', category.toLowerCase())
    }
    
    // Сохраняем поиск, если он есть
    const search = searchParams.get('search')
    if (search) {
      params.set('search', search)
    }
    
    router.push(`/blog?${params.toString()}`)
    setIsOpen(false)
  }

  const activeCategory = currentCategory || 'all'

  return (
    <div className="space-y-6">
      {/* Мобильная версия - дропдаун */}
      <div className="md:hidden">
        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full flex items-center justify-between px-4 py-3 bg-slate-900/50 border border-slate-800 rounded-lg text-white hover:border-slate-700 transition-colors"
          >
            <span className="flex items-center">
              <svg className="w-5 h-5 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              {activeCategory === 'all' ? 'Все категории' : 
               categories.find(cat => cat.toLowerCase() === activeCategory.toLowerCase()) || 'Все категории'}
            </span>
            <svg 
              className={`w-5 h-5 text-slate-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isOpen && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-slate-900 border border-slate-800 rounded-lg shadow-xl z-10 animate-slide-in">
              <div className="p-2">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                    activeCategory === 'all'
                      ? 'bg-gradient-to-r from-teal-500/20 to-indigo-500/20 text-teal-400 border border-teal-500/30'
                      : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                  }`}
                >
                  Все категории ({totalPosts})
                </button>
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`w-full text-left px-3 py-2 rounded-lg transition-colors ${
                      activeCategory.toLowerCase() === category.toLowerCase()
                        ? 'bg-gradient-to-r from-teal-500/20 to-indigo-500/20 text-teal-400 border border-teal-500/30'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Десктопная версия - табы */}
      <div className="hidden md:block">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-white flex items-center">
            <svg className="w-6 h-6 mr-2 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
            </svg>
            Категории статей
          </h2>
          <div className="text-sm text-slate-400">
            {filteredCount} из {totalPosts} статей
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-lg shadow-teal-500/25'
                : 'bg-slate-900/50 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 hover:text-white'
            }`}
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H3a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
            </svg>
            Все категории
            <span className="ml-2 px-2 py-0.5 bg-white/20 text-xs rounded-full">
              {totalPosts}
            </span>
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`inline-flex items-center px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                activeCategory.toLowerCase() === category.toLowerCase()
                  ? 'bg-gradient-to-r from-teal-500 to-indigo-500 text-white shadow-lg shadow-teal-500/25'
                  : 'bg-slate-900/50 text-slate-300 border border-slate-800 hover:border-slate-700 hover:bg-slate-800/50 hover:text-white'
              }`}
            >
              {getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Разделитель */}
      <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>

      {/* Дополнительные фильтры */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center text-sm text-slate-400">
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
          </svg>
          Показано: {filteredCount} {filteredCount === 1 ? 'статья' : filteredCount < 5 ? 'статьи' : 'статей'}
        </div>

        <div className="flex items-center gap-4">
          {/* Сортировка */}
          <select 
            className="px-3 py-2 bg-slate-900/50 border border-slate-800 rounded-lg text-sm text-slate-300 hover:border-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
            defaultValue="date-desc"
          >
            <option value="date-desc">Сначала новые</option>
            <option value="date-asc">Сначала старые</option>
            <option value="title-asc">По алфавиту А-Я</option>
            <option value="title-desc">По алфавиту Я-А</option>
          </select>

          {/* Вид отображения */}
          <div className="flex items-center border border-slate-800 rounded-lg overflow-hidden">
            <button className="p-2 bg-gradient-to-r from-teal-500 to-indigo-500 text-white">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
              </svg>
            </button>
            <button className="p-2 bg-slate-900/50 text-slate-400 hover:text-white hover:bg-slate-800/50 transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// Функция для получения иконки категории
function getCategoryIcon(category: string) {
  const iconClass = "w-4 h-4 mr-2"
  
  switch (category.toLowerCase()) {
    case 'кардиология':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    case 'маркетинг':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
        </svg>
      )
    case 'технологии':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      )
    case 'аналитика':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4a2 2 0 01-2 2h-2a2 2 0 00-2-2z" />
        </svg>
      )
    case 'стратегия':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    case 'кейсы':
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H3a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2z" />
        </svg>
      )
    default:
      return (
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
        </svg>
      )
  }
}
