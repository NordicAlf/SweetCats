import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import React, { useState } from 'react';
import useBurbleStore from '../../../store/BurbleStore';
import ObjectNames from '../../../utils/constants/ObjectNames';
import { Burble } from '../Burble/Burble';
import { ObjectInterface } from '../ObjectInterface';

export const Cake = (props: ObjectInterface) => {
  const [isVisible, setVisible] = useState(true);
  const burbles = useBurbleStore((burbleStore) => burbleStore.burbles);

  props.position.setY(props.position.y + 0.05);

  return isVisible ? (
    <RigidBody
      type={'fixed'}
      position={props.position}
      key={props.index}
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
  ) : (
    burbles.map((value, index) => (
      <Burble
        key={ObjectNames.burble + '_' + index}
        position={props.position}
        index={index}
        isVisible={!isVisible}
      />
    ))
  );
};

useGLTF.preload('/Models/plate.glb');
