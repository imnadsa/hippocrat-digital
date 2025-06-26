"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from 'three';

interface ServiceNode {
  id: string;
  name: string;
  description: string;
  metrics: string[];
  color: THREE.Color;
  position: THREE.Vector3;
  icon: string;
  connections: string[];
}

export default function MarketingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [selectedNode, setSelectedNode] = useState<string | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const raycasterRef = useRef<THREE.Raycaster>(new THREE.Raycaster());
  const mouseRef = useRef<THREE.Vector2>(new THREE.Vector2());
  const nodesRef = useRef<Map<string, THREE.Mesh>>(new Map());

  // Определяем узлы услуг
  const services: ServiceNode[] = [
    {
      id: 'clinic',
      name: 'Ваша клиника',
      description: 'Центр цифровой трансформации',
      metrics: ['Комплексная автоматизация', 'Рост прибыли +250%'],
      color: new THREE.Color(0xffffff),
      position: new THREE.Vector3(0, 0, 0),
      icon: '🏥',
      connections: ['chatbot', 'crm', 'analytics', 'marketing', 'telemedicine', 'ai']
    },
    {
      id: 'chatbot',
      name: 'AI Чат-бот 24/7',
      description: 'Автоматический ассистент для пациентов',
      metrics: ['+150% скорость ответа', '-80% нагрузка на персонал'],
      color: new THREE.Color(0x2dd4bf),
      position: new THREE.Vector3(5, 3, 0),
      icon: '🤖',
      connections: ['clinic', 'crm']
    },
    {
      id: 'crm',
      name: 'CRM система',
      description: 'Управление пациентами и записями',
      metrics: ['+200% эффективность', '0% потерянных записей'],
      color: new THREE.Color(0x6366f1),
      position: new THREE.Vector3(5, -3, 0),
      icon: '📊',
      connections: ['clinic', 'chatbot', 'analytics']
    },
    {
      id: 'analytics',
      name: 'Аналитика в реальном времени',
      description: 'Дашборды и отчеты для руководства',
      metrics: ['100% прозрачность', 'Решения на данных'],
      color: new THREE.Color(0x2dd4bf),
      position: new THREE.Vector3(0, -5, 0),
      icon: '📈',
      connections: ['clinic', 'crm', 'marketing']
    },
    {
      id: 'marketing',
      name: 'Digital маркетинг',
      description: 'Привлечение пациентов онлайн',
      metrics: ['ROI 300%+', '-50% стоимость привлечения'],
      color: new THREE.Color(0x6366f1),
      position: new THREE.Vector3(-5, -3, 0),
      icon: '🎯',
      connections: ['clinic', 'analytics']
    },
    {
      id: 'telemedicine',
      name: 'Телемедицина',
      description: 'Онлайн консультации с врачами',
      metrics: ['+500% охват пациентов', 'Новый источник дохода'],
      color: new THREE.Color(0x2dd4bf),
      position: new THREE.Vector3(-5, 3, 0),
      icon: '💻',
      connections: ['clinic', 'ai']
    },
    {
      id: 'ai',
      name: 'AI диагностика',
      description: 'Помощь врачам в постановке диагнозов',
      metrics: ['+40% точность', '-30% время диагностики'],
      color: new THREE.Color(0x6366f1),
      position: new THREE.Vector3(0, 5, 0),
      icon: '🧠',
      connections: ['clinic', 'telemedicine']
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
      50,
      width / height,
      0.1,
      1000
    );
    camera.position.set(0, 0, isMobile ? 25 : 20);
    camera.lookAt(0, 0, 0);

    // Настраиваем рендерер
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Освещение
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    // Группа для всего графа
    const graphGroup = new THREE.Group();
    scene.add(graphGroup);

    // Создаем фоновую сетку
    const createGrid = () => {
      const gridHelper = new THREE.GridHelper(30, 30, 0x1e293b, 0x1e293b);
      gridHelper.rotation.x = Math.PI / 2;
      gridHelper.position.z = -2;
      graphGroup.add(gridHelper);
    };
    createGrid();

    // Создаем линии соединений
    const connections: THREE.Line[] = [];
    const createConnections = () => {
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0x2dd4bf,
        opacity: 0.3,
        transparent: true
      });

      services.forEach(service => {
        service.connections.forEach(targetId => {
          const target = services.find(s => s.id === targetId);
          if (target && service.id < targetId) { // Избегаем дублирования линий
            const points = [];
            points.push(service.position);
            points.push(target.position);
            
            const geometry = new THREE.BufferGeometry().setFromPoints(points);
            const line = new THREE.Line(geometry, lineMaterial);
            line.userData = { from: service.id, to: targetId };
            connections.push(line);
            graphGroup.add(line);
          }
        });
      });
    };

    // Создаем узлы
    const createNodes = () => {
      services.forEach(service => {
        // Группа для узла
        const nodeGroup = new THREE.Group();
        nodeGroup.position.copy(service.position);

        // Основной узел
        const nodeGeometry = new THREE.SphereGeometry(
          service.id === 'clinic' ? 1.5 : 1,
          32,
          32
        );
        
        const nodeMaterial = new THREE.MeshPhongMaterial({
          color: service.color,
          emissive: service.color,
          emissiveIntensity: service.id === 'clinic' ? 0.5 : 0.3,
          transparent: true,
          opacity: 0.9
        });

        const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
        node.userData = service;
        nodesRef.current.set(service.id, node);
        nodeGroup.add(node);

        // Внешнее кольцо для узла
        const ringGeometry = new THREE.TorusGeometry(
          service.id === 'clinic' ? 2 : 1.3,
          0.1,
          16,
          100
        );
        const ringMaterial = new THREE.MeshBasicMaterial({
          color: service.color,
          transparent: true,
          opacity: 0.5
        });
        const ring = new THREE.Mesh(ringGeometry, ringMaterial);
        nodeGroup.add(ring);

        // Сохраняем ссылку на кольцо
        node.userData.ring = ring;

        // Орбитальные частицы для центральной клиники
        if (service.id === 'clinic') {
          const createOrbitParticles = () => {
            for (let i = 0; i < 20; i++) {
              const particleGeometry = new THREE.SphereGeometry(0.05, 8, 8);
              const particleMaterial = new THREE.MeshBasicMaterial({
                color: Math.random() > 0.5 ? 0x2dd4bf : 0x6366f1,
                transparent: true,
                opacity: 0.8
              });
              const particle = new THREE.Mesh(particleGeometry, particleMaterial);
              
              const angle = (i / 20) * Math.PI * 2;
              const radius = 2.5;
              particle.position.x = Math.cos(angle) * radius;
              particle.position.y = Math.sin(angle) * radius;
              particle.userData = { angle, radius, speed: 0.5 + Math.random() * 0.5 };
              
              nodeGroup.add(particle);
            }
          };
          createOrbitParticles();
        }

        graphGroup.add(nodeGroup);
      });
    };

    createConnections();
    createNodes();

    // Создаем плавающие частицы данных
    const dataParticles: { 
      mesh: THREE.Mesh; 
      path: THREE.Vector3[]; 
      progress: number;
      speed: number;
    }[] = [];

    const createDataParticle = () => {
      const particleGeometry = new THREE.OctahedronGeometry(0.15, 0);
      const particleMaterial = new THREE.MeshPhongMaterial({
        color: Math.random() > 0.5 ? 0x2dd4bf : 0x6366f1,
        emissive: Math.random() > 0.5 ? 0x2dd4bf : 0x6366f1,
        emissiveIntensity: 0.8
      });
      const particle = new THREE.Mesh(particleGeometry, particleMaterial);

      // Выбираем случайное соединение
      const connection = connections[Math.floor(Math.random() * connections.length)];
      const fromId = connection.userData.from;
      const toId = connection.userData.to;
      const fromNode = services.find(s => s.id === fromId);
      const toNode = services.find(s => s.id === toId);

      if (fromNode && toNode) {
        dataParticles.push({
          mesh: particle,
          path: [fromNode.position, toNode.position],
          progress: 0,
          speed: 0.005 + Math.random() * 0.005
        });
        graphGroup.add(particle);
      }

      return particle;
    };

    // Создаем начальные частицы
    const particleInterval = setInterval(() => {
      if (dataParticles.length < (isMobile ? 10 : 20)) {
        createDataParticle();
      }
    }, 500);

    // Обработчики мыши
    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseRef.current.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouseRef.current.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      // Проверяем пересечения с узлами
      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(Array.from(nodesRef.current.values()));
      
      if (intersects.length > 0) {
        const node = intersects[0].object.userData as ServiceNode;
        setHoveredNode(node.id);
        container.style.cursor = 'pointer';
      } else {
        setHoveredNode(null);
        container.style.cursor = 'default';
      }
    };

    const handleClick = () => {
      if (hoveredNode) {
        setSelectedNode(hoveredNode);
      } else {
        setSelectedNode(null);
      }
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('click', handleClick);

    // Анимация
    const clock = new THREE.Clock();
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      
      // Медленное вращение всего графа
      graphGroup.rotation.z = Math.sin(elapsedTime * 0.1) * 0.05;
      
      // Анимация узлов
      nodesRef.current.forEach((node, id) => {
        const service = node.userData as ServiceNode;
        const ring = node.userData.ring as THREE.Mesh;
        
        // Пульсация узлов
        const scale = 1 + Math.sin(elapsedTime * 2) * 0.05;
        if (id === 'clinic') {
          node.scale.setScalar(scale * 1.2);
        } else {
          node.scale.setScalar(scale);
        }
        
        // Вращение колец
        ring.rotation.z = elapsedTime * 0.5;
        
        // Подсветка при наведении
        if (hoveredNode === id) {
          node.scale.setScalar(1.3);
          if (node.material instanceof THREE.MeshPhongMaterial) {
            node.material.emissiveIntensity = 0.8;
          }
          ring.scale.setScalar(1.2);
        } else {
          if (node.material instanceof THREE.MeshPhongMaterial) {
            node.material.emissiveIntensity = id === 'clinic' ? 0.5 : 0.3;
          }
          ring.scale.setScalar(1);
        }

        // Анимация орбитальных частиц для клиники
        if (id === 'clinic') {
          node.parent?.children.forEach(child => {
            if (child.userData.angle !== undefined) {
              const { angle, radius, speed } = child.userData;
              const newAngle = angle + elapsedTime * speed;
              child.position.x = Math.cos(newAngle) * radius;
              child.position.y = Math.sin(newAngle) * radius;
              child.position.z = Math.sin(newAngle * 2) * 0.5;
            }
          });
        }
      });

      // Анимация частиц данных
      dataParticles.forEach((particle, index) => {
        particle.progress += particle.speed;
        
        if (particle.progress <= 1) {
          // Интерполяция позиции
          const position = new THREE.Vector3().lerpVectors(
            particle.path[0],
            particle.path[1],
            particle.progress
          );
          particle.mesh.position.copy(position);
          particle.mesh.rotation.x += 0.1;
          particle.mesh.rotation.y += 0.1;
        } else {
          // Перезапуск частицы
          graphGroup.remove(particle.mesh);
          dataParticles.splice(index, 1);
        }
      });

      // Подсветка соединений при наведении
      connections.forEach(line => {
        const { from, to } = line.userData;
        if (hoveredNode && (from === hoveredNode || to === hoveredNode)) {
          if (line.material instanceof THREE.LineBasicMaterial) {
            line.material.opacity = 0.8;
            line.material.color = new THREE.Color(0x2dd4bf);
          }
        } else {
          if (line.material instanceof THREE.LineBasicMaterial) {
            line.material.opacity = 0.3;
            line.material.color = new THREE.Color(0x2dd4bf);
          }
        }
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
      clearInterval(particleInterval);
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
  }, [isMobile, hoveredNode]);

  return (
    <div className="w-full h-full relative overflow-hidden">
      <div 
        ref={containerRef} 
        className="w-full h-full" 
        style={{ background: "transparent" }}
      />
      
      {/* Информационная панель при наведении */}
      {hoveredNode && (
        <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md border border-teal-500/30 rounded-lg p-4 max-w-xs animate-fadeIn">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">{services.find(s => s.id === hoveredNode)?.icon}</span>
            <h3 className="text-teal-400 font-bold text-lg">
              {services.find(s => s.id === hoveredNode)?.name}
            </h3>
          </div>
          <p className="text-slate-300 text-sm mb-3">
            {services.find(s => s.id === hoveredNode)?.description}
          </p>
          <div className="space-y-1">
            {services.find(s => s.id === hoveredNode)?.metrics.map((metric, idx) => (
              <div key={idx} className="text-sm">
                <span className="text-teal-400 font-semibold">✓</span>
                <span className="text-slate-300 ml-1">{metric}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      
      {/* Подсказка внизу */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
        <p className="text-slate-300 text-sm bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3">
          <span className="inline-block w-3 h-3 bg-white rounded-full"></span>
          <span className="font-semibold">Ваша клиника</span>
          <span className="text-slate-400 mx-2">→</span>
          <span className="inline-flex gap-1">
            <span className="inline-block w-2 h-2 bg-teal-400 rounded-full"></span>
            <span className="inline-block w-2 h-2 bg-indigo-400 rounded-full"></span>
          </span>
          <span>Digital решения</span>
        </p>
      </div>
    </div>
  );
}
