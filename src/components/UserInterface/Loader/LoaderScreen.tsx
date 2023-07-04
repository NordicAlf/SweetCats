import { Stars, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import { useNavigate } from 'react-router';
import { Vector3 } from 'three';
import { RoutesList } from '../../../core/routes';
import { RefGroupType } from '../../../utils/types/RefTypes';
import { Cat } from '../../Objects/Cat';

export const LoaderScreen: React.FC = () => {
  const catRef = useRef<RefGroupType>(null);
  const { camera } = useThree();
  const navigate = useNavigate();

  camera.position.set(0, 0.1, 0.5);

  useFrame(({ clock }) => {
    catRef.current?.rotateY(0.08);

    if (clock.getElapsedTime() > 5) {
      navigate(RoutesList.game);
    }
  });

  return (
    <group>
      <Cat position={new Vector3()} index={0} isVisible={true} ref={catRef} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Text
        color='white'
        anchorX='center'
        anchorY='middle'
        scale={[0.05, 0.05, 0.05]}
        position={[0, -0.06, 0]}
      >
        Loading
      </Text>
    </group>
  );
};
