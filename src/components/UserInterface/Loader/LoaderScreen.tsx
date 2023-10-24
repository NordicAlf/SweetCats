import { Stars, Text } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, {useEffect, useRef, useState} from 'react';
import { useNavigate } from 'react-router';
import { Vector3 } from 'three';
import { RoutesList } from '../../../core/routes';
import { RefGroupType } from '../../../utils/types/RefTypes';
import { Cat } from '../../Objects/Cat';
import {useGameStore} from "../../../store/GameStore";
import usePlayerStore from "../../../store/PlayerStore";
import {TextMenu} from "../Menu/TextMenu";
import useRoomStore from "../../../store/RoomStore";
import {RoomStatusEnum} from "../../../utils/enum/RoomStatusEnum";

export const LoaderScreen: React.FC = () => {
  const catRef = useRef<RefGroupType>(null);
  const { camera } = useThree();
  const navigate = useNavigate();
  const players = usePlayerStore((playerStore) => playerStore.users);
  const ownerPlayerId = usePlayerStore((playerStore) => playerStore.ownerPlayerId);
  const roomCreatorUserId = useRoomStore((roomStore) => roomStore.roomCreatorUserId);
  const roomStatus = useRoomStore((roomStore) => roomStore.roomStatus);
  const roomRun = useGameStore((gameStore) => gameStore.actions.roomRun);
  const [countPlayers, setCountPlayers] = useState(0);
  const [isYouAreCreatorRoom, setYouAreCreatorRoom] = useState(false);

  camera.position.set(0, 0.1, 0.5);
  camera.rotation.set(-0.2, 0, 0);

  useFrame(() => {
    catRef.current?.rotateY(0.08);
  });

  useEffect(() => {
    if (players) {
      setCountPlayers(players.length);
    }
  }, [players])

  useEffect(() => {
    if (ownerPlayerId && roomCreatorUserId) {
      if (ownerPlayerId === roomCreatorUserId) {
        setYouAreCreatorRoom(true);
      }
    }
  }, [ownerPlayerId, roomCreatorUserId])

  useEffect(() => {
    if (roomStatus === RoomStatusEnum.Run) {
      navigate(RoutesList.game);
    }
  }, [roomStatus])

  return (
    <group>
      <Cat position={new Vector3()} index={'0'} isVisible={true} ref={catRef} />
      <Stars
        radius={100}
        depth={50}
        count={5000}
        factor={4}
        saturation={0}
        fade
        speed={1}
      />
      <Text
        color='white'
        anchorX='center'
        anchorY='middle'
        scale={[0.05, 0.05, 0.05]}
        position={[0, -0.06, 0]}
      >
        Loading
      </Text>
      <Text
        color='white'
        anchorX='center'
        anchorY='middle'
        scale={[0.03, 0.03, 0.03]}
        position={[0, -0.13, 0]}
      >
        Players: {countPlayers}
      </Text>
      {isYouAreCreatorRoom && <TextMenu
        text='GO'
        position={new Vector3(0.3, 0.02, 0)}
        onClick={() => {
          roomRun();
        }}
      />}
    </group>
  );
};
