import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import React from 'react';
import { GLTFResultType } from '../../utils/types/GLTFResultType';
import { ObjectInterface } from './Interface/ObjectInterface';
import table from '~/assets/models/table.gltf?url';

export const Table: React.FC<ObjectInterface> = (props) => {
  const { nodes, materials } = useGLTF(table) as GLTFResultType;

  return (
    <RigidBody
      position={props.position}
      rotation={[-Math.PI / 2, 0, 0]}
      mass={1}
      type={'fixed'}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_9.geometry}
        material={materials.lambert7SG}
      />
    </RigidBody>
  );
};

useGLTF.preload(table);
