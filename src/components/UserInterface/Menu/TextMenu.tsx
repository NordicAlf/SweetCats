import { Text } from '@react-three/drei';
import React, { useRef } from 'react';
import { Vector3 } from 'three';
import {TextType} from "../../../utils/types/RefTypes";

interface MenuTextInterface {
  position: Vector3;
  text: string;
  onClick: () => void;
}

export const TextMenu: React.FC<MenuTextInterface> = (props) => {
  const ref = useRef<TextType>(null);

  return (
    <Text
      ref={ref}
      color={'#ffffff'}
      anchorX='center'
      anchorY='middle'
      outlineColor={'#000000'}
      outlineWidth={0}
      scale={[0.05, 0.05, 0.05]}
      position={props.position}
      onClick={props.onClick}
      onPointerEnter={() => {
        if (ref.current) {
          ref.current.outlineWidth = 0.05;
          ref.current.color = '#C8463F';
          ref.current.outlineColor = '#ffffff';
        }
      }}
      onPointerLeave={() => {
        if (ref.current) {
          ref.current.outlineWidth = 0;
          ref.current.color = '#ffffff';
          ref.current.outlineColor = '#000000';
        }
      }}
    >
      {props.text}
    </Text>
  );
};
