import { useGLTF } from '@react-three/drei';
import React from 'react';
import usePlateStore from '../../../../store/PlateStore';
import ObjectNames from '../../../../utils/constants/ObjectNames';
import { getRandomInt } from '../../../../utils/functions/randomNumberGenerator';
import { Cake } from '../../../Objects/Cake';
import { Plate } from '../../../Objects/Plate';
import {Vector3} from "three";

const Plates: React.FC = () => {
  const plateModel = useGLTF('/assets/models/plate.glb');
  const cakeModel = useGLTF('/assets/models/cake.glb');
  const plates = usePlateStore((state) => state.plates);

  return (
    plates && <group>
      <Plate
        key={666}
        positions={plates}
        model={plateModel}
        countInstances={plates.length}
      />
      {plates.map((item, index) => (
        <Cake
          key={ObjectNames.cake + '_' + item.id}
          index={index}
          position={(new Vector3()).fromArray(item.position)}
          mesh={cakeModel.scenes[0].children[getRandomInt(0, 12)]}
          count={plates.length}
          isVisible={true}
        />
      ))}
    </group>
    );
};

useGLTF.preload('/assets/models/plate.glb');
useGLTF.preload('/assets/models/cake.glb');

export default Plates;
