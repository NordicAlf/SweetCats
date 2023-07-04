import { Stars } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { Euler, Vector3 } from 'three';
import { RoutesList } from '../../../core/routes';
import { RefGroupType } from '../../../utils/types/RefTypes';
import { Cat } from '../../Objects/Cat';
import House from '../../Objects/House';
import Skybox from '../../World/Air/Skybox';
import HelpModal from '../Modal/Help/HelpModal';
import { TextMenu } from './TextMenu';

export const Menu: React.FC = () => {
  const { camera } = useThree();
  const navigate = useNavigate();
  const catRef = useRef<RefGroupType>(null);
  const [isShowModal, setShowModal] = useState(false);

  camera.position.set(0, 0, 0.5);

  useFrame(() => {
    catRef.current.rotateY(0.05);
  });

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight castShadow intensity={0.8} position={[70, 0, 0]} />
      <Skybox />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <House
        scale={new Vector3(0.00045, 0.00045, 0.00045)}
        position={new Vector3(-0.35, -0.1, 0)}
        rotation={new Euler(0, Math.PI * 1.82, 0)}
        isVisible={true}
        index={0}
      />
      <Cat
        ref={catRef}
        position={new Vector3(-0.3, -0.1, 0)}
        scale={new Vector3(1, 1, 1)}
        rotation={new Euler(0, Math.PI / 1.3, 0)}
        index={0}
        isVisible={true}
      />
      <TextMenu
        text='Single'
        position={new Vector3(0.3, 0.02, 0)}
        onClick={() => {
          navigate(RoutesList.loading);
        }}
      />
      <TextMenu
        text='Multiplayer'
        position={new Vector3(0.3, -0.08, 0)}
        onClick={() => {
          console.log('isCLIIICK');
        }}
      />
      <TextMenu
        text='Help'
        position={new Vector3(0.3, -0.18, 0)}
        onClick={() => {
          setShowModal(true);
        }}
      />
      <HelpModal isShow={isShowModal} setShow={setShowModal} />
    </>
  );
};
