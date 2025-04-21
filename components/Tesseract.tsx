// components/Tesseract.tsx
'use client';

import { useGLTF } from '@react-three/drei';
import { useEffect } from 'react';
import { Mesh, MeshStandardMaterial } from 'three';
import { useFrame } from '@react-three/fiber';

export default function TesseractModel(props) {
  const { scene } = useGLTF('/models/scene.gltf');

  useEffect(() => {
    scene.traverse((child) => {
      if ((child as Mesh).isMesh) {
        const mesh = child as Mesh;
        const material = mesh.material as MeshStandardMaterial;

        material.color.set(0x00ccff);
        material.metalness = 0.5;
        material.roughness = 0.3;
        material.needsUpdate = true;
      }
    });
  }, [scene]);

  // Animation: Smooth continuous rotation
  useFrame(({ clock }) => {
    if (scene) {
      const deltaTime = clock.getDelta(); // Time in seconds since the last frame

      // Rotate smoothly around the Y-axis and X-axis
      scene.rotation.y += 0.1 * deltaTime; // Adjust speed of rotation here
      scene.rotation.x += 0.05 * deltaTime; // Optional rotation on the X-axis

      // Ensure seamless continuous rotation by normalizing rotation
      if (scene.rotation.y >= Math.PI * 2) {
        scene.rotation.y -= Math.PI * 2; // Reset to zero after a full 360-degree rotation
      }
      if (scene.rotation.x >= Math.PI * 2) {
        scene.rotation.x -= Math.PI * 2; // Optional, to make it rotate in a circular manner
      }
    }
  });

  return <primitive object={scene} {...props} />;
}
