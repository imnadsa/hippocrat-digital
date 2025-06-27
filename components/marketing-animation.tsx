"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";

// --- Кастомные стили для новой анимации пульсации и модального окна ---
const CustomStyles = () => (
  <style>{`
    @keyframes gentle-ping {
      75%, 100% {
        transform: scale(1.6);
        opacity: 0;
      }
    }
    .animate-gentle-ping {
      animation: gentle-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite;
    }
    
    .service-modal-overlay {
      background-color: rgba(0, 0, 0, 0.6);
      backdrop-filter: blur(8px);
      -webkit-backdrop-filter: blur(8px);
    }

    .service-modal-content {
      animation: slideInFromBottom 0.3s ease-out forwards;
    }

    @keyframes slideInFromBottom {
      from {
        transform: translateY(100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
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

export default function MarketingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeService, setActiveService] = useState<Service | null>(null);
  
  // Данные об услугах остаются без изменений
  const services: Service[] = [
    {
      id: "ai-chat",
      name: "AI Чат-бот 24/7",
      description: "Автоматический помощник для записи пациентов",
      benefits: [
        "Ответы за 5 секунд",
        "Экономия 80% времени персонала",
        "Работает круглосуточно",
      ],
      position: { x: -220, y: -140 },
      color: "#6366f1", // Indigo
      iconSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>',
    },
    {
      id: "analytics",
      name: "Аналитика в реальном времени",
      description: "Полный контроль над показателями клиники",
      benefits: ["ROI каждого канала", "Прогнозы и тренды", "Готовые отчеты"],
      position: { x: 0, y: -180 },
      color: "#2dd4bf", // Teal
      iconSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>',
    },
    {
      id: "crm",
      name: "CRM для клиник",
      description: "Управление пациентами и записями",
      benefits: [
        "Электронные карты",
        "История посещений",
        "Автоматические напоминания",
      ],
      position: { x: 220, y: -140 },
      color: "#6366f1",
      iconSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>',
    },
    {
      id: "marketing",
      name: "Digital маркетинг",
      description: "Привлечение пациентов из интернета",
      benefits: [
        "Таргетированная реклама",
        "SEO оптимизация",
        "Соцсети и контент",
      ],
      position: { x: -180, y: 120 },
      color: "#2dd4bf",
      iconSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15.5c-.83 0-1.5-.67-1.5-1.5S11.17 14.5 12 14.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3.5-3.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>',
    },
    {
      id: "telemedicine",
      name: "Телемедицина",
      description: "Онлайн консультации с врачами",
      benefits: [
        "Новый источник дохода",
        "Расширение географии",
        "Удобство для пациентов",
      ],
      position: { x: 180, y: 120 },
      color: "#6366f1",
      iconSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 12h-2v3h-3v2h5v-5zm-7 9c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM5 12H3V9h3V7H1V4h2v3h2V4h3v3h2v2H7v3H5zm7-10c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"/></svg>',
    },
  ];

  const getServiceButtonPosition = useCallback((service: Service) => {
      if (isMobile) {
        const baseRadius = Math.min(window.innerWidth, window.innerHeight) * 0.35;
        const angleStep = (Math.PI * 1.5) / (services.length - 1);
        const index = services.findIndex((s) => s.id === service.id);
        const angle = index * angleStep - (Math.PI * 1.5) / 2 - Math.PI / 4;
        return {
          x: Math.cos(angle) * baseRadius,
          y: Math.sin(angle) * baseRadius + window.innerHeight * 0.2,
        };
      } else {
        return service.position;
      }
    }, [isMobile, services]
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (!containerRef.current) return;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    const primaryAccentColor = new THREE.Color("#6366f1"); // Indigo
    const secondaryAccentColor = new THREE.Color("#2dd4bf"); // Teal
    const darkBuildingColor = new THREE.Color("#1f2937"); // Dark Slate
    const emissiveBaseColor = new THREE.Color("#1e40af");

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);
    
    // --- Улучшенное освещение ---
    scene.add(new THREE.AmbientLight(0xffffff, 0.2));
    scene.add(new THREE.HemisphereLight(primaryAccentColor, darkBuildingColor, 0.5));
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(8, 20, 15);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    scene.add(directionalLight);
    
    const pointLight = new THREE.PointLight(emissiveBaseColor, 2, 10);
    pointLight.position.set(0, 0.2, 0);
    scene.add(pointLight);


    const setCameraPosition = () => {
      if (isMobile) {
        camera.position.set(0, 5, 18);
        camera.lookAt(0, 2, 0);
      } else {
        camera.position.set(10, 10, 18);
        camera.lookAt(0, 3, 0);
      }
      camera.updateProjectionMatrix();
    };
    setCameraPosition();

    const clinicGroup = new THREE.Group();
    scene.add(clinicGroup);

    // --- Переработанная модель клиники ---
    
    // 1. Основание
    const baseMaterial = new THREE.MeshStandardMaterial({ color: darkBuildingColor, metalness: 0.3, roughness: 0.6 });
    const topBase = new THREE.Mesh(new THREE.CylinderGeometry(7, 7, 0.4, 32), baseMaterial);
    topBase.receiveShadow = true;
    clinicGroup.add(topBase);
    
    const emissiveBaseMaterial = new THREE.MeshStandardMaterial({
        color: emissiveBaseColor,
        emissive: emissiveBaseColor,
        emissiveIntensity: 1.5
    });
    const bottomBase = new THREE.Mesh(new THREE.CylinderGeometry(7.2, 7.2, 0.3, 32), emissiveBaseMaterial);
    bottomBase.position.y = -0.35;
    clinicGroup.add(bottomBase);
    
    // 2. Основное здание (шестиугольник)
    const buildingMaterial = new THREE.MeshStandardMaterial({
        color: darkBuildingColor.clone().add(new THREE.Color(0x050505)),
        metalness: 0.2,
        roughness: 0.7,
    });
    const building = new THREE.Mesh(new THREE.CylinderGeometry(4, 4, 5, 6), buildingMaterial);
    building.position.y = 2.7;
    building.castShadow = true;
    building.receiveShadow = true;
    clinicGroup.add(building);

    // 3. Светящееся ядро
    const coreMaterial = new THREE.MeshBasicMaterial({ color: secondaryAccentColor });
    const core = new THREE.Mesh(new THREE.SphereGeometry(1, 16, 16), coreMaterial);
    core.position.y = 3;
    clinicGroup.add(core);

    // 4. Окна
    const windowMaterial = new THREE.MeshStandardMaterial({
        color: secondaryAccentColor,
        emissive: secondaryAccentColor,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.4,
        metalness: 0,
        roughness: 0.1
    });
    
    const numSides = 6;
    for (let i = 0; i < numSides; i++) {
        const angle = (i / numSides) * Math.PI * 2;
        const radius = 4.01;
        
        const windowPane = new THREE.Mesh(new THREE.PlaneGeometry(1.5, 3), windowMaterial);
        windowPane.position.set(Math.cos(angle) * radius, 3, Math.sin(angle) * radius);
        windowPane.lookAt(0, 3, 0);
        clinicGroup.add(windowPane);
    }
    
    // 5. Крыша
    const roofMaterial = new THREE.MeshStandardMaterial({ color: primaryAccentColor, metalness: 0.4, roughness: 0.5 });
    const mainRoof = new THREE.Mesh(new THREE.CylinderGeometry(4.2, 4.2, 0.3, 6), roofMaterial);
    mainRoof.position.y = 5.35;
    mainRoof.castShadow = true;
    clinicGroup.add(mainRoof);

    const topRoof = new THREE.Mesh(new THREE.CylinderGeometry(3, 3.5, 0.5, 6), baseMaterial);
    topRoof.position.y = 5.75;
    topRoof.castShadow = true;
    clinicGroup.add(topRoof);

    // 6. Вход
    const entranceAngle = Math.PI; // Сзади, чтобы повернуть к камере
    const entranceCanopy = new THREE.Mesh(new THREE.BoxGeometry(2, 0.2, 1), roofMaterial);
    entranceCanopy.position.set(
        Math.cos(entranceAngle) * 3.5,
        4.2,
        Math.sin(entranceAngle) * 3.5
    );
    entranceCanopy.lookAt(0, 4.2, 0);
    entranceCanopy.castShadow = true;
    clinicGroup.add(entranceCanopy);
    
    // Поворачиваем всю клинику лицом к камере
    clinicGroup.rotation.y = Math.PI / 6;

    // --- Новые частицы ДНК ---
    const createDnaStrand = () => {
        const group = new THREE.Group();
        const strandLength = 1.2;
        const strandRadius = 0.2;

        const curve1Points = [];
        const curve2Points = [];
        for (let i = 0; i < 10; i++) {
            const y = (i / 9) * strandLength - strandLength / 2;
            const angle = y * 5;
            curve1Points.push(new THREE.Vector3(Math.cos(angle) * strandRadius, y, Math.sin(angle) * strandRadius));
            curve2Points.push(new THREE.Vector3(Math.cos(angle + Math.PI) * strandRadius, y, Math.sin(angle + Math.PI) * strandRadius));
        }
        
        const curve1 = new THREE.CatmullRomCurve3(curve1Points);
        const curve2 = new THREE.CatmullRomCurve3(curve2Points);

        const strandMaterial = new THREE.MeshBasicMaterial({ color: primaryAccentColor });
        const tube1 = new THREE.Mesh(new THREE.TubeGeometry(curve1, 20, 0.02, 8, false), strandMaterial);
        const tube2 = new THREE.Mesh(new THREE.TubeGeometry(curve2, 20, 0.02, 8, false), strandMaterial);
        group.add(tube1, tube2);

        const rungMaterial = new THREE.MeshBasicMaterial({ color: secondaryAccentColor });
        for (let i = 0; i < 8; i++) {
            const t = i / 7;
            const p1 = curve1.getPoint(t);
            const p2 = curve2.getPoint(t);
            const rungGeometry = new THREE.CylinderGeometry(0.015, 0.015, p1.distanceTo(p2), 3);
            const rung = new THREE.Mesh(rungGeometry, rungMaterial);
            rung.position.copy(p1).lerp(p2, 0.5);
            rung.lookAt(p1);
            group.add(rung);
        }
        return group;
    };
    
    const particles: THREE.Group[] = [];
    const createParticles = () => {
        const numParticles = isMobile ? 15 : 30;
        for (let i = 0; i < numParticles; i++) {
            const particleGroup = createDnaStrand();
            
            const angle = Math.random() * Math.PI * 2;
            const radius = 8 + Math.random() * 4;
            const yPos = Math.random() * 10 - 2;

            particleGroup.position.set(
                Math.cos(angle) * radius, yPos, Math.sin(angle) * radius
            );
            particleGroup.rotation.x = Math.random() * Math.PI;
            particleGroup.rotation.y = Math.random() * Math.PI;
            
            particleGroup.userData = {
                angle,
                radius,
                orbitSpeed: 0.005 + Math.random() * 0.008,
                ySpeed: (Math.random() - 0.5) * 0.01,
                selfRotationSpeed: (Math.random() - 0.5) * 0.05
            };
            particles.push(particleGroup);
            scene.add(particleGroup);
        }
    };
    createParticles();
    
    const clock = new THREE.Clock();
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Плавное вращение клиники
      clinicGroup.rotation.y += 0.001;
      
      // Пульсация ядра
      const coreScale = 1 + Math.sin(elapsedTime * 2) * 0.1;
      core.scale.set(coreScale, coreScale, coreScale);
      (core.material as THREE.MeshBasicMaterial).color.setHSL(
          (elapsedTime * 0.1) % 1, 1, 0.6
      );

      // Анимация частиц ДНК
      particles.forEach((p) => {
          const { angle, radius, orbitSpeed, ySpeed, selfRotationSpeed } = p.userData;
          const newAngle = angle + elapsedTime * orbitSpeed;
          p.position.x = Math.cos(newAngle) * radius;
          p.position.z = Math.sin(newAngle) * radius;
          p.position.y += ySpeed;
          p.rotation.z += selfRotationSpeed;

          if (p.position.y > 8 || p.position.y < -3) {
            p.position.y = p.position.y > 8 ? -3 : 8;
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
          if (Array.isArray(object.material))
            object.material.forEach((m) => m.dispose());
          else object.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, [isMobile, getServiceButtonPosition]);

  const handleToggleService = (service: Service) => {
    if (isMobile) {
      setActiveService((prev) => (prev?.id === service.id ? null : service));
    } else {
      setActiveService(service);
    }
  };
  const handleMouseEnter = (service: Service) => !isMobile && setActiveService(service);
  const handleMouseLeave = () => !isMobile && setActiveService(null);

  return (
    // Убран фон с этого div, теперь он прозрачный
    <div className="w-full h-full relative overflow-hidden">
      <CustomStyles />
      <div
        ref={containerRef}
        className="w-full h-full"
      />

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
              zIndex: isActive && !isMobile ? 20 : 1,
            }}
            onMouseEnter={() => handleMouseEnter(service)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="relative w-16 h-16 rounded-full cursor-pointer transition-transform duration-300 flex items-center justify-center p-3 group"
              style={{
                background: `${service.color}e6`, // чуть прозрачнее
                boxShadow: `0 0 20px ${service.color}70`,
                transform: isActive && !isMobile ? "scale(1.1)" : "scale(1)",
                border: `2px solid ${service.color}`,
              }}
              onClick={() => handleToggleService(service)}
            >
              <div
                className="w-full h-full text-white transition-transform duration-300 group-hover:scale-110"
                dangerouslySetInnerHTML={{ __html: service.iconSvg }}
                style={{ filter: `drop-shadow(0px 0px 4px white)` }}
              />
              <div
                className="absolute inset-0 rounded-full animate-gentle-ping"
                style={{
                  background: service.color,
                  opacity: 0.2,
                  animationDelay: "0s",
                }}
              />
              <div
                className="absolute inset-0 rounded-full animate-gentle-ping"
                style={{
                  background: service.color,
                  opacity: 0.1,
                  animationDelay: "1s",
                }}
              />
            </button>

            {/* Всплывающее окно для десктопа */}
            {!isMobile && (
              <div
                className={`absolute z-10 w-[280px] transition-all duration-300 ease-in-out ${
                  isActive ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
                style={{
                  left: x > 0 ? "auto" : "100%",
                  right: x > 0 ? "100%" : "auto",
                  top: "50%",
                  transform: `translate(${x > 0 ? "-16px" : "16px"}, -50%)`,
                  transformOrigin: x > 0 ? "right" : "left",
                }}
              >
                <div className="bg-slate-900/95 backdrop-blur-md border border-teal-500/30 rounded-lg p-5 shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="text-3xl"
                      style={{ color: service.color }}
                      dangerouslySetInnerHTML={{ __html: service.iconSvg }}
                    />
                    <h3 className="text-lg font-bold" style={{ color: service.color }}>
                      {service.name}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-300 mb-4">
                    {service.description}
                  </p>
                  <div className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-xs mt-0.5" style={{ color: service.color }}>
                          ✓
                        </span>
                        <span className="text-xs text-slate-300">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Модальное окно для мобильных устройств */}
      {isMobile && activeService && (
        <div className="fixed inset-0 flex items-end justify-center z-50 service-modal-overlay">
          <div className="bg-slate-900/95 backdrop-blur-md rounded-t-2xl p-6 shadow-2xl w-full max-w-md service-modal-content border-t border-teal-500/30">
             <div className="w-12 h-1.5 bg-slate-700 rounded-full mx-auto mb-4"></div>
            <div className="flex items-center gap-4 mb-4">
              <div
                className="text-4xl"
                style={{ color: activeService.color }}
                dangerouslySetInnerHTML={{ __html: activeService.iconSvg }}
              />
              <h3
                className="text-xl font-bold"
                style={{ color: activeService.color }}
              >
                {activeService.name}
              </h3>
            </div>
            <p className="text-base text-slate-300 mb-5">
              {activeService.description}
            </p>
            <div className="space-y-3 mb-6">
              {activeService.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span
                    className="text-sm mt-0.5"
                    style={{ color: activeService.color }}
                  >
                    ✓
                  </span>
                  <span className="text-sm text-slate-300">
                    {benefit}
                  </span>
                </div>
              ))}
            </div>
            <button
              onClick={() => setActiveService(null)}
              className="mt-4 w-full py-3 text-base rounded-lg transition-colors font-semibold"
              style={{
                borderColor: activeService.color + "50",
                color: activeService.color,
                backgroundColor: activeService.color + "10",
                borderWidth: '1px'
              }}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      {/* Инструкция для пользователя */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center pointer-events-none">
        <p className="text-slate-400 text-sm bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full">
          {isMobile ? "Нажмите" : "Наведите"} на услуги вокруг клиники
        </p>
      </div>
    </div>
  );
}
