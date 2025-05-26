'use client'

import Link from 'next/link'

interface ArticleContentProps {
  content: string
}

// Простой парсер Markdown в HTML
function parseMarkdown(markdown: string): string {
  let html = markdown
    // Заголовки
    .replace(/^### (.*$)/gim, '<h3 class="text-xl md:text-2xl font-semibold text-white mb-4 mt-10 first:mt-0 leading-tight">$1</h3>')
    .replace(/^## (.*$)/gim, '<h2 class="text-2xl md:text-3xl font-bold text-white mb-6 mt-12 first:mt-0 leading-tight border-l-4 border-teal-500 pl-4">$1</h2>')
    .replace(/^# (.*$)/gim, '<h1 class="text-3xl md:text-4xl font-bold text-white mb-8 mt-12 first:mt-0 leading-tight">$1</h1>')
    
    // Жирный и курсивный текст
    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-white">$1</strong>')
    .replace(/\*(.*?)\*/g, '<em class="italic text-teal-300">$1</em>')
    
    // Ссылки
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-teal-400 hover:text-teal-300 underline decoration-teal-500/50 hover:decoration-teal-300 underline-offset-4 transition-colors font-medium">$1</a>')
    
    // Инлайн код
    .replace(/`([^`]+)`/g, '<code class="bg-slate-800 text-teal-300 px-2 py-1 rounded text-sm font-mono border border-slate-700">$1</code>')
    
    // Списки
    .replace(/^- (.+)$/gim, '<li class="flex items-start text-slate-300 text-lg leading-relaxed mb-3"><svg class="w-2 h-2 text-teal-400 mr-3 mt-3 flex-shrink-0" fill="currentColor" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4"/></svg><span>$1</span></li>')
    .replace(/^(\d+)\. (.+)$/gim, '<li class="text-slate-300 text-lg leading-relaxed mb-3">$2</li>')
    
    // Цитаты
    .replace(/^> (.+)$/gim, '<blockquote class="border-l-4 border-indigo-500 bg-slate-900/50 p-6 my-8 rounded-r-lg italic"><div class="text-slate-300 text-lg leading-relaxed mb-3">$1</div><div class="flex items-center text-sm text-slate-500"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clip-rule="evenodd" /></svg>Важная информация</div></blockquote>')
    
    // Горизонтальные линии
    .replace(/^---$/gim, '<div class="my-12 flex items-center"><div class="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div><div class="mx-4"><div class="w-2 h-2 bg-teal-500 rounded-full"></div></div><div class="flex-1 h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent"></div></div>')

  // Специальные компоненты - используем многострочную обработку
  // Alert info
  const alertInfoRegex = /<Alert type="info">[\s\S]*?\*\*([^*]+)\*\*[\s\S]*?(.*?)[\s\S]*?<\/Alert>/gi
  html = html.replace(alertInfoRegex, '<div class="border-l-4 border-blue-500 bg-blue-500/10 p-6 my-6 rounded-r-lg"><div class="flex items-start"><div class="flex-shrink-0 mr-3"><svg class="w-5 h-5 text-blue-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" /></svg></div><div class="flex-1 text-blue-300"><strong>$1</strong> $2</div></div></div>')
  
  // Alert success
  const alertSuccessRegex = /<Alert type="success">[\s\S]*?\*\*([^*]+)\*\*[\s\S]*?(.*?)[\s\S]*?<\/Alert>/gi
  html = html.replace(alertSuccessRegex, '<div class="border-l-4 border-green-500 bg-green-500/10 p-6 my-6 rounded-r-lg"><div class="flex items-start"><div class="flex-shrink-0 mr-3"><svg class="w-5 h-5 text-green-300" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg></div><div class="flex-1 text-green-300"><strong>$1</strong> $2</div></div></div>')
  
  // Highlight компонент
  const highlightRegex = /<Highlight>[\s\S]*?(.*?)[\s\S]*?<\/Highlight>/gi
  html = html.replace(highlightRegex, '<div class="bg-gradient-to-r from-teal-500/10 to-indigo-500/10 border border-teal-500/30 rounded-lg p-6 my-6"><div class="flex items-start"><div class="flex-shrink-0 mr-3"><div class="w-6 h-6 bg-gradient-to-br from-teal-500 to-indigo-500 rounded-full flex items-center justify-center"><svg class="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg></div></div><div class="flex-1 text-slate-200">$1</div></div></div>')

  // Обработка таблиц
  const tableRegex = /\|(.+)\|\n\|(.+)\|\n((?:\|(.+)\|\n?)*)/g
  html = html.replace(tableRegex, (match, headers, separator, rows) => {
    const headerCells = headers.split('|').map((h: string) => `<th class="text-left p-4 font-semibold text-white border-r border-slate-700 last:border-r-0">${h.trim()}</th>`).join('')
    const rowCells = rows.trim().split('\n').map((row: string) => {
      const cells = row.split('|').slice(1, -1).map((cell: string) => `<td class="p-4 text-slate-300 border-r border-slate-800 last:border-r-0">${cell.trim()}</td>`).join('')
      return `<tr class="border-b border-slate-800 hover:bg-slate-800/30 transition-colors">${cells}</tr>`
    }).join('')
    
    return `<div class="my-8 overflow-x-auto"><table class="w-full border-collapse bg-slate-900 rounded-lg overflow-hidden border border-slate-800"><thead class="bg-slate-800"><tr>${headerCells}</tr></thead><tbody>${rowCells}</tbody></table></div>`
  })

  // Обработка параграфов (в конце)
  const lines = html.split('\n')
  const processedLines = lines.map(line => {
    const trimmed = line.trim()
    if (trimmed && !trimmed.startsWith('<') && !trimmed.includes('<')) {
      return `<p class="text-slate-300 text-lg leading-relaxed mb-6">${trimmed}</p>`
    }
    return line
  })

  return processedLines.join('\n')
}

export default function ArticleContent({ content }: ArticleContentProps) {
  const processedContent = parseMarkdown(content)

  return (
    <article className="prose prose-lg prose-slate max-w-none">
      <div 
        className="text-slate-300 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: processedContent }}
      />
      
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
