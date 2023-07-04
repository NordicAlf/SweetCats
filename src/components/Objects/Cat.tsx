import { useGLTF } from '@react-three/drei';
import React, { forwardRef } from 'react';
import { GLTFResultType } from '../../utils/types/GLTFResultType';
import { RefGroupType } from '../../utils/types/RefTypes';
import { ObjectInterface } from './Interface/ObjectInterface';

export const Cat = forwardRef<RefGroupType, ObjectInterface>(function Cat(
  props,
  ref
) {
  const { nodes, materials } = useGLTF(
    '/assets/models/cat.glb'
  ) as GLTFResultType;

  return (
    <group {...props} ref={ref} dispose={null}>
      <group name='Sketchfab_Scene'>
        <group name='GLTF_SceneRootNode'>
          <group
            name='donut_2'
            position={[0, 0.024, 0]}
            rotation={[0, -1.522, 0]}
          >
            <group name='polewka_0'>
              <mesh
                name='Object_7'
                geometry={nodes.Object_7.geometry}
                material={materials['Material.004']}
              />
              <mesh
                name='Object_9'
                geometry={nodes.Object_9.geometry}
                material={materials['Material.009']}
              />
            </group>
            <group
              name='twarz_1'
              position={[-0.003, -0.005, 0.082]}
              rotation={[-Math.PI / 2, 0, 0]}
              scale={[-0.012, 0.012, 0.012]}
            >
              <mesh
                name='Object_12'
                geometry={nodes.Object_12.geometry}
                material={materials['Material.002']}
              />
              <mesh
                name='Object_13'
                geometry={nodes.Object_13.geometry}
                material={materials['Material.005']}
              />
            </group>
            <mesh
              name='Object_4'
              geometry={nodes.Object_4.geometry}
              material={materials['Material.003']}
            />
            <mesh
              name='Object_5'
              geometry={nodes.Object_5.geometry}
              material={materials['Material.008']}
            />
          </group>
        </group>
      </group>
    </group>
  );
});

useGLTF.preload('/assets/models/cat.glb');
