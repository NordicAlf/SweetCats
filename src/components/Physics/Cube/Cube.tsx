import { CuboidCollider, RigidBody } from '@react-three/rapier';
import React from 'react';
import { PhysicsInterface } from '../PhysicsInterface';

const Cube: React.FC<PhysicsInterface> = (props) => {
  return (
    <RigidBody
      position={props.position}
      scale={props.scale}
      colliders={'cuboid'}
      type={'fixed'}
    >
      <CuboidCollider args={[1, 1, 1]} />
    </RigidBody>
  );
};

export default Cube;
