import { useGLTF } from '@react-three/drei';
import React, {useEffect} from 'react';
import ObjectNames from '../../../../../utils/constants/ObjectNames';
import { Cake } from '../../../../Objects/Cake';
import {Vector3} from "three";
import {useObjectStore} from "../../../../../store/ObjectStore";

const Cakes: React.FC = () => {
  const cakeModel = useGLTF('/assets/models/cake.glb');
  const cakes = useObjectStore((state) => state.cakes);

  return (
    cakes && <group>
      {cakes.map((item) => (
        <Cake
          key={ObjectNames.cake + '_' + item.id}
          index={item.id}
          position={(new Vector3()).fromArray(item.position)}
          mesh={cakeModel.scenes[0].children[0]}
          count={cakes.length}
          isVisible={true}
        />
      ))}
    </group>
  );
};

useGLTF.preload('/assets/models/cake.glb');

export default Cakes;

