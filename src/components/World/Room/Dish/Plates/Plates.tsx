import { useGLTF } from '@react-three/drei';
import React from 'react';
import { Plate } from '../../../../Objects/Plate';
import {useObjectStore} from "../../../../../store/ObjectStore";
import {GLTFResultType} from "../../../../../utils/types/GLTFResultType";

const Plates: React.FC = () => {
  const plateModel = useGLTF('/assets/models/plate.glb') as GLTFResultType;
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

useGLTF.preload('/assets/models/plate.glb');

export default Plates;

