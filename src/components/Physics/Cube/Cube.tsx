import { CuboidCollider, RigidBody } from '@react-three/rapier';
import React from 'react';
import { PhysicsInterface } from '../PhysicsInterface';

const Cube: React.FC<PhysicsInterface> = ({ position, scale }) => {
  return (
    <RigidBody
      position={position}
      scale={scale}
      colliders={'cuboid'}
      type={'fixed'}
    >
      <CuboidCollider args={[1, 1, 1]} />
    </RigidBody>
  );
};

export default Cube;
