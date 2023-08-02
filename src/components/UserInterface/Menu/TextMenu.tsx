import { Text } from '@react-three/drei';
import React, { useRef } from 'react';
import { Vector3 } from 'three';

interface MenuTextInterface {
  position: Vector3;
  text: string;
  onClick: () => void;
}

export const TextMenu: React.FC<MenuTextInterface> = (props) => {
  const ref = useRef(null);

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
        ref.current.outlineWidth = 0.05;
        ref.current.color = '#C8463F';
        ref.current.outlineColor = '#ffffff';
      }}
      onPointerLeave={() => {
        ref.current.outlineWidth = 0;
        ref.current.color = '#ffffff';
        ref.current.outlineColor = '#000000';
      }}
    >
      {props.text}
    </Text>
  );
};
