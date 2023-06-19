import React from 'react';
import Cube from '../../../Physics/Cube/Cube';

const Wall1: React.FC = () => {
  return (
    <group>
      <Cube position={[0, 20, -38.6]} scale={[36.5, 20, 0.5]} />

      <Cube position={[0, 1, -37.5]} scale={[36.5, 2, 1]} />
      <Cube position={[0, 26, -37.5]} scale={[36.5, 1.5, 1]} />
      <Cube position={[0, 38.5, -37.5]} scale={[36.5, 2, 1]} />
      <Cube position={[35.5, 20, -37.5]} scale={[2, 20, 1]} />
      <Cube position={[12.2, 20, -37.5]} scale={[3, 20, 1]} />
      <Cube position={[-12.2, 20, -37.5]} scale={[3, 20, 1]} />
      <Cube position={[-36.55, 20, -37.5]} scale={[3, 20, 1]} />
    </group>
  );
};

export default Wall1;
