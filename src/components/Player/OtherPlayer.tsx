import { useFrame } from '@react-three/fiber';
import React,{ useRef } from 'react';
import { Vector3 } from 'three';
import PlayerStore from "../../store/PlayerStore";
import { RefGroupType } from '../../utils/types/RefTypes';
import { Cat } from '../Objects/Cat';
import { ObjectInterface } from "../Objects/Interface/ObjectInterface";

export const OtherPlayer = (props: ObjectInterface) => {
  const catRef = useRef<RefGroupType>(null);
  const zeroVector = new Vector3(10, 10, 10);
  const catScale = new Vector3(5, 5, 5);

  useFrame(() => {
    if (PlayerStore.getState()) {
      const position = PlayerStore.getState().userPositions[props.index];

      catRef.current && catRef.current.position.set(position.x, position.y - 0.5, position.z);
    }
  });

  return (
    <Cat
      scale={catScale}
      position={zeroVector}
      index={props.index}
      isVisible={true}
      ref={catRef}
    />
  );
};
