import { useGLTF } from '@react-three/drei';
import { RigidBody } from '@react-three/rapier';
import React, { useState } from 'react';
import ObjectNames from '../../utils/constants/ObjectNames';
import { ObjectInterface } from './Interface/ObjectInterface';
import {useGameStore} from "../../store/GameStore";

export const Cake = (props: ObjectInterface) => {
  const [isVisible, setVisible] = useState(true);
  const cakeRemove = useGameStore((gameStore) => gameStore.actions.objectRemove);

  props.position.setY(props.position.y + 0.05);

  return isVisible ? (
    <RigidBody
      type={'fixed'}
      position={props.position}
      key={props.index}
      onCollisionEnter={() => {
        setVisible(false);
        cakeRemove(props.index)
      }}
      name={ObjectNames.cake}
      scale={2}
    >
      <mesh
        geometry={props.mesh?.geometry}
        material={props.mesh?.material}
        position={props.mesh?.position}
        scale={0.01}
      />
    </RigidBody>
  ) : null
};

useGLTF.preload('/assets/models/cake.glb');
