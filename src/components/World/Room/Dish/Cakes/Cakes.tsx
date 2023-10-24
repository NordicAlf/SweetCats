import { useGLTF } from '@react-three/drei';
import React from 'react';
import ObjectNames from '../../../../../utils/constants/ObjectNames';
import { Cake } from '../../../../Objects/Cake';
import {Vector3} from "three";
import {useObjectStore} from "../../../../../store/ObjectStore";
import cake from '~/assets/models/cake.glb?url';

const Cakes: React.FC = () => {
  const cakeModel = useGLTF(cake);
  const cakes = useObjectStore((state) => state.cakes);

  return (
    cakes && <group>
      {cakes.map((item) => (
        <Cake
          key={ObjectNames.cake + '_' + item.id}
          index={item.id}
          position={(new Vector3()).fromArray(item.position)}
          // @ts-ignore
          mesh={cakeModel.scenes[0].children[0]}
          count={cakes.length}
          isVisible={true}
        />
      ))}
    </group>
  );
};

useGLTF.preload(cake);

export default Cakes;

