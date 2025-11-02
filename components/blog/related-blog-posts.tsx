'use client'

import Link from 'next/link'
import { getSimilarPosts, getAllPosts } from '@/lib/blog'
import { formatDate, createExcerpt } from '@/lib/blog-types'

interface RelatedBlogPostsProps {
  // Либо используем текущий slug для похожих постов
  currentSlug?: string
  // Либо явно указываем теги/категории для фильтрации
  tags?: string[]
  category?: string
  // Количество постов для отображения
  limit?: number
  // Заголовок секции
  title?: string
}

export default function RelatedBlogPosts({
  currentSlug,
  tags = [],
  category,
  limit = 3,
  title = "Похожие статьи из блога"
}: RelatedBlogPostsProps) {
  let relatedPosts = []

  if (currentSlug) {
    // Если передан slug - получаем похожие посты
    relatedPosts = getSimilarPosts(currentSlug, limit)
  } else {
    // Если переданы теги/категория - фильтруем вручную
    let allPosts = getAllPosts()

    // Фильтруем по категории если указана
    if (category) {
      allPosts = allPosts.filter(post => 
        post.category.toLowerCase() === category.toLowerCase()
      )
    }

    // Фильтруем по тегам если указаны
    if (tags.length > 0) {
      allPosts = allPosts.filter(post => 
        post.tags?.some(postTag => 
          tags.some(tag => tag.toLowerCase() === postTag.toLowerCase())
        )
      )
    }

    relatedPosts = allPosts.slice(0, limit)
  }

  // Если нет постов - не показываем ничего
  if (relatedPosts.length === 0) {
    return null
  }

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Заголовок */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Углубите свои знания в медицинском маркетинге с нашими экспертными материалами
          </p>
        </div>

        {/* Сетка постов */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group h-full"
            >
              <article className="h-full bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-xl border border-slate-700/50 p-6 hover:border-teal-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10 flex flex-col">
                {/* Категория и теги */}
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 text-xs font-medium text-teal-300 bg-teal-500/20 rounded-full border border-teal-500/30">
                    {post.category}
                  </span>
                  {post.tags && post.tags.length > 0 && (
                    <span className="px-3 py-1 text-xs font-medium text-indigo-300 bg-indigo-500/20 rounded-full border border-indigo-500/30">
                      {post.tags[0]}
                    </span>
                  )}
                </div>

                {/* Заголовок */}
                <h3 className="text-lg md:text-xl font-bold text-white mb-3 group-hover:text-teal-400 transition-colors line-clamp-3 flex-grow">
                  {post.title}
                </h3>

                {/* Описание */}
                <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                  {createExcerpt(post.description, 100)}
                </p>

                {/* Дата и время чтения */}
                <div className="flex items-center justify-between text-xs text-slate-500 mt-auto pt-4 border-t border-slate-700/50">
                  <span>{formatDate(post.date)}</span>
                  <span>{post.readTime || 5} мин чтения</span>
                </div>

                {/* CTA стрелка */}
                <div className="mt-4 inline-flex items-center text-teal-400 group-hover:text-teal-300 transition-colors">
                  <span className="text-sm font-medium">Читать статью</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* CTA в конце */}
        <div className="mt-12 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-medium rounded-xl hover:from-teal-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105"
          >
            Смотреть все статьи в блоге
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
