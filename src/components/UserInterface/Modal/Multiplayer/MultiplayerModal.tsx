import { Html } from '@react-three/drei';
import React, {useEffect, useRef} from 'react';
import { RefGroupType } from '../../../../utils/types/RefTypes';
import { ModalInterface } from '../ModalInterface';
import './styles.css';
import {useForm} from "react-hook-form";
import {ResponseInterface, useGameStore} from "../../../../store/GameStore";
import {ResponseStatusEnum} from "../../../../utils/enum/ResponseEnum";
import {RoutesList} from "../../../../core/routes";
import {useNavigate} from "react-router";
import useRoomStore from "../../../../store/RoomStore";

const MultiplayerModal: React.FC<ModalInterface> = (props) => {
  const modalRef = useRef<RefGroupType>(null);
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm();
  const createRoom = useGameStore((gameStore) => gameStore.actions.roomCreate);
  const joinRoom = useGameStore((gameStore) => gameStore.actions.roomJoin);
  const response = useGameStore<ResponseInterface>((gameStore) => gameStore.response);
  const roomId = useRoomStore((roomStore) => roomStore.roomId);

  const createRoomFunc = (d: any) => {
    createRoom({password: d.password});
  }

  const joinRoomFunc = (d: any) => {
    joinRoom({password: d.password});
  }

  useEffect(() => {
    if (roomId) {
      navigate(RoutesList.loading);
    }
  }, [roomId])

  return props.isShow ? (
    <group ref={modalRef}>
      <Html as='div' center className='modal modal-help'>
        <h1>MULTIPLAYER</h1>

        <form>
          <div className={"input-class"}>
            <input placeholder='Password' {...register("password", {required: true, minLength: 6, pattern: /^[A-Za-z0-9]+$/i})}/>
            {errors.password && errors.password.type === 'required' && <p>Password is required</p>}
            {errors.password && errors.password.type === 'minLength' && <p>Password must be at least 6 characters long</p>}
            {errors.password && errors.password.type === 'pattern' && <p>Letters and numbers are allowed</p>}
            {response && response.status === ResponseStatusEnum.error && <p>Room with this password was not found</p>}
          </div>
          <button type="submit" onClick={handleSubmit(createRoomFunc)}>CREATE</button>
          <button type="submit" onClick={handleSubmit(joinRoomFunc)}>JOIN</button>
        </form>

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

export default MultiplayerModal;
