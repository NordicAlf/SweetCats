import React from 'react';
import Cube from '../../../Physics/Cube/Cube';
import CeilingLamps from './CeilingLamps';

const Ceiling: React.FC = () => {
  return (
    <group>
      <Cube position={[0, 40, 0]} scale={[36.5, 0.5, 36.5]} />
      <CeilingLamps />
    </group>
  );
};

export default Ceiling;
