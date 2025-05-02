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
    
    // Настраиваем камеру
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
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
    const primaryMaterial = new THREE.MeshBasicMaterial({ color: primaryColor, transparent: true, opacity: 0.8 });
    const secondaryMaterial = new THREE.MeshBasicMaterial({ color: secondaryColor, transparent: true, opacity: 0.8 });
    const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 });

    // Создаем группу для сети нейронов
    const networkGroup = new THREE.Group();
    scene.add(networkGroup);

    // Создаем сеть нейронов вместо ДНК для лучшего соответствия стилю Hippocrat AI
    const createNeuralNetwork = () => {
      // Создаем узлы (нейроны)
      const nodes = [];
      const nodeCount = isMobile ? 40 : 70;
      const volumeSize = 15;

      // Создаем нейроны (узлы) случайно распределенные в пространстве
      for (let i = 0; i < nodeCount; i++) {
        const x = (Math.random() - 0.5) * volumeSize;
        const y = (Math.random() - 0.5) * volumeSize;
        const z = (Math.random() - 0.5) * volumeSize;
        
        const useSecondary = Math.random() > 0.7;
        const radius = Math.random() * 0.2 + 0.1;
        const detail = isMobile ? 4 : 8;
        
        const sphereGeometry = new THREE.SphereGeometry(radius, detail, detail);
        const sphere = new THREE.Mesh(
          sphereGeometry, 
          useSecondary ? secondaryMaterial : primaryMaterial
        );
        
        sphere.position.set(x, y, z);
        
        // Добавляем случайную скорость движения для каждого узла
        sphere.userData = {
          velocity: new THREE.Vector3(
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01,
            (Math.random() - 0.5) * 0.01
          ),
          // Сохраняем оригинальную позицию для расчета границ движения
          originalPosition: new THREE.Vector3(x, y, z)
        };
        
        networkGroup.add(sphere);
        nodes.push(sphere);
      }

      // Создаем связи между близкими узлами
      const maxDistance = 6;
      const lines = [];
      
      for (let i = 0; i < nodes.length; i++) {
        const node1 = nodes[i];
        
        for (let j = i + 1; j < nodes.length; j++) {
          const node2 = nodes[j];
          const distance = node1.position.distanceTo(node2.position);
          
          if (distance < maxDistance) {
            // Создаем линию между узлами
            const lineGeometry = new THREE.BufferGeometry().setFromPoints([
              node1.position,
              node2.position
            ]);
            
            const line = new THREE.Line(lineGeometry, lineMaterial);
            networkGroup.add(line);
            
            // Сохраняем ссылки на связанные узлы для обновления линий при анимации
            line.userData = {
              startNode: node1,
              endNode: node2,
              initialOpacity: 0.2 + (maxDistance - distance) / maxDistance * 0.3
            };
            
            lines.push(line);
          }
        }
      }
      
      return { nodes, lines };
    };

    const network = createNeuralNetwork();

    // Обновляем позиции нейронов и связей
    const updateNetwork = () => {
      const maxOffset = 1.5; // Максимальное смещение от оригинальной позиции
      
      // Обновляем узлы
      network.nodes.forEach(node => {
        // Получаем данные о скорости и исходной позиции
        const { velocity, originalPosition } = node.userData;
        
        // Обновляем позицию
        node.position.add(velocity);
        
        // Проверяем, не слишком ли далеко узел отошел от своего исходного положения
        const offsetVector = node.position.clone().sub(originalPosition);
        const offset = offsetVector.length();
        
        // Если узел слишком далеко, меняем направление его движения
        if (offset > maxOffset) {
          velocity.negate();
        }
      });
      
      // Обновляем линии
      network.lines.forEach(line => {
        const { startNode, endNode, initialOpacity } = line.userData;
        
        // Обновляем геометрию линии в соответствии с новыми позициями узлов
        const points = [startNode.position, endNode.position];
        
        // Заменяем геометрию линии на новую
        line.geometry.dispose();
        line.geometry = new THREE.BufferGeometry().setFromPoints(points);
        
        // Меняем прозрачность линии в зависимости от расстояния между узлами
        const distance = startNode.position.distanceTo(endNode.position);
        const maxDistance = 6;
        
        if (distance < maxDistance) {
          const opacity = initialOpacity * (1 - distance / maxDistance);
          line.material.opacity = opacity;
          line.visible = true;
        } else {
          line.visible = false;
        }
      });
    };

    // Поворот всей сети для эффекта 3D
    const rotateNetwork = () => {
      networkGroup.rotation.y += 0.001;
      networkGroup.rotation.x += 0.0005;
    };

    // Функция анимации
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      updateNetwork();
      rotateNetwork();
      renderer.render(scene, camera);
      
      // Сохраняем ID анимации для очистки
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
      network.lines.forEach(line => {
        line.geometry.dispose();
      });
      
      network.nodes.forEach(node => {
        node.geometry.dispose();
      });
      
      primaryMaterial.dispose();
      secondaryMaterial.dispose();
      lineMaterial.dispose();
      
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
      
      {/* Тонкая подсказка - адаптивный размер шрифта */}
      <div className="absolute bottom-2 right-2 text-[10px] md:text-xs text-teal-400/40 font-light tracking-wide">
        Интерактивная нейронная сеть
      </div>
    </div>
  );
}
