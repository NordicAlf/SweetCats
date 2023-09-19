import { Stars, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, {useEffect, useRef} from 'react';
import { useNavigate } from 'react-router';
import { Vector3 } from 'three';
import { RoutesList } from '../../../core/routes';
import { RefGroupType } from '../../../utils/types/RefTypes';
import { Cat } from '../../Objects/Cat';
import {useGameStore} from "../../../store/GameStore";
import usePlayerStore from "../../../store/PlayerStore";
import {TextMenu} from "../Menu/TextMenu";
import usePlateStore from "../../../store/PlateStore";

export const LoaderScreen: React.FC = () => {
  const catRef = useRef<RefGroupType>(null);
  const { camera } = useThree();
  const navigate = useNavigate();
  const plates = usePlateStore((plateStore) => plateStore.plates);
  const players = usePlayerStore((playerStore) => playerStore.positions);

  camera.position.set(0, 0.1, 0.5);

  useFrame(({ clock }) => {
    catRef.current?.rotateY(0.08);

    // if (clock.getElapsedTime() > 5) {
    //   navigate(RoutesList.game);
    // }
  });

  // useEffect(() => {
  //   console.log(cakes);
  // }, [cakes])

  useEffect(() => {
    // console.log('---------------');
    // console.log('platesA');
    // console.log(plates);
    // console.log('platesB');
    // console.log('playersA');
    // console.log(players);
    // console.log('playersB');
    // console.log('---------------');
  }, [players, plates])

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
      <TextMenu
        text='GO'
        position={new Vector3(0.3, 0.02, 0)}
        onClick={() => {
          navigate(RoutesList.game);
        }}
      />
    </group>
  );
};
