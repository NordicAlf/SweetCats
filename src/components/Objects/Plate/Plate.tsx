import {
  InstancedRigidBodies,
  InstancedRigidBodyProps,
} from '@react-three/rapier';
import React, { useMemo } from 'react';
import ObjectNames from '../../../utils/constants/ObjectNames';
import { ObjectInstanceInterface } from '../ObjectInterface';

export const Plate: React.FC<ObjectInstanceInterface> = (props) => {
  const cubes = useMemo(() => {
    const instances: InstancedRigidBodyProps[] = [];

    for (let i = 0; i < props.countInstances; i++) {
      instances.push({
        key: i,
        position: props.positions[i],
        rotation: [-Math.PI / 2, 0, 0],
        scale: [0.5, 0.5, 0.5],
        name: ObjectNames.plate + '_' + i,
      });
    }
    return instances;
  }, [props.countInstances, props.positions]);

  return (
    <InstancedRigidBodies
      instances={cubes}
      type={'fixed'}
      name={ObjectNames.plate}
    >
      <instancedMesh
        args={[
          props.model.nodes.Circle_Plates001_0.geometry,
          props.model.materials['Plates.001'],
          props.countInstances,
        ]}
      />
    </InstancedRigidBodies>
  );
};
