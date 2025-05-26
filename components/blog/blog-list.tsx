'use client'

import { BlogMeta } from '@/lib/blog'
import BlogCard from './blog-card'

interface BlogListProps {
  posts: BlogMeta[]
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return null
  }

  // Первая статья как featured
  const featuredPost = posts[0]
  const regularPosts = posts.slice(1)

  return (
    <div id="blog-content" className="space-y-12">
      {/* Featured статья */}
      {featuredPost && (
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              Рекомендуемая статья
            </h2>
            <div className="h-px bg-gradient-to-r from-teal-500 to-transparent flex-1 ml-6"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <BlogCard post={featuredPost} featured={true} />
            
            {/* Дополнительная информация о featured статье */}
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-teal-500/10 to-indigo-500/10 rounded-2xl p-8 border border-teal-500/20">
                <h3 className="text-xl font-semibold text-white mb-4">
                  Почему эта статья важна?
                </h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Актуальная информация из healthcare индустрии
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Проверенные экспертами стратегии
                  </li>
                  <li className="flex items-start">
                    <svg className="w-5 h-5 text-teal-400 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Практические советы для немедленного применения
                  </li>
                </ul>
              </div>

              {/* Статистика автора */}
              <div className="bg-slate-900/50 rounded-xl p-6 border border-slate-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white font-bold text-lg">HD</span>
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">Команда Hippocrat Digital</h4>
                    <p className="text-slate-400 text-sm">Эксперты в медицинском маркетинге</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-slate-700">
                  <div className="text-center">
                    <div className="text-lg font-bold text-teal-400">50+</div>
                    <div className="text-xs text-slate-500">Статей</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-indigo-400">5+</div>
                    <div className="text-xs text-slate-500">Лет опыта</div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg font-bold text-white">100+</div>
                    <div className="text-xs text-slate-500">Клиентов</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Остальные статьи */}
      {regularPosts.length > 0 && (
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-white">
              Все статьи
            </h2>
            <div className="flex items-center text-sm text-slate-400">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
              </svg>
              {regularPosts.length} {regularPosts.length === 1 ? 'статья' : regularPosts.length < 5 ? 'статьи' : 'статей'}
            </div>
          </div>

          {/* Сетка статей */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <div
                key={post.slug}
                className="animate-fadeInUp"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationFillMode: 'both'
                }}
              >
                <BlogCard post={post} />
              </div>
            ))}
          </div>

          {/* Пагинация (заглушка) */}
          {regularPosts.length >= 9 && (
            <div className="flex justify-center mt-16">
              <div className="flex items-center space-x-2">
                <button
                  disabled
                  className="px-4 py-2 text-sm font-medium text-slate-500 bg-slate-800/50 rounded-lg border border-slate-700 cursor-not-allowed"
                >
                  Предыдущая
                </button>
                
                <div className="flex items-center space-x-1">
                  <button className="px-3 py-2 text-sm font-medium text-white bg-gradient-to-r from-teal-500 to-indigo-500 rounded-lg">
                    1
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                    2
                  </button>
                  <button className="px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                    3
                  </button>
                  <span className="px-2 text-slate-500">...</span>
                  <button className="px-3 py-2 text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-800 rounded-lg transition-colors">
                    10
                  </button>
                </div>
                
                <button className="px-4 py-2 text-sm font-medium text-white bg-slate-800 hover:bg-slate-700 rounded-lg border border-slate-700 hover:border-slate-600 transition-colors">
                  Следующая
                </button>
              </div>
            </div>
          )}
        </section>
      )}

      {/* CTA секция в конце */}
      <section className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-8 md:p-12 border border-slate-700/50 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Нужна помощь с медицинским маркетингом?
          </h3>
          <p className="text-slate-400 text-lg mb-8">
            Наши эксперты помогут вам разработать эффективную стратегию продвижения вашей клиники или медицинского центра.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contacts"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-medium rounded-xl hover:from-teal-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105"
            >
              Получить консультацию
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="/services"
              className="inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-medium rounded-xl border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300"
            >
              Наши услуги
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
