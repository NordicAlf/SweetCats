import { Plane } from '@react-three/drei';
import { CuboidCollider, RigidBody } from '@react-three/rapier';
import React from 'react';
import { RepeatWrapping, TextureLoader } from 'three';

interface GroundInterface {
  size: {
    x: number;
    z: number;
  };
}

export const Ground: React.FC<GroundInterface> = ({ size }) => {
  const grassUrl: string = '../../../assets/textures/grass.jpg';
  const texture = new TextureLoader().load(grassUrl);

  texture.wrapS = RepeatWrapping;
  texture.wrapT = RepeatWrapping;
  texture.repeat.set(240, 240);

  return (
    <RigidBody type={'fixed'} colliders={false}>
      <Plane
        receiveShadow
        args={[size.x, size.z]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          map={texture}
          map-repeat={[240, 240]}
          attach='material'
          color='green'
        />
      </Plane>
      <CuboidCollider args={[size.x, 2, size.z]} position={[0, -2, 0]} />
    </RigidBody>
  );
};
