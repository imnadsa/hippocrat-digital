"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

// Стили для модальных окон и анимаций
const CustomStyles = () => (
    <style>{`
    @keyframes subtle-pulse { 
      0%, 100% { transform: scale(1); opacity: 0.15; } 
      50% { transform: scale(1.3); opacity: 0; } 
    }
    .animate-subtle-pulse { animation: subtle-pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
    
    /* Стили для tooltip на десктопе */
    .service-tooltip {
      animation: tooltipFadeIn 0.2s ease-out forwards;
      box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    }
    
    @keyframes tooltipFadeIn {
      from { opacity: 0; transform: scale(0.95); }
      to { opacity: 1; transform: scale(1); }
    }
    
    /* Стили для мобильного модального окна */
    .mobile-modal-overlay { 
      background-color: rgba(11, 16, 27, 0.8); 
      backdrop-filter: blur(10px); 
      -webkit-backdrop-filter: blur(10px); 
    }
    
    .mobile-modal-content { 
      animation: slideUp 0.3s ease-out forwards; 
    }
    
    @keyframes slideUp { 
      from { transform: translateY(100%); } 
      to { transform: translateY(0); } 
    }
    
    .mobile-modal-exit {
      animation: slideDown 0.3s ease-out forwards;
    }
    
    @keyframes slideDown {
      from { transform: translateY(0); }
      to { transform: translateY(100%); }
    }
  `}</style>
);

interface Service {
    id: string;
    name: string;
    description: string;
    benefits: string[];
    position: { x: number; y: number };
    color: string;
    iconSvg: string;
}

// Массив услуг с обновленными цветами в соответствии с глобальными стилями
const services: Service[] = [
    {
      id: "ai-chat",
      name: "AI Чат-бот 24/7",
      description: "Автоматический помощник для записи пациентов",
      benefits: ["Ответы за 5 секунд", "Экономия 80% времени персонала", "Работает круглосуточно"],
      position: { x: -250, y: -140 },
      color: "#6366f1", // indigo-500
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-7 12h-2v-2h2v2zm0-4h-2V6h2v4z"/></svg>',
    },
    {
      id: "analytics",
      name: "Аналитика в реальном времени",
      description: "Полный контроль над показателями клиники",
      benefits: ["ROI каждого канала", "Прогнозы и тренды", "Готовые отчеты"],
      position: { x: 0, y: -200 },
      color: "#2dd4bf", // teal-400
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',
    },
    {
      id: "crm",
      name: "CRM для клиник",
      description: "Управление пациентами и записями",
      benefits: ["Электронные карты", "История посещений", "Автоматические напоминания"],
      position: { x: 250, y: -140 },
      color: "#6366f1", // indigo-500
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></svg>',
    },
    {
      id: "marketing",
      name: "Digital маркетинг",
      description: "Привлечение пациентов из интернета",
      benefits: ["Таргетированная реклама", "SEO оптимизация", "Соцсети и контент"],
      position: { x: -200, y: 140 },
      color: "#2dd4bf", // teal-400
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>',
    },
    {
      id: "telemedicine",
      name: "Телемедицина",
      description: "Онлайн консультации с врачами",
      benefits: ["Новый источник дохода", "Расширение географии", "Удобство для пациентов"],
      position: { x: 200, y: 140 },
      color: "#6366f1", // indigo-500
      iconSvg: '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>',
    },
];

