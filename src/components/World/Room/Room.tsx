import React from 'react';
import House from '../../Objects/House';
import Ceiling from './Ceiling/Ceiling';
import Floor from './Floor/Floor';
import Table from './Table/Table';
import Walls from './Walls';
import {Vector3} from "three";
import Players from "./Players/Players";
import Dish from "./Dish/Dish";

const Room: React.FC = () => {
  return (
    <>
      <group dispose={null} scale={[0.1, 0.1, 0.1]}>
        <House
          position={new Vector3(0, 0 ,0)}
          isVisible={true}
          index={0}
        />
        <Floor />
        <Table />
      </group>

      <Walls />
      <Ceiling />
      <Dish />
      <Players />
    </>
  );
};

export default Room;
