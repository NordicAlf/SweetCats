import React from 'react';
import { Vector3 } from 'three';
import Cup from '../../../Objects/Cup';
import { Table as TableItem } from '../../../Objects/Table';
import Teapot from '../../../Objects/Teapot';

const Table: React.FC = () => {
  return (
    <>
      <TableItem
        position={new Vector3(0, 0, 0)}
        index={0}
        key={0}
        isVisible={true}
      />

      <group>
        <Teapot
          position={new Vector3(-40, 50, 15)}
          key={0}
          index={0}
          isVisible={true}
        />
        <Cup
          position={new Vector3(-5, 50, -35)}
          key={0}
          index={0}
          isVisible={true}
        />
        <Cup
          position={new Vector3(10, 50, 35)}
          key={0}
          index={0}
          isVisible={true}
        />
        <Cup
          position={new Vector3(-75, 50, 5)}
          key={0}
          index={0}
          isVisible={true}
        />
        <Cup
          position={new Vector3(80, 50, -5)}
          key={0}
          index={0}
          isVisible={true}
        />
      </group>
    </>
  );
};

export default Table;
