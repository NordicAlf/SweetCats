import { useThree } from '@react-three/fiber';
import React from 'react';
import { Mesh, MeshBasicMaterial, SphereGeometry, TextureLoader } from 'three';

const Skybox: React.FC = () => {
  const { scene } = useThree();
  const texture = new TextureLoader().load(
    '/assets/textures/epic_sunset_skybox.jpg'
  );
  // const color = new Color('rgba(150,150,150, 0.8)');

  // color.

  const geometry = new SphereGeometry(500, 60, 40).scale(-1, 1, 1);
  const material = new MeshBasicMaterial({ map: texture });
  const mesh = new Mesh(geometry, material);

  mesh.position.set(0, 70, 0);
  mesh.rotation.set(0, Math.PI, 0);

  scene.add(mesh);

  return null;
};

export default Skybox;
