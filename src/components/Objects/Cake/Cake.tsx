import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import React, { useState } from 'react';
import { Mesh, Vector3 } from 'three';
import ObjectNames from '../../../utils/types/ObjectNames';

interface CakeInterface {
  position: Vector3;
  ind: number;
  mesh: Mesh;
}

export const Cake: React.FC<CakeInterface> = (props: CakeInterface) => {
  const [isVisible, setVisible] = useState(true);

  props.position.setY(props.position.y + 0.05);

  return isVisible ? (
    <RigidBody
      type={'fixed'}
      position={props.position}
      key={props.ind}
      onCollisionEnter={() => {
        setVisible(false);
      }}
      name={ObjectNames.cake}
      scale={1.5}
    >
      <mesh
        geometry={props.mesh.geometry}
        material={props.mesh.material}
        position={props.mesh.position}
        scale={0.01}
      />
    </RigidBody>
  ) : null;
};

useGLTF.preload('/Models/plate.glb');
