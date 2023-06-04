import { RigidBody } from '@react-three/rapier';
import React from 'react';
import { GLTF } from 'three-stdlib';
import { Vector3 } from '../../../../three-types';

interface PlateInterface {
  position: Vector3;
  ind: number;
  model: GLTF;
}

export const Plate: React.FC<PlateInterface> = (props) => {
  return (
    <RigidBody type={'fixed'} position={props.position} key={props.ind}>
      <mesh
        dispose={null}
        geometry={props.model.nodes.Circle_Plates001_0.geometry}
        material={props.model.materials['Plates.001']}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0.5}
      />
    </RigidBody>
  );
};
