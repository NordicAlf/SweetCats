import React from 'react';
import Cube from '../../../Physics/Cube/Cube';
import CeilingLamps from './CeilingLamps';
import {Vector3} from "three";

const Ceiling: React.FC = () => {
  return (
    <group>
      <Cube position={new Vector3(0, 40, 0)} scale={new Vector3(36.5, 0.5, 36.5)} />
      <CeilingLamps />
    </group>
  );
};

export default Ceiling;
