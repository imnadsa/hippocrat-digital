'use client'

import Link from 'next/link'
import Image from 'next/image'
import { BlogMeta, formatDate } from '@/lib/blog'

interface BlogCardProps {
  post: BlogMeta
  featured?: boolean
}

export default function BlogCard({ post, featured = false }: BlogCardProps) {
  const cardClasses = featured 
    ? "group relative bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-2xl overflow-hidden border border-slate-700/50 hover:border-teal-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-teal-500/10"
    : "group relative bg-slate-900/50 rounded-xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-slate-900/50"

  return (
    <article className={cardClasses}>
      <Link href={`/blog/${post.slug}`} className="block">
        {/* Изображение */}
        <div className={`relative overflow-hidden ${featured ? 'h-64 md:h-80' : 'h-48'}`}>
          {post.image ? (
            <Image
              src={post.image}
              alt={post.title}
              fill
              sizes={featured ? "(max-width: 768px) 100vw, 50vw" : "(max-width: 768px) 100vw, 33vw"}
              className="object-cover group-hover:scale-110 transition-transform duration-700"
              priority={featured}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-teal-500/20 to-indigo-500/20 flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 text-slate-600 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <p className="text-slate-500 text-sm">Медицинская статья</p>
              </div>
            </div>
          )}
          
          {/* Градиент оверлей */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
          
          {/* Категория бейдж */}
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 bg-slate-900/80 text-xs font-medium text-teal-400 rounded-full border border-teal-500/30 backdrop-blur-sm">
              {post.category}
            </span>
          </div>

          {/* Featured бейдж */}
          {featured && (
            <div className="absolute top-4 right-4">
              <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-teal-500 to-indigo-500 text-xs font-medium text-white rounded-full">
                <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
                Рекомендуем
              </span>
            </div>
          )}

          {/* Время чтения */}
          <div className="absolute bottom-4 right-4">
            <span className="inline-flex items-center px-2 py-1 bg-slate-900/80 text-xs text-slate-300 rounded backdrop-blur-sm">
              <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {post.readTime} мин
            </span>
          </div>
        </div>

        {/* Контент */}
        <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
          {/* Дата */}
          <div className="flex items-center text-sm text-slate-400 mb-3">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {formatDate(post.date)}
          </div>

          {/* Заголовок */}
          <h3 className={`font-bold text-white mb-3 group-hover:text-teal-400 transition-colors duration-300 ${featured ? 'text-2xl md:text-3xl leading-tight' : 'text-xl leading-tight'}`}>
            {post.title}
          </h3>

          {/* Описание */}
          <p className={`text-slate-400 leading-relaxed mb-4 ${featured ? 'text-lg' : 'text-base'}`}>
            {post.description}
          </p>

          {/* Теги */}
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag, index) => (
                <span
                  key={index}
                  className="inline-flex items-center px-2 py-1 bg-slate-800/50 text-xs text-slate-400 rounded border border-slate-700/50"
                >
                  #{tag}
                </span>
              ))}
              {post.tags.length > 3 && (
                <span className="inline-flex items-center px-2 py-1 text-xs text-slate-500">
                  +{post.tags.length - 3} еще
                </span>
              )}
            </div>
          )}

          {/* Читать далее */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center text-sm font-medium text-teal-400 group-hover:text-teal-300 transition-colors">
              Читать статью
              <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>

            {/* Статистика просмотров (заглушка) */}
            <div className="flex items-center text-xs text-slate-500">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              {Math.floor(Math.random() * 1000) + 100}
            </div>
          </div>
        </div>

        {/* Hover эффект */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-500/0 to-indigo-500/0 group-hover:from-teal-500/5 group-hover:to-indigo-500/5 transition-all duration-500 pointer-events-none"></div>
      </Link>
    </article>
  )
}
