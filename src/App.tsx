import { KeyboardControls, PointerLockControls, Sky } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import { Perf } from 'r3f-perf';
import React, { Suspense } from 'react';
import { Vector3 } from 'three';
import { Player } from './components/Player/Player';
import AirField from './components/World/Air/AirField';
import { Ground } from './components/World/Ground/Ground';

const WorldSize = {
  x: 50,
  z: 50,
};

const Keyboard = [
  { name: 'forward', keys: ['KeyW', 'ArrowUp'] },
  { name: 'backward', keys: ['KeyS', 'ArrowDown'] },
  { name: 'left', keys: ['KeyA', 'ArrowLeft'] },
  { name: 'right', keys: ['KeyD', 'ArrowRight'] },
  { name: 'jump', keys: ['Space'] },
  { name: 'run', keys: ['Shift'] },
];

const App: React.FC = () => {
  const isDevMode = import.meta.env.DEV;

  return (
    <KeyboardControls map={Keyboard}>
      <Canvas camera={{ position: [0, 1, 5] }}>
        <Suspense>
          <Sky sunPosition={new Vector3(100, 10, 100)} />
          <ambientLight intensity={0.3} />
          <pointLight castShadow intensity={0.8} position={[100, 100, 100]} />
          <Physics debug={isDevMode} gravity={[0, -30, 0]} interpolate={false}>
            <Ground size={WorldSize} />
            <AirField />
            <Player />
          </Physics>
        </Suspense>
        <PointerLockControls />
        {isDevMode && <Perf position={'top-left'} />}
      </Canvas>
    </KeyboardControls>
  );
};

export default App;
