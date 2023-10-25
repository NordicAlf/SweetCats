import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import React from 'react';
import { GLTFResultType } from '../../utils/types/GLTFResultType';
import { ObjectInterface } from './Interface/ObjectInterface';
import chair from '~/assets/models/chair.gltf?url';

const Zabuton: React.FC<ObjectInterface> = (props) => {
  const { nodes, materials } = useGLTF(chair) as GLTFResultType;
  return (
    <RigidBody
      position={props.position}
      mass={1}
      enabledRotations={[false, false, false]}
      rotation={[-Math.PI / 2, 0, 0]}
      type={'fixed'}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Object_8.geometry}
        material={materials.lambert6SG}
        position={[0, 114, 0]}
      />
    </RigidBody>
  );
};

export default Zabuton;

useGLTF.preload(chair);
