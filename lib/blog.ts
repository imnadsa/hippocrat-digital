// lib/blog.ts - КЛИЕНТСКАЯ часть (БЕЗ fs)

import type { BlogMeta } from './blog-types'
import { blogData } from './blog-server'

// Экспортируем типы
export type { BlogPost, BlogMeta } from './blog-types'
export { formatDate, createExcerpt } from './blog-types'

// Экспортируем данные для клиента
export { blogData }

// КЛИЕНТСКИЕ функции (БЕЗ чтения файлов)
export function getAllCategories(): string[] {
  const categories = blogData.map(post => post.category)
  return Array.from(new Set(categories)).sort()
}

export function getAllTags(): string[] {
  const tags = blogData.flatMap(post => post.tags || [])
  return Array.from(new Set(tags)).sort()
}

export function getAllPosts(): BlogMeta[] {
  return blogData.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostsByCategory(category: string): BlogMeta[] {
  return blogData.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  )
}

export function getPostsByTag(tag: string): BlogMeta[] {
  return blogData.filter(post => 
    post.tags?.some(postTag => 
      postTag.toLowerCase() === tag.toLowerCase()
    )
  )
}

export function searchPosts(query: string): BlogMeta[] {
  const searchTerm = query.toLowerCase()
  
  return blogData.filter(post => 
    post.title.toLowerCase().includes(searchTerm) ||
    post.description.toLowerCase().includes(searchTerm) ||
    post.category.toLowerCase().includes(searchTerm) ||
    post.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}

export function getSimilarPosts(currentSlug: string, limit: number = 3): BlogMeta[] {
  const currentPost = blogData.find(p => p.slug === currentSlug)
  if (!currentPost) return []

  const otherPosts = blogData.filter(post => post.slug !== currentSlug)

  const scoredPosts = otherPosts.map(post => {
    let score = 0
    
    if (post.category === currentPost.category) {
      score += 10
    }
    
    const commonTags = post.tags?.filter(tag => 
      currentPost.tags?.includes(tag)
    ) || []
    score += commonTags.length * 5

    return { post, score }
  })

  return scoredPosts
    .sort((a, b) => b.score - a.score)
    .slice(0, limit)
    .map(item => item.post)
}
