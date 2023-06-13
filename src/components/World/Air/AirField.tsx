import { useGLTF } from '@react-three/drei';
import React from 'react';
import usePlateStore from '../../../store/PlateStore';
import ObjectNames from '../../../utils/constants/ObjectNames';
import { getRandomInt } from '../../../utils/functions/randomNumberGenerator';
import { Cake } from '../../Objects/Cake/Cake';
import { Plate } from '../../Objects/Plate/Plate';

const AirField: React.FC = () => {
  const plateModel = useGLTF('/Models/plate.glb');
  const cakeModel = useGLTF('/Models/cake1.glb');
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

useGLTF.preload('/Models/plate.glb');
useGLTF.preload('/Models/cake1.glb');

export default AirField;
