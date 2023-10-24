import { Html } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, {useEffect, useRef} from 'react';
import { Vector3 } from 'three';
import { RefGroupType } from '../../../../utils/types/RefTypes';
import { ModalInterface } from '../ModalInterface';
import useRoomStore from "../../../../store/RoomStore";
import {RoomStatusEnum} from "../../../../utils/enum/RoomStatusEnum";
import {RoutesList} from "../../../../core/routes";
import {useNavigate} from "react-router";
import {useGameStore} from "../../../../store/GameStore";
import './styles.css';

const HelpModal: React.FC<ModalInterface> = (props) => {
  const modalRef = useRef<RefGroupType>(null);
  const { camera } = useThree();
  const navigate = useNavigate();
  const rotation = new Vector3();
  const roomStatus = useRoomStore((roomStore) => roomStore.roomStatus);
  const roomExit = useGameStore((gameStore) => gameStore.actions.roomExit);

  useFrame(() => {
    if (props.isShow && modalRef.current) {
      modalRef.current.position
        .copy(camera.position)
        .add(camera.getWorldDirection(rotation).multiplyScalar(1));
    }
  });

  useEffect(() => {
    if (roomStatus === RoomStatusEnum.Exit) {
      navigate(RoutesList.menu);
    }
  }, [roomStatus])

  return props.isShow ? (
    <group ref={modalRef}>
      <Html as='div' center className='modal modal-pause'>
        <a href='/' onClick={() => {
          roomExit();
        }}>EXIT</a>

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
