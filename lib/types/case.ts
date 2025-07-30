export interface CaseData {
  // ========== ОБЯЗАТЕЛЬНЫЕ ПОЛЯ ==========
  id: string
  title: string
  subtitle: string
  category: string
  shortDescription: string
  images: string[]
  metrics: {
    before: string
    after: string
    improvement: string
    label: string
  }[]
  tags: string[]
  seo: {
    title: string
    description: string
    keywords: string[]
  }
  createdAt: string

  // ========== ОСНОВНОЙ КОНТЕНТ ==========
  content: {
    // Основные блоки (обязательные)
    challenge: string
    solution: string
    results: string
    details: string[]

    // ========== ДОПОЛНИТЕЛЬНЫЕ БЛОКИ (ОПЦИОНАЛЬНЫЕ) ==========
    
    // Дополнительные вызовы и проблемы
    challenge2?: string           // Второй основной вызов
    technicalChallenges?: string  // Технические сложности
    businessChallenges?: string   // Бизнес-вызовы
    
    // Дополнительные результаты
    additionalResults?: string    // Дополнительные результаты
    businessResults?: string      // Бизнес-результаты
    technicalResults?: string     // Технические результаты
    
    // Проектная информация
    timeline?: string             // Временные рамки проекта
    budget?: string               // Бюджет проекта
    teamSize?: string             // Размер команды
    projectDuration?: string      // Длительность проекта
    
    // Технологии и инструменты
    technologies?: string[]       // Использованные технологии
    tools?: string[]              // Инструменты разработки
    integrations?: string[]       // Интеграции с другими системами
    
    // Обратная связь и оценка
    clientFeedback?: string       // Отзыв клиента
    userFeedback?: string         // Отзывы пользователей
    teamFeedback?: string         // Мнение команды
    
    // Анализ и выводы
    lessonsLearned?: string       // Выученные уроки
    challenges?: string           // Встреченные сложности
    improvements?: string         // Возможные улучшения
    futureImprovements?: string   // Планы на будущее
    
    // Применение в клиниках
    clinicApplications?: string   // Применение технологий в медицинских клиниках
    
    // Бизнес-impact
    businessImpact?: string       // Влияние на бизнес клиента
    roi?: string                  // Возврат инвестиций
    costSavings?: string          // Экономия средств
    
    // Процесс разработки  
    methodology?: string          // Методология разработки
    testingApproach?: string      // Подход к тестированию
    qualityAssurance?: string     // Обеспечение качества
    
    // Дополнительная информация
    awards?: string               // Награды и признания
    mediaResults?: string         // Результаты в СМИ
    competitorAnalysis?: string   // Анализ конкурентов
    
    // Детализированные списки
    keyFeatures?: string[]        // Ключевые особенности
    achievements?: string[]       // Достижения проекта
    challenges_list?: string[]    // Список сложностей
    solutions_list?: string[]     // Список решений
  }
}
