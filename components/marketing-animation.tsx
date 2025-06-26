"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from 'three';

interface ClinicZone {
  id: string;
  name: string;
  description: string;
  metrics: string[];
  color: THREE.Color;
  position: THREE.Vector3;
}

export default function MarketingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredZone, setHoveredZone] = useState<string | null>(null);
  const [selectedZone, setSelectedZone] = useState<string | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());

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
    
    // Настраиваем камеру для изометрической проекции
    const aspect = width / height;
    const frustumSize = isMobile ? 15 : 12;
    const camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      1000
    );
    
    // Изометрический угол
    camera.position.set(20, 20, 20);
    camera.lookAt(0, 0, 0);

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
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 15, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.camera.left = -15;
    directionalLight.shadow.camera.right = 15;
    directionalLight.shadow.camera.top = 15;
    directionalLight.shadow.camera.bottom = -15;
    scene.add(directionalLight);

    // Цвета Hippocrat
    const tealColor = new THREE.Color(0x2dd4bf);
    const indigoColor = new THREE.Color(0x6366f1);
    const whiteColor = new THREE.Color(0xffffff);
    const darkColor = new THREE.Color(0x1e293b);

    // Материалы
    const buildingMaterial = new THREE.MeshPhongMaterial({ 
      color: darkColor,
      emissive: 0x0a0e1a,
      emissiveIntensity: 0.2
    });

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: tealColor,
      metalness: 0.1,
      roughness: 0.1,
      transparent: true,
      opacity: 0.7,
      envMapIntensity: 1
    });

    const accentMaterial = new THREE.MeshPhongMaterial({
      color: tealColor,
      emissive: tealColor,
      emissiveIntensity: 0.3
    });

    // Группа для всей клиники
    const clinicGroup = new THREE.Group();
    scene.add(clinicGroup);

    // Создаем платформу-основание
    const platformGeometry = new THREE.BoxGeometry(20, 0.5, 15);
    const platformMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x0f172a,
      emissive: 0x0a0e1a,
      emissiveIntensity: 0.1
    });
    const platform = new THREE.Mesh(platformGeometry, platformMaterial);
    platform.position.y = -0.25;
    platform.receiveShadow = true;
    clinicGroup.add(platform);

    // Создаем основное здание клиники
    const buildingGeometry = new THREE.BoxGeometry(12, 6, 10);
    const building = new THREE.Mesh(buildingGeometry, buildingMaterial);
    building.position.set(0, 3, 0);
    building.castShadow = true;
    building.receiveShadow = true;
    clinicGroup.add(building);

    // Добавляем окна с подсветкой
    const createWindows = () => {
      const windowGeometry = new THREE.BoxGeometry(1.5, 1.2, 0.1);
      const windowPositions = [
        // Фронтальная сторона
        { x: -4, y: 4, z: 5.05 },
        { x: -1.5, y: 4, z: 5.05 },
        { x: 1.5, y: 4, z: 5.05 },
        { x: 4, y: 4, z: 5.05 },
        { x: -4, y: 2, z: 5.05 },
        { x: -1.5, y: 2, z: 5.05 },
        { x: 1.5, y: 2, z: 5.05 },
        { x: 4, y: 2, z: 5.05 },
        // Боковая сторона
        { x: 6.05, y: 4, z: 2 },
        { x: 6.05, y: 4, z: -2 },
        { x: 6.05, y: 2, z: 2 },
        { x: 6.05, y: 2, z: -2 }
      ];

      windowPositions.forEach((pos, index) => {
        const window = new THREE.Mesh(windowGeometry, glassMaterial);
        window.position.set(pos.x, pos.y, pos.z);
        
        // Добавляем свечение за окнами
        const lightGeometry = new THREE.PlaneGeometry(1.4, 1.1);
        const lightMaterial = new THREE.MeshBasicMaterial({
          color: index % 3 === 0 ? tealColor : (index % 3 === 1 ? indigoColor : whiteColor),
          transparent: true,
          opacity: 0.6
        });
        const light = new THREE.Mesh(lightGeometry, lightMaterial);
        light.position.copy(window.position);
        light.position.z -= 0.1;
        
        clinicGroup.add(window);
        clinicGroup.add(light);
      });
    };

    createWindows();

    // Создаем вход с козырьком
    const entranceGeometry = new THREE.BoxGeometry(3, 3, 0.5);
    const entrance = new THREE.Mesh(entranceGeometry, glassMaterial);
    entrance.position.set(0, 1.5, 5.25);
    clinicGroup.add(entrance);

    const canopyGeometry = new THREE.BoxGeometry(4, 0.2, 2);
    const canopy = new THREE.Mesh(canopyGeometry, buildingMaterial);
    canopy.position.set(0, 3.1, 6);
    canopy.castShadow = true;
    clinicGroup.add(canopy);

    // Добавляем вывеску
    const signGeometry = new THREE.BoxGeometry(6, 1, 0.1);
    const signMaterial = new THREE.MeshPhongMaterial({
      color: tealColor,
      emissive: tealColor,
      emissiveIntensity: 0.5
    });
    const sign = new THREE.Mesh(signGeometry, signMaterial);
    sign.position.set(0, 5.5, 5.05);
    clinicGroup.add(sign);

    // Создаем интерактивные зоны
    const zones: ClinicZone[] = [
      {
        id: 'reception',
        name: 'Умная регистратура',
        description: 'AI-ассистент для записи',
        metrics: ['+150% скорость обслуживания', '-80% время ожидания'],
        color: tealColor,
        position: new THREE.Vector3(0, 0.5, 3)
      },
      {
        id: 'diagnostics',
        name: 'Диагностический центр',
        description: 'Автоматизация анализов',
        metrics: ['+200% пациентов в день', '-60% ошибок'],
        color: indigoColor,
        position: new THREE.Vector3(-3, 0.5, 0)
      },
      {
        id: 'doctors',
        name: 'Кабинеты врачей',
        description: 'Электронные карты',
        metrics: ['+40% приемов в день', '100% цифровизация'],
        color: tealColor,
        position: new THREE.Vector3(3, 0.5, 0)
      },
      {
        id: 'analytics',
        name: 'Центр аналитики',
        description: 'Real-time дашборды',
        metrics: ['ROI +250%', 'Прозрачность 100%'],
        color: indigoColor,
        position: new THREE.Vector3(0, 3.5, 0)
      }
    ];

    // Создаем визуальные маркеры для зон
    const zoneMarkers: THREE.Mesh[] = [];
    zones.forEach(zone => {
      const markerGeometry = new THREE.CylinderGeometry(0.5, 0.5, 2, 8);
      const markerMaterial = new THREE.MeshPhongMaterial({
        color: zone.color,
        emissive: zone.color,
        emissiveIntensity: 0.5,
        transparent: true,
        opacity: 0.8
      });
      const marker = new THREE.Mesh(markerGeometry, markerMaterial);
      marker.position.copy(zone.position);
      marker.userData = zone;
      zoneMarkers.push(marker);
      clinicGroup.add(marker);

      // Добавляем пульсирующее кольцо
      const ringGeometry = new THREE.RingGeometry(0.8, 1, 32);
      const ringMaterial = new THREE.MeshBasicMaterial({
        color: zone.color,
        transparent: true,
        opacity: 0.3,
        side: THREE.DoubleSide
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.copy(zone.position);
      ring.position.y = 0.1;
      ring.rotation.x = -Math.PI / 2;
      clinicGroup.add(ring);
      
      // Анимация пульсации
      marker.userData.ring = ring;
    });

    // Создаем анимированных пациентов
    const createPatient = () => {
      const patientGeometry = new THREE.CapsuleGeometry(0.15, 0.5, 4, 8);
      const patientMaterial = new THREE.MeshPhongMaterial({
        color: Math.random() > 0.5 ? 0x2dd4bf : 0x6366f1,
        emissive: 0x2dd4bf,
        emissiveIntensity: 0.2
      });
      const patient = new THREE.Mesh(patientGeometry, patientMaterial);
      patient.castShadow = true;
      return patient;
    };

    const patients: THREE.Mesh[] = [];
    const patientPaths: { mesh: THREE.Mesh; path: THREE.Vector3[]; currentIndex: number; speed: number }[] = [];

    // Создаем несколько пациентов с путями
    for (let i = 0; i < (isMobile ? 3 : 5); i++) {
      const patient = createPatient();
      patients.push(patient);
      clinicGroup.add(patient);

      // Создаем путь для пациента
      const path = [
        new THREE.Vector3(-8, 0.5, 5),
        new THREE.Vector3(0, 0.5, 5),
        new THREE.Vector3(0, 0.5, 3),
        zones[Math.floor(Math.random() * 3)].position.clone(),
        new THREE.Vector3(0, 0.5, 5),
        new THREE.Vector3(8, 0.5, 5)
      ];

      patientPaths.push({
        mesh: patient,
        path: path,
        currentIndex: 0,
        speed: 0.02 + Math.random() * 0.01
      });

      // Начальная позиция
      patient.position.copy(path[0]);
    }

    // Создаем летающие частицы данных
    const createDataParticle = () => {
      const particleGeometry = new THREE.OctahedronGeometry(0.1, 0);
      const particleMaterial = new THREE.MeshPhongMaterial({
        color: Math.random() > 0.5 ? tealColor : indigoColor,
        emissive: Math.random() > 0.5 ? tealColor : indigoColor,
        emissiveIntensity: 0.8
      });
      return new THREE.Mesh(particleGeometry, particleMaterial);
    };

    const dataParticles: { mesh: THREE.Mesh; velocity: THREE.Vector3; target: THREE.Vector3 }[] = [];
    
    // Создаем поток данных
    const createDataFlow = () => {
      const particle = createDataParticle();
      clinicGroup.add(particle);
      
      // Случайная начальная позиция около одной из зон
      const startZone = zones[Math.floor(Math.random() * zones.length)];
      particle.position.copy(startZone.position);
      particle.position.y += 1;
      
      // Целевая позиция - другая зона
      const targetZone = zones[Math.floor(Math.random() * zones.length)];
      
      dataParticles.push({
        mesh: particle,
        velocity: new THREE.Vector3(),
        target: targetZone.position.clone()
      });
    };

    // Создаем начальные частицы
    for (let i = 0; i < (isMobile ? 10 : 20); i++) {
      setTimeout(() => createDataFlow(), i * 200);
    }

    // Добавляем метрики над клиникой
    const createFloatingMetrics = () => {
      const metrics = [
        { text: '+150%', subtext: 'записей', position: new THREE.Vector3(-5, 8, 0) },
        { text: '+80%', subtext: 'удержание', position: new THREE.Vector3(0, 9, 0) },
        { text: 'ROI 250%', subtext: 'за 6 мес', position: new THREE.Vector3(5, 8, 0) }
      ];

      metrics.forEach((metric, index) => {
        // Создаем плавающую панель
        const panelGeometry = new THREE.BoxGeometry(2.5, 1, 0.1);
        const panelMaterial = new THREE.MeshPhongMaterial({
          color: 0x0f172a,
          emissive: index % 2 === 0 ? tealColor : indigoColor,
          emissiveIntensity: 0.1,
          transparent: true,
          opacity: 0.9
        });
        const panel = new THREE.Mesh(panelGeometry, panelMaterial);
        panel.position.copy(metric.position);
        panel.userData = { floatOffset: index * 2 };
        clinicGroup.add(panel);

        // Добавляем рамку
        const frameGeometry = new THREE.BoxGeometry(2.6, 1.1, 0.05);
        const frameMaterial = new THREE.MeshPhongMaterial({
          color: index % 2 === 0 ? tealColor : indigoColor,
          emissive: index % 2 === 0 ? tealColor : indigoColor,
          emissiveIntensity: 0.5
        });
        const frame = new THREE.Mesh(frameGeometry, frameMaterial);
        frame.position.copy(metric.position);
        frame.position.z += 0.08;
        frame.userData = { floatOffset: index * 2 };
        clinicGroup.add(frame);
      });
    };

    createFloatingMetrics();

    // Обработчики мыши
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      // Проверяем пересечения с зонами
      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(zoneMarkers);
      
      if (intersects.length > 0) {
        const zone = intersects[0].object.userData as ClinicZone;
        setHoveredZone(zone.id);
        container.style.cursor = 'pointer';
      } else {
        setHoveredZone(null);
        container.style.cursor = 'default';
      }
    };

    const handleClick = () => {
      if (hoveredZone) {
        setSelectedZone(hoveredZone);
      } else {
        setSelectedZone(null);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);

    // Анимация
    const clock = new THREE.Clock();
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      
      // Вращение клиники
      clinicGroup.rotation.y = Math.sin(elapsedTime * 0.1) * 0.1;
      
      // Анимация пациентов
      patientPaths.forEach(patientData => {
        const { mesh, path, currentIndex, speed } = patientData;
        const targetPos = path[currentIndex];
        
        // Движение к цели
        const direction = new THREE.Vector3().subVectors(targetPos, mesh.position);
        if (direction.length() > 0.1) {
          direction.normalize();
          mesh.position.add(direction.multiplyScalar(speed));
        } else {
          // Переход к следующей точке
          patientData.currentIndex = (currentIndex + 1) % path.length;
        }
      });

      // Анимация частиц данных
      dataParticles.forEach((particle, index) => {
        const direction = new THREE.Vector3().subVectors(particle.target, particle.mesh.position);
        
        if (direction.length() > 0.1) {
          direction.normalize();
          particle.mesh.position.add(direction.multiplyScalar(0.05));
          particle.mesh.rotation.x += 0.1;
          particle.mesh.rotation.y += 0.1;
        } else {
          // Перезапуск частицы
          const startZone = zones[Math.floor(Math.random() * zones.length)];
          particle.mesh.position.copy(startZone.position);
          particle.mesh.position.y += 1;
          
          const targetZone = zones[Math.floor(Math.random() * zones.length)];
          particle.target = targetZone.position.clone();
        }
      });

      // Анимация зон
      zoneMarkers.forEach((marker, index) => {
        const zone = marker.userData as ClinicZone;
        const ring = marker.userData.ring as THREE.Mesh;
        
        // Пульсация маркеров
        const scale = 1 + Math.sin(elapsedTime * 2 + index) * 0.1;
        marker.scale.y = scale;
        
        // Пульсация колец
        const ringScale = 1 + Math.sin(elapsedTime * 3 + index) * 0.3;
        ring.scale.set(ringScale, ringScale, 1);
        if (ring.material instanceof THREE.Material) {
          ring.material.opacity = 0.3 + Math.sin(elapsedTime * 3 + index) * 0.2;
        }
        
        // Подсветка при наведении
        if (hoveredZone === zone.id) {
          if (marker.material instanceof THREE.MeshPhongMaterial) {
            marker.material.emissiveIntensity = 0.8;
          }
          marker.scale.setScalar(1.2);
        } else {
          if (marker.material instanceof THREE.MeshPhongMaterial) {
            marker.material.emissiveIntensity = 0.5;
          }
          marker.scale.setScalar(1);
        }
      });

      // Анимация метрик
      scene.traverse((child) => {
        if (child.userData.floatOffset !== undefined) {
          child.position.y += Math.sin(elapsedTime + child.userData.floatOffset) * 0.002;
        }
      });

      // Периодическое создание новых частиц
      if (Math.random() < 0.02) {
        createDataFlow();
      }

      // Удаление старых частиц
      if (dataParticles.length > (isMobile ? 15 : 30)) {
        const oldParticle = dataParticles.shift();
        if (oldParticle) {
          clinicGroup.remove(oldParticle.mesh);
        }
      }

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
      const aspect = width / height;
      
      camera.left = frustumSize * aspect / -2;
      camera.right = frustumSize * aspect / 2;
      camera.top = frustumSize / 2;
      camera.bottom = frustumSize / -2;
      camera.updateProjectionMatrix();
      
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Очистка
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', checkMobile);
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('click', handleClick);
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
  }, [isMobile, hoveredZone]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div 
        ref={containerRef} 
        className="w-full h-full" 
        style={{ background: "transparent" }}
      />
      
      {/* Информационная панель при наведении */}
      {hoveredZone && (
        <div className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-teal-500/30 rounded-lg p-4 max-w-xs animate-fadeIn">
          <h3 className="text-teal-400 font-bold text-lg mb-2">
            {zones.find(z => z.id === hoveredZone)?.name}
          </h3>
          <p className="text-slate-300 text-sm mb-3">
            {zones.find(z => z.id === hoveredZone)?.description}
          </p>
          <div className="space-y-1">
            {zones.find(z => z.id === hoveredZone)?.metrics.map((metric, idx) => (
              <div key={idx} className="text-sm">
                <span className="text-teal-400 font-bold">{metric}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Подсказка внизу */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-slate-400 text-sm bg-slate-900/80 backdrop-blur-sm px-4 py-2 rounded-full">
          {isMobile ? 'Нажмите на зоны клиники' : 'Наведите курсор на зоны клиники'}
        </p>
      </div>
    </div>
  );
}
