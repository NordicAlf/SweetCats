import { Stars } from '@react-three/drei';
import { Physics } from '@react-three/rapier';
import React, { Suspense } from 'react';
import { Player } from '../Player/Player';
import Skybox from './Air/Skybox';
import { Ground } from './Ground/Ground';
import Room from './Room/Room';
import usePlayerStore from "../../store/PlayerStore";
import {Vector3} from "three";

const WorldSize = {
  x: 50,
  z: 50,
};

const World: React.FC = () => {
  const players = usePlayerStore((playerStore) => playerStore.positions);

  return (
    <>
      <Suspense fallback={null}>
        <Skybox />
        <Stars
          radius={100}
          depth={50}
          count={5000}
          factor={4}
          saturation={0}
          fade
          speed={1}
        />
        <ambientLight intensity={1} />
        <pointLight castShadow intensity={0.8} position={[70, 0, 0]} />
        <Physics debug={false} gravity={[0, -30, 0]} interpolate={false}>
          <Ground size={WorldSize} />
          <Room />
          {players !== null && players.map((item, index) => (
            <Player
              uuid={item.id}
              position={(new Vector3()).fromArray(item.position)}
              index={index}
              isVisible={true}
            />
          ))}
        </Physics>
      </Suspense>
    </>
  );
};

export default World;
