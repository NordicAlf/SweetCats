import { useGLTF } from '@react-three/drei';
import React from 'react';
import { GLTFResultType } from '../../utils/types/GLTFResultType';
import { ObjectInterface } from './Interface/ObjectInterface';

const House: React.FC<ObjectInterface> = (props) => {
  const { nodes, materials } = useGLTF(
    '/assets/models/room.glb'
  ) as GLTFResultType;

  return (
    <group
      scale={props.scale}
      position={props.position}
      rotation={props.rotation}
    >
      <mesh
        geometry={nodes.Object_3.geometry}
        material={materials.lambert2SG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.lambert3SG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials.lambert4SG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_7.geometry}
        material={materials.lambert5SG}
        rotation={[-Math.PI / 2, 0, 0]}
      />
    </group>
  );
};

export default House;

useGLTF.preload('/assets/models/room.glb');
