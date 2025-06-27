"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from 'three'

// --- 1. ДАННЫЕ О ВАШИХ УСЛУГАХ ---
const servicesDataRaw = [
  {
    id: 1,
    title: "Создание сайтов",
    description: "Разрабатываем сайты и веб-приложения, которые решают задачи вашего бизнеса и привлекают клиентов.",
    shape: 'Box'
  },
  {
    id: 2,
    title: "SEO оптимизация",
    description: "Выводим ваш сайт в топ поисковой выдачи, увеличивая органический трафик и количество лидов.",
    shape: 'Tetrahedron'
  },
  {
    id: 3,
    title: "Брендинг",
    description: "Создаем уникальный и запоминающийся образ компании, который вызывает доверие у вашей аудитории.",
    shape: 'Icosahedron'
  },
  {
    id: 4,
    title: "Аналитика и стратегия",
    description: "Анализируем данные и разрабатываем стратегию для достижения максимальных результатов.",
    shape: 'Cluster'
  },
  {
    id: 5,
    title: "Рекламные кампании",
    description: "Настраиваем и ведем эффективные рекламные кампании, которые приносят целевые заявки.",
    shape: 'Torus'
  }
];

// Типизация для удобства работы с данными и 3D-объектами
interface Service {
  id: number;
  title: string;
  description: string;
  shape: string;
  object?: THREE.Object3D; // Связь данных с 3D объектом
}

// *** ИСПРАВЛЕНИЕ ОШИБКИ ТИПОВ ***
// Явно указываем, что наш массив соответствует интерфейсу Service
const servicesData: Service[] = servicesDataRaw;


