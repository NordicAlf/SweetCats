import { Html } from '@react-three/drei';
import React, { useRef } from 'react';
import { RefGroupType } from '../../../../utils/types/RefTypes';
import { ModalInterface } from '../ModalInterface';
import './styles.css';

const HelpModal: React.FC<ModalInterface> = (props) => {
  const modalRef = useRef<RefGroupType>(null);

  return props.isShow ? (
    <group ref={modalRef}>
      <Html as='div' center className='modal modal-help'>
        <h1>Control</h1>

        <p>Moving: WASD</p>
        <p>Jump: Space</p>
        <p>Run: LShift</p>

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
