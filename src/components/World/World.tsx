import { Physics } from '@react-three/rapier';
import React, { Suspense } from 'react';
import { Player } from '../Player/Player';
import Skybox from './Air/Skybox';
import { Ground } from './Ground/Ground';
import Room from './Room/Room';

const WorldSize = {
  x: 50,
  z: 50,
};

const World: React.FC = () => {
  return (
    <Suspense>
      <Skybox />
      <ambientLight intensity={1} />
      <pointLight castShadow intensity={0.8} position={[70, 0, 0]} />
      <Physics debug={false} gravity={[0, -30, 0]} interpolate={false}>
        <Ground size={WorldSize} />
        <Room />
        <Player />
      </Physics>
    </Suspense>
  );
};

export default World;
