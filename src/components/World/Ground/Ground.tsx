import { CuboidCollider, RigidBody } from '@react-three/rapier';
import React from 'react';
interface GroundInterface {
  size: {
    x: number;
    z: number;
  };
}

export const Ground: React.FC<GroundInterface> = ({ size }) => {
  return (
    <RigidBody type={'fixed'} colliders={false}>
      <CuboidCollider args={[size.x, 2, size.z]} position={[0, -2, 0]} />
    </RigidBody>
  );
};
