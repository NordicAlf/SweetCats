import React from 'react';
import { Vector3 } from 'three';
import Zabuton from '../../../Objects/Zabuton';

const Floor: React.FC = () => {
  return (
    <group>
      <Zabuton
        position={new Vector3(150, 0, 0)}
        key={1}
        isVisible={true}
        index={1}
      />
      <Zabuton
        position={new Vector3(-150, 0, 0)}
        key={2}
        isVisible={true}
        index={2}
      />
      <Zabuton
        position={new Vector3(0, 0, 100)}
        key={3}
        isVisible={true}
        index={3}
      />
      <Zabuton
        position={new Vector3(0, 0, -110)}
        key={4}
        isVisible={true}
        index={4}
      />
    </group>
  );
};

export default Floor;