export default function MarketingAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  
  const [activeService, setActiveService] = useState<Service | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);

    if (!containerRef.current) return;

    const container = containerRef.current;
    const { width, height } = container.getBoundingClientRect();
    
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = isMobile ? 18 : 25;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const primaryColor = new THREE.Color(0x2dd4bf);
    const secondaryColor = new THREE.Color(0x6366f1);
    
    const primaryMaterial = new THREE.MeshBasicMaterial({ color: primaryColor, transparent: true, opacity: 0.8 });
    const secondaryMaterial = new THREE.MeshBasicMaterial({ color: secondaryColor, transparent: true, opacity: 0.8 });
    const connectorMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.3 });
    const serviceNodeMaterial = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        metalness: 0.1,
        roughness: 0.2,
        emissive: primaryColor,
        emissiveIntensity: 0.5
    });

    const dnaGroup = new THREE.Group();
    scene.add(dnaGroup);
    
    // Функция создания узлов-услуг
    const serviceNodes: THREE.Object3D[] = [];
    const createServiceNodes = () => {
      const orbitRadius = isMobile ? 10 : 14;
      const nodeSize = isMobile ? 0.8 : 1;
      servicesData.forEach((service, index) => {
        let geometry: THREE.BufferGeometry;
        const angle = (index / servicesData.length) * Math.PI * 2;
        switch(service.shape) {
          case 'Box': geometry = new THREE.BoxGeometry(nodeSize, nodeSize, nodeSize); break;
          case 'Tetrahedron': geometry = new THREE.TetrahedronGeometry(nodeSize); break;
          case 'Icosahedron': geometry = new THREE.IcosahedronGeometry(nodeSize); break;
          case 'Torus': geometry = new THREE.TorusGeometry(nodeSize * 0.8, nodeSize * 0.3, 16, 100); break;
          case 'Cluster': 
            const clusterGroup = new THREE.Group();
            for(let i=0; i<5; i++) {
                const sphereGeo = new THREE.SphereGeometry(nodeSize * 0.3, 8, 8);
                const sphereMesh = new THREE.Mesh(sphereGeo, serviceNodeMaterial.clone());
                sphereMesh.position.set((Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5);
                clusterGroup.add(sphereMesh);
            }
            service.object = clusterGroup;
            break;
          default: geometry = new THREE.SphereGeometry(nodeSize);
        }
        if (service.shape !== 'Cluster') {
            const wireframe = new THREE.LineSegments(
                new THREE.EdgesGeometry(geometry),
                new THREE.LineBasicMaterial({ color: primaryColor, transparent: true, opacity: 0.8 })
            );
            service.object = wireframe;
        }
        const nodeObject = service.object!;
        nodeObject.position.set(
          Math.cos(angle) * orbitRadius,
          (Math.random() - 0.5) * 8,
          Math.sin(angle) * orbitRadius
        );
        nodeObject.userData.serviceId = service.id;
        scene.add(nodeObject);
        serviceNodes.push(nodeObject);
      });
    };

    // --- Функция создания ДНК (ваш оригинальный код) ---
    const createDna = () => {
      const helixRadius = isMobile ? 6 : 5;
      const helixHeight = isMobile ? 15 : 18;
      const numBases = isMobile ? 25 : 30;
      const turns = 2.5;
      const nucleotideSize = isMobile ? 0.55 : 0.4;
      const backboneSize = isMobile ? 0.2 : 0.15;
      const segments = [];
      for (let i = 0; i < numBases; i++) {
        const ratio = i / numBases;
        const angle = ratio * Math.PI * 2 * turns;
        const y = (ratio - 0.5) * helixHeight;
        const sphere1Geometry = new THREE.SphereGeometry(nucleotideSize, 12, 12);
        const sphere1 = new THREE.Mesh(sphere1Geometry, i % 2 === 0 ? primaryMaterial : secondaryMaterial);
        sphere1.position.set(Math.cos(angle) * helixRadius, y, Math.sin(angle) * helixRadius);
        const sphere2Geometry = new THREE.SphereGeometry(nucleotideSize, 12, 12);
        const sphere2 = new THREE.Mesh(sphere2Geometry, i % 2 === 0 ? secondaryMaterial : primaryMaterial);
        sphere2.position.set(Math.cos(angle + Math.PI) * helixRadius, y, Math.sin(angle + Math.PI) * helixRadius);
        dnaGroup.add(sphere1);
        dnaGroup.add(sphere2);
        segments.push(sphere1, sphere2);
        const connectorGeometry = new THREE.CylinderGeometry(0.1, 0.1, helixRadius * 2, 6);
        const connector = new THREE.Mesh(connectorGeometry, connectorMaterial);
        const connectorDirection = new THREE.Vector3().subVectors(sphere2.position, sphere1.position);
        const center = new THREE.Vector3().addVectors(sphere1.position, connectorDirection.clone().multiplyScalar(0.5));
        connector.position.copy(center);
        const axis = new THREE.Vector3(0, 1, 0);
        connector.quaternion.setFromUnitVectors(axis, connectorDirection.clone().normalize());
        dnaGroup.add(connector);
        if (i > 0) {
          const backboneMaterial1 = new THREE.MeshBasicMaterial({ color: primaryColor, transparent: true, opacity: 0.5 });
          const backboneGeometry1 = new THREE.CylinderGeometry(backboneSize, backboneSize, 1, 6);
          const backbone1 = new THREE.Mesh(backboneGeometry1, backboneMaterial1);
          const prev1 = segments[segments.length - 4];
          const backbone1Direction = new THREE.Vector3().subVectors(sphere1.position, prev1.position);
          const backbone1Center = new THREE.Vector3().addVectors(prev1.position, backbone1Direction.clone().multiplyScalar(0.5));
          backbone1.position.copy(backbone1Center);
          backbone1.scale.y = backbone1Direction.length() * 0.9;
          const backbone1Axis = new THREE.Vector3(0, 1, 0);
          backbone1.quaternion.setFromUnitVectors(backbone1Axis, backbone1Direction.clone().normalize());
          dnaGroup.add(backbone1);
          const backboneMaterial2 = new THREE.MeshBasicMaterial({ color: secondaryColor, transparent: true, opacity: 0.5 });
          const backboneGeometry2 = new THREE.CylinderGeometry(backboneSize, backboneSize, 1, 6);
          const backbone2 = new THREE.Mesh(backboneGeometry2, backboneMaterial2);
          const prev2 = segments[segments.length - 3];
          const backbone2Direction = new THREE.Vector3().subVectors(sphere2.position, prev2.position);
          const backbone2Center = new THREE.Vector3().addVectors(prev2.position, backbone2Direction.clone().multiplyScalar(0.5));
          backbone2.position.copy(backbone2Center);
          backbone2.scale.y = backbone2Direction.length() * 0.9;
          const backbone2Axis = new THREE.Vector3(0, 1, 0);
          backbone2.quaternion.setFromUnitVectors(backbone2Axis, backbone2Direction.clone().normalize());
          dnaGroup.add(backbone2);
        }
      }
    };

    createDna();
    createServiceNodes();
    
    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();
    let intersectedObject: THREE.Object3D | null = null;
    
    const onPointerMove = (event: PointerEvent) => {
        if (isMobile) return;
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(serviceNodes, true);
        if (intersects.length > 0) {
            let parentObject = intersects[0].object;
            while (parentObject.parent && !parentObject.userData.serviceId) parentObject = parentObject.parent;
            if (intersectedObject !== parentObject) {
                intersectedObject = parentObject;
                const service = servicesData.find(s => s.id === intersectedObject?.userData.serviceId);
                setActiveService(service || null);
            }
        } else {
            if (intersectedObject !== null) {
                intersectedObject = null;
                setActiveService(null);
            }
        }
    };
    
    const onPointerDown = (event: PointerEvent) => {
        if (!isMobile) return;
        const rect = renderer.domElement.getBoundingClientRect();
        mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        raycaster.setFromCamera(mouse, camera);
        const intersects = raycaster.intersectObjects(serviceNodes, true);
        if (intersects.length > 0) {
            let parentObject = intersects[0].object;
            while (parentObject.parent && !parentObject.userData.serviceId) parentObject = parentObject.parent;
            const service = servicesData.find(s => s.id === parentObject.userData.serviceId);
            setActiveService(current => (current?.id === service?.id ? null : service || null));
        } else {
            setActiveService(null);
        }
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', onPointerDown);

    const clock = new THREE.Clock();
    const animate = () => {
      const animationId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();
      dnaGroup.rotation.y += 0.002;
      serviceNodes.forEach((node, index) => {
        const angle = (index / servicesData.length) * Math.PI * 2 + elapsedTime * 0.1;
        const orbitRadius = isMobile ? 10 : 14;
        node.position.x = Math.cos(angle) * orbitRadius;
        node.position.z = Math.sin(angle) * orbitRadius;
        node.rotation.y += 0.005;
        node.rotation.x += 0.003;
        const targetScale = activeService?.id === node.userData.serviceId ? 1.5 : 1.0;
        node.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
      });
      
      if (activeService && activeService.object && tooltipRef.current) {
        const screenPosition = new THREE.Vector3();
        activeService.object.getWorldPosition(screenPosition);
        screenPosition.project(camera);
        const rect = renderer.domElement.getBoundingClientRect();
        const x = (screenPosition.x * 0.5 + 0.5) * rect.width + rect.left;
        const y = (screenPosition.y * -0.5 + 0.5) * rect.height + rect.top;
        const offsetX = 20; 
        const offsetY = -20;
        tooltipRef.current.style.transform = `translate(-50%, -100%) translate(${x + offsetX}px, ${y + offsetY}px)`;
      }
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
    };
    window.addEventListener('resize', handleResize);
    
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      if(containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      scene.traverse(object => {
        if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments) {
          object.geometry.dispose();
          if(object.material instanceof THREE.Material) {
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
    <div className="w-full h-full relative overflow-hidden pointer-events-none">
      <div
        ref={containerRef}
        className="w-full h-full pointer-events-auto"
        style={{ background: "transparent" }}
      />
      <div
        ref={tooltipRef}
        className={`
          fixed top-0 left-0 z-10 p-4 rounded-xl
          w-[280px] pointer-events-none
          transition-opacity duration-300 ease-in-out
          border
          ${activeService ? 'opacity-100 visible' : 'opacity-0 invisible'}
        `}
        style={{
          backgroundColor: 'hsla(var(--secondary), 0.5)',
          borderColor: 'hsla(var(--border), 0.5)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
        }}
      >
        {activeService && (
          <>
            <h3 className="text-lg font-semibold text-teal-400 mb-2">
              {activeService.title}
            </h3>
            <p className="text-sm leading-relaxed text-foreground/80">
              {activeService.description}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
