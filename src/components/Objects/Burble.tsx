import { Sphere } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { Color, Vector3 } from 'three';
import { getRandomFloat } from '../../utils/functions/randomNumberGenerator';
import { ObjectInterface } from './Interface/ObjectInterface';

export const Burble: React.FC<ObjectInterface> = (props) => {
  const sphereRef = useRef();
  const [isVisible, setVisible] = useState(props.isVisible);
  const color = new Color('rgb(255,218,218)');
  let startAnimationTime = 0;

  const moveDirection = new Vector3(
    getRandomFloat(props.position.x - 3, props.position.x + 2),
    getRandomFloat(props.position.y, props.position.y + 2),
    getRandomFloat(props.position.z - 3, props.position.z + 2)
  );

  useFrame(({ clock }) => {
    if (isVisible) {
      if (startAnimationTime === 0) {
        startAnimationTime = clock.getElapsedTime();
      }

      sphereRef.current.position.lerp(moveDirection, 0.05);

      if (clock.getElapsedTime() - startAnimationTime > 2) {
        setVisible(false);
      }
    }
  });

  return isVisible ? (
    <Sphere
      ref={sphereRef}
      position={props.position}
      args={[0.1, 40, 40]}
      key={props.index}
    >
      <meshPhysicalMaterial
        color={color}
        transmission={1}
        opacity={1}
        metalness={0}
        roughness={0}
        ior={1.5}
        thickness={0.01}
        specularIntensity={1}
        envMapIntensity={10}
      />
    </Sphere>
  ) : null;
};
