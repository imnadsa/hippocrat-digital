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
export function generateMetadata({ params }: Props): Metadata {
  const post = getPostBySlug(params.slug)

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
export function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPostPage({ params }: Props) {
  const post = getPostBySlug(params.slug)

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

      <div className="min-h-screen bg-slate-950 pt-20 relative overflow-hidden">
        {/* Декоративные элементы */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl animate-floatBackground"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-floatBackground delay-700"></div>

        {/* Breadcrumbs */}
        <div className="bg-slate-900/30 border-b border-slate-800 backdrop-blur-sm animate-fadeInDown">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex items-center space-x-2 text-sm">
              <Link 
                href="/" 
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300 hover-lift"
              >
                Главная
              </Link>
              <svg className="w-4 h-4 text-slate-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
              <Link 
                href="/blog" 
                className="text-slate-400 hover:text-teal-400 transition-colors duration-300 hover-lift"
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
        <div className="container mx-auto px-4 py-12 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Заголовок статьи */}
            <header className="mb-12 animate-fadeInUp">
              {/* Категория и теги */}
              <div className="flex flex-wrap items-center gap-3 mb-6 animate-slideInStagger delay-100">
                <span className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-teal-500/20 to-indigo-500/20 text-teal-400 text-sm font-medium rounded-full border border-teal-500/30 hover:border-teal-400/50 transition-all duration-300">
                  {post.category}
                </span>
                {post.tags?.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2 py-1 bg-slate-800/50 text-slate-400 text-xs rounded border border-slate-700/50 hover:border-slate-600/50 hover:text-slate-300 transition-all duration-300 animate-scaleUp"
                    style={{ animationDelay: `${200 + index * 100}ms` }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Заголовок */}
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight font-fixedsys text-shadow-lg animate-fadeInUp delay-200">
                <span className="bg-gradient-to-r from-white via-teal-100 to-white bg-clip-text text-transparent animate-gradient-text">
                  {post.title}
                </span>
              </h1>

              {/* Описание */}
              <p className="text-xl text-slate-400 mb-8 leading-relaxed animate-fadeInUp delay-300 text-shadow">
                {post.description}
              </p>

              {/* Метаданные */}
              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-500 animate-fadeInUp delay-400">
                <div className="flex items-center hover:text-slate-400 transition-colors duration-300">
                  <svg className="w-4 h-4 mr-2 animate-iconBounce delay-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {formatDate(post.date)}
                </div>
                <div className="flex items-center hover:text-slate-400 transition-colors duration-300">
                  <svg className="w-4 h-4 mr-2 animate-iconBounce delay-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime} мин чтения
                </div>
                <div className="flex items-center hover:text-slate-400 transition-colors duration-300">
                  <svg className="w-4 h-4 mr-2 animate-iconBounce delay-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  {Math.floor(Math.random() * 1000) + 500} просмотров
                </div>
              </div>
            </header>

            {/* Изображение статьи */}
            {post.image && (
              <div className="relative w-full h-96 md:h-[500px] rounded-2xl overflow-hidden mb-12 animate-scaleUp delay-500 hover-lift group">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1024px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent group-hover:from-slate-900/10 transition-all duration-500"></div>
              </div>
            )}

            {/* Контент статьи */}
            <div className="animate-fadeInUp delay-600">
              <ArticleContent content={post.content} />
            </div>

            {/* Информация об авторе */}
            <div className="border-t border-slate-800 pt-12 mt-16 animate-slideInStagger delay-800">
              <div className="bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-8 border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300 blur-backdrop hover-lift">
                <div className="flex items-start space-x-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-full p-0.5 flex-shrink-0 animate-scaleUp delay-900 hover:scale-110 transition-transform duration-300">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src="/blog/images/hippocrat-logo.jpg" 
                        alt="Hippocrat Digital Logo" 
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                  </div>
                  <div className="flex-1 animate-fadeInRight delay-1000">
                    <h3 className="text-xl font-semibold text-white mb-2 font-fixedsys text-shadow">
                      Команда Hippocrat Digital
                    </h3>
                    <p className="text-slate-400 mb-4 leading-relaxed">
                      Мы — эксперты в области медицинского маркетинга с более чем 5-летним опытом работы в healthcare индустрии. 
                      Помогаем клиникам и медицинским центрам эффективно продвигаться в цифровой среде.
                    </p>
                    <div className="flex items-center space-x-6 text-sm text-slate-500">
                      <div className="flex items-center hover:text-teal-400 transition-colors duration-300 animate-fadeInUp delay-1100">
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        50+ статей
                      </div>
                      <div className="flex items-center hover:text-teal-400 transition-colors duration-300 animate-fadeInUp delay-1300">
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
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 py-12 border-t border-slate-800 mt-16 animate-fadeInUp delay-1400">
              <Link
                href="/blog"
                className="inline-flex items-center px-6 py-3 bg-slate-900/50 text-slate-300 font-medium rounded-lg border border-slate-800 hover:bg-slate-800/50 hover:border-slate-700 hover:text-white transition-all duration-300 hover-lift group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Вернуться к блогу
              </Link>
            </div>
          </div>
        </div>

        {/* Похожие статьи */}
        {similarPosts.length > 0 && (
          <section className="bg-slate-900/30 border-t border-slate-800 backdrop-blur-sm">
            <div className="container mx-auto px-4 py-16">
              <div className="max-w-6xl mx-auto">
                <div className="text-center mb-12 animate-fadeInUp">
                  <h2 className="text-3xl font-bold text-white mb-4 font-fixedsys text-shadow-lg">
                    <span className="bg-gradient-to-r from-teal-400 to-indigo-500 bg-clip-text text-transparent animate-gradient-text">
                      Похожие статьи
                    </span>
                  </h2>
                  <p className="text-slate-400 text-lg text-shadow">
                    Другие материалы, которые могут вас заинтересовать
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {similarPosts.map((similarPost, index) => (
                    <div
                      key={similarPost.slug}
                      className="animate-slideInStagger hover-lift"
                      style={{
                        animationDelay: `${200 + index * 200}ms`,
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
