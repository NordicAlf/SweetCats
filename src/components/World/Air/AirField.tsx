import { useGLTF } from '@react-three/drei';
import React from 'react';
import { Vector3 } from 'three';
import { getRandomInt } from '../../../utils/utils';
import { Cake } from '../../Objects/Cake/Cake';
import { Plate } from '../../Objects/Plate/Plate';

const AirField: React.FC = () => {
  const plateModel = useGLTF('/Models/plate.glb');
  const cakeModel = useGLTF('/Models/cake1.glb');
  const array = [];
  const minWorld = -50 / 2;
  const maxWorld = 50 / 2;

  for (let i = 0; i < 1000; i++) {
    array.push(
      new Vector3(
        getRandomInt(minWorld, maxWorld),
        getRandomInt(0, maxWorld),
        getRandomInt(minWorld, maxWorld)
      )
    );
  }

  return (
    <>
      {[
        array.map((item, index) => (
          <group key={`item${index}`}>
            <Plate ind={index} position={item} model={plateModel} />
            <Cake
              ind={index}
              position={item}
              mesh={cakeModel.scenes[0].children[getRandomInt(0, 12)]}
            />
          </group>
        )),
      ]}
    </>
  );
};

useGLTF.preload('/Models/plate.glb');
useGLTF.preload('/Models/cake1.glb');

export default AirField;
