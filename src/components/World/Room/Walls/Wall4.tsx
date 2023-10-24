import React from 'react';
import Cube from '../../../Physics/Cube/Cube';
import {Vector3} from "three";

const Wall4: React.FC = () => {
  return <Cube position={new Vector3(37, 20, 0)} scale={new Vector3(0.5, 20, 36.5)} />;
};

export default Wall4;
