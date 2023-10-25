import { useTexture } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import React from 'react';
import { Color, Mesh, MeshBasicMaterial, SphereGeometry } from 'three';
import sunset from '~/assets/textures/epic_sunset_skybox.jpg?url';

const Skybox: React.FC = () => {
  const { scene } = useThree();
  const texture = useTexture(sunset);
  const color = new Color('#d0d0d0');

  const geometry = new SphereGeometry(500, 60, 40).scale(-1, 1, 1);
  const material = new MeshBasicMaterial({ map: texture, color: color });
  const mesh = new Mesh(geometry, material);

  mesh.position.set(0, 70, 0);
  mesh.rotation.set(0, Math.PI, 0);

  scene.add(mesh);

  return null;
};

export default Skybox;
