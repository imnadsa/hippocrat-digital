"use client"

import { useEffect, useRef, useState } from "react"
import * as THREE from 'three'

// --- 1. ДАННЫЕ О ВАШИХ УСЛУГАХ ---
const servicesDataRaw = [
  { id: 1, title: "Создание сайтов", description: "Разрабатываем сайты и веб-приложения, которые решают задачи вашего бизнеса и привлекают клиентов.", shape: 'Box' },
  { id: 2, title: "SEO оптимизация", description: "Выводим ваш сайт в топ поисковой выдачи, увеличивая органический трафик и количество лидов.", shape: 'Tetrahedron' },
  { id: 3, title: "Брендинг", description: "Создаем уникальный и запоминающийся образ компании, который вызывает доверие у вашей аудитории.", shape: 'Icosahedron' },
  { id: 4, title: "Аналитика и стратегия", description: "Анализируем данные и разрабатываем стратегию для достижения максимальных результатов.", shape: 'Cluster' },
  { id: 5, title: "Рекламные кампании", description: "Настраиваем и ведем эффективные рекламные кампании, которые приносят целевые заявки.", shape: 'Torus' }
];

interface Service {
  id: number;
  title: string;
  description: string;
  shape: string;
  object?: THREE.Object3D;
}

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
    
    const serviceNodes: THREE.Object3D[] = [];
    const createServiceNodes = () => {
      const orbitRadius = isMobile ? 10 : 14;
      const nodeSize = isMobile ? 0.8 : 1;
      servicesData.forEach((service, index) => {
        const angle = (index / servicesData.length) * Math.PI * 2;
        let nodeObject: THREE.Object3D;

        // *** ИСПРАВЛЕНИЕ: Логика создания объекта полностью перенесена внутрь switch ***
        // Это гарантирует, что для каждого случая объект будет создан корректно.
        switch(service.shape) {
          case 'Box': {
            const geometry = new THREE.BoxGeometry(nodeSize, nodeSize, nodeSize);
            nodeObject = new THREE.LineSegments(
              new THREE.EdgesGeometry(geometry),
              new THREE.LineBasicMaterial({ color: primaryColor, transparent: true, opacity: 0.8 })
            );
            break;
          }
          case 'Tetrahedron': {
            const geometry = new THREE.TetrahedronGeometry(nodeSize);
            nodeObject = new THREE.LineSegments(
              new THREE.EdgesGeometry(geometry),
              new THREE.LineBasicMaterial({ color: primaryColor, transparent: true, opacity: 0.8 })
            );
            break;
          }
          case 'Icosahedron': {
            const geometry = new THREE.IcosahedronGeometry(nodeSize);
            nodeObject = new THREE.LineSegments(
              new THREE.EdgesGeometry(geometry),
              new THREE.LineBasicMaterial({ color: primaryColor, transparent: true, opacity: 0.8 })
            );
            break;
          }
          case 'Torus': {
            const geometry = new THREE.TorusGeometry(nodeSize * 0.8, nodeSize * 0.3, 16, 100);
            nodeObject = new THREE.LineSegments(
              new THREE.EdgesGeometry(geometry),
              new THREE.LineBasicMaterial({ color: primaryColor, transparent: true, opacity: 0.8 })
            );
            break;
          }
          case 'Cluster': {
            const clusterGroup = new THREE.Group();
            for(let i=0; i<5; i++) {
                const sphereGeo = new THREE.SphereGeometry(nodeSize * 0.3, 8, 8);
                const sphereMesh = new THREE.Mesh(sphereGeo, serviceNodeMaterial.clone());
                sphereMesh.position.set((Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5, (Math.random() - 0.5) * 1.5);
                clusterGroup.add(sphereMesh);
            }
            nodeObject = clusterGroup;
            break;
          }
          default: { // Запасной вариант на случай неизвестной фигуры
            const geometry = new THREE.SphereGeometry(nodeSize);
            nodeObject = new THREE.LineSegments(
                new THREE.EdgesGeometry(geometry),
                new THREE.LineBasicMaterial({ color: primaryColor, transparent: true, opacity: 0.8 })
            );
            break;
          }
        }

        service.object = nodeObject;
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

    const createDna = () => { /* Ваш оригинальный код для создания ДНК */ }; // Убедитесь, что этот код на месте
    createDna();
    createServiceNodes();
    
    // ... остальной код без изменений ...
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
        const offsetX = 20; const offsetY = -20;
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
      if(containerRef.current && renderer.domElement) containerRef.current.removeChild(renderer.domElement);
      scene.traverse(object => {
        if (object instanceof THREE.Mesh || object instanceof THREE.LineSegments) {
          object.geometry.dispose();
          if(object.material instanceof THREE.Material) object.material.dispose();
          else if (Array.isArray(object.material)) object.material.forEach(material => material.dispose());
        }
      });
      renderer.dispose();
    };
  }, [isMobile]);

  return (
    <div className="w-full h-full relative overflow-hidden pointer-events-none">
      <div ref={containerRef} className="w-full h-full pointer-events-auto" style={{ background: "transparent" }} />
      <div ref={tooltipRef} className={`fixed top-0 left-0 z-10 p-4 rounded-xl w-[280px] pointer-events-none transition-opacity duration-300 ease-in-out border ${activeService ? 'opacity-100 visible' : 'opacity-0 invisible'}`} style={{ backgroundColor: 'hsla(var(--secondary), 0.5)', borderColor: 'hsla(var(--border), 0.5)', backdropFilter: 'blur(8px)', WebkitBackdropFilter: 'blur(8px)'}}>
        {activeService && (
          <>
            <h3 className="text-lg font-semibold text-teal-400 mb-2">{activeService.title}</h3>
            <p className="text-sm leading-relaxed text-foreground/80">{activeService.description}</p>
          </>
        )}
      </div>
    </div>
  );
}
