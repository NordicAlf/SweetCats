import { Ray } from '@dimforge/rapier3d-compat';
import { PointerLockControls, useKeyboardControls } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import {
  CapsuleCollider,
  RapierRigidBody,
  RigidBody,
  useRapier,
} from '@react-three/rapier';
import React, {useEffect, useRef, useState} from 'react';
import {Vector3} from 'three';
import ObjectNames from '../../utils/constants/ObjectNames';
import Settings from '../../utils/constants/Settings';
import { RefGroupType } from '../../utils/types/RefTypes';
import { Cat } from '../Objects/Cat';
import PauseModal from '../UserInterface/Modal/Pause/PauseModal';
import {ObjectInterface} from "../Objects/Interface/ObjectInterface";
import {useGameStore} from "../../store/GameStore";
import useRoomStore from "../../store/RoomStore";
import {RoomStatusEnum} from "../../utils/enum/RoomStatusEnum";
import {RoutesList} from "../../core/routes";
import {useNavigate} from "react-router";
import {Controls} from "../../utils/enum/ControlsEnum";

const ViewHeightAbovePlayer = 0.02;

export const Player = (props: ObjectInterface) => {
  const rigidBodyRef = useRef<RapierRigidBody>(null);
  const catRef = useRef<RefGroupType>(null);
  const [, getKeys] = useKeyboardControls<Controls>();
  const { camera } = useThree();
  const rapier = useRapier();
  const [isShowModal, setShowModal] = useState(false);
  const controlRef = useRef(null);
  const navigate = useNavigate();
  const playerUpdate = useGameStore((gameStore) => gameStore.actions.playerUpdate);
  const roomStatus = useRoomStore((roomStore) => roomStore.roomStatus);

  const direction = new Vector3();
  const frontVector = new Vector3();
  const sideVector = new Vector3();
  const jumpVector = new Vector3(0, Settings.jumpHeight, 0);
  const rotationVector = new Vector3();

  camera.rotation.order = 'YXZ';

  useEffect(() => {
    if (roomStatus === RoomStatusEnum.Exit) {
      navigate(RoutesList.menu);
    }
  }, [roomStatus])

  useFrame((state) => {
    const controls = getKeys();
    const velocity = rigidBodyRef.current!.linvel();

    // movement
    frontVector.set(
      0,
      0,
      Number(controls.backward) / 100 - Number(controls.forward) / 100
    );

    sideVector.set(
      Number(controls.left) / 100 - Number(controls.right) / 100,
      0,
      0
    );

    direction
      .subVectors(frontVector, sideVector)
      .normalize()
      .multiplyScalar(
        controls.run ? Settings.speed + Settings.acceleration : Settings.speed
      )
      .applyEuler(state.camera.rotation);

    if (!isShowModal) {
      rigidBodyRef.current!.setLinvel({
        x: direction.x,
        y: velocity.y,
        z: direction.z,
      }, true);

      // jumping
      // @ts-ignore
      const ray = rapier.world.castRay(
        new Ray(rigidBodyRef.current!.translation(), { x: 0, y: -1, z: 0 })
      );
      const grounded = ray && ray.collider && Math.abs(ray.toi) < 0.6;

      if (controls.jump && grounded) {
        rigidBodyRef.current!.setLinvel(jumpVector, true);
      }
    }

    // update camera
    const translation = rigidBodyRef.current!.translation();

    state.camera.position.set(
      translation.x,
      translation.y + ViewHeightAbovePlayer,
      translation.z
    );

    catRef.current!.rotation.set(0, state.camera.rotation.y - 1.75, 0);

    // if player on the move
    if (!isShowModal) {
      rotationVector.setFromEuler(catRef.current!.rotation);

      playerUpdate({
        id: props.index,
        position: rigidBodyRef.current!.translation(),
        rotation: rotationVector
      });
    }
  });

  return (
    <>
      <group>
        <RigidBody
          ref={rigidBodyRef}
          colliders={false}
          type={'dynamic'}
          scale={[5, 5, 5]}
          enabledRotations={[false, false, false]}
          mass={1}
          position={props.position}
          canSleep={false}
          name={ObjectNames.player}
        >
          <Cat
            position={new Vector3(0, -0.1, 0)}
            index={'0'}
            isVisible={true}
            ref={catRef}
          />
          <CapsuleCollider args={[0.02, 0.08]} />
        </RigidBody>
      </group>

      {!isShowModal && (
        <PointerLockControls
          ref={controlRef}
          onUnlock={() => {
            setShowModal(true);
          }}
        />
      )}
      <PauseModal isShow={isShowModal} setShow={setShowModal} />
    </>
  );
};
