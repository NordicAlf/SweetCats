import { useGLTF } from '@react-three/drei';
import React from 'react';
import { Plate } from '../../../../Objects/Plate';
import {useObjectStore} from "../../../../../store/ObjectStore";
import {GLTFResultType} from "../../../../../utils/types/GLTFResultType";
import plate from '~/assets/models/plate.glb?url';

const Plates: React.FC = () => {
  const plateModel = useGLTF(plate) as GLTFResultType;
  const plates = useObjectStore((state) => state.plates);

  return (
    plates && <group>
      <Plate
        key={666}
        positions={plates}
        model={plateModel}
        countInstances={plates.length}
      />
    </group>
  );
};

useGLTF.preload(plate);

export default Plates;

