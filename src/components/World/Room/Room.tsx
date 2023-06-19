import React from 'react';
import House from '../../Objects/House';
import Ceiling from './Ceiling/Ceiling';
import Floor from './Floor/Floor';
import Plates from './Plates/Plates';
import Table from './Table/Table';
import Walls from './Walls';

const Room: React.FC = () => {
  return (
    <>
      <group dispose={null} scale={[0.1, 0.1, 0.1]}>
        <House />
        <Floor />
        <Table />
      </group>

      <Walls />
      <Ceiling />
      <Plates />
    </>
  );
};

export default Room;
