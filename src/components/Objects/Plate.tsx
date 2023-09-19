import {
  InstancedRigidBodies,
  InstancedRigidBodyProps,
} from '@react-three/rapier';
import React, { useMemo } from 'react';
import ObjectNames from '../../utils/constants/ObjectNames';
import { ObjectInstanceInterface } from './Interface/ObjectInterface';
import {Vector3} from "three";

export const Plate: React.FC<ObjectInstanceInterface> = (props) => {
  const cubes = useMemo(() => {
    const instances: InstancedRigidBodyProps[] = [];

    for (let i = 0; i < props.countInstances; i++) {
      instances.push({
        key: i,
        position: (new Vector3()).fromArray(props.positions[i].position),
        rotation: [-Math.PI / 2, 0, 0],
        scale: [0.8, 0.8, 0.8],
        name: ObjectNames.plate + '_' + props.positions[i].id,
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
