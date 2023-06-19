import { useGLTF } from '@react-three/drei';
import React from 'react';
import usePlateStore from '../../../../store/PlateStore';
import ObjectNames from '../../../../utils/constants/ObjectNames';
import { getRandomInt } from '../../../../utils/functions/randomNumberGenerator';
import { Cake } from '../../../Objects/Cake';
import { Plate } from '../../../Objects/Plate';

const Plates: React.FC = () => {
  const plateModel = useGLTF('/assets/models/plate.glb');
  const cakeModel = useGLTF('/assets/models/cake.glb');
  const positions = usePlateStore((state) => state.positions);

  return (
    <group>
      <Plate
        key={666}
        positions={positions}
        model={plateModel}
        countInstances={positions.length}
      />
      {positions.map((item, index) => (
        <Cake
          key={ObjectNames.cake + '_' + index}
          index={index}
          position={item}
          mesh={cakeModel.scenes[0].children[getRandomInt(0, 12)]}
          count={positions.length}
          isVisible={true}
        />
      ))}
    </group>
  );
};

useGLTF.preload('/assets/models/plate.glb');
useGLTF.preload('/assets/models/cake.glb');

export default Plates;
