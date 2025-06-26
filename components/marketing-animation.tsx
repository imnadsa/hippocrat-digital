"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from 'three';

interface Service {
  id: string;
  name: string;
  description: string;
  benefits: string[];
  position: { x: number; y: number };
  color: string;
  icon: string;
}

export default function MarketingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const clinicGroupRef = useRef<THREE.Group | null>(null);

  // Определяем услуги
  const services: Service[] = [
    {
      id: 'ai-chat',
      name: 'AI Чат-бот 24/7',
      description: 'Автоматический помощник для записи пациентов',
      benefits: ['Ответы за 5 секунд', 'Экономия 80% времени персонала', 'Работает круглосуточно'],
      position: { x: -150, y: -120 },
      color: '#2dd4bf',
      icon: '🤖'
    },
    {
      id: 'analytics',
      name: 'Аналитика в реальном времени',
      description: 'Полный контроль над показателями клиники',
      benefits: ['ROI каждого канала', 'Прогнозы и тренды', 'Готовые отчеты'],
      position: { x: 0, y: -140 },
      color: '#6366f1',
      icon: '📊'
    },
    {
      id: 'crm',
      name: 'CRM для клиник',
      description: 'Управление пациентами и записями',
      benefits: ['Электронные карты', 'История посещений', 'Автоматические напоминания'],
      position: { x: 150, y: -120 },
      color: '#2dd4bf',
      icon: '💾'
    },
    {
      id: 'marketing',
      name: 'Digital маркетинг',
      description: 'Привлечение пациентов из интернета',
      benefits: ['Таргетированная реклама', 'SEO оптимизация', 'Соцсети и контент'],
      position: { x: -120, y: 100 },
      color: '#6366f1',
      icon: '🎯'
    },
    {
      id: 'telemedicine',
      name: 'Телемедицина',
      description: 'Онлайн консультации с врачами',
      benefits: ['Новый источник дохода', 'Расширение географии', 'Удобство для пациентов'],
      position: { x: 120, y: 100 },
      color: '#2dd4bf',
      icon: '💻'
    }
  ];

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!containerRef.current) return;

    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    // Создаем сцену
    const scene = new THREE.Scene();
    sceneRef.current = scene;
    
    // Настраиваем камеру
    const camera = new THREE.PerspectiveCamera(
      45,
      width / height,
      0.1,
      1000
    );
    camera.position.set(15, 15, 15);
    camera.lookAt(0, 2, 0);

    // Настраиваем рендерер
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // Освещение
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(10, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Группа для клиники
    const clinicGroup = new THREE.Group();
    clinicGroupRef.current = clinicGroup;
    scene.add(clinicGroup);

    // Создаем платформу
    const platformGeometry = new THREE.CylinderGeometry(8, 8, 0.5, 32);
    const platformMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x1e293b,
      emissive: 0x0a0e1a,
      emissiveIntensity: 0.1
    });
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    platform.position.y = -0.25;
    platform.receiveShadow = true;
    clinicGroup.add(platform);

    // Создаем здание клиники (простая но узнаваемая форма)
    const buildingGroup = new THREE.Group();

    // Основное здание
    const buildingGeometry = new THREE.BoxGeometry(6, 4, 5);
    const buildingMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xf8f9fa,
      emissive: 0xf8f9fa,
      emissiveIntensity: 0.1
    });
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
    building.position.y = 2;
    building.castShadow = true;
    buildingGroup.add(building);

    // Крыша
    const roofGeometry = new THREE.ConeGeometry(4.5, 2, 4);
    const roofMaterial = new THREE.MeshPhongMaterial({ 
      color: 0xe74c3c
    });
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.y = 5;
    roof.rotation.y = Math.PI / 4;
    buildingGroup.add(roof);

    // Медицинский крест на фасаде
    const createMedicalCross = () => {
      const crossMaterial = new THREE.MeshPhongMaterial({
        color: 0xe74c3c,
        emissive: 0xe74c3c,
        emissiveIntensity: 0.3
      });

      // Вертикальная часть
      const verticalGeometry = new THREE.BoxGeometry(0.5, 2, 0.1);
      const vertical = new THREE.Mesh(verticalGeometry, crossMaterial);
      vertical.position.set(0, 2, 2.55);
      buildingGroup.add(vertical);

      // Горизонтальная часть
      const horizontalGeometry = new THREE.BoxGeometry(1.5, 0.5, 0.1);
      const horizontal = new THREE.Mesh(horizontalGeometry, crossMaterial);
      horizontal.position.set(0, 2, 2.55);
      buildingGroup.add(horizontal);
    };

    createMedicalCross();

    // Окна
    const createWindows = () => {
      const windowGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.1);
      const windowMaterial = new THREE.MeshPhongMaterial({
        color: 0x2dd4bf,
        emissive: 0x2dd4bf,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.8
      });

      const windowPositions = [
        { x: -1.5, y: 2.5, z: 2.51 },
        { x: 1.5, y: 2.5, z: 2.51 },
        { x: -1.5, y: 1, z: 2.51 },
        { x: 1.5, y: 1, z: 2.51 },
        // Боковые окна
        { x: 3.01, y: 2.5, z: 0 },
        { x: 3.01, y: 1, z: 0 },
        { x: -3.01, y: 2.5, z: 0 },
        { x: -3.01, y: 1, z: 0 }
      ];

      windowPositions.forEach(pos => {
        const window = new THREE.Mesh(windowGeometry, windowMaterial);
        window.position.set(pos.x, pos.y, pos.z);
        buildingGroup.add(window);
      });
    };

    createWindows();

    // Вход
    const entranceGeometry = new THREE.BoxGeometry(1.2, 2, 0.2);
    const entranceMaterial = new THREE.MeshPhongMaterial({
      color: 0x2dd4bf,
      transparent: true,
      opacity: 0.7
    });
    const entrance = new THREE.Mesh(entranceGeometry, entranceMaterial);
    entrance.position.set(0, 1, 2.52);
    buildingGroup.add(entrance);

    clinicGroup.add(buildingGroup);

    // Создаем плавающие частицы вокруг клиники
    const particles: THREE.Mesh[] = [];
    const createParticles = () => {
      for (let i = 0; i < 30; i++) {
        const geometry = new THREE.SphereGeometry(0.05, 8, 8);
        const material = new THREE.MeshBasicMaterial({
          color: Math.random() > 0.5 ? 0x2dd4bf : 0x6366f1,
          transparent: true,
          opacity: 0.6
        });
        const particle = new THREE.Mesh(geometry, material);
        
        const angle = (i / 30) * Math.PI * 2;
        const radius = 5 + Math.random() * 2;
        particle.position.x = Math.cos(angle) * radius;
        particle.position.y = Math.random() * 6;
        particle.position.z = Math.sin(angle) * radius;
        
        particle.userData = {
          angle,
          radius,
          speed: 0.2 + Math.random() * 0.3,
          ySpeed: Math.random() * 0.01 - 0.005
        };
        
        particles.push(particle);
        scene.add(particle);
      }
    };

    createParticles();

    // Анимация
    const clock = new THREE.Clock();
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      
      // Медленное вращение клиники
      clinicGroup.rotation.y = elapsedTime * 0.1;
      
      // Легкое покачивание здания
      buildingGroup.position.y = Math.sin(elapsedTime * 0.5) * 0.05;
      
      // Анимация частиц
      particles.forEach(particle => {
        const { angle, radius, speed, ySpeed } = particle.userData;
        const newAngle = angle + elapsedTime * speed;
        particle.position.x = Math.cos(newAngle) * radius;
        particle.position.z = Math.sin(newAngle) * radius;
        particle.position.y += ySpeed;
        
        // Сброс позиции если частица улетела слишком высоко или низко
        if (particle.position.y > 7) particle.position.y = -1;
        if (particle.position.y < -1) particle.position.y = 7;
      });

      renderer.render(scene, camera);
      
      return animationId;
    };

    const animationId = animate();

    // Обработчик изменения размера
    const handleResize = () => {
      if (!containerRef.current) return;
      
      const containerRect = containerRef.current.getBoundingClientRect();
      const width = containerRect.width;
      const height = containerRect.height;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Очистка
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(animationId);
      
      if (containerRef.current && renderer.domElement.parentElement === containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      scene.traverse(object => {
        if (object instanceof THREE.Mesh) {
          object.geometry.dispose();
          if (object.material instanceof THREE.Material) {
            object.material.dispose();
          } else if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          }
        }
      });
      
      renderer.dispose();
    };
  }, [isMobile]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div 
        ref={containerRef} 
        className="w-full h-full" 
        style={{ background: "transparent" }}
      />
      
      {/* Услуги вокруг клиники */}
      {services.map((service) => (
        <div
          key={service.id}
          className="absolute"
          style={{
            left: `calc(50% + ${service.position.x}px)`,
            top: `calc(50% + ${service.position.y}px)`,
            transform: 'translate(-50%, -50%)'
          }}
        >
          {/* Пульсирующий круг услуги */}
          <button
            className={`
              relative w-16 h-16 rounded-full cursor-pointer
              transition-all duration-300 hover:scale-110
              ${hoveredService === service.id ? 'scale-110' : ''}
            `}
            style={{
              background: service.color,
              boxShadow: `0 0 20px ${service.color}40`
            }}
            onMouseEnter={() => setHoveredService(service.id)}
            onMouseLeave={() => setHoveredService(null)}
            onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
          >
            <span className="text-2xl absolute inset-0 flex items-center justify-center">
              {service.icon}
            </span>
            
            {/* Пульсирующие кольца */}
            <div 
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                background: service.color,
                opacity: 0.2
              }}
            />
            <div 
              className="absolute inset-0 rounded-full animate-ping"
              style={{
                background: service.color,
                opacity: 0.1,
                animationDelay: '0.5s'
              }}
            />
          </button>

          {/* Линия соединения с клиникой */}
          <svg
            className="absolute pointer-events-none"
            style={{
              width: '200px',
              height: '200px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: -1
            }}
          >
            <line
              x1="100"
              y1="100"
              x2={100 - service.position.x / 2}
              y2={100 - service.position.y / 2}
              stroke={service.color}
              strokeWidth="1"
              opacity="0.3"
              strokeDasharray="5,5"
            />
          </svg>

          {/* Информационная карточка */}
          {selectedService === service.id && (
            <div className="absolute z-10 animate-fadeIn" style={{
              left: service.position.x > 0 ? 'auto' : '80px',
              right: service.position.x > 0 ? '80px' : 'auto',
              top: service.position.y > 0 ? 'auto' : '80px',
              bottom: service.position.y > 0 ? '80px' : 'auto',
              width: '280px'
            }}>
              <div className="bg-slate-900/95 backdrop-blur-md border border-teal-500/30 rounded-lg p-5 shadow-2xl">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{service.icon}</span>
                  <h3 className="text-lg font-bold text-teal-400">
                    {service.name}
                  </h3>
                </div>
                <p className="text-sm text-slate-300 mb-4">
                  {service.description}
                </p>
                <div className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <span 
                        className="text-xs mt-0.5"
                        style={{ color: service.color }}
                      >
                        ✓
                      </span>
                      <span className="text-xs text-slate-300">
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedService(null);
                  }}
                  className="mt-4 w-full py-2 text-sm border rounded-md transition-colors"
                  style={{
                    borderColor: service.color + '50',
                    color: service.color
                  }}
                >
                  Закрыть
                </button>
              </div>
            </div>
          )}
        </div>
      ))}

      {/* Подсказка */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-slate-400 text-sm bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full">
          Нажмите на услуги вокруг клиники
        </p>
      </div>
    </div>
  );
}