export default function MarketingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeService, setActiveService] = useState<Service | null>(null);
  const [isClosing, setIsClosing] = useState(false);

  const getServiceButtonPosition = useCallback((service: Service) => {
    if (isMobile) {
        const baseRadius = Math.min(window.innerWidth, window.innerHeight) * 0.35;
        const angleStep = (Math.PI * 1.5) / (services.length - 1);
        const index = services.findIndex((s) => s.id === service.id);
        const angle = index * angleStep - (Math.PI * 1.5) / 2 - Math.PI / 4;
        return { x: Math.cos(angle) * baseRadius, y: Math.sin(angle) * baseRadius + window.innerHeight * 0.2 };
    }
    return service.position;
  }, [isMobile]);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (!containerRef.current) return;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    // Цвета из глобальных стилей
    const primaryColor = new THREE.Color("#e91e63"); // Красный/розовый для сердца
    const secondaryColor = new THREE.Color("#2dd4bf"); // teal-400
    const accentColor = new THREE.Color("#6366f1"); // indigo-500
    const glowColor = new THREE.Color("#ff0066"); // Яркий розовый для свечения
    const darkBgColor = new THREE.Color("#0b101b"); // --deep-dark-bg

    const scene = new THREE.Scene();
    scene.fog = new THREE.Fog(darkBgColor, 10, 50);
    
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.5;
    container.appendChild(renderer.domElement);
    
    // Освещение
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    
    // Основной направленный свет
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    scene.add(directionalLight);
    
    // Дополнительные точечные источники света для объема
    const pointLight1 = new THREE.PointLight(primaryColor, 2, 20);
    pointLight1.position.set(0, 0, 5);
    scene.add(pointLight1);
    
    const pointLight2 = new THREE.PointLight(secondaryColor, 1, 15);
    pointLight2.position.set(-5, 0, -5);
    scene.add(pointLight2);

    const setCameraPosition = () => {
      if (isMobile) {
        camera.position.set(0, 0, 25);
      } else {
        camera.position.set(0, 0, 30);
      }
      camera.lookAt(0, 0, 0);
      camera.updateProjectionMatrix();
    };
    setCameraPosition();

    // Главная группа для сердца
    const heartGroup = new THREE.Group();
    scene.add(heartGroup);

    // Создание геометрии сердца через точки
    const createHeartShape = () => {
      const heartVertices: THREE.Vector3[] = [];
      
      // Параметрическое уравнение для 3D сердца
      for (let theta = 0; theta < Math.PI * 2; theta += 0.1) {
        for (let phi = -Math.PI; phi < Math.PI; phi += 0.1) {
          const r = 2;
          const x = r * 16 * Math.pow(Math.sin(theta), 3) / 10;
          const y = -r * (13 * Math.cos(theta) - 5 * Math.cos(2 * theta) - 2 * Math.cos(3 * theta) - Math.cos(4 * theta)) / 10;
          const z = r * Math.sin(phi) * (1 + 0.2 * Math.sin(theta)) * 0.8;
          
          heartVertices.push(new THREE.Vector3(x, y, z));
        }
      }
      
      return heartVertices;
    };

    // Создание системы частиц для сердца
    const heartVertices = createHeartShape();
    const particleCount = heartVertices.length;
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    const sizes = new Float32Array(particleCount);
    const opacities = new Float32Array(particleCount);

    heartVertices.forEach((vertex, i) => {
      positions[i * 3] = vertex.x;
      positions[i * 3 + 1] = vertex.y;
      positions[i * 3 + 2] = vertex.z;
      
      // Градиент цвета от центра к краям
      const distanceFromCenter = vertex.length() / 5;
      const color = new THREE.Color().lerpColors(primaryColor, glowColor, distanceFromCenter);
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
      
      sizes[i] = Math.random() * 0.3 + 0.1;
      opacities[i] = Math.random() * 0.5 + 0.5;
    });

    const heartGeometry = new THREE.BufferGeometry();
    heartGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    heartGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    heartGeometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));
    heartGeometry.setAttribute('opacity', new THREE.BufferAttribute(opacities, 1));

    // Шейдеры для частиц
    const vertexShader = `
      attribute float size;
      attribute float opacity;
      varying vec3 vColor;
      varying float vOpacity;
      
      void main() {
        vColor = color;
        vOpacity = opacity;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (300.0 / -mvPosition.z);
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      varying float vOpacity;
      
      void main() {
        float r = distance(gl_PointCoord, vec2(0.5, 0.5));
        if (r > 0.5) discard;
        
        float intensity = 1.0 - smoothstep(0.0, 0.5, r);
        vec3 glow = vColor * intensity * 2.0;
        
        gl_FragColor = vec4(glow, vOpacity * intensity);
      }
    `;

    const heartMaterial = new THREE.ShaderMaterial({
      vertexShader,
      fragmentShader,
      vertexColors: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      transparent: true,
    });

    const heartMesh = new THREE.Points(heartGeometry, heartMaterial);
    heartGroup.add(heartMesh);

    // Создание "кровеносных сосудов" - связей с услугами
    const createVessel = (startPos: THREE.Vector3, endPos: THREE.Vector3, color: string) => {
      const points = [];
      const segments = 20;
      
      for (let i = 0; i <= segments; i++) {
        const t = i / segments;
        const x = startPos.x + (endPos.x - startPos.x) * t;
        const y = startPos.y + (endPos.y - startPos.y) * t;
        const z = startPos.z + (endPos.z - startPos.z) * t;
        
        // Добавляем волнистость
        const wave = Math.sin(t * Math.PI * 2) * 0.5;
        points.push(new THREE.Vector3(x, y + wave, z));
      }
      
      const curve = new THREE.CatmullRomCurve3(points);
      const tubeGeometry = new THREE.TubeGeometry(curve, 40, 0.1, 8, false);
      
      const material = new THREE.MeshStandardMaterial({
        color: new THREE.Color(color),
        emissive: new THREE.Color(color),
        emissiveIntensity: 0.5,
        roughness: 0.3,
        metalness: 0.5,
      });
      
      return new THREE.Mesh(tubeGeometry, material);
    };

    // Добавляем сосуды к услугам
    const vessels: THREE.Mesh[] = [];
    services.forEach((service, index) => {
      const angle = (index / services.length) * Math.PI * 2;
      const startPos = new THREE.Vector3(
        Math.cos(angle) * 2,
        Math.sin(angle) * 1,
        0
      );
      const endPos = new THREE.Vector3(
        service.position.x / 40,
        service.position.y / 40,
        5
      );
      
      const vessel = createVessel(startPos, endPos, service.color);
      vessels.push(vessel);
      heartGroup.add(vessel);
    });

    // Создание дополнительных эффектов - плавающие частицы крови
    const bloodParticles: THREE.Mesh[] = [];
    const createBloodParticle = () => {
      const geometry = new THREE.SphereGeometry(0.05, 8, 8);
      const material = new THREE.MeshStandardMaterial({
        color: primaryColor,
        emissive: primaryColor,
        emissiveIntensity: 1,
        roughness: 0,
        metalness: 0.5,
      });
      
      const particle = new THREE.Mesh(geometry, material);
      const vesselIndex = Math.floor(Math.random() * vessels.length);
      particle.userData = {
        vesselIndex,
        t: Math.random(),
        speed: 0.005 + Math.random() * 0.01
      };
      
      return particle;
    };

    // Добавляем частицы крови
    for (let i = 0; i < 30; i++) {
      const particle = createBloodParticle();
      bloodParticles.push(particle);
      scene.add(particle);
    }

    // Создание эффекта свечения вокруг сердца
    const glowGeometry = new THREE.SphereGeometry(5, 32, 32);
    const glowMaterial = new THREE.MeshBasicMaterial({
      color: glowColor,
      transparent: true,
      opacity: 0.1,
      side: THREE.BackSide,
    });
    const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
    heartGroup.add(glowMesh);

    // Постобработка: добавляем эффект bloom (свечения)
    // Примечание: Three.js r128 не имеет встроенных постэффектов, 
    // поэтому создаем свечение другими способами

    // Данные для анимации пульсации
    let pulsePhase = 0;
    const pulseSpeed = 0.03;
    
    const clock = new THREE.Clock();
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      
      // Пульсация сердца
      pulsePhase += pulseSpeed;
      const pulseFactor = 1 + Math.sin(pulsePhase) * 0.1;
      heartMesh.scale.set(pulseFactor, pulseFactor, pulseFactor);
      
      // Анимация частиц сердца
      const positionAttribute = heartGeometry.getAttribute('position') as THREE.BufferAttribute;
      const positions = positionAttribute.array as Float32Array;
      
      heartVertices.forEach((vertex, i) => {
        const noise = Math.sin(elapsedTime * 2 + i * 0.1) * 0.05;
        positions[i * 3] = vertex.x + noise;
        positions[i * 3 + 1] = vertex.y + noise;
        positions[i * 3 + 2] = vertex.z + noise;
      });
      positionAttribute.needsUpdate = true;
      
      // Медленное вращение сердца
      heartGroup.rotation.y = elapsedTime * 0.2;
      
      // Анимация свечения
      glowMesh.scale.set(
        1 + Math.sin(elapsedTime * 2) * 0.1,
        1 + Math.sin(elapsedTime * 2) * 0.1,
        1 + Math.sin(elapsedTime * 2) * 0.1
      );
      
      // Анимация частиц крови по сосудам
      bloodParticles.forEach((particle) => {
        const { vesselIndex, t, speed } = particle.userData;
        particle.userData.t = (t + speed) % 1;
        
        // Получаем позицию на кривой сосуда
        const vessel = vessels[vesselIndex];
        if (vessel && vessel.geometry instanceof THREE.TubeGeometry) {
          const curve = (vessel.geometry.parameters as any).path;
          const position = curve.getPointAt(particle.userData.t);
          particle.position.copy(position);
        }
      });
      
      // Анимация сосудов
      vessels.forEach((vessel, i) => {
        if (vessel.material && 'emissiveIntensity' in vessel.material) {
          (vessel.material as THREE.MeshStandardMaterial).emissiveIntensity = 0.5 + Math.sin(elapsedTime * 3 + i) * 0.3;
        }
      });

      renderer.render(scene, camera);
      return animationId;
    };
    const animationId = animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const { width, height } = containerRef.current.getBoundingClientRect();
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      setCameraPosition();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("resize", checkMobile);
      cancelAnimationFrame(animationId);
      if (containerRef.current) containerRef.current.innerHTML = "";
      scene.traverse((object) => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          const material = object.material as THREE.Material | THREE.Material[];
          if (Array.isArray(material)) material.forEach((m) => m.dispose());
          else material.dispose();
        }
      });
      renderer.dispose();
    };
  }, [isMobile, getServiceButtonPosition]);

  const handleToggleService = (service: Service) => {
    if (isMobile) {
      setActiveService((prev) => (prev?.id === service.id ? null : service));
    }
  };

  const handleMouseEnter = (service: Service) => !isMobile && setActiveService(service);
  const handleMouseLeave = () => !isMobile && setActiveService(null);

  const handleCloseMobile = () => {
    setIsClosing(true);
    setTimeout(() => {
      setActiveService(null);
      setIsClosing(false);
    }, 300);
  };

  return (
    <div className="w-full h-full relative">
      <CustomStyles />
      <div ref={containerRef} className="w-full h-full" />

      {/* Кнопки услуг */}
      {services.map((service) => {
        const isActive = activeService?.id === service.id;
        const { x, y } = getServiceButtonPosition(service);
        return (
          <div
            key={service.id}
            className="absolute"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
            onMouseEnter={() => handleMouseEnter(service)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="relative w-16 h-16 rounded-full cursor-pointer transition-all duration-300 flex items-center justify-center p-3 group"
              style={{
                background: `linear-gradient(135deg, ${service.color}dd, ${service.color}99)`,
                boxShadow: isActive 
                  ? `0 0 30px ${service.color}80, 0 0 60px ${service.color}40` 
                  : `0 0 15px ${service.color}50`,
                transform: isActive && !isMobile ? "scale(1.15)" : "scale(1)",
                border: `2px solid ${service.color}`,
              }}
              onClick={() => handleToggleService(service)}
            >
              <div
                className="w-full h-full text-white transition-transform duration-300 group-hover:scale-110"
                dangerouslySetInnerHTML={{ __html: service.iconSvg }}
                style={{ filter: `drop-shadow(0px 0px 6px ${service.color})` }}
              />
              <div
                className="absolute inset-0 rounded-full animate-subtle-pulse"
                style={{ background: service.color }}
              />
            </button>

            {/* Desktop Tooltip */}
            {!isMobile && isActive && (
              <div
                className="absolute z-50 w-[300px] service-tooltip"
                style={{
                  left: x > 0 ? "auto" : "calc(100% + 20px)",
                  right: x > 0 ? "calc(100% + 20px)" : "auto",
                  top: "50%",
                  transform: "translateY(-50%)",
                }}
              >
                <div 
                  className="relative bg-slate-900/95 backdrop-blur-xl border rounded-xl p-5"
                  style={{ borderColor: `${service.color}40` }}
                >
                  {/* Треугольник-указатель */}
                  <div
                    className="absolute w-4 h-4 bg-slate-900/95 transform rotate-45"
                    style={{
                      [x > 0 ? 'right' : 'left']: '-8px',
                      top: '50%',
                      marginTop: '-8px',
                      borderLeft: x > 0 ? `1px solid ${service.color}40` : 'none',
                      borderBottom: x > 0 ? `1px solid ${service.color}40` : 'none',
                      borderRight: x <= 0 ? `1px solid ${service.color}40` : 'none',
                      borderTop: x <= 0 ? `1px solid ${service.color}40` : 'none',
                    }}
                  />
                  
                  <div className="flex items-center gap-3 mb-3">
                    <div 
                      className="text-3xl flex-shrink-0" 
                      style={{ color: service.color }} 
                      dangerouslySetInnerHTML={{ __html: service.iconSvg }}
                    />
                    <h3 className="text-lg font-bold text-white">{service.name}</h3>
                  </div>
                  <p className="text-sm text-slate-300 mb-4">{service.description}</p>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-xs mt-0.5" style={{ color: service.color }}>✓</span>
                        <span className="text-xs text-slate-300">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Mobile Modal */}
      {isMobile && activeService && (
        <div 
          className="fixed inset-0 flex items-end justify-center z-50 mobile-modal-overlay"
          onClick={handleCloseMobile}
        >
          <div 
            className={`bg-slate-900/95 backdrop-blur-xl rounded-t-3xl p-6 shadow-2xl w-full max-w-md border-t ${
              isClosing ? 'mobile-modal-exit' : 'mobile-modal-content'
            }`}
            style={{ borderColor: `${activeService.color}40` }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-16 h-1.5 bg-slate-700 rounded-full mx-auto mb-5"></div>
            <div className="flex items-center gap-4 mb-4">
              <div 
                className="text-4xl flex-shrink-0" 
                style={{ color: activeService.color }} 
                dangerouslySetInnerHTML={{ __html: activeService.iconSvg }} 
              />
              <h3 className="text-xl font-bold text-white">{activeService.name}</h3>
            </div>
            <p className="text-base text-slate-300 mb-5">{activeService.description}</p>
            <div className="space-y-3 mb-6">
              {activeService.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="text-sm mt-0.5" style={{ color: activeService.color }}>✓</span>
                  <span className="text-sm text-slate-300">{benefit}</span>
                </div>
              ))}
            </div>
            <button
              onClick={handleCloseMobile}
              className="mt-4 w-full py-3 text-base rounded-xl transition-all font-semibold hover:opacity-90"
              style={{
                background: `linear-gradient(135deg, ${activeService.color}dd, ${activeService.color}99)`,
                color: 'white',
                boxShadow: `0 4px 20px ${activeService.color}40`
              }}
            >
              Понятно
            </button>
          </div>
        </div>
      )}

      {/* Подсказка */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center pointer-events-none">
        <p className="text-slate-400 text-sm bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-800">
          {isMobile ? "Нажмите" : "Наведите"} на услуги вокруг сердца
        </p>
      </div>
    </div>
  );
}
