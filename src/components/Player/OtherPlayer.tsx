import { useFrame } from '@react-three/fiber';
import React, {useRef} from 'react';
import { Vector3 } from 'three'
import { RefGroupType } from '../../utils/types/RefTypes';
import { Cat } from '../Objects/Cat';
import {ObjectInterface} from "../Objects/Interface/ObjectInterface";
import PlayerStore from "../../store/PlayerStore";

export const OtherPlayer = (props: ObjectInterface) => {
  const catRef = useRef<RefGroupType>(null);
  const zeroVector = new Vector3(10, 10, 10);
  const catScale = new Vector3(5, 5, 5);

  useFrame(() => {
    if (PlayerStore.getState().userPositions) {
      const position = PlayerStore.getState().userPositions[props.uuid];

      catRef.current.position.set(position.x, position.y - 0.5, position.z);
    }
  });

  return (
    <Cat
      scale={catScale}
      position={zeroVector}
      index={0}
      isVisible={true}
      ref={catRef}
    />
  );
};
