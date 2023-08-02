import { Html } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef } from 'react';
import { Vector3 } from 'three';
import { RefGroupType } from '../../../../utils/types/RefTypes';
import { HelpModalInterface } from '../ModalInterface';
import './styles.css';

const HelpModal: React.FC<HelpModalInterface> = (props) => {
  const modalRef = useRef<RefGroupType>(null);
  const { camera } = useThree();
  const rotation = new Vector3();

  useFrame((state) => {
    if (props.isShow) {
      modalRef.current.position
        .copy(camera.position)
        .add(camera.getWorldDirection(rotation).multiplyScalar(1));
    }
  });

  return props.isShow ? (
    <group ref={modalRef}>
      <Html as='div' center className='modal modal-pause'>
        <a href='/'>EXIT</a>

        <button
          className='exit-button'
          onClick={() => {
            props.setShow(false);
          }}
        >
          X
        </button>
      </Html>
    </group>
  ) : null;
};

export default HelpModal;
