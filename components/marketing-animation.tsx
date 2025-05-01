"use client"

import { useEffect, useRef, useState } from "react"

// Добавляем стили для анимации маркетинговой линии
const marketingAnimationStyle = `
@keyframes marketingDraw {
  0% {
    stroke-dashoffset: 1200;
  }
  100% {
    stroke-dashoffset: 0;
  }
}
`

export default function MarketingAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    // Check if we're on a mobile device for performance optimization
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Установка размеров холста
    const setCanvasDimensions = () => {
      const container = canvas.parentElement
      if (container) {
        canvas.width = container.clientWidth
        canvas.height = container.clientHeight
      }
    }

    setCanvasDimensions()
    window.addEventListener("resize", setCanvasDimensions)

    // Система частиц - уменьшаем количество на мобильных для производительности
    const particleCount = isMobile ? 60 : 120
    const particles: Particle[] = []
    const connections: Connection[] = []

    // Переменные для отслеживания мыши
    let mouseX = canvas.width / 2
    let mouseY = canvas.height / 2
    const mouseRadius = isMobile ? 70 : 100

    // Обработчик движения мыши
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouseX = e.clientX - rect.left
      mouseY = e.clientY - rect.top
    }

    // Обработчик касания для мобильных устройств
    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect()
        mouseX = e.touches[0].clientX - rect.left
        mouseY = e.touches[0].clientY - rect.top
      }
    }

    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("touchmove", handleTouchMove, { passive: true })

    // Создание частиц
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 2 + 1,
        vx: Math.random() * 0.5 - 0.25,
        vy: Math.random() * 0.5 - 0.25,
        color: getGradientColor(Math.random()),
        originalSpeed: Math.random() * 0.5 - 0.25, // Сохраняем исходную скорость
        icon: Math.random() > 0.85 ? getRandomIcon() : null, // Добавляем маркетинговые иконки к некоторым частицам
      })
    }

    // Создание соединений - меньше на мобильных
    const connectionDensity = isMobile ? 0.985 : 0.97
    for (let i = 0; i < particleCount; i++) {
      for (let j = i + 1; j < particleCount; j++) {
        if (Math.random() > connectionDensity) {
          connections.push({
            from: i,
            to: j,
          })
        }
      }
    }

    // Автоматическое движение для мобильных (чтобы анимация была интересной без взаимодействия)
    let autoAngle = 0

    // Цикл анимации
    let animationFrameId: number
    let lastTime = 0

    const render = (time: number) => {
      // Ограничим частоту кадров на мобильных устройствах
      if (isMobile && time - lastTime < 30) {
        animationFrameId = requestAnimationFrame(render)
        return
      }

      lastTime = time
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Рисуем форму "диаграммы маркетинга"
      const maxDistance = Math.min(canvas.width, canvas.height) * 0.4
      drawMarketingShape(ctx, canvas.width / 2, canvas.height / 2, maxDistance)

      // Автоматическое движение на мобильных устройствах
      if (isMobile) {
        autoAngle += 0.01
        const autoX = canvas.width / 2 + Math.cos(autoAngle) * (maxDistance * 0.6)
        const autoY = canvas.height / 2 + Math.sin(autoAngle) * (maxDistance * 0.6)
        const autoRadius = mouseRadius * 0.7

        // Используем это как дополнительную точку притяжения/отталкивания
        particles.forEach((particle) => {
          const dx = particle.x - autoX
          const dy = particle.y - autoY
          const distToAuto = Math.sqrt(dx * dx + dy * dy)

          if (distToAuto < autoRadius) {
            const factor = 1 - distToAuto / autoRadius
            particle.vx += dx * 0.0005 * factor
            particle.vy += dy * 0.0005 * factor
          }
        })
      }

      // Обновляем и рисуем частицы
      particles.forEach((particle, index) => {
        // Проверяем близость к курсору мыши
        const dx = particle.x - mouseX
        const dy = particle.y - mouseY
        const distToMouse = Math.sqrt(dx * dx + dy * dy)

        // Если частица близко к курсору, ускоряем её
        if (distToMouse < mouseRadius) {
          const factor = 1 - distToMouse / mouseRadius
          particle.vx += dx * 0.001 * factor
          particle.vy += dy * 0.001 * factor
        } else {
          // Постепенно возвращаем к исходной скорости
          particle.vx = particle.vx * 0.98 + particle.originalSpeed * 0.02
          particle.vy = particle.vy * 0.98 + particle.originalSpeed * 0.02
        }

        // Обновляем позицию
        particle.x += particle.vx
        particle.y += particle.vy

        // Отскакиваем от краёв с небольшим отступом
        const padding = isMobile ? 30 : 50
        if (particle.x < padding || particle.x > canvas.width - padding) {
          particle.vx *= -1
        }
        if (particle.y < padding || particle.y > canvas.height - padding) {
          particle.vy *= -1
        }

        // Удерживаем частицы в форме "диаграммы маркетинга"
        const centerX = canvas.width / 2
        const centerY = canvas.height / 2

        const dx2 = particle.x - centerX
        const dy2 = particle.y - centerY
        const distance = Math.sqrt(dx2 * dx2 + dy2 * dy2)

        if (distance > maxDistance) {
          // Возвращаем к центру
          particle.vx -= dx2 * 0.01
          particle.vy -= dy2 * 0.01
        }

        // Рисуем частицу
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2)
        ctx.fillStyle = particle.color
        ctx.fill()

        // Рисуем иконку, если она есть
        if (particle.icon) {
          const iconSize = 10 + Math.sin(time * 0.001 + index) * 2; // Пульсирующий размер
          drawIcon(ctx, particle.x, particle.y, iconSize, particle.icon);
        }
      })

      // Рисуем соединения c учетом производительности на мобильных
      const maxConnectionDistance = isMobile ? 80 : 100
      connections.forEach((connection) => {
        const from = particles[connection.from]
        const to = particles[connection.to]

        const dx = to.x - from.x
        const dy = to.y - from.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Рисуем соединения только если частицы достаточно близко
        if (distance < maxConnectionDistance) {
          ctx.beginPath()
          ctx.moveTo(from.x, from.y)
          ctx.lineTo(to.x, to.y)
          ctx.strokeStyle = `rgba(74, 229, 207, ${0.3 - distance * 0.003})`
          ctx.lineWidth = 0.8
          ctx.stroke()
        }
      })

      // Добавляем пульсацию
      const currentTime = Date.now() * 0.001
      const pulse = Math.sin(currentTime) * 0.5 + 0.5

      // Рисуем пульсирующие маркетинговые точки (меньше на мобильных)
      const pulseCount = isMobile ? 3 : 5
      for (let i = 0; i < pulseCount; i++) {
        const angle = currentTime * 0.5 + i * Math.PI * 0.4
        const x = canvas.width / 2 + Math.cos(angle) * maxDistance * 0.6
        const y = canvas.height / 2 + Math.sin(angle) * maxDistance * 0.6

        ctx.beginPath()
        ctx.arc(x, y, 3 + pulse * 2, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(79, 99, 255, ${0.7 * pulse})`
        ctx.fill()
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render(0)

    return () => {
      window.removeEventListener("resize", setCanvasDimensions)
      window.removeEventListener("resize", checkMobile)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("touchmove", handleTouchMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [isMobile])

  return (
    <div className="w-full h-full relative overflow-hidden">
      <canvas ref={canvasRef} className="w-full h-full" style={{ background: "transparent" }} />

      {/* Элементы маркетинговых метрик - адаптивные для мобильных */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Тонкие линии, обозначающие график роста */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            d="M10,70 C20,65 30,60 40,55 C50,50 60,40 70,30 C80,20 90,15 100,10"
            fill="none"
            stroke="rgba(45, 212, 191, 0.5)"
            strokeWidth="0.2"
          />
          <path
            d="M10,60 C30,60 50,40 70,30 C80,25 90,15 100,10"
            fill="none"
            stroke="rgba(99, 102, 241, 0.5)"
            strokeWidth="0.2"
          />
          <path
            d="M10,80 C20,70 40,65 60,60 C80,50 90,30 100,20"
            fill="none"
            stroke="rgba(45, 212, 191, 0.5)"
            strokeWidth="0.2"
          />
        </svg>

        {/* Пульсирующие точки активности - скрыты на мобильных */}
        <div className="hidden md:block">
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-teal-400 opacity-70 animate-pulse"
            style={{ left: "35%", top: "35%", animationDelay: "0s" }}
          ></div>
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400 opacity-70 animate-pulse"
            style={{ left: "65%", top: "35%", animationDelay: "0.5s" }}
          ></div>
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-teal-400 opacity-70 animate-pulse"
            style={{ left: "45%", top: "55%", animationDelay: "1s" }}
          ></div>
          <div
            className="absolute w-1.5 h-1.5 rounded-full bg-indigo-400 opacity-70 animate-pulse"
            style={{ left: "55%", top: "55%", animationDelay: "1.5s" }}
          ></div>
        </div>

        {/* Маркетинговая линия внизу - адаптивна для мобильных */}
        <div className="absolute bottom-6 left-0 right-0 flex justify-center">
          <div className="h-6 md:h-8 w-[80%] md:w-[60%] relative">
            <style dangerouslySetInnerHTML={{ __html: marketingAnimationStyle }} />
            <div className="absolute inset-0 opacity-30">
              <svg viewBox="0 0 1200 200" preserveAspectRatio="none" className="w-full h-full">
                <path
                  d="M0,100 C50,50 100,150 150,100 C200,50 250,120 300,80 C350,40 400,180 450,100 C500,20 550,120 600,100 C650,80 700,140 750,100 C800,60 850,130 900,100 C950,70 1000,120 1050,100 C1100,80 1150,120 1200,100"
                  fill="none"
                  stroke="rgba(45, 212, 191, 0.8)"
                  strokeWidth="2"
                  strokeDasharray="1200"
                  strokeDashoffset="1200"
                  className="marketing-line"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Тонкая подсказка - адаптивный размер шрифта */}
      <div className="absolute bottom-2 right-2 text-[10px] md:text-xs text-teal-400/40 font-light tracking-wide">
        Интерактивная маркетинговая визуализация
      </div>
    </div>
  )
}

// Helper functions and types
type Particle = {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  color: string
  originalSpeed: number
  icon: string | null // Добавляем иконки для частиц
}

type Connection = {
  from: number
  to: number
}

function getGradientColor(t: number): string {
  // Цветовая схема: от бирюзового к индиго
  const r = Math.floor(45 + (99 - 45) * t) // от teal-500 до indigo-500
  const g = Math.floor(212 + (102 - 212) * t)
  const b = Math.floor(191 + (241 - 191) * t)
  return `rgb(${r}, ${g}, ${b}, ${0.6 + t * 0.2})` // Добавляем прозрачность
}

function getRandomIcon(): string {
  // Маркетинговые иконки
  const icons = ['💻', '📱', '🔍', '📊', '📈', '💬', '📣', '✉️', '🎯', '👥'];
  return icons[Math.floor(Math.random() * icons.length)];
}

function drawIcon(ctx: CanvasRenderingContext2D, x: number, y: number, size: number, icon: string) {
  ctx.font = `${size}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(icon, x, y);
}

function drawMarketingShape(ctx: CanvasRenderingContext2D, centerX: number, centerY: number, radius: number) {
  // Создаем форму маркетинговой воронки
  const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius)
  gradient.addColorStop(0, "rgba(45, 212, 191, 0.08)") // teal-500
  gradient.addColorStop(0.5, "rgba(99, 102, 241, 0.05)") // indigo-500
  gradient.addColorStop(1, "rgba(45, 212, 191, 0)")

  // Рисуем форму воронки маркетинга
  ctx.beginPath();
  // Верхняя часть воронки (широкая)
  ctx.moveTo(centerX - radius * 0.8, centerY - radius * 0.6);
  ctx.lineTo(centerX + radius * 0.8, centerY - radius * 0.6);
  
  // Правая сторона, сужающаяся вниз
  ctx.bezierCurveTo(
    centerX + radius * 0.7, centerY, // контрольная точка 1
    centerX + radius * 0.5, centerY + radius * 0.4, // контрольная точка 2
    centerX + radius * 0.3, centerY + radius * 0.7 // конечная точка
  );
  
  // Нижняя часть (узкая)
  ctx.lineTo(centerX - radius * 0.3, centerY + radius * 0.7);
  
  // Левая сторона, расширяющаяся вверх
  ctx.bezierCurveTo(
    centerX - radius * 0.5, centerY + radius * 0.4, // контрольная точка 1
    centerX - radius * 0.7, centerY, // контрольная точка 2
    centerX - radius * 0.8, centerY - radius * 0.6 // конечная точка, замыкаем фигуру
  );
  
  ctx.closePath();
  ctx.fillStyle = gradient;
  ctx.fill();

  // Добавляем горизонтальные линии внутри воронки
  const lineCount = 5;
  for (let i = 1; i < lineCount; i++) {
    const y = centerY - radius * 0.6 + i * (radius * 1.3 / lineCount);
    const widthFactor = 1 - (i / lineCount) * 0.6; // уменьшаем ширину с каждой линией
    
    ctx.beginPath();
    ctx.moveTo(centerX - radius * 0.8 * widthFactor, y);
    ctx.lineTo(centerX + radius * 0.8 * widthFactor, y);
    ctx.strokeStyle = `rgba(99, 102, 241, ${0.05 - i * 0.005})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }

  // Добавляем круговые линии для создания эффекта сканирования
  for (let i = 1; i <= 3; i++) {
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius * 0.2 * i, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(45, 212, 191, ${0.03 * (4 - i)})`;
    ctx.lineWidth = 0.5;
    ctx.stroke();
  }
}
