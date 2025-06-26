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
  position: { x: number; y: number }; // Эти позиции будут базовыми
  color: string;
  iconSvg: string; // Иконка теперь будет SVG строкой
}

export default function MarketingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [activeService, setActiveService] = useState<Service | null>(null); // Храним весь объект услуги
  const clinicGroupRef = useRef<THREE.Group | null>(null);

  // Обновленные иконки в виде SVG-строк (пример, в реальном проекте лучше импортировать SVG-файлы)
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
      position: { x: -180, y: -120 },
      color: "#0f4c75", // Темно-синий
      iconSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/></svg>', // Пример иконки чата/инфо
    },
    {
      id: "analytics",
      name: "Аналитика в реальном времени",
      description: "Полный контроль над показателями клиники",
      benefits: ["ROI каждого канала", "Прогнозы и тренды", "Готовые отчеты"],
      position: { x: 0, y: -160 },
      color: "#0a5d5d", // Темно-бирюзовый
      iconSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>', // Пример иконки графика
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
      position: { x: 180, y: -120 },
      color: "#0f4c75",
      iconSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>', // Пример иконки контактов/базы данных
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
      position: { x: -140, y: 100 },
      color: "#0a5d5d",
      iconSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 15.5c-.83 0-1.5-.67-1.5-1.5S11.17 14.5 12 14.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-3.5-3.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm7 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/></svg>', // Пример иконки целевой аудитории/маркетинга
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
      position: { x: 140, y: 100 },
      color: "#0f4c75",
      iconSvg:
        '<svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M19 12h-2v3h-3v2h5v-5zm-7 9c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM5 12H3V9h3V7H1V4h2v3h2V4h3v3h2v2H7v3H5zm7-10c5.52 0 10 4.48 10 10s-4.48 10-10 10S2 17.52 2 12 6.48 2 12 2z"/></svg>', // Пример иконки телемедицины
    },
  ];

  const getServiceButtonPosition = useCallback(
    (service: Service) => {
      if (isMobile) {
        // На мобильных устройствах располагаем по кругу внизу
        const baseRadius = Math.min(window.innerWidth, window.innerHeight) * 0.25; // Динамический радиус
        const angleStep = (2 * Math.PI) / services.length;
        const index = services.findIndex((s) => s.id === service.id);
        const angle = index * angleStep - Math.PI / 2; // Начало с верхней точки
        return {
          x: Math.cos(angle) * baseRadius,
          y: Math.sin(angle) * baseRadius + window.innerHeight * 0.3, // Смещаем вниз
        };
      } else {
        // На десктопе используем фиксированные позиции
        return service.position;
      }
    },
    [isMobile, services]
  );

  useEffect(() => {
    const checkMobile = () =>
      setIsMobile(window.innerWidth < 768 || window.innerHeight < 600); // Учитываем также высоту
    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (!containerRef.current) return;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();

    const primaryAccentColor = new THREE.Color("#6366f1"); // Indigo
    const secondaryAccentColor = new THREE.Color("#2dd4bf"); // Teal
    const darkBuildingColor = new THREE.Color("#212938"); // Dark slate

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      1000
    );
    // Адаптация камеры под мобильные/десктопные устройства
    const setCameraPosition = () => {
      if (isMobile) {
        camera.position.set(10, 8, 10); // Ближе к центру, ниже
        camera.lookAt(0, 1.5, 0);
      } else {
        camera.position.set(15, 15, 15);
        camera.lookAt(0, 2, 0);
      }
      camera.updateProjectionMatrix();
    };
    setCameraPosition();

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(10, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024;
    directionalLight.shadow.mapSize.height = 1024;
    directionalLight.shadow.camera.near = 0.5;
    directionalLight.shadow.camera.far = 50;
    directionalLight.shadow.camera.left = -10;
    directionalLight.shadow.camera.right = 10;
    directionalLight.shadow.camera.top = 10;
    directionalLight.shadow.camera.bottom = -10;
    scene.add(directionalLight);

    const clinicGroup = new THREE.Group();
    clinicGroupRef.current = clinicGroup;
    scene.add(clinicGroup);

    // Основание (платформа)
    const platformGeometry = new THREE.CylinderGeometry(8, 8, 0.5, 32);
    const platformMaterial = new THREE.MeshPhongMaterial({
      color: 0x1e293b,
      emissive: 0x0a0e1a,
      emissiveIntensity: 0.1,
    });
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    platform.position.y = -0.25;
    platform.receiveShadow = true;
    clinicGroup.add(platform);

    const buildingGroup = new THREE.Group();
    const buildingGeometry = new THREE.BoxGeometry(6, 4, 5);
    const buildingMaterial = new THREE.MeshStandardMaterial({
      color: darkBuildingColor,
      metalness: 0.1,
      roughness: 0.8,
    });
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
    building.position.y = 2;
    building.castShadow = true;
    buildingGroup.add(building);

    // Крыша
    const roofGeometry = new THREE.ConeGeometry(4.5, 2, 4);
    const roofMaterial = new THREE.MeshStandardMaterial({
      color: primaryAccentColor,
      metalness: 0.2,
      roughness: 0.5,
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 5;
    roof.rotation.y = Math.PI / 4;
    roof.castShadow = true;
    buildingGroup.add(roof);

    // Медицинский крест - более объемный
    const createMedicalCross = () => {
      const crossMaterial = new THREE.MeshStandardMaterial({
        color: primaryAccentColor,
        emissive: primaryAccentColor,
        emissiveIntensity: 0.5,
      });
      const vertical = new THREE.Mesh(
        new THREE.BoxGeometry(0.5, 2.5, 0.2),
        crossMaterial
      );
      vertical.position.set(0, 2.2, 2.55);
      vertical.castShadow = true;
      buildingGroup.add(vertical);
      const horizontal = new THREE.Mesh(
        new THREE.BoxGeometry(2, 0.5, 0.2),
        crossMaterial
      );
      horizontal.position.set(0, 2.2, 2.55);
      horizontal.castShadow = true;
      buildingGroup.add(horizontal);
    };
    createMedicalCross();

    // Окна - более детализированные с возможностью свечения
    const windowMaterial = new THREE.MeshStandardMaterial({
      color: secondaryAccentColor,
      emissive: secondaryAccentColor,
      emissiveIntensity: 0.3,
      transparent: true,
      opacity: 0.8,
      metalness: 0.1,
      roughness: 0.2,
    });
    const windowFrameMaterial = new THREE.MeshStandardMaterial({
      color: darkBuildingColor.clone().offsetHSL(0, 0, -0.1),
      metalness: 0.5,
      roughness: 0.5,
    });

    const createWindow = (x: number, y: number, z: number, rotationY = 0) => {
      const windowGroup = new THREE.Group();

      // Стекло
      const glass = new THREE.Mesh(
        new THREE.BoxGeometry(0.9, 0.9, 0.05),
        windowMaterial
      );
      glass.castShadow = true;
      glass.receiveShadow = true;
      windowGroup.add(glass);

      // Рамка
      const frameThickness = 0.1;
      const frameGeometryH = new THREE.BoxGeometry(
        0.9 + frameThickness * 2,
        frameThickness,
        0.1
      );
      const frameGeometryV = new THREE.BoxGeometry(
        frameThickness,
        0.9 + frameThickness * 2,
        0.1
      );

      const frameTop = new THREE.Mesh(frameGeometryH, windowFrameMaterial);
      frameTop.position.y = 0.9 / 2 + frameThickness / 2;
      windowGroup.add(frameTop);

      const frameBottom = new THREE.Mesh(frameGeometryH, windowFrameMaterial);
      frameBottom.position.y = -(0.9 / 2 + frameThickness / 2);
      windowGroup.add(frameBottom);

      const frameLeft = new THREE.Mesh(frameGeometryV, windowFrameMaterial);
      frameLeft.position.x = -(0.9 / 2 + frameThickness / 2);
      windowGroup.add(frameLeft);

      const frameRight = new THREE.Mesh(frameGeometryV, windowFrameMaterial);
      frameRight.position.x = 0.9 / 2 + frameThickness / 2;
      windowGroup.add(frameRight);

      windowGroup.position.set(x, y, z);
      windowGroup.rotation.y = rotationY;
      buildingGroup.add(windowGroup);

      // Добавим userData для потенциальной анимации света
      glass.userData.initialEmissiveIntensity = windowMaterial.emissiveIntensity; // Сохраняем начальное значение
      glass.userData.pulsating = Math.random() > 0.7; // Случайное включение/выключение пульсации
      glass.userData.pulseOffset = Math.random() * Math.PI * 2; // Смещение для асинхронной пульсации

      return glass;
    };

    const windows: THREE.Mesh[] = [];
    const windowPositions = [
      { x: -1.5, y: 2.5, z: 2.51, rot: 0 },
      { x: 1.5, y: 2.5, z: 2.51, rot: 0 },
      { x: -1.5, y: 1, z: 2.51, rot: 0 },
      { x: 1.5, y: 1, z: 2.51, rot: 0 },
      { x: 3.01, y: 2.5, z: 0, rot: Math.PI / 2 },
      { x: 3.01, y: 1, z: 0, rot: Math.PI / 2 },
      { x: -3.01, y: 2.5, z: 0, rot: Math.PI / 2 },
      { x: -3.01, y: 1, z: 0, rot: Math.PI / 2 },
      { x: -1.5, y: 2.5, z: -2.51, rot: Math.PI },
      { x: 1.5, y: 2.5, z: -2.51, rot: Math.PI },
      { x: -1.5, y: 1, z: -2.51, rot: Math.PI },
      { x: 1.5, y: 1, z: -2.51, rot: Math.PI },
    ];
    windowPositions.forEach((pos) =>
      windows.push(createWindow(pos.x, pos.y, pos.z, pos.rot))
    );

    // Входная группа
    const entranceMaterial = new THREE.MeshStandardMaterial({
      color: secondaryAccentColor,
      transparent: true,
      opacity: 0.7,
      roughness: 0.3,
    });
    const entrance = new THREE.Mesh(
      new THREE.BoxGeometry(1.5, 2.5, 0.2),
      entranceMaterial
    );
    entrance.position.set(0, 1.25, 2.52); // Немного выше
    buildingGroup.add(entrance);

    // Добавим парапеты на крыше
    const parapetMaterial = new THREE.MeshStandardMaterial({
      color: darkBuildingColor.clone().offsetHSL(0, 0, -0.05),
      metalness: 0.3,
      roughness: 0.7,
    });
    const createParapet = (width: number, depth: number, x: number, z: number) => {
        const parapet = new THREE.Mesh(new THREE.BoxGeometry(width, 0.4, depth), parapetMaterial);
        parapet.position.set(x, 4.2, z); // Высота на уровне верхнего края здания
        buildingGroup.add(parapet);
    };
    createParapet(6.2, 0.2, 0, 2.5); // Передний
    createParapet(6.2, 0.2, 0, -2.5); // Задний
    createParapet(0.2, 5.2, 3.0, 0); // Правый
    createParapet(0.2, 5.2, -3.0, 0); // Левый


    clinicGroup.add(buildingGroup);

    const particles: THREE.Mesh[] = [];
    const createParticles = () => {
      const numParticles = isMobile ? 15 : 40; // Меньше частиц на мобильных
      for (let i = 0; i < numParticles; i++) {
        const material = new THREE.MeshBasicMaterial({
          color:
            Math.random() > 0.5 ? primaryAccentColor : secondaryAccentColor,
          transparent: true,
          opacity: 0.6,
        });
        const particle = new THREE.Mesh(
          new THREE.SphereGeometry(0.05, 8, 8),
          material
        );
        const angle = (i / numParticles) * Math.PI * 2;
        const radius = 6 + Math.random() * 3;
        const yPos = Math.random() * 8; // Диапазон высоты
        particle.position.set(
          Math.cos(angle) * radius,
          yPos,
          Math.sin(angle) * radius
        );
        particle.userData = {
          angle,
          radius,
          speed: 0.005 + Math.random() * 0.005, // Более медленная и плавная скорость
          ySpeed: (Math.random() * 0.01 - 0.005) / 2, // Более медленное движение по Y
        };
        particles.push(particle);
        scene.add(particle);
      }
    };
    createParticles();

    const clock = new THREE.Clock();
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      if (clinicGroupRef.current)
        clinicGroupRef.current.rotation.y = elapsedTime * 0.04;
      // clinicGroupRef.current.position.y = Math.sin(elapsedTime * 0.5) * 0.05; // Легкое "дыхание" всей клиники

      // Анимация пульсации света в окнах
      windows.forEach((windowMesh) => {
        if (windowMesh.userData.pulsating) {
          // Проверяем, что material является MeshStandardMaterial или MeshPhongMaterial
          if (
            windowMesh.material instanceof THREE.MeshStandardMaterial ||
            windowMesh.material instanceof THREE.MeshPhongMaterial
          ) {
            windowMesh.material.emissiveIntensity =
              windowMesh.userData.initialEmissiveIntensity + // Используем сохраненное начальное значение
              Math.sin(elapsedTime * 3 + windowMesh.userData.pulseOffset) * 0.2;
          }
        }
      });

      particles.forEach((p) => {
        const { angle, radius, speed, ySpeed } = p.userData;
        const newAngle = angle + elapsedTime * speed;
        p.position.x = Math.cos(newAngle) * radius;
        p.position.z = Math.sin(newAngle) * radius;
        p.position.y += ySpeed;
        if (p.position.y > 7 || p.position.y < -1)
          p.position.y = p.position.y > 7 ? -1 : 7;
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
      setCameraPosition(); // Пересчитываем позицию камеры при ресайзе
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
  }, [isMobile, getServiceButtonPosition]); // Зависимость от isMobile для обновления камеры и частиц

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
    <div className="w-full h-full relative overflow-hidden bg-gradient-to-br from-slate-950 to-slate-800">
      <CustomStyles />
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{ background: "transparent" }}
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
              zIndex: isActive && !isMobile ? 20 : 1, // Z-index только для десктопа
            }}
            onMouseEnter={() => handleMouseEnter(service)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="relative w-16 h-16 rounded-full cursor-pointer transition-transform duration-300 flex items-center justify-center p-3 group"
              style={{
                background: service.color,
                boxShadow: `0 0 20px ${service.color}40`,
                transform: isActive && !isMobile ? "scale(1.1)" : "scale(1)",
                border: `2px solid ${service.color}`, // Более выраженная рамка
              }}
              onClick={() => handleToggleService(service)}
            >
              <div
                className="w-full h-full text-white transition-transform duration-300 group-hover:scale-110"
                dangerouslySetInnerHTML={{ __html: service.iconSvg }}
                style={{ filter: `drop-shadow(0px 0px 4px ${service.color}80)` }} // Тень для иконки
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
                  transform: `translate(${x > 0 ? "0" : "0"}, -50%)`,
                  marginLeft: x > 0 ? "-16px" : "16px",
                  marginRight: x > 0 ? "16px" : "-16px",
                  transformOrigin: x > 0 ? "right" : "left",
                }}
              >
                <div className="bg-slate-900/95 backdrop-blur-md border border-teal-500/30 rounded-lg p-5 shadow-2xl">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="text-3xl"
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
            <div className="flex items-center gap-4 mb-4">
              <div
                className="text-4xl text-white"
                dangerouslySetInnerHTML={{ __html: activeService.iconSvg }}
                style={{ color: activeService.color }}
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
