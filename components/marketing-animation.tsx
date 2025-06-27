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
    const primaryAccentColor = new THREE.Color("#6366f1"); // indigo-500
    const secondaryAccentColor = new THREE.Color("#2dd4bf"); // teal-400
    const darkBgColor = new THREE.Color("#0b101b"); // --deep-dark-bg
    const buildingColor = new THREE.Color("#1e293b"); // slate-800
    const glowColor = new THREE.Color("#2dd4bf"); // teal-400

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    
    // Освещение в стиле глобальных цветов
    scene.add(new THREE.AmbientLight(0xffffff, 0.3));
    scene.add(new THREE.HemisphereLight(primaryAccentColor, darkBgColor, 0.6));
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);
    
    // Точечный свет с цветом teal
    const pointLight = new THREE.PointLight(glowColor, 1.5, 15);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    const setCameraPosition = () => {
      if (isMobile) {
        camera.position.set(0, 5, 20);
        camera.lookAt(0, 3, 0);
      } else {
        camera.position.set(0, 8, 22);
        camera.lookAt(0, 4, 0);
      }
      camera.updateProjectionMatrix();
    };
    setCameraPosition();

    const clinicGroup = new THREE.Group();
    scene.add(clinicGroup);
    
    const baseBuildingY = 2.7;

    // Основание клиники
    const baseMaterial = new THREE.MeshStandardMaterial({ 
      color: buildingColor, 
      metalness: 0.2, 
      roughness: 0.8 
    });
    
    const topBase = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 0.4, 32), baseMaterial);
    topBase.receiveShadow = true;
    topBase.position.y = baseBuildingY - 2.7;
    clinicGroup.add(topBase);
    
    // Светящееся основание
    const emissiveBaseMaterial = new THREE.MeshStandardMaterial({ 
      color: glowColor, 
      emissive: glowColor, 
      emissiveIntensity: 0.8 
    });
    const bottomBase = new THREE.Mesh(new THREE.CylinderGeometry(7.2, 7.2, 0.3, 32), emissiveBaseMaterial);
    bottomBase.position.y = baseBuildingY - 3.05;
    clinicGroup.add(bottomBase);

    // Здание клиники
    const buildingMaterial = new THREE.MeshStandardMaterial({ 
      color: new THREE.Color("#0f172a"), // slate-900
      metalness: 0.3, 
      roughness: 0.7 
    });
    const building = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 5, 6), buildingMaterial);
    building.castShadow = true;
    building.receiveShadow = true;
    clinicGroup.add(building);

    // Посох Асклепия
    const createAsclepiusRod = () => {
        const group = new THREE.Group();
        const material = new THREE.MeshStandardMaterial({
            color: secondaryAccentColor,
            emissive: secondaryAccentColor,
            emissiveIntensity: 0.3,
            metalness: 0.2,
            roughness: 0.3
        });
        
        const rod = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.1, 3, 8), material);
        group.add(rod);

        const snakeCurve = new THREE.CatmullRomCurve3([
            new THREE.Vector3(0, -1.4, 0.2),
            new THREE.Vector3(0.5, -0.8, 0),
            new THREE.Vector3(-0.5, 0, 0),
            new THREE.Vector3(0.5, 0.8, 0),
            new THREE.Vector3(0, 1.4, 0.2),
        ]);
        const snake = new THREE.Mesh(new THREE.TubeGeometry(snakeCurve, 20, 0.08, 8, false), material);
        group.add(snake);
        
        group.scale.set(0.8, 0.8, 0.8);
        return group;
    };
    
    const asclepiusSymbol = createAsclepiusRod();
    asclepiusSymbol.position.y = 5.5;
    asclepiusSymbol.rotation.y = Math.PI / 2;
    clinicGroup.add(asclepiusSymbol);

    // Текст на здании
    const createTextTexture = (text: string, color: string) => {
        const canvas = document.createElement('canvas');
        const context = canvas.getContext('2d')!;
        canvas.width = 512;
        canvas.height = 128;
        context.font = 'bold 60px Inter, Arial';
        context.fillStyle = color;
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(text, canvas.width / 2, canvas.height / 2);
        return new THREE.CanvasTexture(canvas);
    };

    const textTexture = createTextTexture('Клиника', secondaryAccentColor.getStyle());
    const textMaterial = new THREE.MeshBasicMaterial({ map: textTexture, transparent: true });
    const textPlane = new THREE.Mesh(new THREE.PlaneGeometry(3, 0.75), textMaterial);
    textPlane.position.set(0, 3, 4.01);
    clinicGroup.add(textPlane);

    // ДНК частицы
    const createDnaStrand = () => {
        const group = new THREE.Group();
        const strandLength = 1.2, strandRadius = 0.2;
        const curvePoints = (offset: number) => Array.from({ length: 10 }, (_, i) => {
            const y = (i / 9) * strandLength - strandLength / 2;
            const angle = y * 5 + offset;
            return new THREE.Vector3(Math.cos(angle) * strandRadius, y, Math.sin(angle) * strandRadius);
        });
        
        const strandMaterial = new THREE.MeshStandardMaterial({ 
          color: primaryAccentColor, 
          metalness: 0.4, 
          roughness: 0.6 
        });
        const rungMaterial = new THREE.MeshStandardMaterial({ 
          color: secondaryAccentColor, 
          emissive: secondaryAccentColor, 
          emissiveIntensity: 0.5 
        });
        
        const curve1 = new THREE.CatmullRomCurve3(curvePoints(0));
        const curve2 = new THREE.CatmullRomCurve3(curvePoints(Math.PI));
        group.add(new THREE.Mesh(new THREE.TubeGeometry(curve1, 20, 0.025, 8), strandMaterial));
        group.add(new THREE.Mesh(new THREE.TubeGeometry(curve2, 20, 0.025, 8), strandMaterial));

        for (let i = 0; i < 8; i++) {
            const t = i / 7, p1 = curve1.getPoint(t), p2 = curve2.getPoint(t);
            const rung = new THREE.Mesh(
              new THREE.CylinderGeometry(0.02, 0.02, p1.distanceTo(p2), 3), 
              rungMaterial
            );
            rung.position.copy(p1).lerp(p2, 0.5);
            rung.lookAt(p1);
            group.add(rung);
        }
        return group;
    };
    
    const particles: THREE.Group[] = [];
    const numParticles = isMobile ? 15 : 30;
    for (let i = 0; i < numParticles; i++) {
        const particleGroup = createDnaStrand();
        const angle = Math.random() * Math.PI * 2;
        const radius = 8 + Math.random() * 4;
        const yPos = Math.random() * 10 - 2;
        particleGroup.position.set(
          Math.cos(angle) * radius, 
          yPos, 
          Math.sin(angle) * radius
        );
        particleGroup.rotation.set(
          Math.random() * Math.PI, 
          Math.random() * Math.PI, 
          0
        );
        particleGroup.userData = { 
          angle, 
          radius, 
          orbitSpeed: 0.003 + Math.random() * 0.005, // Медленнее
          ySpeed: (Math.random() - 0.5) * 0.008, 
          selfRotationSpeed: (Math.random() - 0.5) * 0.015 
        };
        particles.push(particleGroup);
        scene.add(particleGroup);
    }
    
    const clock = new THREE.Clock();
    const animate = () => {
        const animationId = requestAnimationFrame(animate);
        const elapsedTime = clock.getElapsedTime();

        // Медленное вращение клиники (360 градусов)
        clinicGroup.rotation.y = elapsedTime * 0.1; // Медленнее в 5 раз
        
        // Легкая левитация
        clinicGroup.position.y = baseBuildingY + Math.sin(elapsedTime * 0.5) * 0.1;

        // Анимация ДНК
        particles.forEach((p) => {
            const { angle, radius, orbitSpeed, ySpeed, selfRotationSpeed } = p.userData;
            p.position.x = Math.cos(angle + elapsedTime * orbitSpeed) * radius;
            p.position.z = Math.sin(angle + elapsedTime * orbitSpeed) * radius;
            p.position.y += ySpeed;
            p.rotation.y += selfRotationSpeed;

            if (p.position.y > 8 || p.position.y < -3) p.userData.ySpeed *= -1;
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
          {isMobile ? "Нажмите" : "Наведите"} на услуги вокруг клиники
        </p>
      </div>
    </div>
  );
}
