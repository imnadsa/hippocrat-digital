"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from 'three';

export default function MarketingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Проверка размера экрана для мобильных устройств
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Если компонент не смонтирован, выходим
    if (!containerRef.current) return;

    // Получаем размеры контейнера
    const container = containerRef.current;
    const containerRect = container.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    // Создаем сцену
    const scene = new THREE.Scene();
    
    // Настраиваем камеру - значительно увеличиваем расстояние для мобильных
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    // Увеличиваем расстояние камеры для мобильных устройств, чтобы ДНК была меньше
    camera.position.z = isMobile ? 25 : 20;

    // Настраиваем рендерер с прозрачным фоном и сглаживанием
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Цвета в стиле Hippocrat AI
    const primaryColor = new THREE.Color(0x2dd4bf); // teal-400
    const secondaryColor = new THREE.Color(0x6366f1); // indigo-400
    
    // Создаем материалы с разной прозрачностью для красивого эффекта
    const primaryMaterial = new THREE.MeshBasicMaterial({ 
      color: primaryColor, 
      transparent: true, 
      opacity: 0.8 
    });
    
    const secondaryMaterial = new THREE.MeshBasicMaterial({ 
      color: secondaryColor, 
      transparent: true, 
      opacity: 0.8 
    });
    
    const connectorMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffffff, 
      transparent: true, 
      opacity: 0.3 
    });

    // Создаем группу для ДНК
    const dnaGroup = new THREE.Group();
    scene.add(dnaGroup);

    // Параметры ДНК
    const createDna = () => {
      // Уменьшаем размеры ДНК для мобильных
      const helixRadius = isMobile ? 3.5 : 5; // Уменьшенный радиус для мобильных
      const helixHeight = isMobile ? 10 : 18; // Уменьшенная высота для мобильных
      const numBases = isMobile ? 20 : 30; // Меньше оснований для мобильных
      const turns = 2.5; // Количество витков спирали
      
      // Уменьшаем размер элементов ДНК для мобильных устройств
      const nucleotideSize = isMobile ? 0.35 : 0.4; // Меньший размер нуклеотидов
      const backboneSize = isMobile ? 0.12 : 0.15; // Меньший размер соединений
      
      const segments = [];
      const connectors = [];
      
      // Создаем две спирали ДНК с соединяющими элементами
      for (let i = 0; i < numBases; i++) {
        // Вычисляем позицию на спирали
        const ratio = i / numBases;
        const angle = ratio * Math.PI * 2 * turns;
        const y = (ratio - 0.5) * helixHeight;
        
        // Создаем сферы для первой цепи
        const sphere1Geometry = new THREE.SphereGeometry(nucleotideSize, 12, 12);
        const sphere1 = new THREE.Mesh(
          sphere1Geometry, 
          i % 2 === 0 ? primaryMaterial : secondaryMaterial
        );
        
        // Позиция на первой спирали
        sphere1.position.set(
          Math.cos(angle) * helixRadius,
          y,
          Math.sin(angle) * helixRadius
        );
        
        // Создаем сферы для второй цепи (смещение на 180 градусов)
        const sphere2Geometry = new THREE.SphereGeometry(nucleotideSize, 12, 12);
        const sphere2 = new THREE.Mesh(
          sphere2Geometry, 
          i % 2 === 0 ? secondaryMaterial : primaryMaterial
        );
        
        // Позиция на второй спирали
        sphere2.position.set(
          Math.cos(angle + Math.PI) * helixRadius,
          y,
          Math.sin(angle + Math.PI) * helixRadius
        );
        
        // Добавляем сферы в группу ДНК
        dnaGroup.add(sphere1);
        dnaGroup.add(sphere2);
        
        segments.push(sphere1, sphere2);
        
        // Создаем соединитель между спиралями (перекладина ДНК)
        const connectorGeometry = new THREE.CylinderGeometry(0.08, 0.08, helixRadius * 2, 6);
        const connector = new THREE.Mesh(connectorGeometry, connectorMaterial);
        
        // Размещаем и ориентируем соединитель
        const connectorDirection = new THREE.Vector3().subVectors(sphere2.position, sphere1.position);
        const center = new THREE.Vector3().addVectors(
          sphere1.position, 
          connectorDirection.clone().multiplyScalar(0.5)
        );
        
        connector.position.copy(center);
        
        // Вычисляем правильную ориентацию для соединителя
        const axis = new THREE.Vector3(0, 1, 0);
        connector.quaternion.setFromUnitVectors(
          axis, 
          connectorDirection.clone().normalize()
        );
        
        dnaGroup.add(connector);
        connectors.push(connector);
        
        // Добавляем линию между последовательными основаниями на каждой спирали
        if (i > 0) {
          // Для первой спирали
          const backboneMaterial1 = new THREE.MeshBasicMaterial({ 
            color: primaryColor, 
            transparent: true, 
            opacity: 0.5 
          });
          
          const backboneGeometry1 = new THREE.CylinderGeometry(backboneSize, backboneSize, 1, 6);
          const backbone1 = new THREE.Mesh(backboneGeometry1, backboneMaterial1);
          
          const prev1 = segments[segments.length - 4]; // Предыдущая сфера на первой спирали
          const backbone1Direction = new THREE.Vector3().subVectors(
            sphere1.position, 
            prev1.position
          );
          
          const backbone1Center = new THREE.Vector3().addVectors(
            prev1.position, 
            backbone1Direction.clone().multiplyScalar(0.5)
          );
          
          backbone1.position.copy(backbone1Center);
          backbone1.scale.y = backbone1Direction.length() * 0.9;
          
          const backbone1Axis = new THREE.Vector3(0, 1, 0);
          backbone1.quaternion.setFromUnitVectors(
            backbone1Axis, 
            backbone1Direction.clone().normalize()
          );
          
          dnaGroup.add(backbone1);
          
          // Для второй спирали
          const backboneMaterial2 = new THREE.MeshBasicMaterial({ 
            color: secondaryColor, 
            transparent: true, 
            opacity: 0.5 
          });
          
          const backboneGeometry2 = new THREE.CylinderGeometry(backboneSize, backboneSize, 1, 6);
          const backbone2 = new THREE.Mesh(backboneGeometry2, backboneMaterial2);
          
          const prev2 = segments[segments.length - 3]; // Предыдущая сфера на второй спирали
          const backbone2Direction = new THREE.Vector3().subVectors(
            sphere2.position, 
            prev2.position
          );
          
          const backbone2Center = new THREE.Vector3().addVectors(
            prev2.position, 
            backbone2Direction.clone().multiplyScalar(0.5)
          );
          
          backbone2.position.copy(backbone2Center);
          backbone2.scale.y = backbone2Direction.length() * 0.9;
          
          const backbone2Axis = new THREE.Vector3(0, 1, 0);
          backbone2.quaternion.setFromUnitVectors(
            backbone2Axis, 
            backbone2Direction.clone().normalize()
          );
          
          dnaGroup.add(backbone2);
        }
      }
      
      return { segments, connectors };
    };

    // Создаем ДНК
    const dna = createDna();
    
    // Добавляем немного случайных частиц вокруг ДНК для эффекта
    const addParticles = () => {
      const particleCount = isMobile ? 30 : 80; // Меньше частиц для мобильных
      const particles = [];
      
      for (let i = 0; i < particleCount; i++) {
        // Создаем частицы в форме маленьких сфер
        // Уменьшаем размер частиц для мобильных устройств
        const size = isMobile ? 
          (Math.random() * 0.15 + 0.05) : // Меньший размер для мобильных
          (Math.random() * 0.15 + 0.05); // Размер для десктопа
        
        const geometry = new THREE.SphereGeometry(size, 6, 6);
        
        // Случайно выбираем цвет
        const material = new THREE.MeshBasicMaterial({ 
          color: Math.random() > 0.5 ? primaryColor : secondaryColor, 
          transparent: true, 
          opacity: Math.random() * 0.5 + 0.2
        });
        
        const particle = new THREE.Mesh(geometry, material);
        
        // Размещаем частицы случайно вокруг ДНК
        // Размещаем ближе к центру на мобильных
        const angle = Math.random() * Math.PI * 2;
        const radius = isMobile ? 
          (Math.random() * 5 + 3) : // Меньший радиус для мобильных
          (Math.random() * 10 + 6); // Радиус для десктопа
          
        const height = (Math.random() - 0.5) * (isMobile ? 8 : 20);
        
        particle.position.set(
          Math.cos(angle) * radius,
          height,
          Math.sin(angle) * radius
        );
        
        // Добавляем случайную скорость движения для каждой частицы
        const speedMultiplier = isMobile ? 0.02 : 0.02;
        
        particle.userData = {
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * speedMultiplier,
            (Math.random() - 0.5) * speedMultiplier,
            (Math.random() - 0.5) * speedMultiplier
          ),
          originalPosition: particle.position.clone(),
          maxDistance: Math.random() * 1.5 + 0.5
        };
        
        scene.add(particle);
        particles.push(particle);
      }
      
      return particles;
    };
    
    const particles = addParticles();
    
    // Функция для обновления позиций частиц
    const updateParticles = () => {
      particles.forEach(particle => {
        // Получаем данные о скорости и максимальном расстоянии
        const { velocity, originalPosition, maxDistance } = particle.userData;
        
        // Обновляем позицию
        particle.position.add(velocity);
        
        // Вычисляем расстояние от исходной позиции
        const distance = particle.position.distanceTo(originalPosition);
        
        // Если частица слишком далеко улетела, меняем направление движения
        if (distance > maxDistance) {
          velocity.negate();
        }
      });
    };

    // Функция для вращения ДНК
    const rotateDna = () => {
      dnaGroup.rotation.y += isMobile ? 0.005 : 0.005;
    };

    // Основная функция анимации
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      updateParticles();
      rotateDna();
      renderer.render(scene, camera);
      
      return animationId;
    };

    // Запускаем анимацию
    const animationId = animate();

    // Обработчик изменения размера окна
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

    // Очистка при размонтировании компонента
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', checkMobile);
      cancelAnimationFrame(animationId);
      
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      
      // Освобождаем память от геометрий и материалов
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
    </div>
  );
}
