import { Html } from '@react-three/drei';
import React, {useRef} from 'react';
import { RefGroupType } from '../../../../utils/types/RefTypes';
import { ModalInterface } from '../ModalInterface';
import './styles.css';
import {useForm} from "react-hook-form";
import {ResponseInterface, useGameStore} from "../../../../store/GameStore";
import {ResponseStatusEnum} from "../../../../utils/enum/ResponseEnum";
import {RoutesList} from "../../../../core/routes";
import {useNavigate} from "react-router";

const MultiplayerModal: React.FC<ModalInterface> = (props) => {
  const modalRef = useRef<RefGroupType>(null);
  const navigate = useNavigate();
  const {register, handleSubmit, formState: {errors}} = useForm();
  const createGameServer = useGameStore((gameStore) => gameStore.actions.createGameServer);
  const joinToGameServer = useGameStore((gameStore) => gameStore.actions.joinToGameServer);
  const response = useGameStore<ResponseInterface>((gameStore) => gameStore.response);

  const createRoom = (d: any) => {
    createGameServer({password: d.password});

    navigate(RoutesList.loading);
  }

  const joinRoom = (d: any) => {
    joinToGameServer({password: d.password});
  }

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
          <button type="submit" onClick={handleSubmit(createRoom)}>CREATE</button>
          <button type="submit" onClick={handleSubmit(joinRoom)}>JOIN</button>
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
