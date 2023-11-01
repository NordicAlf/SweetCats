import { RigidBody } from '@react-three/rapier';
import React, { useState } from 'react';
import ObjectNames from '../../utils/constants/ObjectNames';
import { ObjectInterface } from './Interface/ObjectInterface';
import {useGameStore} from "../../store/GameStore";
import usePlayerStore from "~/store/PlayerStore";

export const Cake = (props: ObjectInterface) => {
  const [isVisible, setVisible] = useState(true);
  const cakeRemove = useGameStore((gameStore) => gameStore.actions.objectRemove);
  const eatCake = usePlayerStore((playerStore) => playerStore.actions.eatCake);

  props.position.setY(props.position.y + 0.05);

  return isVisible ? (
    <RigidBody
      type={'fixed'}
      position={props.position}
      key={props.index}
      onCollisionEnter={() => {
        setVisible(false);
        cakeRemove(props.index);
        eatCake();
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
