import React from 'react';
import Cube from '../../../Physics/Cube/Cube';
import {Vector3} from "three";

const Wall2: React.FC = () => {
  return (
    <group>
      <Cube position={new Vector3(0, 20, 38.5)} scale={new Vector3(36.5, 20, 0.5)} />
      <Cube position={new Vector3(0, 1, 37.5)} scale={new Vector3(36.5, 2, 1)} />
      <Cube position={new Vector3(0, 38.5, 37.5)} scale={new Vector3(36.5, 2, 1)} />
      <Cube position={new Vector3(24.1, 26, 37.5)} scale={new Vector3(15, 1.5, 1)} />
      <Cube position={new Vector3(-24.1, 26, 37.5)} scale={new Vector3(15, 1.5, 1)} />
      <Cube position={new Vector3(35.5, 20, 37.5)} scale={new Vector3(2, 20, 1)} />
      <Cube position={new Vector3(12.2, 20, 37.5)} scale={new Vector3(3, 20, 1)} />
      <Cube position={new Vector3(-12.2, 20, 37.5)} scale={new Vector3(3, 20, 1)} />
      <Cube position={new Vector3(-36.55, 20, 37.5)} scale={new Vector3(3, 20, 1)} />
    </group>
  );
};

export default Wall2;
