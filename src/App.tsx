import { KeyboardControls, PointerLockControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Perf } from 'r3f-perf';
import React from 'react';
import World from './components/World/World';

const Keyboard = [
  { name: 'forward', keys: ['KeyW', 'ArrowUp'] },
  { name: 'backward', keys: ['KeyS', 'ArrowDown'] },
  { name: 'left', keys: ['KeyA', 'ArrowLeft'] },
  { name: 'right', keys: ['KeyD', 'ArrowRight'] },
  { name: 'jump', keys: ['Space'] },
  { name: 'run', keys: ['Shift'] },
  { name: 'flyMode', keys: ['KeyM'] },
  { name: 'flyModeDown', keys: ['Control'] },
];

const App: React.FC = () => {
  const isDevMode = import.meta.env.DEV;

  return (
    <KeyboardControls map={Keyboard}>
      <Canvas camera={{ position: [0, 1, 5] }} linear={true}>
        <World />
        <PointerLockControls />
        {isDevMode && (
          <>
            <Perf position={'top-left'} />
            <gridHelper args={[100, 50, 50]} />
          </>
        )}
      </Canvas>
    </KeyboardControls>
  );
};

export default App;
