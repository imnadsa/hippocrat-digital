import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { getPostBySlug, getAllPosts, getSimilarPosts, formatDate } from '@/lib/blog'
import ArticleContent from '@/components/blog/article-content'
import BlogCard from '@/components/blog/blog-card'

interface Props {
  params: { slug: string }
}

// Генерация метаданных для SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: 'Статья не найдена | Hippocrat Digital',
      description: 'Запрошенная статья не найдена'
    }
  }

  return {
    title: `${post.title} | Блог Hippocrat Digital`,
    description: post.description,
    keywords: `${post.category}, ${post.tags?.join(', ')}, медицинский маркетинг, healthcare`,
    authors: [{ name: 'Hippocrat Digital' }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
      authors: ['Hippocrat Digital'],
      tags: post.tags,
      images: post.image ? [
        {
          url: post.image,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description,
      images: post.image ? [post.image] : [],
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    },
  }
}

// Генерация статических путей
export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({ params }: Props) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  const similarPosts = getSimilarPosts(params.slug, 3)

  // JSON-LD для поисковых систем
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Organization',
      name: 'Hippocrat Digital',
      url: 'https://hippocrat-digital.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Hippocrat Digital',
      logo: {
        '@type': 'ImageObject',
        url: 'https://hippocrat-digital.com/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://hippocrat-digital.com/blog/${params.slug}`,
    },
    articleSection: post.category,
    keywords: post.tags?.join(', '),
  }

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="min-h-screen bg-slate-950 pt-20">
        {/* Breadcrumbs */}
        <div className="bg-slate-900/30 border-b border-slate-800">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link 
                href="/" 
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                Главная
              </Link>
              <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link 
                href="/blog" 
                className="text-slate-400 hover:text-teal-400 transition-colors"
              >
                Блог
              </Link>
              <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-slate-300 truncate">
                {post.title}
              </span>
            </nav>
          </div>
        </div>

        {/* Основной контент */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            {/* Заголовок статьи */}
            <header className="mb-12">
              {/* Категория и теги */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 text-teal-400 text-sm font-medium rounded-full border border-teal-500/30">
                  {post.category}
                </span>
                {post.tags?.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 bg-slate-800/50 text-slate-400 text-xs rounded border border-slate-700/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Заголовок */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Описание */}
              <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                {post.description}
              </p>

              {/* Метаданные */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500">
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime} мин чтения
                </div>
                <div className="flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {Math.floor(Math.random() * 1000) + 500} просмотров
                </div>
              </div>
            </header>

            {/* Изображение статьи */}
            {post.image && (
              <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
              </div>
            )}

            {/* Контент статьи */}
            <ArticleContent content={post.content} />

            {/* Информация об авторе */}
            <div className="border-t border-slate-800 pt-12 mt-16">
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-8 border border-slate-700/50">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-2xl">HD</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2">
                      Команда Hippocrat Digital
                    </h3>
                    <p className="text-slate-400 mb-4">
                      Мы — эксперты в области медицинского маркетинга с более чем 5-летним опытом работы в healthcare индустрии. 
                      Помогаем клиникам и медицинским центрам эффективно продвигаться в цифровой среде.
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-slate-500">
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        50+ статей
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        100+ клиентов
                      </div>
                      <div className="flex items-center">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                        5+ лет опыта
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Навигация между статьями */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-12 border-t border-slate-800 mt-16">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-slate-900/50 text-slate-300 font-medium rounded-lg border border-slate-800 hover:bg-slate-800/50 hover:border-slate-700 hover:text-white transition-all duration-300"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Вернуться к блогу
              </Link>

              <div className="flex items-center space-x-4">
                <span className="text-slate-500 text-sm">Поделиться:</span>
                <div className="flex items-center space-x-2">
                  <button className="p-2 bg-slate-900/50 text-slate-400 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </button>
                  <button className="p-2 bg-slate-900/50 text-slate-400 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  <button className="p-2 bg-slate-900/50 text-slate-400 rounded-lg hover:bg-slate-800 hover:text-white transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Похожие статьи */}
        {similarPosts.length > 0 && (
          <section className="bg-slate-900/30 border-t border-slate-800">
            <div className="container mx-auto px-4 py-16">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12">
                  <h2 className="text-3xl font-bold text-white mb-4">
                    Похожие статьи
                  </h2>
                  <p className="text-slate-400 text-lg">
                    Другие материалы, которые могут вас заинтересовать
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {similarPosts.map((similarPost, index) => (
                    <div
                      key={similarPost.slug}
                      className="animate-fadeInUp"
                      style={{
                        animationDelay: `${index * 200}ms`,
                        animationFillMode: 'both'
                      }}
                    >
                      <BlogCard post={similarPost} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}
