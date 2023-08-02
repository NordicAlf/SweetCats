import { useGLTF } from '@react-three/drei';
import { CylinderCollider, RigidBody } from '@react-three/rapier';
import React from 'react';
import { GLTFResultType } from '../../utils/types/GLTFResultType';
import { ObjectInterface } from './Interface/ObjectInterface';

const Teapot: React.FC<ObjectInterface> = (props) => {
  const { nodes, materials } = useGLTF(
    '/assets/models/teapot.gltf'
  ) as GLTFResultType;
  return (
    <RigidBody
      position={props.position}
      mass={1}
      enabledRotations={[false, false, false]}
      rotation={[-Math.PI / 2, 0, 0]}
      type={'fixed'}
      scale={[0.8, 0.8, 0.8]}
      colliders={'hull'}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_5.geometry}
        material={materials.blinn1SG}
        position={[51.77, 1.02, -49.21]}
      />
      <CylinderCollider args={[1, 1]} />
    </RigidBody>
  );
};

export default Teapot;

useGLTF.preload('/assets/models/teapot.gltf');
