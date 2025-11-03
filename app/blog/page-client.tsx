'use client'

import { useState, useEffect } from 'react'
import type { BlogMeta } from '@/lib/blog-types'
import { getAllPosts, getAllCategories } from '@/lib/blog'
import BlogList from '@/components/blog/blog-list'
import CategoryFilter from '@/components/blog/category-filter'
import Footer from '@/components/footer'
import FounderCard from '@/components/founder-card'


export default function BlogPageClient({
  searchParams,
}: {
  searchParams: { category?: string; search?: string }
}) {
  const [scrolled, setScrolled] = useState(false)
  const allPosts = getAllPosts()
  const categories = getAllCategories()
  
  // Фильтрация постов
  let filteredPosts = allPosts
  
  if (searchParams.category && searchParams.category !== 'all') {
    filteredPosts = allPosts.filter(
      post => post.category.toLowerCase() === searchParams.category?.toLowerCase()
    )
  }
  
  if (searchParams.search) {
    const searchTerm = searchParams.search.toLowerCase()
    filteredPosts = filteredPosts.filter(
      post =>
        post.title.toLowerCase().includes(searchTerm) ||
        post.description.toLowerCase().includes(searchTerm) ||
        post.category.toLowerCase().includes(searchTerm)
    )
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-slate-950">
      
      {/* Hero секция */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        {/* Простой фон без лишних элементов */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
          <div className="absolute top-20 left-20 w-64 h-64 bg-teal-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        {/* Содержимое */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            {/* Бейдж */}
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 rounded-full border border-teal-500/30 mb-8">
              <svg className="w-4 h-4 text-teal-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
              <span className="text-sm font-medium text-slate-300">Экспертный блог</span>
            </div>

            {/* Заголовок */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent">
                Блог
              </span>
              <br />
              <span className="bg-gradient-to-r from-teal-400 to-indigo-400 bg-clip-text text-transparent">
                Hippocrat Digital
              </span>
            </h1>

            {/* Описание */}
            <p className="text-xl md:text-2xl text-slate-400 mb-8 leading-relaxed">
              Профессиональные статьи о медицинском маркетинге, 
              <br className="hidden md:block" />
              цифровых решениях для клиник и трендах в healthcare
            </p>

            {/* Статистика */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-teal-400 mb-1">{allPosts.length}+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Экспертных статей</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-400 mb-1">{categories.length}+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Тематик</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-slate-700"></div>
              <div className="text-center">
                <div className="text-3xl font-bold text-white mb-1">1000+</div>
                <div className="text-sm text-slate-500 uppercase tracking-wider">Читателей</div>
              </div>
            </div>

            {/* CTA кнопки */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#blog-content"
                className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-medium rounded-xl hover:from-teal-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
              >
                Читать статьи
                <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
              
              <a
                href="/"
                className="group inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-medium rounded-xl border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                На главную
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Основной контент */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Основной контент */}
          <main className="flex-1">
            {/* Фильтры */}
            <div className="mb-8">
              <CategoryFilter 
                categories={categories}
                currentCategory={searchParams.category}
                totalPosts={allPosts.length}
                filteredCount={filteredPosts.length}
              />
            </div>

            {/* Результаты поиска */}
            {searchParams.search && (
              <div className="mb-6 p-4 bg-slate-900/50 rounded-lg border border-slate-800">
                <p className="text-slate-300">
                  Результаты поиска по запросу: <span className="text-teal-400 font-medium">"{searchParams.search}"</span>
                </p>
                <p className="text-sm text-slate-400 mt-1">
                  Найдено статей: {filteredPosts.length}
                </p>
              </div>
            )}

            {/* Список статей */}
            <BlogList posts={filteredPosts} />

            {/* Если статей нет */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-slate-900 flex items-center justify-center">
                  <svg className="w-12 h-12 text-slate-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  Статьи не найдены
                </h3>
                <p className="text-slate-400 mb-6">
                  {searchParams.search 
                    ? 'Попробуйте изменить поисковый запрос'
                    : 'В данной категории пока нет статей'
                  }
                </p>
                {(searchParams.category || searchParams.search) && (
                  <a
                    href="/blog"
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-medium rounded-lg hover:from-teal-600 hover:to-indigo-600 transition-all duration-300"
                  >
                    Показать все статьи
                  </a>
                )}
              </div>
            )}
          </main>

          {/* Сайдбар */}
          <aside className="hidden lg:block w-80">
            <div className="sticky top-24 space-y-8">
              {/* Поиск */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Поиск по блогу
                </h3>
                <form action="/blog" method="get" className="space-y-4">
                  <div className="relative">
                    <input
                      type="text"
                      name="search"
                      placeholder="Поиск статей..."
                      defaultValue={searchParams.search}
                      className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-teal-400"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </button>
                  </div>
                  {searchParams.category && (
                    <input type="hidden" name="category" value={searchParams.category} />
                  )}
                </form>
              </div>

              {/* Статистика */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                <h3 className="text-lg font-semibold text-white mb-4">
                  Статистика блога
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Всего статей:</span>
                    <span className="text-teal-400 font-medium">{allPosts.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Категорий:</span>
                    <span className="text-indigo-400 font-medium">{categories.length}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-slate-400">Последнее обновление:</span>
                    <span className="text-slate-300 text-sm">
                      {allPosts[0]?.date 
                        ? new Date(allPosts[0].date).toLocaleDateString('ru-RU')
                        : 'Нет статей'
                      }
                    </span>
                  </div>
                </div>
              </div>

              {/* О блоге */}
              <div className="bg-gradient-to-br from-teal-500/10 to-indigo-500/10 rounded-xl p-6 border border-teal-500/20">
                <h3 className="text-lg font-semibold text-white mb-3">
                  О нашем блоге
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  Мы делимся экспертными знаниями в области медицинского маркетинга, 
                  цифровых решений для клиник и актуальными трендами healthcare индустрии.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
      
      <FounderCard />
      <Footer />
    </div>
  )
}
