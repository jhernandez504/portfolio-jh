'use client';

import * as THREE from 'three';
import { useEffect, useRef } from 'react';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { AnimationMixer, LoopRepeat } from 'three';

export default function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mixer: AnimationMixer;
    const clock = new THREE.Clock();
    let tesseract: THREE.Object3D;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0); // transparent background

    containerRef.current?.appendChild(renderer.domElement);

    // Lighting
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(-3, 2, 1); // front-left
    scene.add(directionalLight);

    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const fillLight = new THREE.DirectionalLight(0xffffff, 1);
    fillLight.position.set(1, -1, -2);
    scene.add(fillLight);

    // Load GLTF model
    const loader = new GLTFLoader();
    loader.load('/models/scene.gltf', (gltf) => {
  tesseract = gltf.scene;
  tesseract.scale.set(1.25, 1.25, 1.25);
  scene.add(tesseract);

  tesseract.traverse((child) => {
    if ((child as THREE.Mesh).isMesh) {
      const mesh = child as THREE.Mesh;
      const material = mesh.material as THREE.MeshStandardMaterial;
      console.log(child)

      // Check if this is the inner cube object
      if (mesh.name === 'Cube_01') {
        // 🎯 THIS is the real inner cube object
        material.color.set('#00FFFF'); // Cyan
        material.metalness = 0.9;
        material.roughness = 0.1;
      } else {
        // Outer tesseract stuff
        material.color.set('#E5E4E2'); // Silver
        material.metalness = 0.9;
        material.roughness = 0.1;
      }

      material.needsUpdate = true;
    }
  });

  if (gltf.animations && gltf.animations.length > 0) {
    mixer = new THREE.AnimationMixer(tesseract);
    gltf.animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.setLoop(THREE.LoopRepeat, Infinity);
      action.play();
    });
  }
});

    

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (mixer) mixer.update(delta);

      // Full rotation of the tesseract
      if (tesseract) {
        tesseract.rotation.y += 0.005;
        tesseract.rotation.x += 0.0025;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      renderer.dispose();
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(to top right, #333333, #000000)', // Dark gray gradient
      }}
    />
  );
}

