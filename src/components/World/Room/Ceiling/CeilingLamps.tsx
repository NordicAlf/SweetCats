import React from 'react';
import Cube from '../../../Physics/Cube/Cube';

const CeilingLamps: React.FC = () => {
  return (
    <group>
      <group>
        <pointLight
          position={[-15.8, 32.2, 10.7]}
          castShadow
          intensity={20}
          distance={40}
        />
        <Cube position={[-15.8, 32.2, 10.7]} scale={[2.1, 3.5, 2.1]} />
      </group>
      <group>
        <pointLight
          position={[-16.1, 32.2, -10.5]}
          castShadow
          intensity={20}
          distance={40}
        />
        <Cube position={[-16.1, 32.2, -10.5]} scale={[2.1, 3.5, 2.1]} />
      </group>
      <group>
        <pointLight
          position={[15.6, 32.2, -10.5]}
          castShadow
          intensity={20}
          distance={40}
        />
        <Cube position={[15.6, 32.2, -10.5]} scale={[2.1, 3.5, 2.1]} />
      </group>
      <group>
        <pointLight
          position={[15.6, 32.2, 10.7]}
          castShadow
          intensity={20}
          distance={40}
        />
        <Cube position={[15.6, 32.2, 10.7]} scale={[2.1, 3.5, 2.1]} />
      </group>
    </group>
  );
};

export default CeilingLamps;
