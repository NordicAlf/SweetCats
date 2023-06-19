import React from 'react';
import Wall1 from './Walls/Wall1';
import Wall2 from './Walls/Wall2';
import Wall3 from './Walls/Wall3';
import Wall4 from './Walls/Wall4';

const Walls: React.FC = () => {
  return (
    <group>
      <Wall1 />
      <Wall2 />
      <Wall3 />
      <Wall4 />
    </group>
  );
};

export default Walls;
