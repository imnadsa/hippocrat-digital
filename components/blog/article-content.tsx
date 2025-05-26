'use client'

import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import Image from 'next/image'
import Link from 'next/link'

interface ArticleContentProps {
  content: string
}

// Кастомные компоненты для MDX
const components = {
  // Заголовки
  h1: ({ children, ...props }: any) => (
    <h1 
      className="text-3xl md:text-4xl font-bold text-white mb-8 mt-12 first:mt-0 leading-tight" 
      {...props}
    >
      {children}
    </h1>
  ),
  h2: ({ children, ...props }: any) => (
    <h2 
      className="text-2xl md:text-3xl font-bold text-white mb-6 mt-12 first:mt-0 leading-tight border-l-4 border-teal-500 pl-4" 
      {...props}
    >
      {children}
    </h2>
  ),
  h3: ({ children, ...props }: any) => (
    <h3 
      className="text-xl md:text-2xl font-semibold text-white mb-4 mt-10 first:mt-0 leading-tight" 
      {...props}
    >
      {children}
    </h3>
  ),
  h4: ({ children, ...props }: any) => (
    <h4 
      className="text-lg md:text-xl font-semibold text-slate-200 mb-3 mt-8 first:mt-0" 
      {...props}
    >
      {children}
    </h4>
  ),
  h5: ({ children, ...props }: any) => (
    <h5 
      className="text-base md:text-lg font-semibold text-slate-300 mb-3 mt-6 first:mt-0" 
      {...props}
    >
      {children}
    </h5>
  ),
  h6: ({ children, ...props }: any) => (
    <h6 
      className="text-sm md:text-base font-semibold text-slate-400 mb-2 mt-4 first:mt-0 uppercase tracking-wider" 
      {...props}
    >
      {children}
    </h6>
  ),

  // Параграфы
  p: ({ children, ...props }: any) => (
    <p 
      className="text-slate-300 text-lg leading-relaxed mb-6" 
      {...props}
    >
      {children}
    </p>
  ),

  // Списки
  ul: ({ children, ...props }: any) => (
    <ul 
      className="list-none space-y-3 mb-6 ml-0" 
      {...props}
    >
      {children}
    </ul>
  ),
  ol: ({ children, ...props }: any) => (
    <ol 
      className="list-decimal list-inside space-y-3 mb-6 text-slate-300" 
      {...props}
    >
      {children}
    </ol>
  ),
  li: ({ children, ...props }: any) => (
    <li 
      className="flex items-start text-slate-300 text-lg leading-relaxed" 
      {...props}
    >
      <svg className="w-2 h-2 text-teal-400 mr-3 mt-3 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8">
        <circle cx="4" cy="4" r="4"/>
      </svg>
      <span>{children}</span>
    </li>
  ),

  // Ссылки
  a: ({ href, children, ...props }: any) => (
    <Link 
      href={href || '#'}
      className="text-teal-400 hover:text-teal-300 underline decoration-teal-500/50 hover:decoration-teal-300 underline-offset-4 transition-colors font-medium"
      {...props}
    >
      {children}
    </Link>
  ),

  // Жирный и курсивный текст
  strong: ({ children, ...props }: any) => (
    <strong 
      className="font-bold text-white" 
      {...props}
    >
      {children}
    </strong>
  ),
  em: ({ children, ...props }: any) => (
    <em 
      className="italic text-teal-300" 
      {...props}
    >
      {children}
    </em>
  ),

  // Цитаты
  blockquote: ({ children, ...props }: any) => (
    <blockquote 
      className="border-l-4 border-indigo-500 bg-slate-900/50 p-6 my-8 rounded-r-lg italic" 
      {...props}
    >
      <div className="text-slate-300 text-lg leading-relaxed mb-3">
        {children}
      </div>
      <div className="flex items-center text-sm text-slate-500">
        <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
        </svg>
        Важная информация
      </div>
    </blockquote>
  ),

  // Код
  code: ({ children, ...props }: any) => {
    if (typeof children === 'string' && !children.includes('\n')) {
      // Инлайн код
      return (
        <code 
          className="bg-slate-800 text-teal-300 px-2 py-1 rounded text-sm font-mono border border-slate-700" 
          {...props}
        >
          {children}
        </code>
      )
    }
    
    // Блок кода
    const codeHTML = highlight(children)
    return (
      <div className="relative my-8">
        <pre className="bg-slate-900 border border-slate-800 rounded-lg p-6 overflow-x-auto">
          <code 
            className="text-sm font-mono"
            dangerouslySetInnerHTML={{ __html: codeHTML }}
          />
        </pre>
        <div className="absolute top-4 right-4">
          <button className="text-xs text-slate-400 hover:text-slate-300 bg-slate-800 px-2 py-1 rounded border border-slate-700 hover:border-slate-600 transition-colors">
            Копировать
          </button>
        </div>
      </div>
    )
  },

  // Изображения
  img: ({ src, alt, ...props }: any) => (
    <div className="my-8">
      <div className="relative rounded-lg overflow-hidden bg-slate-900 border border-slate-800">
        <Image
          src={src || '/placeholder-image.jpg'}
          alt={alt || 'Изображение статьи'}
          width={800}
          height={400}
          className="w-full h-auto object-cover"
          {...props}
        />
      </div>
      {alt && (
        <p className="text-center text-sm text-slate-400 mt-3 italic">
          {alt}
        </p>
      )}
    </div>
  ),

  // Таблицы
  table: ({ children, ...props }: any) => (
    <div className="my-8 overflow-x-auto">
      <table 
        className="w-full border-collapse bg-slate-900 rounded-lg overflow-hidden border border-slate-800" 
        {...props}
      >
        {children}
      </table>
    </div>
  ),
  thead: ({ children, ...props }: any) => (
    <thead 
      className="bg-slate-800" 
      {...props}
    >
      {children}
    </thead>
  ),
  tbody: ({ children, ...props }: any) => (
    <tbody 
      {...props}
    >
      {children}
    </tbody>
  ),
  tr: ({ children, ...props }: any) => (
    <tr 
      className="border-b border-slate-800 hover:bg-slate-800/30 transition-colors" 
      {...props}
    >
      {children}
    </tr>
  ),
  th: ({ children, ...props }: any) => (
    <th 
      className="text-left p-4 font-semibold text-white border-r border-slate-700 last:border-r-0" 
      {...props}
    >
      {children}
    </th>
  ),
  td: ({ children, ...props }: any) => (
    <td 
      className="p-4 text-slate-300 border-r border-slate-800 last:border-r-0" 
      {...props}
    >
      {children}
    </td>
  ),

  // Горизонтальная линия
  hr: ({ ...props }: any) => (
    <div className="my-12 flex items-center">
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
      <div className="mx-4">
        <div className="w-2 h-2 bg-teal-500 rounded-full"></div>
      </div>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div>
    </div>
  ),

  // Кастомные компоненты
  Alert: ({ type = 'info', children }: { type?: 'info' | 'warning' | 'success' | 'error', children: React.ReactNode }) => {
    const styles = {
      info: 'border-blue-500 bg-blue-500/10 text-blue-300',
      warning: 'border-yellow-500 bg-yellow-500/10 text-yellow-300',
      success: 'border-green-500 bg-green-500/10 text-green-300',
      error: 'border-red-500 bg-red-500/10 text-red-300'
    }
    
    const icons = {
      info: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      ),
      warning: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      ),
      success: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      ),
      error: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
        </svg>
      )
    }

    return (
      <div className={`border-l-4 p-6 my-6 rounded-r-lg ${styles[type]}`}>
        <div className="flex items-start">
          <div className="flex-shrink-0 mr-3">
            {icons[type]}
          </div>
          <div className="flex-1">
            {children}
          </div>
        </div>
      </div>
    )
  },

  // Компонент для выделения ключевых моментов
  Highlight: ({ children }: { children: React.ReactNode }) => (
    <div className="bg-gradient-to-r from-teal-500/10 to-indigo-500/10 border border-teal-500/30 rounded-lg p-6 my-6">
      <div className="flex items-start">
        <div className="flex-shrink-0 mr-3">
          <div className="w-6 h-6 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-full flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          </div>
        </div>
        <div className="flex-1 text-slate-200">
          {children}
        </div>
      </div>
    </div>
  )
}

export default function ArticleContent({ content }: ArticleContentProps) {
  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <div className="text-slate-300 leading-relaxed">
        <MDXRemote 
          source={content} 
          components={components}
        />
      </div>
      
      {/* Призыв к действию в конце статьи */}
      <div className="not-prose bg-gradient-to-br from-slate-900/80 to-slate-800/80 rounded-2xl p-8 border border-slate-700/50 mt-16">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Есть вопросы по медицинскому маркетингу?
          </h3>
          <p className="text-slate-400 mb-6">
            Получите персональную консультацию от экспертов Hippocrat Digital
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacts"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-500 to-indigo-500 text-white font-medium rounded-xl hover:from-teal-600 hover:to-indigo-600 transition-all duration-300 hover:scale-105"
            >
              Связаться с нами
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center px-8 py-4 bg-slate-800/50 text-white font-medium rounded-xl border border-slate-700 hover:bg-slate-700/50 hover:border-slate-600 transition-all duration-300"
            >
              Читать другие статьи
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
