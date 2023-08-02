import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import React from 'react';
import { GLTFResultType } from '../../utils/types/GLTFResultType';
import { ObjectInterface } from './Interface/ObjectInterface';

const Cup: React.FC<ObjectInterface> = (props) => {
  const { nodes, materials } = useGLTF(
    '/assets/models/cup.gltf'
  ) as GLTFResultType;
  return (
    <RigidBody
      position={props.position}
      mass={1}
      enabledRotations={[false, false, false]}
      rotation={[-Math.PI / 2, 0, 0]}
      scale={[0.9, 0.9, 0.9]}
      type={'fixed'}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_10.geometry}
        material={materials.lambert8SG}
        position={[17.02, 10.88, -49.21]}
      />
    </RigidBody>
  );
};

export default Cup;

useGLTF.preload('/assets/models/cup.gltf');
