import React from 'react';
import Cube from '../../../Physics/Cube/Cube';

const Wall3: React.FC = () => {
  return (
    <group>
      <Cube position={[-38.5, 20, 9.5]} scale={[0.5, 20, 24]} />
      <Cube position={[-46.2, 20, -25]} scale={[0.5, 20, 10]} />

      <Cube position={[-41.1, 1, -24.1]} scale={[4.5, 2, 15]} />
      <Cube position={[-41.5, 26, 0]} scale={[5, 1.5, 38]} />
      <Cube position={[-37.5, 29, -24.1]} scale={[1, 1.5, 15]} />
      <Cube position={[-38.57, 20, 35.53]} scale={[2, 20, 2]} />
      <Cube position={[-38.57, 20, 12.2]} scale={[2, 20, 3.05]} />
      <Cube position={[-41.57, 20, -12.2]} scale={[5, 20, 3.05]} />
      <Cube position={[-41.57, 20, -35.5]} scale={[5, 20, 2]} />
    </group>
  );
};

export default Wall3;
