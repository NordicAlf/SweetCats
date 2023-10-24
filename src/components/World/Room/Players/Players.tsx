import usePlayerStore from "../../../../store/PlayerStore";
import React from "react";
import {Player} from "../../../Player/Player";
import {Vector3} from "three";
import {OtherPlayer} from "../../../Player/OtherPlayer";

const Players: React.FC = () => {
  const players = usePlayerStore((playerStore) => playerStore.users);
  const ownerPlayerId = usePlayerStore((playerStore) => playerStore.ownerPlayerId);
  const playerPosition = new Vector3(10, 2, 10);

  return (
    <group>
      {ownerPlayerId &&
        <Player
          key={ownerPlayerId}
          position={playerPosition}
          index={ownerPlayerId}
          isVisible={true}
        />
      }

      {players && players.map((item) => (
        item.id !== ownerPlayerId && <OtherPlayer
          key={item.id}
          position={playerPosition}
          index={item.id}
          isVisible={true}
        />
      ))}
    </group>
  )
}

export default Players;