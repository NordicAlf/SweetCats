import React from 'react';
import Cube from '../../../Physics/Cube/Cube';
import {Vector3} from "three";

const Wall3: React.FC = () => {
  return (
    <group>
      <Cube position={new Vector3(-38.5, 20, 9.5)} scale={new Vector3(0.5, 20, 24)} />
      <Cube position={new Vector3(-46.2, 20, -25)} scale={new Vector3(0.5, 20, 10)} />
      <Cube position={new Vector3(-41.1, 1, -24.1)} scale={new Vector3(4.5, 2, 15)} />
      <Cube position={new Vector3(-41.5, 26, 0)} scale={new Vector3(5, 1.5, 38)} />
      <Cube position={new Vector3(-37.5, 29, -24.1)} scale={new Vector3(1, 1.5, 15)} />
      <Cube position={new Vector3(-38.57, 20, 35.53)} scale={new Vector3(2, 20, 2)} />
      <Cube position={new Vector3(-38.57, 20, 12.2)} scale={new Vector3(2, 20, 3.05)} />
      <Cube position={new Vector3(-41.57, 20, -12.2)} scale={new Vector3(5, 20, 3.05)} />
      <Cube position={new Vector3(-41.57, 20, -35.5)} scale={new Vector3(5, 20, 2)} />
    </group>
  );
};

export default Wall3;
